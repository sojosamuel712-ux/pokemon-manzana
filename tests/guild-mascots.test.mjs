import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import test from 'node:test'
import { pokemonCatalog } from '../src/data/pokemonCatalog.js'
import { getShinySprite } from '../src/lib/pokemonUtils.js'
import { guildMascotPokemon } from '../src/lib/guildMascots.js'

test('cada gremio tiene un Pokémon visible en el chat global con sprite local', () => {
  assert.deepEqual(Object.keys(guildMascotPokemon).sort(), ['Dragapult', 'Dragonite', 'Garchomp', 'Metagross'])

  for (const [guild, pokemonName] of Object.entries(guildMascotPokemon)) {
    const pokemon = pokemonCatalog.find((entry) => entry.name === pokemonName)
    assert.ok(pokemon, `${guild} debe tener su Pokémon en el catálogo`)
    const sprite = getShinySprite(pokemon)
    assert.ok(sprite, `${guild} debe tener una ruta de sprite`)
    assert.ok(existsSync(new URL(`../public${sprite}`, import.meta.url)), `${guild}: falta ${sprite}`)
  }
})
