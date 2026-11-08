import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'
import { pokemonCatalog } from '../src/data/pokemonCatalog.js'
import { getNormalSprite, getShinySprite } from '../src/lib/pokemonUtils.js'

const publicDirectory = fileURLToPath(new URL('../public/', import.meta.url))
const modelsDirectory = fileURLToPath(new URL('../models/', import.meta.url))

test('todos los sprites shiny del catálogo apuntan a imágenes locales', () => {
  const species = pokemonCatalog.filter((pokemon) => !pokemon.baseSpecies)
  const missing = species.filter((pokemon) => {
    const spritePath = getShinySprite(pokemon)
    return !spritePath || !existsSync(join(publicDirectory, spritePath.replace(/^\/+/, '')))
  })

  assert.deepEqual(missing.map((pokemon) => pokemon.name), [])
})

test('las miniaturas normales del equipo usan los sprites locales disponibles', () => {
  for (const name of ['Garchomp', 'Dragonite']) {
    const pokemon = pokemonCatalog.find((entry) => entry.name === name)
    const spritePath = getNormalSprite(pokemon)
    const fileName = spritePath?.replace(/^\/models\//, '')

    assert.ok(spritePath, `${name} debe tener una ruta de sprite`)
    assert.ok(fileName && existsSync(join(modelsDirectory, fileName)), `${name}: falta ${spritePath}`)
  }
})
