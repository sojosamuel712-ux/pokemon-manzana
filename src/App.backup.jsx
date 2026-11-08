import { useEffect, useRef, useState } from 'react'
import './App.css'
import { pokemonCatalog } from './data/pokemonCatalog'
import { itemCatalog } from './data/itemCatalog.js'
import {
  getMoveById,
  getMovesByPokemonId,
  moveCategoryNames,
  moveTypeNames,
  moveTypes,
} from './data/moveCatalog'
import { guildCatalog, guildNames } from './data/guildCatalog'
import manzanaLogo from './assets/manzana-logo.png'
import { apiClient } from './lib/apiClient'
import { localDb } from './lib/localDb'
import { getShopItemDescription, getShopItemSprite } from './lib/itemSprites'
import { getPokemonEvolutionOptions } from './lib/pokemonEvolution.js'
import { formatBattleLog, statuses as battleStatuses } from './lib/battlePresentation.js'
import {
  createPokemonEntry,
  calculatePokemonStat,
  flattenPokemonRoster,
  getTotalPokemonEvs,
  getPokemonNatureDescription,
  MAX_TOTAL_EVS,
  normalizePokemonRoster,
  pokemonNatures,
  pokemonStats,
  syncPokemonRosterWithInventory,
} from './lib/pokemonRoster'

const starterIds = [
  'bulbasaur', 'charmander', 'squirtle',
  'chikorita', 'cyndaquil', 'totodile',
  'treecko', 'torchic', 'mudkip',
  'turtwig', 'chimchar', 'piplup',
  'snivy', 'tepig', 'oshawott',
  'chespin', 'fennekin', 'froakie',
  'rowlet', 'litten', 'popplio',
  'grookey', 'scorbunny', 'sobble',
  'sprigatito', 'fuecoco', 'quaxly',
]

const starterTypeIcons = { Grass: '🌿', Fire: '🔥', Water: '💧' }

const starters = starterIds
  .map((id) => pokemonCatalog.find((pokemon) => pokemon.id === id))
  .filter(Boolean)
  .map((pokemon) => ({
    name: pokemon.name,
    type: pokemon.types.join(' / '),
    icon: starterTypeIcons[pokemon.types[0]],
  }))

const rouletteCoins = [
  { id: 'bronze', label: 'Bronce', icon: '●' },
  { id: 'silver', label: 'Plata', icon: '●' },
  { id: 'gold', label: 'Oro', icon: '●' },
  { id: 'diamond', label: 'Diamante', icon: '◆' },
]

const rouletteWheels = [
  { id: 'category', label: 'Categoría', title: 'Ruleta inicial: objetos o Pokémon' },
  { id: 'bronze', label: 'Bronce', title: 'Ruleta de bronce', coinType: 'bronze' },
  { id: 'silver', label: 'Plata', title: 'Ruleta de plata', coinType: 'silver' },
  { id: 'gold', label: 'Oro', title: 'Ruleta de oro', coinType: 'gold' },
  { id: 'diamond', label: 'Diamante', title: 'Ruleta de diamante', coinType: 'diamond' },
]

const rouletteWheelColors = ['#f6d45b', '#e9674d', '#74b5d3', '#8fc578', '#d58fb0', '#8a9ed0']
const getRouletteSlices = (entries) => {
  const totalWeight = entries.reduce((total, entry) => total + Number(entry.probability || 1), 0)
  let angle = 0
  return entries.map((entry, index) => {
    const start = angle
    angle += (Number(entry.probability || 1) / totalWeight) * 360
    return { ...entry, start, end: angle, midpoint: (start + angle) / 2, color: rouletteWheelColors[index % rouletteWheelColors.length] }
  })
}

const getRouletteRotation = (slices, selectedId, currentRotation) => {
  const selectedSlice = slices.find((slice) => String(slice.id) === String(selectedId))
  if (!selectedSlice) return currentRotation + 1800
  const remainder = ((360 - selectedSlice.midpoint - (currentRotation % 360)) % 360 + 360) % 360
  return currentRotation + 1800 + remainder
}

const RouletteWheel = ({ entries, rotation, centerImage, centerCoin }) => {
  const slices = getRouletteSlices(entries)
  const background = slices.length
    ? `conic-gradient(${slices.map((slice) => `${slice.color} ${slice.start}deg ${slice.end}deg`).join(', ')})`
    : '#d9dfcd'

  return (
    <div className="roulette-wheel-frame">
      <span className="roulette-wheel-pointer" aria-hidden="true" />
      <div
        className="roulette-wheel"
        role="img"
        aria-label={`Opciones: ${entries.map((entry) => entry.name).join(', ') || 'sin premios activos'}`}
        style={{ background, transform: `rotate(${rotation}deg)` }}
      >
        {slices.map((slice) => (
          <img
            className="roulette-wheel-icon"
            key={slice.id}
            src={getRouletteEntrySprite(slice)}
            alt=""
            aria-hidden="true"
            style={{
              left: `calc(50% + ${Math.cos((slice.midpoint - 90) * Math.PI / 180) * 78}px)`,
              top: `calc(50% + ${Math.sin((slice.midpoint - 90) * Math.PI / 180) * 78}px)`,
              transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
            }}
          />
        ))}
        {centerImage ? (
          <span className="roulette-wheel-center-image"><img src={centerImage} alt="" aria-hidden="true" /></span>
        ) : centerCoin ? (
          <span className="roulette-wheel-center-image roulette-wheel-center-coin" role="img" aria-label={`Moneda de ${centerCoin.label}`}>
            <span className={`currency-icon ${centerCoin.id}`} aria-hidden="true">{centerCoin.icon}</span>
          </span>
        ) : null}
      </div>
    </div>
  )
}

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

const getCatalogPokemon = (name) => pokemonCatalog.find((pokemon) => pokemon.name === name)
const roulettePokeballSprite = getShopItemSprite({ name: 'Poké Ball' })
const getRouletteEntrySprite = (entry) => entry.prizeType === 'pokemon'
  ? getCatalogPokemon(entry.name)?.sprite || getCatalogPokemon('Pikachu')?.sprite
  : getShopItemSprite(entry) || roulettePokeballSprite
const getBattleSprite = (player, orientation) => {
  const spriteKey = `${orientation}${player.shiny ? 'Shiny' : ''}`
  return player.sprites?.[spriteKey] || (player.shiny
    ? getShinySprite(getCatalogPokemon(player.species))
    : getCatalogPokemon(player.species)?.sprite)
}

const getBattleStatusName = (status) => battleStatuses[status] || status

const isShopEntryEnabled = (entry) => entry.enabled === undefined || entry.enabled === true || entry.enabled === 1 || entry.enabled === '1'
const getShinySprite = (pokemon) => {
  if (!pokemon || pokemon.baseSpecies) return pokemon?.sprite
  const generation = pokemon.num <= 151 ? 1 : pokemon.num <= 251 ? 2 : pokemon.num <= 386 ? 3 : pokemon.num <= 493 ? 4 : pokemon.num <= 649 ? 5 : pokemon.num <= 721 ? 6 : pokemon.num <= 809 ? 7 : pokemon.num <= 905 ? 8 : 9
  return `/sprites/generation-${generation}/s${pokemon.id}.png`
}

function PokemonSprite({ pokemon, shiny = false, alt = '', ...imageProps }) {
  const normalSprite = pokemon?.sprite
  const shinySprite = shiny ? getShinySprite(pokemon) : normalSprite

  return (
    <img
      {...imageProps}
      src={shinySprite}
      alt={alt}
      onError={(event) => {
          if (shiny && event.currentTarget.dataset.fallback !== 'true') {
            event.currentTarget.dataset.fallback = 'true'
            event.currentTarget.setAttribute('src', normalSprite)
          }
        else imageProps.onError?.(event)
      }}
    />
  )
}

const getCurrentDb = () => localDb.read()
const normalizeAnnouncements = (entries = []) => entries.map((entry, index) => typeof entry === 'string'
  ? { id: `local-${index}`, message: entry, imageData: '' }
  : { ...entry, id: entry.id ?? `announcement-${index}`, message: entry.message || '', imageData: entry.imageData || '' })

const getGuildRoleLabel = (role) => {
  if (role === 'leader') return 'Líder'
  if (role === 'elite') return 'Alto Mando'
  return 'Miembro'
}

function GuildBadge({ guild, role = 'member', compact = false }) {
  const guildInfo = guildCatalog[guild]
  const badgeLabel = `${getGuildRoleLabel(role)} · ${guild || 'Sin gremio'}`

  return (
    <span className={`guild-badge guild-badge-${role}${compact ? ' compact' : ''}`} title={badgeLabel} aria-label={badgeLabel}>
      {role === 'leader' ? <span aria-hidden="true">★</span> : role === 'elite' ? <span aria-hidden="true">✦</span> : <img src={guildInfo?.logo} alt="" />}
    </span>
  )
}

function AgreementsPage() {
  return (
    <main className="auth-shell agreements-shell">
      <article className="auth-card agreements-card">
        <a className="agreements-back" href="/?registro">← Volver al registro</a>
        <header className="auth-header agreements-header">
          <span className="pill">Comunidad Manzana</span>
          <h1>Acuerdos de Usuario y Normativa de la Comunidad</h1>
          <p>Leer con detenimiento</p>
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
              <li>Registros de Actividad: Historial de partidas, inventario de bayas/objetos, medallas e dirección IP (utilizada exclusivamente para prevenir multicuentas y mantener la seguridad).</li>
            </ul>
            <p>Uso de la Información:</p>
            <ul>
              <li>Los datos se utilizan única y exclusivamente para gestionar tu perfil, sincronizar tus batallas, calcular clasificaciones y mostrar tu ficha en la web.</li>
            </ul>
            <p>Terceros:</p>
            <ul>
            <li>Jamás compartiremos, venderemos ni distribuiremos tus datos personales a ninguna entidad externa.
              A exepcion de los servicios de alojamiento y seguridad que permiten el funcionamiento de la plataforma, los cuales están sujetos a sus propias políticas de privacidad.</li>
            </ul>
            <p>Derecho de Supresión:</p>
            <ul>
              <li>Cualquier entrenador puede solicitar la eliminación completa y permanente de su cuenta y ficha de usuario contactando a la administración del servidor.</li>
            </ul>

            <p>Ten en cuenta que los acuerdos y politicas puedes actualizarse con el pasar del tiempo, por ende se recomienda revisar periodicamente el documento para estar enterado de las actualizaciones.</p>

          </section>

          <p className="agreements-note">Este aviso describe el funcionamiento previsto de la aplicación comunitaria y no sustituye asesoría legal.</p>
        </div>
      </article>
    </main>
  )
}

function App() {
  const [isSessionRestoring, setIsSessionRestoring] = useState(() => apiClient.isConfigured())
  const [authMode, setAuthMode] = useState(() =>
    new URLSearchParams(window.location.search).has('registro') ? 'register' : 'login',
  )
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeSection, setActiveSection] = useState('dashboard')
  const [dbState, setDbState] = useState(() => getCurrentDb())
  const [announcements, setAnnouncements] = useState(() => normalizeAnnouncements(getCurrentDb().announcements))
  const [user, setUser] = useState(null)
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    age: 16,
    starter: 'Garchomp',
    guild: 'Garchomp',
    acceptTerms: false,
  })
  const [chatInput, setChatInput] = useState('')
  const [chatMessages, setChatMessages] = useState(() => getCurrentDb().chat)
  const [guildData, setGuildData] = useState(null)
  const [guildChatInput, setGuildChatInput] = useState('')
  const [guildNotice, setGuildNotice] = useState('')
  const [isGuildLoading, setIsGuildLoading] = useState(false)
  const [battleScope, setBattleScope] = useState('guild')
  const [battleOpponents, setBattleOpponents] = useState([])
  const [battleRequests, setBattleRequests] = useState([])
  const [activeBattles, setActiveBattles] = useState([])
  const [activeBattle, setActiveBattle] = useState(null)
  const [spectatedBattleId, setSpectatedBattleId] = useState(null)
  const [battleMessages, setBattleMessages] = useState([])
  const [battleChatInput, setBattleChatInput] = useState('')
  const [battleSoundEnabled, setBattleSoundEnabled] = useState(false)
  const battleAudioContext = useRef(null)
  const [battleOption, setBattleOption] = useState('')
  const [dismissedBattleId, setDismissedBattleId] = useState(null)
  const [battleNotice, setBattleNotice] = useState('')
  const [battleBusy, setBattleBusy] = useState(false)
  const [rewardRefreshBattleId, setRewardRefreshBattleId] = useState(null)
  const [shopCategory, setShopCategory] = useState('items')
  const [shopCatalog, setShopCatalog] = useState(() => localDb.getShopCatalog())
  const [pendingShopPurchase, setPendingShopPurchase] = useState(null)
  const [userDirectory, setUserDirectory] = useState([])
  const [roleNotice, setRoleNotice] = useState('')
  const [isUserDirectoryLoading, setIsUserDirectoryLoading] = useState(false)
  const [adminDashboard, setAdminDashboard] = useState({ announcements: [], shopCatalog: [], roulettePrizes: [], sanctions: [], users: [] })
  const [battleMode, setBattleMode] = useState('pvp')
  const [trainingDifficulty, setTrainingDifficulty] = useState('easy')
  const [adminAnnouncements, setAdminAnnouncements] = useState([])
  const [activeAdminRouletteWheel, setActiveAdminRouletteWheel] = useState('category')
  const [rouletteCoinType, setRouletteCoinType] = useState('bronze')
  const [rouletteConfig, setRouletteConfig] = useState({ categories: [], prizes: [] })
  const [rouletteCategory, setRouletteCategory] = useState(null)
  const [rouletteSelectionToken, setRouletteSelectionToken] = useState('')
  const [categoryWheelRotation, setCategoryWheelRotation] = useState(0)
  const [prizeWheelRotation, setPrizeWheelRotation] = useState(0)
  const [rouletteNotice, setRouletteNotice] = useState('')
  const [rouletteResult, setRouletteResult] = useState(null)
  const [roulettePending, setRoulettePending] = useState(false)
  const [pokemonSaving, setPokemonSaving] = useState(false)
  const [evolvingPokemonId, setEvolvingPokemonId] = useState(null)
  const [adminForm, setAdminForm] = useState({ shopEntries: '', rouletteEntries: '', sanctionUserId: '', sanctionType: 'warning', sanctionReason: '' })
  const [shopEntryForm, setShopEntryForm] = useState({ category: 'item', catalogId: '', price: 50, quantity: 10, rarity: 'Común', shiny: false })
  const [shopProductSearch, setShopProductSearch] = useState('')
  const [roulettePrizeSearches, setRoulettePrizeSearches] = useState({})
  const [activePokemonBox, setActivePokemonBox] = useState('team')
  const [selectedPokemonId, setSelectedPokemonId] = useState(null)
  const [pokemonDraft, setPokemonDraft] = useState(null)
  const [pokemonNotice, setPokemonNotice] = useState('')

  const pokemonRoster = normalizePokemonRoster(user)
  const battleRoster = pokemonRoster.team
  const visibleGuildUsers = dbState.users.filter((entry) => entry.guild === user?.guild)
  const currentGuildRole = guildData?.role || user?.guildRole || 'member'
  const ownedPokemonNames = new Set(
    [...pokemonRoster.team, ...pokemonRoster.pc].map((pokemon) => pokemon.species.toLowerCase()),
  )
  const visiblePokemon = activePokemonBox === 'team' ? pokemonRoster.team : pokemonRoster.pc
  const selectedPokemon = [...pokemonRoster.team, ...pokemonRoster.pc].find(
    (pokemon) => pokemon.instanceId === selectedPokemonId,
  )
  const pokemonDetails = selectedPokemon && pokemonDraft?.instanceId === selectedPokemon.instanceId
    ? pokemonDraft
    : selectedPokemon
  const selectedCatalogPokemon = getCatalogPokemon(pokemonDetails?.species)
  const pokemonEvolutionOptions = getPokemonEvolutionOptions(
    selectedCatalogPokemon,
    user?.inventory?.items || [],
  )
  const shopItems = shopCatalog.filter((entry) => entry.category === 'item' && isShopEntryEnabled(entry))
  const shopPokemon = shopCatalog.filter((entry) => entry.category === 'pokemon' && isShopEntryEnabled(entry))
  const availablePokemonForShop = pokemonCatalog.filter((pokemon) => !pokemon.baseSpecies)
  const selectedShopPokemon = availablePokemonForShop.find((pokemon) => pokemon.id === shopEntryForm.catalogId)
  const pokemonMoveGroups = moveTypes
    .map((type) => ({
      type,
      moves: getMovesByPokemonId(selectedCatalogPokemon?.id).filter((move) => move.type === type),
    }))
    .filter((group) => group.moves.length)
  const currentGuildInfo = guildCatalog[user?.guild] || guildCatalog.Garchomp
  const roulettePrizeOptions = rouletteConfig.prizes.filter((entry) => entry.coinType === rouletteCoinType && entry.prizeType === rouletteCategory)
  const roleLevelLabels = {
    0: 'Tester del sistema',
    1: 'Admin',
    2: 'Líder de gremio',
    3: 'Alto Mando',
    4: 'Usuario normal',
  }

  const loadUserDirectory = async () => {
    if (!user || user.roleLevel > 1) return
    setIsUserDirectoryLoading(true)
    try {
      const payload = await apiClient.getUserDirectory()
      setUserDirectory(payload.users || [])
      setRoleNotice('')
    } catch (error) {
      setRoleNotice(error.message)
    } finally {
      setIsUserDirectoryLoading(false)
    }
  }

  const loadAdminDashboard = async () => {
    if (!user || user.roleLevel !== 1) return
    try {
      const payload = await apiClient.getAdminDashboard()
      setAdminDashboard(payload)
      setAdminAnnouncements(normalizeAnnouncements(payload.announcements || []))
      setShopCatalog(payload.shopCatalog || [])
      setRoleNotice('')
    } catch (error) {
      setRoleNotice(error.message)
    }
  }

  useEffect(() => {
    if (user && user.roleLevel <= 1) {
      loadUserDirectory()
      if (user.roleLevel === 1) loadAdminDashboard()
    }
  }, [user])

  useEffect(() => {
    if (!user || activeSection !== 'events') return undefined
    let isActive = true
    const loadAnnouncements = async () => {
      try {
        const entries = apiClient.isConfigured()
          ? await apiClient.getAnnouncements()
          : localDb.read().announcements
        if (isActive) setAnnouncements(normalizeAnnouncements(entries || []))
      } catch {
        if (isActive) setAnnouncements(normalizeAnnouncements(localDb.read().announcements))
      }
    }
    loadAnnouncements()
    return () => { isActive = false }
  }, [user, activeSection])

  useEffect(() => {
    if (!user || activeSection !== 'shop') return undefined
    let isActive = true
    const refreshShopCatalog = async () => {
      try {
        const entries = apiClient.isConfigured()
          ? (await apiClient.getShopCatalog()).shopCatalog
          : localDb.getShopCatalog()
        if (isActive) setShopCatalog(entries || [])
      } catch {
        if (isActive) setShopCatalog(localDb.getShopCatalog())
      }
    }

    refreshShopCatalog()
    const refreshInterval = window.setInterval(refreshShopCatalog, 5000)
    return () => {
      isActive = false
      window.clearInterval(refreshInterval)
    }
  }, [user, activeSection])

  useEffect(() => {
    if (!user || activeSection !== 'roulette') return undefined
    let isActive = true
    apiClient.getRouletteConfig()
      .then((config) => {
        if (isActive) setRouletteConfig(config)
      })
      .catch((error) => {
        if (isActive) setRouletteNotice(error.message)
      })
    return () => { isActive = false }
  }, [user, activeSection])

  useEffect(() => {
    if (!user || activeSection !== 'battle') return undefined
    let isActive = true
    const refreshBattleLobby = async () => {
      if (!apiClient.isConfigured()) return
      try {
        const [opponentsPayload, requestsPayload, activeBattlesPayload, battlePayload] = await Promise.all([
          apiClient.getBattleOpponents(battleScope),
          apiClient.getBattleRequests(),
          apiClient.getActiveBattles(),
          spectatedBattleId
            ? apiClient.getBattleSpectator(spectatedBattleId)
            : apiClient.getCurrentBattle(),
        ])
        if (!isActive) return
        setBattleOpponents(opponentsPayload.opponents || [])
        setBattleRequests(requestsPayload.requests || [])
        setActiveBattles(activeBattlesPayload.battles || [])
        const nextBattle = battlePayload.battle
        if (nextBattle && nextBattle.id !== dismissedBattleId) {
          setBattleMode(nextBattle.isTraining ? 'training' : 'pvp')
        }
        if (spectatedBattleId) {
          setActiveBattle(nextBattle || null)
          if (nextBattle) {
            const messagesPayload = await apiClient.getBattleMessages(nextBattle.id)
            if (isActive) setBattleMessages(messagesPayload.messages || [])
          } else {
            setSpectatedBattleId(null)
            setBattleMessages([])
          }
        } else {
          setActiveBattle(nextBattle?.id === dismissedBattleId ? null : nextBattle)
          if (nextBattle) {
            const messagesPayload = await apiClient.getBattleMessages(nextBattle.id)
            if (isActive) setBattleMessages(messagesPayload.messages || [])
          } else {
            setBattleMessages([])
          }
        }
        if (!spectatedBattleId && nextBattle?.status === 'finished' && nextBattle.id !== rewardRefreshBattleId) {
          setRemoteUser(await apiClient.getProfile())
          setRewardRefreshBattleId(nextBattle.id)
        }
      } catch (error) {
        if (isActive && spectatedBattleId && error.message === 'Ese combate ya no está activo o no existe.') {
          setSpectatedBattleId(null)
          setActiveBattle(null)
          setBattleMessages([])
          setBattleNotice('El combate que estabas viendo terminó.')
        } else if (isActive) {
          setBattleNotice(error.message)
        }
      }
    }

    refreshBattleLobby()
    const refreshInterval = window.setInterval(refreshBattleLobby, 3000)
    return () => {
      isActive = false
      window.clearInterval(refreshInterval)
    }
  }, [user, activeSection, battleScope, dismissedBattleId, rewardRefreshBattleId, spectatedBattleId])

  const openBattleAsSpectator = async (battleId) => {
    setBattleBusy(true)
    setBattleNotice('')
    try {
      const [battlePayload, messagesPayload] = await Promise.all([
        apiClient.getBattleSpectator(battleId),
        apiClient.getBattleMessages(battleId),
      ])
      setSpectatedBattleId(battleId)
      setActiveBattle(battlePayload.battle)
      setBattleMessages(messagesPayload.messages || [])
      setBattleOption('')
    } catch (error) {
      setBattleNotice(error.message)
    } finally {
      setBattleBusy(false)
    }
  }

  const setBattleLead = async (instanceId) => {
    if (battleBusy || battleRoster[0]?.instanceId === instanceId) return
    setBattleBusy(true)
    setBattleNotice('')
    try {
      const team = [...pokemonRoster.team]
      const selectedIndex = team.findIndex((pokemon) => pokemon.instanceId === instanceId)
      if (selectedIndex < 0) return
      team.unshift(...team.splice(selectedIndex, 1))
      await persistPokemonRoster({ ...pokemonRoster, team })
      setBattleNotice(`${team[0].nickname || team[0].species} será tu Pokémon inicial.`)
    } catch (error) {
      setBattleNotice(error.message)
    } finally {
      setBattleBusy(false)
    }
  }

  const sendBattleChatMessage = async (event) => {
    event.preventDefault()
    const message = battleChatInput.trim()
    if (!activeBattle || !message || activeBattle.isSpectator) return
    try {
      await apiClient.sendBattleMessage(activeBattle.id, message)
      setBattleChatInput('')
      const payload = await apiClient.getBattleMessages(activeBattle.id)
      setBattleMessages(payload.messages || [])
    } catch (error) {
      setBattleNotice(error.message)
    }
  }

  const playBattleCue = () => {
    const AudioContextConstructor = window.AudioContext || window.webkitAudioContext
    if (!battleSoundEnabled || !AudioContextConstructor) return
    const context = battleAudioContext.current || new AudioContextConstructor()
    battleAudioContext.current = context
    if (context.state === 'suspended') context.resume()
    const oscillator = context.createOscillator()
    const gain = context.createGain()
    oscillator.type = 'triangle'
    oscillator.frequency.setValueAtTime(440, context.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(660, context.currentTime + 0.09)
    gain.gain.setValueAtTime(0.08, context.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.13)
    oscillator.connect(gain)
    gain.connect(context.destination)
    oscillator.start()
    oscillator.stop(context.currentTime + 0.13)
  }

  const sendBattleChallenge = async (opponent) => {
    if (!battleRoster.length || battleBusy) return
    setBattleBusy(true)
    setBattleNotice('')
    try {
      const saved = await apiClient.savePokemonRoster(pokemonRoster)
      setRemoteUser(saved.user)
      await apiClient.sendBattleRequest(opponent.id, battleScope)
      setBattleNotice(`Solicitud enviada a ${opponent.username}.`)
      setBattleRequests(await apiClient.getBattleRequests().then((payload) => payload.requests || []))
    } catch (error) {
      setBattleNotice(error.message)
    } finally {
      setBattleBusy(false)
    }
  }

  const acceptBattleChallenge = async (requestId) => {
    if (!battleRoster.length || battleBusy) return
    setBattleBusy(true)
    setBattleNotice('')
    try {
      const saved = await apiClient.savePokemonRoster(pokemonRoster)
      setRemoteUser(saved.user)
      const payload = await apiClient.acceptBattleRequest(requestId)
      setBattleOption('')
      setSpectatedBattleId(null)
      setDismissedBattleId(null)
      setActiveBattle(payload.battle)
      setBattleRequests(await apiClient.getBattleRequests().then((result) => result.requests || []))
      setBattleMode('pvp')
    } catch (error) {
      setBattleNotice(error.message)
    } finally {
      setBattleBusy(false)
    }
  }

  const startTrainingBattle = async () => {
    if (!battleRoster.length || battleBusy) return
    if (!apiClient.isConfigured()) {
      setBattleNotice('Conecta con el servidor para guardar el equipo de entrenamiento y combatir.')
      return
    }

    setBattleBusy(true)
    setBattleNotice('')
    try {
      const saved = await apiClient.savePokemonRoster(pokemonRoster)
      setRemoteUser(saved.user)
      const payload = await apiClient.startTrainingBattle(trainingDifficulty)
      setActiveBattle(payload.battle)
      setDismissedBattleId(null)
      setSpectatedBattleId(null)
      setBattleOption('')
      setBattleMode('training')
    } catch (error) {
      setBattleNotice(error.message)
    } finally {
      setBattleBusy(false)
    }
  }

  const rejectBattleChallenge = async (requestId) => {
    try {
      await apiClient.rejectBattleRequest(requestId)
      setBattleRequests((current) => current.filter((request) => request.id !== requestId))
    } catch (error) {
      setBattleNotice(error.message)
    }
  }

  const chooseBattleMove = async (moveId, option = '') => {
    if (!activeBattle || activeBattle.isSpectator || battleBusy) return
    playBattleCue()
    setBattleBusy(true)
    setBattleNotice('')
    try {
      const payload = await apiClient.chooseBattleMove(activeBattle.id, moveId, option)
      setBattleOption('')
      setActiveBattle(payload.battle)
      if (payload.user) setRemoteUser(payload.user)
    } catch (error) {
      setBattleNotice(error.message)
    } finally {
      setBattleBusy(false)
    }
  }

  const chooseBattleSwitch = async (switchIndex) => {
    if (!activeBattle || activeBattle.isSpectator || battleBusy) return
    playBattleCue()
    setBattleBusy(true)
    setBattleNotice('')
    try {
      const payload = await apiClient.chooseBattleSwitch(activeBattle.id, switchIndex)
      setBattleOption('')
      setActiveBattle(payload.battle)
      if (payload.user) setRemoteUser(payload.user)
    } catch (error) {
      setBattleNotice(error.message)
    } finally {
      setBattleBusy(false)
    }
  }

  const getLocalGuildData = (sourceDb = dbState) => {
    const members = sourceDb.users
      .filter((entry) => entry.guild === user?.guild)
      .map((entry) => ({
        username: entry.username,
        guild: entry.guild,
        role: entry.guildRole || 'member',
      }))
      .sort((left, right) => {
        const roleOrder = { leader: 0, elite: 1, member: 2 }
        return roleOrder[left.role] - roleOrder[right.role] || left.username.localeCompare(right.username)
      })
    const currentMember = members.find((member) => member.username === user?.username)

    return {
      name: user?.guild,
      role: currentMember?.role || 'member',
      members,
      messages: sourceDb.guildChats?.[user?.guild] || [{
        user: `Guía de ${user?.guild}`,
        message: `Bienvenidos al gremio ${user?.guild}. Preséntate y comparte tus aventuras con la comunidad.`,
        system: true,
      }],
    }
  }

  const currentGuildData = guildData || getLocalGuildData()

  const loadGuildData = async () => {
    if (!user) return
    setIsGuildLoading(true)
    setGuildNotice('')
    if (apiClient.isConfigured()) {
      try {
        setGuildData(await apiClient.getCurrentGuild())
        setIsGuildLoading(false)
        return
      } catch {
        setGuildNotice('Sin conexión al servidor: se muestra la comunidad guardada en este dispositivo.')
      }
    }
    setGuildData(getLocalGuildData())
    setIsGuildLoading(false)
  }

  const sendGuildMessage = async (event) => {
    event.preventDefault()
    const message = guildChatInput.trim()
    if (!message || !user) return

    if (apiClient.isConfigured()) {
      try {
        setGuildData(await apiClient.sendGuildMessage(message))
        setGuildChatInput('')
        setGuildNotice('')
        return
      } catch (error) {
        setGuildNotice(error.message)
        return
      }
    }

    const currentGuild = guildData || getLocalGuildData()
    const nextMessage = {
      user: user.username,
      message,
      guild: user.guild,
      guildRole: currentGuild.role,
    }
    const nextGuildChats = {
      ...dbState.guildChats,
      [user.guild]: [...currentGuild.messages, nextMessage],
    }
    const nextDb = { ...dbState, guildChats: nextGuildChats }
    localDb.write(nextDb)
    setDbState(nextDb)
    setGuildData({ ...currentGuild, messages: nextGuildChats[user.guild] })
    setGuildChatInput('')
  }

  const changeGuildMemberRole = async (member) => {
    const role = member.role === 'elite' ? 'member' : 'elite'
    if (apiClient.isConfigured()) {
      try {
        setGuildData(await apiClient.setGuildMemberRole(member.username, role))
        setGuildNotice(`${member.username}: ${role === 'elite' ? 'añadido al Alto Mando' : 'rango de miembro restaurado'}.`)
      } catch (error) {
        setGuildNotice(error.message)
      }
      return
    }

    const nextUsers = dbState.users.map((entry) =>
      entry.username === member.username ? { ...entry, guildRole: role } : entry,
    )
    const nextDb = { ...dbState, users: nextUsers }
    localDb.write(nextDb)
    setDbState(nextDb)
    const nextGuildData = getLocalGuildData(nextDb)
    setGuildData(nextGuildData)
    setGuildNotice(`${member.username}: ${role === 'elite' ? 'añadido al Alto Mando' : 'rango de miembro restaurado'}.`)
  }

  function setRemoteUser(nextUser) {
    const storedUser = localDb.getUser(nextUser.username)
    const rosterSource = nextUser.pokemonRoster || storedUser?.pokemonRoster
    const pokemonRoster = syncPokemonRosterWithInventory(
      normalizePokemonRoster({ ...nextUser, pokemonRoster: rosterSource }),
      nextUser.inventory?.pokemon,
    )
    const userWithRoster = {
      ...nextUser,
      pokemonRoster,
    }
    setUser(userWithRoster)
    setDbState((current) => ({
      ...current,
      users: current.users.some((entry) => entry.username.toLowerCase() === userWithRoster.username.toLowerCase())
        ? current.users.map((entry) =>
            entry.username.toLowerCase() === userWithRoster.username.toLowerCase() ? userWithRoster : entry,
          )
        : [userWithRoster, ...current.users],
    }))
  }

  const persistUser = (nextUser) => {
    setUser(nextUser)
    setDbState((current) => {
      const updated = {
        ...current,
        users: current.users.some((entry) => entry.username.toLowerCase() === nextUser.username.toLowerCase())
          ? current.users.map((entry) =>
              entry.username.toLowerCase() === nextUser.username.toLowerCase() ? nextUser : entry,
            )
          : [nextUser, ...current.users],
      }
      localDb.write(updated)
      return updated
    })
  }

  const persistPokemonRoster = async (nextRoster) => {
    if (!user) return null

    const normalizedRoster = normalizePokemonRoster({ ...user, pokemonRoster: nextRoster })
    if (apiClient.isConfigured()) {
      const result = await apiClient.savePokemonRoster(normalizedRoster)
      persistUser({
        ...result.user,
        pokemonRoster: normalizedRoster,
        inventory: {
          ...result.user.inventory,
          pokemon: flattenPokemonRoster(normalizedRoster),
        },
      })
      return normalizedRoster
    }

    persistUser({
      ...user,
      pokemonRoster: normalizedRoster,
      inventory: {
        ...user.inventory,
        pokemon: flattenPokemonRoster(normalizedRoster),
      },
    })
    return normalizedRoster
  }

  const selectPokemon = (pokemon) => {
    setSelectedPokemonId(pokemon.instanceId)
    setPokemonDraft({
      ...pokemon,
      ivs: { ...pokemon.ivs },
      evs: { ...pokemon.evs },
      moves: [...pokemon.moves],
    })
    setPokemonNotice('')
  }

  const updatePokemonDraft = (field, value) => {
    setPokemonDraft((current) => current && { ...current, [field]: value })
  }

  const updatePokemonStat = (group, stat, value) => {
    setPokemonDraft((current) => {
      if (!current) return current
      if (group === 'evs') {
        const otherEvs = pokemonStats.reduce((total, entry) => total + (entry.id === stat ? 0 : current.evs[entry.id]), 0)
        const available = Math.max(0, Math.min(252, MAX_TOTAL_EVS - otherEvs))
        const requested = Number(value)
        return {
          ...current,
          evs: { ...current.evs, [stat]: Math.max(0, Math.min(available, Math.floor(Number.isFinite(requested) ? requested : 0))) },
        }
      }
      return { ...current, [group]: { ...current[group], [stat]: Number(value) } }
    })
  }

  const updatePokemonMove = (index, move) => {
    setPokemonDraft((current) => current && ({
      ...current,
      moves: Array.from({ length: 4 }, (_, moveIndex) =>
        moveIndex === index ? move : current.moves[moveIndex] || '',
      ),
    }))
  }

  const movePokemon = async (pokemon, targetBox) => {
    const currentRoster = normalizePokemonRoster(user)
    const sourceBox = currentRoster.team.some((entry) => entry.instanceId === pokemon.instanceId) ? 'team' : 'pc'
    if (sourceBox === targetBox) return

    if (targetBox === 'team' && currentRoster.team.length >= 6) {
      setPokemonNotice('El equipo ya tiene seis Pokémon. Mueve uno al PC antes de añadir otro.')
      return
    }

    const pokemonToMove = pokemonDraft?.instanceId === pokemon.instanceId ? pokemonDraft : pokemon
    const nextRoster = {
      team: targetBox === 'team'
        ? [...currentRoster.team.filter((entry) => entry.instanceId !== pokemon.instanceId), pokemonToMove]
        : currentRoster.team.filter((entry) => entry.instanceId !== pokemon.instanceId),
      pc: targetBox === 'pc'
        ? [...currentRoster.pc.filter((entry) => entry.instanceId !== pokemon.instanceId), pokemonToMove]
        : currentRoster.pc.filter((entry) => entry.instanceId !== pokemon.instanceId),
    }

    try {
      await persistPokemonRoster(nextRoster)
      setActivePokemonBox(targetBox)
      setPokemonNotice(`${pokemonToMove.nickname || pokemonToMove.species} se movió al ${targetBox === 'pc' ? 'PC' : 'equipo'}.`)
    } catch (error) {
      setPokemonNotice(`No se pudo guardar el cambio: ${error.message}`)
    }
  }

  const savePokemonConfiguration = async (event) => {
    event.preventDefault()
    if (!pokemonDraft || pokemonSaving) return

    const hasInvalidStats = pokemonStats.some(({ id }) =>
      !Number.isInteger(pokemonDraft.ivs[id]) || pokemonDraft.ivs[id] < 0 || pokemonDraft.ivs[id] > 31 ||
      !Number.isInteger(pokemonDraft.evs[id]) || pokemonDraft.evs[id] < 0 || pokemonDraft.evs[id] > 252,
    )
    if (hasInvalidStats || getTotalPokemonEvs(pokemonDraft.evs) > MAX_TOTAL_EVS) {
      setPokemonNotice(`Revisa IVs (0-31) y EVs (0-252; máximo ${MAX_TOTAL_EVS} en total).`)
      return
    }

    const savedPokemon = { ...pokemonDraft, nickname: pokemonDraft.nickname.trim() }
    const currentRoster = normalizePokemonRoster(user)
    setPokemonSaving(true)
    try {
      await persistPokemonRoster({
        team: currentRoster.team.map((pokemon) => pokemon.instanceId === savedPokemon.instanceId ? savedPokemon : pokemon),
        pc: currentRoster.pc.map((pokemon) => pokemon.instanceId === savedPokemon.instanceId ? savedPokemon : pokemon),
      })
      setPokemonDraft(savedPokemon)
      setPokemonNotice(apiClient.isConfigured() ? 'Configuración guardada en tu cuenta.' : 'Configuración guardada en este dispositivo.')
    } catch (error) {
      setPokemonNotice(`No se pudo guardar la configuración: ${error.message}`)
    } finally {
      setPokemonSaving(false)
    }
  }

  const evolvePokemon = async (option) => {
    if (!user || !pokemonDetails || evolvingPokemonId || pokemonSaving) return
    if (user.bayas < option.cost) {
      setPokemonNotice(`Necesitas ${option.cost} bayas para evolucionar a ${option.target.name}.`)
      return
    }
    if (option.requiredItem && !option.ownedItem) {
      setPokemonNotice(`Necesitas ${option.requiredItem} para evolucionar a ${option.target.name}.`)
      return
    }

    const currentRoster = normalizePokemonRoster(user)
    const pokemonToEvolve = pokemonDraft?.instanceId === pokemonDetails.instanceId
      ? pokemonDraft
      : pokemonDetails
    const rosterWithDraft = {
      team: currentRoster.team.map((pokemon) =>
        pokemon.instanceId === pokemonToEvolve.instanceId ? pokemonToEvolve : pokemon),
      pc: currentRoster.pc.map((pokemon) =>
        pokemon.instanceId === pokemonToEvolve.instanceId ? pokemonToEvolve : pokemon),
    }

    setEvolvingPokemonId(pokemonToEvolve.instanceId)
    try {
      if (apiClient.isConfigured()) {
        await apiClient.savePokemonRoster(rosterWithDraft)
        const result = await apiClient.evolvePokemon(pokemonToEvolve.instanceId, option.target.name)
        setRemoteUser(result.user)
        const updatedPokemon = [...result.user.pokemonRoster.team, ...result.user.pokemonRoster.pc]
          .find((pokemon) => pokemon.instanceId === pokemonToEvolve.instanceId)
        setPokemonDraft(updatedPokemon || null)
      } else {
        const inventoryItems = [...(user.inventory?.items || [])]
        if (option.ownedItem) {
          inventoryItems.splice(inventoryItems.indexOf(option.ownedItem), 1)
        }
        const evolvedPokemon = {
          ...pokemonToEvolve,
          species: option.target.name,
          ability: option.target.abilities?.[0] || pokemonToEvolve.ability,
        }
        const evolvedRoster = {
          team: rosterWithDraft.team.map((pokemon) =>
            pokemon.instanceId === evolvedPokemon.instanceId ? evolvedPokemon : pokemon),
          pc: rosterWithDraft.pc.map((pokemon) =>
            pokemon.instanceId === evolvedPokemon.instanceId ? evolvedPokemon : pokemon),
        }
        persistUser({
          ...user,
          bayas: user.bayas - option.cost,
          pokemonRoster: evolvedRoster,
          inventory: {
            ...user.inventory,
            items: inventoryItems,
            pokemon: flattenPokemonRoster(evolvedRoster),
          },
        })
        setPokemonDraft(evolvedPokemon)
      }

      setPokemonNotice(option.requiredItem
        ? `${pokemonToEvolve.nickname || pokemonToEvolve.species} evolucionó a ${option.target.name} usando ${option.ownedItem}.`
        : `${pokemonToEvolve.nickname || pokemonToEvolve.species} evolucionó a ${option.target.name} por ${option.cost} bayas.`)
    } catch (error) {
      setPokemonNotice(`No se pudo completar la evolución: ${error.message}`)
    } finally {
      setEvolvingPokemonId(null)
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    const username = loginForm.username.trim()
    const password = loginForm.password

    if (!username || !password) {
      alert('Completa usuario y contraseña para continuar.')
      return
    }

    try {
      const remoteUser = await apiClient.login(username, password)
      setGuildData(null)
      setRemoteUser(remoteUser)
      setIsLoggedIn(true)
      setActiveSection('dashboard')
      return
    } catch (error) {
      alert(error.message || 'No se pudo iniciar sesión con la base de datos.')
    }
  }

  const handleRegister = async (event) => {
    event.preventDefault()

    const username = registerForm.username.trim()
    const password = registerForm.password
    const age = Number(registerForm.age)

    if (!username || !password) {
      alert('Completa usuario y contraseña para continuar.')
      return
    }

    if (!Number.isInteger(age) || age < 16) {
      alert('La edad debe ser un número entero igual o superior a 16 años.')
      return
    }

    if (!registerForm.acceptTerms) {
      alert('Debes aceptar los acuerdos y políticas de privacidad para registrarte.')
      return
    }

    try {
      const remoteUser = await apiClient.register({
        username,
        password,
        age,
        guild: registerForm.guild,
        starter: registerForm.starter,
        acceptTerms: registerForm.acceptTerms,
      })
      setRemoteUser(remoteUser)
      setIsLoggedIn(true)
      setActiveSection('dashboard')
      setAuthMode('login')
      setRegisterForm({
        username: '',
        password: '',
        age: 16,
        starter: 'Garchomp',
        guild: 'Garchomp',
        acceptTerms: false,
      })
      setLoginForm({ username, password })
      return
    } catch (error) {
      alert(error.message || 'No se pudo registrar en la base de datos.')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
    setGuildData(null)
    setUserDirectory([])
    setAdminDashboard({ announcements: [], shopCatalog: [], roulettePrizes: [], sanctions: [], users: [] })
    setRoleNotice('')
    apiClient.logout()
  }

  useEffect(() => {
    if (!apiClient.isConfigured()) return undefined

    let isActive = true
    apiClient.getProfile()
      .then((profile) => {
        if (!isActive) return
        setRemoteUser(profile)
        setIsLoggedIn(true)
      })
      .catch(() => {})
      .finally(() => {
        if (isActive) setIsSessionRestoring(false)
      })

    return () => { isActive = false }
  }, [])

  useEffect(() => {
    if (!isLoggedIn) return undefined

    const expiresAt = apiClient.getSessionExpiresAt()
    const expirationTimer = window.setTimeout(
      handleLogout,
      expiresAt ? Math.max(0, expiresAt - Date.now()) : 0,
    )
    return () => window.clearTimeout(expirationTimer)
  }, [isLoggedIn])

  const updateUserRole = async (targetUserId, nextRoleLevel) => {
    if (!user || user.roleLevel > 1) return

    try {
      const payload = await apiClient.updateUserRole(targetUserId, nextRoleLevel)
      setUserDirectory(payload.users || [])
      if (user.id === targetUserId) {
        setUser((current) => current ? { ...current, roleLevel: Number(nextRoleLevel) } : current)
      }
      setRoleNotice(`Rango actualizado correctamente.`)
    } catch (error) {
      setRoleNotice(error.message)
    }
  }

  const updateAdminAnnouncement = (announcementId, field, value) => {
    setAdminAnnouncements((current) => current.map((entry) => String(entry.id) === String(announcementId)
      ? { ...entry, [field]: value }
      : entry))
  }

  const addAdminAnnouncement = () => {
    setAdminAnnouncements((current) => [...current, {
      id: `draft-${Date.now()}-${Math.random()}`,
      message: '',
      imageData: '',
    }])
  }

  const removeAdminAnnouncement = (announcementId) => {
    setAdminAnnouncements((current) => current.filter((entry) => String(entry.id) !== String(announcementId)))
  }

  const selectAnnouncementImage = (announcementId, file) => {
    if (!file) return
    if (!['image/png', 'image/jpeg', 'image/webp', 'image/gif'].includes(file.type)) {
      setRoleNotice('Elige una imagen PNG, JPEG, WebP o GIF.')
      return
    }
    if (file.size > 2 * 1024 * 1024) {
      setRoleNotice('Cada imagen debe pesar 2 MB o menos.')
      return
    }
    const reader = new FileReader()
    reader.onload = () => updateAdminAnnouncement(announcementId, 'imageData', String(reader.result || ''))
    reader.onerror = () => setRoleNotice('No se pudo leer el archivo de imagen.')
    reader.readAsDataURL(file)
  }

  const saveAdminAnnouncements = async () => {
    if (!user || user.roleLevel !== 1) return
    const entries = adminAnnouncements
      .map(({ message, imageData }) => ({ message: message.trim(), imageData }))
      .filter((entry) => entry.message || entry.imageData)

    try {
      const savedAnnouncements = apiClient.isConfigured()
        ? (await apiClient.saveAnnouncements(entries)).announcements
        : localDb.saveAnnouncements(entries)
      const normalized = normalizeAnnouncements(savedAnnouncements || [])
      setAdminDashboard((current) => ({ ...current, announcements: normalized }))
      setAdminAnnouncements(normalized)
      setAnnouncements(normalized)
      setRoleNotice('Anuncios actualizados correctamente.')
    } catch (error) {
      setRoleNotice(error.message)
    }
  }

  const saveAdminShopCatalog = async () => {
    if (!user || user.roleLevel !== 1) return
    const entries = adminDashboard.shopCatalog.map((entry) => ({
      ...entry,
      price: Number(entry.price),
      quantity: Number(entry.quantity),
      enabled: isShopEntryEnabled(entry),
    }))

    try {
      const payload = apiClient.isConfigured()
        ? await apiClient.saveShopCatalog(entries)
        : { shopCatalog: localDb.saveShopCatalog(entries) }
      setAdminDashboard((current) => ({ ...current, shopCatalog: payload.shopCatalog || [] }))
      setShopCatalog(payload.shopCatalog || [])
      setRoleNotice('Catálogo de la tienda actualizado.')
    } catch (error) {
      setRoleNotice(error.message)
    }
  }

  const addShopCatalogEntry = () => {
    const selectedItem = shopEntryForm.category === 'item'
      ? itemCatalog.find((entry) => entry.id === shopEntryForm.catalogId)
      : availablePokemonForShop.find((entry) => entry.id === shopEntryForm.catalogId)
    if (!selectedItem) {
      setRoleNotice('Selecciona un producto para agregar a la tienda.')
      return
    }

    const name = selectedItem.name
    if (adminDashboard.shopCatalog.some((entry) => entry.category === shopEntryForm.category && entry.name.toLowerCase() === name.toLowerCase())) {
      setRoleNotice(`${name} ya está en el catálogo.`)
      return
    }

    const entry = {
      id: `new-${shopEntryForm.category}-${selectedItem.id}`,
      category: shopEntryForm.category,
      name,
      price: Math.max(0, Number(shopEntryForm.price) || 0),
      quantity: Math.max(0, Math.floor(Number(shopEntryForm.quantity) || 0)),
      description: selectedItem.description || 'Disponible en la tienda de la comunidad.',
      rarity: 'Común',
      enabled: true,
      shiny: shopEntryForm.category === 'pokemon' && shopEntryForm.shiny,
    }
    setAdminDashboard((current) => ({ ...current, shopCatalog: [...current.shopCatalog, entry] }))
    setShopEntryForm((current) => ({ ...current, catalogId: '' }))
    setRoleNotice(`${name} agregado. Guarda el catálogo para publicar los cambios.`)
  }

  const updateShopCatalogEntry = (entryId, field, value) => {
    setAdminDashboard((current) => ({
      ...current,
      shopCatalog: current.shopCatalog.map((entry) => entry.id === entryId
        ? { ...entry, [field]: value }
        : entry),
    }))
  }

  const removeShopCatalogEntry = (entryId) => {
    setAdminDashboard((current) => ({
      ...current,
      shopCatalog: current.shopCatalog.filter((entry) => entry.id !== entryId),
    }))
  }

  const saveAdminRoulette = async () => {
    if (!user || user.roleLevel !== 1) return
    const entries = adminDashboard.roulettePrizes.map((entry) => ({
      ...entry,
      amount: Number(entry.amount),
      probability: Number(entry.probability),
      enabled: entry.enabled === true || entry.enabled === 1 || entry.enabled === '1',
    }))

    try {
      const payload = await apiClient.saveRoulettePrizes(entries)
      setAdminDashboard((current) => ({ ...current, roulettePrizes: payload.roulettePrizes || [] }))
      setRouletteConfig({
        categories: (payload.roulettePrizes || []).filter((entry) => entry.wheelType === 'category' && entry.enabled),
        prizes: (payload.roulettePrizes || []).filter((entry) => entry.wheelType === 'prize' && entry.enabled),
      })
      setRoleNotice('Premios de la ruleta actualizados.')
    } catch (error) {
      setRoleNotice(error.message)
    }
  }

  const addRoulettePrize = (wheelId, prizeType) => {
    const wheel = rouletteWheels.find((entry) => entry.id === wheelId)
    const entry = {
      id: `draft-${Date.now()}-${Math.random()}`,
      wheelType: wheelId === 'category' ? 'category' : 'prize',
      coinType: wheel?.coinType || 'bronze',
      prizeType,
      name: wheelId === 'category' ? (prizeType === 'item' ? 'Objetos' : 'Pokémon') : '',
      amount: 1,
      rarity: 'Común',
      probability: wheelId === 'category' ? 50 : 100,
      enabled: true,
    }
    setAdminDashboard((current) => ({ ...current, roulettePrizes: [...current.roulettePrizes, entry] }))
  }

  const updateRoulettePrize = (entryId, field, value) => {
    setAdminDashboard((current) => ({
      ...current,
      roulettePrizes: current.roulettePrizes.map((entry) => entry.id === entryId
        ? { ...entry, [field]: value }
        : entry),
    }))
  }

  const updateRoulettePrizeType = (entryId, prizeType) => {
    setAdminDashboard((current) => ({
      ...current,
      roulettePrizes: current.roulettePrizes.map((entry) => entry.id === entryId
        ? { ...entry, prizeType, name: '' }
        : entry),
    }))
  }

  const removeRoulettePrize = (entryId) => {
    setAdminDashboard((current) => ({
      ...current,
      roulettePrizes: current.roulettePrizes.filter((entry) => entry.id !== entryId),
    }))
  }

  const spinRouletteCategory = async () => {
    if (!user || roulettePending) return
    setRoulettePending(true)
    setRouletteNotice('')
    setRouletteResult(null)
    setRouletteCategory(null)
    setRouletteSelectionToken('')
    try {
      const result = await apiClient.spinRouletteCategory()
      const slices = getRouletteSlices(rouletteConfig.categories)
      setCategoryWheelRotation((current) => getRouletteRotation(slices, result.categoryId, current))
      await new Promise((resolve) => window.setTimeout(resolve, 2600))
      setRouletteCategory(result.category)
      setRouletteSelectionToken(result.selectionToken)
    } catch (error) {
      setRouletteNotice(error.message)
    } finally {
      setRoulettePending(false)
    }
  }

  const spinRoulette = async () => {
    if (!user || roulettePending) return
    setRoulettePending(true)
    setRouletteNotice('')
    setRouletteResult(null)
    try {
      const result = await apiClient.spinRoulette(rouletteCoinType, rouletteCategory, rouletteSelectionToken)
      const slices = getRouletteSlices(roulettePrizeOptions)
      setPrizeWheelRotation((current) => getRouletteRotation(slices, result.prize.id, current))
      setRemoteUser(result.user)
      await new Promise((resolve) => window.setTimeout(resolve, 2600))
      setRouletteResult(result)
    } catch (error) {
      setRouletteNotice(error.message)
    } finally {
      setRoulettePending(false)
    }
  }

  const convertMysteriousCoins = async (targetType) => {
    if (!user) return
    setRouletteNotice('')
    try {
      const result = await apiClient.convertMysteriousCoins(targetType)
      setRemoteUser(result.user)
      setRouletteResult(null)
      const targetLabel = rouletteCoins.find((coin) => coin.id === targetType)?.label
      const sourceLabel = rouletteCoins.find((coin) => coin.id === result.source)?.label
      setRouletteNotice(`Canje realizado: ${result.spent} monedas de ${sourceLabel} por ${result.converted} de ${targetLabel}.`)
    } catch (error) {
      setRouletteNotice(error.message)
    }
  }

  const saveAdminSanction = async () => {
    if (!user || user.roleLevel !== 1) return
    const userId = Number(adminForm.sanctionUserId)
    const reason = adminForm.sanctionReason.trim()
    if (!Number.isInteger(userId) || !reason) {
      setRoleNotice('Debes seleccionar un usuario y escribir una razón.')
      return
    }

    try {
      await apiClient.saveSanction(userId, adminForm.sanctionType, reason)
      setRoleNotice('Sanción registrada correctamente.')
      setAdminForm((current) => ({ ...current, sanctionUserId: '', sanctionReason: '' }))
      await loadAdminDashboard()
    } catch (error) {
      setRoleNotice(error.message)
    }
  }

  const buyItem = async (item) => {
    if (!user) return
    const purchaseKey = `item:${item.id}`
    if (Number(item.quantity) < 1 || pendingShopPurchase) return

    setPendingShopPurchase(purchaseKey)
    try {
      if (apiClient.isConfigured()) {
        const result = await apiClient.buyItem(item.id)
        setRemoteUser(result.user)
        setShopCatalog(result.shopCatalog || [])
        return
      }

      if (user.bayas < item.price) {
        alert('No tienes suficientes bayas para comprar este objeto.')
        return
      }

      const updatedDb = localDb.reserveShopItem(item.id)
      if (!updatedDb) {
        setShopCatalog(localDb.getShopCatalog())
        alert('Este objeto está agotado para todos los usuarios.')
        return
      }
      setShopCatalog(updatedDb.shopCatalog)
      setDbState(updatedDb)

      const nextUser = {
        ...user,
        bayas: user.bayas - item.price,
        inventory: {
          ...user.inventory,
          items: [...(user.inventory?.items || []), item.name],
        },
      }

      persistUser(nextUser)
    } catch (error) {
      alert(error.message)
    } finally {
      setPendingShopPurchase(null)
    }
  }

  const buyPokemon = async (pokemon) => {
    if (!user) return
    const purchaseKey = `pokemon:${pokemon.name.toLowerCase()}`
    if (ownedPokemonNames.has(pokemon.name.toLowerCase()) || Number(pokemon.quantity) < 1 || pendingShopPurchase) return

    setPendingShopPurchase(purchaseKey)
    try {
      if (apiClient.isConfigured()) {
        const result = await apiClient.buyPokemon(pokemon.name)
        const remoteUser = result.user
        setShopCatalog(result.shopCatalog || [])
        const currentRoster = normalizePokemonRoster(user)
        const nextRoster = {
          ...currentRoster,
          pc: [...currentRoster.pc, createPokemonEntry(pokemon.name, pokemon.shiny)],
        }
        persistUser({
          ...remoteUser,
          pokemonRoster: nextRoster,
          inventory: {
            ...user.inventory,
            ...remoteUser.inventory,
            pokemon: flattenPokemonRoster(nextRoster),
          },
        })
        return
      }

      if (user.bayas < pokemon.price) {
        alert('No tienes suficientes bayas para adquirir este Pokémon.')
        return
      }

      const updatedDb = localDb.reserveShopItem(pokemon.id)
      if (!updatedDb) {
        setShopCatalog(localDb.getShopCatalog())
        alert('Este Pokémon está agotado para todos los usuarios.')
        return
      }
      setShopCatalog(updatedDb.shopCatalog)
      setDbState(updatedDb)

      const currentRoster = normalizePokemonRoster(user)
      const nextRoster = {
        ...currentRoster,
        pc: [...currentRoster.pc, createPokemonEntry(pokemon.name, pokemon.shiny)],
      }
      const nextUser = {
        ...user,
        bayas: user.bayas - pokemon.price,
        pokemonRoster: nextRoster,
        inventory: {
          ...user.inventory,
          pokemon: flattenPokemonRoster(nextRoster),
        },
      }

      persistUser(nextUser)
    } catch (error) {
      alert(error.message)
    } finally {
      setPendingShopPurchase(null)
    }
  }

  const sendMessage = async (event) => {
    event.preventDefault()
    if (!chatInput.trim() || !user) return

    if (apiClient.isConfigured()) {
      try {
        setChatMessages(await apiClient.sendMessage(chatInput.trim()))
        setChatInput('')
        return
      } catch (error) {
        alert(error.message)
        return
      }
    }

    const nextChat = [...chatMessages, { user: user.username, message: chatInput.trim(), guild: user.guild, guildRole: currentGuildRole }]
    setChatMessages(nextChat)
    setDbState((current) => {
      const updated = { ...current, chat: nextChat }
      localDb.write(updated)
      return updated
    })
    setChatInput('')
  }

  if (window.location.pathname.replace(/\/+$/, '') === '/acuerdos') {
    return <AgreementsPage />
  }

  if (isSessionRestoring) {
    return (
      <div className="auth-shell">
        <div className="auth-card"><p>Restaurando tu sesión...</p></div>
      </div>
    )
  }

  return (
    <>
      {!isLoggedIn ? (
        <div className="auth-shell">
          <div className="auth-card">
            <div className="auth-header">
              <span className="pill">Version 1.1.0</span>
              <h1>Pokémon Manzana</h1>
              <p>Sitio creado por y para la comunidad de entrenadores.</p>
            </div>

            <div className="auth-tabs">
              <button
                type="button"
                className={authMode === 'login' ? 'active' : ''}
                onClick={() => setAuthMode('login')}
              >
                Iniciar sesión
              </button>
              <button
                type="button"
                className={authMode === 'register' ? 'active' : ''}
                onClick={() => setAuthMode('register')}
              >
                Registro
              </button>
            </div>

            {authMode === 'login' ? (
              <form className="auth-form" onSubmit={handleLogin}>
                <label>
                  Usuario
                  <input
                    type="text"
                    value={loginForm.username}
                    onChange={(event) => setLoginForm((current) => ({ ...current, username: event.target.value }))}
                    placeholder="Tu nombre de entrenador"
                  />
                </label>
                <label>
                  Contraseña
                  <input
                    type="password"
                    value={loginForm.password}
                    onChange={(event) => setLoginForm((current) => ({ ...current, password: event.target.value }))}
                    placeholder="••••••••"
                  />
                </label>
                <button type="submit" className="primary-button">
                  Entrar a la comunidad
                </button>
                <small>Comunidad Manzana º Fan Community</small>
              </form>
            ) : (
              <form className="auth-form" onSubmit={handleRegister}>
                <label>
                  Usuario
                  <input
                    type="text"
                    value={registerForm.username}
                    onChange={(event) => setRegisterForm((current) => ({ ...current, username: event.target.value }))}
                    placeholder="Tu nombre de entrenador"
                  />
                </label>

                <label>
                  Contraseña
                  <input
                    type="password"
                    value={registerForm.password}
                    onChange={(event) => setRegisterForm((current) => ({ ...current, password: event.target.value }))}
                    placeholder="Segura y memorable"
                  />
                </label>

                <label>
                  Edad
                  <input
                    type="number"
                    min="16"
                    max="99"
                    value={registerForm.age}
                    onChange={(event) => setRegisterForm((current) => ({ ...current, age: event.target.value }))}
                    placeholder="16"
                  />
                </label>

                <label>
                  Pokémon inicial
                  <select
                    value={registerForm.starter}
                    onChange={(event) => setRegisterForm((current) => ({ ...current, starter: event.target.value }))}
                  >
                    {starters.map((starter) => (
                      <option key={starter.name} value={starter.name}>
                        {starter.name} {starter.icon} — {starter.type}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  Gremio
                  <select
                    value={registerForm.guild}
                    onChange={(event) => setRegisterForm((current) => ({ ...current, guild: event.target.value }))}
                  >
                    {guildNames.map((guild) => (
                      <option key={guild} value={guild}>
                        {guild}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="terms-acceptance">
                  <label className="checkbox-row" htmlFor="accept-terms">
                  <input
                    id="accept-terms"
                    type="checkbox"
                    checked={registerForm.acceptTerms}
                    onChange={(event) =>
                      setRegisterForm((current) => ({
                        ...current,
                        acceptTerms: event.target.checked,
                      }))
                    }
                  />
                    Acepto
                  </label>
                  <a className="terms-link" href="/acuerdos">los acuerdos y políticas de privacidad de la comunidad.</a>
                </div>

                <button type="submit" className="primary-button">
                  Crear cuenta
                </button>
              </form>
            )}
          </div>
        </div>
      ) : (
        <div className="app-shell">
          <header className="topbar">
            <div className="brand-wrap">
              <span className="brand-mark" aria-hidden="true"><img src={manzanaLogo} alt="" /></span>
              <div>
                <strong>Pokémon Manzana</strong>
              </div>
            </div>

            <div className="topbar-status">
              <span className="online-dot" />
              <span>Servidor de la comunidad</span>
              <GuildBadge guild={user.guild} role={currentGuildRole} compact />
              <span className="topbar-trainer">{user.username}</span>
              <button type="button" className="ghost-button" onClick={handleLogout}>
                Salir
              </button>
            </div>
          </header>

          <div className="content-grid">
            <aside className="sidebar">
              <div className="panel profile-panel">
                <div className="profile-heading">
                  <span className="profile-sprite">
                    <PokemonSprite pokemon={getCatalogPokemon(user.starter)} alt={user.starter} />
                  </span>
                  <div>
                    <span className="panel-tag">Entrenador</span>
                    <h2>{user.username}</h2>
                    <p className="guild-line"><GuildBadge guild={user.guild} role={currentGuildRole} compact /> Gremio <strong>{user.guild}</strong></p>
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
                  {[...menuItems, ...(user.roleLevel === 1 ? [{ id: 'admin', label: 'Administración', icon: '⚙' }] : [])].map((item) => (
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
                  {rouletteCoins.map((coin) => <div key={coin.id}><span className={`currency-icon ${coin.id}`}>{coin.icon}</span><span>{coin.label}</span><strong>{user.mysteriousCoins[coin.id] || 0}</strong></div>)}
                </div>
              </div>

            </aside>

            <main className="main-panel">
              {activeSection === 'dashboard' && (
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
              )}

              {activeSection === 'inventory' && (
                <section className="panel collection-panel">
                  <div className="section-heading">
                    <div><span className="panel-tag">Mochila</span><h2>Inventario</h2></div>
                    <span className="section-count">{(user.inventory?.items || []).length} objetos</span>
                  </div>
                  {(user.inventory?.items || []).length ? (
                    <div className="inventory-grid">
                      {user.inventory.items.map((item, index) => {
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
                  <div className="inventory-note"><span>Equipo Pokémon</span><strong>{(user.inventory?.pokemon || []).length} compañeros</strong><button className="secondary-button" type="button" onClick={() => setActiveSection('team')}>Ver equipo</button></div>
                </section>
              )}

              {activeSection === 'events' && (
                <section className="panel collection-panel">
                  <div className="section-heading"><div><span className="panel-tag">Novedades</span><h2>Eventos de la comunidad</h2></div><span className="event-spark" aria-hidden="true">✳</span></div>
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
              )}

              {activeSection === 'roulette' && (
                <section className="panel roulette-panel">
                  <span className="panel-tag">Suerte del entrenador</span>
                  <h2>Ruleta de la comunidad</h2>
                  <p>Primero gira para elegir entre objetos y Pokémon. Después, cada moneda tiene su propia ruleta de premios de esa categoría.</p>
                  <RouletteWheel
                    entries={rouletteConfig.categories}
                    rotation={categoryWheelRotation}
                    centerImage={roulettePokeballSprite}
                  />
                  {!rouletteCategory ? (
                    <button type="button" className="primary-button" disabled={roulettePending || !rouletteConfig.categories.length} onClick={spinRouletteCategory}>
                      {roulettePending ? 'Girando...' : 'Girar categoría'}
                    </button>
                  ) : (
                    <>
                      <p className="roulette-category-result">Categoría elegida: <strong>{rouletteCategory === 'item' ? 'Objetos' : 'Pokémon'}</strong></p>
                      <div className="roulette-coin-picker" aria-label="Selecciona una moneda">
                        {rouletteCoins.map((coin) => (
                          <button key={coin.id} type="button" className={rouletteCoinType === coin.id ? 'active' : ''} aria-pressed={rouletteCoinType === coin.id} onClick={() => { setRouletteCoinType(coin.id); setRouletteResult(null) }}>
                            <span className={`currency-icon ${coin.id}`}>{coin.icon}</span>{coin.label}<strong>{user.mysteriousCoins[coin.id] || 0}</strong>
                          </button>
                        ))}
                      </div>
                      <RouletteWheel
                        entries={roulettePrizeOptions}
                        rotation={prizeWheelRotation}
                        centerCoin={rouletteCoins.find((coin) => coin.id === rouletteCoinType)}
                      />
                      <div className="roulette-prize-list" aria-label="Premios disponibles">
                        {roulettePrizeOptions.map((prize) => (
                          <span key={prize.id}>{prize.name}{prize.amount > 1 ? ` ×${prize.amount}` : ''} · {prize.rarity}</span>
                        ))}
                        {!roulettePrizeOptions.length && <span>No hay premios activos para esta categoría y moneda.</span>}
                      </div>
                      <button type="button" className="primary-button" disabled={roulettePending || !roulettePrizeOptions.length || !(user.mysteriousCoins[rouletteCoinType] > 0)} onClick={spinRoulette}>
                        {roulettePending ? 'Girando...' : `Girar por 1 moneda de ${rouletteCoins.find((coin) => coin.id === rouletteCoinType).label}`}
                      </button>
                      <button type="button" className="secondary-button" disabled={roulettePending} onClick={() => { setRouletteCategory(null); setRouletteSelectionToken(''); setRouletteResult(null); setRouletteNotice('') }}>Elegir categoría otra vez</button>
                    </>
                  )}
                  {rouletteNotice && <p className="roulette-notice" role="status">{rouletteNotice}</p>}
                  {rouletteResult && <article className="roulette-result" role="status">
                    <strong>{rouletteResult.prize.name}{rouletteResult.prize.amount > 1 ? ` ×${rouletteResult.prize.amount}` : ''}</strong>
                    <span>{rouletteResult.category === 'item' ? 'Objeto' : 'Pokémon'} de la ruleta de {rouletteCoins.find((coin) => coin.id === rouletteCoinType).label.toLowerCase()}</span>
                  </article>}
                  <div className="roulette-exchanges">
                    <h3>Canjear monedas</h3>
                    <div>
                      <button type="button" className="secondary-button" disabled={user.mysteriousCoins.bronze < 4} onClick={() => convertMysteriousCoins('silver')}>4 Bronce → 1 Plata</button>
                      <button type="button" className="secondary-button" disabled={user.mysteriousCoins.silver < 3} onClick={() => convertMysteriousCoins('gold')}>3 Plata → 1 Oro</button>
                      <button type="button" className="secondary-button" disabled={user.mysteriousCoins.gold < 2} onClick={() => convertMysteriousCoins('diamond')}>2 Oro → 1 Diamante</button>
                    </div>
                  </div>
                </section>
              )}

              {activeSection === 'guild' && (
                <section className="panel collection-panel guild-community-panel">
                  <header className="guild-community-header">
                    <span className="guild-emblem-large"><img src={currentGuildInfo.logo} alt={`Emblema del gremio ${user.guild}`} /></span>
                    <div className="guild-community-title">
                      <span className="panel-tag">Comunidad de entrenadores</span>
                      <h2>{currentGuildData.name}</h2>
                      <p>{currentGuildInfo.description}</p>
                    </div>
                    <div className="guild-self-rank">
                      <GuildBadge guild={user.guild} role={currentGuildData.role} />
                      <span>Tu rango</span>
                      <strong>{getGuildRoleLabel(currentGuildData.role)}</strong>
                    </div>
                  </header>

                  {guildNotice && <p className="guild-notice" role="status">{guildNotice}</p>}

                  <div className="guild-community-grid">
                    <div className="guild-community-left">
                      <section className="guild-info-section">
                        <div className="guild-section-title"><span className="panel-tag">Identidad</span><h3>Sobre el gremio</h3></div>
                        <p className="guild-description">{currentGuildInfo.description}</p>
                        <div className="guild-rules-section">
                          <h4>Reglas de convivencia</h4>
                          <ol className="guild-rules">
                            {currentGuildInfo.rules.map((rule, index) => <li key={`${user.guild}-rule-${index}`}><span>{String(index + 1).padStart(2, '0')}</span>{rule}</li>)}
                          </ol>
                        </div>
                      </section>

                      <section className="guild-members-section">
                        <div className="guild-section-title">
                          <div><span className="panel-tag">La comunidad</span><h3>Miembros</h3></div>
                          <span className="section-count">{currentGuildData.members.length}</span>
                        </div>
                        {isGuildLoading ? <p className="guild-loading">Actualizando miembros...</p> : (
                          <div className="guild-members-list">
                            {currentGuildData.members.map((member) => (
                              <article className={`guild-member-row${member.username === user.username ? ' is-current-member' : ''}`} key={member.username}>
                                <GuildBadge guild={member.guild || user.guild} role={member.role} />
                                <div className="guild-member-copy">
                                  <strong>{member.username}{member.username === user.username ? ' · Tú' : ''}</strong>
                                  <span>{getGuildRoleLabel(member.role)}</span>
                                </div>
                                {currentGuildData.role === 'leader' && member.role !== 'leader' && (
                                  <button type="button" className="guild-role-button" onClick={() => changeGuildMemberRole(member)}>
                                    {member.role === 'elite' ? 'Retirar rango' : 'Nombrar Alto Mando'}
                                  </button>
                                )}
                              </article>
                            ))}
                          </div>
                        )}
                      </section>
                    </div>

                    <section className="guild-chat-section">
                      <div className="guild-section-title">
                        <div><br></br><span className="panel-tag">Solo miembros</span><h3>Chat del gremio</h3></div>
                        <span className="guild-chat-lock" aria-label="Chat privado del gremio">●</span>
                      </div>
                      <div className="guild-chat-list" aria-live="polite">
                        {currentGuildData.messages.map((message, index) => (
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
                      <form className="guild-chat-form" onSubmit={sendGuildMessage}>
                        <input
                          type="text"
                          maxLength={140}
                          value={guildChatInput}
                          onChange={(event) => setGuildChatInput(event.target.value)}
                          placeholder="Escribe a tu gremio..."
                          aria-label="Mensaje para el gremio"
                        />
                        <button type="submit" className="primary-button" disabled={!guildChatInput.trim()}>Enviar</button>
                      </form>
                      <span className="guild-chat-limit">Máximo 140 caracteres</span>
                    </section>
                  </div>
                </section>
              )}

              {(activeSection === 'account' || activeSection === 'admin') && (
                <section className="panel collection-panel account-panel">
                  <span className="panel-tag">{activeSection === 'admin' ? 'Control del sitio' : 'Datos de entrenador'}</span><h2>{activeSection === 'admin' ? 'Administración' : 'Cuenta'}</h2>
                  {activeSection === 'account' && <div className="account-list"><div><span>Nombre</span><strong>{user.username}</strong></div><div><span>Gremio</span><strong>{user.guild}</strong></div><div><span>Edad</span><strong>{user.age ?? 'Sin registro'}</strong></div><div><span>Rango</span><strong>{roleLevelLabels[user.roleLevel ?? 4]}</strong></div><div><span>Pokémon inicial</span><strong>{user.starter}</strong></div><div><span>Bayas</span><strong>{user.bayas}</strong></div><div><span>Victorias</span><strong>{user.battleWins}</strong></div><div><span>Derrotas</span><strong>{user.battleLosses}</strong></div></div>}

                  {user.roleLevel <= 1 && (
                    <div className="admin-role-panel">
                      <div className="section-heading">
                        <div><span className="panel-tag">Control</span><h3>Gestión de rangos</h3></div>
                        <span className="section-count">{userDirectory.length}</span>
                      </div>

                      {roleNotice && <p className="guild-notice" role="status">{roleNotice}</p>}

                      {isUserDirectoryLoading ? (
                        <p className="guild-loading">Cargando usuarios...</p>
                      ) : (
                        <div className="admin-user-list">
                          {userDirectory.map((entry) => (
                            <div key={entry.id} className="admin-user-row">
                              <div>
                                <strong>{entry.username}</strong>
                                <span>{entry.guild}</span>
                              </div>
                              <select
                                value={entry.roleLevel}
                                onChange={(event) => updateUserRole(entry.id, Number(event.target.value))}
                                aria-label={`Cambiar rango de ${entry.username}`}
                              >
                                {Object.entries(roleLevelLabels).map(([value, label]) => (
                                  <option key={value} value={value}>{label}</option>
                                ))}
                              </select>
                            </div>
                          ))}
                        </div>
                      )}

                      {user.roleLevel === 1 && <>
                      <details className="admin-subpanel">
                        <summary>Gestión global</summary>
                        <div className="announcement-admin-list">
                          {adminAnnouncements.map((announcement, index) => (
                            <article className="announcement-admin-row" key={announcement.id}>
                              <label>
                                Anuncio {index + 1}
                                <textarea
                                  rows={3}
                                  maxLength={500}
                                  value={announcement.message}
                                  onChange={(event) => updateAdminAnnouncement(announcement.id, 'message', event.target.value)}
                                />
                              </label>
                              <div className="announcement-image-controls">
                                {announcement.imageData && <img src={announcement.imageData} alt={`Vista previa del anuncio ${index + 1}`} />}
                                <label>
                                  Imagen
                                  <input
                                    type="file"
                                    accept="image/png,image/jpeg,image/webp,image/gif"
                                    onChange={(event) => selectAnnouncementImage(announcement.id, event.target.files?.[0])}
                                  />
                                </label>
                                <small>PNG, JPEG, WebP o GIF · máximo 2 MB</small>
                                {announcement.imageData && <button type="button" className="secondary-button" onClick={() => updateAdminAnnouncement(announcement.id, 'imageData', '')}>Quitar imagen</button>}
                              </div>
                              <button type="button" className="secondary-button" onClick={() => removeAdminAnnouncement(announcement.id)}>Eliminar anuncio</button>
                            </article>
                          ))}
                          <button type="button" className="secondary-button" onClick={addAdminAnnouncement}>Agregar anuncio</button>
                        </div>
                        <button type="button" className="primary-button" onClick={saveAdminAnnouncements}>Guardar anuncios</button>
                      </details>

                      <details className="admin-subpanel">
                        <summary>Catálogo de tienda</summary>
                        <div className="shop-admin-add">
                          <label>
                            Categoría
                            <select
                              value={shopEntryForm.category}
                              onChange={(event) => {
                                setShopProductSearch('')
                                setShopEntryForm((current) => ({
                                  ...current,
                                  category: event.target.value,
                                  catalogId: '',
                                  quantity: event.target.value === 'pokemon' ? 1 : 10,
                                  shiny: false,
                                }))
                              }}
                            >
                              <option value="item">Objeto</option>
                              <option value="pokemon">Pokémon</option>
                            </select>
                          </label>
                          <label>
                            Producto
                            <input
                              type="search"
                              value={shopProductSearch}
                              onChange={(event) => setShopProductSearch(event.target.value)}
                              placeholder={shopEntryForm.category === 'item' ? 'Buscar objeto...' : 'Buscar Pokémon...'}
                              aria-label={shopEntryForm.category === 'item' ? 'Buscar objeto del catálogo' : 'Buscar Pokémon del catálogo'}
                            />
                            <select value={shopEntryForm.catalogId} onChange={(event) => setShopEntryForm((current) => ({ ...current, catalogId: event.target.value }))}>
                              <option value="">Selecciona un producto</option>
                              {shopEntryForm.category === 'item'
                                ? itemCatalog
                                  .filter((item) =>
                                    (!adminDashboard.shopCatalog.some((entry) => entry.category === 'item' && entry.name.toLowerCase() === item.name.toLowerCase()) ||
                                      item.id === shopEntryForm.catalogId) &&
                                    (item.name.toLocaleLowerCase().includes(shopProductSearch.trim().toLocaleLowerCase()) ||
                                      item.id === shopEntryForm.catalogId))
                                  .map((item) => <option key={item.id} value={item.id}>{item.name} · {item.category}</option>)
                                : availablePokemonForShop
                                  .filter((pokemon) =>
                                    (!adminDashboard.shopCatalog.some((entry) => entry.category === 'pokemon' && entry.name.toLowerCase() === pokemon.name.toLowerCase()) ||
                                      pokemon.id === shopEntryForm.catalogId) &&
                                    (pokemon.name.toLocaleLowerCase().includes(shopProductSearch.trim().toLocaleLowerCase()) ||
                                      pokemon.id === shopEntryForm.catalogId))
                                  .map((pokemon) => <option key={pokemon.id} value={pokemon.id}>{pokemon.num}. {pokemon.name}</option>)}
                            </select>
                          </label>
                          {shopEntryForm.category === 'pokemon' && selectedShopPokemon && (
                            <div className="shop-admin-preview">
                              <div><span>Normal</span><PokemonSprite pokemon={selectedShopPokemon} alt={`${selectedShopPokemon.name} normal`} /></div>
                              <div><span>Shiny</span><PokemonSprite pokemon={selectedShopPokemon} shiny alt={`${selectedShopPokemon.name} shiny`} /></div>
                              <label className="shop-admin-shiny-choice">
                                <input type="checkbox" checked={shopEntryForm.shiny} onChange={(event) => setShopEntryForm((current) => ({ ...current, shiny: event.target.checked }))} />
                                Vender shiny
                              </label>
                            </div>
                          )}
                          <label>
                            Precio
                            <input type="number" min="0" step="1" value={shopEntryForm.price} onChange={(event) => setShopEntryForm((current) => ({ ...current, price: event.target.value }))} />
                          </label>
                          <label>
                            Existencias
                            <input type="number" min="0" step="1" value={shopEntryForm.quantity} onChange={(event) => setShopEntryForm((current) => ({ ...current, quantity: event.target.value }))} />
                          </label>
                          <button type="button" className="secondary-button" onClick={addShopCatalogEntry}>Agregar producto</button>
                        </div>
                        <div className="shop-admin-list">
                          {adminDashboard.shopCatalog.map((entry) => (
                            <div className="shop-admin-row" key={`${entry.category}:${entry.id}:${entry.name}`}>
                              <div className="shop-admin-product">
                                <strong>{entry.name}</strong>
                                <small>{entry.category === 'pokemon' ? 'Pokémon' : 'Objeto'}</small>
                                {entry.category === 'pokemon' && (() => {
                                  const catalogPokemon = getCatalogPokemon(entry.name)
                                  return catalogPokemon ? (
                                    <div className="shop-admin-sprite-pair">
                                      <span><PokemonSprite pokemon={catalogPokemon} alt="" />Normal</span>
                                      <span><PokemonSprite pokemon={catalogPokemon} shiny alt="" />Shiny</span>
                                      <label className="shop-admin-shiny-choice">
                                        <input type="checkbox" checked={Boolean(entry.shiny)} onChange={(event) => updateShopCatalogEntry(entry.id, 'shiny', event.target.checked)} />
                                        Shiny
                                      </label>
                                    </div>
                                  ) : null
                                })()}
                              </div>
                              <label>
                                Precio
                                <input type="number" min="0" step="1" value={entry.price} onChange={(event) => updateShopCatalogEntry(entry.id, 'price', event.target.value)} />
                              </label>
                              <label>
                                Stock
                                <input type="number" min="0" step="1" value={entry.quantity} onChange={(event) => updateShopCatalogEntry(entry.id, 'quantity', event.target.value)} />
                              </label>
                              <label className="shop-admin-enabled">
                                <input type="checkbox" checked={isShopEntryEnabled(entry)} onChange={(event) => updateShopCatalogEntry(entry.id, 'enabled', event.target.checked)} />
                                Visible
                              </label>
                              <button type="button" className="secondary-button" onClick={() => removeShopCatalogEntry(entry.id)} aria-label={`Quitar ${entry.name} de la tienda`}>Quitar</button>
                            </div>
                          ))}
                          {!adminDashboard.shopCatalog.length && <small>Aún no hay productos en la tienda.</small>}
                        </div>
                        <small>Cada compra entrega una unidad. Los cambios se publican al guardar y el stock se comparte entre usuarios.</small>
                        <button type="button" className="primary-button" onClick={saveAdminShopCatalog}>Guardar catálogo y existencias</button>
                      </details>

                      <details className="admin-subpanel" open>
                        <summary>Ruleta</summary>
                        <div className="roulette-admin-tabs" role="tablist" aria-label="Apartados de ruleta">
                          {rouletteWheels.map((wheel) => (
                            <button key={wheel.id} type="button" role="tab" aria-selected={activeAdminRouletteWheel === wheel.id} className={activeAdminRouletteWheel === wheel.id ? 'active' : ''} onClick={() => setActiveAdminRouletteWheel(wheel.id)}>
                              {wheel.label}
                            </button>
                          ))}
                        </div>
                        <strong>{rouletteWheels.find((wheel) => wheel.id === activeAdminRouletteWheel).title}</strong>
                        <small>Los pesos se normalizan entre los premios activos de cada grupo; un peso mayor aumenta su probabilidad relativa.</small>
                        {activeAdminRouletteWheel === 'category' ? (
                          <div className="roulette-admin-list">
                            {adminDashboard.roulettePrizes.filter((entry) => entry.wheelType === 'category').map((entry) => (
                              <div className="roulette-admin-row category-row" key={entry.id}>
                                <strong>{entry.prizeType === 'item' ? 'Objetos' : 'Pokémon'}</strong>
                                <label>Peso<input aria-label={`Probabilidad de ${entry.prizeType}`} type="number" min="0.01" max="10000" step="0.01" value={entry.probability} onChange={(event) => updateRoulettePrize(entry.id, 'probability', event.target.value)} /></label>
                                <label className="roulette-enabled">Activa<input type="checkbox" checked={Boolean(entry.enabled)} onChange={(event) => updateRoulettePrize(entry.id, 'enabled', event.target.checked)} /></label>
                              </div>
                            ))}
                            <div className="roulette-admin-add">
                              <button type="button" className="secondary-button" onClick={() => addRoulettePrize('category', 'item')}>Añadir resultado de objetos</button>
                              <button type="button" className="secondary-button" onClick={() => addRoulettePrize('category', 'pokemon')}>Añadir resultado de Pokémon</button>
                            </div>
                          </div>
                        ) : (
                          <div className="roulette-admin-list">
                            {adminDashboard.roulettePrizes.filter((entry) => entry.wheelType === 'prize' && entry.coinType === activeAdminRouletteWheel).map((entry) => {
                              const prizeOptions = entry.prizeType === 'pokemon' ? availablePokemonForShop : itemCatalog
                              const hasMatchingPrize = prizeOptions.some((option) => option.name === entry.name)
                              const search = (roulettePrizeSearches[entry.id] || '').trim().toLocaleLowerCase()
                              const filteredPrizeOptions = prizeOptions.filter((option) =>
                                option.name.toLocaleLowerCase().includes(search) ||
                                String(option.id).toLocaleLowerCase().includes(search) ||
                                option.name === entry.name)
                              return (
                                <div className="roulette-admin-row" key={entry.id}>
                                  <label>Premio
                                    <input
                                      type="search"
                                      value={roulettePrizeSearches[entry.id] || ''}
                                      onChange={(event) => setRoulettePrizeSearches((current) => ({
                                        ...current,
                                        [entry.id]: event.target.value,
                                      }))}
                                      placeholder={entry.prizeType === 'pokemon' ? 'Buscar Pokémon...' : 'Buscar objeto...'}
                                      aria-label={entry.prizeType === 'pokemon' ? 'Buscar Pokémon de la ruleta' : 'Buscar objeto de la ruleta'}
                                    />
                                    <select aria-label="Nombre del premio" value={entry.name} onChange={(event) => updateRoulettePrize(entry.id, 'name', event.target.value)}>
                                      <option value="">Selecciona un premio</option>
                                      {entry.name && !hasMatchingPrize && <option value={entry.name}>{entry.name} (actual)</option>}
                                      {filteredPrizeOptions.map((option) => <option key={option.id} value={option.name}>{option.name}</option>)}
                                    </select>
                                  </label>
                                  <label>Tipo<select value={entry.prizeType} onChange={(event) => {
                                    updateRoulettePrizeType(entry.id, event.target.value)
                                    setRoulettePrizeSearches((current) => ({ ...current, [entry.id]: '' }))
                                  }}><option value="item">Objeto</option><option value="pokemon">Pokémon</option></select></label>
                                  <label>Cantidad<input aria-label="Cantidad del premio" type="number" min="1" max="99" value={entry.amount} onChange={(event) => updateRoulettePrize(entry.id, 'amount', event.target.value)} /></label>
                                  <label>Peso<input aria-label="Peso de probabilidad" type="number" min="0.01" max="10000" step="0.01" value={entry.probability} onChange={(event) => updateRoulettePrize(entry.id, 'probability', event.target.value)} /></label>
                                  <label>Rareza<input aria-label="Rareza del premio" value={entry.rarity} onChange={(event) => updateRoulettePrize(entry.id, 'rarity', event.target.value)} /></label>
                                  <label className="roulette-enabled">Activa<input type="checkbox" checked={Boolean(entry.enabled)} onChange={(event) => updateRoulettePrize(entry.id, 'enabled', event.target.checked)} /></label>
                                  <button type="button" className="secondary-button" onClick={() => removeRoulettePrize(entry.id)} aria-label={`Quitar premio ${entry.name || ''}`}>Quitar</button>
                                </div>
                              )
                            })}
                            <div className="roulette-admin-add">
                              <button type="button" className="secondary-button" onClick={() => addRoulettePrize(activeAdminRouletteWheel, 'item')}>Añadir objeto</button>
                              <button type="button" className="secondary-button" onClick={() => addRoulettePrize(activeAdminRouletteWheel, 'pokemon')}>Añadir Pokémon</button>
                            </div>
                          </div>
                        )}
                        <button type="button" className="secondary-button" onClick={saveAdminRoulette}>Actualizar premios</button>
                      </details>

                      <details className="admin-subpanel">
                        <summary>Sanciones</summary>
                        <label>
                          Usuario
                          <select value={adminForm.sanctionUserId} onChange={(event) => setAdminForm((current) => ({ ...current, sanctionUserId: event.target.value }))}>
                            <option value="">Selecciona un usuario</option>
                            {userDirectory.map((entry) => (
                              <option key={entry.id} value={entry.id}>{entry.username}</option>
                            ))}
                          </select>
                        </label>
                        <label>
                          Tipo
                          <select value={adminForm.sanctionType} onChange={(event) => setAdminForm((current) => ({ ...current, sanctionType: event.target.value }))}>
                            <option value="warning">Advertencia</option>
                            <option value="suspension">Suspensión</option>
                            <option value="ban">Ban</option>
                          </select>
                        </label>
                        <label>
                          Motivo
                          <textarea rows={3} value={adminForm.sanctionReason} onChange={(event) => setAdminForm((current) => ({ ...current, sanctionReason: event.target.value }))} />
                        </label>
                        <button type="button" className="primary-button" onClick={saveAdminSanction}>Guardar sanción</button>
                      </details>
                      </>}
                    </div>
                  )}
                  <br />
                  <button type="button" className="secondary-button" onClick={handleLogout}>Cerrar sesión</button>
                </section>
              )}

              {activeSection === 'battle' && (
                <section className="panel battle-panel">
                  <header className="battle-page-heading">
                    <div><span className="panel-tag">Combate entre entrenadores</span><h2>{battleMode === 'training' ? 'Entrenar' : 'Desafíos'}</h2></div>
                    <div className="battle-rules-badge"><strong>1 vs 1</strong><span>[Gen 9] National Dex AG</span></div>
                  </header>
                  {battleMode === 'pvp' && <p className="battle-reward-note">Victoria: 30 bayas + 1 moneda de bronce. Derrota: 15 bayas + 1 moneda de bronce.</p>}
                  {!activeBattle && (
                    <div className="battle-mode-tabs" role="tablist" aria-label="Modalidad de combate">
                      <button type="button" role="tab" aria-selected={battleMode === 'pvp'} className={battleMode === 'pvp' ? 'active' : ''} onClick={() => setBattleMode('pvp')}>Combates</button>
                      <button type="button" role="tab" aria-selected={battleMode === 'training'} className={battleMode === 'training' ? 'active' : ''} onClick={() => setBattleMode('training')}>Entrenar</button>
                    </div>
                  )}
                  {battleNotice && <p className="battle-notice" role="status">{battleNotice}</p>}

                  {activeBattle ? (
                    <div className="showdown-layout">
                      <div className="showdown-main">
                        <div className="arena-toolbar">
                          <span>{activeBattle.format}</span>
                          <strong>{activeBattle.status === 'finished' ? 'Combate finalizado' : `Turno ${activeBattle.turn}`}</strong>
                          {activeBattle.status !== 'finished' && (
                            <button type="button" className="secondary-button" aria-pressed={battleSoundEnabled} onClick={() => setBattleSoundEnabled((enabled) => !enabled)}>
                              Sonido {battleSoundEnabled ? 'activado' : 'desactivado'}
                            </button>
                          )}
                          <button type="button" className="secondary-button" onClick={() => {
                            if (activeBattle.isSpectator) {
                              setSpectatedBattleId(null)
                              setBattleMessages([])
                              setActiveBattle(null)
                            } else {
                              setDismissedBattleId(activeBattle.id)
                              setActiveBattle(null)
                            }
                          }}>{activeBattle.isSpectator ? 'Salir de espectador' : 'Volver al lobby'}</button>
                        </div>
                        <div className="showdown-arena" aria-label="Arena de combate Pokémon">
                          <span className="arena-sunlight" aria-hidden="true" />
                          {['p2', 'p1'].map((sideId) => {
                            const player = activeBattle.players[sideId]
                            const isPlayer = activeBattle.isSpectator
                              ? sideId === 'p1'
                              : sideId === activeBattle.yourSide
                            const sprite = getBattleSprite(player, isPlayer ? 'back' : 'front')
                            return (
                              <div className={`arena-combatant ${isPlayer ? 'player' : 'opponent'}`} key={sideId}>
                                <div className="arena-platform" />
                                {sprite && <img key={`${sideId}:${player.species}:${activeBattle.turn}`} className="arena-pokemon" src={sprite} alt={player.species} />}
                              </div>
                            )
                          })}
                          {['p2', 'p1'].map((sideId) => {
                            const player = activeBattle.players[sideId]
                            const isPlayer = activeBattle.isSpectator
                              ? sideId === 'p1'
                              : sideId === activeBattle.yourSide
                            const hpPercent = Math.max(0, Math.min(100, (player.hp / player.maxHp) * 100))
                            return (
                              <div className={`arena-status-panel ${isPlayer ? 'player' : 'opponent'}`} key={`status:${sideId}`}>
                                <div><strong>{player.species}</strong><span>{player.status ? getBattleStatusName(player.status) : `${Math.ceil(hpPercent)}%`}</span></div>
                                <small>{player.username}</small>
                                <span className="arena-health-track"><span style={{ width: `${hpPercent}%` }} /></span>
                                <small>{player.hp} / {player.maxHp} PS</small>
                              </div>
                            )
                          })}
                          <span className="arena-turn-stamp">{activeBattle.status === 'finished' ? 'RESULTADO' : `TURNO ${activeBattle.turn}`}</span>
                        </div>
                        <div className="battle-party-panels" aria-label="Equipos del combate">
                          {['p1', 'p2'].map((sideId) => {
                            const player = activeBattle.players[sideId]
                            const isPlayer = sideId === activeBattle.yourSide
                            const canSwitch = isPlayer &&
                              activeBattle.status !== 'finished' &&
                              Boolean(activeBattle.request) &&
                              activeBattle.request.type !== 'wait' &&
                              !activeBattle.request?.trapped
                            return (
                              <section className="battle-party-panel" key={sideId} aria-label={`Equipo de ${player.username}`}>
                                <h3>{isPlayer ? 'Tu equipo' : `Equipo de ${player.username}`}</h3>
                                <div className="battle-party-list">
                                  {player.team.map((pokemon) => (
                                    <button
                                      type="button"
                                      className={`battle-party-pokemon${pokemon.active ? ' active' : ''}${pokemon.fainted ? ' fainted' : ''}`}
                                      key={`${sideId}:${pokemon.index}`}
                                      disabled={!canSwitch || !isPlayer || pokemon.active || pokemon.fainted || battleBusy}
                                      onClick={() => chooseBattleSwitch(pokemon.index)}
                                      aria-label={`${pokemon.nickname || pokemon.species}${pokemon.fainted ? ', debilitado' : `, ${pokemon.hp} de ${pokemon.maxHp} PS`}${pokemon.active ? ', en combate' : ''}`}
                                    >
                                      <img src={getBattleSprite(pokemon, isPlayer ? 'back' : 'front') || ''} alt="" />
                                      <span>{pokemon.nickname || pokemon.species}</span>
                                      <small>{pokemon.fainted ? 'Debilitado' : `${pokemon.hp}/${pokemon.maxHp} PS${pokemon.status ? ` · ${getBattleStatusName(pokemon.status)}` : ''}`}</small>
                                    </button>
                                  ))}
                                </div>
                              </section>
                            )
                          })}
                        </div>
                        <div className="battle-command-bar">
                          {activeBattle.isSpectator ? (
                            <strong className="battle-spectator-note">Estás viendo este combate como espectador. No puedes enviar acciones.</strong>
                          ) : activeBattle.status === 'finished' ? (
                            <div className="battle-result-banner">
                              <strong>{activeBattle.isWinner ? '¡Victoria!' : activeBattle.winnerName ? 'Derrota' : 'Empate'}</strong>
                              <span>{activeBattle.isTraining
                                ? 'Entrenamiento completado. El equipo bot queda guardado para futuras prácticas.'
                                : activeBattle.winnerName
                                ? `Recibes ${activeBattle.isWinner ? 30 : 15} bayas + 1 moneda de bronce.`
                                : 'El combate terminó sin vencedor.'}</span>
                            </div>
                          ) : activeBattle.request?.type === 'move' ? (
                            <>
                              <div><span className="panel-tag">Elige un movimiento</span><strong>¿Qué hará {activeBattle.players[activeBattle.yourSide].species}?</strong></div>
                              <div className="battle-move-grid">
                                {activeBattle.request.moves.map((move, index) => {
                                  const moveData = getMoveById(move.id)
                                  const shownMove = battleOption === 'dynamax'
                                    ? activeBattle.request.maxMoves?.maxMoves?.[index]
                                    : null
                                  const moveType = moveTypeNames[move.type || moveData?.type] || move.type || moveData?.type || 'Tipo desconocido'
                                  const category = moveCategoryNames[move.category || moveData?.category] || move.category || moveData?.category || ''
                                  const power = move.basePower ?? moveData?.basePower
                                  const accuracy = move.accuracy ?? moveData?.accuracy
                                  const details = [
                                    `${move.pp}/${move.maxpp} PP`,
                                    moveType,
                                    category,
                                    power ? `Potencia ${power}` : '',
                                    accuracy === true ? 'Precisión: siempre' : accuracy ? `Precisión ${accuracy}%` : '',
                                  ].filter(Boolean).join(' · ')
                                  const unavailable = battleBusy || move.disabled || move.pp < 1
                                  return (
                                    <div className="battle-move-choice" key={move.id}>
                                      <button type="button" title={shownMove?.move || move.move} disabled={unavailable} onClick={() => chooseBattleMove(move.id, battleOption)}>
                                        <span>{getMoveById(shownMove?.id || move.id)?.name || shownMove?.move || moveData?.name || move.move}</span>
                                        <small>{details}</small>
                                      </button>
                                      {moveData?.description && <p className="battle-move-description">{moveData.description}</p>}
                                      {move.canZMove && (
                                        <button type="button" className="z-move-choice" disabled={unavailable} onClick={() => chooseBattleMove(move.id, 'zmove')}>
                                          Poder Z: {move.zMove || move.move}
                                        </button>
                                      )}
                                    </div>
                                  )
                                })}
                              </div>
                              {(activeBattle.request.canTerastallize || activeBattle.request.canMegaEvo || activeBattle.request.canMegaEvoX || activeBattle.request.canMegaEvoY || activeBattle.request.canUltraBurst || activeBattle.request.canDynamax) && (
                                <div className="battle-mechanic-options" aria-label="Opciones especiales de Showdown">
                                  {activeBattle.request.canTerastallize && (
                                    <button type="button" aria-pressed={battleOption === 'terastallize'} className={battleOption === 'terastallize' ? 'active' : ''} disabled={battleBusy} onClick={() => setBattleOption(battleOption === 'terastallize' ? '' : 'terastallize')}>
                                      Teracristalizar · {moveTypeNames[activeBattle.request.canTerastallize] || activeBattle.request.canTerastallize}
                                    </button>
                                  )}
                                  {activeBattle.request.canMegaEvo && (
                                    <button type="button" aria-pressed={battleOption === 'mega'} className={battleOption === 'mega' ? 'active' : ''} disabled={battleBusy} onClick={() => setBattleOption(battleOption === 'mega' ? '' : 'mega')}>Mega Evolucionar</button>
                                  )}
                                  {activeBattle.request.canMegaEvoX && (
                                    <button type="button" aria-pressed={battleOption === 'megax'} className={battleOption === 'megax' ? 'active' : ''} disabled={battleBusy} onClick={() => setBattleOption(battleOption === 'megax' ? '' : 'megax')}>Mega Evolucionar X</button>
                                  )}
                                  {activeBattle.request.canMegaEvoY && (
                                    <button type="button" aria-pressed={battleOption === 'megay'} className={battleOption === 'megay' ? 'active' : ''} disabled={battleBusy} onClick={() => setBattleOption(battleOption === 'megay' ? '' : 'megay')}>Mega Evolucionar Y</button>
                                  )}
                                  {activeBattle.request.canUltraBurst && (
                                    <button type="button" aria-pressed={battleOption === 'ultra'} className={battleOption === 'ultra' ? 'active' : ''} disabled={battleBusy} onClick={() => setBattleOption(battleOption === 'ultra' ? '' : 'ultra')}>Ultraestallido</button>
                                  )}
                                  {activeBattle.request.canDynamax && (
                                    <button type="button" aria-pressed={battleOption === 'dynamax'} className={battleOption === 'dynamax' ? 'active' : ''} disabled={battleBusy} onClick={() => setBattleOption(battleOption === 'dynamax' ? '' : 'dynamax')}>Dinamaxizar</button>
                                  )}
                                </div>
                              )}
                              {!activeBattle.request.trapped && <small>También puedes seleccionar otro Pokémon de tu equipo para cambiarlo.</small>}
                            </>
                          ) : activeBattle.request?.type === 'switch' ? (
                            <strong>Elige un Pokémon disponible de tu equipo para continuar.</strong>
                          ) : <strong>Esperando el movimiento del rival…</strong>}
                        </div>
                      </div>
                      <aside className="battle-log-panel" aria-live="polite">
                        <h3>Registro del combate</h3>
                        <div className="battle-log-list">
                          {activeBattle.log.map(formatBattleLog).filter(Boolean).map((message, index) => <p key={`${index}:${message}`}>{message}</p>)}
                        </div>
                        {!activeBattle.isTraining && (
                          <>
                            <h3 className="battle-chat-heading">Chat del combate {activeBattle.isSpectator && <small>solo lectura</small>}</h3>
                            <div className="battle-chat-messages" aria-live="polite">
                              {battleMessages.map((message) => (
                                <p key={message.id}><strong>{message.username}</strong> {message.message}</p>
                              ))}
                              {!battleMessages.length && <small>Aún no hay mensajes.</small>}
                            </div>
                            {!activeBattle.isSpectator && activeBattle.status === 'active' && (
                              <form className="battle-chat-form" onSubmit={sendBattleChatMessage}>
                                <input maxLength={500} value={battleChatInput} onChange={(event) => setBattleChatInput(event.target.value)} placeholder="Escribe en el chat del combate..." aria-label="Mensaje del chat del combate" />
                                <button type="submit" disabled={!battleChatInput.trim()}>Enviar</button>
                              </form>
                            )}
                          </>
                        )}
                      </aside>
                    </div>
                  ) : (
                    <div className="battle-lobby">
                      {battleMode === 'training' ? (
                        <section className="training-lobby">
                          <div className="battle-lobby-title"><div><span className="panel-tag">Campo de práctica</span><h3>Elige la dificultad</h3></div></div>
                          <p className="training-intro">Enfréntate a un equipo de seis Pokémon en la arena de Showdown. La práctica no entrega ni descuenta recompensas.</p>
                          <div className="training-difficulty-grid" role="group" aria-label="Dificultad del entrenador bot">
                            {[
                              { id: 'easy', label: 'Fácil', icon: '🌱', description: 'Rival amable, equipo equilibrado y decisiones aleatorias.' },
                              { id: 'medium', label: 'Medio', icon: '⚔️', description: 'Equipo preparado al nivel de tu equipo y movimientos de mayor potencia.' },
                              { id: 'hard', label: 'Difícil', icon: '🔥', description: 'Rival más fuerte, con estadísticas entrenadas y ataques que aprovechan debilidades.' },
                            ].map((difficulty) => (
                              <button
                                type="button"
                                key={difficulty.id}
                                className={`training-difficulty-card${trainingDifficulty === difficulty.id ? ' active' : ''}`}
                                aria-pressed={trainingDifficulty === difficulty.id}
                                onClick={() => setTrainingDifficulty(difficulty.id)}
                              >
                                <span className="training-difficulty-icon" aria-hidden="true">{difficulty.icon}</span>
                                <strong>{difficulty.label}</strong>
                                <small>{difficulty.description}</small>
                              </button>
                            ))}
                          </div>
                          <div className="training-team-summary">
                            <div><span className="panel-tag">Tu equipo</span><strong>{battleRoster.length}/6 Pokémon listos</strong></div>
                            <div className="battle-team-preview-list">
                              {battleRoster.map((pokemon) => (
                                <div className="battle-team-preview-pokemon" key={pokemon.instanceId}>
                                  <PokemonSprite pokemon={getCatalogPokemon(pokemon.species)} shiny={pokemon.shiny} alt="" />
                                  <span>{pokemon.nickname || pokemon.species}</span>
                                  <small>Niv. {pokemon.level}</small>
                                </div>
                              ))}
                              {!battleRoster.length && <p className="battle-empty-state">Agrega al menos un Pokémon a tu equipo para entrenar.</p>}
                            </div>
                          </div>
                          <button type="button" className="primary-button training-start-button" disabled={battleBusy || !battleRoster.length} onClick={startTrainingBattle}>
                            {battleBusy ? 'Preparando combate…' : `Iniciar entrenamiento · ${trainingDifficulty === 'easy' ? 'Fácil' : trainingDifficulty === 'medium' ? 'Medio' : 'Difícil'}`}
                          </button>
                          <p className="training-persistence-note">Los equipos bot se guardan y se reutilizan según la dificultad y el rango de nivel del equipo.</p>
                          {!apiClient.isConfigured() && <p className="battle-empty-state">Conecta con el servidor para iniciar un entrenamiento y guardar el equipo bot.</p>}
                        </section>
                      ) : !apiClient.isConfigured() ? (
                        <p className="battle-empty-state">Conecta con el servidor para enviar y recibir solicitudes de combate.</p>
                      ) : (
                        <>
                          <section className="battle-active-list" aria-label="Combates activos">
                            <div><span className="panel-tag">En vivo</span><h3>Combates activos ({activeBattles.length})</h3></div>
                            <div className="battle-active-list-items">
                              {activeBattles.map((battle) => (
                                <article className="battle-active-card" key={battle.id}>
                                  <div>
                                    <strong>{battle.challengerName} vs {battle.opponentName}</strong>
                                    <span>Turno {battle.turn} · {battle.players.p1.species} vs {battle.players.p2.species}</span>
                                  </div>
                                  <button type="button" disabled={battleBusy} onClick={() => openBattleAsSpectator(battle.id)}>Ver combate</button>
                                </article>
                              ))}
                              {!activeBattles.length && <p className="battle-empty-state">No hay combates activos para ver.</p>}
                            </div>
                          </section>
                          <section className="battle-lobby-create">
                            <div className="battle-lobby-title"><div><span className="panel-tag">Nuevo desafío</span><h3>Elige a quién retar</h3></div></div>
                            <div className="battle-scope-control" role="group" aria-label="Grupo de rivales">
                              <button type="button" className={battleScope === 'guild' ? 'active' : ''} aria-pressed={battleScope === 'guild'} onClick={() => setBattleScope('guild')}>Mi gremio</button>
                              <button type="button" className={battleScope === 'community' ? 'active' : ''} aria-pressed={battleScope === 'community'} onClick={() => setBattleScope('community')}>Otros gremios</button>
                            </div>
                            <section className="battle-team-preview" aria-label="Pokémon de tu equipo para combatir">
                              <h4>Tu equipo de combate <span>({battleRoster.length}/6)</span></h4>
                              <p className="battle-lead-hint">El primer Pokémon será el inicial. Usa «Elegir inicial» para cambiarlo.</p>
                              <div className="battle-team-preview-list">
                                {battleRoster.map((pokemon, index) => (
                                  <div className="battle-team-preview-pokemon" key={pokemon.instanceId}>
                                    <PokemonSprite pokemon={getCatalogPokemon(pokemon.species)} shiny={pokemon.shiny} alt="" />
                                    <span>{pokemon.nickname || pokemon.species}</span>
                                    <small>{index === 0 ? 'Inicial' : ''}</small>
                                    {index > 0 && <button type="button" disabled={battleBusy} onClick={() => setBattleLead(pokemon.instanceId)}>Elegir inicial</button>}
                                  </div>
                                ))}
                                {!battleRoster.length && <p className="battle-empty-state">Agrega Pokémon a tu equipo. Los Pokémon guardados en el PC no participan.</p>}
                              </div>
                            </section>
                            <div className="battle-opponent-list">
                              {battleOpponents.map((opponent) => (
                                <div className="battle-opponent-row" key={opponent.id}>
                                  <div><strong>{opponent.username}</strong><small>{opponent.guild}</small></div>
                                  <button type="button" disabled={battleBusy || !battleRoster.length || battleRequests.some((request) => request.status === 'pending' && Number(request.challengerId) === Number(user.id) && Number(request.opponentId) === Number(opponent.id))} onClick={() => sendBattleChallenge(opponent)}>Desafiar</button>
                                </div>
                              ))}
                              {!battleOpponents.length && <p className="battle-empty-state">No hay integrantes disponibles en este grupo.</p>}
                            </div>
                          </section>
                          <section className="battle-invites-panel">
                            <div><span className="panel-tag">Solicitudes</span><h3>Desafíos recibidos</h3></div>
                            <div className="battle-request-list">
                              {battleRequests.filter((request) => Number(request.opponentId) === Number(user.id)).map((request) => (
                                <article className="battle-request-row" key={request.id}>
                                  <div className="request-sprite"><PokemonSprite pokemon={getCatalogPokemon(request.challengerPokemon)} shiny={Boolean(request.challengerShiny)} alt="" /></div>
                                  <div className="request-copy"><strong>{request.challengerName}</strong><span>{request.challengerPokemon} · {request.scope === 'guild' ? 'Tu gremio' : 'Comunidad'}</span></div>
                                  <button type="button" disabled={battleBusy || !battleRoster.length} onClick={() => acceptBattleChallenge(request.id)}>Aceptar</button>
                                  <button type="button" className="reject-button" disabled={battleBusy} onClick={() => rejectBattleChallenge(request.id)}>Rechazar</button>
                                </article>
                              ))}
                              {!battleRequests.some((request) => Number(request.opponentId) === Number(user.id)) && <p className="battle-empty-state">No tienes solicitudes pendientes.</p>}
                            </div>
                            {battleRequests.some((request) => Number(request.challengerId) === Number(user.id)) && <p className="outgoing-challenge-note">Tienes un desafío enviado; aparecerá en esta lista cuando lo acepten o rechacen.</p>}
                          </section>
                        </>
                      )}
                    </div>
                  )}
                </section>
              )}

              {activeSection === 'shop' && (
                <section className="panel shop-panel">
                  <div className="shop-header">
                    <div>
                      <span className="panel-tag">Tienda semanal</span>
                      <h3>Catálogo de la comunidad</h3>
                    </div>
                    <strong>{user.bayas} bayas disponibles</strong>
                  </div>

                  <div className="shop-category-tabs" role="tablist" aria-label="Categorías de tienda">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={shopCategory === 'items'}
                      className={shopCategory === 'items' ? 'active' : ''}
                      onClick={() => setShopCategory('items')}
                    >
                      Objetos <span>{shopItems.length}</span>
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={shopCategory === 'pokemon'}
                      className={shopCategory === 'pokemon' ? 'active' : ''}
                      onClick={() => setShopCategory('pokemon')}
                    >
                      Pokémon <span>{shopPokemon.length}</span>
                    </button>
                  </div>

                  {shopCategory === 'items' ? (
                    <div className="shop-category-content" role="tabpanel" aria-label="Objetos">
                      <div className="shop-grid">
                        {shopItems.map((item) => {
                          const isSoldOut = Number(item.quantity) < 1
                          const isPending = pendingShopPurchase === `item:${item.id}`
                          const itemSprite = getShopItemSprite(item)
                          return (
                            <article key={item.id} className={isSoldOut ? 'shop-card sold-out' : 'shop-card'}>
                              <div className="item-card-heading">
                                {itemSprite
                                  ? <img className="item-shop-sprite" src={itemSprite} alt="" loading="lazy" />
                                  : <span className="item-icon large" aria-hidden="true">✦</span>}
                                <span className={isSoldOut ? 'tag sold-out-tag' : 'tag'}>{isSoldOut ? 'Agotado' : item.rarity || 'Objeto'}</span>
                              </div>
                              <h4>{item.name}</h4>
                              <p>{getShopItemDescription(item)}</p>
                              <span className="shop-stock">{isSoldOut ? 'Agotado' : `${item.quantity} disponibles`}</span>
                              <div className="shop-footer">
                                <strong>{item.price} bayas</strong>
                                <button type="button" disabled={isSoldOut || pendingShopPurchase !== null} onClick={() => buyItem(item)}>
                                  {isSoldOut ? 'Agotado' : isPending ? 'Procesando...' : 'Comprar'}
                                </button>
                              </div>
                            </article>
                          )
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="shop-category-content" role="tabpanel" aria-label="Pokémon">
                      <div className="shop-grid pokemon-grid">
                        {shopPokemon.map((pokemon) => {
                          const isOwned = ownedPokemonNames.has(pokemon.name.toLowerCase())
                          const isSoldOut = Number(pokemon.quantity) < 1
                          const isPending = pendingShopPurchase === `pokemon:${pokemon.name.toLowerCase()}`
                          return (
                            <article key={pokemon.id} className={isSoldOut ? 'shop-card pokemon-card sold-out' : 'shop-card pokemon-card'}>
                              <div className="item-card-heading">
                                <span className="sprite-shop">
                                  <PokemonSprite pokemon={getCatalogPokemon(pokemon.name)} shiny={pokemon.shiny} alt={pokemon.name} />
                                </span>
                                <span className={isSoldOut ? 'tag sold-out-tag' : 'tag rare'}>{isSoldOut ? 'Agotado' : pokemon.rarity}</span>
                              </div>
                              <h4>{pokemon.name}</h4>
                              <p>{pokemon.description}</p>
                              <span className="shop-stock">{isSoldOut ? 'Agotado' : `${pokemon.quantity} disponibles`}</span>
                              <div className="shop-footer">
                                <strong>{pokemon.price} bayas</strong>
                                <button type="button" disabled={isSoldOut || isOwned || pendingShopPurchase !== null} onClick={() => buyPokemon(pokemon)}>
                                  {isSoldOut ? 'Agotado' : isOwned ? 'Ya lo tienes' : isPending ? 'Procesando...' : 'Adquirir'}
                                </button>
                              </div>
                            </article>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </section>
              )}

              {activeSection === 'team' && (
                <section className="panel collection-panel pokemon-roster-panel">
                  <div className="section-heading">
                    <div><span className="panel-tag">Gestión de Pokémon</span><h2>Equipo Pokémon</h2></div>
                    <span className="section-count">{pokemonRoster.team.length} / 6 en el equipo</span>
                  </div>
                  <div className="pokemon-box-tabs" role="tablist" aria-label="Equipo y PC">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activePokemonBox === 'team'}
                      className={activePokemonBox === 'team' ? 'active' : ''}
                      onClick={() => { setActivePokemonBox('team'); setPokemonNotice('') }}
                    >
                      Equipo <span>{pokemonRoster.team.length}/6</span>
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activePokemonBox === 'pc'}
                      className={activePokemonBox === 'pc' ? 'active' : ''}
                      onClick={() => { setActivePokemonBox('pc'); setPokemonNotice('') }}
                    >
                      PC <span>{pokemonRoster.pc.length}</span>
                    </button>
                  </div>

                  <div className="pokemon-storage-layout">
                    <div className="pokemon-storage-column">
                      <div className="storage-heading">
                        <div>
                          <span>{activePokemonBox === 'team' ? 'En combate' : 'Almacenamiento'}</span>
                          <strong>{activePokemonBox === 'team' ? 'Equipo activo' : 'Caja del PC'}</strong>
                        </div>
                        <span>{activePokemonBox === 'team' ? `${pokemonRoster.team.length} / 6` : `${pokemonRoster.pc.length} Pokémon`}</span>
                      </div>

                      {pokemonNotice && <p className="pokemon-notice" role="status">{pokemonNotice}</p>}

                      {visiblePokemon.length ? (
                        <div className="roster-grid">
                          {visiblePokemon.map((pokemon, index) => {
                            const catalogPokemon = getCatalogPokemon(pokemon.species)
                            const targetBox = activePokemonBox === 'team' ? 'pc' : 'team'
                            const isTeamFull = targetBox === 'team' && pokemonRoster.team.length >= 6
                            return (
                              <article className="roster-card" key={pokemon.instanceId}>
                                <button
                                  type="button"
                                  className={selectedPokemonId === pokemon.instanceId ? 'roster-card-main selected' : 'roster-card-main'}
                                  aria-pressed={selectedPokemonId === pokemon.instanceId}
                                  disabled={Boolean(evolvingPokemonId)}
                                  onClick={() => selectPokemon(pokemon)}
                                >
                                  <span className="roster-sprite"><PokemonSprite pokemon={catalogPokemon} shiny={pokemon.shiny} alt="" /></span>
                                  <span className="roster-card-copy">
                                    <span className="roster-order">{activePokemonBox === 'team' ? `Equipo ${String(index + 1).padStart(2, '0')}` : 'Almacenado'}</span>
                                    <strong>{pokemon.nickname || pokemon.species}</strong>
                                    {pokemon.nickname && <small>{pokemon.species}</small>}
                                    <span className="roster-types">{catalogPokemon?.types.join(' / ') || 'Tipo desconocido'}</span>
                                  </span>
                                </button>
                                <button
                                  type="button"
                                  className="roster-transfer"
                                  aria-label={`Mover ${pokemon.nickname || pokemon.species} ${targetBox === 'pc' ? 'al PC' : 'al equipo'}`}
                                  disabled={isTeamFull || Boolean(evolvingPokemonId) || pokemonSaving}
                                  onClick={() => movePokemon(pokemon, targetBox)}
                                >
                                  {targetBox === 'pc' ? 'Pasar al PC' : 'Añadir al equipo'}
                                </button>
                              </article>
                            )
                          })}
                        </div>
                      ) : (
                        <div className="storage-empty">
                          <span aria-hidden="true">◈</span>
                          <strong>{activePokemonBox === 'team' ? 'Tu equipo está vacío' : 'Aún no hay Pokémon en el PC'}</strong>
                          <p>{activePokemonBox === 'team' ? 'Elige un Pokémon del PC para formar tu equipo.' : 'Los Pokémon que compres se guardarán aquí.'}</p>
                          <button
                            type="button"
                            className="secondary-button"
                            onClick={() => activePokemonBox === 'team' ? setActivePokemonBox('pc') : setActiveSection('shop')}
                          >
                            {activePokemonBox === 'team' ? 'Abrir PC' : 'Visitar tienda'}
                          </button>
                        </div>
                      )}
                    </div>

                    <aside className="pokemon-detail-panel" aria-live="polite">
                      {pokemonDetails ? (
                        <>
                          <div className="pokemon-detail-heading">
                            <span className="detail-sprite"><PokemonSprite pokemon={selectedCatalogPokemon} shiny={pokemonDetails.shiny} alt={pokemonDetails.species} /></span>
                            <div>
                              <span className="panel-tag">Ficha Pokémon</span>
                              <h3>{pokemonDetails.nickname || pokemonDetails.species}</h3>
                              <p>{pokemonDetails.species}</p>
                              <div className="detail-types">
                                {(selectedCatalogPokemon?.types || []).map((type) => <span key={type}>{type}</span>)}
                              </div>
                            </div>
                          </div>

                          {pokemonEvolutionOptions.length > 0 && (
                            <section className="pokemon-evolution-section" aria-label="Evoluciones disponibles">
                              <div className="pokemon-evolution-heading">
                                <h4>Evolución</h4>
                                <span>{user.bayas} bayas disponibles</span>
                              </div>
                              <p>
                                Las evoluciones que solo requieren un objeto no cuestan bayas y lo consumen.
                                Las evoluciones con otros requisitos se hacen pagando bayas.
                              </p>
                              <div className="pokemon-evolution-options">
                                {pokemonEvolutionOptions.map((option) => {
                                  const missingItem = Boolean(option.requiredItem && !option.ownedItem)
                                  const notEnoughBerries = user.bayas < option.cost
                                  const isEvolving = evolvingPokemonId === pokemonDetails.instanceId
                                  return (
                                    <div className="pokemon-evolution-option" key={option.target.id}>
                                      <div>
                                        <strong>{option.target.name}</strong>
                                        {option.requiredItem && (
                                          <>
                                            <span>Solo requiere objeto</span>
                                            <small>{option.ownedItem ? `Se usará ${option.ownedItem}` : `Necesitas ${option.requiredItem}`}</small>
                                          </>
                                        )}
                                        {!option.requiredItem && (
                                          <>
                                            <span>{option.cost} bayas</span>
                                            {option.requirement && (
                                              <small>Requisito habitual: {option.requirement} (se omite con bayas)</small>
                                            )}
                                          </>
                                        )}
                                      </div>
                                      <button
                                        type="button"
                                        disabled={missingItem || notEnoughBerries || Boolean(evolvingPokemonId) || pokemonSaving}
                                        onClick={() => evolvePokemon(option)}
                                      >
                                        {isEvolving ? 'Evolucionando...' : missingItem ? 'Falta objeto' : notEnoughBerries ? 'Faltan bayas' : 'Evolucionar'}
                                      </button>
                                    </div>
                                  )
                                })}
                              </div>
                            </section>
                          )}

                          <form className="pokemon-config-form" onSubmit={savePokemonConfiguration}>
                            <div className="pokemon-config-fields">
                              <label>
                                Mote
                                <input maxLength={16} value={pokemonDetails.nickname} onChange={(event) => updatePokemonDraft('nickname', event.target.value)} placeholder="Sin mote" />
                              </label>
                              <label>
                                Objeto equipado
                                <select value={pokemonDetails.heldItem} onChange={(event) => updatePokemonDraft('heldItem', event.target.value)}>
                                  <option value="">Sin objeto</option>
                                  {(user.inventory?.items || []).map((item) => <option key={item} value={item}>{item}</option>)}
                                  {pokemonDetails.heldItem && !(user.inventory?.items || []).includes(pokemonDetails.heldItem) && <option value={pokemonDetails.heldItem}>{pokemonDetails.heldItem}</option>}
                                </select>
                              </label>
                              <label>
                                Naturaleza
                                <select value={pokemonDetails.nature} onChange={(event) => updatePokemonDraft('nature', event.target.value)}>
                                  {pokemonNatures.map((nature) => <option key={nature} value={nature}>{nature}</option>)}
                                </select>
                                <span className="pokemon-nature-effect" aria-live="polite">
                                  {getPokemonNatureDescription(pokemonDetails.nature)}
                                </span>
                              </label>
                              <label>
                                Nivel
                                <input
                                  type="number"
                                  min="1"
                                  max="100"
                                  step="1"
                                  value={pokemonDetails.level}
                                  onChange={(event) => updatePokemonDraft('level', Number(event.target.value))}
                                />
                              </label>
                              <label>
                                Habilidad
                                <select value={pokemonDetails.ability} onChange={(event) => updatePokemonDraft('ability', event.target.value)}>
                                  {(selectedCatalogPokemon?.abilities || []).map((ability) => <option key={ability} value={ability}>{ability}</option>)}
                                </select>
                              </label>
                            </div>

                            <div className="pokemon-moves-section">
                              <h4>Movimientos</h4>
                              <div className="pokemon-moves-grid">
                                {Array.from({ length: 4 }, (_, index) => {
                                  const selectedMove = getMoveById(pokemonDetails.moves[index])

                                  return (
                                    <label key={index}>
                                      Movimiento {index + 1}
                                      <select value={pokemonDetails.moves[index] || ''} onChange={(event) => updatePokemonMove(index, event.target.value)}>
                                        <option value="">Sin movimiento</option>
                                        {pokemonMoveGroups.map((group) => (
                                          <optgroup key={group.type} label={moveTypeNames[group.type]}>
                                            {group.moves.map((move) => <option key={move.id} value={move.id}>{move.name}</option>)}
                                          </optgroup>
                                        ))}
                                      </select>
                                      {selectedMove && (
                                        <span className="pokemon-move-description">
                                          <strong>
                                            {moveCategoryNames[selectedMove.category]} · {moveTypeNames[selectedMove.type]}
                                            {selectedMove.category === 'Status'
                                              ? ' · Sin potencia'
                                              : ` · Potencia ${selectedMove.dynamicBasePower ? 'variable' : selectedMove.basePower}`}
                                          </strong>
                                          <span>{selectedMove.description}</span>
                                        </span>
                                      )}
                                    </label>
                                  )
                                })}
                              </div>
                            </div>

                            <div className="pokemon-stats-section">
                              <h4>Estadísticas · Nv. {pokemonDetails.level}</h4>
                              <div className="pokemon-stat-table">
                                <div className="pokemon-stat-row stat-header"><span>Stat</span><span>Base</span><span>IV</span><span>EV</span><span>Final</span></div>
                                {pokemonStats.map((stat) => (
                                  <div className="pokemon-stat-row" key={stat.id}>
                                    <span>{stat.label}</span>
                                    <strong>{selectedCatalogPokemon?.baseStats?.[stat.id] ?? '—'}</strong>
                                    <input type="number" min="0" max="31" step="1" aria-label={`${stat.label} IV`} value={pokemonDetails.ivs[stat.id]} onChange={(event) => updatePokemonStat('ivs', stat.id, event.target.value)} />
                                    <input type="number" min="0" max={Math.max(0, Math.min(252, MAX_TOTAL_EVS - getTotalPokemonEvs({ ...pokemonDetails.evs, [stat.id]: 0 })))} step="1" aria-label={`${stat.label} EV`} value={pokemonDetails.evs[stat.id]} onChange={(event) => updatePokemonStat('evs', stat.id, event.target.value)} />
                                    <strong>{calculatePokemonStat({
                                      baseStat: selectedCatalogPokemon?.baseStats?.[stat.id],
                                      statId: stat.id,
                                      iv: pokemonDetails.ivs[stat.id],
                                      ev: pokemonDetails.evs[stat.id],
                                      level: pokemonDetails.level,
                                      nature: pokemonDetails.nature,
                                    }) ?? '—'}</strong>
                                  </div>
                                ))}
                                <p className="ev-guidance">IV: 0–31 por stat. EV: 0–252 por stat. Total: {getTotalPokemonEvs(pokemonDetails.evs)}/{MAX_TOTAL_EVS}.</p>
                              </div>
                            </div>

                            <button type="submit" className="primary-button save-pokemon-button"                             disabled={pokemonSaving || Boolean(evolvingPokemonId)}>
                              {pokemonSaving ? 'Guardando...' : 'Guardar configuración'}
                            </button>
                          </form>
                        </>
                      ) : (
                        <div className="pokemon-detail-empty">
                          <span aria-hidden="true">◈</span>
                          <h3>Detalles del Pokémon</h3>
                          <p>Selecciona un Pokémon para consultar y editar su configuración.</p>
                        </div>
                      )}
                    </aside>
                  </div>
                </section>
              )}

              {activeSection === 'chat' && (
                <section className="panel chat-panel">
                  <div className="chat-header">
                    <div>
                      <span className="panel-tag">Comunidad</span>
                      <h3>Chat de entrenadores</h3>
                    </div>
                  </div>
                  <div className="chat-list">
                    {chatMessages.map((message, index) => (
                      <div key={`${message.user}-${index}`} className="chat-bubble">
                        <div className="chat-bubble-author">
                          {message.guild && <GuildBadge guild={message.guild} role={message.guildRole || 'member'} compact />}
                          <strong>{message.user}</strong>
                          {message.guild && <span>{message.guild}</span>}
                        </div>
                        <p>{message.message}</p>
                      </div>
                    ))}
                  </div>

                  <form className="chat-form" onSubmit={sendMessage}>
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(event) => setChatInput(event.target.value)}
                      placeholder="Escribe un mensaje para la comunidad..."
                    />
                    <button type="submit" className="primary-button">
                      Enviar
                    </button>
                  </form>
                </section>
              )}
            </main>
          </div>
        </div>
      )}
    </>
  )
}

export default App
