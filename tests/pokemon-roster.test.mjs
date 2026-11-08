import assert from 'node:assert/strict'
import test from 'node:test'
import {
  getPokemonGenderOptions,
  normalizePokemonRoster,
  syncPokemonRosterWithInventory,
} from '../src/lib/pokemonRoster.js'

test('sincroniza Pokémon nuevos del inventario remoto al PC sin duplicar los existentes', () => {
  const roster = normalizePokemonRoster({
    pokemonRoster: {
      team: [{ species: 'Bulbasaur' }],
      pc: [{ species: 'Pikachu' }],
    },
  })

  const syncedRoster = syncPokemonRosterWithInventory(roster, [
    { name: 'Bulbasaur', level: 5 },
    { name: 'Pikachu', level: 12 },
    { name: 'Charmander', level: 5 },
  ])

  assert.deepEqual(syncedRoster.team.map((pokemon) => pokemon.species), ['Bulbasaur'])
  assert.deepEqual(syncedRoster.pc.map((pokemon) => pokemon.species), ['Pikachu', 'Charmander'])
  assert.equal(syncedRoster.pc[1].level, 5)
})

test('sincroniza cantidades repetidas y conserva los Pokémon shiny', () => {
  const roster = normalizePokemonRoster({
    pokemonRoster: { team: [], pc: [{ species: 'Charmander' }] },
  })

  const syncedRoster = syncPokemonRosterWithInventory(roster, [
    { name: 'Charmander', level: 5 },
    { name: 'Charmander', level: 8, shiny: 1 },
  ])

  assert.equal(syncedRoster.pc.length, 2)
  assert.equal(syncedRoster.pc[1].species, 'Charmander')
  assert.equal(syncedRoster.pc[1].level, 8)
  assert.equal(syncedRoster.pc[1].shiny, true)
})

test('normaliza Pokémon de roster legado sin shiny para que puedan guardarse', () => {
  const roster = normalizePokemonRoster({
    pokemonRoster: {
      team: [{ instanceId: 'legacy-sprigatito', species: 'Sprigatito' }],
      pc: [],
    },
  })

  assert.equal(roster.team[0].shiny, false)
})

test('permite elegir género solo en especies con ambos géneros y conserva la elección', () => {
  const roster = normalizePokemonRoster({
    pokemonRoster: {
      team: [
        { instanceId: 'bulbasaur-f', species: 'Bulbasaur', gender: 'F' },
        { instanceId: 'magnemite', species: 'Magnemite', gender: 'M' },
        { instanceId: 'nidoran-m', species: 'Nidoran-M', gender: 'F' },
      ],
      pc: [],
    },
  })

  assert.deepEqual(getPokemonGenderOptions('Bulbasaur'), ['M', 'F'])
  assert.deepEqual(getPokemonGenderOptions('Magnemite'), [])
  assert.deepEqual(getPokemonGenderOptions('Nidoran-M'), [])
  assert.equal(roster.team[0].gender, 'F')
  assert.equal(roster.team[1].gender, '')
  assert.equal(roster.team[2].gender, '')
})
