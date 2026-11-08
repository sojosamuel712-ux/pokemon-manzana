import { getFieldEffect } from '../data/moveEffects.js'
import { analyzeBattleVisuals, determineEffectiveness } from './battleEffects.js'

const actorName = (value) => value?.replace(/^p[12]a:\s*/, '') || ''

const sideFromBattleLine = (line) => {
  const pokemon = line.split('|')[2] || ''
  if (pokemon.startsWith('p1a:')) return 'p1'
  if (pokemon.startsWith('p2a:')) return 'p2'
  return null
}

export const getUnseenBattleMoves = (moves, seenMoveIndexes) =>
  moves.filter((move) => !seenMoveIndexes.has(move.index))

const getBattleAnimationState = (log = [], fieldSnapshot = null) => {
  let latestMoveIndex = -1
  for (let index = log.length - 1; index >= 0; index -= 1) {
    if (log[index].startsWith('|move|')) {
      latestMoveIndex = index
      break
    }
  }

  const latestMove = latestMoveIndex >= 0 ? log[latestMoveIndex] : null
  const latestDamage = latestMoveIndex >= 0
    ? log.slice(latestMoveIndex + 1).find((line) => line.startsWith('|-damage|'))
    : null
  
  // Analizar efectos visuales completos
  const visualState = analyzeBattleVisuals(log)
  if (fieldSnapshot) {
    visualState.fieldEffects = {
      weather: fieldSnapshot.weather
        ? {
            ...fieldSnapshot.weather,
            effect: getFieldEffect(fieldSnapshot.weather.id),
          }
        : null,
      terrain: fieldSnapshot.terrain
        ? {
            ...fieldSnapshot.terrain,
            effect: getFieldEffect(fieldSnapshot.terrain.id),
          }
        : null,
      rooms: (fieldSnapshot.rooms || []).map((field) => ({
        ...field,
        effect: getFieldEffect(field.id),
      })),
    }
  }
  
  // Determinar efectividad
  const effectivenessInfo = latestMoveIndex >= 0 
    ? determineEffectiveness(log, latestMoveIndex)
    : { effectiveness: 1, isCritical: false, gif: null }
  
  // Obtener todos los movimientos del turno en orden
  const allMoves = visualState.moveEffects || []
  
  return {
    attackingSide: latestMove ? sideFromBattleLine(latestMove) : null,
    hitSide: latestDamage ? sideFromBattleLine(latestDamage) : null,
    hasImpact: Boolean(latestMove || latestDamage),
    // Efectos visuales
    moveEffect: visualState.currentMoveEffect,
    effectivenessGif: effectivenessInfo.gif,
    effectiveness: effectivenessInfo.effectiveness,
    isCritical: effectivenessInfo.isCritical,
    fieldEffects: visualState.fieldEffects,
    moveName: visualState.moveName,
    // Array de todos los movimientos en orden de velocidad
    allMoves: allMoves,
    currentMoveIndex: 0,
  }
}

const statNames = {
  atk: 'Ataque',
  def: 'Defensa',
  spa: 'Ataque Especial',
  spd: 'Defensa Especial',
  spe: 'Velocidad',
  accuracy: 'Precisión',
  evasion: 'Evasión',
}

const statuses = {
  brn: 'Quemado',
  par: 'Paralizado',
  slp: 'Dormido',
  frz: 'Congelado',
  psn: 'Envenenado',
  tox: 'Gravemente envenenado',
  confusion: 'Confundido',
}

const effectName = (value) => String(value || '')
  .replace(/^(move|ability|item|condition|pokemon):\s*/, '')
  .replace(/([a-z])([A-Z])/g, '$1 $2')
  .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')

const formatBattleLog = (line) => {
  const parts = line.split('|')
  const tag = parts[1]
  const from = parts.find((part) => part.startsWith('[from] '))
  const source = from ? ` (${effectName(from.slice(7))})` : ''
  const statName = (value) => statNames[value] || effectName(value)
  const statusName = (value) => statuses[value] || effectName(value)

  if (tag === 'request' || tag === 'split') return null
  if (tag === 'turn') return `Turno ${parts[2]}`
  if (tag === 'switch' || tag === 'drag' || tag === 'replace') return `${actorName(parts[2])} entra al combate (${parts[3]} PS).`
  if (tag === 'move') return `${actorName(parts[2])} usó ${parts[3]}${parts[4]?.startsWith('[from]') ? source : ''}.`
  if (tag === '-damage') return `${actorName(parts[2])} perdió PS (${parts[3]})${source}.`
  if (tag === '-heal') return `${actorName(parts[2])} recuperó PS (${parts[3]})${source}.`
  if (tag === 'faint') return `${actorName(parts[2])} cayó debilitado.`
  if (tag === 'win') return `${parts[2]} ganó el combate.`
  if (tag === 'tie') return 'El combate terminó en empate.'
  if (tag === '-status') return `${actorName(parts[2])} quedó ${statusName(parts[3])}${source}.`
  if (tag === '-curestatus') return `${actorName(parts[2])} se recuperó de ${statusName(parts[3])}.`
  if (tag === '-boost') return `${actorName(parts[2])}: ${statName(parts[3])} subió ${parts[4]} nivel(es).`
  if (tag === '-unboost') return `${actorName(parts[2])}: ${statName(parts[3])} bajó ${parts[4]} nivel(es).`
  if (tag === '-setboost') return `${actorName(parts[2])}: ${statName(parts[3])} quedó en nivel ${parts[4]}.`
  if (tag === '-clearboost') return `Se eliminaron los cambios de estadísticas de ${actorName(parts[2])}.`
  if (tag === '-clearallboost') return 'Se eliminaron los cambios de estadísticas de ambos equipos.'
  if (tag === '-clearpositiveboost' || tag === '-clearnegativeboost') return `Se eliminaron los cambios de estadísticas ${tag === '-clearpositiveboost' ? 'positivos' : 'negativos'} de ${actorName(parts[2])}.`
  if (tag === '-invertboost') return `Se invirtieron los cambios de estadísticas de ${actorName(parts[2])}.`
  if (tag === '-copyboost') return `${actorName(parts[2])} copió los cambios de estadísticas de ${actorName(parts[3])}.`
  if (tag === '-swapboost') return `Se intercambiaron los cambios de estadísticas de ${actorName(parts[2])} y ${actorName(parts[3])}.`
  if (tag === '-supereffective') return '¡Es supereficaz!'
  if (tag === '-resisted') return 'No es muy eficaz.'
  if (tag === '-crit') return '¡Golpe crítico!'
  if (tag === '-immune') return `${actorName(parts[2])} es inmune al ataque.`
  if (tag === '-miss') return `${actorName(parts[2])} no acertó el ataque.`
  if (tag === '-fail') return `${parts[2] ? `${actorName(parts[2])}: ` : ''}El movimiento falló.`
  if (tag === '-block') return `El efecto fue bloqueado${parts[3] ? ` por ${effectName(parts[3])}` : ''}.`
  if (tag === '-weather') return parts[2] === 'none' ? 'El clima volvió a la normalidad.' : `El clima cambió: ${effectName(parts[2])}${parts[3] === '[upkeep]' ? ' (sigue activo)' : ''}.`
  if (tag === '-fieldstart') return `El campo cambió: ${effectName(parts[2])}.`
  if (tag === '-fieldend') return `Terminó el efecto de campo: ${effectName(parts[2])}.`
  if (tag === '-sidestart') return `Se activó ${effectName(parts[3])} en el lado de ${actorName(parts[2])}.`
  if (tag === '-sideend') return `Terminó ${effectName(parts[3])} en el lado de ${actorName(parts[2])}.`
  if (tag === '-ability') return `${actorName(parts[2])} activó ${effectName(parts[3])}.`
  if (tag === '-item') return `${actorName(parts[2])} obtuvo ${effectName(parts[3])}.`
  if (tag === '-enditem') return `${actorName(parts[2])} consumió ${effectName(parts[3])}.`
  if (tag === '-activate') return `${actorName(parts[2])}: se activó ${effectName(parts[3])}${source}.`
  if (tag === '-start') return `Efecto activado en ${actorName(parts[2])}: ${effectName(parts[3])}${parts[4] ? ` (${effectName(parts[4])})` : ''}.`
  if (tag === '-end') return `Terminó ${effectName(parts[3])} en ${actorName(parts[2])}.`
  if (tag === '-transform') return `${actorName(parts[2])} se transformó en ${actorName(parts[3])}.`
  if (tag === '-formechange') return `${actorName(parts[2])} cambió a ${parts[3]}.`
  if (tag === '-terastallize') return `${actorName(parts[2])} se teracristalizó (${effectName(parts[3])}).`
  if (tag === '-mega') return `${actorName(parts[2])} megaevolucionó.`
  if (tag === '-primal') return `${actorName(parts[2])} experimentó una regresión primigenia.`
  if (tag === '-burst') return `${actorName(parts[2])} se ultraestalló.`
  if (tag === '-dynamax') return `${actorName(parts[2])} se dinamaxizó.`
  if (tag === '-zpower') return `${actorName(parts[2])} concentró su Poder Z.`
  if (tag === '-prepare') return `${actorName(parts[2])} se está preparando para ${effectName(parts[3])}.`
  if (tag === '-mustrecharge') return `${actorName(parts[2])} debe recargar.`
  if (tag === '-sethp') return `Los PS de ${actorName(parts[2])} cambiaron a ${parts[3]}.`
  if (tag === '-message') return parts[2]
  if (tag === 'cant') return `${actorName(parts[2])} no pudo moverse${parts[3] ? ` (${effectName(parts[3])})` : ''}.`
  if (tag === 'upkeep') return 'Continúa el combate.'
  if (tag === 'timer') return 'El reloj del combate se actualizó.'
  if (tag === 'inactive') return 'Esperando las acciones de los jugadores.'
  if (tag === 'start') return '¡Comienza el combate!'
  if (tag === 'teampreview') return 'Vista previa de los equipos.'
  if (tag === 'player') return `${parts[3] || parts[2]} se unió al combate.`
  if (tag === 'error' || tag === 'warning') return parts.slice(2).join(' ')
  if (tag === '') return null
  return parts.slice(1).filter(Boolean).join(' · ')
}

/**
 * Obtiene la ruta del efecto visual del movimiento
 * @param {string} effectName - Nombre del efecto
 * @returns {string} - Ruta al archivo PNG
 */
const getMoveEffectPath = (effectName) => {
  if (!effectName) return null
  return `/fx/${effectName}.png`
}

/**
 * Obtiene la ruta del GIF de efectividad
 * @param {string} gifName - Nombre del GIF
 * @returns {string} - Ruta al archivo GIF
 */
const getEffectivenessGifPath = (gifName) => {
  if (!gifName) return null
  return `/fx/${gifName}.gif`
}

/**
 * Obtiene la ruta del efecto de campo
 * @param {string} effectName - Nombre del efecto
 * @returns {string} - Ruta al archivo PNG
 */
const getFieldEffectPath = (effectName) => {
  if (!effectName) return null
  const extension = ['weather-raindance', 'weather-sunnyday'].includes(effectName) ? 'jpg' : 'png'
  return `/fx/${effectName}.${extension}`
}

const typeIconFiles = {
  Bug: 'bicho',
  Dark: 'siniestro',
  Dragon: 'dragon',
  Electric: 'electrico',
  Fairy: 'hada',
  Fighting: 'lucha',
  Fire: 'fuego',
  Flying: 'volador',
  Ghost: 'fantasma',
  Grass: 'planta',
  Ground: 'tierra',
  Ice: 'hielo',
  Normal: 'normal',
  Poison: 'veneno',
  Psychic: 'psiquico',
  Rock: 'roca',
  Steel: 'acero',
  Water: 'agua',
}

const getTypeIconPath = (type) => {
  const fileName = typeIconFiles[type]
  if (!fileName) return null
  const prefix = type === 'Water' ? 'Icono' : 'icono'
  return `/fx/${prefix}_tipo_${fileName}.svg`
}

/**
 * Determina si el efecto debe mostrarse en la animación
 * @param {Object} animationState - Estado de animación
 * @param {number} logLength - Longitud actual del log
 * @returns {boolean}
 */
const shouldShowEffect = (animationState, _logLength) => {
  return Boolean(
    animationState.moveEffect && 
    animationState.hasImpact
  )
}

/**
 * Determina si el GIF de efectividad debe mostrarse
 * @param {Object} animationState - Estado de animación
 * @returns {boolean}
 */
const shouldShowEffectiveness = (animationState) => {
  return Boolean(
    animationState.effectivenessGif &&
    (animationState.effectiveness !== 1 || animationState.isCritical)
  )
}

export { 
  formatBattleLog, 
  getBattleAnimationState, 
  statuses,
  getMoveEffectPath,
  getEffectivenessGifPath,
  getFieldEffectPath,
  getTypeIconPath,
  shouldShowEffect,
  shouldShowEffectiveness,
}
