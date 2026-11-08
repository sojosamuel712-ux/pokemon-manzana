# Pokémon Manzana — Frontend

Este repositorio contiene la interfaz React/Vite. La API y los recursos de batalla viven en el repositorio público [pokemon-manzana-backend](https://github.com/sojosamuel712-ux/pokemon-manzana-backend). La separación evita que Netlify descargue los modelos almacenados con Git LFS.

## Desarrollo local

Instala dependencias y ejecuta la interfaz desde `frontend/`:

```bash
cd frontend
npm ci
npm run dev
```

Inicia el backend por separado en otra terminal desde el repositorio `pokemon-manzana-backend`:

```bash
npm ci
npm start
```

La interfaz queda en `http://localhost:5173`; Vite reenvía `/api`, `/models` y `/sprites` a `http://localhost:3000`. Para el servidor local define un `JWT_SECRET` de desarrollo antes de iniciar el backend.

## Despliegue en Netlify

El archivo `netlify.toml` fija `frontend/` como directorio base y configura `npm ci && npm run build` con `dist` como directorio de publicación. Deja vacío el directorio de funciones. En Netlify configura:

- `VITE_API_BASE_URL`: URL pública del backend, sin `/` al final, por ejemplo `https://api.ejemplo.com`.

En el servicio backend configura `CORS_ORIGIN` con el origen exacto del sitio Netlify, como `https://mi-sitio.netlify.app`. Separa con comas los orígenes adicionales que quieras permitir. La API y los sprites usan esa URL; los GIF y sprites no se descargan ni se publican desde este repositorio.

## Comprobaciones

```bash
cd frontend
npm run lint
npm run build
npm test
```

Los detalles de despliegue del servidor, SQLite, Git LFS y creación segura del administrador están en el [README del backend](https://github.com/sojosamuel712-ux/pokemon-manzana-backend).

## Cuenta y datos

La interfaz permite solicitar la supresión desde **Cuenta → Eliminar cuenta**. La solicitud se gestiona en **Administración → Sanciones → Supresión de cuenta**. El backend elimina en una transacción los datos relacionados de la base activa; las copias externas pueden retener datos hasta que se eliminen conforme al periodo de retención del proveedor.

Los gritos de Pokémon se consumen directamente desde [PokeAPI/cries](https://github.com/PokeAPI/cries). La interfaz no incluye una copia local de esos audios.

## Licencias y recursos

Consulta [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md). Los GIF de efectividad fueron diseñados por el responsable del proyecto; los recursos de Showdown y los permisos reportados se detallan allí. Pokémon Manzana no está afiliado ni respaldado oficialmente por Nintendo, Game Freak, The Pokémon Company o Smogon.
