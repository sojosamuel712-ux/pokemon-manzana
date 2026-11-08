import { PokemonSprite } from '../shared'
import { getShopItemSprite } from '../../lib/itemSprites'
import { getCatalogPokemon } from '../../lib/pokemonUtils'

export function ShopPanel({
  user,
  category,
  setCategory,
  items,
  pokemon,
  ownedPokemonNames,
  pendingPurchase,
  buyItem,
  buyPokemon,
}) {
  return (
    <section className="panel shop-panel">
      <div className="shop-header">
        <div><span className="panel-tag">Tienda semanal</span><h3>Catálogo de la comunidad</h3></div>
        <strong>{user.bayas} bayas disponibles</strong>
      </div>
      <div className="shop-category-tabs" role="tablist" aria-label="Categorías de tienda">
        <button type="button" role="tab" aria-selected={category === 'items'} className={category === 'items' ? 'active' : ''} onClick={() => setCategory('items')}>Objetos <span>{items.length}</span></button>
        <button type="button" role="tab" aria-selected={category === 'pokemon'} className={category === 'pokemon' ? 'active' : ''} onClick={() => setCategory('pokemon')}>Pokémon <span>{pokemon.length}</span></button>
      </div>
      {category === 'items' ? (
        <div className="shop-grid">
          {items.map((item) => (
            <article className="shop-card" key={item.id}>
              <div className="shop-card-image">{getShopItemSprite(item) ? <img src={getShopItemSprite(item)} alt="" loading="lazy" /> : <span className="item-icon large" aria-hidden="true">✦</span>}</div>
              <div className="shop-card-info"><h3>{item.name}</h3><p>{item.description}</p></div>
              <div className="shop-card-buy"><strong>{item.price} bayas</strong><small>{item.quantity} disponibles</small><button type="button" className="primary-button" disabled={pendingPurchase || Number(item.quantity) < 1} onClick={() => buyItem(item)}>Comprar</button></div>
            </article>
          ))}
          {!items.length && <p className="empty-state">No hay objetos disponibles esta semana.</p>}
        </div>
      ) : (
        <div className="shop-grid">
          {pokemon.map((entry) => {
            const owned = ownedPokemonNames.has(entry.name.toLowerCase())
            return (
              <article className="shop-card" key={entry.id}>
                <div className="shop-card-image"><PokemonSprite pokemon={getCatalogPokemon(entry.name)} shiny={entry.shiny} alt={entry.name} /></div>
                <div className="shop-card-info"><h3>{entry.name}{entry.shiny ? ' ✨' : ''}</h3><p>{entry.rarity}</p></div>
                <div className="shop-card-buy"><strong>{entry.price} bayas</strong><small>{entry.quantity} disponibles</small><button type="button" className="primary-button" disabled={pendingPurchase || owned || Number(entry.quantity) < 1} onClick={() => buyPokemon(entry)}>{owned ? 'Ya lo tienes' : 'Adoptar'}</button></div>
              </article>
            )
          })}
          {!pokemon.length && <p className="empty-state">No hay Pokémon disponibles esta semana.</p>}
        </div>
      )}
    </section>
  )
}
