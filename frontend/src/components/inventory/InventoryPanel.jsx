import { getShopItemSprite } from '../../lib/itemSprites'

export function InventoryPanel({ user, setActiveSection }) {
  const items = user.inventory?.items || []
  const pokemonCount = (user.inventory?.pokemon || []).length

  return (
    <section className="panel collection-panel">
      <div className="section-heading">
        <div><span className="panel-tag">Mochila</span><h2>Inventario</h2></div>
        <span className="section-count">{items.length} objetos</span>
      </div>
      {items.length ? (
        <div className="inventory-grid">
          {items.map((item, index) => {
            const itemSprite = getShopItemSprite({ name: item })
            return (
              <article className="inventory-card" key={`${item}-${index}`}>
                {itemSprite
                  ? <img className="item-shop-sprite inventory-item-sprite" src={itemSprite} alt="" loading="lazy" />
                  : <span className="item-icon large" aria-hidden="true">✦</span>}
                <div><span>Objeto</span><h3>{item}</h3></div>
              </article>
            )
          })}
        </div>
      ) : <p className="empty-state">Tu mochila está vacía. Visita la tienda para encontrar objetos.</p>}
      <div className="inventory-note">
        <span>Equipo Pokémon</span>
        <strong>{pokemonCount} compañeros</strong>
        <button className="secondary-button" type="button" onClick={() => setActiveSection('team')}>Ver equipo</button>
      </div>
    </section>
  )
}
