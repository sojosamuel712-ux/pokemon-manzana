import assert from 'node:assert/strict'
import test from 'node:test'
import { apiClient } from '../src/lib/apiClient.js'

const createToken = (expiresAt) => {
  const payload = Buffer.from(JSON.stringify({
    id: 1,
    username: 'Entrenador ñ',
    exp: Math.floor(expiresAt / 1000),
  })).toString('base64url')
  return `header.${payload}.signature`
}

test('restaura el token persistido y cierra la sesión al vencer', async () => {
  const previousStorage = globalThis.localStorage
  const previousFetch = globalThis.fetch
  const values = new Map()
  globalThis.localStorage = {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, String(value)),
    removeItem: (key) => values.delete(key),
  }

  const expiration = Date.now() + 24 * 60 * 60 * 1000
  const token = createToken(expiration)
  let loginToken = token
  let authorizationHeader
  globalThis.fetch = async (url, options) => {
    authorizationHeader = options.headers.Authorization
    const payload = url.endsWith('/auth/login')
      ? { token: loginToken, user: { id: 1, username: 'Entrenador ñ' } }
      : { id: 1, username: 'Entrenador ñ' }
    return {
      ok: true,
      status: 200,
      headers: { get: () => 'application/json' },
      json: async () => payload,
    }
  }

  try {
    await apiClient.login('Entrenador ñ', 'password')
    assert.equal(apiClient.isConfigured(), true)
    assert.equal(apiClient.getSessionExpiresAt(), Math.floor(expiration / 1000) * 1000)

    await apiClient.getProfile()
    assert.equal(authorizationHeader, `Bearer ${token}`)

    values.set('manzana-token', createToken(Date.now() - 1000))
    assert.equal(apiClient.isConfigured(), false)
    assert.equal(values.has('manzana-token'), false)

    const renewedExpiration = Date.now() + 48 * 60 * 60 * 1000
    loginToken = createToken(renewedExpiration)
    await apiClient.login('Entrenador ñ', 'password')
    assert.equal(apiClient.isConfigured(), true)
    assert.equal(apiClient.getSessionExpiresAt(), Math.floor(renewedExpiration / 1000) * 1000)
  } finally {
    if (previousStorage === undefined) delete globalThis.localStorage
    else globalThis.localStorage = previousStorage
    if (previousFetch === undefined) delete globalThis.fetch
    else globalThis.fetch = previousFetch
  }
})
