import { GuildBadge } from '../shared'
import manzanaLogo from '../../assets/manzana-logo.png'

export function Topbar({ user, currentGuildRole, onLogout }) {
  return (
    <header className="topbar">
      <div className="brand-wrap">
        <span className="brand-mark" aria-hidden="true">
          <img src={manzanaLogo} alt="" />
        </span>
        <div>
          <strong>Pokémon Manzana</strong>
        </div>
      </div>

      <div className="topbar-status">
        <span className="online-dot" />
        <span>Servidor de la comunidad</span>
        <GuildBadge guild={user.guild} role={currentGuildRole} compact />
        <span className="topbar-trainer">{user.username}</span>
        <button type="button" className="ghost-button" onClick={onLogout}>
          Salir
        </button>
      </div>
    </header>
  )
}
