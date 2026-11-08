export function AgreementsPage() {
  return (
    <main className="auth-shell agreements-shell">
      <article className="auth-card agreements-card">
        <a className="agreements-back" href="/?registro">← Volver al registro</a>
        <header className="auth-header agreements-header">
          <span className="pill">Comunidad Manzana</span>
          <h1>Acuerdos de Usuario y Normativa de la Comunidad</h1>
          <p>Versión 2026-11-08 · Leer con detenimiento</p>
        </header>

        <div className="agreements-content">
          <section>
            <h2>Exención de Responsabilidad Legal</h2>
            <p>Proyecto de Fan para Fans:</p>
            <ul>
              <li>La plataforma Pokémon Manzana es un proyecto sin fines de lucro desarrollado por y para la comunidad.</li>              
            </ul>
            <p>Derechos de Propiedad:</p>
            <ul>
              <li>No estamos afiliados, respaldados ni vinculados oficialmente con Nintendo, Game Freak o The Pokémon Company. Todos los nombres de Pokémon, marcas, sprites, imágenes y marcas registradas son propiedad de sus respectivos dueños.</li>
            </ul>
            <p>Software de código abierto y simulación de batallas:</p>
            <ul>
              <li>Pokémon Manzana utiliza la dependencia <code>pokemon-showdown</code> como simulador de batallas en el backend, con sus formatos, reglas y parámetros de combate. Esta dependencia declara licencia MIT; su código fuente y licencia se pueden consultar en <a href="https://github.com/smogon/pokemon-showdown" target="_blank" rel="noreferrer">GitHub: smogon/pokemon-showdown</a>. El aviso de licencia aplicable se incluye en el repositorio de Pokémon Manzana.</li>
              <li>La plataforma no integra el cliente completo, las animaciones ni los sonidos de Pokémon Showdown, y no es un servicio oficial de Showdown. El uso de esta dependencia no implica afiliación ni respaldo de Smogon.</li>
              <li>La licencia del simulador no cubre los sprites, gritos, música, marcas ni otros recursos de Pokémon. Su procedencia y permisos son independientes y deben respetarse antes de redistribuirlos.</li>
            </ul>
            <p>Uso de herramientas de inteligencia artificial:</p>
            <ul>
              <li>El diseño, la planificación, la selección de herramientas, la estructura y las decisiones de producto corresponden a su autor humano. Se utilizó inteligencia artificial como herramienta de apoyo en implementación y refinamiento de código, análisis de lógica, pruebas, depuración y corroboración del funcionamiento del sistema. Los resultados requieren revisión y validación humana; la IA no sustituye la responsabilidad de quienes desarrollan y administran la plataforma.</li>
            </ul>
            <p>Sin Transacciones Reales:</p>
            <ul>
              <li>Ningún elemento dentro del juego (bayas, Pokémon, objetos, medallas o rangos) puede comprarse, venderse o canjearse por dinero real. La venta de cuentas o bienes digitales de la plataforma está estrictamente prohibida.</li>
            </ul>

            <h2>Reglas de la Comunidad y Código de Conducta</h2>
            <p>Para mantener un ambiente sano e inclusivo entre los distintos gremios 
              (Garchomp, Dragapult, Dragonite, Metagross), 
              todos los entrenadores se comprometen a cumplir las siguientes normas:</p>
            <p>Respeto Mutuo:</p>
            <ul>
              <li>No se tolera el acoso, los discursos de odio, la discriminación ni el comportamiento tóxico en los chats globales, de gremio o durante las batallas.</li>
            </ul>
            <p>Juego Limpio (Anti-Cheat):</p>
            <ul>
              <li>Queda prohibido el uso de bots, scripts, modificación de paquetes de red o explotación de bugs para alterar combates, duplicar bayas o modificar estadísticas.</li>
              <li>Se permite una sola cuenta por jugador. El uso de multicuentas para inflar rangos, manipular torneos o transferirse recursos injustamente resultará en la suspensión inmediata.</li>
            </ul>
            <p>Conducta en Combates y Eventos:</p>
            <p>Desconectarse intencionadamente (rage quit) de manera reiterada en torneos oficiales afectará la reputación de tu ficha y podrá ser sancionado por la moderación del gremio.</p>
            <p>Sanciones: El incumplimiento de estas normas derivará en:</p>
            <ul>
              <li>Advertencia formal en la ficha.</li>
              <li>Silencio temporal en chats (Mute).</li>
              <li>Suspensión temporal de la cuenta.</li>
              <li>Expulsión definitiva de la plataforma (Ban).</li>
            </ul>

            <h2>Política de Privacidad y Manejo de Datos</h2>
            <p>Respetamos tu privacidad y mantenemos un modelo de recolección de datos mínimo enfocado únicamente en el funcionamiento del sistema:</p>
            <p>Información que Recopilamos:</p>
            <ul>
              <li>Datos de Cuenta: Nombre de usuario, edad registrada, gremio y Pokémon inicial.</li>
              <li>Seguridad: Contraseñas encriptadas mediante algoritmos criptográficos de una sola vía. El equipo administrativo nunca puede ver tu contraseña en texto plano.</li>
              <li>Datos del juego: Pokémon y sus configuraciones, objetos, monedas, sanciones, combates y mensajes que publiques en chats globales, de gremio o de batalla.</li>
              <li>Sesión: El navegador guarda un token de acceso que vence en 24 horas. El backend no guarda direcciones IP en la base de datos; el proveedor de alojamiento puede procesarlas en sus registros técnicos.</li>
            </ul>
            <p>Uso de la Información:</p>
            <ul>
              <li>Los datos se utilizan única y exclusivamente para gestionar tu perfil, sincronizar tus batallas, calcular clasificaciones y mostrar tu ficha en la web.</li>
            </ul>
            <p>Terceros:</p>
            <ul>
              <li>No vendemos tus datos. El proveedor de alojamiento procesa solicitudes para operar la plataforma. Los gritos de Pokémon se descargan desde GitHub (PokeAPI), que puede recibir datos técnicos de la solicitud según sus propias políticas.</li>
            </ul>
            <p>Derecho de Supresión:</p>
            <ul>
              <li>Desde la sección Cuenta puedes enviar una solicitud de supresión con un motivo. La administración la revisará en Administración &gt; Sanciones &gt; Supresión de cuenta y podrá eliminar la cuenta y sus datos asociados de la base activa. Las copias de seguridad del proveedor pueden conservar datos hasta que caduquen según su periodo de retención.</li>
            </ul>

            <p>La versión de los acuerdos aceptada y su fecha se registran al crear la cuenta. Las actualizaciones futuras deben publicarse y comunicarse por el canal oficial de la plataforma.</p>

          </section>

          <p className="agreements-note">Este aviso describe el funcionamiento previsto de la aplicación comunitaria y no sustituye asesoría legal.</p>
        </div>
      </article>
    </main>
  )
}
