import assert from 'node:assert/strict'
import {
  calculatePokemonStat,
  getTotalPokemonEvs,
  getPokemonNatureDescription,
  MAX_TOTAL_EVS,
  normalizePokemonRoster,
  pokemonNatureEffects,
  pokemonNatures,
} from '../src/lib/pokemonRoster.js'

assert.equal(pokemonNatures.length, 25)
assert.equal(Object.keys(pokemonNatureEffects).length, 25)
assert.equal(getPokemonNatureDescription('Firme'), 'Aumenta Ataque un 10% y reduce At. esp. un 10%.')
assert.equal(getPokemonNatureDescription('Miedosa'), 'Aumenta Velocidad un 10% y reduce Ataque un 10%.')

const neutralNatures = ['Fuerte', 'Dócil', 'Seria', 'Tímida', 'Rara']
for (const nature of neutralNatures) {
  assert.deepEqual(pokemonNatureEffects[nature], { plus: null, minus: null })
  assert.equal(getPokemonNatureDescription(nature), 'No modifica las estadísticas.')
}

assert.equal(calculatePokemonStat({ baseStat: 45, statId: 'hp', iv: 31, ev: 0, level: 50 }), 120)
assert.equal(calculatePokemonStat({ baseStat: 49, statId: 'atk', iv: 31, ev: 0, level: 50, nature: 'Firme' }), 75)
assert.equal(calculatePokemonStat({ baseStat: 49, statId: 'atk', iv: 31, ev: 0, level: 50 }), 69)

const normalizedRoster = normalizePokemonRoster({
  pokemonRoster: {
    team: [{ species: 'Bulbasaur', level: 120 }],
    pc: [{ species: 'Ivysaur', level: 0 }],
  },
})
assert.equal(normalizedRoster.team[0].level, 100)
assert.equal(normalizedRoster.pc[0].level, 1)

const cappedEvsRoster = normalizePokemonRoster({
  pokemonRoster: {
    team: [{ species: 'Bulbasaur', evs: { hp: 252, atk: 252, def: 6, spa: 252 } }],
    pc: [],
  },
})
assert.equal(MAX_TOTAL_EVS, 508)
assert.equal(getTotalPokemonEvs(cappedEvsRoster.team[0].evs), 508)
assert.equal(cappedEvsRoster.team[0].evs.spa, 0)

console.log('nature-effects test: ok')