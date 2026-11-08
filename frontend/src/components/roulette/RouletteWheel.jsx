import { getShopItemSprite } from '../../lib/itemSprites'
import { getCatalogPokemon, getShinySprite } from '../../lib/pokemonUtils'
import { getRouletteSlices } from '../../lib/roulette'

const getRouletteEntrySprite = (entry) => {
  if (entry.wheelType === 'category' && entry.prizeType === 'pokemon') {
    return getShinySprite(getCatalogPokemon('Pikachu'))
  }
  if (entry.wheelType === 'category') {
    return getShopItemSprite({ name: 'Poké Ball' })
  }
  return entry.prizeType === 'pokemon'
    ? getCatalogPokemon(entry.name)?.sprite
    : getShopItemSprite({ name: entry.name }) || getShopItemSprite({ name: 'Poké Ball' })
}

export function RouletteWheel({ entries, rotation, centerImage, centerCoin }) {
  const slices = getRouletteSlices(entries)
  const background = slices.length
    ? `conic-gradient(${slices.map((slice) => `${slice.color} ${slice.start}deg ${slice.end}deg`).join(', ')})`
    : '#d9dfcd'

  return (
    <div className="roulette-wheel-frame">
      <span className="roulette-wheel-pointer" aria-hidden="true" />
      <div className="roulette-wheel" role="img" aria-label={`Opciones: ${entries.map((entry) => entry.name).join(', ') || 'sin premios activos'}`} style={{ background, transform: `rotate(${rotation}deg)` }}>
        {slices.map((slice) => (
          <img
            className="roulette-wheel-icon"
            key={slice.id}
            src={getRouletteEntrySprite(slice)}
            alt=""
            aria-hidden="true"
            style={{
              left: `calc(50% + ${Math.cos((slice.midpoint - 90) * Math.PI / 180) * 78}px)`,
              top: `calc(50% + ${Math.sin((slice.midpoint - 90) * Math.PI / 180) * 78}px)`,
              transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
            }}
          />
        ))}
        {centerImage ? (
          <span className="roulette-wheel-center-image"><img src={centerImage} alt="" aria-hidden="true" /></span>
        ) : centerCoin ? (
          <span className="roulette-wheel-center-image roulette-wheel-center-coin" role="img" aria-label={`Moneda de ${centerCoin.label}`}>
            <span className={`currency-icon ${centerCoin.id}`} aria-hidden="true">{centerCoin.icon}</span>
          </span>
        ) : null}
      </div>
    </div>
  )
}
