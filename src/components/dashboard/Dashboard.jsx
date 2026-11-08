import { PokemonSprite } from '../shared'
import { getCatalogPokemon } from '../../lib/pokemonUtils'

export function Dashboard({ user, setActiveSection }) {
  return (
    <section className="panel hero-panel welcome-panel">
      <div className="welcome-copy">
        <span className="panel-tag">Centro de entrenador</span>
        <h2>¡Bienvenido, {user.username}!</h2>
        <p>
          Tu próxima aventura comienza aquí. Explora la comunidad, prepara a {user.starter}{' '}
          y representa al gremio {user.guild} en cada combate.
        </p>
        <button type="button" className="primary-button" onClick={() => setActiveSection('team')}>
          Ver mi equipo
        </button>
      </div>
      <div className="welcome-portrait">
        <PokemonSprite pokemon={getCatalogPokemon(user.starter)} alt={user.starter} />
        <span>Tu compañero de aventura</span>
      </div>
    </section>
  )
}
