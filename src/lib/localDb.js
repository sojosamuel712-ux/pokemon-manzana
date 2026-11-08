const STORAGE_KEY = 'manzana-db-v1'

const createDefaultShopCatalog = () => [
  { id: 'item-baya-ziu', category: 'item', name: 'Baya Ziu', price: 35, description: 'Recupera energía y mejora la resistencia en combate.', rarity: 'Común', quantity: 10, enabled: true },
  { id: 'item-pocion-minorista', category: 'item', name: 'Poción minorista', price: 80, description: 'Repara pequeños daños antes del enfrentamiento.', rarity: 'Rara', quantity: 10, enabled: true },
  { id: 'item-vara-relicario', category: 'item', name: 'Vara de relicario', price: 120, description: 'Objeto especial para entrenadores de la comunidad.', rarity: 'Épica', quantity: 5, enabled: true },
  { id: 'pokemon-dragonite', category: 'pokemon', name: 'Dragonite', price: 240, description: 'Disponible en la semana comunitaria.', rarity: 'Épica', quantity: 1, enabled: true },
  { id: 'pokemon-dragapult', category: 'pokemon', name: 'Dragapult', price: 260, description: 'Disponible en la semana comunitaria.', rarity: 'Legendaria', quantity: 1, enabled: true },
  { id: 'pokemon-metagross', category: 'pokemon', name: 'Metagross', price: 220, description: 'Disponible en la semana comunitaria.', rarity: 'Rara', quantity: 1, enabled: true },
]

export const normalizeStoredUser = (user = {}) => {
  const starter = user.starter || 'Garchomp'
  const safeUser = { ...user }
  delete safeUser.password
  const inventory = {
    items: Array.isArray(user.inventory?.items) ? user.inventory.items.filter(Boolean) : [],
    pokemon: Array.isArray(user.inventory?.pokemon) ? user.inventory.pokemon.filter(Boolean) : [],
  }

  if (!inventory.pokemon.length && starter) {
    inventory.pokemon = [starter]
  }

  return {
    ...safeUser,
    username: String(user.username || 'Entrenador'),
    guild: user.guild || 'Garchomp',
    starter,
    guildRole: user.guildRole || 'member',
    bayas: Number.isFinite(Number(user.bayas)) ? Number(user.bayas) : 100,
    mysteriousCoins: {
      bronze: Number.isFinite(Number(user.mysteriousCoins?.bronze)) ? Number(user.mysteriousCoins.bronze) : 0,
      silver: Number.isFinite(Number(user.mysteriousCoins?.silver)) ? Number(user.mysteriousCoins.silver) : 0,
      gold: Number.isFinite(Number(user.mysteriousCoins?.gold)) ? Number(user.mysteriousCoins.gold) : 0,
      diamond: Number.isFinite(Number(user.mysteriousCoins?.diamond)) ? Number(user.mysteriousCoins.diamond) : 0,
    },
    inventory,
    battleWins: Number.isFinite(Number(user.battleWins)) ? Number(user.battleWins) : 0,
    battleLosses: Number.isFinite(Number(user.battleLosses)) ? Number(user.battleLosses) : 0,
    createdAt: user.createdAt || new Date().toISOString(),
  }
}

const buildDefaultDb = () => ({
  users: [],
  shopCatalog: createDefaultShopCatalog(),
  chat: [],
  announcements: [
    'Liga de verano abierta: gana bayas extra si participas esta semana.',
    'Tienda semanal renovada con Pokémon de temporada y objetos exclusivos.',
    'La comunidad recomienda revisar los acuerdos de privacidad antes del registro.',
  ],
})

const safeRead = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      const seeded = buildDefaultDb()
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded))
      return seeded
    }

    const parsed = JSON.parse(raw)
    let needsMigration = false
    const normalizedUsers = Array.isArray(parsed.users)
      ? parsed.users.map((user) => {
        if (Object.hasOwn(user, 'password')) needsMigration = true
        return normalizeStoredUser(user)
      })
      : []
    const seedMessages = new Set([
      'Admin|Bienvenidos a la beta de Pokémon Manzana.',
      'Mika|Ya registré a mi equipo Garchomp para la liga.',
      'Draco|Hoy abren la tienda semanal con bayas premium.',
    ])
    const chat = Array.isArray(parsed.chat) ? parsed.chat.filter((message) => {
      const isSeedMessage = seedMessages.has(`${message?.user}|${message?.message}`)
      if (isSeedMessage) needsMigration = true
      return !isSeedMessage
    }) : []

    const normalized = {
      ...parsed,
      users: normalizedUsers,
      shopCatalog: Array.isArray(parsed.shopCatalog) ? parsed.shopCatalog : createDefaultShopCatalog(),
      chat,
      announcements: Array.isArray(parsed.announcements) ? parsed.announcements : [],
      guildChats: parsed.guildChats || {},
    }
    if (needsMigration) localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized))
    return normalized
  } catch {
    const seeded = buildDefaultDb()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded))
    return seeded
  }
}

export const localDb = {
  read() {
    return safeRead()
  },

  write(nextDb) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextDb))
    return nextDb
  },

  getUser(username) {
    const db = this.read()
    return (db.users || []).find((user) => user.username.toLowerCase() === String(username).toLowerCase()) || null
  },

  getShopCatalog() {
    return this.read().shopCatalog
  },

  saveAnnouncements(announcements) {
    const db = this.read()
    db.announcements = announcements
    this.write(db)
    return db.announcements
  },

  saveShopCatalog(entries) {
    const db = this.read()
    db.shopCatalog = entries
    this.write(db)
    return db.shopCatalog
  },

  reserveShopItem(itemId) {
    const db = this.read()
    const entry = db.shopCatalog.find((item) => String(item.id) === String(itemId) && item.enabled !== false && Number(item.enabled) !== 0)
    if (!entry || Number(entry.quantity) < 1) return null

    entry.quantity -= 1
    this.write(db)
    return db
  },

  upsertUser(user) {
    const db = this.read()
    const normalized = normalizeStoredUser(user)
    const index = db.users.findIndex(
      (item) => item.username.toLowerCase() === String(normalized.username).toLowerCase(),
    )

    if (index >= 0) {
      db.users[index] = normalizeStoredUser({ ...db.users[index], ...normalized })
    } else {
      db.users.unshift(normalizeStoredUser({ ...normalized, createdAt: new Date().toISOString() }))
    }

    this.write(db)
    return db.users[index >= 0 ? index : 0]
  },

  addChatMessage(message) {
    const db = this.read()
    db.chat = [...db.chat, message]
    this.write(db)
    return db.chat
  },

  updateAnnounces(announcements) {
    const db = this.read()
    db.announcements = announcements
    this.write(db)
    return db.announcements
  },
}

export const normalizeLocalDb = () => {
  const db = safeRead()
  const nextDb = {
    ...db,
    users: (db.users || []).map((user) => normalizeStoredUser(user)),
    shopCatalog: Array.isArray(db.shopCatalog) ? db.shopCatalog : createDefaultShopCatalog(),
    chat: Array.isArray(db.chat) ? db.chat : [],
    announcements: Array.isArray(db.announcements) ? db.announcements : [],
    guildChats: db.guildChats || {},
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextDb))
  return nextDb
}

export const seedDefaultUsers = () => {
  const db = safeRead()
  if (!db.users?.length) {
    db.users = buildDefaultDb().users
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db))
  }
  return db
}
