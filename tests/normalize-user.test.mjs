import assert from 'node:assert/strict'
import { normalizeStoredUser } from '../src/lib/localDb.js'

const legacyUser = {
  username: 'AshLegacy',
  password: '123456',
  guild: 'Garchomp',
  starter: 'Garchomp',
}

const normalized = normalizeStoredUser(legacyUser)

assert.equal(normalized.bayas, 100)
assert.deepEqual(normalized.mysteriousCoins, { bronze: 0, silver: 0, gold: 0, diamond: 0 })
assert.deepEqual(normalized.inventory, { items: [], pokemon: ['Garchomp'] })
assert.equal(normalized.guildRole, 'member')
assert.equal(normalized.battleWins, 0)
assert.equal(normalized.battleLosses, 0)
assert.equal(Object.hasOwn(normalized, 'password'), false)

console.log('normalize-user test: ok')
