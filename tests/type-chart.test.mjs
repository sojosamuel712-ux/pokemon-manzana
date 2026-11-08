import assert from 'node:assert/strict'
import { calculateBattleOutcome } from '../src/lib/battleEngine.js'
import { getTypeMultiplier, typeChart } from '../src/data/typeChart.js'

assert.equal(Object.keys(typeChart).length, 19)
assert.equal(getTypeMultiplier('Fire', ['Grass']), 2)
assert.equal(getTypeMultiplier('Fire', ['Grass', 'Steel']), 4)
assert.equal(getTypeMultiplier('Electric', ['Ground']), 0)
assert.equal(getTypeMultiplier('Ground', ['Flying', 'Steel']), 0)

const immuneAttack = calculateBattleOutcome(
  { name: 'Pikachu', types: ['Electric'], baseStats: { atk: 100 } },
  { name: 'Garchomp', types: ['Ground'], baseStats: { def: 100, hp: 100 } },
  { name: 'Impactrueno', type: 'Electric', category: 'Physical', basePower: 100 },
)

assert.equal(immuneAttack.multiplier, 0)
assert.equal(immuneAttack.rawDamage, 0)

console.log('type-chart test: ok')