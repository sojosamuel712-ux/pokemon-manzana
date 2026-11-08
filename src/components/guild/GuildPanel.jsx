import { getGuildRoleLabel, GuildBadge } from '../shared'

export function GuildPanel({
  user,
  guildData,
  guildInfo,
  notice,
  isLoading,
  chatInput,
  setChatInput,
  sendMessage,
  changeMemberRole,
}) {
  return (
    <section className="panel collection-panel guild-community-panel">
      <header className="guild-community-header">
        <span className="guild-emblem-large"><img src={guildInfo.logo} alt={`Emblema del gremio ${user.guild}`} /></span>
        <div className="guild-community-title">
          <span className="panel-tag">Comunidad de entrenadores</span>
          <h2>{guildData.name}</h2>
          <p>{guildInfo.description}</p>
        </div>
        <div className="guild-self-rank">
          <GuildBadge guild={user.guild} role={guildData.role} />
          <span>Tu rango</span>
          <strong>{getGuildRoleLabel(guildData.role)}</strong>
        </div>
      </header>
      {notice && <p className="guild-notice" role="status">{notice}</p>}
      <div className="guild-community-grid">
        <div className="guild-community-left">
          <section className="guild-info-section">
            <div className="guild-section-title"><span className="panel-tag">Identidad</span><h3>Sobre el gremio</h3></div>
            <p className="guild-description">{guildInfo.description}</p>
            <div className="guild-rules-section">
              <h4>Reglas de convivencia</h4>
              <ol className="guild-rules">{guildInfo.rules.map((rule, index) => <li key={`${user.guild}-rule-${index}`}><span>{String(index + 1).padStart(2, '0')}</span>{rule}</li>)}</ol>
            </div>
          </section>
          <details className="guild-members-section guild-members-disclosure">
            <summary className="guild-section-title">
              <span><span className="panel-tag">La comunidad</span><strong>Miembros</strong></span>
              <span className="section-count">{guildData.members.length}</span>
            </summary>
            {isLoading ? <p className="guild-loading">Actualizando miembros...</p> : (
              <div className="guild-members-list">
                {guildData.members.map((member) => (
                  <article className={`guild-member-row${member.username === user.username ? ' is-current-member' : ''}`} key={member.username}>
                    <GuildBadge guild={member.guild || user.guild} role={member.role} />
                    <div className="guild-member-copy">
                      <strong>{member.username}{member.username === user.username ? ' · Tú' : ''}</strong>
                      <span>{getGuildRoleLabel(member.role)}</span>
                    </div>
                    {guildData.role === 'leader' && member.role !== 'leader' && (
                      <button type="button" className="guild-role-button" onClick={() => changeMemberRole(member)}>
                        {member.role === 'elite' ? 'Retirar rango' : 'Nombrar Alto Mando'}
                      </button>
                    )}
                  </article>
                ))}
              </div>
            )}
          </details>
        </div>
        <section className="guild-chat-section">
          <div className="guild-section-title">
            <div><span className="panel-tag">Solo miembros</span><h3>Chat del gremio</h3></div>
            <span className="guild-chat-lock" aria-label="Chat privado del gremio">●</span>
          </div>
          <div className="guild-chat-list" aria-live="polite">
            {guildData.messages.map((message, index) => (
              <article className={message.system ? 'guild-message system-message' : 'guild-message'} key={`${message.user}-${index}`}>
                <div className="guild-message-author">
                  {!message.system && <GuildBadge guild={user.guild} role={message.guildRole || 'member'} compact />}
                  <strong>{message.user}</strong>
                  {!message.system && <span>{getGuildRoleLabel(message.guildRole || 'member')}</span>}
                </div>
                <p>{message.message}</p>
              </article>
            ))}
          </div>
          <form className="guild-chat-form" onSubmit={sendMessage}>
            <input type="text" maxLength={140} value={chatInput} onChange={(event) => setChatInput(event.target.value)} placeholder="Escribe a tu gremio..." aria-label="Mensaje para el gremio" />
            <button type="submit" className="primary-button" disabled={!chatInput.trim()}>Enviar</button>
          </form>
          <span className="guild-chat-limit">Máximo 140 caracteres</span>
        </section>
      </div>
    </section>
  )
}
