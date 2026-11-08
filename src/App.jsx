import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import './App.css'
import { guildCatalog } from './data/guildCatalog'
import { apiClient } from './lib/apiClient'
import { localDb } from './lib/localDb'
import {
  createPokemonEntry,
  flattenPokemonRoster,
  normalizePokemonRoster,
} from './lib/pokemonRoster'
import { getRouletteRotation, getRouletteSlices, rouletteCoins } from './lib/roulette'

// Context
import { AuthProvider } from './context/AuthContext'
import { useAuth } from './context/useAuth'

// Components
import { AgreementsPage, AuthShell } from './components/auth'
import { Topbar, Sidebar } from './components/layout'
const Dashboard = lazy(() => import('./components/dashboard').then((module) => ({ default: module.Dashboard })))
const InventoryPanel = lazy(() => import('./components/inventory').then((module) => ({ default: module.InventoryPanel })))
const EventsPanel = lazy(() => import('./components/events').then((module) => ({ default: module.EventsPanel })))
const AccountPanel = lazy(() => import('./components/account').then((module) => ({ default: module.AccountPanel })))
const TeamPanel = lazy(() => import('./components/team').then((module) => ({ default: module.TeamPanel })))
const AdminPanel = lazy(() => import('./components/admin').then((module) => ({ default: module.AdminPanel })))
const ShopPanel = lazy(() => import('./components/shop').then((module) => ({ default: module.ShopPanel })))
const ChatPanel = lazy(() => import('./components/chat').then((module) => ({ default: module.ChatPanel })))
const GuildPanel = lazy(() => import('./components/guild').then((module) => ({ default: module.GuildPanel })))
const BattlePanel = lazy(() => import('./components/battle').then((module) => ({ default: module.BattlePanel })))
const RoulettePanel = lazy(() => import('./components/roulette').then((module) => ({ default: module.RoulettePanel })))

// Hooks
import { useGuild } from './hooks/useGuild'

// Utils
import { isShopEntryEnabled } from './lib/pokemonUtils'

const getSavedAudioVolume = (username) => {
  if (!username) return 55
  const saved = localStorage.getItem(`manzana-audio-volume:${username.toLowerCase()}`)
  if (saved === null) return 55
  const savedVolume = Number(saved)
  return Number.isFinite(savedVolume) ? Math.min(100, Math.max(0, savedVolume)) : 55
}

function AppContent() {
  const { isSessionRestoring, isLoggedIn, user, setRemoteUser, handleLogout } = useAuth()
  const [activeSection, setActiveSection] = useState('dashboard')
  const [audioVolumePreference, setAudioVolumePreference] = useState(() => ({
    username: user?.username,
    volume: getSavedAudioVolume(user?.username),
  }))
  const audioVolume = audioVolumePreference.username === user?.username
    ? audioVolumePreference.volume
    : getSavedAudioVolume(user?.username)
  const [dbState, setDbState] = useState(() => localDb.read())
  const [announcements, setAnnouncements] = useState(() => {
    const entries = localDb.read().announcements || []
    return entries.map((entry, index) => typeof entry === 'string'
      ? { id: `local-${index}`, message: entry, imageData: '' }
      : { ...entry, id: entry.id ?? `announcement-${index}`, message: entry.message || '', imageData: entry.imageData || '' })
  })

  // Battle state
  const [battleScope, setBattleScope] = useState('guild')
  const [battleOpponents, setBattleOpponents] = useState([])
  const [battleRequests, setBattleRequests] = useState([])
  const [activeBattle, setActiveBattle] = useState(null)
  const [battleNotice, setBattleNotice] = useState('')
  const [battleBusy, setBattleBusy] = useState(false)
  const [battleMode, setBattleMode] = useState('pvp')
  const [battleOption, setBattleOption] = useState('')
  const [trainingDifficulty, setTrainingDifficulty] = useState('easy')
  const [activeBattles, setActiveBattles] = useState([])
  const [pausedBattle, setPausedBattle] = useState(null)
  const [dismissedBattleId, setDismissedBattleId] = useState(null)
  const [spectatedBattleId, setSpectatedBattleId] = useState(null)
  const [battleMessages, setBattleMessages] = useState([])
  const [battleChatInput, setBattleChatInput] = useState('')
  const battleBusyRef = useRef(false)
  const battlePollSequenceRef = useRef(0)

  const updateAudioVolume = (volume) => {
    setAudioVolumePreference({ username: user?.username, volume })
    if (user?.username) {
      localStorage.setItem(`manzana-audio-volume:${user.username.toLowerCase()}`, String(volume))
    }
  }

  // Shop state
  const [shopCategory, setShopCategory] = useState('items')
  const [shopCatalog, setShopCatalog] = useState(() => localDb.getShopCatalog())
  const [pendingShopPurchase, setPendingShopPurchase] = useState(null)

  // Roulette state
  const [rouletteCoinType, setRouletteCoinType] = useState('bronze')
  const [rouletteConfig, setRouletteConfig] = useState({ categories: [], prizes: [] })
  const [rouletteCategory, setRouletteCategory] = useState(null)
  const [rouletteSelectionToken, setRouletteSelectionToken] = useState('')
  const [categoryWheelRotation, setCategoryWheelRotation] = useState(0)
  const [prizeWheelRotation, setPrizeWheelRotation] = useState(0)
  const [rouletteNotice, setRouletteNotice] = useState('')
  const [rouletteResult, setRouletteResult] = useState(null)
  const [roulettePending, setRoulettePending] = useState(false)

  // Chat state
  const [chatInput, setChatInput] = useState('')
  const [chatMessages, setChatMessages] = useState(() => localDb.read().chat)
  const [chatNotice, setChatNotice] = useState('')

  // Guild hook
  const {
    guildData,
    guildChatInput,
    setGuildChatInput,
    guildNotice,
    isGuildLoading,
    loadGuildData,
    sendGuildMessage,
    changeGuildMemberRole,
  } = useGuild(user, dbState, setDbState)

  // Derived state
  const pokemonRoster = normalizePokemonRoster(user)
  const battleRoster = pokemonRoster.team
  const currentGuildRole = guildData?.role || user?.guildRole || 'member'
  const ownedPokemonNames = new Set(
    [...pokemonRoster.team, ...pokemonRoster.pc].map((pokemon) => pokemon.species.toLowerCase()),
  )
  const shopItems = shopCatalog.filter((entry) => entry.category === 'item' && isShopEntryEnabled(entry))
  const shopPokemon = shopCatalog.filter((entry) => entry.category === 'pokemon' && isShopEntryEnabled(entry))
  const currentGuildInfo = guildCatalog[user?.guild] || guildCatalog.Garchomp
  const roulettePrizeOptions = rouletteConfig.prizes.filter((entry) => entry.coinType === rouletteCoinType && entry.prizeType === rouletteCategory)
  const chatMessagesWithProfiles = chatMessages.map((message) => message.starter
    ? message
    : { ...message, starter: dbState.users.find((entry) => entry.username === message.user)?.starter })

  // Effects
  useEffect(() => {
    if (!user || activeSection !== 'events') return undefined
    let isActive = true
    const loadAnnouncements = async () => {
      try {
        const entries = apiClient.isConfigured()
          ? await apiClient.getAnnouncements()
          : localDb.read().announcements
        if (isActive) setAnnouncements((entries || []).map((entry, index) => typeof entry === 'string'
          ? { id: `local-${index}`, message: entry, imageData: '' }
          : { ...entry, id: entry.id ?? `announcement-${index}`, message: entry.message || '', imageData: entry.imageData || '' }))
      } catch {
        if (isActive) setAnnouncements((localDb.read().announcements || []).map((entry, index) => typeof entry === 'string'
          ? { id: `local-${index}`, message: entry, imageData: '' }
          : { ...entry, id: entry.id ?? `announcement-${index}`, message: entry.message || '', imageData: entry.imageData || '' }))
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
    if (!user || activeSection !== 'chat' || !apiClient.isConfigured()) return undefined
    let isActive = true
    apiClient.getGlobalChat()
      .then((messages) => {
        if (isActive) {
          setChatMessages(messages)
          setChatNotice('')
        }
      })
      .catch((error) => {
        if (isActive) setChatNotice(error.message)
      })
    return () => { isActive = false }
  }, [user, activeSection])

  useEffect(() => {
    if (!user || activeSection !== 'battle') return undefined
    let isActive = true
    const refreshBattleLobby = async () => {
      if (!apiClient.isConfigured()) return
      const pollSequence = ++battlePollSequenceRef.current
      try {
        const [opponentsPayload, requestsPayload, activeBattlesPayload, battlePayload] = await Promise.all([
          apiClient.getBattleOpponents(battleScope),
          apiClient.getBattleRequests(),
          apiClient.getActiveBattles(),
          spectatedBattleId ? apiClient.getBattleSpectator(spectatedBattleId) : apiClient.getCurrentBattle(),
        ])
        if (!isActive || pollSequence !== battlePollSequenceRef.current || battleBusyRef.current) return
        setBattleOpponents(opponentsPayload.opponents || [])
        setBattleRequests(requestsPayload.requests || [])
        setActiveBattles(activeBattlesPayload.battles || [])
        const nextBattle = battlePayload.battle
        if (spectatedBattleId) {
          setActiveBattle(nextBattle || null)
          setPausedBattle(null)
        } else if (nextBattle?.id === dismissedBattleId) {
          setActiveBattle(null)
          setPausedBattle(nextBattle.status === 'active' ? nextBattle : null)
        } else {
          setActiveBattle(nextBattle)
          setPausedBattle(null)
          if (nextBattle) setBattleMode(nextBattle.isTraining ? 'training' : 'pvp')
        }
        if (nextBattle && !nextBattle.isTraining && nextBattle.id !== dismissedBattleId) {
          const messagesPayload = await apiClient.getBattleMessages(nextBattle.id)
          if (isActive && pollSequence === battlePollSequenceRef.current) setBattleMessages(messagesPayload.messages || [])
        } else {
          setBattleMessages([])
        }
      } catch (error) {
        if (!isActive || pollSequence !== battlePollSequenceRef.current) return
        if (spectatedBattleId) {
          setSpectatedBattleId(null)
          setActiveBattle(null)
          setPausedBattle(null)
          setBattleNotice(error.message)
        } else setBattleNotice(error.message)
      }
    }
    refreshBattleLobby()
    const refreshInterval = window.setInterval(refreshBattleLobby, 3000)
    return () => {
      isActive = false
      window.clearInterval(refreshInterval)
    }
  }, [user, activeSection, battleScope, dismissedBattleId, spectatedBattleId])

  // Battle actions
  const sendBattleChallenge = async (opponent) => {
    if (battleRoster.length !== 6) {
      setBattleNotice('Gen 9 Custom Game requiere exactamente 6 Pokémon en tu equipo antes de desafiar.')
      return
    }
    if (battleBusy) return
    battleBusyRef.current = true
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
      battleBusyRef.current = false
      setBattleBusy(false)
    }
  }

  const acceptBattleChallenge = async (requestId) => {
    if (battleRoster.length !== 6) {
      setBattleNotice('Gen 9 Custom Game requiere exactamente 6 Pokémon en tu equipo antes de aceptar.')
      return
    }
    if (battleBusy) return
    battleBusyRef.current = true
    setBattleBusy(true)
    battlePollSequenceRef.current += 1
    setBattleNotice('')
    try {
      const saved = await apiClient.savePokemonRoster(pokemonRoster)
      setRemoteUser(saved.user)
      const payload = await apiClient.acceptBattleRequest(requestId)
      setDismissedBattleId(null)
      setSpectatedBattleId(null)
      setPausedBattle(null)
      setActiveBattle(payload.battle)
      setBattleRequests(await apiClient.getBattleRequests().then((result) => result.requests || []))
      setBattleMode('pvp')
    } catch (error) {
      setBattleNotice(error.message)
    } finally {
      battleBusyRef.current = false
      setBattleBusy(false)
    }
  }

  const rejectBattleChallenge = async (requestId) => {
    if (battleBusy) return
    battleBusyRef.current = true
    setBattleBusy(true)
    battlePollSequenceRef.current += 1
    setBattleNotice('')
    try {
      await apiClient.rejectBattleRequest(requestId)
      setBattleRequests((current) => current.filter((request) => request.id !== requestId))
    } catch (error) {
      setBattleNotice(error.message)
    } finally {
      battleBusyRef.current = false
      setBattleBusy(false)
    }
  }

  const chooseBattleMove = async (moveId, option = '') => {
    if (!activeBattle || activeBattle.isSpectator || battleBusy) return
    battleBusyRef.current = true
    battlePollSequenceRef.current += 1
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
      battleBusyRef.current = false
      setBattleBusy(false)
    }
  }

  const chooseBattleSwitch = async (switchIndex) => {
    if (!activeBattle || activeBattle.isSpectator || battleBusy) return
    battleBusyRef.current = true
    battlePollSequenceRef.current += 1
    setBattleBusy(true)
    setBattleNotice('')
    try {
      const payload = await apiClient.chooseBattleSwitch(activeBattle.id, switchIndex)
      setBattleOption('')
      setActiveBattle(payload.battle)
    } catch (error) {
      setBattleNotice(error.message)
    } finally {
      battleBusyRef.current = false
      setBattleBusy(false)
    }
  }

  const openBattleAsSpectator = async (battleId) => {
    if (battleBusy) return
    battleBusyRef.current = true
    battlePollSequenceRef.current += 1
    setBattleBusy(true)
    setBattleNotice('')
    try {
      const payload = await apiClient.getBattleSpectator(battleId)
      setSpectatedBattleId(battleId)
      setDismissedBattleId(null)
      setActiveBattle(payload.battle)
      setBattleMode('pvp')
    } catch (error) {
      setBattleNotice(error.message)
    } finally {
      battleBusyRef.current = false
      setBattleBusy(false)
    }
  }

  const sendBattleChatMessage = async (event) => {
    event.preventDefault()
    const message = battleChatInput.trim()
    if (!activeBattle || activeBattle.isSpectator || !message || battleBusy) return
    setBattleBusy(true)
    setBattleNotice('')
    try {
      await apiClient.sendBattleMessage(activeBattle.id, message)
      const payload = await apiClient.getBattleMessages(activeBattle.id)
      setBattleMessages(payload.messages || [])
      setBattleChatInput('')
    } catch (error) {
      setBattleNotice(error.message)
    } finally {
      setBattleBusy(false)
    }
  }

  const returnToBattleLobby = () => {
    battlePollSequenceRef.current += 1
    if (activeBattle?.isSpectator) {
      setSpectatedBattleId(null)
    } else if (activeBattle) {
      setDismissedBattleId(activeBattle.id)
      setPausedBattle(activeBattle.status === 'active' ? activeBattle : null)
    }
    setActiveBattle(null)
    setBattleMessages([])
  }

  const resumePausedBattle = () => {
    if (!pausedBattle) return
    setDismissedBattleId(null)
    setActiveBattle(pausedBattle)
    setBattleMode(pausedBattle.isTraining ? 'training' : 'pvp')
    setBattleMessages([])
    setPausedBattle(null)
  }

  const abandonPausedBattle = async () => {
    const targetBattle = activeBattle?.isTraining ? activeBattle : pausedBattle
    if (!targetBattle?.isTraining || battleBusy) return
    if (!window.confirm('¿Abandonar este entrenamiento? No recibirás recompensas y no podrás retomarlo.')) return
    const wasActive = activeBattle?.id === targetBattle.id
    battleBusyRef.current = true
    battlePollSequenceRef.current += 1
    setBattleBusy(true)
    setBattleNotice('')
    try {
      const payload = await apiClient.abandonTrainingBattle(targetBattle.id)
      setDismissedBattleId(targetBattle.id)
      setPausedBattle(null)
      setActiveBattle(wasActive ? payload.battle : null)
      setBattleMessages([])
    } catch (error) {
      setBattleNotice(error.message)
    } finally {
      battleBusyRef.current = false
      setBattleBusy(false)
    }
  }

  const forfeitBattle = async () => {
    const targetBattle = activeBattle?.isTraining ? null : activeBattle || pausedBattle
    if (!targetBattle || targetBattle.isTraining || battleBusy) return
    if (!window.confirm('¿Rendirse de este combate? Se registrará como derrota y el rival recibirá la recompensa de victoria.')) return
    const wasActive = activeBattle?.id === targetBattle.id
    battleBusyRef.current = true
    battlePollSequenceRef.current += 1
    setBattleBusy(true)
    setBattleNotice('')
    try {
      const payload = await apiClient.forfeitBattle(targetBattle.id)
      setDismissedBattleId(targetBattle.id)
      setPausedBattle(null)
      setActiveBattle(wasActive ? payload.battle : null)
      setBattleMessages([])
      if (payload.user) setRemoteUser(payload.user)
    } catch (error) {
      setBattleNotice(error.message)
    } finally {
      battleBusyRef.current = false
      setBattleBusy(false)
    }
  }

  const startTrainingBattle = async (difficulty = trainingDifficulty) => {
    if (battleRoster.length !== 6) {
      setBattleNotice('El entrenamiento en Gen 9 Custom Game requiere exactamente 6 Pokémon en tu equipo.')
      return
    }
    if (battleBusy) return
    battleBusyRef.current = true
    battlePollSequenceRef.current += 1
    setBattleBusy(true)
    setBattleNotice('')
    try {
      const saved = await apiClient.savePokemonRoster(pokemonRoster)
      setRemoteUser(saved.user)
      const payload = await apiClient.startTrainingBattle(difficulty)
      setDismissedBattleId(null)
      setActiveBattle(payload.battle)
      setBattleMode('training')
    } catch (error) {
      setBattleNotice(error.message)
    } finally {
      battleBusyRef.current = false
      setBattleBusy(false)
    }
  }

  // Shop actions
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
      setRemoteUser(nextUser)
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
        setRemoteUser({
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
      setRemoteUser(nextUser)
    } catch (error) {
      alert(error.message)
    } finally {
      setPendingShopPurchase(null)
    }
  }

  // Chat action
  const sendMessage = async (event) => {
    event.preventDefault()
    if (!chatInput.trim() || !user) return

    if (apiClient.isConfigured()) {
      try {
        setChatMessages(await apiClient.sendMessage(chatInput.trim()))
        setChatInput('')
        setChatNotice('')
        return
      } catch (error) {
        alert(error.message)
        return
      }
    }

    const nextChat = [...chatMessages, { user: user.username, message: chatInput.trim(), guild: user.guild, guildRole: currentGuildRole, starter: user.starter }]
    setChatMessages(nextChat)
    setDbState((current) => {
      const updated = { ...current, chat: nextChat }
      localDb.write(updated)
      return updated
    })
    setChatInput('')
  }

  // Roulette actions
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
    if (!user || roulettePending) return
    setRoulettePending(true)
    setRouletteNotice('')
    setRouletteResult(null)
    try {
      const result = await apiClient.convertMysteriousCoins(targetType)
      setRemoteUser(result.user)
      const targetLabel = rouletteCoins.find((coin) => coin.id === targetType)?.label
      const sourceLabel = rouletteCoins.find((coin) => coin.id === result.source)?.label
      setRouletteNotice(`Canje realizado: ${result.spent} monedas de ${sourceLabel} por ${result.converted} de ${targetLabel}.`)
    } catch (error) {
      setRouletteNotice(error.message)
    } finally {
      setRoulettePending(false)
    }
  }

  // Render routing
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

  if (!isLoggedIn) {
    return <AuthShell />
  }

  return (
    <div className="app-shell">
      <Topbar user={user} currentGuildRole={currentGuildRole} onLogout={handleLogout} />
      
      <div className="content-grid">
        <Sidebar
          user={user}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          currentGuildRole={currentGuildRole}
          loadGuildData={loadGuildData}
        />

        <main className="main-panel">
          <Suspense fallback={<p className="guild-loading" role="status">Cargando sección...</p>}>
            {activeSection === 'dashboard' && (
              <Dashboard user={user} setActiveSection={setActiveSection} />
            )}

            {activeSection === 'inventory' && (
              <InventoryPanel user={user} setActiveSection={setActiveSection} />
            )}

            {activeSection === 'events' && (
              <EventsPanel announcements={announcements} />
            )}

            {activeSection === 'account' && (
              <AccountPanel user={user} onLogout={handleLogout} audioVolume={audioVolume} setAudioVolume={updateAudioVolume} />
            )}

            {activeSection === 'admin' && user.roleLevel === 1 && (
              <AdminPanel
                user={user}
                setRemoteUser={setRemoteUser}
                setAnnouncements={setAnnouncements}
                setShopCatalog={setShopCatalog}
              />
            )}

            {activeSection === 'roulette' && (
              <RoulettePanel
                user={user}
                config={rouletteConfig}
                coinType={rouletteCoinType}
                setCoinType={(coin) => { setRouletteCoinType(coin); setRouletteResult(null) }}
                category={rouletteCategory}
                setCategory={(category) => {
                  setRouletteCategory(category)
                  if (!category) {
                    setRouletteSelectionToken('')
                    setRouletteResult(null)
                    setRouletteNotice('')
                  }
                }}
                prizeOptions={roulettePrizeOptions}
                categoryRotation={categoryWheelRotation}
                prizeRotation={prizeWheelRotation}
                notice={rouletteNotice}
                result={rouletteResult}
                pending={roulettePending}
                spinCategory={spinRouletteCategory}
                spin={spinRoulette}
                convertCoins={convertMysteriousCoins}
              />
            )}

            {activeSection === 'guild' && (
              <GuildPanel user={user} guildData={guildData} guildInfo={currentGuildInfo} notice={guildNotice} isLoading={isGuildLoading} chatInput={guildChatInput} setChatInput={setGuildChatInput} sendMessage={sendGuildMessage} changeMemberRole={changeGuildMemberRole} />
            )}

            {activeSection === 'battle' && (
              <BattlePanel
                user={user}
                mode={battleMode}
                setMode={setBattleMode}
                trainingDifficulty={trainingDifficulty}
                setTrainingDifficulty={setTrainingDifficulty}
                scope={battleScope}
                setScope={setBattleScope}
                opponents={battleOpponents}
                requests={battleRequests}
                activeBattles={activeBattles}
                pausedBattle={pausedBattle}
                teamSize={battleRoster.length}
                battle={activeBattle}
                audioVolume={audioVolume}
                returnToLobby={returnToBattleLobby}
                notice={battleNotice}
                busy={battleBusy}
                option={battleOption}
                setOption={setBattleOption}
                sendChallenge={sendBattleChallenge}
                acceptChallenge={acceptBattleChallenge}
                rejectChallenge={rejectBattleChallenge}
                chooseMove={chooseBattleMove}
                chooseSwitch={chooseBattleSwitch}
                startTraining={startTrainingBattle}
                resumeBattle={resumePausedBattle}
                abandonBattle={abandonPausedBattle}
                forfeitBattle={forfeitBattle}
                openSpectator={openBattleAsSpectator}
                messages={battleMessages}
                chatInput={battleChatInput}
                setChatInput={setBattleChatInput}
                sendChatMessage={sendBattleChatMessage}
              />
            )}

            {activeSection === 'shop' && (
              <ShopPanel user={user} category={shopCategory} setCategory={setShopCategory} items={shopItems} pokemon={shopPokemon} ownedPokemonNames={ownedPokemonNames} pendingPurchase={pendingShopPurchase} buyItem={buyItem} buyPokemon={buyPokemon} />
            )}

            {activeSection === 'team' && (
              <TeamPanel user={user} setRemoteUser={setRemoteUser} setDbState={setDbState} setActiveSection={setActiveSection} />
            )}

            {activeSection === 'chat' && (
              <ChatPanel messages={chatMessagesWithProfiles} input={chatInput} setInput={setChatInput} onSubmit={sendMessage} notice={chatNotice} />
            )}
          </Suspense>
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
