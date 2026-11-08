import { getBackendUrl } from './backendUrl.js'

const TOKEN_KEY = 'manzana-token'

const getTokenExpiration = (token) => {
  try {
    const encodedPayload = token.split('.')[1]
    if (!encodedPayload) return null

    const base64 = encodedPayload.replace(/-/g, '+').replace(/_/g, '/')
    const binaryPayload = atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, '='))
    const payloadBytes = Uint8Array.from(binaryPayload, (character) => character.charCodeAt(0))
    const payload = JSON.parse(new TextDecoder().decode(payloadBytes))
    const expiration = Number(payload.exp) * 1000
    return Number.isFinite(expiration) ? expiration : null
  } catch {
    return null
  }
}

const getValidToken = () => {
  const token = localStorage.getItem(TOKEN_KEY)
  if (!token) return null

  const expiresAt = getTokenExpiration(token)
  if (!expiresAt || Date.now() >= expiresAt) {
    localStorage.removeItem(TOKEN_KEY)
    return null
  }

  return token
}

const saveToken = (token) => {
  const expiresAt = token ? getTokenExpiration(token) : null
  if (!expiresAt || expiresAt <= Date.now()) {
    throw new Error('El servidor devolvió un token de sesión inválido o vencido.')
  }
  localStorage.setItem(TOKEN_KEY, token)
}

const request = async (path, options = {}) => {
  const token = getValidToken()
  const response = await fetch(getBackendUrl(`/api${path}`), {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  })
  const contentType = response.headers.get('content-type') || ''
  if (!contentType.includes('application/json')) {
    if (response.status === 404) {
      throw new Error('El servidor no reconoce esta ruta. Reinicia el backend y vuelve a intentarlo.')
    }
    throw new Error(`El servidor devolvió una respuesta no válida (HTTP ${response.status}).`)
  }

  let payload
  try {
    payload = await response.json()
  } catch {
    throw new Error('El servidor devolvió una respuesta JSON no válida.')
  }
  if (response.status === 401 && token) localStorage.removeItem(TOKEN_KEY)
  if (!response.ok) throw new Error(payload.error || `Error del servidor (HTTP ${response.status}).`)
  return payload
}

export const apiClient = {
  isConfigured() {
    return Boolean(getValidToken())
  },

  getSessionExpiresAt() {
    const token = getValidToken()
    return token ? getTokenExpiration(token) : null
  },

  async login(username, password) {
    const payload = await request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })
    saveToken(payload.token)
    return payload.user
  },

  async register(data) {
    const payload = await request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    saveToken(payload.token)
    return payload.user
  },

  logout() {
    localStorage.removeItem(TOKEN_KEY)
  },

  async addBerries() {
    return request('/economy/bayas', { method: 'POST' })
  },

  async getBattleOpponents(scope) {
    return request(`/battles/opponents?scope=${encodeURIComponent(scope)}`)
  },

  async getBattleRequests() {
    return request('/battles/requests')
  },

  async getCurrentBattle() {
    return request('/battles/current')
  },

  async startTrainingBattle(difficulty) {
    return request('/battles/training', {
      method: 'POST',
      body: JSON.stringify({ difficulty }),
    })
  },

  async abandonTrainingBattle(battleId) {
    return request(`/battles/training/${encodeURIComponent(battleId)}/abandon`, { method: 'POST' })
  },

  async forfeitBattle(battleId) {
    return request(`/battles/${encodeURIComponent(battleId)}/forfeit`, { method: 'POST' })
  },

  async getActiveBattles() {
    return request('/battles/active')
  },

  async getBattleSpectator(battleId) {
    return request(`/battles/${battleId}/spectate`)
  },

  async getBattleMessages(battleId) {
    return request(`/battles/${battleId}/messages`)
  },

  async sendBattleMessage(battleId, message) {
    return request(`/battles/${battleId}/messages`, {
      method: 'POST',
      body: JSON.stringify({ message }),
    })
  },

  async getProfile() {
    return request('/profile')
  },

  async getAccountDeletionRequest() {
    return request('/account/deletion-request')
  },

  async requestAccountDeletion(reason) {
    return request('/account/deletion-requests', {
      method: 'POST',
      body: JSON.stringify({ reason }),
    })
  },

  async savePokemonRoster(pokemonRoster) {
    return request('/profile/pokemon-roster', {
      method: 'PUT',
      body: JSON.stringify({ pokemonRoster }),
    })
  },

  async evolvePokemon(instanceId, targetSpecies) {
    return request('/profile/pokemon-evolve', {
      method: 'POST',
      body: JSON.stringify({ instanceId, targetSpecies }),
    })
  },

  async sendBattleRequest(opponentId, scope) {
    return request('/battles/requests', {
      method: 'POST',
      body: JSON.stringify({ opponentId, scope }),
    })
  },

  async acceptBattleRequest(requestId) {
    return request(`/battles/requests/${requestId}/accept`, {
      method: 'POST',
    })
  },

  async chooseBattleSwitch(battleId, switchIndex) {
    return request(`/battles/${battleId}/move`, {
      method: 'POST',
      body: JSON.stringify({ switchIndex }),
    })
  },

  async rejectBattleRequest(requestId) {
    return request(`/battles/requests/${requestId}/reject`, { method: 'POST' })
  },

  async chooseBattleMove(battleId, moveId, battleOption = '') {
    return request(`/battles/${battleId}/move`, {
      method: 'POST',
      body: JSON.stringify({ moveId, battleOption }),
    })
  },

  async buyItem(itemId) {
    return request('/shop/items', {
      method: 'POST',
      body: JSON.stringify({ itemId }),
    })
  },

  async buyPokemon(name) {
    return request('/shop/pokemon', {
      method: 'POST',
      body: JSON.stringify({ name }),
    })
  },

  async getShopCatalog() {
    return request('/shop/catalog')
  },

  async sendMessage(message) {
    return request('/chat', {
      method: 'POST',
      body: JSON.stringify({ message }),
    })
  },

  async getGlobalChat() {
    return request('/chat')
  },

  async getCurrentGuild() {
    return request('/guilds/current')
  },

  async sendGuildMessage(message) {
    return request('/guilds/messages', {
      method: 'POST',
      body: JSON.stringify({ message }),
    })
  },

  async setGuildMemberRole(username, role) {
    return request('/guilds/roles', {
      method: 'POST',
      body: JSON.stringify({ username, role }),
    })
  },

  async getUserDirectory() {
    return request('/users')
  },

  async updateUserRole(userId, roleLevel) {
    return request('/users/role', {
      method: 'POST',
      body: JSON.stringify({ userId, roleLevel }),
    })
  },

  async getAdminDashboard() {
    return request('/admin/dashboard')
  },

  async getAnnouncements() {
    return request('/announcements')
  },

  async saveAnnouncements(announcements) {
    return request('/admin/announcements', {
      method: 'POST',
      body: JSON.stringify({ announcements }),
    })
  },

  async saveShopCatalog(entries) {
    return request('/admin/shop', {
      method: 'POST',
      body: JSON.stringify({ entries }),
    })
  },

  async saveRoulettePrizes(entries) {
    return request('/admin/roulette', {
      method: 'POST',
      body: JSON.stringify({ entries }),
    })
  },

  async getRouletteConfig() {
    return request('/roulette/config')
  },

  async spinRouletteCategory() {
    return request('/roulette/category-spin', { method: 'POST' })
  },

  async spinRoulette(coinType, prizeType, selectionToken) {
    return request('/roulette/spin', {
      method: 'POST',
      body: JSON.stringify({ coinType, prizeType, selectionToken }),
    })
  },

  async convertMysteriousCoins(targetType, amount = 1) {
    return request('/economy/convert-coins', {
      method: 'POST',
      body: JSON.stringify({ targetType, amount }),
    })
  },

  async saveSanction(userId, sanctionType, reason) {
    return request('/admin/sanctions', {
      method: 'POST',
      body: JSON.stringify({ userId, sanctionType, reason }),
    })
  },

  async deleteAccount(userId) {
    return request(`/admin/users/${encodeURIComponent(userId)}`, { method: 'DELETE' })
  },
}
