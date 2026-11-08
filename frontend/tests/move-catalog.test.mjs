import assert from 'node:assert/strict'
import { getMoveById, getMovesByPokemonId, moveTypes, moveTypeNames } from '../src/data/moveCatalog.js'

const flowerTrick = getMoveById('flowertrick')
const meowscaradaMoves = await getMovesByPokemonId('meowscarada')
const garchompMoves = await getMovesByPokemonId('garchomp')
const unownMoves = await getMovesByPokemonId('unown')

assert.equal(flowerTrick.name, 'Truco Floral')
assert.equal(flowerTrick.type, 'Grass')
assert.equal(flowerTrick.category, 'Physical')
assert.equal(flowerTrick.basePower, 70)
assert.match(flowerTrick.description, /golpe crítico/i)
assert.ok(meowscaradaMoves.some((move) => move.id === 'flowertrick'))
assert.ok(!garchompMoves.some((move) => move.id === 'flowertrick'))
assert.ok(unownMoves.some((move) => move.id === 'hiddenpower'))
assert.ok(moveTypes.every((type) => moveTypeNames[type]))

console.log('move-catalog test: ok')