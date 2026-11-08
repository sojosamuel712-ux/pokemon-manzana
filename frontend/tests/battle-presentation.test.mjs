import assert from 'node:assert/strict'
import test from 'node:test'
import { formatBattleLog, getBattleAnimationState, getFieldEffectPath, getTypeIconPath, getUnseenBattleMoves, statuses } from '../src/lib/battlePresentation.js'
import { moveTypeNames } from '../src/data/moveCatalog.js'
import { updateFieldEffects } from '../src/lib/battleEffects.js'
import { getFieldEffect, moveEffectCatalog } from '../src/data/moveEffects.js'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const publicDirectory = fileURLToPath(new URL('../public/', import.meta.url))

test('el registro presenta en español las acciones y efectos frecuentes del simulador', () => {
  assert.equal(formatBattleLog('|move|p1a: Pikachu|Thunderbolt|p2a: Charizard'), 'Pikachu usó Thunderbolt.')
  assert.equal(formatBattleLog('|-status|p2a: Charizard|brn'), 'Charizard quedó Quemado.')
  assert.equal(formatBattleLog('|-terastallize|p1a: Pikachu|Electric'), 'Pikachu se teracristalizó (Electric).')
  assert.equal(formatBattleLog('|-boost|p1a: Pikachu|spe|2'), 'Pikachu: Velocidad subió 2 nivel(es).')
})

test('el registro conserva eventos futuros no reconocidos y traduce estados', () => {
  assert.equal(formatBattleLog('|-futureeffect|p1a: Pikachu|detail'), '-futureeffect · p1a: Pikachu · detail')
  assert.equal(formatBattleLog('|request|{}'), null)
  assert.equal(statuses.par, 'Paralizado')
})

test('la animación de ataque identifica al atacante aunque Showdown registre después el daño rival', () => {
  const firstAttack = getBattleAnimationState([
    '|move|p1a: Garchomp|Earthquake|p2a: Metagross',
    '|-damage|p2a: Metagross|120/200',
  ])
  assert.equal(firstAttack.attackingSide, 'p1')
  assert.equal(firstAttack.hitSide, 'p2')
  assert.equal(firstAttack.hasImpact, true)
  assert.equal(firstAttack.allMoves[0].moveEffect, 'mudwisp')

  const secondAttack = getBattleAnimationState([
    '|move|p2a: Salamence|Dragon Dance|p2a: Salamence',
    '|-boost|p2a: Salamence|atk|1',
  ])
  assert.equal(secondAttack.attackingSide, 'p2')
  assert.equal(secondAttack.hitSide, null)
  assert.equal(secondAttack.hasImpact, true)
})

test('la secuencia respeta el orden resuelto por Showdown y omite un turno vacío al final del log', () => {
  const animation = getBattleAnimationState([
    '|turn|1',
    '|move|p2a: Jumpluff|Tailwind|p2a: Jumpluff',
    '|-sidestart|p2: Jumpluff|Tailwind',
    '|move|p1a: Garchomp|Quick Attack|p2a: Jumpluff',
    '|-damage|p2a: Jumpluff|80/120',
    '|turn|2',
  ])

  assert.deepEqual(animation.allMoves.map(({ side, moveName }) => [side, moveName]), [
    ['p2', 'Tailwind'],
    ['p1', 'Quick Attack'],
  ])
  assert.equal(animation.allMoves[0].targetSide, null)
  assert.equal(animation.allMoves[1].targetSide, 'p2')

  const withoutTurnMarkers = getBattleAnimationState([
    '|move|p2a: Jumpluff|Tailwind|p2a: Jumpluff',
    '|move|p1a: Garchomp|Quick Attack|p2a: Jumpluff',
  ])
  assert.equal(withoutTurnMarkers.allMoves.length, 2)
})

test('la inmunidad muestra su GIF y Masa Cósmica/Deseo activan el fondo espacial', () => {
  const immune = getBattleAnimationState([
    '|move|p2a: Gengar|Shadow Ball|p1a: Snorlax',
    '|-immune|p1a: Snorlax',
  ])
  assert.equal(immune.allMoves[0].effectiveness, 0)
  assert.equal(immune.allMoves[0].effectivenessGif, 'Imune')
  assert.equal(immune.effectivenessGif, 'Imune')
  assert.ok(existsSync(join(publicDirectory, 'fx/Imune.gif')))

  const spaceMoves = getBattleAnimationState([
    '|move|p1a: Clefable|Cosmic Power|p1a: Clefable',
    '|-boost|p1a: Clefable|def|1',
    '|move|p1a: Clefable|Wish|p1a: Clefable',
    '|-start|p1a: Clefable|Wish',
  ])
  assert.deepEqual(spaceMoves.allMoves.map(({ sceneEffect }) => sceneEffect), ['space', 'space'])
  assert.ok(existsSync(join(publicDirectory, 'fx/bg-space.jpg')))
})

test('la cola visual solo incluye movimientos nuevos y no repite los ya mostrados', () => {
  const moves = [{ index: 10, moveName: 'Tackle' }, { index: 18, moveName: 'Growl' }]
  const seen = new Set([10])

  const unseen = getUnseenBattleMoves(moves, seen)
  unseen.forEach((move) => seen.add(move.index))

  assert.deepEqual(unseen.map((move) => move.moveName), ['Growl'])
  assert.deepEqual(getUnseenBattleMoves([...moves, { index: 24, moveName: 'Quick Attack' }], seen).map((move) => move.moveName), ['Quick Attack'])
})

test('el clima y los campos reflejan el último inicio o final reportado por Showdown', () => {
  const sandstorm = updateFieldEffects([
    '|-ability|p1a: Tyranitar|Sand Stream',
    '|-weather|Sandstorm|[from] ability: Sand Stream|[of] p1a: Tyranitar',
  ])
  assert.equal(sandstorm.weather.name, 'Sandstorm')
  assert.equal(sandstorm.weather.effect.effect, 'weather-sandstorm')
  assert.equal(sandstorm.weather.isFromAbility, true)

  const clearedWeather = updateFieldEffects([
    '|-weather|Sandstorm|[from] ability: Sand Stream',
    '|-weather|none',
  ])
  assert.equal(clearedWeather.weather, null)

  const field = updateFieldEffects([
    '|-fieldstart|move: Electric Terrain',
    '|-fieldstart|move: Trick Room',
  ])
  assert.equal(field.terrain.effect.effect, 'weather-electricterrain')
  assert.equal(field.rooms[0].effect.effect, 'weather-trickroom')
  assert.equal(getFieldEffect('move: Grassy Terrain').effect, 'weather-grassyterrain')

  const clearedFields = updateFieldEffects([
    '|-fieldstart|move: Electric Terrain',
    '|-fieldstart|move: Trick Room',
    '|-fieldend|move: Electric Terrain',
    '|-fieldend|move: Trick Room',
  ])
  assert.equal(clearedFields.terrain, null)
  assert.deepEqual(clearedFields.rooms, [])
})

test('las imágenes de todos los efectos de campo existen en los recursos públicos', () => {
  const fieldEffectPaths = new Set(
    Object.values(moveEffectCatalog.fieldEffects).map(({ effect }) => getFieldEffectPath(effect)),
  )
  for (const effectPath of fieldEffectPaths) {
    const publicPath = join(publicDirectory, effectPath.replace(/^\//, ''))
    assert.ok(existsSync(publicPath), `Falta el recurso ${publicPath}`)
  }
})

test('todos los iconos de tipo y género existen en los recursos públicos', () => {
  for (const type of Object.keys(moveTypeNames)) {
    const iconPath = getTypeIconPath(type)
    assert.ok(iconPath, `Falta mapear el tipo ${type}`)
    assert.ok(existsSync(join(publicDirectory, iconPath.replace(/^\//, ''))), `Falta ${iconPath}`)
  }

  for (const gender of ['f', 'm']) {
    assert.ok(existsSync(join(publicDirectory, `fx/gender-${gender}.png`)))
  }
})

test('la interfaz usa el clima y la duración reales informados por el motor', () => {
  const animation = getBattleAnimationState(
    ['|turn|1'],
    { weather: { id: 'sandstorm', duration: 3 }, terrain: null, rooms: [] },
  )

  assert.equal(animation.fieldEffects.weather.effect.name, 'Tormenta de Arena')
  assert.equal(animation.fieldEffects.weather.duration, 3)
})
