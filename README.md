# Pokémon Manzana

Aplicación comunitaria construida con React, Vite, Express, SQLite y el simulador de batallas `pokemon-showdown`.

## Desarrollo local

Instala las dependencias de interfaz y backend:

```bash
npm ci
npm ci --prefix backend
```

Inicia el servidor y Vite:

```bash
JWT_SECRET=una-clave-solo-local npm run dev:full
```

Vite queda en `http://localhost:5173` y el backend en `http://localhost:3000`. El proxy de desarrollo está configurado en `vite.config.js`.

En un entorno local, una base de datos vacía recibe la cuenta de demostración `AshManzana / 123456`. **No publiques ni reutilices esa base de datos en producción.** El servidor de producción no crea la cuenta demo y rechaza una base que aún permita iniciar sesión con esa contraseña.

## Despliegue en Internet

La aplicación se puede servir desde un único origen: Express entrega el build de Vite y la API bajo el mismo dominio, junto con los recursos de batalla. El proveedor de hosting debe permitir un proceso Node persistente y un volumen de disco persistente para SQLite.

1. Asegura que la versión desplegada incluya todo el código y los recursos usados por la aplicación: `backend/`, `models/`, `items/`, `public/`, `fx/` y `src/assets/`. `models/` contiene miles de GIFs y ocupa aproximadamente 535 MB; no lo excluyas del paquete de despliegue. Los gritos se cargan directamente desde PokeAPI y no requieren una copia local.
   `models/` se versiona con Git LFS. Configura LFS antes de agregar esa carpeta al repositorio y confirma que el proveedor de hosting descargue los objetos LFS reales durante el checkout (no solo los archivos puntero). Los workflows de CI pueden usar los punteros si sus pruebas no necesitan inspeccionar el contenido binario.
2. Usa una base SQLite nueva o revisada; no subas la base local, que está excluida por `.gitignore`. Si migras datos reales, realiza un respaldo privado y cambia o elimina las credenciales de cualquier cuenta de prueba antes del despliegue.
3. Configura el comando de compilación e instalación del proveedor:

   ```bash
   npm ci
   npm ci --prefix backend
   npm run build
   ```

4. Antes de abrir la aplicación al público, configura `NODE_ENV=production` y `DATABASE_PATH` en el mismo entorno del servicio y crea la primera cuenta administrativa. El comando solo funciona cuando la base no tiene usuarios; solicita la contraseña sin mostrarla y no permite promover cuentas existentes:

   ```bash
   npm run admin:create -- AdminManzana
   ```

   Ejecuta el comando con acceso a la misma base persistente que usará el servidor. No habilites el registro público hasta que se haya creado y probado el acceso administrativo.
5. Configura estas variables en el entorno del hosting:
   - `NODE_ENV=production`
   - `PORT`: el puerto que el proveedor asigne.
   - `JWT_SECRET`: secreto aleatorio de al menos 32 caracteres; no lo compartas ni lo guardes en el repositorio.
   - `DATABASE_PATH`: ruta absoluta dentro de un volumen persistente, por ejemplo `/var/data/manzana.sqlite`.
   - `TRUST_PROXY_HOPS`: saltos de proxy confiables antes del servidor (por ejemplo, `1` si hay exactamente un proxy confiable delante). Déjalo en `0` si el servidor recibe tráfico directamente.
   - `CORS_ORIGIN`: opcional para despliegue de mismo origen. Si la interfaz se hospeda por separado, además de indicar sus orígenes permitidos aquí, configura un proxy para `/api`, `/models` y `/sprites`; el cliente usa rutas relativas.
6. Inicia el servicio con:

   ```bash
   npm start
   ```

El backend sirve el sitio compilado cuando existe `dist/`, y deja `/api`, `/models` y `/sprites` en el mismo origen. Configura HTTPS y un dominio en la plataforma de hosting. Haz respaldos periódicos del volumen de SQLite. Esta configuración usa una sola instancia de backend: no escales horizontalmente varias instancias escribiendo a la misma base SQLite; para eso se necesitaría migrar a una base de datos de servidor.

`backend/.env.example` es una referencia de variables, no se carga automáticamente. Configura las variables en el shell local o en el panel del proveedor. No uses `JWT_SECRET` de desarrollo en Internet.

## Datos y cuenta

El backend guarda usuarios, perfiles, mensajes y combates en SQLite. Las contraseñas remotas se almacenan con bcrypt; el registro valida edad, campos y contraseña en el servidor, y login/registro tienen límites de intentos por IP. Las sesiones vencen a las 24 horas y se invalidan cuando la cuenta deja de existir. La aceptación de acuerdos guarda versión y fecha. Los ajustes locales de volumen se guardan en el navegador y no se sincronizan entre dispositivos. Los datos del modo local de desarrollo usan `localStorage` y no se sincronizan con el backend.

Un usuario puede solicitar la supresión desde **Cuenta → Eliminar cuenta** tras confirmar la acción y escribir un motivo. La solicitud aparece en **Administración → Sanciones → Supresión de cuenta**, con el nombre, gremio y motivo; un administrador puede seleccionar la solicitud y confirmar el nombre exacto antes de borrar. La operación elimina en una transacción los datos relacionados de la base activa, incluidos Pokémon, objetos, monedas, partidas, sanciones, mensajes y la propia solicitud; también invalida sus sesiones. Los respaldos externos pueden retener datos hasta que se eliminen conforme al periodo de retención configurado por el proveedor.

## Combates

Los combates PvP y el entrenamiento usan `[Gen 9] Custom Game`: seis Pokémon por equipo y uno activo a la vez. El simulador resuelve turnos, movimientos, daño, cambios, efectos, PS y estados. La interfaz traduce los eventos que reconoce y mantiene visibles los eventos nuevos que aún no tienen traducción. El entrenamiento conserva su estado en la base para poder retomarlo.

Los gritos de Pokémon durante los combates se cargan directamente desde [PokeAPI/cries](https://github.com/PokeAPI/cries), usando el número de Pokédex y el archivo `latest` del repositorio. La aplicación no usa los audios locales de `Cries/`; si PokeAPI no está disponible, el grito no se reproduce. No se incluyen efectos de sonido de movimientos, efectividad o golpes críticos de Showdown.

## Licencias y recursos de terceros

La dependencia directa `pokemon-showdown` (declarada en `backend/package.json`) tiene licencia MIT y se usa como simulador en el backend. Este proyecto no integra el cliente completo de Showdown ni afirma ser un cliente o servidor oficial. El código y la licencia de la dependencia se pueden consultar en [GitHub: smogon/pokemon-showdown](https://github.com/smogon/pokemon-showdown). El aviso MIT correspondiente está en [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md).

Según la información del responsable del proyecto, `models/`, `items/`, `public/` y `fx/` provienen de Pokémon Showdown y se redistribuyen bajo MIT; los GIF de efectividad de movimientos y los archivos de `src/assets/` son propios. Los audios de PokeAPI se consumen remotamente y no se copian al despliegue. Consulta [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md) para el detalle; la licencia MIT del software no transfiere derechos sobre las marcas Pokémon.

### Git LFS

Los GIF de `models/` usan Git LFS. Después de instalar Git LFS, `git lfs track "models/**"` debe estar configurado antes del primer `git add`; revisa los archivos administrados con `git lfs ls-files`. Al clonar y necesites los GIF completos, ejecuta `git lfs pull`. Para publicar cambios, usa el flujo normal `git add`, `git commit` y `git push`; Git LFS sube los objetos asociados durante el push.

## Acuerdos

La página de acuerdos explica el uso del simulador de batalla, la procedencia de su código y la asistencia de IA en el desarrollo. La utilización de Pokémon y recursos relacionados no implica afiliación ni respaldo oficial de Nintendo, Game Freak, The Pokémon Company o Smogon.

## Comprobaciones

```bash
npm run lint
npm run build
npm test
```

GitHub Actions ejecuta estas tres comprobaciones en cada push y pull request mediante `.github/workflows/ci.yml`.
