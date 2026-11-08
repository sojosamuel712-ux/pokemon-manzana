import { moveData } from './moveData.js'
import { learnsetChunkByPokemon, learnsetChunkLoaders } from './learnsetChunks/index.js'

export const moveCatalog = moveData

export const moveTypes = [
  'Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison',
  'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark',
  'Steel', 'Fairy',
]

export const moveTypeNames = {
  Normal: 'Normal',
  Fire: 'Fuego',
  Water: 'Agua',
  Electric: 'Eléctrico',
  Grass: 'Planta',
  Ice: 'Hielo',
  Fighting: 'Lucha',
  Poison: 'Veneno',
  Ground: 'Tierra',
  Flying: 'Volador',
  Psychic: 'Psíquico',
  Bug: 'Bicho',
  Rock: 'Roca',
  Ghost: 'Fantasma',
  Dragon: 'Dragón',
  Dark: 'Siniestro',
  Steel: 'Acero',
  Fairy: 'Hada',
}

export const moveCategoryNames = {
  Physical: 'Físico',
  Special: 'Especial',
  Status: 'Estado',
}

export const getMoveById = (id) => moveCatalog[id]

export const getMovesByPokemonId = async (pokemonId) => {
  const chunkIndex = learnsetChunkByPokemon[pokemonId]
  if (chunkIndex === undefined) return []

  const { pokemonLearnsets } = await learnsetChunkLoaders[chunkIndex]()
  return (pokemonLearnsets[pokemonId] || []).map(getMoveById).filter(Boolean)
}
