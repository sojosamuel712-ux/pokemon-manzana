import garchompLogo from '../assets/logo-garchomp.jpeg'
import dragoniteLogo from '../assets/logo-dragonite.jpg'
import dragapultLogo from '../assets/logo-dragapult.jpeg'
import metagrossLogo from '../assets/logo-metagross.jpg'

const sharedRules = [
  'Trata con respeto a todos los miembros; no se permite acoso ni insultos.',
  'Mantén el chat relacionado con Pokémon, estrategias y actividades del gremio.',
  'No compartas datos personales ni contenido que no tengas permiso para publicar.',
]

export const guildCatalog = {
  Garchomp: {
    logo: garchompLogo,
    description: 'Un gremio para entrenadores que dominan el terreno con disciplina, estrategia y fuerza de equipo.',
    rules: [...sharedRules, 'El Alto Mando coordina los retos; las decisiones de liderazgo corresponden al líder.'],
  },
  Dragonite: {
    logo: dragoniteLogo,
    description: 'Una comunidad de exploradores que valora la constancia, la ayuda mutua y las grandes aventuras.',
    rules: [...sharedRules, 'Comparte consejos de entrenamiento de forma constructiva y apoya a quienes empiezan.'],
  },
  Dragapult: {
    logo: dragapultLogo,
    description: 'Un espacio para estrategas veloces que disfrutan de los combates, la creatividad y el juego limpio.',
    rules: [...sharedRules, 'Respeta los acuerdos de combate y evita publicar resultados engañosos.'],
  },
  Metagross: {
    logo: metagrossLogo,
    description: 'Un gremio analítico donde los entrenadores comparten planes, conocimiento y compañerismo.',
    rules: [...sharedRules, 'Argumenta tus estrategias con respeto y deja espacio para distintas formas de jugar.'],
  },
}

export const guildNames = Object.keys(guildCatalog)