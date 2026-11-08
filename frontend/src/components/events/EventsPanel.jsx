export function EventsPanel({ announcements }) {
  return (
    <section className="panel collection-panel">
      <div className="section-heading">
        <div><span className="panel-tag">Novedades</span><h2>Eventos de la comunidad</h2></div>
        <span className="event-spark" aria-hidden="true">✳</span>
      </div>
      <div className="event-list">
        {announcements.map((announcement, index) => (
          <article className="event-card" key={announcement.id ?? index}>
            <span className="event-index">{String(index + 1).padStart(2, '0')}</span>
            {announcement.imageData && <img className="event-image" src={announcement.imageData} alt={`Imagen del anuncio ${index + 1}`} />}
            <div><span>Tablón del gremio</span>{announcement.message && <p>{announcement.message}</p>}</div>
          </article>
        ))}
        {!announcements.length && <p className="empty-state">Todavía no hay anuncios publicados.</p>}
      </div>
    </section>
  )
}
