import { getShopItemSprite } from '../../lib/itemSprites'
import { getCatalogPokemon, getShinySprite } from '../../lib/pokemonUtils'
import { rouletteCoins, coinExchanges } from '../../lib/roulette'
import { RouletteWheel } from './RouletteWheel'

export function RoulettePanel({
  user,
  config,
  coinType,
  setCoinType,
  category,
  setCategory,
  prizeOptions,
  categoryRotation,
  prizeRotation,
  notice,
  result,
  pending,
  spinCategory,
  spin,
  convertCoins,
}) {
  const selectedCoin = rouletteCoins.find((coin) => coin.id === coinType)
  const categoryCenterSprite = getShinySprite(getCatalogPokemon('Pikachu'))

  return (
    <section className="panel roulette-panel">
      <span className="panel-tag">Suerte del entrenador</span>
      <h2>Ruleta de la comunidad</h2>
      <p>Primero gira para elegir entre objetos y Pokémon. Después, cada moneda tiene su propia ruleta de premios de esa categoría.</p>
      <RouletteWheel entries={config.categories} rotation={categoryRotation} centerImage={categoryCenterSprite || getShopItemSprite({ name: 'Poké Ball' })} />
      {!category ? (
        <button type="button" className="primary-button" disabled={pending || !config.categories.length} onClick={spinCategory}>{pending ? 'Girando...' : 'Girar categoría'}</button>
      ) : (
        <>
          <p className="roulette-category-result">Categoría elegida: <strong>{category === 'item' ? 'Objetos' : 'Pokémon'}</strong></p>
          <div className="roulette-coin-picker" aria-label="Selecciona una moneda">
            {rouletteCoins.map((coin) => (
              <button key={coin.id} type="button" className={coinType === coin.id ? 'active' : ''} aria-pressed={coinType === coin.id} onClick={() => { setCoinType(coin.id); setCategory(category) }}>
                <span className={`currency-icon ${coin.id}`}>{coin.icon}</span>{coin.label}<strong>{user.mysteriousCoins[coin.id] || 0}</strong>
              </button>
            ))}
          </div>
          <RouletteWheel entries={prizeOptions} rotation={prizeRotation} centerCoin={selectedCoin} />
          <div className="roulette-prize-list" aria-label="Premios disponibles">
            {prizeOptions.map((prize) => <span key={prize.id}>{prize.name}{prize.amount > 1 ? ` ×${prize.amount}` : ''} · {prize.rarity}</span>)}
            {!prizeOptions.length && <span>No hay premios activos para esta categoría y moneda.</span>}
          </div>
          <button type="button" className="primary-button" disabled={pending || !prizeOptions.length || !(user.mysteriousCoins[coinType] > 0)} onClick={spin}>
            {pending ? 'Girando...' : `Girar por 1 moneda de ${selectedCoin.label}`}
          </button>
          <button type="button" className="secondary-button" disabled={pending} onClick={() => { setCategory(null) }}>Elegir categoría otra vez</button>
        </>
      )}
      {notice && <p className="roulette-notice" role="status">{notice}</p>}
      {result && (
        <article className="roulette-result" role="status">
          <strong>{result.prize.name}{result.prize.amount > 1 ? ` ×${result.prize.amount}` : ''}</strong>
          <span>{result.category === 'item' ? 'Objeto' : 'Pokémon'} de la ruleta de {selectedCoin.label.toLowerCase()}</span>
        </article>
      )}
      <div className="roulette-exchanges">
        <h3>Canjear monedas</h3>
        <div>
          {coinExchanges.map((exchange) => {
            const source = rouletteCoins.find((coin) => coin.id === exchange.source)
            const target = rouletteCoins.find((coin) => coin.id === exchange.target)
            return (
              <button
                key={exchange.target}
                type="button"
                className="secondary-button"
                disabled={pending || user.mysteriousCoins[exchange.source] < exchange.rate}
                onClick={() => convertCoins(exchange.target)}
              >
                {exchange.rate} {source.label} → 1 {target.label}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
