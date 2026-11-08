import { getPokemonByName } from '../data/pokemonCatalog.js'
import evolutionItemNames from '../data/evolutionItemNames.json' with { type: 'json' }

export const normalizeEvolutionItemName = (name) =>
  String(name || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')

const getEvolutionStages = (pokemon, path = new Set()) => {
  if (!pokemon || path.has(pokemon.id)) return 0

  const nextPath = new Set(path)
  nextPath.add(pokemon.id)
  const descendants = (pokemon.evos || [])
    .map((species) => getPokemonByName(species))
    .filter(Boolean)

  return 1 + Math.max(0, ...descendants.map((next) => getEvolutionStages(next, nextPath)))
}

const getEvolutionRank = (pokemon) => {
  let rank = 0
  let current = pokemon
  const visited = new Set([pokemon.id])

  while (current?.prevo) {
    const previous = getPokemonByName(current.prevo)
    if (!previous || visited.has(previous.id)) break
    visited.add(previous.id)
    rank += 1
    current = previous
  }

  return rank
}

const getRequiredItemName = (pokemon) => {
  if (!pokemon?.evoItem) return ''
  return evolutionItemNames[normalizeEvolutionItemName(pokemon.evoItem)] || pokemon.evoItem
}

const isItemOnlyEvolution = (pokemon) =>
  pokemon?.evoType === 'useItem' &&
  Boolean(pokemon.evoItem) &&
  !pokemon.evoCondition &&
  !pokemon.evoLevel &&
  !pokemon.evoMove

export const getPokemonEvolutionOptions = (pokemon, inventoryItems = []) => {
  if (!pokemon) return []

  const totalStages = getEvolutionRank(pokemon) + getEvolutionStages(pokemon)
  const isThreeStageLine = totalStages >= 3
  const isFirstStage = getEvolutionRank(pokemon) === 0
  const cost = isThreeStageLine && isFirstStage ? 50 : 100

  return (pokemon.evos || [])
    .map((species) => {
      const target = getPokemonByName(species)
      if (!target) return null

      const itemOnlyEvolution = isItemOnlyEvolution(target)
      const requiredItem = itemOnlyEvolution ? getRequiredItemName(target) : ''
      const requiredItemId = normalizeEvolutionItemName(itemOnlyEvolution ? target.evoItem : '')
      const requiredItemIndex = requiredItem
        ? inventoryItems.findIndex((item) => {
            const normalizedItem = normalizeEvolutionItemName(item)
            return normalizedItem === requiredItemId ||
              normalizedItem === normalizeEvolutionItemName(requiredItem)
          })
        : -1

      return {
        target,
        cost: itemOnlyEvolution ? 0 : cost,
        requiredItem,
        ownedItem: requiredItemIndex >= 0 ? inventoryItems[requiredItemIndex] : '',
        requirement: target.evoCondition || (target.evoLevel ? `Nivel ${target.evoLevel}` : ''),
      }
    })
    .filter(Boolean)
}
