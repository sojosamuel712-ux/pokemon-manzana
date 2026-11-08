/**
 * Catálogo de efectos visuales para movimientos Pokémon
 * Mapea cada movimiento a su efecto PNG correspondiente según tipo y características
 */

// Efectos visuales por tipo de movimiento
const typeEffects = {
  // Tipo Fuego
  Fire: {
    physical: 'fireball',
    special: 'flareball',
    status: 'wisp',
  },
  // Tipo Agua
  Water: {
    physical: 'waterwisp',
    special: 'waterwisp',
    status: 'waterwisp',
  },
  // Tipo Eléctrico
  Electric: {
    physical: 'electroball',
    special: 'lightning',
    status: 'lightning',
  },
  // Tipo Planta
  Grass: {
    physical: 'leaf1',
    special: 'energyball',
    status: 'petal',
  },
  // Tipo Hielo
  Ice: {
    physical: 'icicle',
    special: 'iceball',
    status: 'icicle',
  },
  // Tipo Lucha
  Fighting: {
    physical: 'fist',
    special: 'fist1',
    status: 'fist',
  },
  // Tipo Veneno
  Poison: {
    physical: 'poisonwisp',
    special: 'poisoncaltrop',
    status: 'poisonwisp',
  },
  // Tipo Tierra
  Ground: {
    physical: 'mudwisp',
    special: 'mudwisp',
    status: 'mudwisp',
  },
  // Tipo Volador
  Flying: {
    physical: 'feather',
    special: 'feather',
    status: 'feather',
  },
  // Tipo Psíquico
  Psychic: {
    physical: 'mistball',
    special: 'mistball',
    status: 'mistball',
  },
  // Tipo Bicho
  Bug: {
    physical: 'web',
    special: 'web',
    status: 'web',
  },
  // Tipo Roca
  Rock: {
    physical: 'rocks',
    special: 'rock1',
    status: 'rock2',
  },
  // Tipo Fantasma
  Ghost: {
    physical: 'shadowball',
    special: 'shadowball',
    status: 'purplewisp',
  },
  // Tipo Dragón
  Dragon: {
    physical: 'flareball',
    special: 'energyball',
    status: 'omega',
  },
  // Tipo Siniestro
  Dark: {
    physical: 'blackwisp',
    special: 'blackwisp',
    status: 'blackwisp',
  },
  // Tipo Acero
  Steel: {
    physical: 'gear',
    special: 'gear',
    status: 'gear',
  },
  // Tipo Hada
  Fairy: {
    physical: 'petal',
    special: 'mistball',
    status: 'rainbow',
  },
  // Tipo Normal
  Normal: {
    physical: 'impact',
    special: 'sound',
    status: 'sound',
  },
}

// Efectos especiales para movimientos específicos
const specialMoveEffects = {
  // Movimientos de fuego específicos
  flamethrower: 'flareball',
  fireblast: 'flareball',
  firepunch: 'fireball',
  firefang: 'fireball',
  flamewheel: 'fireball',
  flareblitz: 'fireball',
  heatwave: 'flareball',
  overheat: 'flareball',
  eruption: 'flareball',
  
  // Movimientos de agua específicos
  hydropump: 'waterwisp',
  waterfall: 'waterwisp',
  aquajet: 'waterwisp',
  aquatail: 'waterwisp',
  surf: 'waterwisp',
  scald: 'waterwisp',
  brine: 'waterwisp',
  originpulse: 'waterwisp',
  
  // Movimientos eléctricos específicos
  thunderbolt: 'lightning',
  thunder: 'lightning',
  thunderpunch: 'electroball',
  thundershock: 'electroball',
  thunderfang: 'electroball',
  wildcharge: 'lightning',
  voltswitch: 'electroball',
  discharge: 'lightning',
  boltstrike: 'lightning',
  zapcannon: 'electroball',
  
  // Movimientos de planta específicos
  solarbeam: 'energyball',
  solarblade: 'leaf1',
  leafstorm: 'leaf2',
  leafblade: 'leaf1',
  leaftornado: 'leaf2',
  gigadrain: 'energyball',
  energyball: 'energyball',
  powerwhip: 'leaf2',
  frenzyplant: 'energyball',
  
  // Movimientos de hielo específicos
  icebeam: 'iceball',
  blizzard: 'iceball',
  icepunch: 'icicle',
  icefang: 'icicle',
  iciclecrash: 'icicle',
  iciclespear: 'icicle',
  freezeshock: 'iceball',
  icehammer: 'icicle',
  glaciate: 'iceball',
  
  // Movimientos de lucha específicos
  closecombat: 'fist1',
  dynamicpunch: 'fist',
  crosschop: 'leftchop',
  brickbreak: 'fist',
  superpower: 'fist1',
  highjumpkick: 'foot',
  lowkick: 'foot',
  focusblast: 'fist1',
  hammerarm: 'fist',
  counter: 'fist',
  
  // Movimientos de veneno específicos
  sludgebomb: 'poisonwisp',
  sludgewave: 'poisonwisp',
  poisontail: 'poisonwisp',
  poisonjab: 'poisonwisp',
  gunkshot: 'poisoncaltrop',
  toxic: 'poisonwisp',
  venomdrench: 'poisonwisp',
  poisonfang: 'poisonwisp',
  
  // Movimientos de tierra específicos
  earthquake: 'mudwisp',
  dig: 'mudwisp',
  magnituda: 'mudwisp',
  earthpower: 'mudwisp',
  bonemerang: 'bone',
  bonerush: 'bone',
  mudshot: 'mudwisp',
  mudbomb: 'mudwisp',
  mudslap: 'mudwisp',
  groundpound: 'mudwisp',
  
  // Movimientos voladores específicos
  hurricane: 'feather',
  bravebird: 'feather',
  aerialace: 'feather',
  drillpeck: 'feather',
  airslash: 'feather',
  skyattack: 'feather',
  fly: 'feather',
  bounce: 'feather',
  acrobatics: 'feather',
  
  // Movimientos psíquicos específicos
  psychic: 'mistball',
  psybeam: 'mistball',
  psychock: 'mistball',
  psystrike: 'mistball',
  psycut: 'mistball',
  confusions: 'mistball',
  zenheadbutt: 'mistball',
  futurestrike: 'mistball',
  dreambreaker: 'mistball',
  
  // Movimientos de bicho específicos
  bugbuzz: 'web',
  xscissor: 'web',
  megahorn: 'web',
  uturn: 'web',
  bugbite: 'web',
  signalbeam: 'web',
  lunge: 'web',
  leechlife: 'web',
  firstimpression: 'web',
  
  // Movimientos de roca específicos
  stoneedge: 'rocks',
  rockslide: 'rocks',
  rockblast: 'rocks',
  rocktomb: 'rock1',
  rockwrecker: 'rocks',
  headsmash: 'rock1',
  diamondstorm: 'rocks',
  powergem: 'rock2',
  ancientpower: 'rock1',
  
  // Movimientos fantasma específicos
  shadowball: 'shadowball',
  shadowclaw: 'shadowball',
  shadowforce: 'shadowball',
  shadowpunch: 'shadowball',
  shadowbone: 'bone',
  hex: 'shadowball',
  phantomforce: 'shadowball',
  spiritshackle: 'shadowball',
  moongeistbeam: 'shadowball',
  
  // Movimientos dragón específicos
  dragonclaw: 'leftclaw',
  dragonbreath: 'flareball',
  dragonrage: 'flareball',
  dragonpulse: 'energyball',
  dracometeor: 'energyball',
  outrage: 'leftclaw',
  dragonrush: 'leftclaw',
  dracozip: 'leftclaw',
  spacialrend: 'energyball',
  roaroftime: 'energyball',
  
  // Movimientos siniestros específicos
  crunch: 'bottombite',
  bite: 'bottombite',
  darkpulse: 'blackwisp',
  nightslash: 'leftslash',
  nightdaze: 'blackwisp',
  foulplay: 'leftslash',
  knockoff: 'leftslash',
  suckerpunch: 'fist',
  throatchop: 'leftchop',
  obstler: 'blackwisp',
  
  // Movimientos de acero específicos
  ironhead: 'gear',
  irontail: 'gear',
  irondefense: 'gear',
  metalclaw: 'leftclaw',
  meteormash: 'fist1',
  flashcannon: 'gear',
  gyroball: 'gear',
  heavyslam: 'gear',
  steelix: 'gear',
  sunsteelstrike: 'gear',
  
  // Movimientos de hada específicos
  moonblast: 'mistball',
  dazzlinggleam: 'rainbow',
  playrough: 'petal',
  disarmingvoice: 'sound',
  fairywind: 'rainbow',
  drainkiss: 'heart',
  strangesteam: 'rainbow',
  spiritbreak: 'mistball',
  geomancy: 'rainbow',
  lightofruin: 'rainbow',
  
  // Movimientos normales específicos
  hyperbeam: 'impact',
  gigaimpact: 'impact',
  tackle: 'impact',
  bodyslam: 'impact',
  takedown: 'impact',
  doubleedge: 'impact',
  explosion: 'impact',
  selfdestruct: 'impact',
  return: 'impact',
  frustration: 'impact',
  facade: 'impact',
  extremespeed: 'impact',
  quickattack: 'impact',
  megapunch: 'fist',
  megakick: 'foot',
  stomp: 'foot',
  slam: 'impact',
  strength: 'impact',
  
  // Movimientos especiales de contacto
  headbutt: 'impact',
  skullbash: 'impact',
  doublekick: 'foot',
  triplekick: 'foot',
  rollingkick: 'foot',
  jumpkick: 'foot',
  highhorsepower: 'foot',
  stompingtantrum: 'foot',
  
  // Movimientos de mordida/mandíbula
  psychicfangs: 'bottombite',
  jawlock: 'bottombite',
  crushclaw: 'leftclaw',
  
  // Movimientos de garra/corte
  slash: 'leftslash',
  furycutter: 'leftslash',
  falseswipe: 'leftslash',
  razorleaf: 'leaf1',
  
  // Movimientos de puño
  machpunch: 'fist',
  cometpunch: 'fist',
  dizzypunch: 'fist',
  drainpunch: 'fist',
  poweruppunch: 'fist',
  focuspunch: 'fist1',
  
  // Movimientos especiales
  bulletpunch: 'fist',
  vacuumwave: 'mistball',
  shadowsneak: 'shadowball',
  iceshard: 'icicle',
  
  // Movimientos de estado específicos
  willowisp: 'wisp',
  leechseed: 'leaf1',
  substitute: 'alpha',
  protect: 'alpha',
  detect: 'alpha',
  lightscreen: 'rainbow',
  reflect: 'rainbow',
  safeguard: 'rainbow',
  mist: 'mistball',
  haze: 'mistball',
  tailwind: 'feather',
  luckychant: 'rainbow',
  
  // Movimientos de curación
  recover: 'heart',
  rest: 'heart',
  softboiled: 'heart',
  milkdrink: 'heart',
  slackoff: 'heart',
  healorder: 'heart',
  roost: 'feather',
  moonlight: 'moon',
  morningsun: 'sun',
  synthesis: 'leaf1',
  wish: 'star',
  healpulse: 'heart',
  
  // Movimientos de stats
  swordsdance: 'sword',
  dragondance: 'omega',
  calmind: 'mistball',
  bulkup: 'fist',
  nastyplot: 'blackwisp',
  agility: 'lightning',
  amnesia: 'mistball',
  curse: 'blackwisp',
  growth: 'leaf1',
  
  // Movimientos de campo/clima (se manejan aparte)
  raindance: 'weather-raindance',
  sunnyday: 'weather-sunnyday',
  sandstorm: 'weather-sandstorm',
  hail: 'weather-hail',
  trickroom: 'weather-trickroom',
  wonderroom: 'weather-wonderroom',
  magicroom: 'weather-magicroom',
  electricterrain: 'weather-electricterrain',
  grassyterrain: 'weather-grassyterrain',
  mistyterrain: 'weather-mistyterrain',
  psychicterrain: 'weather-psychicterrain',
  gravity: 'weather-gravity',
  
  // Movimientos Z específicos
  '10000000voltthunderbolt': 'lightning',
  catastrophicpika: 'lightning',
  stalwartsswords: 'sword',
  maliciousmoonsault: 'blackwisp',
  pulverizingpancake: 'impact',
  guardianofalola: 'alpha',
  searingsunrazorsmash: 'fireball',
  menyshoottwo: 'lightning',
  oceanicoperetta: 'waterwisp',
  shatterpsyche: 'mistball',
  neverendingnightmare: 'blackwisp',
  devestatedrake: 'flareball',
  tectonicrage: 'mudwisp',
  bloomdoom: 'energyball',
  alloutpummeling: 'fist1',
  supersonicskystrike: 'feather',
  aciddownpour: 'poisonwisp',
  blackholeeclipse: 'blackwisp',
  corkedcrash: 'rocks',
  twinkletackle: 'rainbow',
  subzeroslammer: 'iceball',
  
  // Movimientos de ultraestallido
  photongeyser: 'lightning',
  mindblown: 'fireball',
  prismaticlaser: 'rainbow',
  lightthatburnsthesky: 'rainbow',
  menacingmoonrazorsmash: 'shadowball',
  letsnotsnuggleforever: 'petal',
  soulstealing7starstrike: 'blackwisp',
  pikapapow: 'lightning',
  bore: 'iceball',
  splinteredstormshards: 'rocks',
  chlorine: 'waterwisp',
  hypervoids: 'blackwisp',
}

const moveSceneEffects = {
  cosmicpower: 'space',
  wish: 'space',
}

// Efectos de campo/clima
const fieldEffects = {
  // Clima - Variantes de nombres del motor de batalla
  raindance: {
    effect: 'weather-raindance',
    duration: 5,
    name: 'Lluvia',
    description: 'Lluvia intensa',
  },
  rain: {
    effect: 'weather-raindance',
    duration: 5,
    name: 'Lluvia',
    description: 'Lluvia intensa',
  },
  sunnyday: {
    effect: 'weather-sunnyday',
    duration: 5,
    name: 'Sol',
    description: 'Sol intenso',
  },
  sunny: {
    effect: 'weather-sunnyday',
    duration: 5,
    name: 'Sol',
    description: 'Sol intenso',
  },
  desolateland: {
    effect: 'weather-sunnyday',
    duration: -1,
    name: 'Tierra Yerma',
    description: 'Sol extremadamente intenso',
  },
  primordialsea: {
    effect: 'weather-raindance',
    duration: -1,
    name: 'Mar Primigenio',
    description: 'Lluvia torrencial',
  },
  sandstorm: {
    effect: 'weather-sandstorm',
    duration: 5,
    name: 'Tormenta de Arena',
    description: 'Tormenta de arena',
  },
  sandspout: {
    effect: 'weather-sandstorm',
    duration: -1,
    name: 'Corriente de Arena',
    description: 'Tormenta de arena intensa',
  },
  hail: {
    effect: 'weather-hail',
    duration: 5,
    name: 'Granizo',
    description: 'Granizo cayendo',
  },
  snow: {
    effect: 'weather-hail',
    duration: 5,
    name: 'Nevada',
    description: 'Nevada intensa',
  },
  deltastream: {
    effect: 'weather-strongwind',
    duration: -1,
    name: 'Corriente Delta',
    description: 'Vientos misteriosos',
  },
  
  // Terrenos
  electricterrain: {
    effect: 'weather-electricterrain',
    duration: 5,
    name: 'Terreno Eléctrico',
    description: 'Campo eléctrico',
  },
  grassyterrain: {
    effect: 'weather-grassyterrain',
    duration: 5,
    name: 'Terreno de Planta',
    description: 'Campo de hierba',
  },
  mistyterrain: {
    effect: 'weather-mistyterrain',
    duration: 5,
    name: 'Terreno de Hada',
    description: 'Campo de niebla',
  },
  psychicterrain: {
    effect: 'weather-psychicterrain',
    duration: 5,
    name: 'Terreno Psíquico',
    description: 'Campo psíquico',
  },
  
  // Efectos de campo especiales
  trickroom: {
    effect: 'weather-trickroom',
    duration: 5,
    name: 'Sala Trucos',
    description: 'Dimensiones distorsionadas',
  },
  gravity: {
    effect: 'weather-gravity',
    duration: 5,
    name: 'Gravedad',
    description: 'Gravedad intensificada',
  },
  magicroom: {
    effect: 'weather-magicroom',
    duration: 5,
    name: 'Sala Mágica',
    description: 'Objetos desactivados',
  },
  wonderroom: {
    effect: 'weather-wonderroom',
    duration: 5,
    name: 'Sala Maravilla',
    description: 'Defensas intercambiadas',
  },
  strongwind: {
    effect: 'weather-strongwind',
    duration: 5,
    name: 'Viento Fuerte',
    description: 'Vientos protectores',
  },
}

/**
 * Obtiene el efecto visual para un movimiento específico
 * @param {string} moveId - ID del movimiento
 * @param {string} moveType - Tipo del movimiento (Fire, Water, etc.)
 * @param {string} moveCategory - Categoría del movimiento (Physical, Special, Status)
 * @returns {string} - Nombre del archivo PNG del efecto
 */
export const getMoveEffect = (moveId, moveType, moveCategory) => {
  // Primero verificar si hay un efecto especial definido
  const specialEffect = specialMoveEffects[moveId.toLowerCase()]
  if (specialEffect) return specialEffect
  
  // Si no, usar el mapeo por tipo y categoría
  const typeEffect = typeEffects[moveType]
  if (typeEffect) {
    const category = moveCategory?.toLowerCase() || 'physical'
    return typeEffect[category] || typeEffect.physical || 'impact'
  }
  
  // Efecto por defecto
  return 'impact'
}

export const getMoveSceneEffect = (moveId) =>
  moveSceneEffects[moveId.toLowerCase()] || null

/**
 * Obtiene información del efecto de campo/clima
 * @param {string} effectId - ID del efecto de campo
 * @returns {Object|null} - Información del efecto o null si no existe
 */
export const getFieldEffect = (effectId) => {
  if (!effectId) return null
  
  const cleanId = effectId.replace(/^(move|ability|item|condition|pokemon):\s*/i, '')
  const normalizedId = cleanId
    .toLowerCase()
    .replace(/[^a-z]/g, '') // Remover caracteres no alfabéticos
    .replace(/sandstream/i, 'sandstorm') // Caso especial para la habilidad Sand Stream
    .replace(/drizzle/i, 'rain')
    .replace(/drought/i, 'sunny')
    .replace(/snowwarning/i, 'hail')
    .replace(/harshsunshine/i, 'desolateland')
    .replace(/heavyrain/i, 'primordialsea')
    .replace(/strongwinds/i, 'deltastream')
  
  return fieldEffects[normalizedId] || fieldEffects[cleanId.toLowerCase()] || null
}

/**
 * Determina qué GIF de efectividad mostrar
 * @param {number} effectiveness - Multiplicador de efectividad (0, 0.25, 0.5, 1, 2, 4)
 * @param {boolean} isCritical - Si fue golpe crítico
 * @returns {string} - Nombre del archivo GIF
 */
export const getEffectivenessGif = (effectiveness, isCritical = false) => {
  if (isCritical) return 'critico'
  
  if (effectiveness === 0) return 'Imune'
  if (effectiveness < 1) return 'poco eficaz'
  if (effectiveness === 1) return 'Eficaz'
  if (effectiveness > 1) return 'supereficaz'
  
  return 'Eficaz'
}

/**
 * Verifica si un movimiento tiene efecto de campo
 * @param {string} moveId - ID del movimiento
 * @returns {boolean}
 */
export const hasFieldEffect = (moveId) => {
  return Boolean(fieldEffects[moveId.toLowerCase()])
}

/**
 * Obtiene todos los movimientos que crean efectos de campo
 * @returns {string[]}
 */
export const getFieldEffectMoves = () => {
  return Object.keys(fieldEffects)
}

export const moveEffectCatalog = {
  typeEffects,
  specialMoveEffects,
  moveSceneEffects,
  fieldEffects,
}
