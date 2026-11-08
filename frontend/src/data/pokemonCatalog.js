import { generation1 } from './pokemon/generation1.js'
import { generation2 } from './pokemon/generation2.js'
import { generation3 } from './pokemon/generation3.js'
import { generation4 } from './pokemon/generation4.js'
import { generation5 } from './pokemon/generation5.js'
import { generation6 } from './pokemon/generation6.js'
import { generation7 } from './pokemon/generation7.js'
import { generation8 } from './pokemon/generation8.js'
import { generation9 } from './pokemon/generation9.js'

const catalogOverrides = {
  garchomp: {
    moves: ['dragonclaw', 'earthquake', 'rockslide'],
    description: 'Pokémon explosivo con presión territorial y excelente control del terreno.',
  },
  dragonite: {
    moves: ['dragonclaw', 'dragonpulse', 'extremespeed', 'hurricane'],
    description: 'Versátil y ofensivo, perfecto para controlar el ritmo y cerrar combates.',
  },
  dragapult: {
    moves: ['dragondarts', 'shadowball', 'uturn'],
    description: 'Velocidad extrema y presión constante sobre la línea de turno.',
  },
  metagross: {
    moves: ['meteormash', 'ironhead', 'psychic', 'zenheadbutt', 'bulletpunch'],
    description: 'Resistente y poderoso, destaca en duelos largos y contraataques.',
  },
}

export const pokemonCatalog = [
  ...generation1,
  ...generation2,
  ...generation3,
  ...generation4,
  ...generation5,
  ...generation6,
  ...generation7,
  ...generation8,
  ...generation9,
].map((pokemon) => ({ ...pokemon, ...catalogOverrides[pokemon.id] }))

export const getPokemonById = (id) => pokemonCatalog.find((pokemon) => pokemon.id === id)

export const getPokemonByName = (name) =>
  pokemonCatalog.find((pokemon) => pokemon.name.toLowerCase() === String(name).toLowerCase())
