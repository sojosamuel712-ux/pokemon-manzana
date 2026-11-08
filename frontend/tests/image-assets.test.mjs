import assert from 'node:assert/strict'
import test from 'node:test'
import { pokemonCatalog } from '../src/data/pokemonCatalog.js'
import { getNormalSprite, getShinySprite } from '../src/lib/pokemonUtils.js'

test('todos los sprites shiny del catálogo apuntan al endpoint de recursos del backend', () => {
  const species = pokemonCatalog.filter((pokemon) => !pokemon.baseSpecies)
  const missing = species.filter((pokemon) => !getShinySprite(pokemon)?.includes('/sprites/generation-'))

  assert.deepEqual(missing.map((pokemon) => pokemon.name), [])
})

test('las miniaturas normales del equipo apuntan al endpoint de modelos del backend', () => {
  for (const name of ['Garchomp', 'Dragonite']) {
    const pokemon = pokemonCatalog.find((entry) => entry.name === name)
    const spritePath = getNormalSprite(pokemon)

    assert.ok(spritePath?.includes('/models/'), `${name} debe tener una ruta de sprite del backend`)
  }
})
