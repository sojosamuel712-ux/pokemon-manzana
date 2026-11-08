import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { apiClient } from '../../lib/apiClient'
import { 
  formatBattleLog, 
  getBattleAnimationState, 
  statuses as battleStatuses,
  getMoveEffectPath,
  getEffectivenessGifPath,
  getFieldEffectPath,
  getUnseenBattleMoves,
  getTypeIconPath,
} from '../../lib/battlePresentation'
import { getBattleSprite } from '../../lib/pokemonUtils'

const boostStatLabels = {
  atk: 'ATQ',
  def: 'DEF',
  spa: 'ATQ.E',
  spd: 'DEF.E',
  spe: 'VEL',
  accuracy: 'PREC',
  evasion: 'EVAS',
}

const negativeVolatiles = new Set([
  'attract', 'confusion', 'curse', 'disable', 'encore', 'healblock', 'nightmare',
  'octolock', 'perishsong', 'taunt', 'torment', 'yawn',
])

const effectDurationLabel = (duration) => Number(duration) > 0
  ? `${duration} turno${Number(duration) === 1 ? '' : 's'}`
  : 'Permanente'

const getEffectivenessLabel = (effectiveness) => {
  if (effectiveness === 0) return 'Inmune'
  if (effectiveness < 1) return 'Poco eficaz'
  if (effectiveness > 1) return 'Supereficaz'
  return 'Eficaz'
}

const getGenderIconPath = (gender) => gender === 'M' || gender === 'F'
  ? `/fx/gender-${gender.toLowerCase()}.png`
  : null

const trainingDifficulties = [
  { id: 'easy', label: 'Fácil', icon: '🌱', description: 'Equipo equilibrado y decisiones aleatorias.' },
  { id: 'medium', label: 'Medio', icon: '⚔️', description: 'Elige movimientos de mayor potencia.' },
  { id: 'hard', label: 'Difícil', icon: '🔥', description: 'Aprovecha debilidades y puede teracristalizar.' },
]

export function BattlePanel({
  user,
  mode,
  setMode,
  trainingDifficulty,
  setTrainingDifficulty,
  scope,
  setScope,
  opponents,
  requests,
  activeBattles,
  pausedBattle,
  teamSize,
  battle,
  audioVolume,
  returnToLobby,
  notice,
  busy,
  option,
  setOption,
  sendChallenge,
  acceptChallenge,
  rejectChallenge,
  chooseMove,
  chooseSwitch,
  startTraining,
  resumeBattle,
  abandonBattle,
  forfeitBattle,
  openSpectator,
  messages,
  chatInput,
  setChatInput,
  sendChatMessage,
}) {
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [soundNotice, setSoundNotice] = useState('')
  const [showingEffect, setShowingEffect] = useState(null)
  const battleLogRef = useRef(null)
  const audioRef = useRef(null)
  const cryQueueRef = useRef([])
  const isPlayingCryRef = useRef(false)
  const lastCryStateRef = useRef(null)
  const effectTimeoutRef = useRef(null)
  const effectQueueRef = useRef([])
  const isShowingEffectRef = useRef(false)
  const seenMoveIndexesRef = useRef({ battleId: null, indexes: new Set() })
  const lowerSide = battle?.isSpectator ? 'p1' : battle?.yourSide
  const activePlayer = lowerSide ? battle?.players[lowerSide] : null
  const battleCryState = battle ? {
    id: battle.id,
    p1: { species: battle.players.p1.species, cry: battle.players.p1.cry },
    p2: { species: battle.players.p2.species, cry: battle.players.p2.cry },
  } : null
  const battleCryStateKey = battleCryState ? JSON.stringify(battleCryState) : ''
  const canAct = battle?.status === 'active' && !battle?.isSpectator
  const formatLabel = battle?.format || (mode === 'pvp' ? '[Gen 9] Custom Game' : 'Formato de entrenamiento')
  const rulesLabel = '6 vs 6 · 1 activo'
  const hasMechanicOptions = battle?.request && (
    battle.request.canTerastallize ||
    battle.request.canMegaEvo ||
    battle.request.canMegaEvoX ||
    battle.request.canMegaEvoY ||
    battle.request.canUltraBurst ||
    battle.request.canDynamax
  )
  const battleLogKey = battle?.log?.join('\n') || ''
  const activeBattleId = battle?.id
  const battleAnimation = useMemo(
    () => getBattleAnimationState(battleLogKey ? battleLogKey.split('\n') : [], battle?.field),
    [battleLogKey, battle?.field],
  )
  const effectBattleKey = String(battle?.id || '')
  const activeShowingEffect = showingEffect?.battleKey === effectBattleKey ? showingEffect : null

  const playNextCry = useCallback(function playNextCry() {
    const cry = cryQueueRef.current.shift()
    if (!cry) {
      isPlayingCryRef.current = false
      audioRef.current = null
      return
    }
    const audio = new Audio(cry.source)
    audio.volume = audioVolume / 100
    audioRef.current = audio
    audio.onended = playNextCry
    const handlePlaybackError = () => {
      cryQueueRef.current = []
      isPlayingCryRef.current = false
      audioRef.current = null
      setSoundNotice('No se pudo reproducir el grito desde PokeAPI.')
      setSoundEnabled(false)
    }
    audio.onerror = handlePlaybackError
    audio.play().catch(handlePlaybackError)
  }, [audioVolume])

  const playCry = useCallback((source) => {
    if (!source) {
      setSoundNotice('No hay un grito disponible para este Pokémon.')
      return
    }
    cryQueueRef.current.push({ source })
    if (isPlayingCryRef.current) return
    isPlayingCryRef.current = true
    playNextCry()
  }, [playNextCry])

  const stopCries = useCallback(() => {
    audioRef.current?.pause()
    audioRef.current = null
    cryQueueRef.current = []
    isPlayingCryRef.current = false
  }, [])

  const toggleSound = () => {
    if (soundEnabled) {
      stopCries()
      setSoundEnabled(false)
      return
    }
    if (!activePlayer?.cry) {
      setSoundNotice('No hay un grito disponible para este Pokémon.')
      return
    }
    setSoundNotice('')
    lastCryStateRef.current = battleCryState
    setSoundEnabled(true)
    playCry(battle.players.p1.cry)
    playCry(battle.players.p2.cry)
  }

  useEffect(() => {
    if (!soundEnabled || !battleCryStateKey) return
    const currentCryState = JSON.parse(battleCryStateKey)
    const previous = lastCryStateRef.current
    lastCryStateRef.current = currentCryState
    if (!previous) return
    const changedCries = previous.id === currentCryState.id
      ? ['p1', 'p2'].filter((sideId) => previous[sideId].species !== currentCryState[sideId].species)
      : ['p1', 'p2']
    if (changedCries.length) setSoundNotice('')
    changedCries.forEach((sideId) => playCry(currentCryState[sideId].cry))
  }, [soundEnabled, battleCryStateKey, playCry])

  useEffect(() => () => stopCries(), [stopCries])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = audioVolume / 100
  }, [audioVolume])

  useEffect(() => {
    if (!activeBattleId) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [activeBattleId])

  useEffect(() => {
    const logElement = battleLogRef.current
    if (logElement) logElement.scrollTop = logElement.scrollHeight
  }, [battle?.id, battle?.log])

  useEffect(() => {
    const moves = battleAnimation.allMoves
    if (!battle?.id) {
      seenMoveIndexesRef.current = { battleId: null, indexes: new Set() }
      effectQueueRef.current = []
      isShowingEffectRef.current = false
      return
    }

    const seenMoves = seenMoveIndexesRef.current
    if (seenMoves.battleId !== battle.id) {
      seenMoveIndexesRef.current = {
        battleId: battle.id,
        indexes: new Set(moves.map((move) => move.index)),
      }
      return
    }

    const newMoves = getUnseenBattleMoves(moves, seenMoves.indexes)
    if (!newMoves.length) return
    newMoves.forEach((move) => seenMoves.indexes.add(move.index))
    effectQueueRef.current.push(...newMoves)
    if (isShowingEffectRef.current) return

    const showNextEffect = () => {
      const move = effectQueueRef.current.shift()
      if (!move) {
        isShowingEffectRef.current = false
        setShowingEffect(null)
        return
      }

      isShowingEffectRef.current = true
      setShowingEffect({
        moveEffect: move.moveEffect,
        sceneEffect: move.sceneEffect,
        effectivenessGif: move.effectivenessGif,
        side: move.side,
        targetSide: move.targetSide,
        moveName: move.moveName,
        moveType: move.moveType,
        effectiveness: move.effectiveness,
        isCritical: move.isCritical,
        battleKey: effectBattleKey,
        key: `${effectBattleKey}:${move.index}`,
      })
      effectTimeoutRef.current = setTimeout(showNextEffect, move.sceneEffect ? 2400 : 1200)
    }

    showNextEffect()
  }, [battle?.id, battleAnimation.allMoves, effectBattleKey])

  useEffect(() => () => {
    if (effectTimeoutRef.current) clearTimeout(effectTimeoutRef.current)
    effectQueueRef.current = []
    isShowingEffectRef.current = false
    seenMoveIndexesRef.current = { battleId: null, indexes: new Set() }
  }, [battle?.id])

  const renderMoveChoice = (move, index) => {
    const shownMove = option === 'dynamax' ? battle.request.maxMoves?.maxMoves?.[index] : null
    const moveName = shownMove?.move || move.move
    const details = [
      `${move.pp}/${move.maxpp} PP`,
      move.type,
      move.category,
      move.basePower ? `Potencia ${move.basePower}` : '',
      move.accuracy === true ? 'Precisión: siempre' : move.accuracy ? `Precisión ${move.accuracy}%` : '',
    ].filter(Boolean).join(' · ')
    const unavailable = busy || move.disabled || move.pp < 1

    return (
      <div className="battle-move-choice" key={move.id}>
        <button type="button" title={moveName} disabled={unavailable} onClick={() => chooseMove(move.id, option)}>
          <span className="battle-move-name">
            {getTypeIconPath(move.type) && <img src={getTypeIconPath(move.type)} alt="" title={move.type} />}
            {moveName}
          </span>
          <small>{details}</small>
        </button>
        {move.canZMove && (
          <button type="button" className="z-move-choice" disabled={unavailable} onClick={() => chooseMove(move.id, 'zmove')}>
            Usar movimiento Z · {move.zMove}
          </button>
        )}
      </div>
    )
  }

  const panel = (
    <section
      className={`panel battle-panel${battle ? ' battle-fullscreen' : ''}`}
      role={battle ? 'dialog' : undefined}
      aria-modal={battle ? 'true' : undefined}
      aria-label={battle ? 'Combate Pokémon' : undefined}
    >
      <header className="battle-page-heading">
        <div><span className="panel-tag">Combate entre entrenadores</span><h2>{mode === 'training' ? 'Entrenar' : 'Desafíos'}</h2></div>
        <div className="battle-rules-badge"><strong>{rulesLabel}</strong><span>{formatLabel}</span></div>
      </header>
      {mode === 'pvp' && <p className="battle-reward-note">Victoria: 30 bayas + 1 moneda de bronce. Derrota: 15 bayas + 1 moneda de bronce.</p>}
      {!battle && (
        <div className="battle-mode-tabs" role="tablist" aria-label="Modalidad de combate">
          <button type="button" role="tab" aria-selected={mode === 'pvp'} className={mode === 'pvp' ? 'active' : ''} onClick={() => setMode('pvp')}>Combates</button>
          <button type="button" role="tab" aria-selected={mode === 'training'} className={mode === 'training' ? 'active' : ''} onClick={() => setMode('training')}>Entrenar</button>
        </div>
      )}
      {notice && <p className="battle-notice" role="status">{notice}</p>}
      {!battle && pausedBattle && (
        <section className="battle-paused-notice">
          <div>
            <strong>{pausedBattle.isTraining ? 'Entrenamiento pausado' : 'Combate pausado'}</strong>
            <span>{pausedBattle.format} · Turno {pausedBattle.turn}</span>
          </div>
          <div className="battle-paused-actions">
            <button type="button" disabled={busy} onClick={resumeBattle}>Retomar combate</button>
            {pausedBattle.isTraining && <button type="button" className="reject-button" disabled={busy} onClick={abandonBattle}>Abandonar</button>}
            {!pausedBattle.isTraining && <button type="button" className="reject-button" disabled={busy} onClick={forfeitBattle}>Rendirse</button>}
          </div>
        </section>
      )}
      {battle ? (
        <div className="showdown-layout">
          <div className="arena-toolbar">
            <span>{battle.format}</span>
            <strong>{battle.status === 'finished' ? 'Combate finalizado' : `Turno ${battle.turn}`}</strong>
            <button type="button" className="secondary-button" aria-pressed={soundEnabled} onClick={toggleSound}>
              Gritos {soundEnabled ? 'activados' : 'desactivados'}
            </button>
            <button type="button" className="secondary-button" onClick={() => {
              stopCries()
              setSoundEnabled(false)
              returnToLobby()
            }}>
              {battle.isSpectator ? 'Salir del combate' : 'Volver al lobby'}
            </button>
            {battle.status === 'active' && !battle.isSpectator && (
              battle.isTraining
                ? <button type="button" className="reject-button" disabled={busy} onClick={abandonBattle}>Abandonar</button>
                : <button type="button" className="reject-button" disabled={busy} onClick={forfeitBattle}>Rendirse</button>
            )}
          </div>
          {soundNotice && <p className="battle-audio-notice" role="status">{soundNotice}</p>}
          <div className="showdown-main">
            <div
              className={[
                'showdown-arena',
                battleAnimation.hasImpact ? 'has-action' : '',
                battleAnimation.fieldEffects?.weather?.effect?.effect
                  ? `weather-scene-${battleAnimation.fieldEffects.weather.effect.effect.replace('weather-', '')}`
                  : '',
                activeShowingEffect?.sceneEffect === 'space' ? 'space-scene' : '',
              ].filter(Boolean).join(' ')}
              aria-label="Arena de combate Pokémon"
            >
              <span className="arena-sunlight" aria-hidden="true" />

              {(battleAnimation.fieldEffects?.weather || battleAnimation.fieldEffects?.terrain || battleAnimation.fieldEffects?.rooms?.length > 0) && (
                <div className="arena-field-indicators" aria-label="Efectos activos del campo">
                  {battleAnimation.fieldEffects.weather?.effect && (
                    <span className="arena-field-indicator">
                      {battleAnimation.fieldEffects.weather.effect.name}
                      <small>{effectDurationLabel(battleAnimation.fieldEffects.weather.duration)}</small>
                    </span>
                  )}
                  {battleAnimation.fieldEffects.terrain?.effect && (
                    <span className="arena-field-indicator">
                      {battleAnimation.fieldEffects.terrain.effect.name}
                      <small>{effectDurationLabel(battleAnimation.fieldEffects.terrain.duration)}</small>
                    </span>
                  )}
                  {battleAnimation.fieldEffects.rooms?.map((field) => field.effect && (
                    <span className="arena-field-indicator" key={field.id}>
                      {field.effect.name}
                      <small>{effectDurationLabel(field.duration)}</small>
                    </span>
                  ))}
                </div>
              )}
              {battleAnimation.fieldEffects?.rooms?.map((field) => field.effect && (
                <img
                  className="arena-terrain-effect arena-room-effect"
                  src={getFieldEffectPath(field.effect.effect)}
                  alt=""
                  aria-hidden="true"
                  key={field.name}
                />
              ))}
              {battleAnimation.fieldEffects?.terrain?.effect && (
                <img 
                  className="arena-terrain-effect" 
                  src={getFieldEffectPath(battleAnimation.fieldEffects.terrain.effect.effect)}
                  alt=""
                  aria-hidden="true"
                />
              )}
              
              {/* Efecto del movimiento en secuencia */}
              {activeShowingEffect?.moveEffect && (
                <img 
                  className="arena-move-effect" 
                  src={getMoveEffectPath(activeShowingEffect.moveEffect)}
                  alt=""
                  aria-hidden="true"
                  key={activeShowingEffect.key}
                />
              )}
              
              {/* GIF de efectividad en secuencia */}
              {activeShowingEffect?.effectivenessGif && (
                <img 
                  className="arena-effectiveness-gif" 
                  src={getEffectivenessGifPath(activeShowingEffect.effectivenessGif)}
                  alt={
                    activeShowingEffect.effectiveness === 0 ? 'Inmune' :
                    activeShowingEffect.isCritical ? '¡Golpe crítico!' :
                    activeShowingEffect.effectiveness > 1 ? '¡Super efectivo!' :
                    'No es muy eficaz'
                  }
                  key={`eff:${activeShowingEffect.key}`}
                />
              )}
              
              {activeShowingEffect && <span className="arena-impact-effect" key={`${activeShowingEffect.key}:impact`} aria-hidden="true" />}
              {['p2', 'p1'].map((sideId) => {
                const player = battle.players[sideId]
                const isPlayer = sideId === lowerSide
                const sprite = getBattleSprite(player, isPlayer ? 'back' : 'front')
                const isAttacking = activeShowingEffect?.side === sideId
                const isHit = activeShowingEffect?.targetSide === sideId
                return (
                  <div className={`arena-combatant ${isPlayer ? 'player' : 'opponent'}${isAttacking ? ' attacking' : ''}${isHit ? ' taking-hit' : ''}${player.hp <= 0 ? ' fainted' : ''}`} key={sideId}>
                    <div className="arena-platform" />
                    {sprite && <img key={`${sideId}:${player.species}:${battle.turn}:${battle.log.length}`} className="arena-pokemon" src={sprite} alt={player.species} />}
                  </div>
                )
              })}
              {['p2', 'p1'].map((sideId) => {
                const player = battle.players[sideId]
                const isPlayer = sideId === lowerSide
                const hpPercent = Math.max(0, Math.min(100, (player.hp / Math.max(1, player.maxHp)) * 100))
                const pokemonEffects = [
                  ...Object.entries(player.boosts || {}).map(([stat, value]) => ({
                    id: `boost-${stat}`,
                    label: `${boostStatLabels[stat] || stat} ${value > 0 ? '+' : ''}${value}`,
                    kind: value > 0 ? 'positive' : 'negative',
                  })),
                  ...(player.status ? [{
                    id: `status-${player.status}`,
                    label: battleStatuses[player.status] || player.status,
                    kind: 'negative',
                  }] : []),
                  ...(player.volatiles || []).map((effect) => ({
                    id: effect.id,
                    label: effect.name,
                    kind: negativeVolatiles.has(effect.id) ? 'negative' : 'neutral',
                  })),
                ]
                return (
                  <div className={`arena-status-panel ${isPlayer ? 'player' : 'opponent'}`} key={`status:${sideId}`}>
                    <div className="arena-pokemon-heading">
                      <strong>{player.species}</strong>
                      <span className="battle-type-icons">
                        {player.types?.map((type) => getTypeIconPath(type) && (
                          <img key={type} src={getTypeIconPath(type)} alt={type} title={type} />
                        ))}
                        {getGenderIconPath(player.gender) && <img className="battle-gender-icon" src={getGenderIconPath(player.gender)} alt={player.gender === 'M' ? 'Macho' : 'Hembra'} title={player.gender === 'M' ? 'Macho' : 'Hembra'} />}
                      </span>
                    </div>
                    <span className="arena-hp-percentage">{Math.ceil(hpPercent)}%</span>
                    <small>{player.username}</small>
                    <span
                      className="arena-health-track"
                      role="progressbar"
                      aria-label={`${player.species} PS`}
                      aria-valuemin={0}
                      aria-valuemax={player.maxHp}
                      aria-valuenow={player.hp}
                    >
                      <span style={{ width: `${hpPercent}%` }} />
                    </span>
                    <small>{player.hp} / {player.maxHp} PS</small>
                    {pokemonEffects.length > 0 && (
                      <div className="arena-effect-tags" aria-label="Efectos activos en el Pokémon">
                        {pokemonEffects.map((effect) => (
                          <span className={`arena-effect-tag ${effect.kind}`} key={effect.id} title={effect.label}>
                            {effect.label}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
              {activeShowingEffect && (
                <div className="arena-action-indicator" key={`action:${activeShowingEffect.key}`}>
                  {getTypeIconPath(activeShowingEffect.moveType) && (
                    <img src={getTypeIconPath(activeShowingEffect.moveType)} alt="" title={activeShowingEffect.moveType} />
                  )}
                  <strong>{activeShowingEffect.moveName}</strong>
                  <small>{getEffectivenessLabel(activeShowingEffect.effectiveness)}</small>
                </div>
              )}
              <span className="arena-turn-stamp">{battle.status === 'finished' ? 'RESULTADO' : `TURNO ${battle.turn}`}</span>
            </div>
            <div className="battle-command-bar">
              {battle.isSpectator ? (
                <strong className="battle-spectator-note">Estás viendo este combate como espectador. No puedes enviar acciones.</strong>
              ) : battle.status === 'finished' ? (
                <div className="battle-result-banner">
                  <strong>{battle.isWinner ? '¡Victoria!' : battle.winnerName ? 'Derrota' : 'Empate'}</strong>
                  <span>{battle.isTraining
                    ? 'Entrenamiento completado.'
                    : battle.winnerName
                      ? `Recibes ${battle.isWinner ? 30 : 15} bayas + 1 moneda de bronce.`
                      : 'El combate terminó sin vencedor.'}</span>
                </div>
              ) : battle.request?.type === 'move' ? (
                <>
                  <div><span className="panel-tag">Elige un movimiento</span><strong>¿Qué hará {battle.players[battle.yourSide].species}?</strong></div>
                  <div className="battle-move-grid">{battle.request.moves.map(renderMoveChoice)}</div>
                  {hasMechanicOptions ? (
                    <div className="battle-mechanic-options" aria-label="Mecánicas disponibles">
                      {battle.request.canTerastallize && (
                        <button type="button" aria-pressed={option === 'terastallize'} className={option === 'terastallize' ? 'active' : ''} disabled={busy} onClick={() => setOption(option === 'terastallize' ? '' : 'terastallize')}>
                          Teracristalizar · {battle.request.canTerastallize}
                        </button>
                      )}
                      {battle.request.canMegaEvo && <button type="button" aria-pressed={option === 'mega'} className={option === 'mega' ? 'active' : ''} disabled={busy} onClick={() => setOption(option === 'mega' ? '' : 'mega')}>Mega evolución</button>}
                      {battle.request.canMegaEvoX && <button type="button" aria-pressed={option === 'megax'} className={option === 'megax' ? 'active' : ''} disabled={busy} onClick={() => setOption(option === 'megax' ? '' : 'megax')}>Mega evolución X</button>}
                      {battle.request.canMegaEvoY && <button type="button" aria-pressed={option === 'megay'} className={option === 'megay' ? 'active' : ''} disabled={busy} onClick={() => setOption(option === 'megay' ? '' : 'megay')}>Mega evolución Y</button>}
                      {battle.request.canUltraBurst && <button type="button" aria-pressed={option === 'ultra'} className={option === 'ultra' ? 'active' : ''} disabled={busy} onClick={() => setOption(option === 'ultra' ? '' : 'ultra')}>Ultraestallido</button>}
                      {battle.request.canDynamax && <button type="button" aria-pressed={option === 'dynamax'} className={option === 'dynamax' ? 'active' : ''} disabled={busy} onClick={() => setOption(option === 'dynamax' ? '' : 'dynamax')}>Dinamaxizar</button>}
                    </div>
                  ) : null}
                </>
              ) : battle.request?.type === 'switch' ? (
                <strong>Tu Pokémon se debilitó. Selecciona un integrante disponible del equipo.</strong>
              ) : (
                <strong>Esperando la acción del rival…</strong>
              )}
            </div>
          </div>
          <aside className="battle-side-panel">
            <section className="battle-log-panel" aria-live="polite">
              <h3>Registro del combate</h3>
              <div className="battle-log-list" ref={battleLogRef}>{battle.log.map(formatBattleLog).filter(Boolean).map((message, index) => <p key={`${index}:${message}`}>{message}</p>)}</div>
            </section>
            <div className="battle-side-lower">
              <div className="battle-party-panels" aria-label="Equipos del combate">
                {(battle.yourSide === 'p2' ? ['p1', 'p2'] : ['p2', 'p1']).map((sideId) => {
                  const player = battle.players[sideId]
                  const isPlayer = sideId === battle.yourSide
                  const request = battle.request
                  const canSwitch = isPlayer && canAct && Boolean(request) &&
                    (request.type === 'switch' || (request.type === 'move' && !request.trapped))
                  return (
                    <section className="battle-party-panel" key={sideId} aria-label={`Equipo de ${player.username}`}>
                      <h3>{isPlayer ? 'Tu equipo' : `Equipo de ${player.username}`}</h3>
                      <div className="battle-party-list">
                        {player.team.map((pokemon) => (
                          <button
                            type="button"
                            className={`battle-party-pokemon${pokemon.active ? ' active' : ''}${pokemon.fainted ? ' fainted' : ''}`}
                            key={`${sideId}:${pokemon.index}`}
                            disabled={!canSwitch || pokemon.active || pokemon.fainted || busy}
                            onClick={() => chooseSwitch(pokemon.index)}
                            aria-label={`${pokemon.nickname || pokemon.species}${pokemon.fainted ? ', debilitado' : `, ${pokemon.hp} de ${pokemon.maxHp} PS`}${pokemon.active ? ', en combate' : ''}`}
                          >
                            <img className="battle-party-sprite" src={getBattleSprite(pokemon, isPlayer ? 'back' : 'front') || ''} alt="" />
                            <span className="battle-pokemon-label">
                              <span className="battle-pokemon-name">{pokemon.nickname || pokemon.species}</span>
                              <span className="battle-type-icons">
                                {pokemon.types?.map((type) => getTypeIconPath(type) && (
                                  <img key={type} src={getTypeIconPath(type)} alt={type} title={type} />
                                ))}
                                {getGenderIconPath(pokemon.gender) && <img className="battle-gender-icon" src={getGenderIconPath(pokemon.gender)} alt={pokemon.gender === 'M' ? 'Macho' : 'Hembra'} title={pokemon.gender === 'M' ? 'Macho' : 'Hembra'} />}
                              </span>
                            </span>
                            <small>{pokemon.fainted ? 'Debilitado' : `${pokemon.hp}/${pokemon.maxHp} PS${pokemon.status ? ` · ${battleStatuses[pokemon.status] || pokemon.status}` : ''}`}</small>
                          </button>
                        ))}
                      </div>
                      {isPlayer && canSwitch && <small className="battle-switch-hint">{request.type === 'switch' ? 'Elige un Pokémon para continuar.' : 'Puedes cambiar de Pokémon en lugar de atacar.'}</small>}
                    </section>
                  )
                })}
              </div>
              {!battle.isTraining && (
                <section className="battle-chat">
                  <h3 className="battle-chat-heading">Chat del combate{battle.isSpectator && <small> · solo lectura</small>}</h3>
                  <div className="battle-chat-messages">
                    {messages.map((message) => <p key={message.id}><strong>{message.username}:</strong> {message.message}</p>)}
                    {!messages.length && <p>Aún no hay mensajes.</p>}
                  </div>
                  {!battle.isSpectator && battle.status === 'active' && (
                    <form className="battle-chat-form" onSubmit={sendChatMessage}>
                      <input aria-label="Mensaje del combate" value={chatInput} maxLength={500} onChange={(event) => setChatInput(event.target.value)} />
                      <button type="submit" disabled={busy || !chatInput.trim()}>Enviar</button>
                    </form>
                  )}
                </section>
              )}
            </div>
          </aside>
        </div>
      ) : (
        <div className="battle-lobby">
          {!apiClient.isConfigured() ? (
            <p className="battle-empty-state">Conecta con el servidor para enviar y recibir solicitudes de combate.</p>
          ) : mode === 'pvp' ? (
            <>
              <section className="battle-lobby-create">
                <div className="battle-lobby-title"><div><span className="panel-tag">Nuevo desafío</span><h3>Elige a quién retar</h3></div></div>
                <p className="battle-team-requirement">Gen 9 Custom Game: prepara 6 Pokémon en Equipo. Solo uno estará activo a la vez.</p>
                <div className="battle-scope-control" role="group" aria-label="Grupo de rivales">
                  <button type="button" className={scope === 'guild' ? 'active' : ''} aria-pressed={scope === 'guild'} onClick={() => setScope('guild')}>Mi gremio</button>
                  <button type="button" className={scope === 'community' ? 'active' : ''} aria-pressed={scope === 'community'} onClick={() => setScope('community')}>Otros gremios</button>
                </div>
                <div className="battle-opponent-list">
                  {opponents.map((opponent) => (
                    <div className="battle-opponent-row" key={opponent.id}>
                      <div><strong>{opponent.username}</strong><small>{opponent.guild}</small></div>
                      <button type="button" disabled={busy || teamSize !== 6} onClick={() => sendChallenge(opponent)}>Desafiar</button>
                    </div>
                  ))}
                  {!opponents.length && <p className="battle-empty-state">No hay integrantes disponibles en este grupo.</p>}
                </div>
                <p className="battle-team-count">Equipo listo: {teamSize}/6 Pokémon</p>
              </section>
              <section className="battle-invites-panel">
                <div><span className="panel-tag">Solicitudes</span><h3>Desafíos recibidos</h3></div>
                <div className="battle-request-list">
                  {requests.filter((request) => Number(request.opponentId) === Number(user.id)).map((request) => (
                    <article className="battle-request-row" key={request.id}>
                      <div className="request-copy"><strong>{request.challengerName}</strong><span>{request.challengerPokemon}</span></div>
                      <button type="button" disabled={busy || teamSize !== 6} onClick={() => acceptChallenge(request.id)}>Aceptar</button>
                      <button type="button" className="reject-button" disabled={busy} onClick={() => rejectChallenge(request.id)}>Rechazar</button>
                    </article>
                  ))}
                  {!requests.some((request) => Number(request.opponentId) === Number(user.id)) && <p className="battle-empty-state">No tienes solicitudes pendientes.</p>}
                </div>
              </section>
              <section className="battle-active-list">
                <div><span className="panel-tag">En vivo</span><h3>Combates activos ({activeBattles.length})</h3></div>
                <div className="battle-active-list-items">
                  {activeBattles.map((active) => (
                    <article className="battle-active-card" key={active.id}>
                      <div><strong>{active.challengerName} vs. {active.opponentName}</strong><span>{active.format} · Turno {active.turn}</span></div>
                      <button type="button" disabled={busy} onClick={() => openSpectator(active.id)}>Observar</button>
                    </article>
                  ))}
                  {!activeBattles.length && <p className="battle-empty-state">No hay combates activos para observar.</p>}
                </div>
              </section>
            </>
          ) : (
            <section className="training-lobby">
              <div className="battle-lobby-title"><div><span className="panel-tag">Campo de práctica</span><h3>Elige la dificultad</h3></div></div>
              <p className="training-intro">Enfréntate a un equipo de seis Pokémon en Gen 9 Custom Game. Solo habrá un Pokémon activo por lado; la práctica no entrega ni descuenta recompensas.</p>
              <div className="training-difficulty-grid" role="group" aria-label="Dificultad del entrenador bot">
                {trainingDifficulties.map((difficulty) => (
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
                <div><span className="panel-tag">Tu equipo</span><strong>{teamSize}/6 Pokémon listos</strong></div>
                <p className="battle-team-requirement">Completa seis Pokémon en la pestaña Equipo para iniciar entrenamiento.</p>
              </div>
              <button type="button" className="primary-button training-start-button" disabled={busy || teamSize !== 6 || pausedBattle?.status === 'active'} onClick={() => startTraining(trainingDifficulty)}>
                {pausedBattle?.status === 'active'
                  ? 'Retoma o abandona el entrenamiento pausado'
                  : busy
                    ? 'Preparando combate…'
                    : `Iniciar entrenamiento · ${trainingDifficulties.find((difficulty) => difficulty.id === trainingDifficulty)?.label}`}
              </button>
              <p className="training-persistence-note">Los equipos bot se conservan según la dificultad y el nivel del equipo.</p>
            </section>
          )}
        </div>
      )}
    </section>
  )

  return battle ? createPortal(panel, document.body) : panel
}
