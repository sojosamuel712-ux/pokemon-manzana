import { getMoveById, moveCatalog } from '../data/moveCatalog.js'
import { getTypeMultiplier } from '../data/typeChart.js'

export function calculateBattleOutcome(attacker, defender, moveOrType = attacker.types?.[0] || 'Dragon') {
  const move = typeof moveOrType === 'string'
    ? Object.values(moveCatalog).find((entry) => entry.type === moveOrType) || getMoveById(attacker.moves?.[0])
    : moveOrType
  const attackStat = move?.category === 'Special' ? attacker.baseStats?.spa : attacker.baseStats?.atk
  const defenseStat = move?.category === 'Special' ? defender.baseStats?.spd : defender.baseStats?.def
  const attackerStat = attackStat || 60
  const defenderStat = defenseStat || 60
  const multiplier = getTypeMultiplier(move?.type, defender.types)
  const stab = attacker.types?.includes(move?.type) ? 1.5 : 1
  const rawDamage = multiplier === 0
    ? 0
    : Math.max(10, Math.round((((2 * 50 / 5 + 2) * (move?.basePower || 60) * attackerStat / defenderStat) / 50 + 2) * stab * multiplier))
  const totalHp = defender.baseStats?.hp || 80
  const winner = rawDamage >= totalHp * 0.6 ? attacker.name : defender.name

  return {
    move: move?.name,
    moveType: move?.type,
    rawDamage,
    multiplier,
    stab,
    winner,
    typeEffectiveness: multiplier,
  }
}
