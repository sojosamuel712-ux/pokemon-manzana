import { getPokemonByName } from '../data/pokemonCatalog.js'

export const getPokemonGenderOptions = (species) => {
  const pokemon = getPokemonByName(species)
  if (!pokemon || ['M', 'F', 'N'].includes(pokemon.gender)) return []

  const genderRatio = pokemon.genderRatio || { M: 0.5, F: 0.5 }
  return genderRatio.M > 0 && genderRatio.F > 0 ? ['M', 'F'] : []
}

export const pokemonStats = [
  { id: 'hp', label: 'PS' },
  { id: 'atk', label: 'Ataque' },
  { id: 'def', label: 'Defensa' },
  { id: 'spa', label: 'At. esp.' },
  { id: 'spd', label: 'Def. esp.' },
  { id: 'spe', label: 'Velocidad' },
]

export const MAX_TOTAL_EVS = 508

export const getTotalPokemonEvs = (evs = {}) =>
  pokemonStats.reduce((total, stat) => total + Math.max(0, Number(evs[stat.id]) || 0), 0)

export const pokemonNatures = [
  'Fuerte', 'Huraña', 'Audaz', 'Firme', 'Pícara',
  'Osada', 'Dócil', 'Plácida', 'Agitada', 'Floja',
  'Miedosa', 'Activa', 'Seria', 'Alegre', 'Ingenua',
  'Modesta', 'Afable', 'Mansa', 'Tímida', 'Alocada',
  'Serena', 'Amable', 'Grosera', 'Cauta', 'Rara',
]

export const pokemonNatureEffects = {
  Fuerte: { plus: null, minus: null },
  Huraña: { plus: 'atk', minus: 'def' },
  Audaz: { plus: 'atk', minus: 'spe' },
  Firme: { plus: 'atk', minus: 'spa' },
  Pícara: { plus: 'atk', minus: 'spd' },
  Osada: { plus: 'def', minus: 'atk' },
  Dócil: { plus: null, minus: null },
  Plácida: { plus: 'def', minus: 'spe' },
  Agitada: { plus: 'def', minus: 'spa' },
  Floja: { plus: 'def', minus: 'spd' },
  Miedosa: { plus: 'spe', minus: 'atk' },
  Activa: { plus: 'spe', minus: 'def' },
  Seria: { plus: null, minus: null },
  Alegre: { plus: 'spe', minus: 'spa' },
  Ingenua: { plus: 'spe', minus: 'spd' },
  Modesta: { plus: 'spa', minus: 'atk' },
  Afable: { plus: 'spa', minus: 'def' },
  Mansa: { plus: 'spa', minus: 'spe' },
  Tímida: { plus: null, minus: null },
  Alocada: { plus: 'spa', minus: 'spd' },
  Serena: { plus: 'spd', minus: 'atk' },
  Amable: { plus: 'spd', minus: 'def' },
  Grosera: { plus: 'spd', minus: 'spe' },
  Cauta: { plus: 'spd', minus: 'spa' },
  Rara: { plus: null, minus: null },
}

export const getPokemonNatureDescription = (nature) => {
  const effect = pokemonNatureEffects[nature]
  if (!effect?.plus || !effect.minus) return 'No modifica las estadísticas.'

  const increasedStat = pokemonStats.find((stat) => stat.id === effect.plus)?.label
  const decreasedStat = pokemonStats.find((stat) => stat.id === effect.minus)?.label

  return `Aumenta ${increasedStat} un 10% y reduce ${decreasedStat} un 10%.`
}

export const normalizePokemonLevel = (level) => {
  const numericLevel = Number(level)
  return Number.isFinite(numericLevel)
    ? Math.max(1, Math.min(100, Math.floor(numericLevel)))
    : 50
}

export const calculatePokemonStat = ({ baseStat, statId, iv = 31, ev = 0, level = 50, nature = 'Fuerte' }) => {
  if (!Number.isFinite(Number(baseStat))) return null

  const normalizedBase = Math.max(1, Number(baseStat))
  const normalizedIv = Math.max(0, Math.min(31, Math.floor(Number(iv) || 0)))
  const normalizedEv = Math.max(0, Math.min(252, Math.floor(Number(ev) || 0)))
  const normalizedLevel = normalizePokemonLevel(level)
  const statBeforeNature = Math.floor(
    ((2 * normalizedBase + normalizedIv + Math.floor(normalizedEv / 4)) * normalizedLevel) / 100,
  )

  if (statId === 'hp') {
    return normalizedBase === 1 ? 1 : statBeforeNature + normalizedLevel + 10
  }

  const natureEffect = pokemonNatureEffects[nature]
  const natureMultiplier = natureEffect?.plus === statId
    ? 1.1
    : natureEffect?.minus === statId
      ? 0.9
      : 1

  return Math.floor((statBeforeNature + 5) * natureMultiplier)
}

const createStatValues = (value) =>
  Object.fromEntries(pokemonStats.map((stat) => [stat.id, value]))

const normalizeEvs = (evs) => {
  let remaining = MAX_TOTAL_EVS
  return Object.fromEntries(pokemonStats.map(({ id }) => {
    const requested = Number(evs[id])
    const value = Number.isFinite(requested) ? Math.max(0, Math.floor(requested)) : 0
    const normalized = Math.min(252, value, remaining)
    remaining -= normalized
    return [id, normalized]
  }))
}

const createInstanceId = () =>
  globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`

const normalizePokemon = (entry, box, index) => {
  const source = typeof entry === 'string' ? { species: entry } : entry
  const species = source?.species || source?.name
  if (!species) return null

  const catalogPokemon = getPokemonByName(species)
  const defaults = {
    instanceId: `${catalogPokemon?.id || species.toLowerCase().replaceAll(' ', '-')}-${box}-${index}`,
    species,
    nickname: '',
    shiny: false,
    gender: '',
    heldItem: '',
    nature: 'Fuerte',
    level: 50,
    ability: catalogPokemon?.abilities?.[0] || '',
    moves: (catalogPokemon?.moves || []).slice(0, 4),
    ivs: createStatValues(31),
    evs: createStatValues(0),
  }

  return {
    ...defaults,
    ...source,
    instanceId: source.instanceId || defaults.instanceId,
    species,
    nickname: source.nickname || '',
    shiny: Boolean(source.shiny),
    gender: getPokemonGenderOptions(species).includes(source.gender) ? source.gender : '',
    heldItem: source.heldItem || '',
    level: normalizePokemonLevel(source.level ?? defaults.level),
    moves: Array.isArray(source.moves) ? source.moves.slice(0, 4) : defaults.moves,
    ivs: { ...defaults.ivs, ...source.ivs },
    evs: normalizeEvs({ ...defaults.evs, ...source.evs }),
  }
}

export const createPokemonEntry = (species, shiny = false) =>
  normalizePokemon({ species, shiny, instanceId: createInstanceId() }, 'pc', 0)

export const normalizePokemonRoster = (user) => {
  const storedRoster = user?.pokemonRoster
  if (storedRoster && (Array.isArray(storedRoster.team) || Array.isArray(storedRoster.pc))) {
    const team = (storedRoster.team || [])
      .map((entry, index) => normalizePokemon(entry, 'team', index))
      .filter(Boolean)
    const pc = (storedRoster.pc || [])
      .map((entry, index) => normalizePokemon(entry, 'pc', index))
      .filter(Boolean)

    return {
      team: team.slice(0, 6),
      pc: [...pc, ...team.slice(6)],
    }
  }

  const storedNames = user?.inventory?.pokemon || []
  const legacyPokemon = (storedNames.length ? storedNames : user?.starter ? [user.starter] : [])
    .map((entry, index) => normalizePokemon(entry, 'team', index))
    .filter(Boolean)

  return {
    team: legacyPokemon.slice(0, 6),
    pc: legacyPokemon.slice(6),
  }
}

export const syncPokemonRosterWithInventory = (roster, inventory = []) => {
  const rosterCounts = new Map()
  for (const pokemon of [...roster.team, ...roster.pc]) {
    const key = pokemon.species.toLocaleLowerCase()
    rosterCounts.set(key, (rosterCounts.get(key) || 0) + 1)
  }

  const inventoryCounts = new Map()
  const additions = []
  for (const entry of inventory) {
    const species = typeof entry === 'string' ? entry : entry?.name || entry?.species
    if (!species) continue

    const key = species.toLocaleLowerCase()
    const inventoryCount = (inventoryCounts.get(key) || 0) + 1
    inventoryCounts.set(key, inventoryCount)
    if (inventoryCount <= (rosterCounts.get(key) || 0)) continue

    const pokemon = createPokemonEntry(species, typeof entry === 'object' && Boolean(entry.shiny))
    additions.push({
      ...pokemon,
      ...(typeof entry === 'object' && entry.level !== undefined
        ? { level: normalizePokemonLevel(entry.level) }
        : {}),
    })
  }

  return additions.length ? { ...roster, pc: [...roster.pc, ...additions] } : roster
}

export const flattenPokemonRoster = (roster) =>
  [...roster.team, ...roster.pc].map((pokemon) => pokemon.species)