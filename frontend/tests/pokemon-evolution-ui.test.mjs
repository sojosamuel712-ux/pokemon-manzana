import assert from 'node:assert/strict'
import test from 'node:test'
import { getPokemonByName } from '../src/data/pokemonCatalog.js'
import { getPokemonEvolutionOptions } from '../src/lib/pokemonEvolution.js'

test('la interfaz calcula costos, evoluciones alternativas y requisitos de objetos', () => {
  const bulbasaurOptions = getPokemonEvolutionOptions(getPokemonByName('Bulbasaur'))
  const ivysaurOptions = getPokemonEvolutionOptions(getPokemonByName('Ivysaur'))
  const magikarpOptions = getPokemonEvolutionOptions(getPokemonByName('Magikarp'))
  const eeveeOptions = getPokemonEvolutionOptions(getPokemonByName('Eevee'), ['Piedra Agua'])
  const eeveeWithIceStoneOptions = getPokemonEvolutionOptions(getPokemonByName('Eevee'), ['Piedra Hielo'])
  const scytherOptions = getPokemonEvolutionOptions(getPokemonByName('Scyther'), ['Revest. Metálico'])

  assert.deepEqual(bulbasaurOptions.map(({ target, cost }) => [target.name, cost]), [['Ivysaur', 50]])
  assert.deepEqual(ivysaurOptions.map(({ target, cost }) => [target.name, cost]), [['Venusaur', 100]])
  assert.deepEqual(magikarpOptions.map(({ target, cost }) => [target.name, cost]), [['Gyarados', 100]])
  assert.equal(eeveeOptions.length, 8)
  assert.equal(eeveeOptions.find(({ target }) => target.name === 'Vaporeon').cost, 0)
  assert.equal(eeveeOptions.find(({ target }) => target.name === 'Vaporeon').ownedItem, 'Piedra Agua')
  assert.equal(eeveeOptions.find(({ target }) => target.name === 'Vaporeon').requiredItem, 'Piedra Agua')
  assert.equal(eeveeOptions.find(({ target }) => target.name === 'Jolteon').ownedItem, '')
  assert.equal(eeveeOptions.find(({ target }) => target.name === 'Glaceon').ownedItem, '')
  assert.equal(eeveeWithIceStoneOptions.find(({ target }) => target.name === 'Glaceon').ownedItem, 'Piedra Hielo')
  assert.equal(eeveeWithIceStoneOptions.find(({ target }) => target.name === 'Glaceon').requiredItem, 'Piedra Hielo')
  assert.equal(eeveeWithIceStoneOptions.find(({ target }) => target.name === 'Glaceon').cost, 0)
  assert.equal(scytherOptions.find(({ target }) => target.name === 'Scizor').cost, 100)
  assert.equal(scytherOptions.find(({ target }) => target.name === 'Scizor').requiredItem, '')
})
