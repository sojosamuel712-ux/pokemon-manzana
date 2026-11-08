/**
 * Sistema de gestión de efectos visuales para batallas Pokémon
 * Maneja la visualización de efectos de movimientos, efectividad y efectos de campo
 * Respeta el orden de velocidad, prioridad y el motor de batalla
 */

import { getMoveEffect, getMoveSceneEffect, getFieldEffect, getEffectivenessGif } from '../data/moveEffects.js'
import { getMoveById } from '../data/moveCatalog.js'

// Almacena el estado actual de efectos de campo
let activeFieldEffects = {
  weather: null,
  terrain: null,
  rooms: [],
}

/**
 * Parsea el log de batalla. Showdown ya entrega los movimientos en orden de ejecución.
 * @param {string[]} log - Array de líneas del log de batalla
 * @returns {Object} - Estado de efectos actual con movimientos en orden
 */
export const parseBattleEffects = (log = []) => {
  const effects = {
    moveEffects: [],
    fieldEffects: [],
    effectiveness: null,
    critical: false,
    weather: null,
    terrain: null,
  }
  
  if (!Array.isArray(log) || log.length === 0) return effects
  
  // El marcador del siguiente turno puede aparecer antes de su primera acción.
  let currentTurnStart = -1
  for (let i = log.length - 1; i >= 0; i--) {
    if (!log[i].startsWith('|turn|')) continue
    const nextTurnStart = log.findIndex((line, index) => index > i && line.startsWith('|turn|'))
    const turnEnd = nextTurnStart === -1 ? log.length : nextTurnStart
    if (!log.slice(i + 1, turnEnd).some((line) => line.startsWith('|move|'))) continue
    currentTurnStart = i
    break
  }
  
  const firstTurnEntry = currentTurnStart >= 0 ? currentTurnStart : 0
  for (let i = firstTurnEntry; i < log.length; i++) {
    const line = log[i]
    if (!line.startsWith('|move|')) continue

    const moveParts = line.split('|')
    const moveName = moveParts[3] || ''
    const moveId = moveName.toLowerCase().replace(/[^a-z0-9]/g, '')
    const attacker = moveParts[2] || ''
    const target = moveParts[4] || ''
    const side = attacker.startsWith('p1a:') ? 'p1' : attacker.startsWith('p2a:') ? 'p2' : null
    const parsedTargetSide = target.startsWith('p1a:') ? 'p1' : target.startsWith('p2a:') ? 'p2' : null
    const targetSide = parsedTargetSide === side ? null : parsedTargetSide
    const moveData = getMoveById(moveId)
    const effectivenessInfo = determineEffectiveness(log, i)

    effects.moveEffects.push({
      moveId,
      moveName,
      line,
      side,
      targetSide,
      index: i,
      moveType: moveData?.type || null,
      moveEffect: getMoveEffect(moveId, moveData?.type || 'Normal', moveData?.category || 'Physical'),
      sceneEffect: getMoveSceneEffect(moveId),
      effectiveness: effectivenessInfo.effectiveness,
      isCritical: effectivenessInfo.isCritical,
      effectivenessGif: effectivenessInfo.effectiveness !== 1 || effectivenessInfo.isCritical
        ? effectivenessInfo.gif
        : null,
    })
  }
  
  const fieldState = updateFieldEffects(log)
  effects.weather = fieldState.weather
  effects.terrain = fieldState.terrain
  effects.fieldEffects = fieldState.rooms
  
  return effects
}

/**
 * Extrae información del movimiento desde el log
 * @param {string} moveLine - Línea del log con el movimiento
 * @returns {Object} - Información del movimiento
 */
export const extractMoveInfo = (moveLine) => {
  if (!moveLine || !moveLine.startsWith('|move|')) return null
  
  const parts = moveLine.split('|')
  const attacker = parts[2] || ''
  const moveName = parts[3] || ''
  const target = parts[4] || ''
  
  return {
    attacker: attacker.replace(/^p[12]a:\s*/, ''),
    moveName,
    moveId: moveName.toLowerCase().replace(/[^a-z0-9]/g, ''),
    target: target.replace(/^p[12]a:\s*/, ''),
  }
}

/**
 * Determina la efectividad del movimiento basándose en el log
 * @param {string[]} log - Log de batalla
 * @param {number} startIndex - Índice desde donde buscar
 * @returns {Object} - Información de efectividad
 */
export const determineEffectiveness = (log, startIndex = 0) => {
  let effectiveness = 1 // Normal por defecto
  let isCritical = false
  
  for (let i = startIndex; i < log.length; i++) {
    const line = log[i]
    
    if (line.startsWith('|-supereffective|')) {
      effectiveness = Math.min(4, effectiveness * 2)
    } else if (line.startsWith('|-resisted|')) {
      effectiveness = Math.max(0.25, effectiveness * 0.5)
    } else if (line.startsWith('|-immune|')) {
      effectiveness = 0
    } else if (line.startsWith('|-crit|')) {
      isCritical = true
    } else if (line.startsWith('|move|') && i > startIndex) {
      // Siguiente movimiento, parar
      break
    }
  }
  
  return {
    effectiveness,
    isCritical,
    gif: getEffectivenessGif(effectiveness, isCritical),
  }
}

/**
 * Obtiene los efectos visuales de TODOS los movimientos del turno actual en orden
 * El motor ya determina el orden por velocidad/prioridad
 * @param {string[]} log - Log de batalla completo
 * @returns {Object} - Estado visual con array de efectos en orden
 */
export const getCurrentVisualEffect = (log = []) => {
  if (!Array.isArray(log) || log.length === 0) {
    return {
      moveEffects: [],
      effectivenessGif: null,
      fieldEffect: null,
      attacker: null,
      target: null,
    }
  }
  
  // Obtener todos los movimientos del turno actual
  const parsedEffects = parseBattleEffects(log)
  
  if (parsedEffects.moveEffects.length === 0) {
    return {
      moveEffects: [],
      effectivenessGif: null,
      fieldEffect: null,
      attacker: null,
      target: null,
    }
  }
  
  // Procesar cada movimiento y obtener sus efectos
  const processedMoves = parsedEffects.moveEffects.map((move) => {
    const moveInfo = extractMoveInfo(move.line)
    if (!moveInfo) return null
    
    return {
      moveEffect: move.moveEffect,
      sceneEffect: move.sceneEffect,
      effectivenessGif: move.effectivenessGif,
      effectiveness: move.effectiveness,
      isCritical: move.isCritical,
      attacker: moveInfo.attacker,
      target: moveInfo.target,
      moveName: moveInfo.moveName,
      side: move.side,
      targetSide: move.targetSide,
      index: move.index,
    }
  }).filter(Boolean)
  
  // Retornar el primero en la secuencia (se mostrarán en orden)
  const firstMove = processedMoves[0] || {}
  
  return {
    moveEffects: processedMoves, // Array de movimientos en orden
    currentMoveEffect: firstMove.moveEffect || null,
    effectivenessGif: firstMove.effectivenessGif || null,
    fieldEffect: null,
    attacker: firstMove.attacker || null,
    target: firstMove.target || null,
    moveName: firstMove.moveName || null,
    currentSide: firstMove.side || null,
  }
}

/**
 * Actualiza los efectos de campo activos
 * Detecta clima activado por habilidades (ej: Sand Stream de Tyranitar)
 * @param {string[]} log - Log de batalla
 * @returns {Object} - Estado de efectos de campo
 */
export const updateFieldEffects = (log = []) => {
  const fieldState = {
    weather: null,
    terrain: null,
    rooms: [],
  }
  
  if (!Array.isArray(log)) return fieldState
  
  const normalizeEffectId = (name) => name
    .replace(/^(move|ability|item|condition|pokemon):\s*/i, '')
    .toLowerCase()
    .replace(/[^a-z]/g, '')
  const terrainIds = new Set(['electricterrain', 'grassyterrain', 'mistyterrain', 'psychicterrain'])
  const roomIds = new Set(['trickroom', 'wonderroom', 'magicroom', 'gravity'])

  for (const line of log) {
    if (line.startsWith('|-weather|')) {
      const parts = line.split('|')
      const weatherName = parts[2] || ''
      fieldState.weather = weatherName === 'none' ? null : {
        name: weatherName,
        effect: getFieldEffect(weatherName),
        isUpkeep: parts[3] === '[upkeep]',
        isFromAbility: line.includes('[from] ability:'),
      }
    }
    
    if (line.startsWith('|-fieldstart|')) {
      const parts = line.split('|')
      const fieldName = parts[2] || ''
      const effectId = normalizeEffectId(fieldName)
      const fieldEffect = {
        name: fieldName,
        effect: getFieldEffect(fieldName),
      }
      if (terrainIds.has(effectId)) {
        fieldState.terrain = fieldEffect
      } else if (roomIds.has(effectId)) {
        fieldState.rooms = fieldState.rooms.filter((room) => normalizeEffectId(room.name) !== effectId)
        fieldState.rooms.push(fieldEffect)
      }
    }
    
    if (line.startsWith('|-fieldend|')) {
      const parts = line.split('|')
      const fieldName = parts[2] || ''
      const effectId = normalizeEffectId(fieldName)
      if (terrainIds.has(effectId)) {
        fieldState.terrain = null
      } else if (roomIds.has(effectId)) {
        fieldState.rooms = fieldState.rooms.filter((room) => normalizeEffectId(room.name) !== effectId)
      }
    }
  }
  
  activeFieldEffects = fieldState
  return fieldState
}

/**
 * Obtiene los efectos de campo actualmente activos
 * @returns {Object}
 */
export const getActiveFieldEffects = () => {
  return activeFieldEffects
}

/**
 * Genera datos para animación de movimiento
 * @param {string} moveEffect - Nombre del archivo del efecto
 * @param {string} attackerSide - Lado del atacante ('p1' o 'p2')
 * @param {string} targetSide - Lado del objetivo ('p1' o 'p2')
 * @returns {Object} - Datos de animación
 */
export const generateMoveAnimation = (moveEffect, attackerSide, targetSide) => {
  return {
    effect: moveEffect,
    effectPath: `/fx/${moveEffect}.png`,
    startSide: attackerSide,
    endSide: targetSide,
    duration: 800, // ms
    timestamp: Date.now(),
  }
}

/**
 * Genera datos para animación de efectividad
 * @param {string} effectivenessGif - Nombre del archivo GIF
 * @returns {Object} - Datos de animación
 */
export const generateEffectivenessAnimation = (effectivenessGif) => {
  if (!effectivenessGif) return null
  
  return {
    gif: effectivenessGif,
    gifPath: `/fx/${effectivenessGif}.gif`,
    duration: 1200, // ms
    timestamp: Date.now(),
  }
}

/**
 * Genera datos para efecto de campo/clima
 * @param {Object} fieldEffect - Información del efecto de campo
 * @returns {Object} - Datos de animación
 */
export const generateFieldAnimation = (fieldEffect) => {
  if (!fieldEffect || !fieldEffect.effect) return null
  
  return {
    name: fieldEffect.name,
    effectPath: `/fx/${fieldEffect.effect}.png`,
    duration: -1, // Continuo
    timestamp: Date.now(),
  }
}

/**
 * Analiza el log completo y retorna el estado visual completo
 * @param {string[]} log - Log de batalla completo
 * @returns {Object} - Estado visual completo
 */
export const analyzeBattleVisuals = (log = []) => {
  const visualEffect = getCurrentVisualEffect(log)
  const fieldEffects = updateFieldEffects(log)
  
  return {
    ...visualEffect,
    fieldEffects,
  }
}

export default {
  parseBattleEffects,
  extractMoveInfo,
  determineEffectiveness,
  getCurrentVisualEffect,
  updateFieldEffects,
  getActiveFieldEffects,
  generateMoveAnimation,
  generateEffectivenessAnimation,
  generateFieldAnimation,
  analyzeBattleVisuals,
}
