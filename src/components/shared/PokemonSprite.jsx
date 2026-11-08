import { getNormalSprite, getShinySprite } from '../../lib/pokemonUtils'

export function PokemonSprite({ pokemon, shiny = false, alt = '', ...imageProps }) {
  const normalSprite = getNormalSprite(pokemon)
  const shinySprite = shiny ? getShinySprite(pokemon) : normalSprite

  return (
    <img
      {...imageProps}
      src={shinySprite}
      alt={alt}
      onError={(event) => {
        const fallbacks = shiny ? [normalSprite, pokemon?.sprite] : [pokemon?.sprite]
        if (event.currentTarget.dataset.fallbackPrimary !== String(shinySprite || '')) {
          event.currentTarget.dataset.fallbackPrimary = String(shinySprite || '')
          event.currentTarget.dataset.fallbackIndex = '0'
        }
        let fallbackIndex = Number(event.currentTarget.dataset.fallbackIndex || 0)
        while (fallbackIndex < fallbacks.length) {
          const fallback = fallbacks[fallbackIndex]
          fallbackIndex += 1
          event.currentTarget.dataset.fallbackIndex = String(fallbackIndex)
          if (fallback && fallback !== event.currentTarget.getAttribute('src')) {
            event.currentTarget.setAttribute('src', fallback)
            return
          }
        }
        imageProps.onError?.(event)
      }}
    />
  )
}
