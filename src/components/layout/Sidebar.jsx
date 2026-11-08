import { GuildBadge } from '../shared'
import { PokemonSprite } from '../shared'
import { getCatalogPokemon } from '../../lib/pokemonUtils'

const menuItems = [
  { id: 'dashboard', label: 'Inicio', icon: '⌂' },
  { id: 'team', label: 'Equipo', icon: '◈' },
  { id: 'inventory', label: 'Inventario', icon: '▤' },
  { id: 'shop', label: 'Tienda', icon: '✦' },
  { id: 'events', label: 'Eventos', icon: '✳' },
  { id: 'roulette', label: 'Ruleta', icon: '◉' },
  { id: 'guild', label: 'Gremio', icon: '⚑' },
  { id: 'battle', label: 'Combates', icon: '⚔' },
  { id: 'chat', label: 'Chat', icon: '◌' },
  { id: 'account', label: 'Cuenta', icon: '◎' },
]

const rouletteCoins = [
  { id: 'bronze', label: 'Bronce', icon: '●' },
  { id: 'silver', label: 'Plata', icon: '●' },
  { id: 'gold', label: 'Oro', icon: '●' },
  { id: 'diamond', label: 'Diamante', icon: '◆' },
]

export function Sidebar({ user, activeSection, setActiveSection, currentGuildRole, loadGuildData }) {
  const visibleMenuItems = user.roleLevel === 1 
    ? [...menuItems, { id: 'admin', label: 'Administración', icon: '⚙' }]
    : menuItems

  return (
    <aside className="sidebar">
      <div className="panel profile-panel">
        <div className="profile-heading">
          <span className="profile-sprite">
            <PokemonSprite pokemon={getCatalogPokemon(user.starter)} alt={user.starter} />
          </span>
          <div>
            <span className="panel-tag">Entrenador</span>
            <h2>{user.username}</h2>
            <p className="guild-line">
              <GuildBadge guild={user.guild} role={currentGuildRole} compact /> Gremio <strong>{user.guild}</strong>
            </p>
          </div>
        </div>
        <div className="profile-facts">
          <div><span>Victorias</span><strong>{user.battleWins}</strong></div>
          <div><span>PC total</span><strong>{(user.inventory?.pokemon || []).length}</strong></div>
          <div className="profile-starter"><span>Inicial</span><strong>{user.starter}</strong></div>
        </div>
      </div>

      <div className="panel menu-panel">
        <div className="menu-heading">
          <span className="panel-tag">Tu aventura</span>
          <h3>Menú</h3>
        </div>
        <nav className="game-menu" aria-label="Menú principal">
          {visibleMenuItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => {
                setActiveSection(item.id)
                if (item.id === 'guild') loadGuildData()
              }}
            >
              <span className="menu-icon" aria-hidden="true">{item.icon}</span>
              <span>{item.label}</span>
              {activeSection === item.id && <span className="menu-caret" aria-hidden="true">›</span>}
            </button>
          ))}
        </nav>
        <div className="currency-strip">
          <div><span className="currency-icon berry">●</span><span>Bayas</span><strong>{user.bayas}</strong></div>
          {rouletteCoins.map((coin) => (
            <div key={coin.id}>
              <span className={`currency-icon ${coin.id}`}>{coin.icon}</span>
              <span>{coin.label}</span>
              <strong>{user.mysteriousCoins[coin.id] || 0}</strong>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
