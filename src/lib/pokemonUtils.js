import { pokemonCatalog } from '../data/pokemonCatalog.js'

export const getCatalogPokemon = (name) => pokemonCatalog.find((pokemon) => pokemon.name === name)

export const getNormalSprite = (pokemon) => {
  const spriteName = pokemon?.sprite?.split('/').at(-1)?.replace(/\.png$/, '')
  return spriteName ? `/models/s${spriteName}.gif` : pokemon?.sprite
}

export const getShinySprite = (pokemon) => {
  if (!pokemon || pokemon.baseSpecies) return pokemon?.sprite
  const generation = pokemon.num <= 151 ? 1 : pokemon.num <= 251 ? 2 : pokemon.num <= 386 ? 3 : pokemon.num <= 493 ? 4 : pokemon.num <= 649 ? 5 : pokemon.num <= 721 ? 6 : pokemon.num <= 809 ? 7 : pokemon.num <= 905 ? 8 : 9
  return `/sprites/generation-${generation}/s${pokemon.id}.png`
}

export const getBattleSprite = (player, orientation) => {
  const spriteKey = `${orientation}${player.shiny ? 'Shiny' : ''}`
  return player.sprites?.[spriteKey] || (player.shiny
    ? getShinySprite(getCatalogPokemon(player.species))
    : getNormalSprite(getCatalogPokemon(player.species)))
}

export const isShopEntryEnabled = (entry) => entry.enabled === undefined || entry.enabled === true || entry.enabled === 1 || entry.enabled === '1'
