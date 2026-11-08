import { GuildBadge, PokemonSprite } from '../shared'
import { getCatalogPokemon } from '../../lib/pokemonUtils'
import { guildMascotPokemon } from '../../lib/guildMascots'

export function ChatPanel({ messages, input, setInput, onSubmit, notice }) {
  return (
    <section className="panel chat-panel">
      <div className="section-heading">
        <div><span className="panel-tag">Comunidad</span><h2>Chat global</h2></div>
      </div>
      {notice && <p className="guild-notice" role="status">{notice}</p>}
      <div className="chat-list" aria-live="polite">
        {messages.map((message, index) => (
          <article className="chat-message" key={`${message.user}-${index}`}>
            <div className="chat-message-author">
              {(guildMascotPokemon[message.guild] || message.starter) && (
                <PokemonSprite
                  className="chat-user-sprite"
                  pokemon={getCatalogPokemon(guildMascotPokemon[message.guild] || message.starter)}
                  shiny
                  alt={`Pokémon del gremio ${message.guild}`}
                  loading="lazy"
                />
              )}
              <GuildBadge guild={message.guild} role={message.guildRole} compact />
              <strong>{message.user}</strong>
            </div>
            <p>{message.message}</p>
          </article>
        ))}
      </div>
      <form className="chat-form" onSubmit={onSubmit}>
        <input type="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Escribe un mensaje..." aria-label="Mensaje del chat global" />
        <button type="submit" className="primary-button" disabled={!input.trim()}>Enviar</button>
      </form>
    </section>
  )
}
