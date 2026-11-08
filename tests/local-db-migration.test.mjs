import assert from 'node:assert/strict'
import test from 'node:test'
import { localDb } from '../src/lib/localDb.js'

test('elimina contraseñas y mensajes de prueba heredados de localStorage', () => {
  const previousStorage = globalThis.localStorage
  const values = new Map([['manzana-db-v1', JSON.stringify({
    users: [{ username: 'LocalTrainer', password: 'legacy-password', starter: 'Pikachu' }],
    chat: [
      { user: 'Admin', message: 'Bienvenidos a la beta de Pokémon Manzana.' },
      { user: 'Mika', message: 'Ya registré a mi equipo Garchomp para la liga.' },
      { user: 'Draco', message: 'Hoy abren la tienda semanal con bayas premium.' },
      { user: 'LocalTrainer', message: 'Mensaje del usuario.' },
    ],
  })]])
  globalThis.localStorage = {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, String(value)),
  }

  try {
    const database = localDb.read()
    assert.equal(Object.hasOwn(database.users[0], 'password'), false)
    assert.deepEqual(database.chat, [{ user: 'LocalTrainer', message: 'Mensaje del usuario.' }])
    const stored = JSON.parse(values.get('manzana-db-v1'))
    assert.equal(Object.hasOwn(stored.users[0], 'password'), false)
    assert.equal(stored.chat.length, 1)
  } finally {
    if (previousStorage === undefined) delete globalThis.localStorage
    else globalThis.localStorage = previousStorage
  }
})
