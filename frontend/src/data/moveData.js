export const moveData = {
  "10000000voltthunderbolt": {
    "num": 719,
    "accuracy": true,
    "basePower": 195,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Gigarrayo Fulminante",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "pikashuniumz",
    "critRatio": 3,
    "target": "normal",
    "type": "Electric",
    "contestType": "Cool",
    "id": "10000000voltthunderbolt",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "absorb": {
    "num": 71,
    "accuracy": 100,
    "basePower": 20,
    "category": "Special",
    "name": "Absorber",
    "pp": 25,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "heal": 1,
      "metronome": 1
    },
    "drain": [
      1,
      2
    ],
    "target": "normal",
    "type": "Grass",
    "contestType": "Clever",
    "id": "absorb",
    "description": "Un ataque que absorbe nutrientes. Quien lo usa recupera la mitad de los PS del daño que produce."
  },
  "accelerock": {
    "num": 709,
    "accuracy": 100,
    "basePower": 40,
    "category": "Physical",
    "name": "Roca Veloz",
    "pp": 20,
    "priority": 1,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Rock",
    "contestType": "Cool",
    "id": "accelerock",
    "description": "El usuario se lanza contra el objetivo a gran velocidad. Este movimiento tiene prioridad alta."
  },
  "acid": {
    "num": 51,
    "accuracy": 100,
    "basePower": 40,
    "category": "Special",
    "name": "Ácido",
    "pp": 30,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "boosts": {
        "spd": -1
      }
    },
    "target": "allAdjacentFoes",
    "type": "Poison",
    "contestType": "Clever",
    "id": "acid",
    "description": "Rocía a los enemigos con un ácido corrosivo. Puede bajar la Defensa Especial."
  },
  "acidarmor": {
    "num": 151,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Armadura Ácida",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "def": 2
    },
    "target": "self",
    "type": "Poison",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Tough",
    "id": "acidarmor",
    "description": "Transforma la estructura celular para hacerse líquido y aumenta mucho la Defensa."
  },
  "aciddownpour": {
    "num": 628,
    "accuracy": true,
    "basePower": 1,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Diluvio Corrosivo",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "poisoniumz",
    "target": "normal",
    "type": "Poison",
    "contestType": "Cool",
    "id": "aciddownpour",
    "description": "Ataque físico de tipo Poison, potencia base 1."
  },
  "acidspray": {
    "num": 491,
    "accuracy": 100,
    "basePower": 40,
    "category": "Special",
    "name": "Bomba Ácida",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "spd": -2
      }
    },
    "target": "normal",
    "type": "Poison",
    "contestType": "Beautiful",
    "id": "acidspray",
    "description": "Ataca con un líquido corrosivo que reduce mucho la Defensa Especial del objetivo."
  },
  "acrobatics": {
    "num": 512,
    "accuracy": 100,
    "basePower": 55,
    "category": "Physical",
    "name": "Acróbata",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "distance": 1,
      "metronome": 1
    },
    "target": "any",
    "type": "Flying",
    "contestType": "Cool",
    "id": "acrobatics",
    "description": "Ataque físico de tipo Flying, potencia base 55 variable.",
    "dynamicBasePower": true
  },
  "acupressure": {
    "num": 367,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Acupresión",
    "pp": 30,
    "priority": 0,
    "flags": {
      "metronome": 1
    },
    "target": "adjacentAllyOrSelf",
    "type": "Normal",
    "zMove": {
      "effect": "crit2"
    },
    "contestType": "Tough",
    "id": "acupressure",
    "description": "Aplica presión en puntos clave del cuerpo para potenciar mucho una de sus características."
  },
  "aerialace": {
    "num": 332,
    "accuracy": true,
    "basePower": 60,
    "category": "Physical",
    "name": "Golpe Aéreo",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "distance": 1,
      "metronome": 1,
      "slicing": 1
    },
    "target": "any",
    "type": "Flying",
    "contestType": "Cool",
    "id": "aerialace",
    "description": "Ataque físico de tipo Flying, potencia base 60."
  },
  "aeroblast": {
    "num": 177,
    "accuracy": 95,
    "basePower": 100,
    "category": "Special",
    "name": "Aerochorro",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "distance": 1,
      "metronome": 1,
      "wind": 1
    },
    "critRatio": 2,
    "target": "any",
    "type": "Flying",
    "contestType": "Cool",
    "id": "aeroblast",
    "description": "Lanza un chorro de aire que suele asestar un golpe crítico."
  },
  "afteryou": {
    "num": 495,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Cede Paso",
    "pp": 15,
    "priority": 0,
    "flags": {
      "bypasssub": 1,
      "allyanim": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Cute",
    "id": "afteryou",
    "description": "Si el usuario es el más rápido, permite al objetivo usar un movimiento justo tras él, adelantándose a Pokémon más rápidos."
  },
  "agility": {
    "num": 97,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Agilidad",
    "pp": 30,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "spe": 2
    },
    "target": "self",
    "type": "Psychic",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Cool",
    "id": "agility",
    "description": "Relaja el cuerpo para ganar mucha Velocidad."
  },
  "aircutter": {
    "num": 314,
    "accuracy": 95,
    "basePower": 60,
    "category": "Special",
    "name": "Aire Afilado",
    "pp": 25,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "slicing": 1,
      "wind": 1
    },
    "critRatio": 2,
    "target": "allAdjacentFoes",
    "type": "Flying",
    "contestType": "Cool",
    "id": "aircutter",
    "description": "Viento cortante que azota. Suele ser un golpe crítico."
  },
  "airslash": {
    "num": 403,
    "accuracy": 95,
    "basePower": 75,
    "category": "Special",
    "name": "Tajo Aéreo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "distance": 1,
      "metronome": 1,
      "slicing": 1
    },
    "secondary": {
      "chance": 30,
      "volatileStatus": "flinch"
    },
    "target": "any",
    "type": "Flying",
    "contestType": "Cool",
    "id": "airslash",
    "description": "Ataca con un viento afilado que incluso corta el aire. También puede amedrentar al objetivo."
  },
  "alloutpummeling": {
    "num": 624,
    "accuracy": true,
    "basePower": 1,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Ráfaga Demoledora",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "fightiniumz",
    "target": "normal",
    "type": "Fighting",
    "contestType": "Cool",
    "id": "alloutpummeling",
    "description": "Ataque físico de tipo Fighting, potencia base 1."
  },
  "alluringvoice": {
    "num": 914,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Canto Encantador",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100
    },
    "target": "normal",
    "type": "Fairy",
    "id": "alluringvoice",
    "description": "Ataque especial de tipo Fairy, potencia base 80."
  },
  "allyswitch": {
    "num": 502,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Cambio de Banda",
    "pp": 15,
    "priority": 2,
    "flags": {
      "metronome": 1
    },
    "condition": {
      "duration": 2,
      "counterMax": 729
    },
    "target": "self",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spe": 2
      }
    },
    "contestType": "Clever",
    "id": "allyswitch",
    "description": "Extraño poder que intercambia la posición del usuario con la de un aliado sobre el terreno de combate."
  },
  "amnesia": {
    "num": 133,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Amnesia",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "spd": 2
    },
    "target": "self",
    "type": "Psychic",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Cute",
    "id": "amnesia",
    "description": "El usuario olvida sus preocupaciones y aumenta mucho la Defensa Especial."
  },
  "anchorshot": {
    "num": 677,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Anclaje",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100
    },
    "target": "normal",
    "type": "Steel",
    "contestType": "Tough",
    "id": "anchorshot",
    "description": "Ataca lanzando un ancla al oponente, que queda atrapado y no puede huir."
  },
  "ancientpower": {
    "num": 246,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "name": "Poder Pasado",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "self": {
        "boosts": {
          "atk": 1,
          "def": 1,
          "spa": 1,
          "spd": 1,
          "spe": 1
        }
      }
    },
    "target": "normal",
    "type": "Rock",
    "contestType": "Tough",
    "id": "ancientpower",
    "description": "Ataque prehistórico que puede subir todas las características."
  },
  "appleacid": {
    "num": 787,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Ácido Málico",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "spd": -1
      }
    },
    "target": "normal",
    "type": "Grass",
    "id": "appleacid",
    "description": "Ataca al objetivo con el fluido corrosivo que desprende una manzana ácida, lo que también disminuye la Defensa Especial de este."
  },
  "aquacutter": {
    "num": 895,
    "accuracy": 100,
    "basePower": 70,
    "category": "Physical",
    "name": "Tajo Acuático",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "slicing": 1
    },
    "critRatio": 2,
    "target": "normal",
    "type": "Water",
    "contestType": "Cool",
    "id": "aquacutter",
    "description": "Ataque físico de tipo Water, potencia base 70. Tiene más probabilidad de asestar un golpe crítico."
  },
  "aquajet": {
    "num": 453,
    "accuracy": 100,
    "basePower": 40,
    "category": "Physical",
    "name": "Acua Jet",
    "pp": 20,
    "priority": 1,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Water",
    "contestType": "Cool",
    "id": "aquajet",
    "description": "Ataque de una rapidez espeluznante. Este movimiento tiene prioridad alta."
  },
  "aquaring": {
    "num": 392,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Acua Aro",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "volatileStatus": "aquaring",
    "condition": {
      "onResidualOrder": 6
    },
    "target": "self",
    "type": "Water",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Beautiful",
    "id": "aquaring",
    "description": "Un manto de agua cubre al Pokémon que lo usa. Recupera algunos PS en cada turno."
  },
  "aquastep": {
    "num": 872,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Danza Acuática",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "dance": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "self": {
        "boosts": {
          "spe": 1
        }
      }
    },
    "target": "normal",
    "type": "Water",
    "contestType": "Cool",
    "id": "aquastep",
    "description": "Ataque físico de tipo Water, potencia base 80."
  },
  "aquatail": {
    "num": 401,
    "accuracy": 90,
    "basePower": 90,
    "category": "Physical",
    "name": "Acua Cola",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Water",
    "contestType": "Beautiful",
    "id": "aquatail",
    "description": "Ataque físico de tipo Water, potencia base 90. Precisión: 90%."
  },
  "armorcannon": {
    "num": 890,
    "accuracy": 100,
    "basePower": 120,
    "category": "Special",
    "name": "Cañón Armadura",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "self": {
      "boosts": {
        "def": -1,
        "spd": -1
      }
    },
    "target": "normal",
    "type": "Fire",
    "id": "armorcannon",
    "description": "Ataque especial de tipo Fire, potencia base 120. Modifica estadísticas: Defensa -1, Defensa especial -1."
  },
  "armthrust": {
    "num": 292,
    "accuracy": 100,
    "basePower": 15,
    "category": "Physical",
    "name": "Empujón",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": [
      2,
      5
    ],
    "target": "normal",
    "type": "Fighting",
    "contestType": "Tough",
    "id": "armthrust",
    "description": "Fuertes empujones que golpean de dos a cinco veces seguidas."
  },
  "aromatherapy": {
    "num": 312,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Aromaterapia",
    "pp": 5,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "distance": 1,
      "metronome": 1
    },
    "target": "allyTeam",
    "type": "Grass",
    "zMove": {
      "effect": "heal"
    },
    "contestType": "Clever",
    "id": "aromatherapy",
    "description": "Cura todos los problemas de estado del equipo con un suave aroma."
  },
  "aromaticmist": {
    "num": 597,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Niebla Aromática",
    "pp": 20,
    "priority": 0,
    "flags": {
      "bypasssub": 1,
      "metronome": 1
    },
    "boosts": {
      "spd": 1
    },
    "target": "adjacentAlly",
    "type": "Fairy",
    "zMove": {
      "boost": {
        "spd": 2
      }
    },
    "contestType": "Beautiful",
    "id": "aromaticmist",
    "description": "Consigue aumentar la Defensa Especial de un Pokémon de su equipo con una fragancia misteriosa."
  },
  "assist": {
    "num": 274,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Ayuda",
    "pp": 20,
    "priority": 0,
    "flags": {
      "failencore": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1
    },
    "callsMove": true,
    "target": "self",
    "type": "Normal",
    "contestType": "Cute",
    "id": "assist",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "assurance": {
    "num": 372,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "name": "Buena Baza",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Dark",
    "contestType": "Clever",
    "id": "assurance",
    "description": "Si el objetivo ya ha sufrido daño en ese turno, la fuerza del ataque se duplica.",
    "dynamicBasePower": true
  },
  "astonish": {
    "num": 310,
    "accuracy": 100,
    "basePower": 30,
    "category": "Physical",
    "name": "Impresionar",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Ghost",
    "contestType": "Cute",
    "id": "astonish",
    "description": "Lanza un grito tan tremendo que impresiona y puede amedrentar al objetivo."
  },
  "astralbarrage": {
    "num": 825,
    "accuracy": 100,
    "basePower": 120,
    "category": "Special",
    "name": "Orbes Espectro",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "allAdjacentFoes",
    "type": "Ghost",
    "id": "astralbarrage",
    "description": "El usuario ataca al objetivo lanzándole una ingente cantidad de pequeños fantasmas."
  },
  "attackorder": {
    "num": 454,
    "accuracy": 100,
    "basePower": 90,
    "category": "Physical",
    "name": "Al Ataque",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "critRatio": 2,
    "target": "normal",
    "type": "Bug",
    "contestType": "Clever",
    "id": "attackorder",
    "description": "El usuario llama a sus súbditos para que ataquen al objetivo. Suele ser crítico."
  },
  "attract": {
    "num": 213,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Atracción",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "volatileStatus": "attract",
    "condition": {
      "noCopy": true,
      "onBeforeMovePriority": 2
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Cute",
    "id": "attract",
    "description": "Si el objetivo es del sexo opuesto, se enamorará y bajará la posibilidad de que ataque."
  },
  "aurasphere": {
    "num": 396,
    "accuracy": true,
    "basePower": 80,
    "category": "Special",
    "name": "Esfera Aural",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "distance": 1,
      "metronome": 1,
      "bullet": 1,
      "pulse": 1
    },
    "target": "any",
    "type": "Fighting",
    "contestType": "Beautiful",
    "id": "aurasphere",
    "description": "Ataque especial de tipo Fighting, potencia base 80."
  },
  "aurawheel": {
    "num": 783,
    "accuracy": 100,
    "basePower": 110,
    "category": "Physical",
    "name": "Rueda Aural",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
      "chance": 100,
      "self": {
        "boosts": {
          "spe": 1
        }
      }
    },
    "target": "normal",
    "type": "Electric",
    "id": "aurawheel",
    "description": "La energía que acumula en las mejillas le sirve para atacar y aumentar su Velocidad. Este movimiento cambia de tipo según la forma que adopte Morpeko."
  },
  "aurorabeam": {
    "num": 62,
    "accuracy": 100,
    "basePower": 65,
    "category": "Special",
    "name": "Rayo Aurora",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "boosts": {
        "atk": -1
      }
    },
    "target": "normal",
    "type": "Ice",
    "contestType": "Beautiful",
    "id": "aurorabeam",
    "description": "Rayo multicolor que puede reducir el Ataque."
  },
  "auroraveil": {
    "num": 694,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Velo Aurora",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "sideCondition": "auroraveil",
    "condition": {
      "duration": 5,
      "onSideResidualOrder": 26,
      "onSideResidualSubOrder": 10
    },
    "target": "allySide",
    "type": "Ice",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Beautiful",
    "id": "auroraveil",
    "description": "Reduce el daño de los ataques físicos y especiales que ejecuta el rival durante cinco turnos. Solo puede usarse cuando está granizando."
  },
  "autotomize": {
    "num": 475,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Aligerar",
    "pp": 15,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "spe": 2
    },
    "target": "self",
    "type": "Steel",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Beautiful",
    "id": "autotomize",
    "description": "El usuario se desprende de partes prescindibles de su cuerpo para hacerse más ligero y aumentar mucho su Velocidad."
  },
  "avalanche": {
    "num": 419,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "name": "Alud",
    "pp": 10,
    "priority": -4,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Ice",
    "contestType": "Beautiful",
    "id": "avalanche",
    "description": "Este ataque inflige el doble de daño a un objetivo que haya golpeado al usuario en ese mismo turno.",
    "dynamicBasePower": true
  },
  "axekick": {
    "num": 853,
    "accuracy": 90,
    "basePower": 120,
    "category": "Physical",
    "name": "Patada Hacha",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "hasCrashDamage": true,
    "secondary": {
      "chance": 30,
      "volatileStatus": "confusion"
    },
    "target": "normal",
    "type": "Fighting",
    "id": "axekick",
    "description": "Ataque físico de tipo Fighting, potencia base 120. Precisión: 90%."
  },
  "babydolleyes": {
    "num": 608,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Ojitos Tiernos",
    "pp": 30,
    "priority": 1,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": -1
    },
    "target": "normal",
    "type": "Fairy",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Cute",
    "id": "babydolleyes",
    "description": "Lanza una mirada al objetivo con ojos acaramelados, con lo que logra que su Ataque se reduzca. Este movimiento tiene prioridad alta."
  },
  "baddybad": {
    "num": 737,
    "accuracy": 95,
    "basePower": 80,
    "category": "Special",
    "isNonstandard": "LGPE",
    "name": "Umbreozona",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "self": {
      "sideCondition": "reflect"
    },
    "target": "normal",
    "type": "Dark",
    "contestType": "Clever",
    "id": "baddybad",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "banefulbunker": {
    "num": 661,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Búnker",
    "pp": 10,
    "priority": 4,
    "flags": {
      "noassist": 1,
      "failcopycat": 1
    },
    "stallingMove": true,
    "volatileStatus": "banefulbunker",
    "condition": {
      "duration": 1,
      "onTryHitPriority": 3
    },
    "target": "self",
    "type": "Poison",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Tough",
    "id": "banefulbunker",
    "description": "Protege de los ataques y, al mismo tiempo, envenena al Pokémon que use un movimiento de contacto contra el usuario."
  },
  "barbbarrage": {
    "num": 839,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "name": "Mil Púas Tóxicas",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 50,
      "status": "psn"
    },
    "target": "normal",
    "type": "Poison",
    "id": "barbbarrage",
    "description": "Ataque físico de tipo Poison, potencia base 60. 50% de probabilidad de causar envenenamiento."
  },
  "barrage": {
    "num": 140,
    "accuracy": 85,
    "basePower": 15,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Bombardeo",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "multihit": [
      2,
      5
    ],
    "target": "normal",
    "type": "Normal",
    "contestType": "Cute",
    "id": "barrage",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "barrier": {
    "num": 112,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Barrera",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "def": 2
    },
    "target": "self",
    "type": "Psychic",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Cool",
    "id": "barrier",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "batonpass": {
    "num": 226,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Relevo",
    "pp": 40,
    "priority": 0,
    "flags": {
      "metronome": 1
    },
    "self": {},
    "selfSwitch": "copyvolatile",
    "target": "self",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Cute",
    "id": "batonpass",
    "description": "Cambia el puesto con otro miembro del equipo y le pasa los cambios de características."
  },
  "beakblast": {
    "num": 690,
    "accuracy": 100,
    "basePower": 100,
    "category": "Physical",
    "name": "Pico Cañón",
    "pp": 15,
    "priority": -3,
    "flags": {
      "protect": 1,
      "failmefirst": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failinstruct": 1,
      "bullet": 1
    },
    "condition": {
      "duration": 1
    },
    "target": "normal",
    "type": "Flying",
    "contestType": "Tough",
    "id": "beakblast",
    "description": "Primero aumenta la temperatura de su pico y luego ejecuta un ataque. Quema al rival si este le propina un ataque físico mientras está calentando el pico."
  },
  "beatup": {
    "num": 251,
    "accuracy": 100,
    "basePower": 0,
    "category": "Physical",
    "name": "Paliza",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Dark",
    "contestType": "Clever",
    "id": "beatup",
    "description": "Ataque de todo el equipo Pokémon. Cuantos más haya, más veces se atacará.",
    "dynamicBasePower": true
  },
  "behemothbash": {
    "num": 782,
    "accuracy": 100,
    "basePower": 100,
    "category": "Physical",
    "name": "Embate Supremo",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "failcopycat": 1,
      "failmimic": 1
    },
    "target": "normal",
    "type": "Steel",
    "id": "behemothbash",
    "description": "Ataque físico de tipo Steel, potencia base 100."
  },
  "behemothblade": {
    "num": 781,
    "accuracy": 100,
    "basePower": 100,
    "category": "Physical",
    "name": "Tajo Supremo",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "slicing": 1
    },
    "target": "normal",
    "type": "Steel",
    "id": "behemothblade",
    "description": "Ataque físico de tipo Steel, potencia base 100."
  },
  "belch": {
    "num": 562,
    "accuracy": 90,
    "basePower": 120,
    "category": "Special",
    "name": "Eructo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "failmefirst": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1
    },
    "target": "normal",
    "type": "Poison",
    "contestType": "Tough",
    "id": "belch",
    "description": "El Pokémon causa daño a su oponente lanzándole un eructo. Para poder utilizar este movimiento tiene que llevar una baya y comérsela."
  },
  "bellydrum": {
    "num": 187,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Tambor",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "effect": "heal"
    },
    "contestType": "Cute",
    "id": "bellydrum",
    "description": "Reduce la mitad de los PS máximos para mejorar al máximo el Ataque."
  },
  "bestow": {
    "num": 516,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Ofrenda",
    "pp": 15,
    "priority": 0,
    "flags": {
      "mirror": 1,
      "bypasssub": 1,
      "allyanim": 1,
      "noassist": 1,
      "failcopycat": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spe": 2
      }
    },
    "contestType": "Cute",
    "id": "bestow",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "bide": {
    "num": 117,
    "accuracy": true,
    "basePower": 0,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Venganza",
    "pp": 10,
    "priority": 1,
    "flags": {
      "contact": 1,
      "protect": 1,
      "metronome": 1,
      "nosleeptalk": 1,
      "failinstruct": 1
    },
    "volatileStatus": "bide",
    "ignoreImmunity": true,
    "condition": {
      "duration": 3,
      "onLockMove": "bide",
      "onDamagePriority": -101
    },
    "target": "self",
    "type": "Normal",
    "contestType": "Tough",
    "id": "bide",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "bind": {
    "num": 20,
    "accuracy": 85,
    "basePower": 15,
    "category": "Physical",
    "name": "Atadura",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "volatileStatus": "partiallytrapped",
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "bind",
    "description": "Ata y oprime de cuatro a cinco turnos."
  },
  "bite": {
    "num": 44,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "name": "Mordisco",
    "pp": 25,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bite": 1
    },
    "secondary": {
      "chance": 30,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Dark",
    "contestType": "Tough",
    "id": "bite",
    "description": "Un voraz bocado que puede amedrentar al objetivo."
  },
  "bitterblade": {
    "num": 891,
    "accuracy": 100,
    "basePower": 90,
    "category": "Physical",
    "name": "Espada Lamento",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "heal": 1,
      "metronome": 1,
      "slicing": 1
    },
    "drain": [
      1,
      2
    ],
    "target": "normal",
    "type": "Fire",
    "id": "bitterblade",
    "description": "Ataque físico de tipo Fire, potencia base 90. Recupera PS equivalentes a 50% del daño causado."
  },
  "bittermalice": {
    "num": 841,
    "accuracy": 100,
    "basePower": 75,
    "category": "Special",
    "name": "Rencor Reprimido",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "atk": -1
      }
    },
    "target": "normal",
    "type": "Ghost",
    "id": "bittermalice",
    "description": "Ataque especial de tipo Ghost, potencia base 75."
  },
  "blackholeeclipse": {
    "num": 654,
    "accuracy": true,
    "basePower": 1,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Agujero Negro Aniquilador",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "darkiniumz",
    "target": "normal",
    "type": "Dark",
    "contestType": "Cool",
    "id": "blackholeeclipse",
    "description": "Ataque físico de tipo Dark, potencia base 1."
  },
  "blastburn": {
    "num": 307,
    "accuracy": 90,
    "basePower": 150,
    "category": "Special",
    "name": "Anillo Ígneo",
    "pp": 5,
    "priority": 0,
    "flags": {
      "recharge": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "self": {
      "volatileStatus": "mustrecharge"
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Beautiful",
    "id": "blastburn",
    "description": "Explosión de fuego. El atacante debe descansar el siguiente turno."
  },
  "blazekick": {
    "num": 299,
    "accuracy": 90,
    "basePower": 85,
    "category": "Physical",
    "name": "Patada Ígnea",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "critRatio": 2,
    "secondary": {
      "chance": 10,
      "status": "brn"
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Cool",
    "id": "blazekick",
    "description": "Patada que suele ser un golpe crítico y puede causar quemaduras."
  },
  "blazingtorque": {
    "num": 896,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "isNonstandard": "Unobtainable",
    "name": "Pirochoque",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "failencore": 1,
      "failmefirst": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1,
      "nosketch": 1
    },
    "secondary": {
      "chance": 30,
      "status": "brn"
    },
    "target": "normal",
    "type": "Fire",
    "id": "blazingtorque",
    "description": "Ataque físico de tipo Fire, potencia base 80. 30% de probabilidad de causar quemadura."
  },
  "bleakwindstorm": {
    "num": 846,
    "accuracy": 80,
    "basePower": 100,
    "category": "Special",
    "name": "Vendaval Gélido",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "wind": 1
    },
    "secondary": {
      "chance": 30,
      "boosts": {
        "spe": -1
      }
    },
    "target": "allAdjacentFoes",
    "type": "Flying",
    "id": "bleakwindstorm",
    "description": "Ataque especial de tipo Flying, potencia base 100. Precisión: 80%."
  },
  "blizzard": {
    "num": 59,
    "accuracy": 70,
    "basePower": 110,
    "category": "Special",
    "name": "Ventisca",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "wind": 1
    },
    "secondary": {
      "chance": 10,
      "status": "frz"
    },
    "target": "allAdjacentFoes",
    "type": "Ice",
    "contestType": "Beautiful",
    "id": "blizzard",
    "description": "Tormenta de hielo que puede llegar a congelar."
  },
  "block": {
    "num": 335,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Bloqueo",
    "pp": 5,
    "priority": 0,
    "flags": {
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Cute",
    "id": "block",
    "description": "Le corta el paso al objetivo para que no pueda escapar."
  },
  "bloodmoon": {
    "num": 901,
    "accuracy": 100,
    "basePower": 140,
    "category": "Special",
    "name": "Luna Roja",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "cantusetwice": 1
    },
    "target": "normal",
    "type": "Normal",
    "id": "bloodmoon",
    "description": "Ataque especial de tipo Normal, potencia base 140."
  },
  "bloomdoom": {
    "num": 644,
    "accuracy": true,
    "basePower": 1,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Megatón Floral",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "grassiumz",
    "target": "normal",
    "type": "Grass",
    "contestType": "Cool",
    "id": "bloomdoom",
    "description": "Ataque físico de tipo Grass, potencia base 1."
  },
  "blueflare": {
    "num": 551,
    "accuracy": 85,
    "basePower": 130,
    "category": "Special",
    "name": "Llama Azul",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 20,
      "status": "brn"
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Beautiful",
    "id": "blueflare",
    "description": "Ataca con una bella pero potente llama azul que rodea al objetivo. Puede quemarlo."
  },
  "bodypress": {
    "num": 776,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Plancha Corporal",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1
    },
    "overrideOffensiveStat": "def",
    "target": "normal",
    "type": "Fighting",
    "id": "bodypress",
    "description": "El usuario usa el cuerpo para lanzar su ataque e infligir un daño directamente proporcional a su Defensa."
  },
  "bodyslam": {
    "num": 34,
    "accuracy": 100,
    "basePower": 85,
    "category": "Physical",
    "name": "Golpe Cuerpo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1,
      "minimize": 1
    },
    "secondary": {
      "chance": 30,
      "status": "par"
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "bodyslam",
    "description": "Salta sobre el objetivo con todo su peso y puede llegar a paralizarlo."
  },
  "boltbeak": {
    "num": 754,
    "accuracy": 100,
    "basePower": 85,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Electropico",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Electric",
    "id": "boltbeak",
    "description": "El usuario ensarta al objetivo con su pico cargado de electricidad. Si ataca en primer lugar, la potencia del movimiento se duplica.",
    "dynamicBasePower": true
  },
  "boltstrike": {
    "num": 550,
    "accuracy": 85,
    "basePower": 130,
    "category": "Physical",
    "name": "Ataque Fulgor",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 20,
      "status": "par"
    },
    "target": "normal",
    "type": "Electric",
    "contestType": "Beautiful",
    "id": "boltstrike",
    "description": "Ataca envolviéndose de una gran carga eléctrica y embistiendo al objetivo con ella. Puede paralizar."
  },
  "boneclub": {
    "num": 125,
    "accuracy": 85,
    "basePower": 65,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Hueso Palo",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Ground",
    "contestType": "Tough",
    "id": "boneclub",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "bonemerang": {
    "num": 155,
    "accuracy": 90,
    "basePower": 50,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Huesomerang",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": 2,
    "target": "normal",
    "type": "Ground",
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Tough",
    "id": "bonemerang",
    "description": "Lanza un hueso a modo de bumerán que golpea dos veces."
  },
  "bonerush": {
    "num": 198,
    "accuracy": 90,
    "basePower": 25,
    "category": "Physical",
    "name": "Ataque Óseo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": [
      2,
      5
    ],
    "target": "normal",
    "type": "Ground",
    "zMove": {
      "basePower": 140
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Tough",
    "id": "bonerush",
    "description": "Hueso en ristre, aporrea al objetivo de dos a cinco veces."
  },
  "boomburst": {
    "num": 586,
    "accuracy": 100,
    "basePower": 140,
    "category": "Special",
    "name": "Estruendo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "target": "allAdjacent",
    "type": "Normal",
    "contestType": "Tough",
    "id": "boomburst",
    "description": "Ataca a todos los Pokémon a su alrededor con una potentísima onda sonora."
  },
  "bounce": {
    "num": 340,
    "accuracy": 85,
    "basePower": 85,
    "category": "Physical",
    "name": "Bote",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "charge": 1,
      "protect": 1,
      "mirror": 1,
      "gravity": 1,
      "distance": 1,
      "metronome": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failinstruct": 1
    },
    "condition": {
      "duration": 2
    },
    "secondary": {
      "chance": 30,
      "status": "par"
    },
    "target": "any",
    "type": "Flying",
    "contestType": "Cute",
    "id": "bounce",
    "description": "El usuario bota en el primer turno y golpea al objetivo en el segundo y puede llegar a paralizarlo."
  },
  "bouncybubble": {
    "num": 733,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "isNonstandard": "LGPE",
    "name": "Vapodrenaje",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "heal": 1
    },
    "drain": [
      1,
      2
    ],
    "target": "normal",
    "type": "Water",
    "contestType": "Clever",
    "id": "bouncybubble",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "branchpoke": {
    "num": 785,
    "accuracy": 100,
    "basePower": 40,
    "category": "Physical",
    "name": "Punzada Rama",
    "pp": 40,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Grass",
    "id": "branchpoke",
    "description": "Ataca pinchando al objetivo con una rama afilada."
  },
  "bravebird": {
    "num": 413,
    "accuracy": 100,
    "basePower": 120,
    "category": "Physical",
    "name": "Pájaro Osado",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "distance": 1,
      "metronome": 1
    },
    "recoil": [
      33,
      100
    ],
    "target": "any",
    "type": "Flying",
    "contestType": "Cool",
    "id": "bravebird",
    "description": "Pliega sus alas y ataca con un vuelo rasante. El Pokémon que lo usa también resulta seriamente dañado."
  },
  "breakingswipe": {
    "num": 784,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "name": "Vasto Impacto",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "atk": -1
      }
    },
    "target": "allAdjacentFoes",
    "type": "Dragon",
    "id": "breakingswipe",
    "description": "El usuario sacude violentamente su enorme cola para golpear a todos los rivales y reducir su Ataque a la par."
  },
  "breakneckblitz": {
    "num": 622,
    "accuracy": true,
    "basePower": 1,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Carrera Arrolladora",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "normaliumz",
    "target": "normal",
    "type": "Normal",
    "contestType": "Cool",
    "id": "breakneckblitz",
    "description": "Ataque físico de tipo Normal, potencia base 1."
  },
  "brickbreak": {
    "num": 280,
    "accuracy": 100,
    "basePower": 75,
    "category": "Physical",
    "name": "Demolición",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Cool",
    "id": "brickbreak",
    "description": "Potente ataque que también es capaz de destruir barreras como Pantalla de Luz y Reflejo."
  },
  "brine": {
    "num": 362,
    "accuracy": 100,
    "basePower": 65,
    "category": "Special",
    "name": "Salmuera",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Water",
    "contestType": "Tough",
    "id": "brine",
    "description": "Si al objetivo le queda la mitad o menos de sus PS, el ataque será el doble de fuerte."
  },
  "brutalswing": {
    "num": 693,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "name": "Giro Vil",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "allAdjacent",
    "type": "Dark",
    "contestType": "Tough",
    "id": "brutalswing",
    "description": "Hace pivotar su cuerpo para causar daño a su alrededor."
  },
  "bubble": {
    "num": 145,
    "accuracy": 100,
    "basePower": 40,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Burbuja",
    "pp": 30,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "boosts": {
        "spe": -1
      }
    },
    "target": "allAdjacentFoes",
    "type": "Water",
    "contestType": "Cute",
    "id": "bubble",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "bubblebeam": {
    "num": 61,
    "accuracy": 100,
    "basePower": 65,
    "category": "Special",
    "name": "Rayo Burbuja",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "boosts": {
        "spe": -1
      }
    },
    "target": "normal",
    "type": "Water",
    "contestType": "Beautiful",
    "id": "bubblebeam",
    "description": "Diluvio de burbujas que puede bajar la Velocidad."
  },
  "bugbite": {
    "num": 450,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "name": "Picadura",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Bug",
    "contestType": "Cute",
    "id": "bugbite",
    "description": "Pica al objetivo. Si el objetivo lleva una baya, el usuario se la come y se beneficia de su efecto."
  },
  "bugbuzz": {
    "num": 405,
    "accuracy": 100,
    "basePower": 90,
    "category": "Special",
    "name": "Zumbido",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "boosts": {
        "spd": -1
      }
    },
    "target": "normal",
    "type": "Bug",
    "contestType": "Beautiful",
    "id": "bugbuzz",
    "description": "El usuario crea una onda sónica dañina moviendo su cuerpo que también puede disminuir la Defensa Especial del objetivo."
  },
  "bulkup": {
    "num": 339,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Corpulencia",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": 1,
      "def": 1
    },
    "target": "self",
    "type": "Fighting",
    "zMove": {
      "boost": {
        "atk": 1
      }
    },
    "contestType": "Cool",
    "id": "bulkup",
    "description": "Robustece el cuerpo para subir el Ataque y la Defensa."
  },
  "bulldoze": {
    "num": 523,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "name": "Terratemblor",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "spe": -1
      }
    },
    "target": "allAdjacent",
    "type": "Ground",
    "contestType": "Tough",
    "id": "bulldoze",
    "description": "Sacudida sísmica que afecta a los demás Pokémon adyacentes y también reduce su Velocidad."
  },
  "bulletpunch": {
    "num": 418,
    "accuracy": 100,
    "basePower": 40,
    "category": "Physical",
    "name": "Puño Bala",
    "pp": 30,
    "priority": 1,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Steel",
    "contestType": "Tough",
    "id": "bulletpunch",
    "description": "Ataca con fuertes puñetazos tan rápidos como proyectiles. Este movimiento tiene prioridad alta."
  },
  "bulletseed": {
    "num": 331,
    "accuracy": 100,
    "basePower": 25,
    "category": "Physical",
    "name": "Semilladora",
    "pp": 30,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "multihit": [
      2,
      5
    ],
    "target": "normal",
    "type": "Grass",
    "zMove": {
      "basePower": 140
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Cool",
    "id": "bulletseed",
    "description": "Dispara rápido de dos a cinco ráfagas de semillas de manera consecutiva."
  },
  "burningbulwark": {
    "num": 908,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Llama Protectora",
    "pp": 10,
    "priority": 4,
    "flags": {
      "metronome": 1,
      "noassist": 1,
      "failcopycat": 1
    },
    "stallingMove": true,
    "volatileStatus": "burningbulwark",
    "condition": {
      "duration": 1,
      "onTryHitPriority": 3
    },
    "target": "self",
    "type": "Fire",
    "id": "burningbulwark",
    "description": "Movimiento de estado de tipo Fire. Prioridad +4. Puede causar burningbulwark."
  },
  "burningjealousy": {
    "num": 807,
    "accuracy": 100,
    "basePower": 70,
    "category": "Special",
    "name": "Envidia Ardiente",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100
    },
    "target": "allAdjacentFoes",
    "type": "Fire",
    "contestType": "Tough",
    "id": "burningjealousy",
    "description": "Ataca al objetivo con la energía generada por la envidia y causa quemaduras a los Pokémon cuyas características hayan aumentado en ese turno."
  },
  "burnup": {
    "num": 682,
    "accuracy": 100,
    "basePower": 130,
    "category": "Special",
    "isNonstandard": "Unobtainable",
    "name": "Llama Final",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "defrost": 1,
      "metronome": 1
    },
    "self": {},
    "target": "normal",
    "type": "Fire",
    "contestType": "Clever",
    "id": "burnup",
    "description": "Utiliza hasta el último resquicio de llamas de su cuerpo para infligir un grave daño al oponente. Tras el ataque, el usuario deja de ser de tipo Fuego."
  },
  "buzzybuzz": {
    "num": 734,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "isNonstandard": "LGPE",
    "name": "Joltioparálisis",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
      "chance": 100,
      "status": "par"
    },
    "target": "normal",
    "type": "Electric",
    "contestType": "Clever",
    "id": "buzzybuzz",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "calmmind": {
    "num": 347,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Paz Mental",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "spa": 1,
      "spd": 1
    },
    "target": "self",
    "type": "Psychic",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Clever",
    "id": "calmmind",
    "description": "Aumenta la concentración y calma el espíritu para subir el Ataque Especial y la Defensa Especial."
  },
  "camouflage": {
    "num": 293,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Camuflaje",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "boost": {
        "evasion": 1
      }
    },
    "contestType": "Clever",
    "id": "camouflage",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "captivate": {
    "num": 445,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Seducción",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "boosts": {
      "spa": -2
    },
    "target": "allAdjacentFoes",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spd": 2
      }
    },
    "contestType": "Cute",
    "id": "captivate",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "catastropika": {
    "num": 658,
    "accuracy": true,
    "basePower": 210,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Pikavoltio Letal",
    "pp": 1,
    "priority": 0,
    "flags": {
      "contact": 1
    },
    "isZ": "pikaniumz",
    "target": "normal",
    "type": "Electric",
    "contestType": "Cool",
    "id": "catastropika",
    "description": "Ataque físico de tipo Electric, potencia base 210."
  },
  "ceaselessedge": {
    "num": 845,
    "accuracy": 90,
    "basePower": 65,
    "category": "Physical",
    "name": "Tajo Metralla",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "slicing": 1
    },
    "secondary": {},
    "target": "normal",
    "type": "Dark",
    "id": "ceaselessedge",
    "description": "Ataque físico de tipo Dark, potencia base 65. Precisión: 90%."
  },
  "celebrate": {
    "num": 606,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Celebración",
    "pp": 40,
    "priority": 0,
    "flags": {
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "boost": {
        "atk": 1,
        "def": 1,
        "spa": 1,
        "spd": 1,
        "spe": 1
      }
    },
    "contestType": "Cute",
    "id": "celebrate",
    "description": "Movimiento de estado de tipo Normal."
  },
  "charge": {
    "num": 268,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Carga",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "volatileStatus": "charge",
    "condition": {
      "onBasePowerPriority": 9
    },
    "boosts": {
      "spd": 1
    },
    "target": "self",
    "type": "Electric",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Clever",
    "id": "charge",
    "description": "Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial."
  },
  "chargebeam": {
    "num": 451,
    "accuracy": 90,
    "basePower": 50,
    "category": "Special",
    "name": "Rayo Carga",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 70,
      "self": {
        "boosts": {
          "spa": 1
        }
      }
    },
    "target": "normal",
    "type": "Electric",
    "contestType": "Beautiful",
    "id": "chargebeam",
    "description": "Lanza un rayo eléctrico contra el objetivo. Puede subir el Ataque Especial de quien lo usa."
  },
  "charm": {
    "num": 204,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Encanto",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": -2
    },
    "target": "normal",
    "type": "Fairy",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Cute",
    "id": "charm",
    "description": "Engatusa al objetivo y reduce mucho su Ataque."
  },
  "chatter": {
    "num": 448,
    "accuracy": 100,
    "basePower": 65,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Cháchara",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "sound": 1,
      "distance": 1,
      "bypasssub": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1
    },
    "secondary": {
      "chance": 100,
      "volatileStatus": "confusion"
    },
    "target": "any",
    "type": "Flying",
    "contestType": "Cute",
    "id": "chatter",
    "description": "Ataca con una onda de sonido muy ruidosa compuesta por palabras y confunde al objetivo."
  },
  "chillingwater": {
    "num": 886,
    "accuracy": 100,
    "basePower": 50,
    "category": "Special",
    "name": "Agua Fría",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "atk": -1
      }
    },
    "target": "normal",
    "type": "Water",
    "contestType": "Beautiful",
    "id": "chillingwater",
    "description": "Ataque especial de tipo Water, potencia base 50."
  },
  "chillyreception": {
    "num": 881,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Fría Acogida",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "weather": "snowscape",
    "selfSwitch": true,
    "condition": {
      "duration": 1,
      "onBeforeMovePriority": 100
    },
    "target": "all",
    "type": "Ice",
    "id": "chillyreception",
    "description": "Movimiento de estado de tipo Ice. El usuario cambia después de atacar. Cambia el clima a snowscape."
  },
  "chipaway": {
    "num": 498,
    "accuracy": 100,
    "basePower": 70,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Guardia Baja",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "ignoreDefensive": true,
    "ignoreEvasion": true,
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "chipaway",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "chloroblast": {
    "num": 835,
    "accuracy": 95,
    "basePower": 150,
    "category": "Special",
    "name": "Clorofiláser",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "chloroblastRecoil": true,
    "target": "normal",
    "type": "Grass",
    "id": "chloroblast",
    "description": "Ataque especial de tipo Grass, potencia base 150. Precisión: 95%."
  },
  "circlethrow": {
    "num": 509,
    "accuracy": 90,
    "basePower": 60,
    "category": "Physical",
    "name": "Llave Giro",
    "pp": 10,
    "priority": -6,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "noassist": 1,
      "failcopycat": 1
    },
    "forceSwitch": true,
    "target": "normal",
    "type": "Fighting",
    "contestType": "Cool",
    "id": "circlethrow",
    "description": "Lanza por los aires al objetivo y hace que salga otro Pokémon. Si es uno salvaje, acaba el combate."
  },
  "clamp": {
    "num": 128,
    "accuracy": 85,
    "basePower": 35,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Tenaza",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "volatileStatus": "partiallytrapped",
    "target": "normal",
    "type": "Water",
    "contestType": "Tough",
    "id": "clamp",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "clangingscales": {
    "num": 691,
    "accuracy": 100,
    "basePower": 110,
    "category": "Special",
    "name": "Fragor Escamas",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "selfBoost": {
      "boosts": {
        "def": -1
      }
    },
    "target": "allAdjacentFoes",
    "type": "Dragon",
    "contestType": "Tough",
    "id": "clangingscales",
    "description": "Frota todas las escamas de su cuerpo para crear un fuerte sonido con el que ataca. Cuando el ataque termina, su Defensa se ve reducida."
  },
  "clangoroussoul": {
    "num": 775,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Estruendo Escama",
    "pp": 5,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "sound": 1,
      "dance": 1
    },
    "boosts": {
      "atk": 1,
      "def": 1,
      "spa": 1,
      "spd": 1,
      "spe": 1
    },
    "target": "self",
    "type": "Dragon",
    "id": "clangoroussoul",
    "description": "Utiliza parte de los PS propios para subir sus características."
  },
  "clangoroussoulblaze": {
    "num": 728,
    "accuracy": true,
    "basePower": 185,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Estruendo Implacable",
    "pp": 1,
    "priority": 0,
    "flags": {
      "sound": 1,
      "bypasssub": 1
    },
    "selfBoost": {
      "boosts": {
        "atk": 1,
        "def": 1,
        "spa": 1,
        "spd": 1,
        "spe": 1
      }
    },
    "isZ": "kommoniumz",
    "secondary": {},
    "target": "allAdjacentFoes",
    "type": "Dragon",
    "contestType": "Cool",
    "id": "clangoroussoulblaze",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "clearsmog": {
    "num": 499,
    "accuracy": true,
    "basePower": 50,
    "category": "Special",
    "name": "Niebla Clara",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Poison",
    "contestType": "Beautiful",
    "id": "clearsmog",
    "description": "Ataque especial de tipo Poison, potencia base 50."
  },
  "closecombat": {
    "num": 370,
    "accuracy": 100,
    "basePower": 120,
    "category": "Physical",
    "name": "A Bocajarro",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "self": {
      "boosts": {
        "def": -1,
        "spd": -1
      }
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Tough",
    "id": "closecombat",
    "description": "Lucha abiertamente contra el objetivo sin protegerse. También reduce la Defensa y la Defensa Especial del usuario."
  },
  "coaching": {
    "num": 811,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Motivación",
    "pp": 10,
    "priority": 0,
    "flags": {
      "bypasssub": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": 1,
      "def": 1
    },
    "target": "adjacentAlly",
    "type": "Fighting",
    "id": "coaching",
    "description": "El usuario imparte indicaciones precisas a sus aliados, que ven aumentados su Ataque y su Defensa."
  },
  "coil": {
    "num": 489,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Enrosque",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": 1,
      "def": 1,
      "accuracy": 1
    },
    "target": "self",
    "type": "Poison",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Tough",
    "id": "coil",
    "description": "El usuario se concentra, lo que le permite aumentar su Ataque, Defensa y Precisión."
  },
  "collisioncourse": {
    "num": 878,
    "accuracy": 100,
    "basePower": 100,
    "category": "Physical",
    "name": "Nitrochoque",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Tough",
    "id": "collisioncourse",
    "description": "Ataque físico de tipo Fighting, potencia base 100."
  },
  "combattorque": {
    "num": 899,
    "accuracy": 100,
    "basePower": 100,
    "category": "Physical",
    "isNonstandard": "Unobtainable",
    "name": "Pugnachoque",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "failencore": 1,
      "failmefirst": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1,
      "nosketch": 1
    },
    "secondary": {
      "chance": 30,
      "status": "par"
    },
    "target": "normal",
    "type": "Fighting",
    "id": "combattorque",
    "description": "Ataque físico de tipo Fighting, potencia base 100. 30% de probabilidad de causar parálisis."
  },
  "cometpunch": {
    "num": 4,
    "accuracy": 85,
    "basePower": 18,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Puño Cometa",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1,
      "metronome": 1
    },
    "multihit": [
      2,
      5
    ],
    "target": "normal",
    "type": "Normal",
    "maxMove": {
      "basePower": 100
    },
    "contestType": "Tough",
    "id": "cometpunch",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "comeuppance": {
    "num": 894,
    "accuracy": 100,
    "basePower": 0,
    "category": "Physical",
    "name": "Resarcimiento",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "failmefirst": 1
    },
    "target": "scripted",
    "type": "Dark",
    "contestType": "Cool",
    "id": "comeuppance",
    "description": "Ataque físico de tipo Dark, sin potencia directa."
  },
  "confide": {
    "num": 590,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Confidencia",
    "pp": 20,
    "priority": 0,
    "flags": {
      "reflectable": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "boosts": {
      "spa": -1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Cute",
    "id": "confide",
    "description": "Hace que el objetivo pierda la concentración contándole un secreto. Disminuye el Ataque Especial del oponente."
  },
  "confuseray": {
    "num": 109,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Rayo Confuso",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "volatileStatus": "confusion",
    "target": "normal",
    "type": "Ghost",
    "zMove": {
      "boost": {
        "spa": 1
      }
    },
    "contestType": "Clever",
    "id": "confuseray",
    "description": "Rayo siniestro que confunde al objetivo."
  },
  "confusion": {
    "num": 93,
    "accuracy": 100,
    "basePower": 50,
    "category": "Special",
    "name": "Confusión",
    "pp": 25,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "volatileStatus": "confusion"
    },
    "target": "normal",
    "type": "Psychic",
    "contestType": "Clever",
    "id": "confusion",
    "description": "Débil ataque telequinético que puede causar confusión."
  },
  "constrict": {
    "num": 132,
    "accuracy": 100,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Restricción",
    "pp": 35,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "boosts": {
        "spe": -1
      }
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "constrict",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "continentalcrush": {
    "num": 632,
    "accuracy": true,
    "basePower": 1,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Aplastamiento Gigalítico",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "rockiumz",
    "target": "normal",
    "type": "Rock",
    "contestType": "Cool",
    "id": "continentalcrush",
    "description": "Ataque físico de tipo Rock, potencia base 1."
  },
  "conversion": {
    "num": 160,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Conversión",
    "pp": 30,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "boost": {
        "atk": 1,
        "def": 1,
        "spa": 1,
        "spd": 1,
        "spe": 1
      }
    },
    "contestType": "Beautiful",
    "id": "conversion",
    "description": "Cambia el tipo del usuario por el del primero de sus movimientos."
  },
  "conversion2": {
    "num": 176,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Conversión 2",
    "pp": 30,
    "priority": 0,
    "flags": {
      "bypasssub": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "effect": "heal"
    },
    "contestType": "Beautiful",
    "id": "conversion2",
    "description": "El usuario cambia de tipo para hacerse resistente al último tipo de movimiento usado por el objetivo."
  },
  "copycat": {
    "num": 383,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Copión",
    "pp": 20,
    "priority": 0,
    "flags": {
      "failencore": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1
    },
    "callsMove": true,
    "target": "self",
    "type": "Normal",
    "zMove": {
      "boost": {
        "accuracy": 1
      }
    },
    "contestType": "Cute",
    "id": "copycat",
    "description": "Imita el movimiento usado justo antes. El movimiento falla si no se ha usado aún ninguno."
  },
  "coreenforcer": {
    "num": 687,
    "accuracy": 100,
    "basePower": 100,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Núcleo Castigo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "allAdjacentFoes",
    "type": "Dragon",
    "zMove": {
      "basePower": 140
    },
    "contestType": "Tough",
    "id": "coreenforcer",
    "description": "Inflige daño al rival, y si este ya ha hecho uso de algún movimiento, pierde su habilidad."
  },
  "corkscrewcrash": {
    "num": 638,
    "accuracy": true,
    "basePower": 1,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Hélice Trepanadora",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "steeliumz",
    "target": "normal",
    "type": "Steel",
    "contestType": "Cool",
    "id": "corkscrewcrash",
    "description": "Ataque físico de tipo Steel, potencia base 1."
  },
  "corrosivegas": {
    "num": 810,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Unobtainable",
    "name": "Gas Corrosivo",
    "pp": 40,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "allAdjacent",
    "type": "Poison",
    "id": "corrosivegas",
    "description": "El usuario libera un gas cáustico que envuelve a todos los que se encuentren alrededor y derrite por completo los objetos que lleven equipados."
  },
  "cosmicpower": {
    "num": 322,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Masa Cósmica",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "def": 1,
      "spd": 1
    },
    "target": "self",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Beautiful",
    "id": "cosmicpower",
    "description": "Sube la Defensa y la Defensa Especial propias con energía mística."
  },
  "cottonguard": {
    "num": 538,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Rizo Algodón",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "def": 3
    },
    "target": "self",
    "type": "Grass",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Cute",
    "id": "cottonguard",
    "description": "Cubre al Pokémon con una madeja protectora. Aumenta muchísimo la Defensa."
  },
  "cottonspore": {
    "num": 178,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Esporagodón",
    "pp": 40,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1,
      "powder": 1
    },
    "boosts": {
      "spe": -2
    },
    "target": "allAdjacentFoes",
    "type": "Grass",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Beautiful",
    "id": "cottonspore",
    "description": "Adhiere esporas a los rivales para reducir mucho su Velocidad."
  },
  "counter": {
    "num": 68,
    "accuracy": 100,
    "basePower": 0,
    "category": "Physical",
    "name": "Contraataque",
    "pp": 20,
    "priority": -5,
    "flags": {
      "contact": 1,
      "protect": 1,
      "failmefirst": 1,
      "noassist": 1,
      "failcopycat": 1
    },
    "condition": {
      "duration": 1,
      "noCopy": true,
      "onRedirectTargetPriority": -1
    },
    "target": "scripted",
    "type": "Fighting",
    "maxMove": {
      "basePower": 75
    },
    "contestType": "Tough",
    "id": "counter",
    "description": "Devuelve un golpe físico por duplicado."
  },
  "courtchange": {
    "num": 756,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Cambio de Cancha",
    "pp": 10,
    "priority": 0,
    "flags": {
      "mirror": 1,
      "metronome": 1
    },
    "target": "all",
    "type": "Normal",
    "id": "courtchange",
    "description": "Extraño poder que intercambia los efectos en el terreno de combate de ambos bandos."
  },
  "covet": {
    "num": 343,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "name": "Antojo",
    "pp": 25,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "failmefirst": 1,
      "noassist": 1,
      "failcopycat": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cute",
    "id": "covet",
    "description": "Se acerca con ternura al objetivo, pero le ataca y le roba el objeto que lleve."
  },
  "crabhammer": {
    "num": 152,
    "accuracy": 90,
    "basePower": 100,
    "category": "Physical",
    "name": "Martillazo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "critRatio": 2,
    "target": "normal",
    "type": "Water",
    "contestType": "Tough",
    "id": "crabhammer",
    "description": "Golpea con fuerza con una pinza enorme. Suele asestar un golpe crítico."
  },
  "craftyshield": {
    "num": 578,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Truco Defensa",
    "pp": 10,
    "priority": 3,
    "flags": {},
    "sideCondition": "craftyshield",
    "condition": {
      "duration": 1,
      "onTryHitPriority": 3
    },
    "target": "allySide",
    "type": "Fairy",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Clever",
    "id": "craftyshield",
    "description": "Usa unos misteriosos poderes para protegerse a sí mismo y a sus aliados de movimientos de estado, pero no de otro tipo de ataques."
  },
  "crosschop": {
    "num": 238,
    "accuracy": 80,
    "basePower": 100,
    "category": "Physical",
    "name": "Tajo Cruzado",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "critRatio": 2,
    "target": "normal",
    "type": "Fighting",
    "contestType": "Cool",
    "id": "crosschop",
    "description": "Corte doble que suele propinar un golpe crítico."
  },
  "crosspoison": {
    "num": 440,
    "accuracy": 100,
    "basePower": 70,
    "category": "Physical",
    "name": "Veneno X",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "slicing": 1
    },
    "secondary": {
      "chance": 10,
      "status": "psn"
    },
    "critRatio": 2,
    "target": "normal",
    "type": "Poison",
    "contestType": "Cool",
    "id": "crosspoison",
    "description": "Tajo que puede envenenar al objetivo. Suele ser crítico."
  },
  "crunch": {
    "num": 242,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Triturar",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bite": 1
    },
    "secondary": {
      "chance": 20,
      "boosts": {
        "def": -1
      }
    },
    "target": "normal",
    "type": "Dark",
    "contestType": "Tough",
    "id": "crunch",
    "description": "Tritura con afilados colmillos y puede bajar la Defensa del objetivo."
  },
  "crushclaw": {
    "num": 306,
    "accuracy": 95,
    "basePower": 75,
    "category": "Physical",
    "name": "Garra Brutal",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 50,
      "boosts": {
        "def": -1
      }
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cool",
    "id": "crushclaw",
    "description": "Hace trizas al objetivo con garras afiladas y puede bajar su Defensa."
  },
  "crushgrip": {
    "num": 462,
    "accuracy": 100,
    "basePower": 0,
    "category": "Physical",
    "name": "Agarrón",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "basePower": 190
    },
    "maxMove": {
      "basePower": 140
    },
    "contestType": "Tough",
    "id": "crushgrip",
    "description": "Estruja al objetivo con gran fuerza. Cuantos más PS le queden al objetivo, más fuerte será el ataque.",
    "dynamicBasePower": true
  },
  "curse": {
    "num": 174,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Maldición",
    "pp": 10,
    "priority": 0,
    "flags": {
      "bypasssub": 1,
      "metronome": 1
    },
    "volatileStatus": "curse",
    "condition": {
      "onResidualOrder": 12
    },
    "target": "normal",
    "nonGhostTarget": "self",
    "type": "Ghost",
    "zMove": {
      "effect": "curse"
    },
    "contestType": "Tough",
    "id": "curse",
    "description": "Un movimiento que tiene efectos distintos si el usuario es de tipo Fantasma o no."
  },
  "cut": {
    "num": 15,
    "accuracy": 95,
    "basePower": 50,
    "category": "Physical",
    "isNonstandard": "Unobtainable",
    "name": "Corte",
    "pp": 30,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "slicing": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cool",
    "id": "cut",
    "description": "Ataque físico de tipo Normal, potencia base 50. Precisión: 95%."
  },
  "darkestlariat": {
    "num": 663,
    "accuracy": 100,
    "basePower": 85,
    "category": "Physical",
    "name": "Lariat Oscuro",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "ignoreEvasion": true,
    "ignoreDefensive": true,
    "target": "normal",
    "type": "Dark",
    "contestType": "Cool",
    "id": "darkestlariat",
    "description": "Gira sobre sí mismo y golpea al oponente con ambos brazos. Ignora los cambios en las características del objetivo."
  },
  "darkpulse": {
    "num": 399,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Pulso Umbrío",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "distance": 1,
      "metronome": 1,
      "pulse": 1
    },
    "secondary": {
      "chance": 20,
      "volatileStatus": "flinch"
    },
    "target": "any",
    "type": "Dark",
    "contestType": "Cool",
    "id": "darkpulse",
    "description": "Libera una horrible aura llena de malos pensamientos que puede amedrentar al objetivo."
  },
  "darkvoid": {
    "num": 464,
    "accuracy": 50,
    "basePower": 0,
    "category": "Status",
    "name": "Brecha Negra",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1,
      "nosketch": 1
    },
    "status": "slp",
    "target": "allAdjacentFoes",
    "type": "Dark",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Clever",
    "id": "darkvoid",
    "description": "El objetivo es enviado a un mundo de tinieblas que lo hace dormir."
  },
  "dazzlinggleam": {
    "num": 605,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Brillo Mágico",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "allAdjacentFoes",
    "type": "Fairy",
    "contestType": "Beautiful",
    "id": "dazzlinggleam",
    "description": "Inflige daño a los oponentes con una potente luz."
  },
  "decorate": {
    "num": 777,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Decoración",
    "pp": 15,
    "priority": 0,
    "flags": {
      "allyanim": 1
    },
    "boosts": {
      "atk": 2,
      "spa": 2
    },
    "target": "normal",
    "type": "Fairy",
    "id": "decorate",
    "description": "Aumenta mucho el Ataque y el Ataque Especial del objetivo al decorarlo."
  },
  "defendorder": {
    "num": 455,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "A Defender",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "def": 1,
      "spd": 1
    },
    "target": "self",
    "type": "Bug",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Clever",
    "id": "defendorder",
    "description": "El usuario llama a sus súbditos para que formen un escudo viviente. Sube la Defensa y la Defensa Especial."
  },
  "defensecurl": {
    "num": 111,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Rizo Defensa",
    "pp": 40,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "def": 1
    },
    "volatileStatus": "defensecurl",
    "condition": {
      "noCopy": true
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "boost": {
        "accuracy": 1
      }
    },
    "contestType": "Cute",
    "id": "defensecurl",
    "description": "Se enrosca para ocultar sus puntos débiles y aumentar la Defensa."
  },
  "defog": {
    "num": 432,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Despejar",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Flying",
    "zMove": {
      "boost": {
        "accuracy": 1
      }
    },
    "contestType": "Cool",
    "id": "defog",
    "description": "Potente viento que barre el reflejo o la pantalla de luz creada por el objetivo. También puede reducir su Evasión."
  },
  "destinybond": {
    "num": 194,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Mismo Destino",
    "pp": 5,
    "priority": 0,
    "flags": {
      "bypasssub": 1,
      "noassist": 1,
      "failcopycat": 1
    },
    "volatileStatus": "destinybond",
    "condition": {
      "noCopy": true,
      "onBeforeMovePriority": -1
    },
    "target": "self",
    "type": "Ghost",
    "zMove": {
      "effect": "redirect"
    },
    "contestType": "Clever",
    "id": "destinybond",
    "description": "Si el usuario se debilita por un ataque rival antes de usar otro movimiento, el Pokémon rival se debilitará también. Puede fallar si se usa repetidamente."
  },
  "detect": {
    "num": 197,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Detección",
    "pp": 5,
    "priority": 4,
    "flags": {
      "noassist": 1,
      "failcopycat": 1
    },
    "stallingMove": true,
    "volatileStatus": "protect",
    "target": "self",
    "type": "Fighting",
    "zMove": {
      "boost": {
        "evasion": 1
      }
    },
    "contestType": "Cool",
    "id": "detect",
    "description": "Frena todos los ataques, pero puede fallar si se usa repetidamente."
  },
  "devastatingdrake": {
    "num": 652,
    "accuracy": true,
    "basePower": 1,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Dracoaliento Devastador",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "dragoniumz",
    "target": "normal",
    "type": "Dragon",
    "contestType": "Cool",
    "id": "devastatingdrake",
    "description": "Ataque físico de tipo Dragon, potencia base 1."
  },
  "diamondstorm": {
    "num": 591,
    "accuracy": 95,
    "basePower": 100,
    "category": "Physical",
    "name": "Tormenta de Diamantes",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "self": {
      "chance": 50,
      "boosts": {
        "def": 2
      }
    },
    "secondary": {},
    "target": "allAdjacentFoes",
    "type": "Rock",
    "contestType": "Beautiful",
    "id": "diamondstorm",
    "description": "Desata un devastador vendaval de diamantes para dañar a los oponentes. Puede aumentar mucho la Defensa del usuario."
  },
  "dig": {
    "num": 91,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Excavar",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "charge": 1,
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failinstruct": 1
    },
    "condition": {
      "duration": 2
    },
    "target": "normal",
    "type": "Ground",
    "contestType": "Tough",
    "id": "dig",
    "description": "El usuario cava durante el primer turno y ataca en el segundo."
  },
  "direclaw": {
    "num": 827,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Garra Nociva",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 50
    },
    "target": "normal",
    "type": "Poison",
    "id": "direclaw",
    "description": "Ataque físico de tipo Poison, potencia base 80."
  },
  "disable": {
    "num": 50,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Anulación",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "volatileStatus": "disable",
    "condition": {
      "duration": 5,
      "noCopy": true,
      "onResidualOrder": 17,
      "onBeforeMovePriority": 7
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Clever",
    "id": "disable",
    "description": "Desactiva el último movimiento del objetivo durante cuatro turnos."
  },
  "disarmingvoice": {
    "num": 574,
    "accuracy": true,
    "basePower": 40,
    "category": "Special",
    "name": "Voz Cautivadora",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "target": "allAdjacentFoes",
    "type": "Fairy",
    "contestType": "Cute",
    "id": "disarmingvoice",
    "description": "Obnubila a los oponentes con su fascinante voz y les provoca daños emocionales. Siempre acierta al objetivo."
  },
  "discharge": {
    "num": 435,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Chispazo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "status": "par"
    },
    "target": "allAdjacent",
    "type": "Electric",
    "contestType": "Beautiful",
    "id": "discharge",
    "description": "Una deslumbradora onda eléctrica afecta a los Pokémon que hay combatiendo alrededor. Puede paralizar."
  },
  "dive": {
    "num": 291,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Buceo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "charge": 1,
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "allyanim": 1,
      "metronome": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failinstruct": 1
    },
    "condition": {
      "duration": 2
    },
    "target": "normal",
    "type": "Water",
    "contestType": "Beautiful",
    "id": "dive",
    "description": "El usuario se sumerge en el primer turno y ataca en el segundo."
  },
  "dizzypunch": {
    "num": 146,
    "accuracy": 100,
    "basePower": 70,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Puño Mareo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 20,
      "volatileStatus": "confusion"
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cute",
    "id": "dizzypunch",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "doodle": {
    "num": 867,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Decalcomanía",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "target": "adjacentFoe",
    "type": "Normal",
    "id": "doodle",
    "description": "Movimiento de estado de tipo Normal."
  },
  "doomdesire": {
    "num": 353,
    "accuracy": 100,
    "basePower": 140,
    "category": "Special",
    "name": "Deseo Oculto",
    "pp": 5,
    "priority": 0,
    "flags": {
      "metronome": 1,
      "futuremove": 1
    },
    "target": "normal",
    "type": "Steel",
    "contestType": "Beautiful",
    "id": "doomdesire",
    "description": "Concentra un haz de luz y ataca dos turnos después."
  },
  "doubleedge": {
    "num": 38,
    "accuracy": 100,
    "basePower": 120,
    "category": "Physical",
    "name": "Doble Filo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "recoil": [
      33,
      100
    ],
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "doubleedge",
    "description": "Ataque arriesgado que también hiere al agresor."
  },
  "doublehit": {
    "num": 458,
    "accuracy": 90,
    "basePower": 35,
    "category": "Physical",
    "name": "Doble Golpe",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": 2,
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "basePower": 140
    },
    "maxMove": {
      "basePower": 120
    },
    "contestType": "Cool",
    "id": "doublehit",
    "description": "Golpea al objetivo dos veces seguidas con la cola u otras partes de su cuerpo."
  },
  "doubleironbash": {
    "num": 742,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Ferropuño Doble",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1
    },
    "multihit": 2,
    "secondary": {
      "chance": 30,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Steel",
    "zMove": {
      "basePower": 180
    },
    "maxMove": {
      "basePower": 140
    },
    "contestType": "Clever",
    "id": "doubleironbash",
    "description": "Usando la tuerca del pecho como eje, gira sobre sí mismo y golpea con los brazos dos veces seguidas. Puede amedrentar al rival."
  },
  "doublekick": {
    "num": 24,
    "accuracy": 100,
    "basePower": 30,
    "category": "Physical",
    "name": "Doble Patada",
    "pp": 30,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": 2,
    "target": "normal",
    "type": "Fighting",
    "maxMove": {
      "basePower": 80
    },
    "contestType": "Cool",
    "id": "doublekick",
    "description": "Una patada doble. Golpea dos veces."
  },
  "doubleshock": {
    "num": 892,
    "accuracy": 100,
    "basePower": 120,
    "category": "Physical",
    "name": "Electropalmas",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1
    },
    "self": {},
    "target": "normal",
    "type": "Electric",
    "contestType": "Clever",
    "id": "doubleshock",
    "description": "Ataque físico de tipo Electric, potencia base 120."
  },
  "doubleslap": {
    "num": 3,
    "accuracy": 85,
    "basePower": 15,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Doble Bofetón",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": [
      2,
      5
    ],
    "target": "normal",
    "type": "Normal",
    "contestType": "Cute",
    "id": "doubleslap",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "doubleteam": {
    "num": 104,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Doble Equipo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "evasion": 1
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Cool",
    "id": "doubleteam",
    "description": "Crea copias de sí mismo para mejorar la Evasión."
  },
  "dracometeor": {
    "num": 434,
    "accuracy": 90,
    "basePower": 130,
    "category": "Special",
    "name": "Cometa Draco",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "self": {
      "boosts": {
        "spa": -2
      }
    },
    "target": "normal",
    "type": "Dragon",
    "contestType": "Beautiful",
    "id": "dracometeor",
    "description": "Hace que grandes cometas caigan del cielo sobre el objetivo. Baja mucho el Ataque Especial del que lo usa."
  },
  "dragonascent": {
    "num": 620,
    "accuracy": 100,
    "basePower": 120,
    "category": "Physical",
    "name": "Ascenso Draco",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "distance": 1
    },
    "self": {
      "boosts": {
        "def": -1,
        "spd": -1
      }
    },
    "target": "any",
    "type": "Flying",
    "contestType": "Beautiful",
    "id": "dragonascent",
    "description": "El usuario se precipita desde el cielo a una velocidad de vértigo para atacar al objetivo, pero hace que bajen la Defensa y la Defensa Especial del usuario."
  },
  "dragonbreath": {
    "num": 225,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "name": "Dragoaliento",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "status": "par"
    },
    "target": "normal",
    "type": "Dragon",
    "contestType": "Cool",
    "id": "dragonbreath",
    "description": "Poderosa ráfaga de aliento que golpea al objetivo y puede paralizarlo."
  },
  "dragoncheer": {
    "num": 913,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Bramido Dragón",
    "pp": 15,
    "priority": 0,
    "flags": {
      "bypasssub": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "volatileStatus": "dragoncheer",
    "condition": {},
    "target": "adjacentAlly",
    "type": "Dragon",
    "id": "dragoncheer",
    "description": "Movimiento de estado de tipo Dragon. Puede causar dragoncheer."
  },
  "dragonclaw": {
    "num": 337,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Garra Dragón",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Dragon",
    "contestType": "Cool",
    "id": "dragonclaw",
    "description": "Ataque físico de tipo Dragon, potencia base 80."
  },
  "dragondance": {
    "num": 349,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Danza Dragón",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "dance": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": 1,
      "spe": 1
    },
    "target": "self",
    "type": "Dragon",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Cool",
    "id": "dragondance",
    "description": "Danza mística que sube el Ataque y la Velocidad."
  },
  "dragondarts": {
    "num": 751,
    "accuracy": 100,
    "basePower": 50,
    "category": "Physical",
    "name": "Dracoflechas",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "noparentalbond": 1
    },
    "multihit": 2,
    "smartTarget": true,
    "target": "normal",
    "type": "Dragon",
    "maxMove": {
      "basePower": 130
    },
    "id": "dragondarts",
    "description": "El usuario ataca propulsando a ambos Dreepy. En caso de haber dos adversarios, cada Dreepy golpea a su propio objetivo por separado."
  },
  "dragonenergy": {
    "num": 820,
    "accuracy": 100,
    "basePower": 150,
    "category": "Special",
    "name": "Dracoenergía",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "allAdjacentFoes",
    "type": "Dragon",
    "id": "dragonenergy",
    "description": "El usuario convierte su fuerza vital en una energía con la que ataca al objetivo. Cuantos menos PS tenga el usuario, menor será la potencia del movimiento.",
    "dynamicBasePower": true
  },
  "dragonhammer": {
    "num": 692,
    "accuracy": 100,
    "basePower": 90,
    "category": "Physical",
    "name": "Martillo Dragón",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Dragon",
    "contestType": "Tough",
    "id": "dragonhammer",
    "description": "Ataque físico de tipo Dragon, potencia base 90."
  },
  "dragonpulse": {
    "num": 406,
    "accuracy": 100,
    "basePower": 85,
    "category": "Special",
    "name": "Pulso Dragón",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "distance": 1,
      "metronome": 1,
      "pulse": 1
    },
    "target": "any",
    "type": "Dragon",
    "contestType": "Beautiful",
    "id": "dragonpulse",
    "description": "Ataque especial de tipo Dragon, potencia base 85."
  },
  "dragonrage": {
    "num": 82,
    "accuracy": 100,
    "basePower": 0,
    "damage": 40,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Furia Dragón",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Dragon",
    "contestType": "Cool",
    "id": "dragonrage",
    "description": "Ataque especial de tipo Dragon, sin potencia directa."
  },
  "dragonrush": {
    "num": 407,
    "accuracy": 75,
    "basePower": 100,
    "category": "Physical",
    "name": "Carga Dragón",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "minimize": 1
    },
    "secondary": {
      "chance": 20,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Dragon",
    "contestType": "Tough",
    "id": "dragonrush",
    "description": "Ataca de forma brutal mientras intimida al objetivo. También puede amedrentarlo."
  },
  "dragontail": {
    "num": 525,
    "accuracy": 90,
    "basePower": 60,
    "category": "Physical",
    "name": "Cola Dragón",
    "pp": 10,
    "priority": -6,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "noassist": 1,
      "failcopycat": 1
    },
    "forceSwitch": true,
    "target": "normal",
    "type": "Dragon",
    "contestType": "Tough",
    "id": "dragontail",
    "description": "Ataca al objetivo y lo obliga a cambiarse por otro Pokémon. Si es uno salvaje, acaba el combate."
  },
  "drainingkiss": {
    "num": 577,
    "accuracy": 100,
    "basePower": 50,
    "category": "Special",
    "name": "Beso Drenaje",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "heal": 1,
      "metronome": 1
    },
    "drain": [
      3,
      4
    ],
    "target": "normal",
    "type": "Fairy",
    "contestType": "Cute",
    "id": "drainingkiss",
    "description": "El usuario absorbe PS del objetivo con un beso y restaura su propia energía en una cantidad igual o superior a la mitad del daño infligido."
  },
  "drainpunch": {
    "num": 409,
    "accuracy": 100,
    "basePower": 75,
    "category": "Physical",
    "name": "Puño Drenaje",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1,
      "heal": 1,
      "metronome": 1
    },
    "drain": [
      1,
      2
    ],
    "target": "normal",
    "type": "Fighting",
    "contestType": "Tough",
    "id": "drainpunch",
    "description": "Un golpe que drena energía. El Pokémon recupera la mitad de los PS arrebatados al objetivo."
  },
  "dreameater": {
    "num": 138,
    "accuracy": 100,
    "basePower": 100,
    "category": "Special",
    "name": "Comesueños",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "heal": 1,
      "metronome": 1
    },
    "drain": [
      1,
      2
    ],
    "target": "normal",
    "type": "Psychic",
    "contestType": "Clever",
    "id": "dreameater",
    "description": "Restaura al usuario la mitad del daño causado a un objetivo dormido."
  },
  "drillpeck": {
    "num": 65,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Pico Taladro",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "distance": 1,
      "metronome": 1
    },
    "target": "any",
    "type": "Flying",
    "contestType": "Cool",
    "id": "drillpeck",
    "description": "Ataque físico de tipo Flying, potencia base 80."
  },
  "drillrun": {
    "num": 529,
    "accuracy": 95,
    "basePower": 80,
    "category": "Physical",
    "name": "Taladradora",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "critRatio": 2,
    "target": "normal",
    "type": "Ground",
    "contestType": "Tough",
    "id": "drillrun",
    "description": "El usuario golpea usando su cuerpo como un taladro. Suele ser crítico."
  },
  "drumbeating": {
    "num": 778,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Batería Asalto",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "spe": -1
      }
    },
    "target": "normal",
    "type": "Grass",
    "id": "drumbeating",
    "description": "El usuario controla un tocón mediante la percusión y al atacar reduce la Velocidad del objetivo."
  },
  "dualchop": {
    "num": 530,
    "accuracy": 90,
    "basePower": 40,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Golpe Bis",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": 2,
    "target": "normal",
    "type": "Dragon",
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Tough",
    "id": "dualchop",
    "description": "Golpea dos veces seguidas con las partes más recias de su cuerpo."
  },
  "dualwingbeat": {
    "num": 814,
    "accuracy": 90,
    "basePower": 40,
    "category": "Physical",
    "name": "Ala Bis",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": 2,
    "target": "normal",
    "type": "Flying",
    "maxMove": {
      "basePower": 130
    },
    "id": "dualwingbeat",
    "description": "Ataca al adversario golpeándolo dos veces con las alas."
  },
  "dynamaxcannon": {
    "num": 744,
    "accuracy": 100,
    "basePower": 100,
    "category": "Special",
    "name": "Cañón Dinamax",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "failencore": 1,
      "nosleeptalk": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1,
      "noparentalbond": 1
    },
    "target": "normal",
    "type": "Dragon",
    "id": "dynamaxcannon",
    "description": "Ataque especial de tipo Dragon, potencia base 100."
  },
  "dynamicpunch": {
    "num": 223,
    "accuracy": 50,
    "basePower": 100,
    "category": "Physical",
    "name": "Puño Dinámico",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "volatileStatus": "confusion"
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Cool",
    "id": "dynamicpunch",
    "description": "Puñetazo con toda la fuerza concentrada. Causa confusión si atina."
  },
  "earthpower": {
    "num": 414,
    "accuracy": 100,
    "basePower": 90,
    "category": "Special",
    "name": "Tierra Viva",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "boosts": {
        "spd": -1
      }
    },
    "target": "normal",
    "type": "Ground",
    "contestType": "Beautiful",
    "id": "earthpower",
    "description": "La tierra a los pies del objetivo erupciona violentamente. Puede disminuir la Defensa Especial del objetivo."
  },
  "earthquake": {
    "num": 89,
    "accuracy": 100,
    "basePower": 100,
    "category": "Physical",
    "name": "Terremoto",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1
    },
    "target": "allAdjacent",
    "type": "Ground",
    "contestType": "Tough",
    "id": "earthquake",
    "description": "Un terremoto que afecta a todos los Pokémon que estén a su alrededor."
  },
  "echoedvoice": {
    "num": 497,
    "accuracy": 100,
    "basePower": 40,
    "category": "Special",
    "name": "Eco Voz",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "condition": {
      "duration": 2
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Beautiful",
    "id": "echoedvoice",
    "description": "Un susurro que aumenta de potencia conforme el usuario y otros Pokémon lo van utilizando.",
    "dynamicBasePower": true
  },
  "eerieimpulse": {
    "num": 598,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Onda Anómala",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "boosts": {
      "spa": -2
    },
    "target": "normal",
    "type": "Electric",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Clever",
    "id": "eerieimpulse",
    "description": "El usuario irradia unas raras ondas que, al alcanzar a un oponente, hacen que disminuya mucho su Ataque Especial."
  },
  "eeriespell": {
    "num": 826,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Conjuro Funesto",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100
    },
    "target": "normal",
    "type": "Psychic",
    "id": "eeriespell",
    "description": "El usuario ataca con un poder psíquico de inmensa potencia y elimina 3 PP del último movimiento que haya usado el objetivo."
  },
  "eggbomb": {
    "num": 121,
    "accuracy": 75,
    "basePower": 100,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Bomba Huevo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cute",
    "id": "eggbomb",
    "description": "Ataque físico de tipo Normal, potencia base 100. Precisión: 75%."
  },
  "electricterrain": {
    "num": 604,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Campo Eléctrico",
    "pp": 10,
    "priority": 0,
    "flags": {
      "nonsky": 1,
      "metronome": 1
    },
    "terrain": "electricterrain",
    "condition": {
      "effectType": "Terrain",
      "duration": 5,
      "onBasePowerPriority": 6,
      "onFieldResidualOrder": 27,
      "onFieldResidualSubOrder": 7
    },
    "target": "all",
    "type": "Electric",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Clever",
    "id": "electricterrain",
    "description": "Durante cinco turnos, se potencian los movimientos de tipo Eléctrico y los Pokémon que están en contacto con el suelo no pueden quedarse dormidos."
  },
  "electrify": {
    "num": 582,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Electrificación",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "volatileStatus": "electrify",
    "condition": {
      "duration": 1,
      "onModifyTypePriority": -2
    },
    "target": "normal",
    "type": "Electric",
    "zMove": {
      "boost": {
        "spa": 1
      }
    },
    "contestType": "Clever",
    "id": "electrify",
    "description": "Si el objetivo queda electrificado antes de usar un movimiento, este será de tipo Eléctrico."
  },
  "electroball": {
    "num": 486,
    "accuracy": 100,
    "basePower": 0,
    "category": "Special",
    "name": "Bola Voltio",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "target": "normal",
    "type": "Electric",
    "zMove": {
      "basePower": 160
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Cool",
    "id": "electroball",
    "description": "Lanza una bola eléctrica. Cuanto mayor sea la Velocidad del usuario en comparación con la del objetivo, mayor será el daño causado.",
    "dynamicBasePower": true
  },
  "electrodrift": {
    "num": 879,
    "accuracy": 100,
    "basePower": 100,
    "category": "Special",
    "name": "Electroderrape",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Electric",
    "contestType": "Cool",
    "id": "electrodrift",
    "description": "Ataque especial de tipo Electric, potencia base 100."
  },
  "electroshot": {
    "num": 905,
    "accuracy": 100,
    "basePower": 130,
    "category": "Special",
    "name": "Electrorrayo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "charge": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "hasSheerForceBoost": true,
    "target": "normal",
    "type": "Electric",
    "id": "electroshot",
    "description": "Ataque especial de tipo Electric, potencia base 130."
  },
  "electroweb": {
    "num": 527,
    "accuracy": 95,
    "basePower": 55,
    "category": "Special",
    "name": "Electrotela",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "spe": -1
      }
    },
    "target": "allAdjacentFoes",
    "type": "Electric",
    "contestType": "Beautiful",
    "id": "electroweb",
    "description": "Atrapa y ataca a los objetivos con una telaraña eléctrica. También reduce su Velocidad."
  },
  "embargo": {
    "num": 373,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Embargo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "volatileStatus": "embargo",
    "condition": {
      "duration": 5,
      "onResidualOrder": 21
    },
    "target": "normal",
    "type": "Dark",
    "zMove": {
      "boost": {
        "spa": 1
      }
    },
    "contestType": "Clever",
    "id": "embargo",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "ember": {
    "num": 52,
    "accuracy": 100,
    "basePower": 40,
    "category": "Special",
    "name": "Ascuas",
    "pp": 25,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "status": "brn"
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Cute",
    "id": "ember",
    "description": "Ataca con llamas pequeñas que pueden causar quemaduras."
  },
  "encore": {
    "num": 227,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Otra Vez",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "bypasssub": 1,
      "metronome": 1,
      "failencore": 1
    },
    "volatileStatus": "encore",
    "condition": {
      "duration": 3,
      "noCopy": true,
      "onResidualOrder": 16
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Cute",
    "id": "encore",
    "description": "El objetivo repite su último movimiento durante tres turnos."
  },
  "endeavor": {
    "num": 283,
    "accuracy": 100,
    "basePower": 0,
    "category": "Physical",
    "name": "Esfuerzo",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "noparentalbond": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "basePower": 160
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Tough",
    "id": "endeavor",
    "description": "Reduce los PS del objetivo para que igualen a los del atacante."
  },
  "endure": {
    "num": 203,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Aguante",
    "pp": 10,
    "priority": 4,
    "flags": {
      "noassist": 1,
      "failcopycat": 1
    },
    "stallingMove": true,
    "volatileStatus": "endure",
    "condition": {
      "duration": 1,
      "onDamagePriority": -10
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Tough",
    "id": "endure",
    "description": "Resiste cualquier ataque y deja al menos 1 PS. Puede fallar si se usa repetidamente."
  },
  "energyball": {
    "num": 412,
    "accuracy": 100,
    "basePower": 90,
    "category": "Special",
    "name": "Energibola",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "secondary": {
      "chance": 10,
      "boosts": {
        "spd": -1
      }
    },
    "target": "normal",
    "type": "Grass",
    "contestType": "Beautiful",
    "id": "energyball",
    "description": "Aúna fuerzas de la naturaleza y libera su ataque. Puede disminuir la Defensa Especial del objetivo."
  },
  "entrainment": {
    "num": 494,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Danza Amiga",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Cute",
    "id": "entrainment",
    "description": "Una extraña danza que hace que el usuario y el objetivo tengan la misma habilidad."
  },
  "eruption": {
    "num": 284,
    "accuracy": 100,
    "basePower": 150,
    "category": "Special",
    "name": "Estallido",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "allAdjacentFoes",
    "type": "Fire",
    "contestType": "Beautiful",
    "id": "eruption",
    "description": "Furia explosiva. Cuanto menor sea el número de PS del usuario, menos daño hará el ataque.",
    "dynamicBasePower": true
  },
  "esperwing": {
    "num": 840,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Ala Aural",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "critRatio": 2,
    "secondary": {
      "chance": 100,
      "self": {
        "boosts": {
          "spe": 1
        }
      }
    },
    "target": "normal",
    "type": "Psychic",
    "id": "esperwing",
    "description": "Ataque especial de tipo Psychic, potencia base 80. Tiene más probabilidad de asestar un golpe crítico."
  },
  "eternabeam": {
    "num": 795,
    "accuracy": 90,
    "basePower": 160,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Rayo Infinito",
    "pp": 5,
    "priority": 0,
    "flags": {
      "recharge": 1,
      "protect": 1,
      "mirror": 1
    },
    "self": {
      "volatileStatus": "mustrecharge"
    },
    "target": "normal",
    "type": "Dragon",
    "id": "eternabeam",
    "description": "Este es el mayor ataque de Eternatus una vez adquirida su forma original. No puede moverse en el turno siguiente."
  },
  "expandingforce": {
    "num": 797,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Vasta Fuerza",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Psychic",
    "id": "expandingforce",
    "description": "El usuario ataca al objetivo con sus poderes psíquicos. Cuando se usa en conjunción con un campo psíquico, aumenta su potencia e inflige daño a todos los rivales."
  },
  "explosion": {
    "num": 153,
    "accuracy": 100,
    "basePower": 250,
    "category": "Physical",
    "name": "Explosión",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "noparentalbond": 1
    },
    "selfdestruct": "always",
    "target": "allAdjacent",
    "type": "Normal",
    "contestType": "Beautiful",
    "id": "explosion",
    "description": "El atacante causa una grandísima explosión y hiere a todos a su alrededor. El usuario se debilita de inmediato."
  },
  "extrasensory": {
    "num": 326,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Paranormal",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Psychic",
    "contestType": "Cool",
    "id": "extrasensory",
    "description": "Emite una energía muy extraña que puede amedrentar al objetivo."
  },
  "extremeevoboost": {
    "num": 702,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Novena Potencia",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "eeviumz",
    "boosts": {
      "atk": 2,
      "def": 2,
      "spa": 2,
      "spd": 2,
      "spe": 2
    },
    "target": "self",
    "type": "Normal",
    "contestType": "Beautiful",
    "id": "extremeevoboost",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "extremespeed": {
    "num": 245,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Velocidad Extrema",
    "pp": 5,
    "priority": 2,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cool",
    "id": "extremespeed",
    "description": "Ataque de una velocidad extrema. Este movimiento tiene prioridad alta."
  },
  "facade": {
    "num": 263,
    "accuracy": 100,
    "basePower": 70,
    "category": "Physical",
    "name": "Fachada",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cute",
    "id": "facade",
    "description": "Si el usuario está quemado, paralizado o envenenado, ataca con el doble de potencia."
  },
  "fairylock": {
    "num": 587,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Cerrojo Feérico",
    "pp": 10,
    "priority": 0,
    "flags": {
      "mirror": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "pseudoWeather": "fairylock",
    "condition": {
      "duration": 2
    },
    "target": "all",
    "type": "Fairy",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Clever",
    "id": "fairylock",
    "description": "Consigue que ningún Pokémon pueda huir en el siguiente turno echando un cerrojo."
  },
  "fairywind": {
    "num": 584,
    "accuracy": 100,
    "basePower": 40,
    "category": "Special",
    "name": "Viento Feérico",
    "pp": 30,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "wind": 1
    },
    "target": "normal",
    "type": "Fairy",
    "contestType": "Beautiful",
    "id": "fairywind",
    "description": "Ataque especial de tipo Fairy, potencia base 40."
  },
  "fakeout": {
    "num": 252,
    "accuracy": 100,
    "basePower": 40,
    "category": "Physical",
    "name": "Sorpresa",
    "pp": 10,
    "priority": 3,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cute",
    "id": "fakeout",
    "description": "Amedrenta al objetivo con este movimiento de prioridad alta. Solo sirve en el primer turno."
  },
  "faketears": {
    "num": 313,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Llanto Falso",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "boosts": {
      "spd": -2
    },
    "target": "normal",
    "type": "Dark",
    "zMove": {
      "boost": {
        "spa": 1
      }
    },
    "contestType": "Cute",
    "id": "faketears",
    "description": "Lágrimas de cocodrilo que bajan mucho la Defensa Especial del objetivo."
  },
  "falsesurrender": {
    "num": 793,
    "accuracy": true,
    "basePower": 80,
    "category": "Physical",
    "name": "Irreverencia",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Dark",
    "id": "falsesurrender",
    "description": "Ataque físico de tipo Dark, potencia base 80."
  },
  "falseswipe": {
    "num": 206,
    "accuracy": 100,
    "basePower": 40,
    "category": "Physical",
    "name": "Falso Tortazo",
    "pp": 40,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "onDamagePriority": -20,
    "target": "normal",
    "type": "Normal",
    "contestType": "Cool",
    "id": "falseswipe",
    "description": "Ataque moderado que no debilita al objetivo y le deja al menos 1 PS."
  },
  "featherdance": {
    "num": 297,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Danza Pluma",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "dance": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": -2
    },
    "target": "normal",
    "type": "Flying",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Beautiful",
    "id": "featherdance",
    "description": "Envuelve al objetivo con un manto de plumas para reducir mucho su Ataque."
  },
  "feint": {
    "num": 364,
    "accuracy": 100,
    "basePower": 30,
    "category": "Physical",
    "name": "Amago",
    "pp": 10,
    "priority": 2,
    "flags": {
      "mirror": 1,
      "noassist": 1,
      "failcopycat": 1
    },
    "breaksProtect": true,
    "target": "normal",
    "type": "Normal",
    "contestType": "Clever",
    "id": "feint",
    "description": "Permite golpear a objetivos que han utilizado movimientos como Protección o Detección y anula sus efectos."
  },
  "feintattack": {
    "num": 185,
    "accuracy": true,
    "basePower": 60,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Finta",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Dark",
    "contestType": "Clever",
    "id": "feintattack",
    "description": "Ataque físico de tipo Dark, potencia base 60."
  },
  "fellstinger": {
    "num": 565,
    "accuracy": 100,
    "basePower": 50,
    "category": "Physical",
    "name": "Aguijón Letal",
    "pp": 25,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Bug",
    "contestType": "Cool",
    "id": "fellstinger",
    "description": "Si se derrota al objetivo utilizando este movimiento, aumenta muchísimo el Ataque del usuario."
  },
  "ficklebeam": {
    "num": 907,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Láser Veleidoso",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Dragon",
    "id": "ficklebeam",
    "description": "Ataque especial de tipo Dragon, potencia base 80."
  },
  "fierydance": {
    "num": 552,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Danza Llama",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "dance": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 50,
      "self": {
        "boosts": {
          "spa": 1
        }
      }
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Beautiful",
    "id": "fierydance",
    "description": "Envuelve en llamas y daña al objetivo. Puede aumentar el Ataque Especial de quien lo usa."
  },
  "fierywrath": {
    "num": 822,
    "accuracy": 100,
    "basePower": 90,
    "category": "Special",
    "name": "Furia Candente",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
      "chance": 20,
      "volatileStatus": "flinch"
    },
    "target": "allAdjacentFoes",
    "type": "Dark",
    "id": "fierywrath",
    "description": "El usuario convierte su ira en un aura flamígera para lanzar su ataque. Puede amedrentar al objetivo."
  },
  "filletaway": {
    "num": 868,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Deslome",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1
    },
    "boosts": {
      "atk": 2,
      "spa": 2,
      "spe": 2
    },
    "target": "self",
    "type": "Normal",
    "id": "filletaway",
    "description": "Movimiento de estado de tipo Normal. Modifica estadísticas: Ataque +2, Ataque especial +2, Velocidad +2."
  },
  "finalgambit": {
    "num": 515,
    "accuracy": 100,
    "basePower": 0,
    "selfdestruct": "ifHit",
    "category": "Special",
    "name": "Sacrificio",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "metronome": 1,
      "noparentalbond": 1
    },
    "target": "normal",
    "type": "Fighting",
    "zMove": {
      "basePower": 180
    },
    "contestType": "Tough",
    "id": "finalgambit",
    "description": "El usuario se sacrifica causándole un daño al objetivo equivalente a sus propios PS perdidos."
  },
  "fireblast": {
    "num": 126,
    "accuracy": 85,
    "basePower": 110,
    "category": "Special",
    "name": "Llamarada",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "status": "brn"
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Beautiful",
    "id": "fireblast",
    "description": "Llama intensa que chamusca y puede causar quemaduras."
  },
  "firefang": {
    "num": 424,
    "accuracy": 95,
    "basePower": 65,
    "category": "Physical",
    "name": "Colmillo Ígneo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bite": 1
    },
    "secondaries": [
      {
        "chance": 10,
        "status": "brn"
      },
      {
        "chance": 10,
        "volatileStatus": "flinch"
      }
    ],
    "target": "normal",
    "type": "Fire",
    "contestType": "Cool",
    "id": "firefang",
    "description": "El usuario muerde al objetivo con colmillos en llamas y puede hacer que se amedrente o sufra quemaduras."
  },
  "firelash": {
    "num": 680,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Látigo Ígneo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "def": -1
      }
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Cute",
    "id": "firelash",
    "description": "Golpea al oponente con un látigo incandescente y reduce su Defensa."
  },
  "firepledge": {
    "num": 519,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Voto Fuego",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1,
      "pledgecombo": 1
    },
    "condition": {
      "duration": 4,
      "onResidualOrder": 5,
      "onResidualSubOrder": 1,
      "onSideResidualOrder": 26,
      "onSideResidualSubOrder": 8
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Beautiful",
    "id": "firepledge",
    "description": "Ataca con columnas de fuego. Combinado con Voto Planta, crea un mar de llamas y aumenta su potencia.",
    "dynamicBasePower": true
  },
  "firepunch": {
    "num": 7,
    "accuracy": 100,
    "basePower": 75,
    "category": "Physical",
    "name": "Puño Fuego",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "status": "brn"
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Tough",
    "id": "firepunch",
    "description": "Puñetazo ardiente que puede causar quemaduras."
  },
  "firespin": {
    "num": 83,
    "accuracy": 85,
    "basePower": 35,
    "category": "Special",
    "name": "Giro Fuego",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "volatileStatus": "partiallytrapped",
    "target": "normal",
    "type": "Fire",
    "contestType": "Beautiful",
    "id": "firespin",
    "description": "Un aro de fuego que atrapa al objetivo de cuatro a cinco turnos."
  },
  "firstimpression": {
    "num": 660,
    "accuracy": 100,
    "basePower": 90,
    "category": "Physical",
    "name": "Escaramuza",
    "pp": 10,
    "priority": 2,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Bug",
    "contestType": "Cute",
    "id": "firstimpression",
    "description": "Movimiento de gran potencia que solo puede usarse en el turno en que el usuario sale al combate."
  },
  "fishiousrend": {
    "num": 755,
    "accuracy": 100,
    "basePower": 85,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Branquibocado",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bite": 1
    },
    "target": "normal",
    "type": "Water",
    "id": "fishiousrend",
    "description": "El usuario agarra al objetivo con sus duras branquias. En caso de atacar antes que este último, la potencia del movimiento se duplica.",
    "dynamicBasePower": true
  },
  "fissure": {
    "num": 90,
    "accuracy": 30,
    "basePower": 0,
    "category": "Physical",
    "name": "Fisura",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1
    },
    "ohko": true,
    "target": "normal",
    "type": "Ground",
    "zMove": {
      "basePower": 180
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Tough",
    "id": "fissure",
    "description": "Abre una grieta en el suelo y mete al objetivo en ella. Fulmina en un golpe."
  },
  "flail": {
    "num": 175,
    "accuracy": 100,
    "basePower": 0,
    "category": "Physical",
    "name": "Azote",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "basePower": 160
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Cute",
    "id": "flail",
    "description": "Ataque frenético. Cuantos menos PS tenga el usuario, más daño producirá.",
    "dynamicBasePower": true
  },
  "flameburst": {
    "num": 481,
    "accuracy": 100,
    "basePower": 70,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Pirotecnia",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Beautiful",
    "id": "flameburst",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "flamecharge": {
    "num": 488,
    "accuracy": 100,
    "basePower": 50,
    "category": "Physical",
    "name": "Nitrocarga",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "self": {
        "boosts": {
          "spe": 1
        }
      }
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Cool",
    "id": "flamecharge",
    "description": "Llamas que golpean al objetivo y aumentan la Velocidad del atacante."
  },
  "flamethrower": {
    "num": 53,
    "accuracy": 100,
    "basePower": 90,
    "category": "Special",
    "name": "Lanzallamas",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "status": "brn"
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Beautiful",
    "id": "flamethrower",
    "description": "Ataca con una gran ráfaga de fuego que puede causar quemaduras."
  },
  "flamewheel": {
    "num": 172,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "name": "Rueda Fuego",
    "pp": 25,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "defrost": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "status": "brn"
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Beautiful",
    "id": "flamewheel",
    "description": "Ataca envuelto en fuego. Puede causar quemaduras."
  },
  "flareblitz": {
    "num": 394,
    "accuracy": 100,
    "basePower": 120,
    "category": "Physical",
    "name": "Envite Ígneo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "defrost": 1,
      "metronome": 1
    },
    "recoil": [
      33,
      100
    ],
    "secondary": {
      "chance": 10,
      "status": "brn"
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Cool",
    "id": "flareblitz",
    "description": "El Pokémon se cubre de llamas y carga contra el objetivo, aunque él también recibe daño. Puede quemar."
  },
  "flash": {
    "num": 148,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Destello",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "boosts": {
      "accuracy": -1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "evasion": 1
      }
    },
    "contestType": "Beautiful",
    "id": "flash",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "flashcannon": {
    "num": 430,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Cañón Resplandor",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "boosts": {
        "spd": -1
      }
    },
    "target": "normal",
    "type": "Steel",
    "contestType": "Beautiful",
    "id": "flashcannon",
    "description": "El usuario concentra toda la luz del cuerpo y la libera. Puede bajar la Defensa Especial del objetivo."
  },
  "flatter": {
    "num": 260,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Camelo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "volatileStatus": "confusion",
    "boosts": {
      "spa": 1
    },
    "target": "normal",
    "type": "Dark",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Clever",
    "id": "flatter",
    "description": "Halaga al objetivo y lo confunde, pero también sube su Ataque Especial."
  },
  "fleurcannon": {
    "num": 705,
    "accuracy": 90,
    "basePower": 130,
    "category": "Special",
    "name": "Cañón Floral",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "self": {
      "boosts": {
        "spa": -2
      }
    },
    "target": "normal",
    "type": "Fairy",
    "contestType": "Beautiful",
    "id": "fleurcannon",
    "description": "El usuario emite un potente rayo, pero su Ataque Especial se reduce mucho."
  },
  "fling": {
    "num": 374,
    "accuracy": 100,
    "basePower": 0,
    "category": "Physical",
    "name": "Lanzamiento",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1,
      "noparentalbond": 1
    },
    "condition": {},
    "target": "normal",
    "type": "Dark",
    "contestType": "Cute",
    "id": "fling",
    "description": "El usuario lanza contra el objetivo el objeto que lleva. La fuerza del ataque y su efecto varían según el objeto."
  },
  "flipturn": {
    "num": 812,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "name": "Viraje",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "selfSwitch": true,
    "target": "normal",
    "type": "Water",
    "id": "flipturn",
    "description": "Tras atacar, el usuario da paso a toda prisa a otro Pokémon del equipo."
  },
  "floatyfall": {
    "num": 731,
    "accuracy": 95,
    "basePower": 90,
    "category": "Physical",
    "isNonstandard": "LGPE",
    "name": "Pikapicado",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "gravity": 1
    },
    "secondary": {
      "chance": 30,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Flying",
    "contestType": "Cool",
    "id": "floatyfall",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "floralhealing": {
    "num": 666,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Cura Floral",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "heal": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Fairy",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Beautiful",
    "id": "floralhealing",
    "description": "Restaura la mitad de los PS máximos del objetivo. Es más efectivo cuando se usa en conjunción con Campo de Hierba."
  },
  "flowershield": {
    "num": 579,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Defensa Floral",
    "pp": 10,
    "priority": 0,
    "flags": {
      "distance": 1,
      "metronome": 1
    },
    "target": "all",
    "type": "Fairy",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Beautiful",
    "id": "flowershield",
    "description": "Aumenta la Defensa de todos los Pokémon de tipo Planta que hay en el combate usando unos misteriosos poderes."
  },
  "flowertrick": {
    "num": 870,
    "accuracy": true,
    "basePower": 70,
    "category": "Physical",
    "name": "Truco Floral",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "willCrit": true,
    "target": "normal",
    "type": "Grass",
    "id": "flowertrick",
    "description": "Ataque físico de tipo Grass, potencia base 70. Siempre asesta un golpe crítico."
  },
  "fly": {
    "num": 19,
    "accuracy": 95,
    "basePower": 90,
    "category": "Physical",
    "name": "Vuelo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "charge": 1,
      "protect": 1,
      "mirror": 1,
      "gravity": 1,
      "distance": 1,
      "metronome": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failinstruct": 1
    },
    "condition": {
      "duration": 2
    },
    "target": "any",
    "type": "Flying",
    "contestType": "Clever",
    "id": "fly",
    "description": "El usuario vuela en el primer turno y ataca en el segundo."
  },
  "flyingpress": {
    "num": 560,
    "accuracy": 95,
    "basePower": 100,
    "category": "Physical",
    "name": "Plancha Voladora",
    "pp": 10,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "gravity": 1,
      "distance": 1,
      "nonsky": 1,
      "metronome": 1,
      "minimize": 1
    },
    "priority": 0,
    "target": "any",
    "type": "Fighting",
    "zMove": {
      "basePower": 170
    },
    "contestType": "Tough",
    "id": "flyingpress",
    "description": "El Pokémon que lo usa se lanza sobre su oponente. Este movimiento es de tipo Lucha y tipo Volador al mismo tiempo."
  },
  "focusblast": {
    "num": 411,
    "accuracy": 70,
    "basePower": 120,
    "category": "Special",
    "name": "Onda Certera",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "secondary": {
      "chance": 10,
      "boosts": {
        "spd": -1
      }
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Cool",
    "id": "focusblast",
    "description": "Agudiza la concentración mental y libera su poder. Puede disminuir la Defensa Especial del objetivo."
  },
  "focusenergy": {
    "num": 116,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Foco Energía",
    "pp": 30,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "volatileStatus": "focusenergy",
    "condition": {},
    "target": "self",
    "type": "Normal",
    "zMove": {
      "boost": {
        "accuracy": 1
      }
    },
    "contestType": "Cool",
    "id": "focusenergy",
    "description": "Concentra energía para aumentar las posibilidades de asestar un golpe crítico."
  },
  "focuspunch": {
    "num": 264,
    "accuracy": 100,
    "basePower": 150,
    "category": "Physical",
    "name": "Puño Certero",
    "pp": 20,
    "priority": -3,
    "flags": {
      "contact": 1,
      "protect": 1,
      "punch": 1,
      "failmefirst": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failinstruct": 1
    },
    "condition": {
      "duration": 1
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Tough",
    "id": "focuspunch",
    "description": "Se concentra para dar un puñetazo. Falla si se sufre un golpe antes de su uso."
  },
  "followme": {
    "num": 266,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Señuelo",
    "pp": 20,
    "priority": 2,
    "flags": {
      "noassist": 1,
      "failcopycat": 1
    },
    "volatileStatus": "followme",
    "condition": {
      "duration": 1,
      "onFoeRedirectTargetPriority": 1
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Cute",
    "id": "followme",
    "description": "Llama la atención para concentrar todos los ataques de todos los del equipo rival hacia sí mismo."
  },
  "forcepalm": {
    "num": 395,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "name": "Palmeo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "status": "par"
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Cool",
    "id": "forcepalm",
    "description": "Ataca al objetivo con una onda de choque y puede llegar a paralizarlo."
  },
  "foresight": {
    "num": 193,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Profecía",
    "pp": 40,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "volatileStatus": "foresight",
    "condition": {
      "noCopy": true
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "effect": "crit2"
    },
    "contestType": "Clever",
    "id": "foresight",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "forestscurse": {
    "num": 571,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Condena Silvana",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Grass",
    "zMove": {
      "boost": {
        "atk": 1,
        "def": 1,
        "spa": 1,
        "spd": 1,
        "spe": 1
      }
    },
    "contestType": "Clever",
    "id": "forestscurse",
    "description": "El objetivo es presa de la maldición del bosque, por lo que pasa a ser un Pokémon de tipo Planta, además de conservar sus tipos habituales."
  },
  "foulplay": {
    "num": 492,
    "accuracy": 100,
    "basePower": 95,
    "category": "Physical",
    "name": "Juego Sucio",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "overrideOffensivePokemon": "target",
    "target": "normal",
    "type": "Dark",
    "contestType": "Clever",
    "id": "foulplay",
    "description": "El usuario emplea la fuerza del objetivo para atacarlo. Cuanto mayor es el Ataque del objetivo, más daño provoca."
  },
  "freezedry": {
    "num": 573,
    "accuracy": 100,
    "basePower": 70,
    "category": "Special",
    "name": "Liofilización",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "status": "frz"
    },
    "target": "normal",
    "type": "Ice",
    "contestType": "Beautiful",
    "id": "freezedry",
    "description": "Enfría súbitamente al objetivo e incluso puede congelarlo. Es supereficaz contra Pokémon de tipo Agua."
  },
  "freezeshock": {
    "num": 553,
    "accuracy": 90,
    "basePower": 140,
    "category": "Physical",
    "name": "Rayo Gélido",
    "pp": 5,
    "priority": 0,
    "flags": {
      "charge": 1,
      "protect": 1,
      "mirror": 1,
      "nosleeptalk": 1,
      "failinstruct": 1
    },
    "secondary": {
      "chance": 30,
      "status": "par"
    },
    "target": "normal",
    "type": "Ice",
    "contestType": "Beautiful",
    "id": "freezeshock",
    "description": "El usuario carga un bloque de hielo con electricidad en el primer turno y ataca con él en el segundo. Puede paralizar."
  },
  "freezingglare": {
    "num": 821,
    "accuracy": 100,
    "basePower": 90,
    "category": "Special",
    "name": "Mirada Heladora",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
      "chance": 10,
      "status": "frz"
    },
    "target": "normal",
    "type": "Psychic",
    "id": "freezingglare",
    "description": "A través de sus ojos emite poderes psíquicos con los que ataca al objetivo, al que puede llegar a congelar."
  },
  "freezyfrost": {
    "num": 739,
    "accuracy": 90,
    "basePower": 100,
    "category": "Special",
    "isNonstandard": "LGPE",
    "name": "Glaceoprisma",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Ice",
    "contestType": "Clever",
    "id": "freezyfrost",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "frenzyplant": {
    "num": 338,
    "accuracy": 90,
    "basePower": 150,
    "category": "Special",
    "name": "Planta Feroz",
    "pp": 5,
    "priority": 0,
    "flags": {
      "recharge": 1,
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1
    },
    "self": {
      "volatileStatus": "mustrecharge"
    },
    "target": "normal",
    "type": "Grass",
    "contestType": "Cool",
    "id": "frenzyplant",
    "description": "Golpea con una enorme planta. Quien lo usa no puede moverse en el siguiente turno."
  },
  "frostbreath": {
    "num": 524,
    "accuracy": 90,
    "basePower": 60,
    "category": "Special",
    "name": "Vaho Gélido",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "willCrit": true,
    "target": "normal",
    "type": "Ice",
    "contestType": "Beautiful",
    "id": "frostbreath",
    "description": "Quien lo usa ataca lanzando un aliento gélido. Siempre asesta un golpe crítico."
  },
  "frustration": {
    "num": 218,
    "accuracy": 100,
    "basePower": 0,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Frustración",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "basePower": 160
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Cute",
    "id": "frustration",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente.",
    "dynamicBasePower": true
  },
  "furyattack": {
    "num": 31,
    "accuracy": 85,
    "basePower": 15,
    "category": "Physical",
    "name": "Ataque Furia",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": [
      2,
      5
    ],
    "target": "normal",
    "type": "Normal",
    "contestType": "Cool",
    "id": "furyattack",
    "description": "Cornea al objetivo de dos a cinco veces."
  },
  "furycutter": {
    "num": 210,
    "accuracy": 95,
    "basePower": 40,
    "category": "Physical",
    "name": "Corte Furia",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "slicing": 1
    },
    "condition": {
      "duration": 2
    },
    "target": "normal",
    "type": "Bug",
    "contestType": "Cool",
    "id": "furycutter",
    "description": "Ataque con garras o guadaña que crece en intensidad si se usa repetidas veces.",
    "dynamicBasePower": true
  },
  "furyswipes": {
    "num": 154,
    "accuracy": 80,
    "basePower": 18,
    "category": "Physical",
    "name": "Golpes Furia",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": [
      2,
      5
    ],
    "target": "normal",
    "type": "Normal",
    "maxMove": {
      "basePower": 100
    },
    "contestType": "Tough",
    "id": "furyswipes",
    "description": "Araña rápidamente de dos a cinco veces."
  },
  "fusionbolt": {
    "num": 559,
    "accuracy": 100,
    "basePower": 100,
    "category": "Physical",
    "name": "Rayo Fusión",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Electric",
    "contestType": "Cool",
    "id": "fusionbolt",
    "description": "Ataca con una enorme descarga eléctrica. Aumenta su potencia si es influenciada por una gigantesca llamarada."
  },
  "fusionflare": {
    "num": 558,
    "accuracy": 100,
    "basePower": 100,
    "category": "Special",
    "name": "Llama Fusión",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "defrost": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Beautiful",
    "id": "fusionflare",
    "description": "Ataca con una llamarada gigantesca. Aumenta su potencia si es influenciada por una gran energía eléctrica."
  },
  "futuresight": {
    "num": 248,
    "accuracy": 100,
    "basePower": 120,
    "category": "Special",
    "name": "Premonición",
    "pp": 10,
    "priority": 0,
    "flags": {
      "allyanim": 1,
      "metronome": 1,
      "futuremove": 1
    },
    "ignoreImmunity": true,
    "target": "normal",
    "type": "Psychic",
    "contestType": "Clever",
    "id": "futuresight",
    "description": "Concentra energía psíquica para golpear al objetivo dos turnos después."
  },
  "gastroacid": {
    "num": 380,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Bilis",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "volatileStatus": "gastroacid",
    "condition": {},
    "target": "normal",
    "type": "Poison",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Tough",
    "id": "gastroacid",
    "description": "El usuario arroja sus jugos biliares al objetivo, lo que anula el efecto de la habilidad en uso."
  },
  "geargrind": {
    "num": 544,
    "accuracy": 85,
    "basePower": 50,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Rueda Doble",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": 2,
    "target": "normal",
    "type": "Steel",
    "zMove": {
      "basePower": 180
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Clever",
    "id": "geargrind",
    "description": "Rota dos engranajes de hierro sobre el objetivo. Golpea dos veces."
  },
  "gearup": {
    "num": 674,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Piñón Auxiliar",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "target": "allySide",
    "type": "Steel",
    "zMove": {
      "boost": {
        "spa": 1
      }
    },
    "contestType": "Clever",
    "id": "gearup",
    "description": "Cambia de marcha y logra aumentar el Ataque y el Ataque Especial de los Pokémon aliados que cuenten con las habilidades Más y Menos."
  },
  "genesissupernova": {
    "num": 703,
    "accuracy": true,
    "basePower": 185,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Supernova Original",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "mewniumz",
    "secondary": {
      "chance": 100,
      "self": {}
    },
    "target": "normal",
    "type": "Psychic",
    "contestType": "Cool",
    "id": "genesissupernova",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "geomancy": {
    "num": 601,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Geocontrol",
    "pp": 10,
    "priority": 0,
    "flags": {
      "charge": 1,
      "nonsky": 1,
      "metronome": 1,
      "nosleeptalk": 1,
      "failinstruct": 1
    },
    "boosts": {
      "spa": 2,
      "spd": 2,
      "spe": 2
    },
    "target": "self",
    "type": "Fairy",
    "zMove": {
      "boost": {
        "atk": 1,
        "def": 1,
        "spa": 1,
        "spd": 1,
        "spe": 1
      }
    },
    "contestType": "Beautiful",
    "id": "geomancy",
    "description": "Concentra energía durante el primer turno, de forma que su Velocidad, Ataque Especial y Defensa Especial aumenten mucho en el segundo."
  },
  "gigadrain": {
    "num": 202,
    "accuracy": 100,
    "basePower": 75,
    "category": "Special",
    "name": "Gigadrenado",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "heal": 1,
      "metronome": 1
    },
    "drain": [
      1,
      2
    ],
    "target": "normal",
    "type": "Grass",
    "contestType": "Clever",
    "id": "gigadrain",
    "description": "Un ataque que absorbe nutrientes. Quien lo usa recupera la mitad de los PS del daño que produce."
  },
  "gigaimpact": {
    "num": 416,
    "accuracy": 90,
    "basePower": 150,
    "category": "Physical",
    "name": "Gigaimpacto",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "recharge": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "self": {
      "volatileStatus": "mustrecharge"
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "gigaimpact",
    "description": "El usuario carga contra el objetivo con toda la fuerza que tiene y descansa durante el siguiente turno."
  },
  "gigatonhammer": {
    "num": 893,
    "accuracy": 100,
    "basePower": 160,
    "category": "Physical",
    "name": "Martillo Colosal",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "cantusetwice": 1
    },
    "target": "normal",
    "type": "Steel",
    "id": "gigatonhammer",
    "description": "Ataque físico de tipo Steel, potencia base 160."
  },
  "gigavolthavoc": {
    "num": 646,
    "accuracy": true,
    "basePower": 1,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Gigavoltio Destructor",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "electriumz",
    "target": "normal",
    "type": "Electric",
    "contestType": "Cool",
    "id": "gigavolthavoc",
    "description": "Ataque físico de tipo Electric, potencia base 1."
  },
  "glaciallance": {
    "num": 824,
    "accuracy": 100,
    "basePower": 120,
    "category": "Physical",
    "name": "Lanza Glacial",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "allAdjacentFoes",
    "type": "Ice",
    "id": "glaciallance",
    "description": "El usuario ataca al objetivo lanzándole un carámbano de hielo envuelto en una ventisca."
  },
  "glaciate": {
    "num": 549,
    "accuracy": 95,
    "basePower": 65,
    "category": "Special",
    "name": "Mundo Gélido",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "spe": -1
      }
    },
    "target": "allAdjacentFoes",
    "type": "Ice",
    "contestType": "Beautiful",
    "id": "glaciate",
    "description": "Ataque con aire helado que baja la Velocidad del objetivo."
  },
  "glaiverush": {
    "num": 862,
    "accuracy": 100,
    "basePower": 120,
    "category": "Physical",
    "name": "Asalto Espadón",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "self": {
      "volatileStatus": "glaiverush"
    },
    "condition": {
      "noCopy": true,
      "onBeforeMovePriority": 100
    },
    "target": "normal",
    "type": "Dragon",
    "id": "glaiverush",
    "description": "Ataque físico de tipo Dragon, potencia base 120."
  },
  "glare": {
    "num": 137,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Deslumbrar",
    "pp": 30,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "status": "par",
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Tough",
    "id": "glare",
    "description": "Intimida y asusta al objetivo con la mirada para dejarlo paralizado."
  },
  "glitzyglow": {
    "num": 736,
    "accuracy": 95,
    "basePower": 80,
    "category": "Special",
    "isNonstandard": "LGPE",
    "name": "Espeaura",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "self": {
      "sideCondition": "lightscreen"
    },
    "target": "normal",
    "type": "Psychic",
    "contestType": "Clever",
    "id": "glitzyglow",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "gmaxbefuddle": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigaestupor",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Butterfree",
    "self": {},
    "target": "adjacentFoe",
    "type": "Bug",
    "contestType": "Cool",
    "id": "gmaxbefuddle",
    "description": "Ataque físico de tipo Bug, potencia base 10."
  },
  "gmaxcannonade": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigacañonazo",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": "Blastoise",
    "self": {},
    "condition": {
      "duration": 4,
      "onResidualOrder": 5,
      "onResidualSubOrder": 1,
      "onSideResidualOrder": 26,
      "onSideResidualSubOrder": 11
    },
    "target": "adjacentFoe",
    "type": "Water",
    "contestType": "Cool",
    "id": "gmaxcannonade",
    "description": "Ataque físico de tipo Water, potencia base 10."
  },
  "gmaxcentiferno": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigacienfuegos",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Centiskorch",
    "self": {},
    "target": "adjacentFoe",
    "type": "Fire",
    "contestType": "Cool",
    "id": "gmaxcentiferno",
    "description": "Ataque físico de tipo Fire, potencia base 10."
  },
  "gmaxchistrike": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigapuñición",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Machamp",
    "self": {},
    "condition": {
      "noCopy": true
    },
    "target": "adjacentFoe",
    "type": "Fighting",
    "contestType": "Cool",
    "id": "gmaxchistrike",
    "description": "Ataque físico de tipo Fighting, potencia base 10."
  },
  "gmaxcuddle": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigaternura",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Eevee",
    "self": {},
    "target": "adjacentFoe",
    "type": "Normal",
    "contestType": "Cool",
    "id": "gmaxcuddle",
    "description": "Ataque físico de tipo Normal, potencia base 10."
  },
  "gmaxdepletion": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigadesgaste",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Duraludon",
    "self": {},
    "target": "adjacentFoe",
    "type": "Dragon",
    "contestType": "Cool",
    "id": "gmaxdepletion",
    "description": "Ataque físico de tipo Dragon, potencia base 10."
  },
  "gmaxdrumsolo": {
    "num": 1000,
    "accuracy": true,
    "basePower": 160,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigarredoble",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Rillaboom",
    "ignoreAbility": true,
    "target": "adjacentFoe",
    "type": "Grass",
    "contestType": "Cool",
    "id": "gmaxdrumsolo",
    "description": "Ataque físico de tipo Grass, potencia base 160."
  },
  "gmaxfinale": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigacolofón",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Alcremie",
    "self": {},
    "target": "adjacentFoe",
    "type": "Fairy",
    "contestType": "Cool",
    "id": "gmaxfinale",
    "description": "Ataque físico de tipo Fairy, potencia base 10."
  },
  "gmaxfireball": {
    "num": 1000,
    "accuracy": true,
    "basePower": 160,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigaesfera Ígnea",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Cinderace",
    "ignoreAbility": true,
    "target": "adjacentFoe",
    "type": "Fire",
    "contestType": "Cool",
    "id": "gmaxfireball",
    "description": "Ataque físico de tipo Fire, potencia base 160."
  },
  "gmaxfoamburst": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigaespuma",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Kingler",
    "self": {},
    "target": "adjacentFoe",
    "type": "Water",
    "contestType": "Cool",
    "id": "gmaxfoamburst",
    "description": "Ataque físico de tipo Water, potencia base 10."
  },
  "gmaxgoldrush": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigamonedas",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Meowth",
    "self": {},
    "target": "adjacentFoe",
    "type": "Normal",
    "contestType": "Cool",
    "id": "gmaxgoldrush",
    "description": "Ataque físico de tipo Normal, potencia base 10."
  },
  "gmaxgravitas": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigabóveda",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Orbeetle",
    "self": {
      "pseudoWeather": "gravity"
    },
    "target": "adjacentFoe",
    "type": "Psychic",
    "contestType": "Cool",
    "id": "gmaxgravitas",
    "description": "Ataque físico de tipo Psychic, potencia base 10."
  },
  "gmaxhydrosnipe": {
    "num": 1000,
    "accuracy": true,
    "basePower": 160,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigadisparo",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Inteleon",
    "ignoreAbility": true,
    "target": "adjacentFoe",
    "type": "Water",
    "contestType": "Cool",
    "id": "gmaxhydrosnipe",
    "description": "Ataque físico de tipo Water, potencia base 160."
  },
  "gmaxmalodor": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigapestilencia",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Garbodor",
    "self": {},
    "target": "adjacentFoe",
    "type": "Poison",
    "contestType": "Cool",
    "id": "gmaxmalodor",
    "description": "Ataque físico de tipo Poison, potencia base 10."
  },
  "gmaxmeltdown": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigafundido",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Melmetal",
    "self": {},
    "target": "adjacentFoe",
    "type": "Steel",
    "contestType": "Cool",
    "id": "gmaxmeltdown",
    "description": "Ataque físico de tipo Steel, potencia base 10."
  },
  "gmaxoneblow": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigagolpe Brusco",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Urshifu",
    "target": "adjacentFoe",
    "type": "Dark",
    "contestType": "Cool",
    "id": "gmaxoneblow",
    "description": "Ataque físico de tipo Dark, potencia base 10."
  },
  "gmaxrapidflow": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigagolpe Fluido",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Urshifu-Rapid-Strike",
    "target": "adjacentFoe",
    "type": "Water",
    "contestType": "Cool",
    "id": "gmaxrapidflow",
    "description": "Ataque físico de tipo Water, potencia base 10."
  },
  "gmaxreplenish": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigarreciclaje",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Snorlax",
    "self": {},
    "target": "adjacentFoe",
    "type": "Normal",
    "contestType": "Cool",
    "id": "gmaxreplenish",
    "description": "Ataque físico de tipo Normal, potencia base 10."
  },
  "gmaxresonance": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigamelodía",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Lapras",
    "self": {
      "sideCondition": "auroraveil"
    },
    "target": "adjacentFoe",
    "type": "Ice",
    "contestType": "Cool",
    "id": "gmaxresonance",
    "description": "Ataque físico de tipo Ice, potencia base 10."
  },
  "gmaxsandblast": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigapolvareda",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Sandaconda",
    "self": {},
    "target": "adjacentFoe",
    "type": "Ground",
    "contestType": "Cool",
    "id": "gmaxsandblast",
    "description": "Ataque físico de tipo Ground, potencia base 10."
  },
  "gmaxsmite": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigacastigo",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Hatterene",
    "self": {},
    "target": "adjacentFoe",
    "type": "Fairy",
    "contestType": "Cool",
    "id": "gmaxsmite",
    "description": "Ataque físico de tipo Fairy, potencia base 10."
  },
  "gmaxsnooze": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigasopor",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Grimmsnarl",
    "target": "adjacentFoe",
    "type": "Dark",
    "contestType": "Cool",
    "id": "gmaxsnooze",
    "description": "Ataque físico de tipo Dark, potencia base 10."
  },
  "gmaxsteelsurge": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigatrampa Acero",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Copperajah",
    "self": {},
    "condition": {},
    "target": "adjacentFoe",
    "type": "Steel",
    "contestType": "Cool",
    "id": "gmaxsteelsurge",
    "description": "Ataque físico de tipo Steel, potencia base 10."
  },
  "gmaxstonesurge": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigatrampa Rocas",
    "pp": 5,
    "priority": 0,
    "flags": {},
    "isMax": "Drednaw",
    "self": {},
    "target": "adjacentFoe",
    "type": "Water",
    "contestType": "Cool",
    "id": "gmaxstonesurge",
    "description": "Ataque físico de tipo Water, potencia base 10."
  },
  "gmaxstunshock": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigadescarga",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": "Toxtricity",
    "self": {},
    "target": "adjacentFoe",
    "type": "Electric",
    "contestType": "Cool",
    "id": "gmaxstunshock",
    "description": "Ataque físico de tipo Electric, potencia base 10."
  },
  "gmaxsweetness": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Giganéctar",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": "Appletun",
    "self": {},
    "target": "adjacentFoe",
    "type": "Grass",
    "contestType": "Cool",
    "id": "gmaxsweetness",
    "description": "Ataque físico de tipo Grass, potencia base 10."
  },
  "gmaxtartness": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigacorrosión",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": "Flapple",
    "self": {},
    "target": "adjacentFoe",
    "type": "Grass",
    "contestType": "Cool",
    "id": "gmaxtartness",
    "description": "Ataque físico de tipo Grass, potencia base 10."
  },
  "gmaxterror": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigaaparición",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": "Gengar",
    "self": {},
    "target": "adjacentFoe",
    "type": "Ghost",
    "contestType": "Cool",
    "id": "gmaxterror",
    "description": "Ataque físico de tipo Ghost, potencia base 10."
  },
  "gmaxvinelash": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigalianas",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": "Venusaur",
    "self": {},
    "condition": {
      "duration": 4,
      "onResidualOrder": 5,
      "onResidualSubOrder": 1,
      "onSideResidualOrder": 26,
      "onSideResidualSubOrder": 11
    },
    "target": "adjacentFoe",
    "type": "Grass",
    "contestType": "Cool",
    "id": "gmaxvinelash",
    "description": "Ataque físico de tipo Grass, potencia base 10."
  },
  "gmaxvolcalith": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigarroca Ígnea",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": "Coalossal",
    "self": {},
    "condition": {
      "duration": 4,
      "onResidualOrder": 5,
      "onResidualSubOrder": 1,
      "onSideResidualOrder": 26,
      "onSideResidualSubOrder": 11
    },
    "target": "adjacentFoe",
    "type": "Rock",
    "contestType": "Cool",
    "id": "gmaxvolcalith",
    "description": "Ataque físico de tipo Rock, potencia base 10."
  },
  "gmaxvoltcrash": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigatronada",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": "Pikachu",
    "self": {},
    "target": "adjacentFoe",
    "type": "Electric",
    "contestType": "Cool",
    "id": "gmaxvoltcrash",
    "description": "Ataque físico de tipo Electric, potencia base 10."
  },
  "gmaxwildfire": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigallamarada",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": "Charizard",
    "self": {},
    "condition": {
      "duration": 4,
      "onResidualOrder": 5,
      "onResidualSubOrder": 1,
      "onSideResidualOrder": 26,
      "onSideResidualSubOrder": 11
    },
    "target": "adjacentFoe",
    "type": "Fire",
    "contestType": "Cool",
    "id": "gmaxwildfire",
    "description": "Ataque físico de tipo Fire, potencia base 10."
  },
  "gmaxwindrage": {
    "num": 1000,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Gmax",
    "name": "Gigahuracán",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": "Corviknight",
    "self": {},
    "target": "adjacentFoe",
    "type": "Flying",
    "contestType": "Cool",
    "id": "gmaxwindrage",
    "description": "Ataque físico de tipo Flying, potencia base 10."
  },
  "grassknot": {
    "num": 447,
    "accuracy": 100,
    "basePower": 0,
    "category": "Special",
    "name": "Hierba Lazo",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Grass",
    "zMove": {
      "basePower": 160
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Cute",
    "id": "grassknot",
    "description": "Enreda al objetivo con hierba y lo derriba. Cuanto más pesado es el objetivo, más daño inflige.",
    "dynamicBasePower": true
  },
  "grasspledge": {
    "num": 520,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Voto Planta",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1,
      "pledgecombo": 1
    },
    "condition": {
      "duration": 4,
      "onSideResidualOrder": 26,
      "onSideResidualSubOrder": 9
    },
    "target": "normal",
    "type": "Grass",
    "contestType": "Beautiful",
    "id": "grasspledge",
    "description": "Ataca con columnas de hojas. Combinado con Voto Agua, crea un pantano y aumenta su potencia.",
    "dynamicBasePower": true
  },
  "grasswhistle": {
    "num": 320,
    "accuracy": 55,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Silbato",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "status": "slp",
    "target": "normal",
    "type": "Grass",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Clever",
    "id": "grasswhistle",
    "description": "Movimiento de estado de tipo Grass. Puede causar sueño. Precisión: 55%."
  },
  "grassyglide": {
    "num": 803,
    "accuracy": 100,
    "basePower": 55,
    "category": "Physical",
    "name": "Fitoimpulso",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Grass",
    "contestType": "Cool",
    "id": "grassyglide",
    "description": "Ataca al objetivo deslizándose sobre el terreno de combate. Este movimiento tiene prioridad alta cuando el terreno está cubierto por un campo de hierba."
  },
  "grassyterrain": {
    "num": 580,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Campo de Hierba",
    "pp": 10,
    "priority": 0,
    "flags": {
      "nonsky": 1,
      "metronome": 1
    },
    "terrain": "grassyterrain",
    "condition": {
      "effectType": "Terrain",
      "duration": 5,
      "onBasePowerPriority": 6,
      "onResidualOrder": 5,
      "onResidualSubOrder": 2,
      "onFieldResidualOrder": 27,
      "onFieldResidualSubOrder": 7
    },
    "target": "all",
    "type": "Grass",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Beautiful",
    "id": "grassyterrain",
    "description": "Durante cinco turnos, se potencian los movimientos de tipo Planta y los Pokémon que están en contacto con el suelo recuperan PS en cada turno."
  },
  "gravapple": {
    "num": 788,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Fuerza G",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "def": -1
      }
    },
    "target": "normal",
    "type": "Grass",
    "id": "gravapple",
    "description": "El usuario ataca haciendo caer una manzana desde gran altura. Disminuye la Defensa del objetivo."
  },
  "gravity": {
    "num": 356,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Gravedad",
    "pp": 5,
    "priority": 0,
    "flags": {
      "nonsky": 1,
      "metronome": 1
    },
    "pseudoWeather": "gravity",
    "condition": {
      "duration": 5,
      "onBeforeMovePriority": 6,
      "onFieldResidualOrder": 27,
      "onFieldResidualSubOrder": 2
    },
    "target": "all",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spa": 1
      }
    },
    "contestType": "Clever",
    "id": "gravity",
    "description": "Durante cinco turnos, se anulan los movimientos que alzan el vuelo y los Pokémon de tipo Volador o que levitan son vulnerables a movimientos de tipo Tierra."
  },
  "growl": {
    "num": 45,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Gruñido",
    "pp": 40,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": -1
    },
    "target": "allAdjacentFoes",
    "type": "Normal",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Cute",
    "id": "growl",
    "description": "Dulce gruñido que reduce el Ataque del equipo rival."
  },
  "growth": {
    "num": 74,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Desarrollo",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": 1,
      "spa": 1
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spa": 1
      }
    },
    "contestType": "Beautiful",
    "id": "growth",
    "description": "Hace que su cuerpo crezca a marchas forzadas con lo que aumenta su Ataque y Ataque Especial."
  },
  "grudge": {
    "num": 288,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Rabia",
    "pp": 5,
    "priority": 0,
    "flags": {
      "bypasssub": 1,
      "metronome": 1
    },
    "volatileStatus": "grudge",
    "condition": {
      "onBeforeMovePriority": 100
    },
    "target": "self",
    "type": "Ghost",
    "zMove": {
      "effect": "redirect"
    },
    "contestType": "Tough",
    "id": "grudge",
    "description": "Si el usuario se debilita al recibir un ataque, todos los PP de este último ataque serán eliminados."
  },
  "guardianofalola": {
    "num": 698,
    "accuracy": true,
    "basePower": 0,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Cólera del Guardián",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "tapuniumz",
    "target": "normal",
    "type": "Fairy",
    "contestType": "Tough",
    "id": "guardianofalola",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "guardsplit": {
    "num": 470,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Isoguardia",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Clever",
    "id": "guardsplit",
    "description": "El usuario emplea sus poderes para hacer la media de su Defensa y Defensa Especial con las de su objetivo y compartirlas."
  },
  "guardswap": {
    "num": 385,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Cambiadefensa",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "bypasssub": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Clever",
    "id": "guardswap",
    "description": "El usuario emplea su poder mental para intercambiar los cambios en la Defensa y Defensa Especial con el objetivo."
  },
  "guillotine": {
    "num": 12,
    "accuracy": 30,
    "basePower": 0,
    "category": "Physical",
    "name": "Guillotina",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "ohko": true,
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "basePower": 180
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Cool",
    "id": "guillotine",
    "description": "Ataque cortante que debilita al oponente de un golpe si acierta."
  },
  "gunkshot": {
    "num": 441,
    "accuracy": 80,
    "basePower": 120,
    "category": "Physical",
    "name": "Lanzamugre",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "status": "psn"
    },
    "target": "normal",
    "type": "Poison",
    "contestType": "Tough",
    "id": "gunkshot",
    "description": "Lanza contra el objetivo basura asquerosa y puede envenenarlo."
  },
  "gust": {
    "num": 16,
    "accuracy": 100,
    "basePower": 40,
    "category": "Special",
    "name": "Tornado",
    "pp": 35,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "distance": 1,
      "metronome": 1,
      "wind": 1
    },
    "target": "any",
    "type": "Flying",
    "contestType": "Clever",
    "id": "gust",
    "description": "Crea un tornado con las alas y lo lanza contra el objetivo."
  },
  "gyroball": {
    "num": 360,
    "accuracy": 100,
    "basePower": 0,
    "category": "Physical",
    "name": "Giro Bola",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "target": "normal",
    "type": "Steel",
    "zMove": {
      "basePower": 160
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Cool",
    "id": "gyroball",
    "description": "Embiste al objetivo con un potente ataque giratorio. Cuanto más lento es el usuario, más daño causa.",
    "dynamicBasePower": true
  },
  "hail": {
    "num": 258,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Granizo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "metronome": 1
    },
    "weather": "hail",
    "target": "all",
    "type": "Ice",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Beautiful",
    "id": "hail",
    "description": "Tormenta de granizo que dura cinco turnos. Hiere a todos los Pokémon excepto a los de tipo Hielo."
  },
  "hammerarm": {
    "num": 359,
    "accuracy": 90,
    "basePower": 100,
    "category": "Physical",
    "name": "Machada",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1,
      "metronome": 1
    },
    "self": {
      "boosts": {
        "spe": -1
      }
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Tough",
    "id": "hammerarm",
    "description": "Gira con fuerza el puño y da un gran golpe. No obstante, baja la Velocidad."
  },
  "happyhour": {
    "num": 603,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Paga Extra",
    "pp": 30,
    "priority": 0,
    "flags": {
      "metronome": 1
    },
    "target": "allySide",
    "type": "Normal",
    "zMove": {
      "boost": {
        "atk": 1,
        "def": 1,
        "spa": 1,
        "spd": 1,
        "spe": 1
      }
    },
    "contestType": "Cute",
    "id": "happyhour",
    "description": "Movimiento de estado de tipo Normal."
  },
  "harden": {
    "num": 106,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Fortaleza",
    "pp": 30,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "def": 1
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Tough",
    "id": "harden",
    "description": "Tensa la musculatura del usuario para aumentar la Defensa."
  },
  "hardpress": {
    "num": 912,
    "accuracy": 100,
    "basePower": 0,
    "category": "Physical",
    "name": "Prensa Metálica",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Steel",
    "id": "hardpress",
    "description": "Ataque físico de tipo Steel, sin potencia directa.",
    "dynamicBasePower": true
  },
  "haze": {
    "num": 114,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Niebla",
    "pp": 30,
    "priority": 0,
    "flags": {
      "bypasssub": 1,
      "metronome": 1
    },
    "target": "all",
    "type": "Ice",
    "zMove": {
      "effect": "heal"
    },
    "contestType": "Beautiful",
    "id": "haze",
    "description": "Neblina que elimina los cambios de características de todos los Pokémon en combate."
  },
  "headbutt": {
    "num": 29,
    "accuracy": 100,
    "basePower": 70,
    "category": "Physical",
    "name": "Golpe Cabeza",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "headbutt",
    "description": "Potente cabezazo que puede amedrentar al objetivo."
  },
  "headcharge": {
    "num": 543,
    "accuracy": 100,
    "basePower": 120,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Ariete",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "recoil": [
      1,
      4
    ],
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "headcharge",
    "description": "Propina un tremendo cabezazo. También daña al usuario un poco."
  },
  "headlongrush": {
    "num": 838,
    "accuracy": 100,
    "basePower": 120,
    "category": "Physical",
    "name": "Arremetida",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1,
      "metronome": 1
    },
    "self": {
      "boosts": {
        "def": -1,
        "spd": -1
      }
    },
    "target": "normal",
    "type": "Ground",
    "id": "headlongrush",
    "description": "Ataque físico de tipo Ground, potencia base 120. Modifica estadísticas: Defensa -1, Defensa especial -1."
  },
  "headsmash": {
    "num": 457,
    "accuracy": 80,
    "basePower": 150,
    "category": "Physical",
    "name": "Testarazo",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "recoil": [
      1,
      2
    ],
    "target": "normal",
    "type": "Rock",
    "contestType": "Tough",
    "id": "headsmash",
    "description": "El usuario arriesga su vida y lanza un cabezazo con toda su fuerza. El agresor resulta seriamente dañado."
  },
  "healbell": {
    "num": 215,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Cascabel Cura",
    "pp": 5,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "sound": 1,
      "distance": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "target": "allyTeam",
    "type": "Normal",
    "zMove": {
      "effect": "heal"
    },
    "contestType": "Beautiful",
    "id": "healbell",
    "description": "Tañido que cura los problemas de estado de todos los Pokémon del equipo."
  },
  "healblock": {
    "num": 377,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Anticura",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "volatileStatus": "healblock",
    "condition": {
      "duration": 5,
      "onBeforeMovePriority": 6,
      "onResidualOrder": 20
    },
    "target": "allAdjacentFoes",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spa": 2
      }
    },
    "contestType": "Clever",
    "id": "healblock",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "healingwish": {
    "num": 361,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Deseo Cura",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "heal": 1,
      "metronome": 1
    },
    "selfdestruct": "ifHit",
    "slotCondition": "healingwish",
    "condition": {},
    "target": "self",
    "type": "Psychic",
    "contestType": "Beautiful",
    "id": "healingwish",
    "description": "El Pokémon cae debilitado, pero su sustituto recupera su estado y los PS."
  },
  "healorder": {
    "num": 456,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Auxilio",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "heal": 1,
      "metronome": 1
    },
    "heal": [
      1,
      2
    ],
    "target": "self",
    "type": "Bug",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Clever",
    "id": "healorder",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "healpulse": {
    "num": 505,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Pulso Cura",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "distance": 1,
      "heal": 1,
      "allyanim": 1,
      "metronome": 1,
      "pulse": 1
    },
    "target": "any",
    "type": "Psychic",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Beautiful",
    "id": "healpulse",
    "description": "Una onda curativa restaura la mitad de los PS máximos del objetivo."
  },
  "heartstamp": {
    "num": 531,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Arrumaco",
    "pp": 25,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Psychic",
    "contestType": "Cute",
    "id": "heartstamp",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "heartswap": {
    "num": 391,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Cambiaalmas",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "bypasssub": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Psychic",
    "zMove": {
      "effect": "crit2"
    },
    "contestType": "Clever",
    "id": "heartswap",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "heatcrash": {
    "num": 535,
    "accuracy": 100,
    "basePower": 0,
    "category": "Physical",
    "name": "Golpe Calor",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1,
      "minimize": 1
    },
    "target": "normal",
    "type": "Fire",
    "zMove": {
      "basePower": 160
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Tough",
    "id": "heatcrash",
    "description": "El usuario ataca con su cuerpo ardiente. Cuanto mayor sea su peso comparado con el del objetivo, más daño causará.",
    "dynamicBasePower": true
  },
  "heatwave": {
    "num": 257,
    "accuracy": 90,
    "basePower": 95,
    "category": "Special",
    "name": "Onda Ígnea",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "wind": 1
    },
    "secondary": {
      "chance": 10,
      "status": "brn"
    },
    "target": "allAdjacentFoes",
    "type": "Fire",
    "contestType": "Beautiful",
    "id": "heatwave",
    "description": "Provoca un viento abrasador que puede quemar al objetivo."
  },
  "heavyslam": {
    "num": 484,
    "accuracy": 100,
    "basePower": 0,
    "category": "Physical",
    "name": "Cuerpo Pesado",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1,
      "minimize": 1
    },
    "target": "normal",
    "type": "Steel",
    "zMove": {
      "basePower": 160
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Tough",
    "id": "heavyslam",
    "description": "El usuario golpea con todo su cuerpo. Cuanto mayor sea su peso comparado con el del objetivo, más daño causará.",
    "dynamicBasePower": true
  },
  "helpinghand": {
    "num": 270,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Refuerzo",
    "pp": 20,
    "priority": 5,
    "flags": {
      "bypasssub": 1,
      "noassist": 1,
      "failcopycat": 1
    },
    "volatileStatus": "helpinghand",
    "condition": {
      "duration": 1,
      "onBasePowerPriority": 10
    },
    "target": "adjacentAlly",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Clever",
    "id": "helpinghand",
    "description": "El usuario ayuda a un aliado reforzando la potencia de su ataque."
  },
  "hex": {
    "num": 506,
    "accuracy": 100,
    "basePower": 65,
    "category": "Special",
    "name": "Infortunio",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Ghost",
    "zMove": {
      "basePower": 160
    },
    "contestType": "Clever",
    "id": "hex",
    "description": "Ataque que causa un gran daño a los objetivos que sufren problemas de estado.",
    "dynamicBasePower": true
  },
  "hiddenpower": {
    "num": 237,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Poder Oculto",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Clever",
    "id": "hiddenpower",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "hiddenpowerbug": {
    "num": 237,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "placeholderFor": "Hidden Power",
    "isNonstandard": "Past",
    "name": "Hidden Power Bug",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Bug",
    "contestType": "Clever",
    "id": "hiddenpowerbug",
    "description": "Ataque especial de tipo Bug, potencia base 60."
  },
  "hiddenpowerdark": {
    "num": 237,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "placeholderFor": "Hidden Power",
    "isNonstandard": "Past",
    "name": "Hidden Power Dark",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Dark",
    "contestType": "Clever",
    "id": "hiddenpowerdark",
    "description": "Ataque especial de tipo Dark, potencia base 60."
  },
  "hiddenpowerdragon": {
    "num": 237,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "placeholderFor": "Hidden Power",
    "isNonstandard": "Past",
    "name": "Hidden Power Dragon",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Dragon",
    "contestType": "Clever",
    "id": "hiddenpowerdragon",
    "description": "Ataque especial de tipo Dragon, potencia base 60."
  },
  "hiddenpowerelectric": {
    "num": 237,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "placeholderFor": "Hidden Power",
    "isNonstandard": "Past",
    "name": "Hidden Power Electric",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Electric",
    "contestType": "Clever",
    "id": "hiddenpowerelectric",
    "description": "Ataque especial de tipo Electric, potencia base 60."
  },
  "hiddenpowerfighting": {
    "num": 237,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "placeholderFor": "Hidden Power",
    "isNonstandard": "Past",
    "name": "Hidden Power Fighting",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Clever",
    "id": "hiddenpowerfighting",
    "description": "Ataque especial de tipo Fighting, potencia base 60."
  },
  "hiddenpowerfire": {
    "num": 237,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "placeholderFor": "Hidden Power",
    "isNonstandard": "Past",
    "name": "Hidden Power Fire",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Clever",
    "id": "hiddenpowerfire",
    "description": "Ataque especial de tipo Fire, potencia base 60."
  },
  "hiddenpowerflying": {
    "num": 237,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "placeholderFor": "Hidden Power",
    "isNonstandard": "Past",
    "name": "Hidden Power Flying",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Flying",
    "contestType": "Clever",
    "id": "hiddenpowerflying",
    "description": "Ataque especial de tipo Flying, potencia base 60."
  },
  "hiddenpowerghost": {
    "num": 237,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "placeholderFor": "Hidden Power",
    "isNonstandard": "Past",
    "name": "Hidden Power Ghost",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Ghost",
    "contestType": "Clever",
    "id": "hiddenpowerghost",
    "description": "Ataque especial de tipo Ghost, potencia base 60."
  },
  "hiddenpowergrass": {
    "num": 237,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "placeholderFor": "Hidden Power",
    "isNonstandard": "Past",
    "name": "Hidden Power Grass",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Grass",
    "contestType": "Clever",
    "id": "hiddenpowergrass",
    "description": "Ataque especial de tipo Grass, potencia base 60."
  },
  "hiddenpowerground": {
    "num": 237,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "placeholderFor": "Hidden Power",
    "isNonstandard": "Past",
    "name": "Hidden Power Ground",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Ground",
    "contestType": "Clever",
    "id": "hiddenpowerground",
    "description": "Ataque especial de tipo Ground, potencia base 60."
  },
  "hiddenpowerice": {
    "num": 237,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "placeholderFor": "Hidden Power",
    "isNonstandard": "Past",
    "name": "Hidden Power Ice",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Ice",
    "contestType": "Clever",
    "id": "hiddenpowerice",
    "description": "Ataque especial de tipo Ice, potencia base 60."
  },
  "hiddenpowerpoison": {
    "num": 237,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "placeholderFor": "Hidden Power",
    "isNonstandard": "Past",
    "name": "Hidden Power Poison",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Poison",
    "contestType": "Clever",
    "id": "hiddenpowerpoison",
    "description": "Ataque especial de tipo Poison, potencia base 60."
  },
  "hiddenpowerpsychic": {
    "num": 237,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "placeholderFor": "Hidden Power",
    "isNonstandard": "Past",
    "name": "Hidden Power Psychic",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Psychic",
    "contestType": "Clever",
    "id": "hiddenpowerpsychic",
    "description": "Ataque especial de tipo Psychic, potencia base 60."
  },
  "hiddenpowerrock": {
    "num": 237,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "placeholderFor": "Hidden Power",
    "isNonstandard": "Past",
    "name": "Hidden Power Rock",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Rock",
    "contestType": "Clever",
    "id": "hiddenpowerrock",
    "description": "Ataque especial de tipo Rock, potencia base 60."
  },
  "hiddenpowersteel": {
    "num": 237,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "placeholderFor": "Hidden Power",
    "isNonstandard": "Past",
    "name": "Hidden Power Steel",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Steel",
    "contestType": "Clever",
    "id": "hiddenpowersteel",
    "description": "Ataque especial de tipo Steel, potencia base 60."
  },
  "hiddenpowerwater": {
    "num": 237,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "placeholderFor": "Hidden Power",
    "isNonstandard": "Past",
    "name": "Hidden Power Water",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Water",
    "contestType": "Clever",
    "id": "hiddenpowerwater",
    "description": "Ataque especial de tipo Water, potencia base 60."
  },
  "highhorsepower": {
    "num": 667,
    "accuracy": 95,
    "basePower": 95,
    "category": "Physical",
    "name": "Fuerza Equina",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Ground",
    "contestType": "Tough",
    "id": "highhorsepower",
    "description": "Ataque físico de tipo Ground, potencia base 95. Precisión: 95%."
  },
  "highjumpkick": {
    "num": 136,
    "accuracy": 90,
    "basePower": 130,
    "category": "Physical",
    "name": "Patada Salto Alta",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "gravity": 1,
      "metronome": 1
    },
    "hasCrashDamage": true,
    "target": "normal",
    "type": "Fighting",
    "contestType": "Cool",
    "id": "highjumpkick",
    "description": "El usuario salta muy alto y da un rodillazo. Si falla, se hará daño."
  },
  "holdback": {
    "num": 610,
    "accuracy": 100,
    "basePower": 40,
    "category": "Physical",
    "isNonstandard": "Unobtainable",
    "name": "Clemencia",
    "pp": 40,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "onDamagePriority": -20,
    "target": "normal",
    "type": "Normal",
    "contestType": "Cool",
    "id": "holdback",
    "description": "El usuario se contiene a la hora de atacar y deja al objetivo con al menos 1 PS."
  },
  "holdhands": {
    "num": 607,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Unobtainable",
    "name": "Manos Juntas",
    "pp": 40,
    "priority": 0,
    "flags": {
      "bypasssub": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1
    },
    "target": "adjacentAlly",
    "type": "Normal",
    "zMove": {
      "boost": {
        "atk": 1,
        "def": 1,
        "spa": 1,
        "spd": 1,
        "spe": 1
      }
    },
    "contestType": "Cute",
    "id": "holdhands",
    "description": "El Pokémon le da la mano a un aliado y ambos se sienten muy felices."
  },
  "honeclaws": {
    "num": 468,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Afilagarras",
    "pp": 15,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": 1,
      "accuracy": 1
    },
    "target": "self",
    "type": "Dark",
    "zMove": {
      "boost": {
        "atk": 1
      }
    },
    "contestType": "Cute",
    "id": "honeclaws",
    "description": "El usuario se afila las garras para aumentar su Ataque y Precisión."
  },
  "hornattack": {
    "num": 30,
    "accuracy": 100,
    "basePower": 65,
    "category": "Physical",
    "name": "Cornada",
    "pp": 25,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cool",
    "id": "hornattack",
    "description": "Ataque físico de tipo Normal, potencia base 65."
  },
  "horndrill": {
    "num": 32,
    "accuracy": 30,
    "basePower": 0,
    "category": "Physical",
    "name": "Perforador",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "ohko": true,
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "basePower": 180
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Cool",
    "id": "horndrill",
    "description": "Ataque con un cuerno giratorio que fulmina de un solo golpe al objetivo si lo alcanza."
  },
  "hornleech": {
    "num": 532,
    "accuracy": 100,
    "basePower": 75,
    "category": "Physical",
    "name": "Asta Drenaje",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "heal": 1,
      "metronome": 1
    },
    "drain": [
      1,
      2
    ],
    "target": "normal",
    "type": "Grass",
    "contestType": "Tough",
    "id": "hornleech",
    "description": "Un golpe que drena energía. El Pokémon recupera la mitad de los PS arrebatados al objetivo."
  },
  "howl": {
    "num": 336,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Aullido",
    "pp": 40,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "sound": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": 1
    },
    "target": "allies",
    "type": "Normal",
    "zMove": {
      "boost": {
        "atk": 1
      }
    },
    "contestType": "Cool",
    "id": "howl",
    "description": "Aullido que sube el ánimo y aumenta el Ataque del equipo."
  },
  "hurricane": {
    "num": 542,
    "accuracy": 70,
    "basePower": 110,
    "category": "Special",
    "name": "Vendaval",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "distance": 1,
      "metronome": 1,
      "wind": 1
    },
    "secondary": {
      "chance": 30,
      "volatileStatus": "confusion"
    },
    "target": "any",
    "type": "Flying",
    "contestType": "Tough",
    "id": "hurricane",
    "description": "Golpea al objetivo con un fuerte torbellino que envuelve al rival y puede confundirlo."
  },
  "hydrocannon": {
    "num": 308,
    "accuracy": 90,
    "basePower": 150,
    "category": "Special",
    "name": "Hidrocañón",
    "pp": 5,
    "priority": 0,
    "flags": {
      "recharge": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "self": {
      "volatileStatus": "mustrecharge"
    },
    "target": "normal",
    "type": "Water",
    "contestType": "Beautiful",
    "id": "hydrocannon",
    "description": "Disparo de agua. El atacante debe descansar el siguiente turno."
  },
  "hydropump": {
    "num": 56,
    "accuracy": 80,
    "basePower": 110,
    "category": "Special",
    "name": "Hidrobomba",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Water",
    "contestType": "Beautiful",
    "id": "hydropump",
    "description": "Ataque especial de tipo Water, potencia base 110. Precisión: 80%."
  },
  "hydrosteam": {
    "num": 876,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Hidrovapor",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "defrost": 1,
      "metronome": 1
    },
    "thawsTarget": true,
    "target": "normal",
    "type": "Water",
    "id": "hydrosteam",
    "description": "Ataque especial de tipo Water, potencia base 80."
  },
  "hydrovortex": {
    "num": 642,
    "accuracy": true,
    "basePower": 1,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Hidrovórtice Abisal",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "wateriumz",
    "target": "normal",
    "type": "Water",
    "contestType": "Cool",
    "id": "hydrovortex",
    "description": "Ataque físico de tipo Water, potencia base 1."
  },
  "hyperbeam": {
    "num": 63,
    "accuracy": 90,
    "basePower": 150,
    "category": "Special",
    "name": "Hiperrayo",
    "pp": 5,
    "priority": 0,
    "flags": {
      "recharge": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "self": {
      "volatileStatus": "mustrecharge"
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cool",
    "id": "hyperbeam",
    "description": "Es eficaz, pero el atacante deberá descansar en el siguiente turno."
  },
  "hyperdrill": {
    "num": 887,
    "accuracy": 100,
    "basePower": 100,
    "category": "Physical",
    "name": "Hipertaladro",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Clever",
    "id": "hyperdrill",
    "description": "Ataque físico de tipo Normal, potencia base 100."
  },
  "hyperfang": {
    "num": 158,
    "accuracy": 90,
    "basePower": 80,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Hipercolmillo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bite": 1
    },
    "secondary": {
      "chance": 10,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cool",
    "id": "hyperfang",
    "description": "Ataca con agudos colmillos. Puede amedrentar al objetivo."
  },
  "hyperspacefury": {
    "num": 621,
    "accuracy": true,
    "basePower": 100,
    "category": "Physical",
    "name": "Cerco Dimensión",
    "pp": 5,
    "priority": 0,
    "flags": {
      "mirror": 1,
      "bypasssub": 1,
      "nosketch": 1
    },
    "breaksProtect": true,
    "self": {
      "boosts": {
        "def": -1
      }
    },
    "target": "normal",
    "type": "Dark",
    "contestType": "Tough",
    "id": "hyperspacefury",
    "description": "Ataca al objetivo con una ráfaga de golpes que pasan por alto los efectos de movimientos como Protección o Detección. Baja la Defensa del usuario."
  },
  "hyperspacehole": {
    "num": 593,
    "accuracy": true,
    "basePower": 80,
    "category": "Special",
    "name": "Paso Dimensional",
    "pp": 5,
    "priority": 0,
    "flags": {
      "mirror": 1,
      "bypasssub": 1
    },
    "breaksProtect": true,
    "target": "normal",
    "type": "Psychic",
    "contestType": "Clever",
    "id": "hyperspacehole",
    "description": "El usuario aparece junto al rival usando un agujero dimensional y le asesta un golpe que movimientos como Protección o Detección no pueden evitar."
  },
  "hypervoice": {
    "num": 304,
    "accuracy": 100,
    "basePower": 90,
    "category": "Special",
    "name": "Vozarrón",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "target": "allAdjacentFoes",
    "type": "Normal",
    "contestType": "Cool",
    "id": "hypervoice",
    "description": "Grito desgarrador que inflige daño al objetivo."
  },
  "hypnosis": {
    "num": 95,
    "accuracy": 60,
    "basePower": 0,
    "category": "Status",
    "name": "Hipnosis",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "status": "slp",
    "target": "normal",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Clever",
    "id": "hypnosis",
    "description": "Movimiento de estado de tipo Psychic. Puede causar sueño. Precisión: 60%."
  },
  "iceball": {
    "num": 301,
    "accuracy": 90,
    "basePower": 30,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Bola Hielo",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "failinstruct": 1,
      "bullet": 1,
      "noparentalbond": 1
    },
    "condition": {
      "duration": 1,
      "onLockMove": "iceball"
    },
    "target": "normal",
    "type": "Ice",
    "contestType": "Beautiful",
    "id": "iceball",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente.",
    "dynamicBasePower": true
  },
  "icebeam": {
    "num": 58,
    "accuracy": 100,
    "basePower": 90,
    "category": "Special",
    "name": "Rayo Hielo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "status": "frz"
    },
    "target": "normal",
    "type": "Ice",
    "contestType": "Beautiful",
    "id": "icebeam",
    "description": "Rayo de hielo que puede llegar a congelar."
  },
  "iceburn": {
    "num": 554,
    "accuracy": 90,
    "basePower": 140,
    "category": "Special",
    "name": "Llama Gélida",
    "pp": 5,
    "priority": 0,
    "flags": {
      "charge": 1,
      "protect": 1,
      "mirror": 1,
      "nosleeptalk": 1,
      "failinstruct": 1
    },
    "secondary": {
      "chance": 30,
      "status": "brn"
    },
    "target": "normal",
    "type": "Ice",
    "contestType": "Beautiful",
    "id": "iceburn",
    "description": "Ataca al objetivo en el segundo turno rodeándolo de un aire gélido. Puede causar quemaduras."
  },
  "icefang": {
    "num": 423,
    "accuracy": 95,
    "basePower": 65,
    "category": "Physical",
    "name": "Colmillo Hielo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bite": 1
    },
    "secondaries": [
      {
        "chance": 10,
        "status": "frz"
      },
      {
        "chance": 10,
        "volatileStatus": "flinch"
      }
    ],
    "target": "normal",
    "type": "Ice",
    "contestType": "Cool",
    "id": "icefang",
    "description": "El usuario muerde al objetivo con colmillos helados y puede hacer que se amedrente o se congele."
  },
  "icehammer": {
    "num": 665,
    "accuracy": 90,
    "basePower": 100,
    "category": "Physical",
    "name": "Martillo Hielo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1,
      "metronome": 1
    },
    "self": {
      "boosts": {
        "spe": -1
      }
    },
    "target": "normal",
    "type": "Ice",
    "contestType": "Tough",
    "id": "icehammer",
    "description": "Un terrible puño golpea al contrincante, pero la Velocidad del usuario se ve reducida."
  },
  "icepunch": {
    "num": 8,
    "accuracy": 100,
    "basePower": 75,
    "category": "Physical",
    "name": "Puño Hielo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "status": "frz"
    },
    "target": "normal",
    "type": "Ice",
    "contestType": "Beautiful",
    "id": "icepunch",
    "description": "Puñetazo helado que puede llegar a congelar."
  },
  "iceshard": {
    "num": 420,
    "accuracy": 100,
    "basePower": 40,
    "category": "Physical",
    "name": "Esquirla Helada",
    "pp": 30,
    "priority": 1,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Ice",
    "contestType": "Beautiful",
    "id": "iceshard",
    "description": "Crea bolas de hielo y las lanza a gran velocidad. Este movimiento tiene prioridad alta."
  },
  "icespinner": {
    "num": 861,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Pirueta Helada",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Ice",
    "id": "icespinner",
    "description": "Ataque físico de tipo Ice, potencia base 80."
  },
  "iciclecrash": {
    "num": 556,
    "accuracy": 90,
    "basePower": 85,
    "category": "Physical",
    "name": "Chuzos",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Ice",
    "contestType": "Beautiful",
    "id": "iciclecrash",
    "description": "Lanza grandes carámbanos. Puede amedrentar al objetivo."
  },
  "iciclespear": {
    "num": 333,
    "accuracy": 100,
    "basePower": 25,
    "category": "Physical",
    "name": "Carámbano",
    "pp": 30,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": [
      2,
      5
    ],
    "target": "normal",
    "type": "Ice",
    "zMove": {
      "basePower": 140
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Beautiful",
    "id": "iciclespear",
    "description": "Ataca lanzando de dos a cinco ráfagas consecutivas de carámbanos."
  },
  "icywind": {
    "num": 196,
    "accuracy": 95,
    "basePower": 55,
    "category": "Special",
    "name": "Viento Hielo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "wind": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "spe": -1
      }
    },
    "target": "allAdjacentFoes",
    "type": "Ice",
    "contestType": "Beautiful",
    "id": "icywind",
    "description": "Ataque con aire helado que baja la Velocidad de los rivales."
  },
  "imprison": {
    "num": 286,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Sellar",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "bypasssub": 1,
      "metronome": 1,
      "mustpressure": 1
    },
    "volatileStatus": "imprison",
    "condition": {
      "noCopy": true,
      "onFoeBeforeMovePriority": 4
    },
    "target": "self",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spd": 2
      }
    },
    "contestType": "Clever",
    "id": "imprison",
    "description": "Impide a los contrincantes usar ataques conocidos por el usuario durante el combate."
  },
  "incinerate": {
    "num": 510,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "name": "Calcinación",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "allAdjacentFoes",
    "type": "Fire",
    "contestType": "Tough",
    "id": "incinerate",
    "description": "Llamas que golpean a los objetivos adyacentes. Si estos llevan bayas o ciertos objetos, se quemarán y ya no se podrán usar."
  },
  "infernalparade": {
    "num": 844,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "name": "Marcha Espectral",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "status": "brn"
    },
    "target": "normal",
    "type": "Ghost",
    "id": "infernalparade",
    "description": "Ataque especial de tipo Ghost, potencia base 60 variable. 30% de probabilidad de causar quemadura.",
    "dynamicBasePower": true
  },
  "inferno": {
    "num": 517,
    "accuracy": 50,
    "basePower": 100,
    "category": "Special",
    "name": "Infierno",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "status": "brn"
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Beautiful",
    "id": "inferno",
    "description": "Ataca con una gran ráfaga de fuego que causa quemaduras."
  },
  "infernooverdrive": {
    "num": 640,
    "accuracy": true,
    "basePower": 1,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Hecatombe Pírica",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "firiumz",
    "target": "normal",
    "type": "Fire",
    "contestType": "Cool",
    "id": "infernooverdrive",
    "description": "Ataque físico de tipo Fire, potencia base 1."
  },
  "infestation": {
    "num": 611,
    "accuracy": 100,
    "basePower": 20,
    "category": "Special",
    "name": "Acoso",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "volatileStatus": "partiallytrapped",
    "target": "normal",
    "type": "Bug",
    "contestType": "Cute",
    "id": "infestation",
    "description": "Hostiga al objetivo durante cuatro o cinco turnos e impide que pueda huir mientras tanto."
  },
  "ingrain": {
    "num": 275,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Arraigo",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "nonsky": 1,
      "metronome": 1
    },
    "volatileStatus": "ingrain",
    "condition": {
      "onResidualOrder": 7
    },
    "target": "self",
    "type": "Grass",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Clever",
    "id": "ingrain",
    "description": "Echa raíces para recuperar PS en cada turno, pero impide el relevo."
  },
  "instruct": {
    "num": 689,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Mandato",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "bypasssub": 1,
      "allyanim": 1,
      "failinstruct": 1
    },
    "target": "normal",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spa": 1
      }
    },
    "contestType": "Clever",
    "id": "instruct",
    "description": "Fuerza al objetivo a repetir inmediatamente su último movimiento."
  },
  "iondeluge": {
    "num": 569,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Cortina Plasma",
    "pp": 25,
    "priority": 1,
    "flags": {
      "metronome": 1
    },
    "pseudoWeather": "iondeluge",
    "condition": {
      "duration": 1,
      "onModifyTypePriority": -2
    },
    "target": "all",
    "type": "Electric",
    "zMove": {
      "boost": {
        "spa": 1
      }
    },
    "contestType": "Beautiful",
    "id": "iondeluge",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "irondefense": {
    "num": 334,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Defensa Férrea",
    "pp": 15,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "def": 2
    },
    "target": "self",
    "type": "Steel",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Tough",
    "id": "irondefense",
    "description": "Fortalece el cuerpo como si fuera de hierro y sube mucho la Defensa."
  },
  "ironhead": {
    "num": 442,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Cabeza de Hierro",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Steel",
    "contestType": "Tough",
    "id": "ironhead",
    "description": "Ataca con su dura cabeza de hierro. Puede hacer que el objetivo se amedrente."
  },
  "irontail": {
    "num": 231,
    "accuracy": 75,
    "basePower": 100,
    "category": "Physical",
    "name": "Cola Férrea",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "boosts": {
        "def": -1
      }
    },
    "target": "normal",
    "type": "Steel",
    "contestType": "Cool",
    "id": "irontail",
    "description": "Ataca con una cola férrea y puede bajar la Defensa del objetivo."
  },
  "ivycudgel": {
    "num": 904,
    "accuracy": 100,
    "basePower": 100,
    "category": "Physical",
    "name": "Garrote Liana",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "critRatio": 2,
    "target": "normal",
    "type": "Grass",
    "id": "ivycudgel",
    "description": "Ataque físico de tipo Grass, potencia base 100. Tiene más probabilidad de asestar un golpe crítico."
  },
  "jawlock": {
    "num": 746,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Presa Maxilar",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bite": 1
    },
    "target": "normal",
    "type": "Dark",
    "id": "jawlock",
    "description": "Impide que tanto el atacante como el defensor puedan ser intercambiados hasta que uno de ellos se debilite o abandone el terreno de combate."
  },
  "jetpunch": {
    "num": 857,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "name": "Puño Jet",
    "pp": 15,
    "priority": 1,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1
    },
    "target": "normal",
    "type": "Water",
    "contestType": "Cool",
    "id": "jetpunch",
    "description": "Ataque físico de tipo Water, potencia base 60. Prioridad +1."
  },
  "judgment": {
    "num": 449,
    "accuracy": 100,
    "basePower": 100,
    "category": "Special",
    "name": "Sentencia",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Beautiful",
    "id": "judgment",
    "description": "Emite incontables haces de luz. El tipo del movimiento varía según la tabla que lleve el usuario."
  },
  "jumpkick": {
    "num": 26,
    "accuracy": 95,
    "basePower": 100,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Patada Salto",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "gravity": 1,
      "metronome": 1
    },
    "hasCrashDamage": true,
    "target": "normal",
    "type": "Fighting",
    "contestType": "Cool",
    "id": "jumpkick",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "junglehealing": {
    "num": 816,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Cura Selvática",
    "pp": 10,
    "priority": 0,
    "flags": {
      "heal": 1,
      "bypasssub": 1,
      "allyanim": 1
    },
    "target": "allies",
    "type": "Grass",
    "id": "junglehealing",
    "description": "Al entrar en plena armonía con la selva, el usuario cura problemas de estado y restaura PS no solo de sí mismo, sino también de los aliados presentes en el terreno."
  },
  "karatechop": {
    "num": 2,
    "accuracy": 100,
    "basePower": 50,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Golpe Kárate",
    "pp": 25,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "critRatio": 2,
    "target": "normal",
    "type": "Fighting",
    "contestType": "Tough",
    "id": "karatechop",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "kinesis": {
    "num": 134,
    "accuracy": 80,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Kinético",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "boosts": {
      "accuracy": -1
    },
    "target": "normal",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "evasion": 1
      }
    },
    "contestType": "Clever",
    "id": "kinesis",
    "description": "Dobla una cuchara para distraer al objetivo y bajar su nivel de Precisión."
  },
  "kingsshield": {
    "num": 588,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Escudo Real",
    "pp": 10,
    "priority": 4,
    "flags": {
      "noassist": 1,
      "failcopycat": 1,
      "failinstruct": 1
    },
    "stallingMove": true,
    "volatileStatus": "kingsshield",
    "condition": {
      "duration": 1,
      "onTryHitPriority": 3
    },
    "target": "self",
    "type": "Steel",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Cool",
    "id": "kingsshield",
    "description": "El usuario adopta una postura defensiva y se protege de cualquier daño. Reduce el Ataque de cualquier Pokémon con el que entre en contacto."
  },
  "knockoff": {
    "num": 282,
    "accuracy": 100,
    "basePower": 65,
    "category": "Physical",
    "name": "Desarme",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Dark",
    "contestType": "Clever",
    "id": "knockoff",
    "description": "Impide al objetivo usar el objeto que lleva durante el combate. La potencia del movimiento se multiplica si el objetivo lleva un objeto."
  },
  "kowtowcleave": {
    "num": 869,
    "accuracy": true,
    "basePower": 85,
    "category": "Physical",
    "name": "Genufendiente",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "slicing": 1
    },
    "target": "normal",
    "type": "Dark",
    "id": "kowtowcleave",
    "description": "Ataque físico de tipo Dark, potencia base 85."
  },
  "landswrath": {
    "num": 616,
    "accuracy": 100,
    "basePower": 90,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Fuerza Telúrica",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1
    },
    "target": "allAdjacentFoes",
    "type": "Ground",
    "zMove": {
      "basePower": 185
    },
    "contestType": "Beautiful",
    "id": "landswrath",
    "description": "Acumula energía de la corteza terrestre y la concentra contra los oponentes, dañándolos."
  },
  "laserfocus": {
    "num": 673,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Aguzar",
    "pp": 30,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "volatileStatus": "laserfocus",
    "condition": {
      "duration": 2
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "boost": {
        "atk": 1
      }
    },
    "contestType": "Cool",
    "id": "laserfocus",
    "description": "El usuario se concentra para que el siguiente ataque propine un golpe crítico."
  },
  "lashout": {
    "num": 808,
    "accuracy": 100,
    "basePower": 75,
    "category": "Physical",
    "name": "Desahogo",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Dark",
    "id": "lashout",
    "description": "Ataca al rival presa de la rabia. Si el usuario ha sufrido una reducción de características en ese turno, la potencia del movimiento se duplica."
  },
  "lastresort": {
    "num": 387,
    "accuracy": 100,
    "basePower": 140,
    "category": "Physical",
    "name": "Última Baza",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cute",
    "id": "lastresort",
    "description": "Este movimiento solo puede utilizarse tras haber usado al menos una vez todos los demás conocidos por el Pokémon."
  },
  "lastrespects": {
    "num": 854,
    "accuracy": 100,
    "basePower": 50,
    "category": "Physical",
    "name": "Homenaje Póstumo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Ghost",
    "id": "lastrespects",
    "description": "Ataque físico de tipo Ghost, potencia base 50 variable.",
    "dynamicBasePower": true
  },
  "lavaplume": {
    "num": 436,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Humareda",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "status": "brn"
    },
    "target": "allAdjacent",
    "type": "Fire",
    "contestType": "Tough",
    "id": "lavaplume",
    "description": "Un infierno de llamas daña a los Pokémon adyacentes en combate. Puede quemar."
  },
  "leafage": {
    "num": 670,
    "accuracy": 100,
    "basePower": 40,
    "category": "Physical",
    "name": "Follaje",
    "pp": 40,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Grass",
    "contestType": "Tough",
    "id": "leafage",
    "description": "Ataque físico de tipo Grass, potencia base 40."
  },
  "leafblade": {
    "num": 348,
    "accuracy": 100,
    "basePower": 90,
    "category": "Physical",
    "name": "Hoja Aguda",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "slicing": 1
    },
    "critRatio": 2,
    "target": "normal",
    "type": "Grass",
    "contestType": "Cool",
    "id": "leafblade",
    "description": "Acuchilla con una hoja fina. Suele dar un golpe crítico."
  },
  "leafstorm": {
    "num": 437,
    "accuracy": 90,
    "basePower": 130,
    "category": "Special",
    "name": "Lluevehojas",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "self": {
      "boosts": {
        "spa": -2
      }
    },
    "target": "normal",
    "type": "Grass",
    "contestType": "Beautiful",
    "id": "leafstorm",
    "description": "Envuelve al objetivo con una lluvia de hojas afiladas, pero reduce mucho su Ataque Especial."
  },
  "leaftornado": {
    "num": 536,
    "accuracy": 90,
    "basePower": 65,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Ciclón de Hojas",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 50,
      "boosts": {
        "accuracy": -1
      }
    },
    "target": "normal",
    "type": "Grass",
    "contestType": "Cool",
    "id": "leaftornado",
    "description": "Tritura con afiladas hojas y puede bajar la Precisión del objetivo."
  },
  "leechlife": {
    "num": 141,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Chupavidas",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "heal": 1,
      "metronome": 1
    },
    "drain": [
      1,
      2
    ],
    "target": "normal",
    "type": "Bug",
    "contestType": "Clever",
    "id": "leechlife",
    "description": "Restaura al usuario la mitad del daño causado al objetivo."
  },
  "leechseed": {
    "num": 73,
    "accuracy": 90,
    "basePower": 0,
    "category": "Status",
    "name": "Drenadoras",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "volatileStatus": "leechseed",
    "condition": {
      "onResidualOrder": 8
    },
    "target": "normal",
    "type": "Grass",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Clever",
    "id": "leechseed",
    "description": "Planta semillas que absorben PS del objetivo en cada turno y que le sirven para recuperarse."
  },
  "leer": {
    "num": 43,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Malicioso",
    "pp": 30,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "boosts": {
      "def": -1
    },
    "target": "allAdjacentFoes",
    "type": "Normal",
    "zMove": {
      "boost": {
        "atk": 1
      }
    },
    "contestType": "Cool",
    "id": "leer",
    "description": "Intimida a los rivales para bajar su Defensa."
  },
  "letssnuggleforever": {
    "num": 726,
    "accuracy": true,
    "basePower": 190,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Somanta Amistosa",
    "pp": 1,
    "priority": 0,
    "flags": {
      "contact": 1
    },
    "isZ": "mimikiumz",
    "target": "normal",
    "type": "Fairy",
    "contestType": "Cool",
    "id": "letssnuggleforever",
    "description": "Ataque físico de tipo Fairy, potencia base 190."
  },
  "lick": {
    "num": 122,
    "accuracy": 100,
    "basePower": 30,
    "category": "Physical",
    "name": "Lengüetazo",
    "pp": 30,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "status": "par"
    },
    "target": "normal",
    "type": "Ghost",
    "contestType": "Cute",
    "id": "lick",
    "description": "Una lengua ataca al objetivo. Puede causar parálisis."
  },
  "lifedew": {
    "num": 791,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Gota Vital",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "heal": 1,
      "bypasssub": 1
    },
    "heal": [
      1,
      4
    ],
    "target": "allies",
    "type": "Water",
    "id": "lifedew",
    "description": "Vierte un agua misteriosa y balsámica que restaura tanto sus propios PS como los de aquellos aliados presentes en el terreno de combate."
  },
  "lightofruin": {
    "num": 617,
    "accuracy": 90,
    "basePower": 140,
    "category": "Special",
    "isNonstandard": "Past",
    "tags": [
      "Past Unobtainable"
    ],
    "name": "Luz Aniquiladora",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "recoil": [
      1,
      2
    ],
    "target": "normal",
    "type": "Fairy",
    "contestType": "Beautiful",
    "id": "lightofruin",
    "description": "El usuario emplea el poder de la Flor Eterna para lanzar un potente rayo de luz, pero sufre bastante daño al hacerlo."
  },
  "lightscreen": {
    "num": 113,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Pantalla de Luz",
    "pp": 30,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "sideCondition": "lightscreen",
    "condition": {
      "duration": 5,
      "onSideResidualOrder": 26,
      "onSideResidualSubOrder": 2
    },
    "target": "allySide",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Beautiful",
    "id": "lightscreen",
    "description": "Pared de luz que reduce durante cinco turnos el daño producido por los ataques especiales."
  },
  "lightthatburnsthesky": {
    "num": 723,
    "accuracy": true,
    "basePower": 200,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Fotodestrucción Apocalíptica",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "ignoreAbility": true,
    "isZ": "ultranecroziumz",
    "target": "normal",
    "type": "Psychic",
    "contestType": "Cool",
    "id": "lightthatburnsthesky",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "liquidation": {
    "num": 710,
    "accuracy": 100,
    "basePower": 85,
    "category": "Physical",
    "name": "Hidroariete",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 20,
      "boosts": {
        "def": -1
      }
    },
    "target": "normal",
    "type": "Water",
    "contestType": "Cool",
    "id": "liquidation",
    "description": "Ataca golpeando gracias a la fuerza del agua. También puede reducir la Defensa del objetivo."
  },
  "lockon": {
    "num": 199,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Fijar Blanco",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "condition": {
      "noCopy": true,
      "duration": 2,
      "onSourceInvulnerabilityPriority": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Clever",
    "id": "lockon",
    "description": "Fija el blanco para que el siguiente ataque no falle."
  },
  "lovelykiss": {
    "num": 142,
    "accuracy": 75,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Beso Amoroso",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "status": "slp",
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Beautiful",
    "id": "lovelykiss",
    "description": "Movimiento de estado de tipo Normal. Puede causar sueño. Precisión: 75%."
  },
  "lowkick": {
    "num": 67,
    "accuracy": 100,
    "basePower": 0,
    "category": "Physical",
    "name": "Patada Baja",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Fighting",
    "zMove": {
      "basePower": 160
    },
    "contestType": "Tough",
    "id": "lowkick",
    "description": "Patada baja que derriba al oponente. Cuanto más pesa el objetivo, más daño le causa.",
    "dynamicBasePower": true
  },
  "lowsweep": {
    "num": 490,
    "accuracy": 100,
    "basePower": 65,
    "category": "Physical",
    "name": "Puntapié",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "spe": -1
      }
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Clever",
    "id": "lowsweep",
    "description": "Ataque rápido dirigido a los pies del objetivo que le hace perder Velocidad."
  },
  "luckychant": {
    "num": 381,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Conjuro",
    "pp": 30,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "sideCondition": "luckychant",
    "condition": {
      "duration": 5,
      "onCriticalHit": false,
      "onSideResidualOrder": 26,
      "onSideResidualSubOrder": 6
    },
    "target": "allySide",
    "type": "Normal",
    "zMove": {
      "boost": {
        "evasion": 1
      }
    },
    "contestType": "Cute",
    "id": "luckychant",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "luminacrash": {
    "num": 855,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Fotocolisión",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "spd": -2
      }
    },
    "target": "normal",
    "type": "Psychic",
    "id": "luminacrash",
    "description": "Ataque especial de tipo Psychic, potencia base 80."
  },
  "lunarblessing": {
    "num": 849,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Plegaria Lunar",
    "pp": 5,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "heal": 1,
      "metronome": 1
    },
    "target": "allies",
    "type": "Psychic",
    "id": "lunarblessing",
    "description": "Movimiento de estado de tipo Psychic."
  },
  "lunardance": {
    "num": 461,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Danza Lunar",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "dance": 1,
      "heal": 1,
      "metronome": 1
    },
    "selfdestruct": "ifHit",
    "slotCondition": "lunardance",
    "condition": {},
    "target": "self",
    "type": "Psychic",
    "contestType": "Beautiful",
    "id": "lunardance",
    "description": "El usuario se debilita, pero el Pokémon que lo sustituye recupera su estado, los PS y los PP."
  },
  "lunge": {
    "num": 679,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Plancha",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "atk": -1
      }
    },
    "target": "normal",
    "type": "Bug",
    "contestType": "Cute",
    "id": "lunge",
    "description": "Ataca al oponente abalanzándose sobre él con todas sus fuerzas y reduce su Ataque."
  },
  "lusterpurge": {
    "num": 295,
    "accuracy": 100,
    "basePower": 95,
    "category": "Special",
    "name": "Resplandor",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 50,
      "boosts": {
        "spd": -1
      }
    },
    "target": "normal",
    "type": "Psychic",
    "contestType": "Clever",
    "id": "lusterpurge",
    "description": "Fogonazo de luz que puede bajar la Defensa Especial del objetivo."
  },
  "machpunch": {
    "num": 183,
    "accuracy": 100,
    "basePower": 40,
    "category": "Physical",
    "name": "Ultrapuño",
    "pp": 30,
    "priority": 1,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Cool",
    "id": "machpunch",
    "description": "Puñetazo de velocidad fulminante. Este movimiento tiene prioridad alta."
  },
  "magicalleaf": {
    "num": 345,
    "accuracy": true,
    "basePower": 60,
    "category": "Special",
    "name": "Hoja Mágica",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Grass",
    "contestType": "Beautiful",
    "id": "magicalleaf",
    "description": "Ataque especial de tipo Grass, potencia base 60."
  },
  "magicaltorque": {
    "num": 900,
    "accuracy": 100,
    "basePower": 100,
    "category": "Physical",
    "isNonstandard": "Unobtainable",
    "name": "Feerichoque",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "failencore": 1,
      "failmefirst": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1,
      "nosketch": 1
    },
    "secondary": {
      "chance": 30,
      "volatileStatus": "confusion"
    },
    "target": "normal",
    "type": "Fairy",
    "id": "magicaltorque",
    "description": "Ataque físico de tipo Fairy, potencia base 100."
  },
  "magiccoat": {
    "num": 277,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Capa Mágica",
    "pp": 15,
    "priority": 4,
    "flags": {
      "metronome": 1
    },
    "volatileStatus": "magiccoat",
    "condition": {
      "duration": 1,
      "onTryHitPriority": 2
    },
    "target": "self",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spd": 2
      }
    },
    "contestType": "Beautiful",
    "id": "magiccoat",
    "description": "Barrera capaz de devolver al agresor movimientos como Drenadoras y otros que alteran el estado o las características."
  },
  "magicpowder": {
    "num": 750,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Polvo Mágico",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1,
      "powder": 1
    },
    "target": "normal",
    "type": "Psychic",
    "id": "magicpowder",
    "description": "Cubre al objetivo con unos polvos mágicos que le hacen adquirir el tipo Psíquico."
  },
  "magicroom": {
    "num": 478,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Zona Mágica",
    "pp": 10,
    "priority": 0,
    "flags": {
      "mirror": 1,
      "metronome": 1
    },
    "pseudoWeather": "magicroom",
    "condition": {
      "duration": 5,
      "onFieldResidualOrder": 27,
      "onFieldResidualSubOrder": 6
    },
    "target": "all",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Clever",
    "id": "magicroom",
    "description": "Crea un espacio misterioso que inutiliza todos los objetos de los Pokémon durante cinco turnos."
  },
  "magmastorm": {
    "num": 463,
    "accuracy": 75,
    "basePower": 100,
    "category": "Special",
    "name": "Lluvia Ígnea",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "volatileStatus": "partiallytrapped",
    "target": "normal",
    "type": "Fire",
    "contestType": "Tough",
    "id": "magmastorm",
    "description": "El objetivo queda atrapado en una tormenta de fuego que dura de cuatro a cinco turnos."
  },
  "magnetbomb": {
    "num": 443,
    "accuracy": true,
    "basePower": 60,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Bomba Imán",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "target": "normal",
    "type": "Steel",
    "contestType": "Cool",
    "id": "magnetbomb",
    "description": "Ataque físico de tipo Steel, potencia base 60."
  },
  "magneticflux": {
    "num": 602,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Aura Magnética",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "distance": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "target": "allySide",
    "type": "Electric",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Clever",
    "id": "magneticflux",
    "description": "Manipula el campo magnético y logra aumentar la Defensa y la Defensa Especial de los Pokémon aliados que cuenten con las habilidades Más y Menos."
  },
  "magnetrise": {
    "num": 393,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Levitón",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "gravity": 1,
      "metronome": 1
    },
    "volatileStatus": "magnetrise",
    "condition": {
      "duration": 5,
      "onResidualOrder": 18
    },
    "target": "self",
    "type": "Electric",
    "zMove": {
      "boost": {
        "evasion": 1
      }
    },
    "contestType": "Clever",
    "id": "magnetrise",
    "description": "Levita gracias a un campo magnético generado por electricidad durante cinco turnos."
  },
  "magnitude": {
    "num": 222,
    "accuracy": 100,
    "basePower": 0,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Magnitud",
    "pp": 30,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1
    },
    "target": "allAdjacent",
    "type": "Ground",
    "zMove": {
      "basePower": 140
    },
    "maxMove": {
      "basePower": 140
    },
    "contestType": "Tough",
    "id": "magnitude",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "makeitrain": {
    "num": 874,
    "accuracy": 100,
    "basePower": 120,
    "category": "Special",
    "name": "Fiebre Dorada",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "self": {
      "boosts": {
        "spa": -1
      }
    },
    "target": "allAdjacentFoes",
    "type": "Steel",
    "contestType": "Beautiful",
    "id": "makeitrain",
    "description": "Ataque especial de tipo Steel, potencia base 120. Modifica estadísticas: Ataque especial -1."
  },
  "maliciousmoonsault": {
    "num": 696,
    "accuracy": true,
    "basePower": 180,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Hiperplancha Oscura",
    "pp": 1,
    "priority": 0,
    "flags": {
      "contact": 1,
      "minimize": 1
    },
    "isZ": "inciniumz",
    "target": "normal",
    "type": "Dark",
    "contestType": "Cool",
    "id": "maliciousmoonsault",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "malignantchain": {
    "num": 919,
    "accuracy": 100,
    "basePower": 100,
    "category": "Special",
    "name": "Cadena Virulenta",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 50,
      "status": "tox"
    },
    "target": "normal",
    "type": "Poison",
    "id": "malignantchain",
    "description": "Ataque especial de tipo Poison, potencia base 100. 50% de probabilidad de causar envenenamiento grave."
  },
  "matblock": {
    "num": 561,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Escudo Tatami",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "nonsky": 1,
      "noassist": 1,
      "failcopycat": 1
    },
    "stallingMove": true,
    "sideCondition": "matblock",
    "condition": {
      "duration": 1,
      "onTryHitPriority": 3
    },
    "target": "allySide",
    "type": "Fighting",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Cool",
    "id": "matblock",
    "description": "El usuario usa un tatami para escudarse de los ataques enemigos. Protege también a los aliados. No funciona contra movimientos de estado."
  },
  "matchagotcha": {
    "num": 902,
    "accuracy": 90,
    "basePower": 80,
    "category": "Special",
    "name": "Cañón Batidor",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "defrost": 1,
      "heal": 1,
      "metronome": 1
    },
    "drain": [
      1,
      2
    ],
    "thawsTarget": true,
    "secondary": {
      "chance": 20,
      "status": "brn"
    },
    "target": "allAdjacentFoes",
    "type": "Grass",
    "id": "matchagotcha",
    "description": "Ataque especial de tipo Grass, potencia base 80. Recupera PS equivalentes a 50% del daño causado. 20% de probabilidad de causar quemadura. Precisión: 90%."
  },
  "maxairstream": {
    "num": 766,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Maxiciclón",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": true,
    "self": {},
    "target": "adjacentFoe",
    "type": "Flying",
    "contestType": "Cool",
    "id": "maxairstream",
    "description": "Ataque de tipo Volador ejecutado por un Pokémon Dinamax. Aumenta la Velocidad de tu bando."
  },
  "maxdarkness": {
    "num": 772,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Maxisombra",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": true,
    "self": {},
    "target": "adjacentFoe",
    "type": "Dark",
    "contestType": "Cool",
    "id": "maxdarkness",
    "description": "Ataque de tipo Siniestro ejecutado por un Pokémon Dinamax. Reduce la Defensa Especial del objetivo."
  },
  "maxflare": {
    "num": 757,
    "accuracy": true,
    "basePower": 100,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Maxignición",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": true,
    "self": {},
    "target": "adjacentFoe",
    "type": "Fire",
    "contestType": "Cool",
    "id": "maxflare",
    "description": "Ataque de tipo Fuego ejecutado por un Pokémon Dinamax. Hace que se intensifique el efecto del sol durante cinco turnos."
  },
  "maxflutterby": {
    "num": 758,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Maxinsecto",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": true,
    "self": {},
    "target": "adjacentFoe",
    "type": "Bug",
    "contestType": "Cool",
    "id": "maxflutterby",
    "description": "Ataque de tipo Bicho ejecutado por un Pokémon Dinamax. Reduce el Ataque Especial del objetivo."
  },
  "maxgeyser": {
    "num": 765,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Maxichorro",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": true,
    "self": {},
    "target": "adjacentFoe",
    "type": "Water",
    "contestType": "Cool",
    "id": "maxgeyser",
    "description": "Ataque de tipo Agua ejecutado por un Pokémon Dinamax. Desata un aguacero que dura cinco turnos."
  },
  "maxguard": {
    "num": 743,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Maxibarrera",
    "pp": 10,
    "priority": 4,
    "flags": {},
    "isMax": true,
    "stallingMove": true,
    "volatileStatus": "maxguard",
    "condition": {
      "duration": 1,
      "onTryHitPriority": 3
    },
    "target": "self",
    "type": "Normal",
    "contestType": "Cool",
    "id": "maxguard",
    "description": "Frena todos los ataques, pero puede fallar si se usa repetidamente."
  },
  "maxhailstorm": {
    "num": 763,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Maxihelada",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": true,
    "self": {},
    "target": "adjacentFoe",
    "type": "Ice",
    "contestType": "Cool",
    "id": "maxhailstorm",
    "description": "Ataque de tipo Hielo ejecutado por un Pokémon Dinamax. Crea una tormenta de granizo que dura cinco turnos."
  },
  "maxknuckle": {
    "num": 761,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Maxipuño",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": true,
    "self": {},
    "target": "adjacentFoe",
    "type": "Fighting",
    "contestType": "Cool",
    "id": "maxknuckle",
    "description": "Ataque de tipo Lucha ejecutado por un Pokémon Dinamax. Aumenta el Ataque de tu bando."
  },
  "maxlightning": {
    "num": 759,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Maxitormenta",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": true,
    "self": {},
    "target": "adjacentFoe",
    "type": "Electric",
    "contestType": "Cool",
    "id": "maxlightning",
    "description": "Ataque de tipo Eléctrico ejecutado por un Pokémon Dinamax. Crea un campo eléctrico durante cinco turnos."
  },
  "maxmindstorm": {
    "num": 769,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Maxionda",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": true,
    "self": {},
    "target": "adjacentFoe",
    "type": "Psychic",
    "contestType": "Cool",
    "id": "maxmindstorm",
    "description": "Ataque de tipo Psíquico ejecutado por un Pokémon Dinamax. Crea un campo psíquico durante cinco turnos."
  },
  "maxooze": {
    "num": 764,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Maxiácido",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": true,
    "self": {},
    "target": "adjacentFoe",
    "type": "Poison",
    "contestType": "Cool",
    "id": "maxooze",
    "description": "Ataque de tipo Veneno ejecutado por un Pokémon Dinamax. Aumenta el Ataque Especial de tu bando."
  },
  "maxovergrowth": {
    "num": 773,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Maxiflora",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": true,
    "self": {},
    "target": "adjacentFoe",
    "type": "Grass",
    "contestType": "Cool",
    "id": "maxovergrowth",
    "description": "Ataque de tipo Planta ejecutado por un Pokémon Dinamax. Crea un campo de hierba durante cinco turnos."
  },
  "maxphantasm": {
    "num": 762,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Maxiespectro",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": true,
    "self": {},
    "target": "adjacentFoe",
    "type": "Ghost",
    "contestType": "Cool",
    "id": "maxphantasm",
    "description": "Ataque de tipo Fantasma ejecutado por un Pokémon Dinamax. Reduce la Defensa de los rivales."
  },
  "maxquake": {
    "num": 771,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Maxitemblor",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": true,
    "self": {},
    "target": "adjacentFoe",
    "type": "Ground",
    "contestType": "Cool",
    "id": "maxquake",
    "description": "Ataque de tipo Tierra ejecutado por un Pokémon Dinamax. Aumenta la Defensa Especial de tu bando."
  },
  "maxrockfall": {
    "num": 770,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Maxilito",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": true,
    "self": {},
    "target": "adjacentFoe",
    "type": "Rock",
    "contestType": "Cool",
    "id": "maxrockfall",
    "description": "Ataque de tipo Roca ejecutado por un Pokémon Dinamax. Levanta una tormenta de arena que dura cinco turnos."
  },
  "maxstarfall": {
    "num": 767,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Maxiestela",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": true,
    "self": {},
    "target": "adjacentFoe",
    "type": "Fairy",
    "contestType": "Cool",
    "id": "maxstarfall",
    "description": "Ataque de tipo Hada ejecutado por un Pokémon Dinamax. Crea un campo de niebla durante cinco turnos."
  },
  "maxsteelspike": {
    "num": 774,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Maximetal",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": true,
    "self": {},
    "target": "adjacentFoe",
    "type": "Steel",
    "contestType": "Cool",
    "id": "maxsteelspike",
    "description": "Ataque de tipo Acero ejecutado por un Pokémon Dinamax. Aumenta la Defensa de tu bando."
  },
  "maxstrike": {
    "num": 760,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Maxiataque",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": true,
    "self": {},
    "target": "adjacentFoe",
    "type": "Normal",
    "contestType": "Cool",
    "id": "maxstrike",
    "description": "Ataque de tipo Normal ejecutado por un Pokémon Dinamax. Reduce la Velocidad del objetivo."
  },
  "maxwyrmwind": {
    "num": 768,
    "accuracy": true,
    "basePower": 10,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Maxidraco",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "isMax": true,
    "self": {},
    "target": "adjacentFoe",
    "type": "Dragon",
    "contestType": "Cool",
    "id": "maxwyrmwind",
    "description": "Ataque de tipo Dragón ejecutado por un Pokémon Dinamax. Reduce el Ataque del objetivo."
  },
  "meanlook": {
    "num": 212,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Mal de Ojo",
    "pp": 5,
    "priority": 0,
    "flags": {
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Beautiful",
    "id": "meanlook",
    "description": "Mal de ojo que impide al objetivo huir del combate."
  },
  "meditate": {
    "num": 96,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Meditación",
    "pp": 40,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": 1
    },
    "target": "self",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "atk": 1
      }
    },
    "contestType": "Beautiful",
    "id": "meditate",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "mefirst": {
    "num": 382,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Yo Primero",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "bypasssub": 1,
      "failencore": 1,
      "failmefirst": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1
    },
    "condition": {
      "duration": 1,
      "onBasePowerPriority": 12
    },
    "callsMove": true,
    "target": "adjacentFoe",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spe": 2
      }
    },
    "contestType": "Clever",
    "id": "mefirst",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "megadrain": {
    "num": 72,
    "accuracy": 100,
    "basePower": 40,
    "category": "Special",
    "name": "Megaagotar",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "heal": 1,
      "metronome": 1
    },
    "drain": [
      1,
      2
    ],
    "target": "normal",
    "type": "Grass",
    "zMove": {
      "basePower": 120
    },
    "contestType": "Clever",
    "id": "megadrain",
    "description": "Un ataque que absorbe nutrientes. Quien lo usa recupera la mitad de los PS del daño que produce."
  },
  "megahorn": {
    "num": 224,
    "accuracy": 85,
    "basePower": 120,
    "category": "Physical",
    "name": "Megacuerno",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Bug",
    "contestType": "Cool",
    "id": "megahorn",
    "description": "Ataque físico de tipo Bug, potencia base 120. Precisión: 85%."
  },
  "megakick": {
    "num": 25,
    "accuracy": 75,
    "basePower": 120,
    "category": "Physical",
    "name": "Megapatada",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cool",
    "id": "megakick",
    "description": "Ataque físico de tipo Normal, potencia base 120. Precisión: 75%."
  },
  "megapunch": {
    "num": 5,
    "accuracy": 85,
    "basePower": 80,
    "category": "Physical",
    "name": "Megapuño",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "megapunch",
    "description": "Ataque físico de tipo Normal, potencia base 80. Precisión: 85%."
  },
  "memento": {
    "num": 262,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Legado",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": -2,
      "spa": -2
    },
    "selfdestruct": "ifHit",
    "target": "normal",
    "type": "Dark",
    "zMove": {
      "effect": "healreplacement"
    },
    "contestType": "Tough",
    "id": "memento",
    "description": "El usuario se debilita, pero baja mucho tanto el Ataque como el Ataque Especial del objetivo."
  },
  "menacingmoonrazemaelstrom": {
    "num": 725,
    "accuracy": true,
    "basePower": 200,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Deflagración Lunar",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "lunaliumz",
    "ignoreAbility": true,
    "target": "normal",
    "type": "Ghost",
    "contestType": "Cool",
    "id": "menacingmoonrazemaelstrom",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "metalburst": {
    "num": 368,
    "accuracy": 100,
    "basePower": 0,
    "category": "Physical",
    "name": "Represión Metal",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "failmefirst": 1
    },
    "target": "scripted",
    "type": "Steel",
    "contestType": "Cool",
    "id": "metalburst",
    "description": "Devuelve al rival el último ataque recibido, pero con mucha más fuerza."
  },
  "metalclaw": {
    "num": 232,
    "accuracy": 95,
    "basePower": 50,
    "category": "Physical",
    "name": "Garra Metal",
    "pp": 35,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "self": {
        "boosts": {
          "atk": 1
        }
      }
    },
    "target": "normal",
    "type": "Steel",
    "contestType": "Cool",
    "id": "metalclaw",
    "description": "Ataque con garras de acero que puede aumentar el Ataque del usuario."
  },
  "metalsound": {
    "num": 319,
    "accuracy": 85,
    "basePower": 0,
    "category": "Status",
    "name": "Eco Metálico",
    "pp": 40,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "boosts": {
      "spd": -2
    },
    "target": "normal",
    "type": "Steel",
    "zMove": {
      "boost": {
        "spa": 1
      }
    },
    "contestType": "Clever",
    "id": "metalsound",
    "description": "Horrible chirrido metálico que baja mucho la Defensa Especial del objetivo."
  },
  "meteorassault": {
    "num": 794,
    "accuracy": 100,
    "basePower": 150,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Asalto Estelar",
    "pp": 5,
    "priority": 0,
    "flags": {
      "recharge": 1,
      "protect": 1,
      "mirror": 1,
      "failinstruct": 1
    },
    "self": {
      "volatileStatus": "mustrecharge"
    },
    "target": "normal",
    "type": "Fighting",
    "id": "meteorassault",
    "description": "El usuario agita violentamente su grueso puerro para atacar, pero el mareo que le provocan las sacudidas le impide moverse en el turno siguiente."
  },
  "meteorbeam": {
    "num": 800,
    "accuracy": 90,
    "basePower": 120,
    "category": "Special",
    "name": "Rayo Meteórico",
    "pp": 10,
    "priority": 0,
    "flags": {
      "charge": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Rock",
    "id": "meteorbeam",
    "description": "El usuario dedica el primer turno a aumentar su Ataque Especial acumulando energía cósmica y lanza su ofensiva contra el objetivo en el segundo."
  },
  "meteormash": {
    "num": 309,
    "accuracy": 90,
    "basePower": 90,
    "category": "Physical",
    "name": "Puño Meteoro",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 20,
      "self": {
        "boosts": {
          "atk": 1
        }
      }
    },
    "target": "normal",
    "type": "Steel",
    "contestType": "Cool",
    "id": "meteormash",
    "description": "Puñetazo que impacta como un meteorito y puede subir el Ataque del agresor."
  },
  "metronome": {
    "num": 118,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Metrónomo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "failencore": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1
    },
    "callsMove": true,
    "target": "self",
    "type": "Normal",
    "contestType": "Cute",
    "id": "metronome",
    "description": "Mueve un dedo y estimula su cerebro para usar al azar casi cualquier movimiento."
  },
  "mightycleave": {
    "num": 910,
    "accuracy": 100,
    "basePower": 95,
    "category": "Physical",
    "name": "Filo Potente",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "mirror": 1,
      "metronome": 1,
      "slicing": 1
    },
    "target": "normal",
    "type": "Rock",
    "id": "mightycleave",
    "description": "Ataque físico de tipo Rock, potencia base 95."
  },
  "milkdrink": {
    "num": 208,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Batido",
    "pp": 5,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "heal": 1,
      "metronome": 1
    },
    "heal": [
      1,
      2
    ],
    "target": "self",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Cute",
    "id": "milkdrink",
    "description": "Restaura la mitad de los PS máximos del usuario."
  },
  "mimic": {
    "num": 102,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Mimético",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "bypasssub": 1,
      "allyanim": 1,
      "failencore": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "accuracy": 1
      }
    },
    "contestType": "Cute",
    "id": "mimic",
    "description": "Copia el último movimiento usado por el objetivo, y puede utilizarlo mientras esté en el combate."
  },
  "mindblown": {
    "num": 720,
    "accuracy": 100,
    "basePower": 150,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Cabeza Sorpresa",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "mindBlownRecoil": true,
    "target": "allAdjacent",
    "type": "Fire",
    "contestType": "Cool",
    "id": "mindblown",
    "description": "El usuario hace explotar su cabeza para atacar a todos los Pokémon que se hallan a su alrededor, aunque también se hiere a sí mismo."
  },
  "mindreader": {
    "num": 170,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Telépata",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spa": 1
      }
    },
    "contestType": "Clever",
    "id": "mindreader",
    "description": "El usuario adivina los movimientos del objetivo para hacer que su siguiente ataque no falle."
  },
  "minimize": {
    "num": 107,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Reducción",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "volatileStatus": "minimize",
    "condition": {
      "noCopy": true
    },
    "boosts": {
      "evasion": 2
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Cute",
    "id": "minimize",
    "description": "El usuario mengua para aumentar mucho la Evasión."
  },
  "miracleeye": {
    "num": 357,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Gran Ojo",
    "pp": 40,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "volatileStatus": "miracleeye",
    "condition": {
      "noCopy": true
    },
    "target": "normal",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spa": 1
      }
    },
    "contestType": "Clever",
    "id": "miracleeye",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "mirrorcoat": {
    "num": 243,
    "accuracy": 100,
    "basePower": 0,
    "category": "Special",
    "name": "Manto Espejo",
    "pp": 20,
    "priority": -5,
    "flags": {
      "protect": 1,
      "failmefirst": 1,
      "noassist": 1
    },
    "condition": {
      "duration": 1,
      "noCopy": true,
      "onRedirectTargetPriority": -1
    },
    "target": "scripted",
    "type": "Psychic",
    "contestType": "Beautiful",
    "id": "mirrorcoat",
    "description": "Responde a un ataque especial ocasionando el doble del daño recibido."
  },
  "mirrormove": {
    "num": 119,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Espejo",
    "pp": 20,
    "priority": 0,
    "flags": {
      "failencore": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1
    },
    "callsMove": true,
    "target": "normal",
    "type": "Flying",
    "zMove": {
      "boost": {
        "atk": 2
      }
    },
    "contestType": "Clever",
    "id": "mirrormove",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "mirrorshot": {
    "num": 429,
    "accuracy": 85,
    "basePower": 65,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Disparo Espejo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "boosts": {
        "accuracy": -1
      }
    },
    "target": "normal",
    "type": "Steel",
    "contestType": "Beautiful",
    "id": "mirrorshot",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "mist": {
    "num": 54,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Neblina",
    "pp": 30,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "sideCondition": "mist",
    "condition": {
      "duration": 5,
      "onSideResidualOrder": 26,
      "onSideResidualSubOrder": 4
    },
    "target": "allySide",
    "type": "Ice",
    "zMove": {
      "effect": "heal"
    },
    "contestType": "Beautiful",
    "id": "mist",
    "description": "Rodea de fina niebla al usuario y protege las características de su equipo durante cinco turnos."
  },
  "mistball": {
    "num": 296,
    "accuracy": 100,
    "basePower": 95,
    "category": "Special",
    "name": "Bola Neblina",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "secondary": {
      "chance": 50,
      "boosts": {
        "spa": -1
      }
    },
    "target": "normal",
    "type": "Psychic",
    "contestType": "Clever",
    "id": "mistball",
    "description": "Banco de niebla que puede bajar el Ataque Especial del objetivo."
  },
  "mistyexplosion": {
    "num": 802,
    "accuracy": 100,
    "basePower": 100,
    "category": "Special",
    "name": "Bruma Explosiva",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "selfdestruct": "always",
    "target": "allAdjacent",
    "type": "Fairy",
    "id": "mistyexplosion",
    "description": "El usuario ataca a todos a su alrededor, pero se debilita de inmediato. La potencia del movimiento aumenta si el terreno está cubierto por un campo de niebla."
  },
  "mistyterrain": {
    "num": 581,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Campo de Niebla",
    "pp": 10,
    "priority": 0,
    "flags": {
      "nonsky": 1,
      "metronome": 1
    },
    "terrain": "mistyterrain",
    "condition": {
      "effectType": "Terrain",
      "duration": 5,
      "onBasePowerPriority": 6,
      "onFieldResidualOrder": 27,
      "onFieldResidualSubOrder": 7
    },
    "target": "all",
    "type": "Fairy",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Beautiful",
    "id": "mistyterrain",
    "description": "Durante cinco turnos, los Pokémon que están en el suelo no sufren problemas de estado y se reduce a la mitad el daño de los movimientos de tipo Dragón."
  },
  "moonblast": {
    "num": 585,
    "accuracy": 100,
    "basePower": 95,
    "category": "Special",
    "name": "Fuerza Lunar",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "boosts": {
        "spa": -1
      }
    },
    "target": "normal",
    "type": "Fairy",
    "contestType": "Beautiful",
    "id": "moonblast",
    "description": "Invoca el poder de la luna para atacar al objetivo. Puede disminuir el Ataque Especial del objetivo."
  },
  "moongeistbeam": {
    "num": 714,
    "accuracy": 100,
    "basePower": 100,
    "category": "Special",
    "name": "Rayo Umbrío",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "ignoreAbility": true,
    "target": "normal",
    "type": "Ghost",
    "contestType": "Cool",
    "id": "moongeistbeam",
    "description": "Ataca con un rayo misterioso que ignora la habilidad del objetivo."
  },
  "moonlight": {
    "num": 236,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Luz Lunar",
    "pp": 5,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "heal": 1,
      "metronome": 1
    },
    "target": "self",
    "type": "Fairy",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Beautiful",
    "id": "moonlight",
    "description": "Restaura PS del usuario. La cantidad varía según el tiempo que haga."
  },
  "morningsun": {
    "num": 234,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Sol Matinal",
    "pp": 5,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "heal": 1,
      "metronome": 1
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Beautiful",
    "id": "morningsun",
    "description": "Restaura PS del usuario. La cantidad varía según el tiempo que haga."
  },
  "mortalspin": {
    "num": 866,
    "accuracy": 100,
    "basePower": 30,
    "category": "Physical",
    "name": "Giro Mortífero",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "status": "psn"
    },
    "target": "allAdjacentFoes",
    "type": "Poison",
    "id": "mortalspin",
    "description": "Ataque físico de tipo Poison, potencia base 30."
  },
  "mountaingale": {
    "num": 836,
    "accuracy": 85,
    "basePower": 100,
    "category": "Physical",
    "name": "Viento Carámbano",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Ice",
    "id": "mountaingale",
    "description": "Ataque físico de tipo Ice, potencia base 100. Precisión: 85%."
  },
  "mudbomb": {
    "num": 426,
    "accuracy": 85,
    "basePower": 65,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Bomba Fango",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "secondary": {
      "chance": 30,
      "boosts": {
        "accuracy": -1
      }
    },
    "target": "normal",
    "type": "Ground",
    "contestType": "Cute",
    "id": "mudbomb",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "muddywater": {
    "num": 330,
    "accuracy": 85,
    "basePower": 90,
    "category": "Special",
    "name": "Agua Lodosa",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "boosts": {
        "accuracy": -1
      }
    },
    "target": "allAdjacentFoes",
    "type": "Water",
    "contestType": "Tough",
    "id": "muddywater",
    "description": "Ataque con agua lodosa que puede bajar la Precisión del equipo rival."
  },
  "mudshot": {
    "num": 341,
    "accuracy": 95,
    "basePower": 55,
    "category": "Special",
    "name": "Disparo Lodo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "spe": -1
      }
    },
    "target": "normal",
    "type": "Ground",
    "contestType": "Tough",
    "id": "mudshot",
    "description": "El usuario lanza lodo al objetivo y reduce su Velocidad."
  },
  "mudslap": {
    "num": 189,
    "accuracy": 100,
    "basePower": 20,
    "category": "Special",
    "name": "Bofetón Lodo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "accuracy": -1
      }
    },
    "target": "normal",
    "type": "Ground",
    "contestType": "Cute",
    "id": "mudslap",
    "description": "Echa lodo en la cara para bajar la Precisión."
  },
  "mudsport": {
    "num": 300,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Chapoteo Lodo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "nonsky": 1,
      "metronome": 1
    },
    "pseudoWeather": "mudsport",
    "condition": {
      "duration": 5,
      "onBasePowerPriority": 1,
      "onFieldResidualOrder": 27,
      "onFieldResidualSubOrder": 4
    },
    "target": "all",
    "type": "Ground",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Cute",
    "id": "mudsport",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "multiattack": {
    "num": 718,
    "accuracy": 100,
    "basePower": 120,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Multiataque",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "basePower": 185
    },
    "maxMove": {
      "basePower": 95
    },
    "contestType": "Tough",
    "id": "multiattack",
    "description": "El Pokémon se rodea de una potente energía con la que golpea al rival. El tipo del movimiento depende del disco que lleva el usuario."
  },
  "mysticalfire": {
    "num": 595,
    "accuracy": 100,
    "basePower": 75,
    "category": "Special",
    "name": "Llama Embrujada",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "spa": -1
      }
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Beautiful",
    "id": "mysticalfire",
    "description": "El usuario lanza por la boca una singular llama a gran temperatura con la que ataca a su oponente y baja su Ataque Especial."
  },
  "mysticalpower": {
    "num": 832,
    "accuracy": 90,
    "basePower": 70,
    "category": "Special",
    "name": "Poder Místico",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "self": {
        "boosts": {
          "spa": 1
        }
      }
    },
    "target": "normal",
    "type": "Psychic",
    "id": "mysticalpower",
    "description": "Ataque especial de tipo Psychic, potencia base 70. Precisión: 90%."
  },
  "nastyplot": {
    "num": 417,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Maquinación",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "spa": 2
    },
    "target": "self",
    "type": "Dark",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Clever",
    "id": "nastyplot",
    "description": "Estimula su cerebro pensando en cosas malas. Aumenta mucho el Ataque Especial."
  },
  "naturalgift": {
    "num": 363,
    "accuracy": 100,
    "basePower": 0,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Don Natural",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "basePower": 160
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Clever",
    "id": "naturalgift",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "naturepower": {
    "num": 267,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Adaptación",
    "pp": 20,
    "priority": 0,
    "flags": {
      "failencore": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1
    },
    "callsMove": true,
    "target": "normal",
    "type": "Normal",
    "contestType": "Beautiful",
    "id": "naturepower",
    "description": "Usa el poder de la naturaleza para atacar. Su efecto varía según el entorno de combate."
  },
  "naturesmadness": {
    "num": 717,
    "accuracy": 90,
    "basePower": 0,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Furia Natural",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Fairy",
    "contestType": "Tough",
    "id": "naturesmadness",
    "description": "Golpea al objetivo con la furia de la naturaleza y reduce sus PS a la mitad."
  },
  "needlearm": {
    "num": 302,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Brazo Pincho",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Grass",
    "contestType": "Clever",
    "id": "needlearm",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "neverendingnightmare": {
    "num": 636,
    "accuracy": true,
    "basePower": 1,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Presa Espectral",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "ghostiumz",
    "target": "normal",
    "type": "Ghost",
    "contestType": "Cool",
    "id": "neverendingnightmare",
    "description": "Ataque físico de tipo Ghost, potencia base 1."
  },
  "nightdaze": {
    "num": 539,
    "accuracy": 95,
    "basePower": 85,
    "category": "Special",
    "name": "Pulso Noche",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 40,
      "boosts": {
        "accuracy": -1
      }
    },
    "target": "normal",
    "type": "Dark",
    "contestType": "Cool",
    "id": "nightdaze",
    "description": "Ataca al objetivo con una onda siniestra. Puede bajar su Precisión."
  },
  "nightmare": {
    "num": 171,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Pesadilla",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "volatileStatus": "nightmare",
    "condition": {
      "noCopy": true,
      "onResidualOrder": 11
    },
    "target": "normal",
    "type": "Ghost",
    "zMove": {
      "boost": {
        "spa": 1
      }
    },
    "contestType": "Clever",
    "id": "nightmare",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "nightshade": {
    "num": 101,
    "accuracy": 100,
    "basePower": 0,
    "damage": "level",
    "category": "Special",
    "name": "Tinieblas",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Ghost",
    "contestType": "Clever",
    "id": "nightshade",
    "description": "Produce un espejismo ante el objetivo, que pierde tantos PS como nivel tenga el usuario."
  },
  "nightslash": {
    "num": 400,
    "accuracy": 100,
    "basePower": 70,
    "category": "Physical",
    "name": "Tajo Umbrío",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "slicing": 1
    },
    "critRatio": 2,
    "target": "normal",
    "type": "Dark",
    "contestType": "Cool",
    "id": "nightslash",
    "description": "Ataca al objetivo a la primera oportunidad. Suele ser crítico."
  },
  "nihillight": {
    "num": 920,
    "accuracy": 100,
    "basePower": 100,
    "category": "Special",
    "isNonstandard": "Future",
    "name": "Nihil Light",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "ignoreEvasion": true,
    "ignoreDefensive": true,
    "ignoreImmunity": {
      "Dragon": true
    },
    "target": "allAdjacentFoes",
    "type": "Dragon",
    "id": "nihillight",
    "description": "Ataque especial de tipo Dragon, potencia base 100."
  },
  "nobleroar": {
    "num": 568,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Rugido de Guerra",
    "pp": 30,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": -1,
      "spa": -1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Tough",
    "id": "nobleroar",
    "description": "Intimida a su oponente con un rugido de guerra, lo que hace que disminuyan tanto su Ataque como su Ataque Especial."
  },
  "noretreat": {
    "num": 748,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Bastión Final",
    "pp": 5,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "volatileStatus": "noretreat",
    "condition": {},
    "boosts": {
      "atk": 1,
      "def": 1,
      "spa": 1,
      "spd": 1,
      "spe": 1
    },
    "target": "self",
    "type": "Fighting",
    "id": "noretreat",
    "description": "El usuario aumenta todas sus características, pero ya no puede huir ni ser cambiado por otro."
  },
  "noxioustorque": {
    "num": 898,
    "accuracy": 100,
    "basePower": 100,
    "category": "Physical",
    "isNonstandard": "Unobtainable",
    "name": "Ponzochoque",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "failencore": 1,
      "failmefirst": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1,
      "nosketch": 1
    },
    "secondary": {
      "chance": 30,
      "status": "psn"
    },
    "target": "normal",
    "type": "Poison",
    "id": "noxioustorque",
    "description": "Ataque físico de tipo Poison, potencia base 100. 30% de probabilidad de causar envenenamiento."
  },
  "nuzzle": {
    "num": 609,
    "accuracy": 100,
    "basePower": 20,
    "category": "Physical",
    "name": "Moflete Estático",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "status": "par"
    },
    "target": "normal",
    "type": "Electric",
    "contestType": "Cute",
    "id": "nuzzle",
    "description": "Quien lo usa frota sus mofletes cargados de electricidad contra el objetivo y consigue paralizarlo."
  },
  "oblivionwing": {
    "num": 613,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Ala Mortífera",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "distance": 1,
      "heal": 1,
      "metronome": 1
    },
    "drain": [
      3,
      4
    ],
    "target": "any",
    "type": "Flying",
    "contestType": "Cool",
    "id": "oblivionwing",
    "description": "El usuario absorbe energía del objetivo y aumenta sus PS en una cantidad igual o superior a la mitad del daño infligido."
  },
  "obstruct": {
    "num": 792,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Obstrucción",
    "pp": 10,
    "priority": 4,
    "flags": {
      "failinstruct": 1
    },
    "stallingMove": true,
    "volatileStatus": "obstruct",
    "condition": {
      "duration": 1,
      "onTryHitPriority": 3
    },
    "target": "self",
    "type": "Dark",
    "id": "obstruct",
    "description": "Frena todos los ataques, pero puede fallar si se usa repetidamente. Reduce mucho la Defensa de quien ejecute un movimiento de contacto contra el usuario."
  },
  "oceanicoperetta": {
    "num": 697,
    "accuracy": true,
    "basePower": 195,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Sinfonía de la Diva Marina",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "primariumz",
    "target": "normal",
    "type": "Water",
    "contestType": "Cool",
    "id": "oceanicoperetta",
    "description": "Ataque especial de tipo Water, potencia base 195."
  },
  "octazooka": {
    "num": 190,
    "accuracy": 85,
    "basePower": 65,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Pulpocañón",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "secondary": {
      "chance": 50,
      "boosts": {
        "accuracy": -1
      }
    },
    "target": "normal",
    "type": "Water",
    "contestType": "Tough",
    "id": "octazooka",
    "description": "Dispara tinta a la cara. Puede bajar la Precisión."
  },
  "octolock": {
    "num": 753,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Octopresa",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "volatileStatus": "octolock",
    "condition": {
      "onResidualOrder": 14
    },
    "target": "normal",
    "type": "Fighting",
    "id": "octolock",
    "description": "Retiene al objetivo para impedir su huida, a la vez que reduce su Defensa y Defensa Especial cada turno."
  },
  "odorsleuth": {
    "num": 316,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Rastreo",
    "pp": 40,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "bypasssub": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "volatileStatus": "foresight",
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "atk": 1
      }
    },
    "contestType": "Clever",
    "id": "odorsleuth",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "ominouswind": {
    "num": 466,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Viento Aciago",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "self": {
        "boosts": {
          "atk": 1,
          "def": 1,
          "spa": 1,
          "spd": 1,
          "spe": 1
        }
      }
    },
    "target": "normal",
    "type": "Ghost",
    "contestType": "Beautiful",
    "id": "ominouswind",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "orderup": {
    "num": 856,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Oído Cocina",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1
    },
    "hasSheerForceBoost": true,
    "target": "normal",
    "type": "Dragon",
    "id": "orderup",
    "description": "Ataque físico de tipo Dragon, potencia base 80."
  },
  "originpulse": {
    "num": 618,
    "accuracy": 85,
    "basePower": 110,
    "category": "Special",
    "name": "Pulso Primigenio",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "pulse": 1
    },
    "target": "allAdjacentFoes",
    "type": "Water",
    "contestType": "Beautiful",
    "id": "originpulse",
    "description": "Ataca al objetivo con una infinidad de rayos de luz azulada."
  },
  "outrage": {
    "num": 200,
    "accuracy": 100,
    "basePower": 120,
    "category": "Physical",
    "name": "Enfado",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "failinstruct": 1
    },
    "self": {
      "volatileStatus": "lockedmove"
    },
    "target": "randomNormal",
    "type": "Dragon",
    "contestType": "Cool",
    "id": "outrage",
    "description": "Ataca de dos a tres turnos y acaba confundiendo al agresor."
  },
  "overdrive": {
    "num": 786,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Amplificador",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1
    },
    "target": "allAdjacentFoes",
    "type": "Electric",
    "id": "overdrive",
    "description": "El usuario rasguea la guitarra o el bajo para generar enormes vibraciones de intensa reverberación con las que ataca al objetivo."
  },
  "overheat": {
    "num": 315,
    "accuracy": 90,
    "basePower": 130,
    "category": "Special",
    "name": "Sofoco",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "self": {
      "boosts": {
        "spa": -2
      }
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Beautiful",
    "id": "overheat",
    "description": "Ataque en toda regla que baja mucho el Ataque Especial de quien lo usa."
  },
  "painsplit": {
    "num": 220,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Divide Dolor",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Clever",
    "id": "painsplit",
    "description": "Suma los PS del usuario a los del objetivo y los reparte a partes iguales."
  },
  "paraboliccharge": {
    "num": 570,
    "accuracy": 100,
    "basePower": 65,
    "category": "Special",
    "name": "Carga Parábola",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "heal": 1,
      "metronome": 1
    },
    "drain": [
      1,
      2
    ],
    "target": "allAdjacent",
    "type": "Electric",
    "contestType": "Clever",
    "id": "paraboliccharge",
    "description": "Inflige daño a todos los Pokémon a su alrededor. El usuario absorbe la mitad del daño producido para restaurar sus propios PS."
  },
  "partingshot": {
    "num": 575,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Última Palabra",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "selfSwitch": true,
    "target": "normal",
    "type": "Dark",
    "zMove": {
      "effect": "healreplacement"
    },
    "contestType": "Cool",
    "id": "partingshot",
    "description": "El usuario se cambia por otro Pokémon de su equipo, pero antes amedrenta a su oponente y hace que disminuyan su Ataque y Ataque Especial."
  },
  "payback": {
    "num": 371,
    "accuracy": 100,
    "basePower": 50,
    "category": "Physical",
    "name": "Vendetta",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Dark",
    "contestType": "Tough",
    "id": "payback",
    "description": "El usuario contraataca con el doble de fuerza si el objetivo usa un movimiento antes.",
    "dynamicBasePower": true
  },
  "payday": {
    "num": 6,
    "accuracy": 100,
    "basePower": 40,
    "category": "Physical",
    "name": "Día de Pago",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Clever",
    "id": "payday",
    "description": "Arroja monedas al objetivo y las recupera al final del combate."
  },
  "peck": {
    "num": 64,
    "accuracy": 100,
    "basePower": 35,
    "category": "Physical",
    "name": "Picotazo",
    "pp": 35,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "distance": 1,
      "metronome": 1
    },
    "target": "any",
    "type": "Flying",
    "contestType": "Cool",
    "id": "peck",
    "description": "Ataque físico de tipo Flying, potencia base 35."
  },
  "perishsong": {
    "num": 195,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Canto Mortal",
    "pp": 5,
    "priority": 0,
    "flags": {
      "sound": 1,
      "distance": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "condition": {
      "duration": 4,
      "onResidualOrder": 24
    },
    "target": "all",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Beautiful",
    "id": "perishsong",
    "description": "Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose."
  },
  "petalblizzard": {
    "num": 572,
    "accuracy": 100,
    "basePower": 90,
    "category": "Physical",
    "name": "Tormenta Floral",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "wind": 1
    },
    "target": "allAdjacent",
    "type": "Grass",
    "contestType": "Beautiful",
    "id": "petalblizzard",
    "description": "El usuario desata un intenso vendaval de pétalos que daña a los Pokémon a su alrededor."
  },
  "petaldance": {
    "num": 80,
    "accuracy": 100,
    "basePower": 120,
    "category": "Special",
    "name": "Danza Pétalo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "dance": 1,
      "metronome": 1,
      "failinstruct": 1
    },
    "self": {
      "volatileStatus": "lockedmove"
    },
    "target": "randomNormal",
    "type": "Grass",
    "contestType": "Beautiful",
    "id": "petaldance",
    "description": "Lanza pétalos de dos a tres turnos y acaba confundiendo al atacante."
  },
  "phantomforce": {
    "num": 566,
    "accuracy": 100,
    "basePower": 90,
    "category": "Physical",
    "name": "Golpe Fantasma",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "charge": 1,
      "mirror": 1,
      "metronome": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failinstruct": 1
    },
    "breaksProtect": true,
    "condition": {
      "duration": 2,
      "onInvulnerability": false
    },
    "target": "normal",
    "type": "Ghost",
    "contestType": "Cool",
    "id": "phantomforce",
    "description": "El usuario desaparece en el primer turno y ataca a su objetivo en el segundo. Permite acertar aunque el objetivo esté protegiéndose."
  },
  "photongeyser": {
    "num": 722,
    "accuracy": 100,
    "basePower": 100,
    "category": "Special",
    "name": "Géiser Fotónico",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "ignoreAbility": true,
    "target": "normal",
    "type": "Psychic",
    "contestType": "Cool",
    "id": "photongeyser",
    "description": "El usuario ataca con una gran columna de luz. Compara sus valores de Ataque y Ataque Especial para infligir daño con el más alto de los dos."
  },
  "pikapapow": {
    "num": 732,
    "accuracy": true,
    "basePower": 0,
    "category": "Special",
    "isNonstandard": "LGPE",
    "name": "Pikatormenta",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Electric",
    "contestType": "Cute",
    "id": "pikapapow",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente.",
    "dynamicBasePower": true
  },
  "pinmissile": {
    "num": 42,
    "accuracy": 95,
    "basePower": 25,
    "category": "Physical",
    "name": "Pin Misil",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": [
      2,
      5
    ],
    "target": "normal",
    "type": "Bug",
    "zMove": {
      "basePower": 140
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Cool",
    "id": "pinmissile",
    "description": "Lanza finas púas que hieren de dos a cinco veces."
  },
  "plasmafists": {
    "num": 721,
    "accuracy": 100,
    "basePower": 100,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Puños Plasma",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1
    },
    "pseudoWeather": "iondeluge",
    "target": "normal",
    "type": "Electric",
    "contestType": "Cool",
    "id": "plasmafists",
    "description": "El usuario ataca con puños cargados de electricidad. Convierte los movimientos de tipo Normal en movimientos de tipo Eléctrico."
  },
  "playnice": {
    "num": 589,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Camaradería",
    "pp": 20,
    "priority": 0,
    "flags": {
      "reflectable": 1,
      "mirror": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": -1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Cute",
    "id": "playnice",
    "description": "Se hace amigo de su oponente y consigue que a este se le quiten las ganas de combatir. Además, reduce su Ataque."
  },
  "playrough": {
    "num": 583,
    "accuracy": 90,
    "basePower": 90,
    "category": "Physical",
    "name": "Carantoña",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "boosts": {
        "atk": -1
      }
    },
    "target": "normal",
    "type": "Fairy",
    "contestType": "Cute",
    "id": "playrough",
    "description": "El Pokémon que lo usa le hace cucamonas al objetivo y lo ataca. Puede disminuir el Ataque del objetivo."
  },
  "pluck": {
    "num": 365,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "name": "Picoteo",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "distance": 1,
      "metronome": 1
    },
    "target": "any",
    "type": "Flying",
    "contestType": "Cute",
    "id": "pluck",
    "description": "Picotea al objetivo. Si este sostiene una baya, la picotea también y obtiene sus efectos."
  },
  "poisonfang": {
    "num": 305,
    "accuracy": 100,
    "basePower": 50,
    "category": "Physical",
    "name": "Colmillo Veneno",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bite": 1
    },
    "secondary": {
      "chance": 50,
      "status": "tox"
    },
    "target": "normal",
    "type": "Poison",
    "contestType": "Clever",
    "id": "poisonfang",
    "description": "Colmillos tóxicos que pueden envenenar gravemente al objetivo."
  },
  "poisongas": {
    "num": 139,
    "accuracy": 90,
    "basePower": 0,
    "category": "Status",
    "name": "Gas Venenoso",
    "pp": 40,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "status": "psn",
    "target": "allAdjacentFoes",
    "type": "Poison",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Clever",
    "id": "poisongas",
    "description": "Lanza una nube de gas tóxico al objetivo. Produce envenenamiento."
  },
  "poisonjab": {
    "num": 398,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Puya Nociva",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "status": "psn"
    },
    "target": "normal",
    "type": "Poison",
    "contestType": "Tough",
    "id": "poisonjab",
    "description": "Pincha al objetivo con un tentáculo o brazo envenenado. Puede llegar a envenenar al objetivo."
  },
  "poisonpowder": {
    "num": 77,
    "accuracy": 75,
    "basePower": 0,
    "category": "Status",
    "name": "Polvo Veneno",
    "pp": 35,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1,
      "powder": 1
    },
    "status": "psn",
    "target": "normal",
    "type": "Poison",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Clever",
    "id": "poisonpowder",
    "description": "Polvo tóxico que envenena al objetivo."
  },
  "poisonsting": {
    "num": 40,
    "accuracy": 100,
    "basePower": 15,
    "category": "Physical",
    "name": "Picotazo Veneno",
    "pp": 35,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "status": "psn"
    },
    "target": "normal",
    "type": "Poison",
    "contestType": "Clever",
    "id": "poisonsting",
    "description": "Lanza un aguijón tóxico que puede envenenar al objetivo."
  },
  "poisontail": {
    "num": 342,
    "accuracy": 100,
    "basePower": 50,
    "category": "Physical",
    "name": "Cola Veneno",
    "pp": 25,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "critRatio": 2,
    "secondary": {
      "chance": 10,
      "status": "psn"
    },
    "target": "normal",
    "type": "Poison",
    "contestType": "Clever",
    "id": "poisontail",
    "description": "Puede envenenar y dar un golpe crítico."
  },
  "pollenpuff": {
    "num": 676,
    "accuracy": 100,
    "basePower": 90,
    "category": "Special",
    "name": "Bola de Polen",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1,
      "bullet": 1
    },
    "target": "normal",
    "type": "Bug",
    "contestType": "Cute",
    "id": "pollenpuff",
    "description": "Ataca al oponente con una bola explosiva. Si esta alcanza a un aliado, le hará recuperar PS."
  },
  "poltergeist": {
    "num": 809,
    "accuracy": 90,
    "basePower": 110,
    "category": "Physical",
    "name": "Poltergeist",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Ghost",
    "id": "poltergeist",
    "description": "Ataque físico de tipo Ghost, potencia base 110. Precisión: 90%."
  },
  "populationbomb": {
    "num": 860,
    "accuracy": 90,
    "basePower": 20,
    "category": "Physical",
    "name": "Proliferación",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "slicing": 1
    },
    "multihit": 10,
    "multiaccuracy": true,
    "target": "normal",
    "type": "Normal",
    "id": "populationbomb",
    "description": "Ataque físico de tipo Normal, potencia base 20. Golpea 10 veces. Precisión: 90%."
  },
  "pounce": {
    "num": 884,
    "accuracy": 100,
    "basePower": 50,
    "category": "Physical",
    "name": "Brinco",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "spe": -1
      }
    },
    "target": "normal",
    "type": "Bug",
    "contestType": "Cute",
    "id": "pounce",
    "description": "Ataque físico de tipo Bug, potencia base 50."
  },
  "pound": {
    "num": 1,
    "accuracy": 100,
    "basePower": 40,
    "category": "Physical",
    "name": "Destructor",
    "pp": 35,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "pound",
    "description": "Ataque físico de tipo Normal, potencia base 40."
  },
  "powder": {
    "num": 600,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Polvo Explosivo",
    "pp": 20,
    "priority": 1,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "bypasssub": 1,
      "metronome": 1,
      "powder": 1
    },
    "volatileStatus": "powder",
    "condition": {
      "duration": 1,
      "onTryMovePriority": -1
    },
    "target": "normal",
    "type": "Bug",
    "zMove": {
      "boost": {
        "spd": 2
      }
    },
    "contestType": "Clever",
    "id": "powder",
    "description": "Esparce un polvo sobre el objetivo. Si este usa un movimiento de tipo Fuego en el mismo turno, el polvo explota y le inflige daño."
  },
  "powdersnow": {
    "num": 181,
    "accuracy": 100,
    "basePower": 40,
    "category": "Special",
    "name": "Nieve Polvo",
    "pp": 25,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "status": "frz"
    },
    "target": "allAdjacentFoes",
    "type": "Ice",
    "contestType": "Beautiful",
    "id": "powdersnow",
    "description": "Lanza nieve que puede llegar a congelar."
  },
  "powergem": {
    "num": 408,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Joya de Luz",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Rock",
    "contestType": "Beautiful",
    "id": "powergem",
    "description": "Ataque especial de tipo Rock, potencia base 80."
  },
  "powershift": {
    "num": 829,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Unobtainable",
    "name": "Cambiapoder",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1
    },
    "volatileStatus": "powershift",
    "condition": {},
    "target": "self",
    "type": "Normal",
    "id": "powershift",
    "description": "Movimiento de estado de tipo Normal. Puede causar powershift."
  },
  "powersplit": {
    "num": 471,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Isofuerza",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Clever",
    "id": "powersplit",
    "description": "El usuario emplea sus poderes para hacer la media de su Ataque y Ataque Especial con los de su objetivo y compartirlos."
  },
  "powerswap": {
    "num": 384,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Cambiafuerza",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "bypasssub": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Clever",
    "id": "powerswap",
    "description": "El usuario emplea su poder mental para intercambiar los cambios en el Ataque y Ataque Especial con el objetivo."
  },
  "powertrick": {
    "num": 379,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Truco Fuerza",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "volatileStatus": "powertrick",
    "condition": {},
    "target": "self",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "atk": 1
      }
    },
    "contestType": "Clever",
    "id": "powertrick",
    "description": "Usa sus poderes mentales para intercambiar sus características de Ataque y Defensa."
  },
  "powertrip": {
    "num": 681,
    "accuracy": 100,
    "basePower": 20,
    "category": "Physical",
    "name": "Chulería",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Dark",
    "zMove": {
      "basePower": 160
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Clever",
    "id": "powertrip",
    "description": "Ataca al oponente presumiendo de su fuerza. Cuanto más hayan subido las características del usuario, mayor será el daño.",
    "dynamicBasePower": true
  },
  "poweruppunch": {
    "num": 612,
    "accuracy": 100,
    "basePower": 40,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Puño Incremento",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "self": {
        "boosts": {
          "atk": 1
        }
      }
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Tough",
    "id": "poweruppunch",
    "description": "Cada vez que golpea a un oponente se endurecen sus puños. Si acierta al objetivo, el Ataque del usuario aumenta."
  },
  "powerwhip": {
    "num": 438,
    "accuracy": 85,
    "basePower": 120,
    "category": "Physical",
    "name": "Latigazo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Grass",
    "contestType": "Tough",
    "id": "powerwhip",
    "description": "Ataque físico de tipo Grass, potencia base 120. Precisión: 85%."
  },
  "precipiceblades": {
    "num": 619,
    "accuracy": 85,
    "basePower": 120,
    "category": "Physical",
    "name": "Filo del Abismo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "nonsky": 1
    },
    "target": "allAdjacentFoes",
    "type": "Ground",
    "contestType": "Cool",
    "id": "precipiceblades",
    "description": "Hace que el poder latente de la tierra se manifieste en forma de hojas afiladas y ataca al objetivo con ellas."
  },
  "present": {
    "num": 217,
    "accuracy": 90,
    "basePower": 0,
    "category": "Physical",
    "name": "Presente",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cute",
    "id": "present",
    "description": "Quien lo usa ataca al objetivo dándole un regalo con una bomba trampa. Sin embargo, a veces restaura sus PS."
  },
  "prismaticlaser": {
    "num": 711,
    "accuracy": 100,
    "basePower": 160,
    "category": "Special",
    "name": "Láser Prisma",
    "pp": 10,
    "priority": 0,
    "flags": {
      "recharge": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "self": {
      "volatileStatus": "mustrecharge"
    },
    "target": "normal",
    "type": "Psychic",
    "contestType": "Cool",
    "id": "prismaticlaser",
    "description": "El usuario utiliza un prisma para emitir un rayo de gran potencia, pero no puede moverse en el turno siguiente."
  },
  "protect": {
    "num": 182,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Protección",
    "pp": 10,
    "priority": 4,
    "flags": {
      "noassist": 1,
      "failcopycat": 1
    },
    "stallingMove": true,
    "volatileStatus": "protect",
    "condition": {
      "duration": 1,
      "onTryHitPriority": 3
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Cute",
    "id": "protect",
    "description": "Frena todos los ataques, pero puede fallar si se usa repetidamente."
  },
  "psybeam": {
    "num": 60,
    "accuracy": 100,
    "basePower": 65,
    "category": "Special",
    "name": "Psicorrayo",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "volatileStatus": "confusion"
    },
    "target": "normal",
    "type": "Psychic",
    "contestType": "Beautiful",
    "id": "psybeam",
    "description": "Extraño rayo que puede causar confusión."
  },
  "psyblade": {
    "num": 875,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Psicohojas",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "slicing": 1
    },
    "target": "normal",
    "type": "Psychic",
    "id": "psyblade",
    "description": "Ataque físico de tipo Psychic, potencia base 80."
  },
  "psychic": {
    "num": 94,
    "accuracy": 100,
    "basePower": 90,
    "category": "Special",
    "name": "Psíquico",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "boosts": {
        "spd": -1
      }
    },
    "target": "normal",
    "type": "Psychic",
    "contestType": "Clever",
    "id": "psychic",
    "description": "Fuerte ataque telequinético que puede bajar la Defensa Especial del objetivo."
  },
  "psychicfangs": {
    "num": 706,
    "accuracy": 100,
    "basePower": 85,
    "category": "Physical",
    "name": "Psicocolmillo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bite": 1
    },
    "target": "normal",
    "type": "Psychic",
    "contestType": "Clever",
    "id": "psychicfangs",
    "description": "Ataca a sus rivales con poderes psíquicos que además destruyen barreras como Pantalla de Luz y Reflejo."
  },
  "psychicnoise": {
    "num": 917,
    "accuracy": 100,
    "basePower": 75,
    "category": "Special",
    "name": "Psicorruido",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "volatileStatus": "healblock"
    },
    "target": "normal",
    "type": "Psychic",
    "id": "psychicnoise",
    "description": "Ataque especial de tipo Psychic, potencia base 75."
  },
  "psychicterrain": {
    "num": 678,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Campo Psíquico",
    "pp": 10,
    "priority": 0,
    "flags": {
      "nonsky": 1,
      "metronome": 1
    },
    "terrain": "psychicterrain",
    "condition": {
      "effectType": "Terrain",
      "duration": 5,
      "onTryHitPriority": 4,
      "onBasePowerPriority": 6,
      "onFieldResidualOrder": 27,
      "onFieldResidualSubOrder": 7
    },
    "target": "all",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spa": 1
      }
    },
    "contestType": "Clever",
    "id": "psychicterrain",
    "description": "Durante cinco turnos, se potencian los movimientos de tipo Psíquico y los Pokémon que están en el suelo quedan protegidos contra movimientos con prioridad."
  },
  "psychoboost": {
    "num": 354,
    "accuracy": 90,
    "basePower": 140,
    "category": "Special",
    "name": "Psicoataque",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "self": {
      "boosts": {
        "spa": -2
      }
    },
    "target": "normal",
    "type": "Psychic",
    "contestType": "Clever",
    "id": "psychoboost",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "psychocut": {
    "num": 427,
    "accuracy": 100,
    "basePower": 70,
    "category": "Physical",
    "name": "Psicocorte",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "slicing": 1
    },
    "critRatio": 2,
    "target": "normal",
    "type": "Psychic",
    "contestType": "Cool",
    "id": "psychocut",
    "description": "Ataca al objetivo con cuchillas formadas por energía psíquica. Suele ser crítico."
  },
  "psychoshift": {
    "num": 375,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Psicocambio",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "self": {},
    "target": "normal",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spa": 2
      }
    },
    "contestType": "Clever",
    "id": "psychoshift",
    "description": "Usa su poder mental para transferir al objetivo sus problemas de estado."
  },
  "psychup": {
    "num": 244,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Autosugestión",
    "pp": 10,
    "priority": 0,
    "flags": {
      "bypasssub": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "effect": "heal"
    },
    "contestType": "Clever",
    "id": "psychup",
    "description": "Quien lo usa se sume en un trance y copia cualquier cambio que haya en las características de su objetivo."
  },
  "psyshieldbash": {
    "num": 828,
    "accuracy": 90,
    "basePower": 70,
    "category": "Physical",
    "name": "Asalto Barrera",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "self": {
        "boosts": {
          "def": 1
        }
      }
    },
    "target": "normal",
    "type": "Psychic",
    "id": "psyshieldbash",
    "description": "Ataque físico de tipo Psychic, potencia base 70. Precisión: 90%."
  },
  "psyshock": {
    "num": 473,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "overrideDefensiveStat": "def",
    "name": "Psicocarga",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Psychic",
    "contestType": "Beautiful",
    "id": "psyshock",
    "description": "Crea una onda psíquica que causa daño físico al objetivo."
  },
  "psystrike": {
    "num": 540,
    "accuracy": 100,
    "basePower": 100,
    "category": "Special",
    "overrideDefensiveStat": "def",
    "name": "Onda Mental",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Psychic",
    "contestType": "Cool",
    "id": "psystrike",
    "description": "Crea una onda psíquica que causa daño físico al objetivo."
  },
  "psywave": {
    "num": 149,
    "accuracy": 100,
    "basePower": 0,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Psicoonda",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Psychic",
    "contestType": "Clever",
    "id": "psywave",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "pulverizingpancake": {
    "num": 701,
    "accuracy": true,
    "basePower": 210,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Arrojo Intempestivo",
    "pp": 1,
    "priority": 0,
    "flags": {
      "contact": 1
    },
    "isZ": "snorliumz",
    "target": "normal",
    "type": "Normal",
    "contestType": "Cool",
    "id": "pulverizingpancake",
    "description": "Ataque físico de tipo Normal, potencia base 210."
  },
  "punishment": {
    "num": 386,
    "accuracy": 100,
    "basePower": 0,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Castigo",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Dark",
    "zMove": {
      "basePower": 160
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Cool",
    "id": "punishment",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente.",
    "dynamicBasePower": true
  },
  "purify": {
    "num": 685,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Purificación",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "heal": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Poison",
    "zMove": {
      "boost": {
        "atk": 1,
        "def": 1,
        "spa": 1,
        "spd": 1,
        "spe": 1
      }
    },
    "contestType": "Beautiful",
    "id": "purify",
    "description": "Cura los problemas de estado del Pokémon rival y a cambio recupera PS propios."
  },
  "pursuit": {
    "num": 228,
    "accuracy": 100,
    "basePower": 40,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Persecución",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "condition": {
      "duration": 1
    },
    "target": "normal",
    "type": "Dark",
    "contestType": "Clever",
    "id": "pursuit",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente.",
    "dynamicBasePower": true
  },
  "pyroball": {
    "num": 780,
    "accuracy": 90,
    "basePower": 120,
    "category": "Physical",
    "name": "Balón Ígneo",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "defrost": 1,
      "bullet": 1
    },
    "secondary": {
      "chance": 10,
      "status": "brn"
    },
    "target": "normal",
    "type": "Fire",
    "id": "pyroball",
    "description": "El usuario prende una pequeña piedra para crear una bola de fuego con la que ataca al rival. Puede causar quemaduras."
  },
  "quash": {
    "num": 511,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Último Lugar",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Dark",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Clever",
    "id": "quash",
    "description": "Consigue que el objetivo sea el último en moverse."
  },
  "quickattack": {
    "num": 98,
    "accuracy": 100,
    "basePower": 40,
    "category": "Physical",
    "name": "Ataque Rápido",
    "pp": 30,
    "priority": 1,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cool",
    "id": "quickattack",
    "description": "Ataca al objetivo a gran velocidad. Este movimiento tiene prioridad alta."
  },
  "quickguard": {
    "num": 501,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Anticipo",
    "pp": 15,
    "priority": 3,
    "flags": {
      "snatch": 1
    },
    "sideCondition": "quickguard",
    "condition": {
      "duration": 1,
      "onTryHitPriority": 4
    },
    "target": "allySide",
    "type": "Fighting",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Cool",
    "id": "quickguard",
    "description": "Se protege a sí mismo y a sus aliados de movimientos con prioridad."
  },
  "quiverdance": {
    "num": 483,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Danza Aleteo",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "dance": 1,
      "metronome": 1
    },
    "boosts": {
      "spa": 1,
      "spd": 1,
      "spe": 1
    },
    "target": "self",
    "type": "Bug",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Beautiful",
    "id": "quiverdance",
    "description": "Danza mística que sube el Ataque Especial, la Defensa Especial y la Velocidad."
  },
  "rage": {
    "num": 99,
    "accuracy": 100,
    "basePower": 20,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Furia",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "self": {
      "volatileStatus": "rage"
    },
    "condition": {
      "onBeforeMovePriority": 100
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "rage",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "ragefist": {
    "num": 889,
    "accuracy": 100,
    "basePower": 50,
    "category": "Physical",
    "name": "Puño Furia",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1
    },
    "target": "normal",
    "type": "Ghost",
    "id": "ragefist",
    "description": "Ataque físico de tipo Ghost, potencia base 50 variable.",
    "dynamicBasePower": true
  },
  "ragepowder": {
    "num": 476,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Polvo Ira",
    "pp": 20,
    "priority": 2,
    "flags": {
      "noassist": 1,
      "failcopycat": 1,
      "powder": 1
    },
    "volatileStatus": "ragepowder",
    "condition": {
      "duration": 1,
      "onFoeRedirectTargetPriority": 1
    },
    "target": "self",
    "type": "Bug",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Clever",
    "id": "ragepowder",
    "description": "Usa un polvo que irrita y centra en el usuario la atención y los ataques de los rivales."
  },
  "ragingbull": {
    "num": 873,
    "accuracy": 100,
    "basePower": 90,
    "category": "Physical",
    "name": "Furia Taurina",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Normal",
    "id": "ragingbull",
    "description": "Ataque físico de tipo Normal, potencia base 90."
  },
  "ragingfury": {
    "num": 833,
    "accuracy": 100,
    "basePower": 120,
    "category": "Physical",
    "name": "Erupción de Ira",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "self": {
      "volatileStatus": "lockedmove"
    },
    "target": "randomNormal",
    "type": "Fire",
    "id": "ragingfury",
    "description": "Ataque físico de tipo Fire, potencia base 120."
  },
  "raindance": {
    "num": 240,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Danza Lluvia",
    "pp": 5,
    "priority": 0,
    "flags": {
      "metronome": 1
    },
    "weather": "RainDance",
    "target": "all",
    "type": "Water",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Beautiful",
    "id": "raindance",
    "description": "Genera una fuerte lluvia que refuerza los movimientos de tipo Agua durante cinco turnos y debilita los de tipo Fuego."
  },
  "rapidspin": {
    "num": 229,
    "accuracy": 100,
    "basePower": 50,
    "category": "Physical",
    "name": "Giro Rápido",
    "pp": 40,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "self": {
        "boosts": {
          "spe": 1
        }
      }
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cool",
    "id": "rapidspin",
    "description": "Ataque giratorio que puede eliminar movimientos como Atadura, Constricción y Drenadoras. También aumenta la Velocidad del usuario."
  },
  "razorleaf": {
    "num": 75,
    "accuracy": 95,
    "basePower": 55,
    "category": "Physical",
    "name": "Hoja Afilada",
    "pp": 25,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "slicing": 1
    },
    "critRatio": 2,
    "target": "allAdjacentFoes",
    "type": "Grass",
    "contestType": "Cool",
    "id": "razorleaf",
    "description": "Corta con hojas afiladas. Un ataque que suele ser crítico."
  },
  "razorshell": {
    "num": 534,
    "accuracy": 95,
    "basePower": 75,
    "category": "Physical",
    "name": "Concha Filo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "slicing": 1
    },
    "secondary": {
      "chance": 50,
      "boosts": {
        "def": -1
      }
    },
    "target": "normal",
    "type": "Water",
    "contestType": "Cool",
    "id": "razorshell",
    "description": "Una afilada vieira ataca al objetivo. También puede hacer disminuir su Defensa."
  },
  "razorwind": {
    "num": 13,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Viento Cortante",
    "pp": 10,
    "priority": 0,
    "flags": {
      "charge": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "nosleeptalk": 1,
      "failinstruct": 1
    },
    "critRatio": 2,
    "target": "allAdjacentFoes",
    "type": "Normal",
    "contestType": "Cool",
    "id": "razorwind",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "recover": {
    "num": 105,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Recuperación",
    "pp": 5,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "heal": 1,
      "metronome": 1
    },
    "heal": [
      1,
      2
    ],
    "target": "self",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Clever",
    "id": "recover",
    "description": "Restaura hasta la mitad de los PS máximos."
  },
  "recycle": {
    "num": 278,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Reciclaje",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spe": 2
      }
    },
    "contestType": "Clever",
    "id": "recycle",
    "description": "Recicla y así recupera un objeto equipado de un solo uso que ya haya sido empleado durante el combate."
  },
  "reflect": {
    "num": 115,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Reflejo",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "sideCondition": "reflect",
    "condition": {
      "duration": 5,
      "onSideResidualOrder": 26,
      "onSideResidualSubOrder": 1
    },
    "target": "allySide",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Clever",
    "id": "reflect",
    "description": "Pared de luz que reduce durante cinco turnos el daño producido por los ataques físicos."
  },
  "reflecttype": {
    "num": 513,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Clonatipo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "bypasssub": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spa": 1
      }
    },
    "contestType": "Clever",
    "id": "reflecttype",
    "description": "Cambia el tipo del Pokémon al mismo tipo que el del objetivo."
  },
  "refresh": {
    "num": 287,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Alivio",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "effect": "heal"
    },
    "contestType": "Cute",
    "id": "refresh",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "relicsong": {
    "num": 547,
    "accuracy": 100,
    "basePower": 75,
    "category": "Special",
    "name": "Canto Arcaico",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1
    },
    "secondary": {
      "chance": 10,
      "status": "slp"
    },
    "target": "allAdjacentFoes",
    "type": "Normal",
    "contestType": "Beautiful",
    "id": "relicsong",
    "description": "Ataca conmoviendo a los rivales de alrededor con un antiguo canto. Puede dormirlos."
  },
  "rest": {
    "num": 156,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Descanso",
    "pp": 5,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "heal": 1,
      "metronome": 1
    },
    "target": "self",
    "type": "Psychic",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Cute",
    "id": "rest",
    "description": "Restaura todos los PS y cura todos los problemas de estado del usuario, que se duerme los dos turnos siguientes."
  },
  "retaliate": {
    "num": 514,
    "accuracy": 100,
    "basePower": 70,
    "category": "Physical",
    "name": "Represalia",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cool",
    "id": "retaliate",
    "description": "Venga a los amigos caídos. Si en el turno anterior han derrotado a alguno, la potencia del ataque aumentará."
  },
  "return": {
    "num": 216,
    "accuracy": 100,
    "basePower": 0,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Retribución",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "basePower": 160
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Cute",
    "id": "return",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente.",
    "dynamicBasePower": true
  },
  "revelationdance": {
    "num": 686,
    "accuracy": 100,
    "basePower": 90,
    "category": "Special",
    "name": "Danza Despertar",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "dance": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Beautiful",
    "id": "revelationdance",
    "description": "Ataque que consiste en un baile muy enérgico. El tipo de este ataque se corresponde con el del Pokémon que lo ejecuta."
  },
  "revenge": {
    "num": 279,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Desquite",
    "pp": 10,
    "priority": -4,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Tough",
    "id": "revenge",
    "description": "Ataque que produce el doble de daño si el usuario resulta herido en el mismo turno.",
    "dynamicBasePower": true
  },
  "reversal": {
    "num": 179,
    "accuracy": 100,
    "basePower": 0,
    "category": "Physical",
    "name": "Inversión",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Fighting",
    "zMove": {
      "basePower": 160
    },
    "contestType": "Cool",
    "id": "reversal",
    "description": "Ataque desesperado que causa más daño cuantos menos PS tenga el usuario.",
    "dynamicBasePower": true
  },
  "revivalblessing": {
    "num": 863,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Plegaria Vital",
    "pp": 1,
    "noPPBoosts": true,
    "priority": 0,
    "flags": {
      "heal": 1,
      "nosketch": 1
    },
    "slotCondition": "revivalblessing",
    "selfSwitch": true,
    "condition": {
      "duration": 1
    },
    "target": "self",
    "type": "Normal",
    "id": "revivalblessing",
    "description": "Movimiento de estado de tipo Normal. El usuario cambia después de atacar."
  },
  "risingvoltage": {
    "num": 804,
    "accuracy": 100,
    "basePower": 70,
    "category": "Special",
    "name": "Alto Voltaje",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Electric",
    "maxMove": {
      "basePower": 140
    },
    "id": "risingvoltage",
    "description": "Ataca con una descarga eléctrica que surge del terreno de combate. La potencia del movimiento se duplica si el rival se ve afectado por un campo eléctrico.",
    "dynamicBasePower": true
  },
  "roar": {
    "num": 46,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Rugido",
    "pp": 20,
    "priority": -6,
    "flags": {
      "reflectable": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "allyanim": 1,
      "metronome": 1,
      "noassist": 1,
      "failcopycat": 1
    },
    "forceSwitch": true,
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Cool",
    "id": "roar",
    "description": "Se lleva al objetivo, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate."
  },
  "roaroftime": {
    "num": 459,
    "accuracy": 90,
    "basePower": 150,
    "category": "Special",
    "name": "Distorsión",
    "pp": 5,
    "priority": 0,
    "flags": {
      "recharge": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "self": {
      "volatileStatus": "mustrecharge"
    },
    "target": "normal",
    "type": "Dragon",
    "contestType": "Beautiful",
    "id": "roaroftime",
    "description": "Ataca al objetivo usando tal energía que el tiempo se distorsiona. El usuario descansa el siguiente turno."
  },
  "rockblast": {
    "num": 350,
    "accuracy": 90,
    "basePower": 25,
    "category": "Physical",
    "name": "Pedrada",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "multihit": [
      2,
      5
    ],
    "target": "normal",
    "type": "Rock",
    "zMove": {
      "basePower": 140
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Tough",
    "id": "rockblast",
    "description": "Lanza pedruscos al objetivo de dos a cinco veces consecutivas."
  },
  "rockclimb": {
    "num": 431,
    "accuracy": 85,
    "basePower": 90,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Treparrocas",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 20,
      "volatileStatus": "confusion"
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "rockclimb",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "rockpolish": {
    "num": 397,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Pulimento",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "spe": 2
    },
    "target": "self",
    "type": "Rock",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Tough",
    "id": "rockpolish",
    "description": "Reduce la resistencia puliendo su cuerpo. Aumenta mucho la Velocidad."
  },
  "rockslide": {
    "num": 157,
    "accuracy": 90,
    "basePower": 75,
    "category": "Physical",
    "name": "Avalancha",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "volatileStatus": "flinch"
    },
    "target": "allAdjacentFoes",
    "type": "Rock",
    "contestType": "Tough",
    "id": "rockslide",
    "description": "Lanza grandes pedruscos. Puede amedrentar al objetivo."
  },
  "rocksmash": {
    "num": 249,
    "accuracy": 100,
    "basePower": 40,
    "category": "Physical",
    "name": "Golpe Roca",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 50,
      "boosts": {
        "def": -1
      }
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Tough",
    "id": "rocksmash",
    "description": "Ataque con los puños. Puede bajar la Defensa del objetivo."
  },
  "rockthrow": {
    "num": 88,
    "accuracy": 90,
    "basePower": 50,
    "category": "Physical",
    "name": "Lanzarrocas",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Rock",
    "contestType": "Tough",
    "id": "rockthrow",
    "description": "Ataque físico de tipo Rock, potencia base 50. Precisión: 90%."
  },
  "rocktomb": {
    "num": 317,
    "accuracy": 95,
    "basePower": 60,
    "category": "Physical",
    "name": "Tumba Rocas",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "spe": -1
      }
    },
    "target": "normal",
    "type": "Rock",
    "contestType": "Clever",
    "id": "rocktomb",
    "description": "Tira rocas que detienen al objetivo y bajan su Velocidad."
  },
  "rockwrecker": {
    "num": 439,
    "accuracy": 90,
    "basePower": 150,
    "category": "Physical",
    "name": "Romperrocas",
    "pp": 5,
    "priority": 0,
    "flags": {
      "recharge": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "self": {
      "volatileStatus": "mustrecharge"
    },
    "target": "normal",
    "type": "Rock",
    "contestType": "Tough",
    "id": "rockwrecker",
    "description": "Lanza una piedra enorme contra el objetivo, pero tiene que descansar el siguiente turno."
  },
  "roleplay": {
    "num": 272,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Imitación",
    "pp": 10,
    "priority": 0,
    "flags": {
      "bypasssub": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Cute",
    "id": "roleplay",
    "description": "Imita al objetivo por completo y copia su habilidad."
  },
  "rollingkick": {
    "num": 27,
    "accuracy": 85,
    "basePower": 60,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Patada Giro",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Cool",
    "id": "rollingkick",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "rollout": {
    "num": 205,
    "accuracy": 90,
    "basePower": 30,
    "category": "Physical",
    "name": "Rodar",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "failinstruct": 1,
      "noparentalbond": 1
    },
    "condition": {
      "duration": 1,
      "onLockMove": "rollout"
    },
    "target": "normal",
    "type": "Rock",
    "contestType": "Cute",
    "id": "rollout",
    "description": "El atacante rueda contra el objetivo durante cinco turnos, cada vez con mayor fuerza.",
    "dynamicBasePower": true
  },
  "roost": {
    "num": 355,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Respiro",
    "pp": 5,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "heal": 1,
      "metronome": 1
    },
    "heal": [
      1,
      2
    ],
    "self": {
      "volatileStatus": "roost"
    },
    "condition": {
      "duration": 1,
      "onResidualOrder": 25,
      "onTypePriority": -1
    },
    "target": "self",
    "type": "Flying",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Clever",
    "id": "roost",
    "description": "Aterriza sobre la superficie para descansar. Recupera hasta la mitad del total de sus PS."
  },
  "rototiller": {
    "num": 563,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Fertilizante",
    "pp": 10,
    "priority": 0,
    "flags": {
      "distance": 1,
      "nonsky": 1,
      "metronome": 1
    },
    "target": "all",
    "type": "Ground",
    "zMove": {
      "boost": {
        "atk": 1
      }
    },
    "contestType": "Tough",
    "id": "rototiller",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "round": {
    "num": 496,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "name": "Canon",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Beautiful",
    "id": "round",
    "description": "Un canto que ataca al objetivo. Cuantos más Pokémon lo usan, más aumenta de potencia.",
    "dynamicBasePower": true
  },
  "ruination": {
    "num": 877,
    "accuracy": 90,
    "basePower": 0,
    "category": "Special",
    "name": "Calamidad",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Dark",
    "contestType": "Tough",
    "id": "ruination",
    "description": "Ataque especial de tipo Dark, sin potencia directa. Precisión: 90%."
  },
  "sacredfire": {
    "num": 221,
    "accuracy": 95,
    "basePower": 100,
    "category": "Physical",
    "name": "Fuego Sagrado",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "defrost": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 50,
      "status": "brn"
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Beautiful",
    "id": "sacredfire",
    "description": "Fuego místico de gran intensidad que puede causar quemaduras."
  },
  "sacredsword": {
    "num": 533,
    "accuracy": 100,
    "basePower": 90,
    "category": "Physical",
    "name": "Espada Santa",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "slicing": 1
    },
    "ignoreEvasion": true,
    "ignoreDefensive": true,
    "target": "normal",
    "type": "Fighting",
    "contestType": "Cool",
    "id": "sacredsword",
    "description": "El usuario ataca con una espada, ignorando cualquier cambio en las características del objetivo."
  },
  "safeguard": {
    "num": 219,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Velo Sagrado",
    "pp": 25,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "sideCondition": "safeguard",
    "condition": {
      "duration": 5,
      "onSideResidualOrder": 26,
      "onSideResidualSubOrder": 3
    },
    "target": "allySide",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Beautiful",
    "id": "safeguard",
    "description": "Un escudo que protege de problemas de estado, como el sueño o la parálisis, durante cinco turnos."
  },
  "saltcure": {
    "num": 864,
    "accuracy": 100,
    "basePower": 40,
    "category": "Physical",
    "name": "Salazón",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "condition": {
      "noCopy": true,
      "onResidualOrder": 13
    },
    "secondary": {
      "chance": 100,
      "volatileStatus": "saltcure"
    },
    "target": "normal",
    "type": "Rock",
    "id": "saltcure",
    "description": "Ataque físico de tipo Rock, potencia base 40."
  },
  "sandattack": {
    "num": 28,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Ataque Arena",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "boosts": {
      "accuracy": -1
    },
    "target": "normal",
    "type": "Ground",
    "zMove": {
      "boost": {
        "evasion": 1
      }
    },
    "contestType": "Cute",
    "id": "sandattack",
    "description": "Arroja arena a la cara y baja la Precisión."
  },
  "sandsearstorm": {
    "num": 848,
    "accuracy": 80,
    "basePower": 100,
    "category": "Special",
    "name": "Simún de Arena",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "wind": 1
    },
    "secondary": {
      "chance": 20,
      "status": "brn"
    },
    "target": "allAdjacentFoes",
    "type": "Ground",
    "id": "sandsearstorm",
    "description": "Ataque especial de tipo Ground, potencia base 100. 20% de probabilidad de causar quemadura. Precisión: 80%."
  },
  "sandstorm": {
    "num": 201,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Tormenta de Arena",
    "pp": 10,
    "priority": 0,
    "flags": {
      "metronome": 1,
      "wind": 1
    },
    "weather": "Sandstorm",
    "target": "all",
    "type": "Rock",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Tough",
    "id": "sandstorm",
    "description": "Tormenta de arena que dura cinco turnos y hiere a todos, excepto a los de tipo Roca, Tierra y Acero, y aumenta la Defensa Especial de los de tipo Roca."
  },
  "sandtomb": {
    "num": 328,
    "accuracy": 85,
    "basePower": 35,
    "category": "Physical",
    "name": "Bucle Arena",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "volatileStatus": "partiallytrapped",
    "target": "normal",
    "type": "Ground",
    "contestType": "Clever",
    "id": "sandtomb",
    "description": "Enreda al objetivo en un remolino de arena de cuatro a cinco turnos."
  },
  "sappyseed": {
    "num": 738,
    "accuracy": 90,
    "basePower": 100,
    "category": "Physical",
    "isNonstandard": "LGPE",
    "name": "Leafitobombas",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Grass",
    "contestType": "Clever",
    "id": "sappyseed",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "savagespinout": {
    "num": 634,
    "accuracy": true,
    "basePower": 1,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Guadaña Sedosa",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "buginiumz",
    "target": "normal",
    "type": "Bug",
    "contestType": "Cool",
    "id": "savagespinout",
    "description": "Ataque físico de tipo Bug, potencia base 1."
  },
  "scald": {
    "num": 503,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Escaldar",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "defrost": 1,
      "metronome": 1
    },
    "thawsTarget": true,
    "secondary": {
      "chance": 30,
      "status": "brn"
    },
    "target": "normal",
    "type": "Water",
    "contestType": "Tough",
    "id": "scald",
    "description": "Ataca arrojando agua hirviendo al objetivo. Puede causar quemaduras."
  },
  "scaleshot": {
    "num": 799,
    "accuracy": 90,
    "basePower": 25,
    "category": "Physical",
    "name": "Ráfaga Escamas",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": [
      2,
      5
    ],
    "selfBoost": {
      "boosts": {
        "def": -1,
        "spe": 1
      }
    },
    "target": "normal",
    "type": "Dragon",
    "zMove": {
      "basePower": 140
    },
    "maxMove": {
      "basePower": 130
    },
    "id": "scaleshot",
    "description": "Lanza escamas al objetivo de dos a cinco veces seguidas. Aumenta la Velocidad del usuario, pero reduce su Defensa."
  },
  "scaryface": {
    "num": 184,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Cara Susto",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "boosts": {
      "spe": -2
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Tough",
    "id": "scaryface",
    "description": "Asusta al objetivo para reducir mucho su Velocidad."
  },
  "scorchingsands": {
    "num": 815,
    "accuracy": 100,
    "basePower": 70,
    "category": "Special",
    "name": "Arenas Ardientes",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "defrost": 1,
      "metronome": 1
    },
    "thawsTarget": true,
    "secondary": {
      "chance": 30,
      "status": "brn"
    },
    "target": "normal",
    "type": "Ground",
    "id": "scorchingsands",
    "description": "Ataca al objetivo arrojándole arena a temperaturas muy elevadas. Puede causar quemaduras."
  },
  "scratch": {
    "num": 10,
    "accuracy": 100,
    "basePower": 40,
    "category": "Physical",
    "name": "Arañazo",
    "pp": 35,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "scratch",
    "description": "Ataque físico de tipo Normal, potencia base 40."
  },
  "screech": {
    "num": 103,
    "accuracy": 85,
    "basePower": 0,
    "category": "Status",
    "name": "Chirrido",
    "pp": 40,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "boosts": {
      "def": -2
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "atk": 1
      }
    },
    "contestType": "Clever",
    "id": "screech",
    "description": "Alarido agudo que reduce mucho la Defensa del objetivo."
  },
  "searingshot": {
    "num": 545,
    "accuracy": 100,
    "basePower": 100,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Bomba Ígnea",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "secondary": {
      "chance": 30,
      "status": "brn"
    },
    "target": "allAdjacent",
    "type": "Fire",
    "contestType": "Cool",
    "id": "searingshot",
    "description": "Un infierno de llamas daña a los Pokémon adyacentes en combate. Puede quemar."
  },
  "searingsunrazesmash": {
    "num": 724,
    "accuracy": true,
    "basePower": 200,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Embestida Solar",
    "pp": 1,
    "priority": 0,
    "flags": {
      "contact": 1
    },
    "isZ": "solganiumz",
    "ignoreAbility": true,
    "target": "normal",
    "type": "Steel",
    "contestType": "Cool",
    "id": "searingsunrazesmash",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "secretpower": {
    "num": 290,
    "accuracy": 100,
    "basePower": 70,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Daño Secreto",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "status": "par"
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Clever",
    "id": "secretpower",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "secretsword": {
    "num": 548,
    "accuracy": 100,
    "basePower": 85,
    "category": "Special",
    "overrideDefensiveStat": "def",
    "name": "Sable Místico",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "slicing": 1
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Beautiful",
    "id": "secretsword",
    "description": "Ensarta al objetivo con un largo cuerno dotado de un poder místico que provoca daño físico."
  },
  "seedbomb": {
    "num": 402,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Bomba Germen",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "target": "normal",
    "type": "Grass",
    "contestType": "Tough",
    "id": "seedbomb",
    "description": "Ataque físico de tipo Grass, potencia base 80."
  },
  "seedflare": {
    "num": 465,
    "accuracy": 85,
    "basePower": 120,
    "category": "Special",
    "name": "Fulgor Semilla",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 40,
      "boosts": {
        "spd": -2
      }
    },
    "target": "normal",
    "type": "Grass",
    "contestType": "Beautiful",
    "id": "seedflare",
    "description": "Una onda de choque se libera del cuerpo. Puede bajar mucho la Defensa Especial del objetivo."
  },
  "seismictoss": {
    "num": 69,
    "accuracy": 100,
    "basePower": 0,
    "damage": "level",
    "category": "Physical",
    "name": "Sísmico",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Fighting",
    "maxMove": {
      "basePower": 75
    },
    "contestType": "Tough",
    "id": "seismictoss",
    "description": "Aprovecha la gravedad para derribar al objetivo. Le resta tantos PS como nivel tenga el usuario."
  },
  "selfdestruct": {
    "num": 120,
    "accuracy": 100,
    "basePower": 200,
    "category": "Physical",
    "name": "Autodestrucción",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "noparentalbond": 1
    },
    "selfdestruct": "always",
    "target": "allAdjacent",
    "type": "Normal",
    "contestType": "Beautiful",
    "id": "selfdestruct",
    "description": "El atacante explota y hiere a todos a su alrededor. El usuario se debilita de inmediato."
  },
  "shadowball": {
    "num": 247,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Bola Sombra",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "secondary": {
      "chance": 20,
      "boosts": {
        "spd": -1
      }
    },
    "target": "normal",
    "type": "Ghost",
    "contestType": "Clever",
    "id": "shadowball",
    "description": "Lanza una bola oscura que puede bajar la Defensa Especial del objetivo."
  },
  "shadowbone": {
    "num": 708,
    "accuracy": 100,
    "basePower": 85,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Hueso Sombrío",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 20,
      "boosts": {
        "def": -1
      }
    },
    "target": "normal",
    "type": "Ghost",
    "contestType": "Cool",
    "id": "shadowbone",
    "description": "Ataca al oponente golpeándole con un hueso poseído por un espíritu. Puede reducir la Defensa del objetivo."
  },
  "shadowclaw": {
    "num": 421,
    "accuracy": 100,
    "basePower": 70,
    "category": "Physical",
    "name": "Garra Umbría",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "critRatio": 2,
    "target": "normal",
    "type": "Ghost",
    "contestType": "Cool",
    "id": "shadowclaw",
    "description": "Ataca con una garra afilada hecha de sombras. Suele ser crítico."
  },
  "shadowforce": {
    "num": 467,
    "accuracy": 100,
    "basePower": 120,
    "category": "Physical",
    "name": "Golpe Umbrío",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "charge": 1,
      "mirror": 1,
      "metronome": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failinstruct": 1
    },
    "breaksProtect": true,
    "condition": {
      "duration": 2,
      "onInvulnerability": false
    },
    "target": "normal",
    "type": "Ghost",
    "contestType": "Cool",
    "id": "shadowforce",
    "description": "En el primer turno, desaparece. En el segundo, golpea al objetivo aunque se esté protegiendo."
  },
  "shadowpunch": {
    "num": 325,
    "accuracy": true,
    "basePower": 60,
    "category": "Physical",
    "name": "Puño Sombra",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Ghost",
    "contestType": "Clever",
    "id": "shadowpunch",
    "description": "Ataque físico de tipo Ghost, potencia base 60."
  },
  "shadowsneak": {
    "num": 425,
    "accuracy": 100,
    "basePower": 40,
    "category": "Physical",
    "name": "Sombra Vil",
    "pp": 30,
    "priority": 1,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Ghost",
    "contestType": "Clever",
    "id": "shadowsneak",
    "description": "Extiende su sombra y ataca al objetivo por la espalda. Este movimiento tiene prioridad alta."
  },
  "sharpen": {
    "num": 159,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Afilar",
    "pp": 30,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": 1
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "boost": {
        "atk": 1
      }
    },
    "contestType": "Cute",
    "id": "sharpen",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "shatteredpsyche": {
    "num": 648,
    "accuracy": true,
    "basePower": 1,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Disruptor Psíquico",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "psychiumz",
    "target": "normal",
    "type": "Psychic",
    "contestType": "Cool",
    "id": "shatteredpsyche",
    "description": "Ataque físico de tipo Psychic, potencia base 1."
  },
  "shedtail": {
    "num": 880,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Autotomía",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "volatileStatus": "substitute",
    "self": {},
    "selfSwitch": "shedtail",
    "target": "self",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "id": "shedtail",
    "description": "Movimiento de estado de tipo Normal. Puede causar substitute. El usuario cambia después de atacar."
  },
  "sheercold": {
    "num": 329,
    "accuracy": 30,
    "basePower": 0,
    "category": "Special",
    "name": "Frío Polar",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "ohko": "Ice",
    "target": "normal",
    "type": "Ice",
    "zMove": {
      "basePower": 180
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Beautiful",
    "id": "sheercold",
    "description": "Debilita al objetivo de un solo golpe. Si lo usa un Pokémon que no sea de tipo Hielo, es difícil que acierte."
  },
  "shellsidearm": {
    "num": 801,
    "accuracy": 100,
    "basePower": 90,
    "category": "Special",
    "name": "Moluscañón",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 20,
      "status": "psn"
    },
    "target": "normal",
    "type": "Poison",
    "id": "shellsidearm",
    "description": "El usuario lanza un ataque físico o especial en función de cuál inflija más daño. Puede envenenar al objetivo."
  },
  "shellsmash": {
    "num": 504,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Rompecoraza",
    "pp": 15,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "def": -1,
      "spd": -1,
      "atk": 2,
      "spa": 2,
      "spe": 2
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Tough",
    "id": "shellsmash",
    "description": "El usuario rompe su coraza y baja su Defensa y Defensa Especial, pero aumenta mucho su Ataque, Ataque Especial y Velocidad."
  },
  "shelltrap": {
    "num": 704,
    "accuracy": 100,
    "basePower": 150,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Coraza Trampa",
    "pp": 5,
    "priority": -3,
    "flags": {
      "protect": 1,
      "failmefirst": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failinstruct": 1
    },
    "condition": {
      "duration": 1
    },
    "target": "allAdjacentFoes",
    "type": "Fire",
    "contestType": "Tough",
    "id": "shelltrap",
    "description": "El caparazón del Pokémon se convierte en una trampa. Si le alcanza un ataque físico, la trampa estalla y los oponentes sufren daño."
  },
  "shelter": {
    "num": 842,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Retracción",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "def": 2
    },
    "target": "self",
    "type": "Steel",
    "id": "shelter",
    "description": "Movimiento de estado de tipo Steel. Modifica estadísticas: Defensa +2."
  },
  "shiftgear": {
    "num": 508,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Cambio de Marcha",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "spe": 2,
      "atk": 1
    },
    "target": "self",
    "type": "Steel",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Clever",
    "id": "shiftgear",
    "description": "Al hacer girar los engranajes, el usuario mejora su Ataque y aumenta mucho su Velocidad."
  },
  "shockwave": {
    "num": 351,
    "accuracy": true,
    "basePower": 60,
    "category": "Special",
    "name": "Onda Voltio",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Electric",
    "contestType": "Cool",
    "id": "shockwave",
    "description": "Ataque especial de tipo Electric, potencia base 60."
  },
  "shoreup": {
    "num": 659,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Recogearena",
    "pp": 5,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "heal": 1,
      "metronome": 1
    },
    "target": "self",
    "type": "Ground",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Beautiful",
    "id": "shoreup",
    "description": "Restaura la mitad de los PS máximos del usuario. Durante las tormentas de arena, restaura aún más PS."
  },
  "signalbeam": {
    "num": 324,
    "accuracy": 100,
    "basePower": 75,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Rayo Señal",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "volatileStatus": "confusion"
    },
    "target": "normal",
    "type": "Bug",
    "contestType": "Beautiful",
    "id": "signalbeam",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "silktrap": {
    "num": 852,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Telatrampa",
    "pp": 10,
    "priority": 4,
    "flags": {},
    "stallingMove": true,
    "volatileStatus": "silktrap",
    "condition": {
      "duration": 1,
      "onTryHitPriority": 3
    },
    "target": "self",
    "type": "Bug",
    "id": "silktrap",
    "description": "Movimiento de estado de tipo Bug. Prioridad +4. Puede causar silktrap."
  },
  "silverwind": {
    "num": 318,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Viento Plata",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "self": {
        "boosts": {
          "atk": 1,
          "def": 1,
          "spa": 1,
          "spd": 1,
          "spe": 1
        }
      }
    },
    "target": "normal",
    "type": "Bug",
    "contestType": "Beautiful",
    "id": "silverwind",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "simplebeam": {
    "num": 493,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Onda Simple",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spa": 1
      }
    },
    "contestType": "Cute",
    "id": "simplebeam",
    "description": "Lanza una onda psíquica que hace que la habilidad del objetivo pase a ser Simple."
  },
  "sing": {
    "num": 47,
    "accuracy": 55,
    "basePower": 0,
    "category": "Status",
    "name": "Canto",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "status": "slp",
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Cute",
    "id": "sing",
    "description": "Movimiento de estado de tipo Normal. Puede causar sueño. Precisión: 55%."
  },
  "sinisterarrowraid": {
    "num": 695,
    "accuracy": true,
    "basePower": 180,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Aluvión de Flechas Sombrías",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "decidiumz",
    "target": "normal",
    "type": "Ghost",
    "contestType": "Cool",
    "id": "sinisterarrowraid",
    "description": "Ataque físico de tipo Ghost, potencia base 180."
  },
  "sizzlyslide": {
    "num": 735,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "isNonstandard": "LGPE",
    "name": "Flarembestida",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "defrost": 1
    },
    "secondary": {
      "chance": 100,
      "status": "brn"
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Clever",
    "id": "sizzlyslide",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "sketch": {
    "num": 166,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Esquema",
    "pp": 1,
    "noPPBoosts": true,
    "priority": 0,
    "flags": {
      "bypasssub": 1,
      "allyanim": 1,
      "failencore": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1,
      "nosketch": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "atk": 1,
        "def": 1,
        "spa": 1,
        "spd": 1,
        "spe": 1
      }
    },
    "contestType": "Clever",
    "id": "sketch",
    "description": "Aprende de forma permanente el último movimiento utilizado por el objetivo. Es de un solo uso."
  },
  "skillswap": {
    "num": 285,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Intercambio",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "bypasssub": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Clever",
    "id": "skillswap",
    "description": "Usa el poder psíquico para intercambiar habilidades con el objetivo."
  },
  "skittersmack": {
    "num": 806,
    "accuracy": 90,
    "basePower": 70,
    "category": "Physical",
    "name": "Golpe Rastrero",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "spa": -1
      }
    },
    "target": "normal",
    "type": "Bug",
    "id": "skittersmack",
    "description": "Ataca al objetivo por la espalda de forma subrepticia y además reduce su Ataque Especial."
  },
  "skullbash": {
    "num": 130,
    "accuracy": 100,
    "basePower": 130,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Cabezazo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "charge": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "nosleeptalk": 1,
      "failinstruct": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "skullbash",
    "description": "El usuario se prepara y sube su Defensa en el primer turno y en el segundo arremete con un cabezazo."
  },
  "skyattack": {
    "num": 143,
    "accuracy": 90,
    "basePower": 140,
    "category": "Physical",
    "name": "Ataque Aéreo",
    "pp": 5,
    "priority": 0,
    "flags": {
      "charge": 1,
      "protect": 1,
      "mirror": 1,
      "distance": 1,
      "metronome": 1,
      "nosleeptalk": 1,
      "failinstruct": 1
    },
    "critRatio": 2,
    "secondary": {
      "chance": 30,
      "volatileStatus": "flinch"
    },
    "target": "any",
    "type": "Flying",
    "contestType": "Cool",
    "id": "skyattack",
    "description": "Ataca durante dos turnos y suele asestar un golpe crítico. También puede amedrentar al objetivo."
  },
  "skydrop": {
    "num": 507,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Caída Libre",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "charge": 1,
      "protect": 1,
      "mirror": 1,
      "gravity": 1,
      "distance": 1,
      "metronome": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failinstruct": 1
    },
    "tracksTarget": true,
    "condition": {
      "duration": 2,
      "onFoeTrapPokemonPriority": -15,
      "onFoeBeforeMovePriority": 12,
      "onRedirectTargetPriority": 99
    },
    "target": "any",
    "type": "Flying",
    "contestType": "Tough",
    "id": "skydrop",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "skyuppercut": {
    "num": 327,
    "accuracy": 90,
    "basePower": 85,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Gancho Alto",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Cool",
    "id": "skyuppercut",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "slackoff": {
    "num": 303,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Relajo",
    "pp": 5,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "heal": 1,
      "metronome": 1
    },
    "heal": [
      1,
      2
    ],
    "target": "self",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Cute",
    "id": "slackoff",
    "description": "El usuario se relaja y restaura la mitad de sus PS máximos."
  },
  "slam": {
    "num": 21,
    "accuracy": 75,
    "basePower": 80,
    "category": "Physical",
    "name": "Atizar",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "slam",
    "description": "Ataque físico de tipo Normal, potencia base 80. Precisión: 75%."
  },
  "slash": {
    "num": 163,
    "accuracy": 100,
    "basePower": 70,
    "category": "Physical",
    "name": "Cuchillada",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "slicing": 1
    },
    "critRatio": 2,
    "target": "normal",
    "type": "Normal",
    "contestType": "Cool",
    "id": "slash",
    "description": "Ataca con cuchillas o con pinzas. Suele asestar un golpe crítico."
  },
  "sleeppowder": {
    "num": 79,
    "accuracy": 75,
    "basePower": 0,
    "category": "Status",
    "name": "Somnífero",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1,
      "powder": 1
    },
    "status": "slp",
    "target": "normal",
    "type": "Grass",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Clever",
    "id": "sleeppowder",
    "description": "Movimiento de estado de tipo Grass. Puede causar sueño. Precisión: 75%."
  },
  "sleeptalk": {
    "num": 214,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Sonámbulo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "failencore": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1
    },
    "sleepUsable": true,
    "callsMove": true,
    "target": "self",
    "type": "Normal",
    "zMove": {
      "effect": "crit2"
    },
    "contestType": "Cute",
    "id": "sleeptalk",
    "description": "Mientras duerme, usa uno de sus movimientos elegido al azar."
  },
  "sludge": {
    "num": 124,
    "accuracy": 100,
    "basePower": 65,
    "category": "Special",
    "name": "Residuos",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "status": "psn"
    },
    "target": "normal",
    "type": "Poison",
    "contestType": "Tough",
    "id": "sludge",
    "description": "Arroja residuos al objetivo. Puede llegar a envenenar."
  },
  "sludgebomb": {
    "num": 188,
    "accuracy": 100,
    "basePower": 90,
    "category": "Special",
    "name": "Bomba Lodo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "secondary": {
      "chance": 30,
      "status": "psn"
    },
    "target": "normal",
    "type": "Poison",
    "contestType": "Tough",
    "id": "sludgebomb",
    "description": "Arroja residuos al objetivo. Puede llegar a envenenar."
  },
  "sludgewave": {
    "num": 482,
    "accuracy": 100,
    "basePower": 95,
    "category": "Special",
    "name": "Onda Tóxica",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "status": "psn"
    },
    "target": "allAdjacent",
    "type": "Poison",
    "contestType": "Tough",
    "id": "sludgewave",
    "description": "Una onda tóxica que daña a los Pokémon de alrededor. Puede envenenar."
  },
  "smackdown": {
    "num": 479,
    "accuracy": 100,
    "basePower": 50,
    "category": "Physical",
    "name": "Antiaéreo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1
    },
    "volatileStatus": "smackdown",
    "condition": {
      "noCopy": true
    },
    "target": "normal",
    "type": "Rock",
    "contestType": "Tough",
    "id": "smackdown",
    "description": "Ataca lanzando una piedra o un proyectil. Si el objetivo está en el aire, lo estrella contra el suelo."
  },
  "smartstrike": {
    "num": 684,
    "accuracy": true,
    "basePower": 70,
    "category": "Physical",
    "name": "Cuerno Certero",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Steel",
    "contestType": "Cool",
    "id": "smartstrike",
    "description": "Ataque físico de tipo Steel, potencia base 70."
  },
  "smellingsalts": {
    "num": 265,
    "accuracy": 100,
    "basePower": 70,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Estímulo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "smellingsalts",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente.",
    "dynamicBasePower": true
  },
  "smog": {
    "num": 123,
    "accuracy": 70,
    "basePower": 30,
    "category": "Special",
    "name": "Polución",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 40,
      "status": "psn"
    },
    "target": "normal",
    "type": "Poison",
    "contestType": "Tough",
    "id": "smog",
    "description": "Lanza un ataque con gases tóxicos que pueden llegar a envenenar."
  },
  "smokescreen": {
    "num": 108,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Pantalla de Humo",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "boosts": {
      "accuracy": -1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "evasion": 1
      }
    },
    "contestType": "Clever",
    "id": "smokescreen",
    "description": "Baja la Precisión del objetivo con una nube de humo o tinta."
  },
  "snaptrap": {
    "num": 779,
    "accuracy": 100,
    "basePower": 35,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Cepo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1
    },
    "volatileStatus": "partiallytrapped",
    "target": "normal",
    "type": "Grass",
    "id": "snaptrap",
    "description": "Cepo que atrapa al objetivo durante cuatro o cinco turnos y le causa daño mientras se encuentra preso."
  },
  "snarl": {
    "num": 555,
    "accuracy": 95,
    "basePower": 55,
    "category": "Special",
    "name": "Alarido",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "spa": -1
      }
    },
    "target": "allAdjacentFoes",
    "type": "Dark",
    "contestType": "Tough",
    "id": "snarl",
    "description": "Chillido desagradable que baja el Ataque Especial del rival."
  },
  "snatch": {
    "num": 289,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Robo",
    "pp": 10,
    "priority": 4,
    "flags": {
      "bypasssub": 1,
      "mustpressure": 1,
      "noassist": 1,
      "failcopycat": 1
    },
    "volatileStatus": "snatch",
    "condition": {
      "duration": 1,
      "onAnyPrepareHitPriority": -1
    },
    "target": "self",
    "type": "Dark",
    "zMove": {
      "boost": {
        "spe": 2
      }
    },
    "contestType": "Clever",
    "id": "snatch",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "snipeshot": {
    "num": 745,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Disparo Certero",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "critRatio": 2,
    "tracksTarget": true,
    "target": "normal",
    "type": "Water",
    "id": "snipeshot",
    "description": "Permite atacar al objetivo seleccionado ignorando las habilidades o movimientos que permiten a un rival centrar la atención sobre sí."
  },
  "snore": {
    "num": 173,
    "accuracy": 100,
    "basePower": 50,
    "category": "Special",
    "name": "Ronquido",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1
    },
    "sleepUsable": true,
    "secondary": {
      "chance": 30,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cute",
    "id": "snore",
    "description": "Fuerte ronquido que solo puede usarse dormido. Puede amedrentar al objetivo."
  },
  "snowscape": {
    "num": 883,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Paisaje Nevado",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "weather": "snowscape",
    "target": "all",
    "type": "Ice",
    "id": "snowscape",
    "description": "Movimiento de estado de tipo Ice. Cambia el clima a snowscape."
  },
  "soak": {
    "num": 487,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Empapar",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Water",
    "zMove": {
      "boost": {
        "spa": 1
      }
    },
    "contestType": "Cute",
    "id": "soak",
    "description": "Potente lluvia que transforma al objetivo en un Pokémon de tipo Agua."
  },
  "softboiled": {
    "num": 135,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Ovocuración",
    "pp": 5,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "heal": 1,
      "metronome": 1
    },
    "heal": [
      1,
      2
    ],
    "target": "self",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Cute",
    "id": "softboiled",
    "description": "Restaura la mitad de los PS máximos del usuario."
  },
  "solarbeam": {
    "num": 76,
    "accuracy": 100,
    "basePower": 120,
    "category": "Special",
    "name": "Rayo Solar",
    "pp": 10,
    "priority": 0,
    "flags": {
      "charge": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "nosleeptalk": 1,
      "failinstruct": 1
    },
    "target": "normal",
    "type": "Grass",
    "contestType": "Cool",
    "id": "solarbeam",
    "description": "El usuario absorbe luz en el primer turno y en el segundo lanza un potente rayo de energía."
  },
  "solarblade": {
    "num": 669,
    "accuracy": 100,
    "basePower": 125,
    "category": "Physical",
    "name": "Cuchilla Solar",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "charge": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "nosleeptalk": 1,
      "failinstruct": 1,
      "slicing": 1
    },
    "target": "normal",
    "type": "Grass",
    "contestType": "Cool",
    "id": "solarblade",
    "description": "El usuario dedica un turno a absorber energía lumínica y concentrarla en forma de cuchilla con la que ataca al rival en el siguiente turno."
  },
  "sonicboom": {
    "num": 49,
    "accuracy": 90,
    "basePower": 0,
    "damage": 20,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Bomba Sónica",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cool",
    "id": "sonicboom",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "soulstealing7starstrike": {
    "num": 699,
    "accuracy": true,
    "basePower": 195,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Constelación Robaalmas",
    "pp": 1,
    "priority": 0,
    "flags": {
      "contact": 1
    },
    "isZ": "marshadiumz",
    "target": "normal",
    "type": "Ghost",
    "contestType": "Cool",
    "id": "soulstealing7starstrike",
    "description": "Ataque físico de tipo Ghost, potencia base 195."
  },
  "spacialrend": {
    "num": 460,
    "accuracy": 95,
    "basePower": 100,
    "category": "Special",
    "name": "Corte Vacío",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "critRatio": 2,
    "target": "normal",
    "type": "Dragon",
    "contestType": "Beautiful",
    "id": "spacialrend",
    "description": "Desgarra al objetivo y el espacio a su alrededor. Suele ser crítico."
  },
  "spark": {
    "num": 209,
    "accuracy": 100,
    "basePower": 65,
    "category": "Physical",
    "name": "Chispa",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "status": "par"
    },
    "target": "normal",
    "type": "Electric",
    "contestType": "Cool",
    "id": "spark",
    "description": "Ataque eléctrico que puede llegar a paralizar."
  },
  "sparklingaria": {
    "num": 664,
    "accuracy": 100,
    "basePower": 90,
    "category": "Special",
    "name": "Aria Burbuja",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "volatileStatus": "sparklingaria"
    },
    "target": "allAdjacent",
    "type": "Water",
    "contestType": "Tough",
    "id": "sparklingaria",
    "description": "Libera burbujas al cantar. Este movimiento cura las quemaduras de los Pokémon que reciban daño."
  },
  "sparklyswirl": {
    "num": 740,
    "accuracy": 85,
    "basePower": 120,
    "category": "Special",
    "isNonstandard": "LGPE",
    "name": "Sylveotornado",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "self": {},
    "target": "normal",
    "type": "Fairy",
    "contestType": "Clever",
    "id": "sparklyswirl",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "spectralthief": {
    "num": 712,
    "accuracy": 100,
    "basePower": 90,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Robasombra",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "bypasssub": 1
    },
    "stealsBoosts": true,
    "target": "normal",
    "type": "Ghost",
    "contestType": "Cool",
    "id": "spectralthief",
    "description": "El usuario se esconde en la sombra del objetivo y lo ataca tras robarle las mejoras en sus características."
  },
  "speedswap": {
    "num": 683,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Cambiavelocidad",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "bypasssub": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Clever",
    "id": "speedswap",
    "description": "Intercambia su Velocidad por la del oponente."
  },
  "spicyextract": {
    "num": 858,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Extracto Picante",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1
    },
    "boosts": {
      "atk": 2,
      "def": -2
    },
    "target": "normal",
    "type": "Grass",
    "id": "spicyextract",
    "description": "Movimiento de estado de tipo Grass. Modifica estadísticas: Ataque +2, Defensa -2."
  },
  "spiderweb": {
    "num": 169,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Telaraña",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Bug",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Clever",
    "id": "spiderweb",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "spikecannon": {
    "num": 131,
    "accuracy": 100,
    "basePower": 20,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Clavo Cañón",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": [
      2,
      5
    ],
    "target": "normal",
    "type": "Normal",
    "maxMove": {
      "basePower": 120
    },
    "contestType": "Cool",
    "id": "spikecannon",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "spikes": {
    "num": 191,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Púas",
    "pp": 20,
    "priority": 0,
    "flags": {
      "reflectable": 1,
      "nonsky": 1,
      "metronome": 1,
      "mustpressure": 1
    },
    "sideCondition": "spikes",
    "condition": {},
    "target": "foeSide",
    "type": "Ground",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Clever",
    "id": "spikes",
    "description": "Esparce púas alrededor del equipo rival que hieren a los Pokémon rivales que entran en combate."
  },
  "spikyshield": {
    "num": 596,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Barrera Espinosa",
    "pp": 10,
    "priority": 4,
    "flags": {
      "noassist": 1,
      "failcopycat": 1
    },
    "stallingMove": true,
    "volatileStatus": "spikyshield",
    "condition": {
      "duration": 1,
      "onTryHitPriority": 3
    },
    "target": "self",
    "type": "Grass",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Tough",
    "id": "spikyshield",
    "description": "Protege al usuario de ataques, e inflige daño a quien se los lance si entra en contacto con él."
  },
  "spinout": {
    "num": 859,
    "accuracy": 100,
    "basePower": 100,
    "category": "Physical",
    "name": "Quemarrueda",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "self": {
      "boosts": {
        "spe": -2
      }
    },
    "target": "normal",
    "type": "Steel",
    "id": "spinout",
    "description": "Ataque físico de tipo Steel, potencia base 100. Modifica estadísticas: Velocidad -2."
  },
  "spiritbreak": {
    "num": 789,
    "accuracy": 100,
    "basePower": 75,
    "category": "Physical",
    "name": "Choque Anímico",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "spa": -1
      }
    },
    "target": "normal",
    "type": "Fairy",
    "id": "spiritbreak",
    "description": "El usuario ataca al objetivo con tal ímpetu que acaba minando su moral y, en consecuencia, reduce su Ataque Especial."
  },
  "spiritshackle": {
    "num": 662,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Puntada Sombría",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100
    },
    "target": "normal",
    "type": "Ghost",
    "contestType": "Tough",
    "id": "spiritshackle",
    "description": "Ataca al oponente y, al mismo tiempo, fija su sombra al terreno para impedir su huida."
  },
  "spite": {
    "num": 180,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Rencor",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Ghost",
    "zMove": {
      "effect": "heal"
    },
    "contestType": "Tough",
    "id": "spite",
    "description": "Da rienda suelta a su rencor para reducir cuatro PP del último movimiento usado por el objetivo."
  },
  "spitup": {
    "num": 255,
    "accuracy": 100,
    "basePower": 0,
    "category": "Special",
    "name": "Escupir",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "spitup",
    "description": "Libera de una vez la energía acumulada con Reserva. La potencia del ataque será proporcional a la cantidad de energía acumulada.",
    "dynamicBasePower": true
  },
  "splash": {
    "num": 150,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Salpicadura",
    "pp": 40,
    "priority": 0,
    "flags": {
      "gravity": 1,
      "metronome": 1
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "boost": {
        "atk": 3
      }
    },
    "contestType": "Cute",
    "id": "splash",
    "description": "Movimiento de estado de tipo Normal."
  },
  "splinteredstormshards": {
    "num": 727,
    "accuracy": true,
    "basePower": 190,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Tempestad Rocosa",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "lycaniumz",
    "target": "normal",
    "type": "Rock",
    "contestType": "Cool",
    "id": "splinteredstormshards",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "splishysplash": {
    "num": 730,
    "accuracy": 100,
    "basePower": 90,
    "category": "Special",
    "isNonstandard": "LGPE",
    "name": "Salpikasurf",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
      "chance": 30,
      "status": "par"
    },
    "target": "allAdjacentFoes",
    "type": "Water",
    "contestType": "Cool",
    "id": "splishysplash",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "spore": {
    "num": 147,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Espora",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1,
      "powder": 1
    },
    "status": "slp",
    "target": "normal",
    "type": "Grass",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Beautiful",
    "id": "spore",
    "description": "Movimiento de estado de tipo Grass. Puede causar sueño."
  },
  "spotlight": {
    "num": 671,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Foco",
    "pp": 15,
    "priority": 3,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "allyanim": 1,
      "noassist": 1,
      "failcopycat": 1
    },
    "volatileStatus": "spotlight",
    "condition": {
      "duration": 1,
      "noCopy": true,
      "onFoeRedirectTargetPriority": 2
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Cute",
    "id": "spotlight",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "springtidestorm": {
    "num": 831,
    "accuracy": 80,
    "basePower": 100,
    "category": "Special",
    "name": "Ciclón Primavera",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "wind": 1
    },
    "secondary": {
      "chance": 30,
      "boosts": {
        "atk": -1
      }
    },
    "target": "allAdjacentFoes",
    "type": "Fairy",
    "id": "springtidestorm",
    "description": "Ataque especial de tipo Fairy, potencia base 100. Precisión: 80%."
  },
  "stealthrock": {
    "num": 446,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Trampa Rocas",
    "pp": 20,
    "priority": 0,
    "flags": {
      "reflectable": 1,
      "metronome": 1,
      "mustpressure": 1
    },
    "sideCondition": "stealthrock",
    "condition": {},
    "target": "foeSide",
    "type": "Rock",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Cool",
    "id": "stealthrock",
    "description": "Una trampa de rocas que flota en el aire y daña a los objetivos que entran en combate."
  },
  "steameruption": {
    "num": 592,
    "accuracy": 95,
    "basePower": 110,
    "category": "Special",
    "name": "Chorro de Vapor",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "defrost": 1
    },
    "thawsTarget": true,
    "secondary": {
      "chance": 30,
      "status": "brn"
    },
    "target": "normal",
    "type": "Water",
    "contestType": "Beautiful",
    "id": "steameruption",
    "description": "Envuelve al Pokémon oponente con vapor extremadamente caliente que puede llegar a quemarlo."
  },
  "steamroller": {
    "num": 537,
    "accuracy": 100,
    "basePower": 65,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Rodillo de Púas",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "minimize": 1
    },
    "secondary": {
      "chance": 30,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Bug",
    "contestType": "Tough",
    "id": "steamroller",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "steelbeam": {
    "num": 796,
    "accuracy": 95,
    "basePower": 140,
    "category": "Special",
    "name": "Metaláser",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "mindBlownRecoil": true,
    "target": "normal",
    "type": "Steel",
    "id": "steelbeam",
    "description": "Utiliza el acero de su cuerpo para disparar un potente rayo. También hiere al agresor."
  },
  "steelroller": {
    "num": 798,
    "accuracy": 100,
    "basePower": 130,
    "category": "Physical",
    "name": "Allanador Férreo",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Steel",
    "id": "steelroller",
    "description": "El usuario lanza su ataque y destruye el campo activo en el terreno de combate, y falla si no hay ninguno en ese momento."
  },
  "steelwing": {
    "num": 211,
    "accuracy": 90,
    "basePower": 70,
    "category": "Physical",
    "name": "Ala de Acero",
    "pp": 25,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "self": {
        "boosts": {
          "def": 1
        }
      }
    },
    "target": "normal",
    "type": "Steel",
    "contestType": "Cool",
    "id": "steelwing",
    "description": "Alas macizas que golpean al objetivo y pueden subir la Defensa del usuario."
  },
  "stickyweb": {
    "num": 564,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Red Viscosa",
    "pp": 20,
    "priority": 0,
    "flags": {
      "reflectable": 1,
      "metronome": 1
    },
    "sideCondition": "stickyweb",
    "condition": {},
    "target": "foeSide",
    "type": "Bug",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Tough",
    "id": "stickyweb",
    "description": "Coloca una red pegajosa alrededor del equipo rival que baja la Velocidad de cualquier adversario que entre a combatir."
  },
  "stockpile": {
    "num": 254,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Reserva",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "volatileStatus": "stockpile",
    "condition": {
      "noCopy": true
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "effect": "heal"
    },
    "contestType": "Tough",
    "id": "stockpile",
    "description": "Acumula energía y sube la Defensa y la Defensa Especial. Puede utilizarse hasta tres veces."
  },
  "stokedsparksurfer": {
    "num": 700,
    "accuracy": true,
    "basePower": 175,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Surfeo Galvánico",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "aloraichiumz",
    "secondary": {
      "chance": 100,
      "status": "par"
    },
    "target": "normal",
    "type": "Electric",
    "contestType": "Cool",
    "id": "stokedsparksurfer",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "stomp": {
    "num": 23,
    "accuracy": 100,
    "basePower": 65,
    "category": "Physical",
    "name": "Pisotón",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1,
      "minimize": 1
    },
    "secondary": {
      "chance": 30,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "stomp",
    "description": "Tremendo pisotón que puede hacer que el objetivo se amedrente."
  },
  "stompingtantrum": {
    "num": 707,
    "accuracy": 100,
    "basePower": 75,
    "category": "Physical",
    "name": "Pataleta",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Ground",
    "contestType": "Tough",
    "id": "stompingtantrum",
    "description": "Usa la frustración como revulsivo para atacar. La potencia de Pataleta se duplica si el usuario ha fallado el último movimiento usado.",
    "dynamicBasePower": true
  },
  "stoneaxe": {
    "num": 830,
    "accuracy": 90,
    "basePower": 65,
    "category": "Physical",
    "name": "Hachazo Pétreo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "slicing": 1
    },
    "secondary": {},
    "target": "normal",
    "type": "Rock",
    "id": "stoneaxe",
    "description": "Ataque físico de tipo Rock, potencia base 65. Precisión: 90%."
  },
  "stoneedge": {
    "num": 444,
    "accuracy": 80,
    "basePower": 100,
    "category": "Physical",
    "name": "Roca Afilada",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "critRatio": 2,
    "target": "normal",
    "type": "Rock",
    "contestType": "Tough",
    "id": "stoneedge",
    "description": "Clava piedras muy afiladas al objetivo. Suele ser crítico."
  },
  "storedpower": {
    "num": 500,
    "accuracy": 100,
    "basePower": 20,
    "category": "Special",
    "name": "Poder Reserva",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Psychic",
    "zMove": {
      "basePower": 160
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Clever",
    "id": "storedpower",
    "description": "Acumula poder para golpear. Cuanto más suban las características del usuario, mayor será el daño.",
    "dynamicBasePower": true
  },
  "stormthrow": {
    "num": 480,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Llave Corsé",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "willCrit": true,
    "target": "normal",
    "type": "Fighting",
    "contestType": "Cool",
    "id": "stormthrow",
    "description": "Lanza un golpe devastador. Siempre asesta un golpe crítico."
  },
  "strangesteam": {
    "num": 790,
    "accuracy": 95,
    "basePower": 90,
    "category": "Special",
    "name": "Cautivapor",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
      "chance": 20,
      "volatileStatus": "confusion"
    },
    "target": "normal",
    "type": "Fairy",
    "id": "strangesteam",
    "description": "Desprende un humo con el que ataca al objetivo, que puede acabar confundido."
  },
  "strength": {
    "num": 70,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Fuerza",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "strength",
    "description": "Ataque físico de tipo Normal, potencia base 80."
  },
  "strengthsap": {
    "num": 668,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Absorbefuerza",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "heal": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Grass",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Cute",
    "id": "strengthsap",
    "description": "Restaura una cantidad de PS equivalente al valor de Ataque del rival, que además verá reducida esta característica."
  },
  "stringshot": {
    "num": 81,
    "accuracy": 95,
    "basePower": 0,
    "category": "Status",
    "name": "Disparo Demora",
    "pp": 40,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "boosts": {
      "spe": -2
    },
    "target": "allAdjacentFoes",
    "type": "Bug",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Clever",
    "id": "stringshot",
    "description": "Lanza seda a los rivales y reduce mucho su Velocidad."
  },
  "struggle": {
    "num": 165,
    "accuracy": true,
    "basePower": 50,
    "category": "Physical",
    "name": "Forcejeo",
    "pp": 1,
    "noPPBoosts": true,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "failencore": 1,
      "failmefirst": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1,
      "nosketch": 1
    },
    "struggleRecoil": true,
    "target": "randomNormal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "struggle",
    "description": "Solo se usa como último recurso al acabarse los PP. Hiere un poco al agresor."
  },
  "strugglebug": {
    "num": 522,
    "accuracy": 100,
    "basePower": 50,
    "category": "Special",
    "name": "Estoicismo",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "spa": -1
      }
    },
    "target": "allAdjacentFoes",
    "type": "Bug",
    "contestType": "Cute",
    "id": "strugglebug",
    "description": "El usuario opone resistencia y ataca a los oponentes. También reduce su Ataque Especial."
  },
  "stuffcheeks": {
    "num": 747,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Atiborramiento",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "target": "self",
    "type": "Normal",
    "id": "stuffcheeks",
    "description": "El usuario ingiere la baya que lleva equipada para aumentar mucho su Defensa."
  },
  "stunspore": {
    "num": 78,
    "accuracy": 75,
    "basePower": 0,
    "category": "Status",
    "name": "Paralizador",
    "pp": 30,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1,
      "powder": 1
    },
    "status": "par",
    "target": "normal",
    "type": "Grass",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Clever",
    "id": "stunspore",
    "description": "Esparce polvo que paraliza al objetivo."
  },
  "submission": {
    "num": 66,
    "accuracy": 80,
    "basePower": 80,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Sumisión",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "recoil": [
      1,
      4
    ],
    "target": "normal",
    "type": "Fighting",
    "contestType": "Cool",
    "id": "submission",
    "description": "El usuario se lanza al suelo con el oponente en brazos y también se hace un poco de daño."
  },
  "substitute": {
    "num": 164,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Sustituto",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "nonsky": 1,
      "metronome": 1
    },
    "volatileStatus": "substitute",
    "condition": {
      "onTryPrimaryHitPriority": -1
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Cute",
    "id": "substitute",
    "description": "Utiliza parte de los PS propios para crear un sustituto que actúa como señuelo."
  },
  "subzeroslammer": {
    "num": 650,
    "accuracy": true,
    "basePower": 1,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Crioaliento Despiadado",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "iciumz",
    "target": "normal",
    "type": "Ice",
    "contestType": "Cool",
    "id": "subzeroslammer",
    "description": "Ataque físico de tipo Ice, potencia base 1."
  },
  "suckerpunch": {
    "num": 389,
    "accuracy": 100,
    "basePower": 70,
    "category": "Physical",
    "name": "Golpe Bajo",
    "pp": 5,
    "priority": 1,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Dark",
    "contestType": "Clever",
    "id": "suckerpunch",
    "description": "Permite atacar con prioridad. Falla si el objetivo no está preparando ningún ataque."
  },
  "sunnyday": {
    "num": 241,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Día Soleado",
    "pp": 5,
    "priority": 0,
    "flags": {
      "metronome": 1
    },
    "weather": "sunnyday",
    "target": "all",
    "type": "Fire",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Beautiful",
    "id": "sunnyday",
    "description": "Hace que se intensifique el efecto del sol durante cinco turnos, lo que potencia los movimientos de tipo Fuego y debilita los de tipo Agua."
  },
  "sunsteelstrike": {
    "num": 713,
    "accuracy": 100,
    "basePower": 100,
    "category": "Physical",
    "name": "Meteoimpacto",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1
    },
    "ignoreAbility": true,
    "target": "normal",
    "type": "Steel",
    "contestType": "Cool",
    "id": "sunsteelstrike",
    "description": "Ataca al objetivo con la potencia de un meteoro, ignorando su habilidad."
  },
  "supercellslam": {
    "num": 916,
    "accuracy": 95,
    "basePower": 100,
    "category": "Physical",
    "name": "Plancha Voltaica",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "minimize": 1
    },
    "hasCrashDamage": true,
    "target": "normal",
    "type": "Electric",
    "id": "supercellslam",
    "description": "Ataque físico de tipo Electric, potencia base 100. Precisión: 95%."
  },
  "superfang": {
    "num": 162,
    "accuracy": 90,
    "basePower": 0,
    "category": "Physical",
    "name": "Superdiente",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "superfang",
    "description": "Finos colmillos que reducen a la mitad los PS del objetivo."
  },
  "superpower": {
    "num": 276,
    "accuracy": 100,
    "basePower": 120,
    "category": "Physical",
    "name": "Fuerza Bruta",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "self": {
      "boosts": {
        "atk": -1,
        "def": -1
      }
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Tough",
    "id": "superpower",
    "description": "Ataque de gran potencia, pero que reduce el Ataque y la Defensa del agresor."
  },
  "supersonic": {
    "num": 48,
    "accuracy": 55,
    "basePower": 0,
    "category": "Status",
    "name": "Supersónico",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "volatileStatus": "confusion",
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Clever",
    "id": "supersonic",
    "description": "Movimiento de estado de tipo Normal. Puede causar confusión. Precisión: 55%."
  },
  "supersonicskystrike": {
    "num": 626,
    "accuracy": true,
    "basePower": 1,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Picado Supersónico",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "flyiniumz",
    "target": "normal",
    "type": "Flying",
    "contestType": "Cool",
    "id": "supersonicskystrike",
    "description": "Ataque físico de tipo Flying, potencia base 1."
  },
  "surf": {
    "num": 57,
    "accuracy": 100,
    "basePower": 90,
    "category": "Special",
    "name": "Surf",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1
    },
    "target": "allAdjacent",
    "type": "Water",
    "contestType": "Beautiful",
    "id": "surf",
    "description": "Inunda el terreno de combate con una ola gigante."
  },
  "surgingstrikes": {
    "num": 818,
    "accuracy": 100,
    "basePower": 25,
    "category": "Physical",
    "name": "Azote Torrencial",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1
    },
    "willCrit": true,
    "multihit": 3,
    "target": "normal",
    "type": "Water",
    "zMove": {
      "basePower": 140
    },
    "maxMove": {
      "basePower": 130
    },
    "id": "surgingstrikes",
    "description": "El usuario, dominador absoluto del líquido elemento, golpea hasta tres veces con movimientos fluidos. Siempre asesta un golpe crítico."
  },
  "swagger": {
    "num": 207,
    "accuracy": 85,
    "basePower": 0,
    "category": "Status",
    "name": "Fanfarronear",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "volatileStatus": "confusion",
    "boosts": {
      "atk": 2
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Cute",
    "id": "swagger",
    "description": "Provoca confusión en el objetivo, pero también sube mucho su Ataque."
  },
  "swallow": {
    "num": 256,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Tragar",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "heal": 1,
      "metronome": 1
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Tough",
    "id": "swallow",
    "description": "Absorbe la energía acumulada con Reserva para recobrar salud. Cuanta más se haya acumulado, mayor será el número de PS que se recuperen."
  },
  "sweetkiss": {
    "num": 186,
    "accuracy": 75,
    "basePower": 0,
    "category": "Status",
    "name": "Beso Dulce",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "volatileStatus": "confusion",
    "target": "normal",
    "type": "Fairy",
    "zMove": {
      "boost": {
        "spa": 1
      }
    },
    "contestType": "Cute",
    "id": "sweetkiss",
    "description": "Movimiento de estado de tipo Fairy. Puede causar confusión. Precisión: 75%."
  },
  "sweetscent": {
    "num": 230,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Dulce Aroma",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "boosts": {
      "evasion": -2
    },
    "target": "allAdjacentFoes",
    "type": "Normal",
    "zMove": {
      "boost": {
        "accuracy": 1
      }
    },
    "contestType": "Cute",
    "id": "sweetscent",
    "description": "Un dulce aroma engatusa al objetivo, por lo que se reduce mucho su Evasión."
  },
  "swift": {
    "num": 129,
    "accuracy": true,
    "basePower": 60,
    "category": "Special",
    "name": "Meteoros",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "allAdjacentFoes",
    "type": "Normal",
    "contestType": "Cool",
    "id": "swift",
    "description": "Lanza rayos en forma de estrella que no fallan nunca."
  },
  "switcheroo": {
    "num": 415,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Trapicheo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "allyanim": 1,
      "noassist": 1,
      "failcopycat": 1
    },
    "target": "normal",
    "type": "Dark",
    "zMove": {
      "boost": {
        "spe": 2
      }
    },
    "contestType": "Clever",
    "id": "switcheroo",
    "description": "Intercambia con el objetivo los objetos que llevan tan rápido que es imposible verlo a simple vista."
  },
  "swordsdance": {
    "num": 14,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Danza Espada",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "dance": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": 2
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Beautiful",
    "id": "swordsdance",
    "description": "Baile frenético que aumenta mucho el Ataque."
  },
  "synchronoise": {
    "num": 485,
    "accuracy": 100,
    "basePower": 120,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Sincrorruido",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "allAdjacent",
    "type": "Psychic",
    "contestType": "Clever",
    "id": "synchronoise",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "synthesis": {
    "num": 235,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Fotosíntesis",
    "pp": 5,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "heal": 1,
      "metronome": 1
    },
    "target": "self",
    "type": "Grass",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Clever",
    "id": "synthesis",
    "description": "Restaura PS del usuario. La cantidad varía según el tiempo que haga."
  },
  "syrupbomb": {
    "num": 903,
    "accuracy": 85,
    "basePower": 60,
    "category": "Special",
    "name": "Bomba Caramelo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "condition": {
      "noCopy": true,
      "duration": 4,
      "onResidualOrder": 14
    },
    "secondary": {
      "chance": 100,
      "volatileStatus": "syrupbomb"
    },
    "target": "normal",
    "type": "Grass",
    "id": "syrupbomb",
    "description": "Ataque especial de tipo Grass, potencia base 60. Precisión: 85%."
  },
  "tachyoncutter": {
    "num": 911,
    "accuracy": true,
    "basePower": 50,
    "category": "Special",
    "name": "Tajo Taquión",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "slicing": 1
    },
    "multihit": 2,
    "target": "normal",
    "type": "Steel",
    "zMove": {
      "basePower": 180
    },
    "maxMove": {
      "basePower": 140
    },
    "contestType": "Clever",
    "id": "tachyoncutter",
    "description": "Ataque especial de tipo Steel, potencia base 50. Golpea 2 veces."
  },
  "tackle": {
    "num": 33,
    "accuracy": 100,
    "basePower": 40,
    "category": "Physical",
    "name": "Placaje",
    "pp": 35,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "tackle",
    "description": "Ataque físico de tipo Normal, potencia base 40."
  },
  "tailglow": {
    "num": 294,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Luminicola",
    "pp": 20,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "spa": 3
    },
    "target": "self",
    "type": "Bug",
    "zMove": {
      "effect": "clearnegativeboost"
    },
    "contestType": "Beautiful",
    "id": "tailglow",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "tailslap": {
    "num": 541,
    "accuracy": 85,
    "basePower": 25,
    "category": "Physical",
    "name": "Plumerazo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": [
      2,
      5
    ],
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "basePower": 140
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Cute",
    "id": "tailslap",
    "description": "Golpea con la cola de dos a cinco veces seguidas."
  },
  "tailwhip": {
    "num": 39,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Agitacola",
    "pp": 30,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "boosts": {
      "def": -1
    },
    "target": "allAdjacentFoes",
    "type": "Normal",
    "zMove": {
      "boost": {
        "atk": 1
      }
    },
    "contestType": "Cute",
    "id": "tailwhip",
    "description": "Agita la cola para bajar la Defensa del equipo rival."
  },
  "tailwind": {
    "num": 366,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Viento Afín",
    "pp": 15,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1,
      "wind": 1
    },
    "sideCondition": "tailwind",
    "condition": {
      "duration": 4,
      "onSideResidualOrder": 26,
      "onSideResidualSubOrder": 5
    },
    "target": "allySide",
    "type": "Flying",
    "zMove": {
      "effect": "crit2"
    },
    "contestType": "Cool",
    "id": "tailwind",
    "description": "Crea un fuerte remolino que aumenta la Velocidad de los Pokémon de tu equipo durante cuatro turnos."
  },
  "takedown": {
    "num": 36,
    "accuracy": 85,
    "basePower": 90,
    "category": "Physical",
    "name": "Derribo",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "recoil": [
      1,
      4
    ],
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "takedown",
    "description": "Carga desmedida que también hiere al agresor."
  },
  "takeheart": {
    "num": 850,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Bálsamo Osado",
    "pp": 15,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "target": "self",
    "type": "Psychic",
    "id": "takeheart",
    "description": "Movimiento de estado de tipo Psychic."
  },
  "tarshot": {
    "num": 749,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Alquitranazo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "volatileStatus": "tarshot",
    "condition": {
      "onEffectivenessPriority": -2
    },
    "boosts": {
      "spe": -1
    },
    "target": "normal",
    "type": "Rock",
    "id": "tarshot",
    "description": "Cubre al objetivo de un alquitrán pegajoso que reduce su Velocidad y lo vuelve débil contra el fuego."
  },
  "taunt": {
    "num": 269,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Mofa",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "volatileStatus": "taunt",
    "condition": {
      "duration": 3,
      "onResidualOrder": 15,
      "onBeforeMovePriority": 5
    },
    "target": "normal",
    "type": "Dark",
    "zMove": {
      "boost": {
        "atk": 1
      }
    },
    "contestType": "Clever",
    "id": "taunt",
    "description": "Enfurece al objetivo para que solo use movimientos de ataque durante tres turnos."
  },
  "tearfullook": {
    "num": 715,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Ojos Llorosos",
    "pp": 20,
    "priority": 0,
    "flags": {
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": -1,
      "spa": -1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Cute",
    "id": "tearfullook",
    "description": "Mira al objetivo con ojos llorosos para hacerle perder su espíritu combativo y reduce su Ataque y Ataque Especial."
  },
  "teatime": {
    "num": 752,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Hora del Té",
    "pp": 10,
    "priority": 0,
    "flags": {
      "bypasssub": 1,
      "metronome": 1
    },
    "target": "all",
    "type": "Normal",
    "id": "teatime",
    "description": "El usuario invita a tomar el té a todos los presentes en el terreno de combate, lo que hace que ingieran las bayas que lleven equipadas."
  },
  "technoblast": {
    "num": 546,
    "accuracy": 100,
    "basePower": 120,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Tecno Shock",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cool",
    "id": "technoblast",
    "description": "Ataca al objetivo con un gran láser. El tipo del ataque lo determina el cartucho que porta el usuario."
  },
  "tectonicrage": {
    "num": 630,
    "accuracy": true,
    "basePower": 1,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Barrena Telúrica",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "groundiumz",
    "target": "normal",
    "type": "Ground",
    "contestType": "Cool",
    "id": "tectonicrage",
    "description": "Ataque físico de tipo Ground, potencia base 1."
  },
  "teeterdance": {
    "num": 298,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Danza Caos",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "dance": 1,
      "metronome": 1
    },
    "volatileStatus": "confusion",
    "target": "allAdjacent",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spa": 1
      }
    },
    "contestType": "Cute",
    "id": "teeterdance",
    "description": "Danza histérica que confunde a los Pokémon que están alrededor del usuario."
  },
  "telekinesis": {
    "num": 477,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Telequinesis",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "gravity": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "volatileStatus": "telekinesis",
    "condition": {
      "duration": 3,
      "onAccuracyPriority": -1,
      "onResidualOrder": 19
    },
    "target": "normal",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spa": 1
      }
    },
    "contestType": "Clever",
    "id": "telekinesis",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "teleport": {
    "num": 100,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Teletransporte",
    "pp": 20,
    "priority": -6,
    "flags": {
      "metronome": 1
    },
    "selfSwitch": true,
    "target": "self",
    "type": "Psychic",
    "zMove": {
      "effect": "heal"
    },
    "contestType": "Cool",
    "id": "teleport",
    "description": "Permite al usuario cambiarse por otro Pokémon del equipo, si es posible. Si un Pokémon salvaje usa este movimiento, huye del combate."
  },
  "temperflare": {
    "num": 915,
    "accuracy": 100,
    "basePower": 75,
    "category": "Physical",
    "name": "Cólera Ardiente",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Fire",
    "id": "temperflare",
    "description": "Ataque físico de tipo Fire, potencia base 75 variable.",
    "dynamicBasePower": true
  },
  "terablast": {
    "num": 851,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Teraexplosión",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "mustpressure": 1
    },
    "target": "normal",
    "type": "Normal",
    "id": "terablast",
    "description": "Ataque especial de tipo Normal, potencia base 80 variable.",
    "dynamicBasePower": true
  },
  "terastarstorm": {
    "num": 906,
    "accuracy": 100,
    "basePower": 120,
    "category": "Special",
    "name": "Teraclúster",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "nosketch": 1
    },
    "target": "normal",
    "type": "Normal",
    "id": "terastarstorm",
    "description": "Ataque especial de tipo Normal, potencia base 120."
  },
  "terrainpulse": {
    "num": 805,
    "accuracy": 100,
    "basePower": 50,
    "category": "Special",
    "name": "Pulso de Campo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "pulse": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "basePower": 160
    },
    "maxMove": {
      "basePower": 130
    },
    "id": "terrainpulse",
    "description": "El usuario ataca aprovechando la energía del campo activo, que determina tanto el tipo como la potencia del movimiento."
  },
  "thief": {
    "num": 168,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "name": "Ladrón",
    "pp": 25,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "failmefirst": 1,
      "noassist": 1,
      "failcopycat": 1
    },
    "target": "normal",
    "type": "Dark",
    "contestType": "Tough",
    "id": "thief",
    "description": "El agresor ataca y le quita el objeto al objetivo siempre y cuando no lleve ninguno."
  },
  "thousandarrows": {
    "num": 614,
    "accuracy": 100,
    "basePower": 90,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Mil Flechas",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "nonsky": 1
    },
    "volatileStatus": "smackdown",
    "ignoreImmunity": {
      "Ground": true
    },
    "target": "allAdjacentFoes",
    "type": "Ground",
    "zMove": {
      "basePower": 180
    },
    "contestType": "Beautiful",
    "id": "thousandarrows",
    "description": "Acierta incluso a Pokémon que estén en el aire y los hace caer al suelo."
  },
  "thousandwaves": {
    "num": 615,
    "accuracy": 100,
    "basePower": 90,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Mil Temblores",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "nonsky": 1
    },
    "target": "allAdjacentFoes",
    "type": "Ground",
    "contestType": "Tough",
    "id": "thousandwaves",
    "description": "El usuario genera ondas sísmicas que se propagan por el suelo y sacuden a los oponentes. Los Pokémon alcanzados no podrán huir del combate."
  },
  "thrash": {
    "num": 37,
    "accuracy": 100,
    "basePower": 120,
    "category": "Physical",
    "name": "Saña",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "failinstruct": 1
    },
    "self": {
      "volatileStatus": "lockedmove"
    },
    "target": "randomNormal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "thrash",
    "description": "Ataque de dos a tres turnos que acaba confundiendo al agresor."
  },
  "throatchop": {
    "num": 675,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Golpe Mordaza",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "condition": {
      "duration": 2,
      "onBeforeMovePriority": 6,
      "onResidualOrder": 22
    },
    "secondary": {
      "chance": 100
    },
    "target": "normal",
    "type": "Dark",
    "contestType": "Clever",
    "id": "throatchop",
    "description": "Inflige al rival un dolor tan abrumador que le impide utilizar durante dos turnos ataques que se sirven del sonido."
  },
  "thunder": {
    "num": 87,
    "accuracy": 70,
    "basePower": 110,
    "category": "Special",
    "name": "Trueno",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "status": "par"
    },
    "target": "normal",
    "type": "Electric",
    "contestType": "Cool",
    "id": "thunder",
    "description": "Un poderoso rayo que daña al objetivo y puede paralizarlo."
  },
  "thunderbolt": {
    "num": 85,
    "accuracy": 100,
    "basePower": 90,
    "category": "Special",
    "name": "Rayo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "status": "par"
    },
    "target": "normal",
    "type": "Electric",
    "contestType": "Cool",
    "id": "thunderbolt",
    "description": "Potente ataque eléctrico que puede paralizar al objetivo."
  },
  "thundercage": {
    "num": 819,
    "accuracy": 90,
    "basePower": 80,
    "category": "Special",
    "name": "Electrojaula",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "volatileStatus": "partiallytrapped",
    "target": "normal",
    "type": "Electric",
    "id": "thundercage",
    "description": "El objetivo queda atrapado en una jaula electrificada que permanece en el terreno de cuatro a cinco turnos."
  },
  "thunderclap": {
    "num": 909,
    "accuracy": 100,
    "basePower": 70,
    "category": "Special",
    "name": "Relámpago Súbito",
    "pp": 5,
    "priority": 1,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Electric",
    "contestType": "Clever",
    "id": "thunderclap",
    "description": "Ataque especial de tipo Electric, potencia base 70. Prioridad +1."
  },
  "thunderfang": {
    "num": 422,
    "accuracy": 95,
    "basePower": 65,
    "category": "Physical",
    "name": "Colmillo Rayo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bite": 1
    },
    "secondaries": [
      {
        "chance": 10,
        "status": "par"
      },
      {
        "chance": 10,
        "volatileStatus": "flinch"
      }
    ],
    "target": "normal",
    "type": "Electric",
    "contestType": "Cool",
    "id": "thunderfang",
    "description": "El usuario muerde al objetivo con colmillos electrificados y puede hacer que se amedrente o se paralice."
  },
  "thunderouskick": {
    "num": 823,
    "accuracy": 100,
    "basePower": 90,
    "category": "Physical",
    "name": "Patada Relámpago",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "def": -1
      }
    },
    "target": "normal",
    "type": "Fighting",
    "id": "thunderouskick",
    "description": "El usuario desconcierta al rival con movimientos centelleantes y le propina una patada. Baja la Defensa del objetivo."
  },
  "thunderpunch": {
    "num": 9,
    "accuracy": 100,
    "basePower": 75,
    "category": "Physical",
    "name": "Puño Trueno",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "status": "par"
    },
    "target": "normal",
    "type": "Electric",
    "contestType": "Cool",
    "id": "thunderpunch",
    "description": "Puñetazo eléctrico que puede paralizar al adversario."
  },
  "thundershock": {
    "num": 84,
    "accuracy": 100,
    "basePower": 40,
    "category": "Special",
    "name": "Impactrueno",
    "pp": 30,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 10,
      "status": "par"
    },
    "target": "normal",
    "type": "Electric",
    "contestType": "Cool",
    "id": "thundershock",
    "description": "Ataque eléctrico que puede paralizar al objetivo."
  },
  "thunderwave": {
    "num": 86,
    "accuracy": 90,
    "basePower": 0,
    "category": "Status",
    "name": "Onda Trueno",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "status": "par",
    "ignoreImmunity": false,
    "target": "normal",
    "type": "Electric",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Cool",
    "id": "thunderwave",
    "description": "Una ligera descarga que paraliza al objetivo si lo alcanza."
  },
  "tickle": {
    "num": 321,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Cosquillas",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": -1,
      "def": -1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Cute",
    "id": "tickle",
    "description": "Hace reír al objetivo para bajar su Ataque y Defensa."
  },
  "tidyup": {
    "num": 882,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Limpieza General",
    "pp": 10,
    "priority": 0,
    "flags": {},
    "target": "self",
    "type": "Normal",
    "id": "tidyup",
    "description": "Movimiento de estado de tipo Normal."
  },
  "topsyturvy": {
    "num": 576,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Reversión",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Dark",
    "zMove": {
      "boost": {
        "atk": 1
      }
    },
    "contestType": "Clever",
    "id": "topsyturvy",
    "description": "Invierte por completo los cambios en las características del objetivo."
  },
  "torchsong": {
    "num": 871,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Canto Ardiente",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "self": {
        "boosts": {
          "spa": 1
        }
      }
    },
    "target": "normal",
    "type": "Fire",
    "contestType": "Beautiful",
    "id": "torchsong",
    "description": "Ataque especial de tipo Fire, potencia base 80."
  },
  "torment": {
    "num": 259,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Tormento",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "bypasssub": 1,
      "metronome": 1
    },
    "volatileStatus": "torment",
    "condition": {
      "noCopy": true
    },
    "target": "normal",
    "type": "Dark",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Tough",
    "id": "torment",
    "description": "Atormenta y enfurece al objetivo, que no puede usar dos veces seguidas el mismo movimiento."
  },
  "toxic": {
    "num": 92,
    "accuracy": 90,
    "basePower": 0,
    "category": "Status",
    "name": "Tóxico",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "status": "tox",
    "target": "normal",
    "type": "Poison",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Clever",
    "id": "toxic",
    "description": "Envenena gravemente al objetivo y causa un daño mayor en cada turno."
  },
  "toxicspikes": {
    "num": 390,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Púas Tóxicas",
    "pp": 20,
    "priority": 0,
    "flags": {
      "reflectable": 1,
      "nonsky": 1,
      "metronome": 1,
      "mustpressure": 1
    },
    "sideCondition": "toxicspikes",
    "condition": {},
    "target": "foeSide",
    "type": "Poison",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Clever",
    "id": "toxicspikes",
    "description": "Lanza una trampa de púas tóxicas a los pies del objetivo. El veneno afecta a los Pokémon oponentes que entran en combate."
  },
  "toxicthread": {
    "num": 672,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Hilo Venenoso",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "status": "psn",
    "boosts": {
      "spe": -1
    },
    "target": "normal",
    "type": "Poison",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Tough",
    "id": "toxicthread",
    "description": "Ataca al oponente con hilillos venenosos que reducen su Velocidad y lo envenenan."
  },
  "trailblaze": {
    "num": 885,
    "accuracy": 100,
    "basePower": 50,
    "category": "Physical",
    "name": "Abrecaminos",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
      "chance": 100,
      "self": {
        "boosts": {
          "spe": 1
        }
      }
    },
    "target": "normal",
    "type": "Grass",
    "contestType": "Cool",
    "id": "trailblaze",
    "description": "Ataque físico de tipo Grass, potencia base 50."
  },
  "transform": {
    "num": 144,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Transformación",
    "pp": 10,
    "priority": 0,
    "flags": {
      "allyanim": 1,
      "failencore": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "effect": "heal"
    },
    "contestType": "Clever",
    "id": "transform",
    "description": "El usuario se transforma en una copia del objetivo, con los mismos movimientos."
  },
  "triattack": {
    "num": 161,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Triataque",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 20
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Beautiful",
    "id": "triattack",
    "description": "Ataque triple que puede paralizar, quemar o congelar al objetivo."
  },
  "trick": {
    "num": 271,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Truco",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "allyanim": 1,
      "noassist": 1,
      "failcopycat": 1
    },
    "target": "normal",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spe": 2
      }
    },
    "contestType": "Clever",
    "id": "trick",
    "description": "Engaña al objetivo desprevenido e intercambia objetos."
  },
  "trickortreat": {
    "num": 567,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Halloween",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Ghost",
    "zMove": {
      "boost": {
        "atk": 1,
        "def": 1,
        "spa": 1,
        "spd": 1,
        "spe": 1
      }
    },
    "contestType": "Cute",
    "id": "trickortreat",
    "description": "Invita al objetivo a celebrar Halloween, lo que añade el tipo Fantasma a los tipos de este."
  },
  "trickroom": {
    "num": 433,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Espacio Raro",
    "pp": 5,
    "priority": -7,
    "flags": {
      "mirror": 1,
      "metronome": 1
    },
    "pseudoWeather": "trickroom",
    "condition": {
      "duration": 5,
      "onFieldResidualOrder": 27,
      "onFieldResidualSubOrder": 1
    },
    "target": "all",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "accuracy": 1
      }
    },
    "contestType": "Clever",
    "id": "trickroom",
    "description": "Crea un espacio extraño en el que los Pokémon lentos se mueven primero durante cinco turnos."
  },
  "triplearrows": {
    "num": 843,
    "accuracy": 100,
    "basePower": 90,
    "category": "Physical",
    "name": "Triple Flecha",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "critRatio": 2,
    "secondaries": [
      {
        "chance": 50,
        "boosts": {
          "def": -1
        }
      },
      {
        "chance": 30,
        "volatileStatus": "flinch"
      }
    ],
    "target": "normal",
    "type": "Fighting",
    "id": "triplearrows",
    "description": "Ataque físico de tipo Fighting, potencia base 90. Tiene más probabilidad de asestar un golpe crítico."
  },
  "tripleaxel": {
    "num": 813,
    "accuracy": 90,
    "basePower": 20,
    "category": "Physical",
    "name": "Triple Axel",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": 3,
    "multiaccuracy": true,
    "target": "normal",
    "type": "Ice",
    "zMove": {
      "basePower": 120
    },
    "maxMove": {
      "basePower": 140
    },
    "id": "tripleaxel",
    "description": "Patea hasta tres veces seguidas y cada vez más fuerte.",
    "dynamicBasePower": true
  },
  "tripledive": {
    "num": 865,
    "accuracy": 95,
    "basePower": 30,
    "category": "Physical",
    "name": "Triple Inmersión",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": 3,
    "target": "normal",
    "type": "Water",
    "id": "tripledive",
    "description": "Ataque físico de tipo Water, potencia base 30. Golpea 3 veces. Precisión: 95%."
  },
  "triplekick": {
    "num": 167,
    "accuracy": 90,
    "basePower": 10,
    "category": "Physical",
    "name": "Triple Patada",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": 3,
    "multiaccuracy": true,
    "target": "normal",
    "type": "Fighting",
    "zMove": {
      "basePower": 120
    },
    "maxMove": {
      "basePower": 80
    },
    "contestType": "Cool",
    "id": "triplekick",
    "description": "Patea hasta tres veces seguidas y cada vez más fuerte.",
    "dynamicBasePower": true
  },
  "tropkick": {
    "num": 688,
    "accuracy": 100,
    "basePower": 70,
    "category": "Physical",
    "name": "Patada Tropical",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "boosts": {
        "atk": -1
      }
    },
    "target": "normal",
    "type": "Grass",
    "contestType": "Cute",
    "id": "tropkick",
    "description": "Lanza una patada con la fuerza del trópico que golpea al rival y reduce su Ataque."
  },
  "trumpcard": {
    "num": 376,
    "accuracy": true,
    "basePower": 0,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "As Oculto",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "basePower": 160
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Cool",
    "id": "trumpcard",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente.",
    "dynamicBasePower": true
  },
  "twinbeam": {
    "num": 888,
    "accuracy": 100,
    "basePower": 40,
    "category": "Special",
    "name": "Láser Doble",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "multihit": 2,
    "target": "normal",
    "type": "Psychic",
    "contestType": "Cool",
    "id": "twinbeam",
    "description": "Ataque especial de tipo Psychic, potencia base 40. Golpea 2 veces."
  },
  "twineedle": {
    "num": 41,
    "accuracy": 100,
    "basePower": 25,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Doble Ataque",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": 2,
    "secondary": {
      "chance": 20,
      "status": "psn"
    },
    "target": "normal",
    "type": "Bug",
    "maxMove": {
      "basePower": 100
    },
    "contestType": "Cool",
    "id": "twineedle",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "twinkletackle": {
    "num": 656,
    "accuracy": true,
    "basePower": 1,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Arrumaco Sideral",
    "pp": 1,
    "priority": 0,
    "flags": {},
    "isZ": "fairiumz",
    "target": "normal",
    "type": "Fairy",
    "contestType": "Cool",
    "id": "twinkletackle",
    "description": "Ataque físico de tipo Fairy, potencia base 1."
  },
  "twister": {
    "num": 239,
    "accuracy": 100,
    "basePower": 40,
    "category": "Special",
    "name": "Ciclón",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "wind": 1
    },
    "secondary": {
      "chance": 20,
      "volatileStatus": "flinch"
    },
    "target": "allAdjacentFoes",
    "type": "Dragon",
    "contestType": "Cool",
    "id": "twister",
    "description": "Crea un violento tornado para hacer trizas al objetivo. Puede amedrentarlo."
  },
  "upperhand": {
    "num": 918,
    "accuracy": 100,
    "basePower": 65,
    "category": "Physical",
    "name": "Palma Rauda",
    "pp": 15,
    "priority": 3,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 100,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Fighting",
    "id": "upperhand",
    "description": "Ataque físico de tipo Fighting, potencia base 65. Prioridad +3."
  },
  "uproar": {
    "num": 253,
    "accuracy": 100,
    "basePower": 90,
    "category": "Special",
    "name": "Alboroto",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "sound": 1,
      "bypasssub": 1,
      "metronome": 1,
      "nosleeptalk": 1,
      "failinstruct": 1
    },
    "self": {
      "volatileStatus": "uproar"
    },
    "condition": {
      "duration": 3,
      "onResidualOrder": 28,
      "onResidualSubOrder": 1,
      "onLockMove": "uproar"
    },
    "target": "randomNormal",
    "type": "Normal",
    "contestType": "Cute",
    "id": "uproar",
    "description": "Ataca de forma alborotada durante tres turnos. Mantiene despiertos a todos."
  },
  "uturn": {
    "num": 369,
    "accuracy": 100,
    "basePower": 70,
    "category": "Physical",
    "name": "Ida y Vuelta",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "selfSwitch": true,
    "target": "normal",
    "type": "Bug",
    "contestType": "Cute",
    "id": "uturn",
    "description": "Tras atacar, el usuario vuelve a toda prisa para dar paso a otro Pokémon del equipo."
  },
  "vacuumwave": {
    "num": 410,
    "accuracy": 100,
    "basePower": 40,
    "category": "Special",
    "name": "Onda Vacío",
    "pp": 30,
    "priority": 1,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Cool",
    "id": "vacuumwave",
    "description": "Gira los puños y libera una onda de vacío contra el objetivo. Este movimiento tiene prioridad alta."
  },
  "vcreate": {
    "num": 557,
    "accuracy": 95,
    "basePower": 180,
    "category": "Physical",
    "isNonstandard": "Unobtainable",
    "name": "V de Fuego",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1
    },
    "self": {
      "boosts": {
        "spe": -1,
        "def": -1,
        "spd": -1
      }
    },
    "target": "normal",
    "type": "Fire",
    "zMove": {
      "basePower": 220
    },
    "contestType": "Cool",
    "id": "vcreate",
    "description": "Golpea con una V de llamas al objetivo. Baja la Defensa, la Defensa Especial y la Velocidad de quien lo usa."
  },
  "veeveevolley": {
    "num": 741,
    "accuracy": true,
    "basePower": 0,
    "category": "Physical",
    "isNonstandard": "LGPE",
    "name": "Eevimpacto",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Cute",
    "id": "veeveevolley",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente.",
    "dynamicBasePower": true
  },
  "venomdrench": {
    "num": 599,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Trampa Venenosa",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "allAdjacentFoes",
    "type": "Poison",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Clever",
    "id": "venomdrench",
    "description": "Impregna a su objetivo con un líquido venenoso que disminuye el Ataque, el Ataque Especial y la Velocidad. Solo afecta a Pokémon ya envenenados."
  },
  "venoshock": {
    "num": 474,
    "accuracy": 100,
    "basePower": 65,
    "category": "Special",
    "name": "Carga Tóxica",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Poison",
    "contestType": "Beautiful",
    "id": "venoshock",
    "description": "Cubre al objetivo con un líquido venenoso. El daño será doble si este ya está envenenado."
  },
  "victorydance": {
    "num": 837,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Danza Triunfal",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "dance": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": 1,
      "def": 1,
      "spe": 1
    },
    "target": "self",
    "type": "Fighting",
    "id": "victorydance",
    "description": "Movimiento de estado de tipo Fighting. Modifica estadísticas: Ataque +1, Defensa +1, Velocidad +1."
  },
  "vinewhip": {
    "num": 22,
    "accuracy": 100,
    "basePower": 45,
    "category": "Physical",
    "name": "Látigo Cepa",
    "pp": 25,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Grass",
    "contestType": "Cool",
    "id": "vinewhip",
    "description": "Ataque físico de tipo Grass, potencia base 45."
  },
  "visegrip": {
    "num": 11,
    "accuracy": 100,
    "basePower": 55,
    "category": "Physical",
    "name": "Agarre",
    "pp": 30,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "visegrip",
    "description": "Ataque físico de tipo Normal, potencia base 55."
  },
  "vitalthrow": {
    "num": 233,
    "accuracy": true,
    "basePower": 70,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Llave Vital",
    "pp": 10,
    "priority": -1,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Cool",
    "id": "vitalthrow",
    "description": "El usuario ataca el último, pero no falla."
  },
  "voltswitch": {
    "num": 521,
    "accuracy": 100,
    "basePower": 70,
    "category": "Special",
    "name": "Voltiocambio",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "selfSwitch": true,
    "target": "normal",
    "type": "Electric",
    "contestType": "Cool",
    "id": "voltswitch",
    "description": "Tras atacar, el usuario vuelve a toda prisa para dar paso a otro Pokémon del equipo."
  },
  "volttackle": {
    "num": 344,
    "accuracy": 100,
    "basePower": 120,
    "category": "Physical",
    "name": "Placaje Eléctrico",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "recoil": [
      33,
      100
    ],
    "secondary": {
      "chance": 10,
      "status": "par"
    },
    "target": "normal",
    "type": "Electric",
    "contestType": "Cool",
    "id": "volttackle",
    "description": "Quien lo usa electrifica su cuerpo para luego atacar. Se hiere mucho a sí mismo, pero puede paralizar al objetivo."
  },
  "wakeupslap": {
    "num": 358,
    "accuracy": 100,
    "basePower": 70,
    "category": "Physical",
    "isNonstandard": "Past",
    "name": "Espabila",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Fighting",
    "contestType": "Tough",
    "id": "wakeupslap",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente.",
    "dynamicBasePower": true
  },
  "waterfall": {
    "num": 127,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Cascada",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 20,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Water",
    "contestType": "Tough",
    "id": "waterfall",
    "description": "Embiste con un gran impulso que puede llegar a amedrentar."
  },
  "watergun": {
    "num": 55,
    "accuracy": 100,
    "basePower": 40,
    "category": "Special",
    "name": "Pistola Agua",
    "pp": 25,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Water",
    "contestType": "Cute",
    "id": "watergun",
    "description": "Ataque especial de tipo Water, potencia base 40."
  },
  "waterpledge": {
    "num": 518,
    "accuracy": 100,
    "basePower": 80,
    "category": "Special",
    "name": "Voto Agua",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "nonsky": 1,
      "metronome": 1,
      "pledgecombo": 1
    },
    "condition": {
      "duration": 4,
      "onSideResidualOrder": 26,
      "onSideResidualSubOrder": 7
    },
    "target": "normal",
    "type": "Water",
    "contestType": "Beautiful",
    "id": "waterpledge",
    "description": "Ataca con columnas de agua. Combinado con Voto Fuego, crea un arcoíris y aumenta su potencia.",
    "dynamicBasePower": true
  },
  "waterpulse": {
    "num": 352,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "name": "Hidropulso",
    "pp": 20,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "distance": 1,
      "metronome": 1,
      "pulse": 1
    },
    "secondary": {
      "chance": 20,
      "volatileStatus": "confusion"
    },
    "target": "any",
    "type": "Water",
    "contestType": "Beautiful",
    "id": "waterpulse",
    "description": "Ataca con un potente chorro de agua. Puede confundir al objetivo."
  },
  "watershuriken": {
    "num": 594,
    "accuracy": 100,
    "basePower": 15,
    "category": "Special",
    "name": "Shuriken de Agua",
    "pp": 20,
    "priority": 1,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "multihit": [
      2,
      5
    ],
    "target": "normal",
    "type": "Water",
    "contestType": "Cool",
    "id": "watershuriken",
    "description": "Golpea al oponente de dos a cinco veces con estrellas arrojadizas hechas de mucosidad. Este movimiento tiene prioridad alta.",
    "dynamicBasePower": true
  },
  "watersport": {
    "num": 346,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "isNonstandard": "Past",
    "name": "Hidrochorro",
    "pp": 15,
    "priority": 0,
    "flags": {
      "nonsky": 1,
      "metronome": 1
    },
    "pseudoWeather": "watersport",
    "condition": {
      "duration": 5,
      "onBasePowerPriority": 1,
      "onFieldResidualOrder": 27,
      "onFieldResidualSubOrder": 3
    },
    "target": "all",
    "type": "Water",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Cute",
    "id": "watersport",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "waterspout": {
    "num": 323,
    "accuracy": 100,
    "basePower": 150,
    "category": "Special",
    "name": "Salpicar",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "allAdjacentFoes",
    "type": "Water",
    "contestType": "Beautiful",
    "id": "waterspout",
    "description": "Chorro de agua. Cuantos menos PS tenga el usuario, menos dañino será.",
    "dynamicBasePower": true
  },
  "wavecrash": {
    "num": 834,
    "accuracy": 100,
    "basePower": 120,
    "category": "Physical",
    "name": "Envite Acuático",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "recoil": [
      33,
      100
    ],
    "target": "normal",
    "type": "Water",
    "id": "wavecrash",
    "description": "Ataque físico de tipo Water, potencia base 120. El usuario recibe 33% del daño causado como retroceso."
  },
  "weatherball": {
    "num": 311,
    "accuracy": 100,
    "basePower": 50,
    "category": "Special",
    "name": "Meteorobola",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "basePower": 160
    },
    "maxMove": {
      "basePower": 130
    },
    "contestType": "Beautiful",
    "id": "weatherball",
    "description": "El tipo y fuerza del ataque varían según el tiempo que haga."
  },
  "whirlpool": {
    "num": 250,
    "accuracy": 85,
    "basePower": 35,
    "category": "Special",
    "name": "Torbellino",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "volatileStatus": "partiallytrapped",
    "target": "normal",
    "type": "Water",
    "contestType": "Beautiful",
    "id": "whirlpool",
    "description": "Una tromba de agua atrapa al objetivo durante cuatro o cinco turnos."
  },
  "whirlwind": {
    "num": 18,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Remolino",
    "pp": 20,
    "priority": -6,
    "flags": {
      "reflectable": 1,
      "mirror": 1,
      "bypasssub": 1,
      "allyanim": 1,
      "metronome": 1,
      "noassist": 1,
      "failcopycat": 1,
      "wind": 1
    },
    "forceSwitch": true,
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Clever",
    "id": "whirlwind",
    "description": "Se lleva al objetivo, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate."
  },
  "wickedblow": {
    "num": 817,
    "accuracy": 100,
    "basePower": 75,
    "category": "Physical",
    "name": "Golpe Oscuro",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "punch": 1
    },
    "willCrit": true,
    "target": "normal",
    "type": "Dark",
    "id": "wickedblow",
    "description": "Golpe devastador que requiere un absoluto dominio de las artes siniestras. Siempre asesta un golpe crítico."
  },
  "wickedtorque": {
    "num": 897,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "isNonstandard": "Unobtainable",
    "name": "Ominochoque",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "failencore": 1,
      "failmefirst": 1,
      "nosleeptalk": 1,
      "noassist": 1,
      "failcopycat": 1,
      "failmimic": 1,
      "failinstruct": 1,
      "nosketch": 1
    },
    "secondary": {
      "chance": 10,
      "status": "slp"
    },
    "target": "normal",
    "type": "Dark",
    "id": "wickedtorque",
    "description": "Ataque físico de tipo Dark, potencia base 80. 10% de probabilidad de causar sueño."
  },
  "wideguard": {
    "num": 469,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Vasta Guardia",
    "pp": 10,
    "priority": 3,
    "flags": {
      "snatch": 1
    },
    "sideCondition": "wideguard",
    "condition": {
      "duration": 1,
      "onTryHitPriority": 4
    },
    "target": "allySide",
    "type": "Rock",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Tough",
    "id": "wideguard",
    "description": "Bloquea los ataques de objetivo múltiple lanzados contra tu equipo durante un turno."
  },
  "wildboltstorm": {
    "num": 847,
    "accuracy": 80,
    "basePower": 100,
    "category": "Special",
    "name": "Electormenta",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "wind": 1
    },
    "secondary": {
      "chance": 20,
      "status": "par"
    },
    "target": "allAdjacentFoes",
    "type": "Electric",
    "id": "wildboltstorm",
    "description": "Ataque especial de tipo Electric, potencia base 100. 20% de probabilidad de causar parálisis. Precisión: 80%."
  },
  "wildcharge": {
    "num": 528,
    "accuracy": 100,
    "basePower": 90,
    "category": "Physical",
    "name": "Voltio Cruel",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "recoil": [
      1,
      4
    ],
    "target": "normal",
    "type": "Electric",
    "contestType": "Tough",
    "id": "wildcharge",
    "description": "Carga eléctrica muy potente que también hiere ligeramente a quien la usa."
  },
  "willowisp": {
    "num": 261,
    "accuracy": 85,
    "basePower": 0,
    "category": "Status",
    "name": "Fuego Fatuo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "status": "brn",
    "target": "normal",
    "type": "Fire",
    "zMove": {
      "boost": {
        "atk": 1
      }
    },
    "contestType": "Beautiful",
    "id": "willowisp",
    "description": "Siniestra llama morada que produce quemaduras."
  },
  "wingattack": {
    "num": 17,
    "accuracy": 100,
    "basePower": 60,
    "category": "Physical",
    "name": "Ataque Ala",
    "pp": 35,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "distance": 1,
      "metronome": 1
    },
    "target": "any",
    "type": "Flying",
    "contestType": "Cool",
    "id": "wingattack",
    "description": "Ataque físico de tipo Flying, potencia base 60."
  },
  "wish": {
    "num": 273,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Deseo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "heal": 1,
      "metronome": 1
    },
    "slotCondition": "Wish",
    "condition": {
      "onResidualOrder": 4
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Cute",
    "id": "wish",
    "description": "Restaura en el siguiente turno la mitad de los PS máximos del usuario o se los pasa al Pokémon que lo sustituye."
  },
  "withdraw": {
    "num": 110,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Refugio",
    "pp": 40,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "def": 1
    },
    "target": "self",
    "type": "Water",
    "zMove": {
      "boost": {
        "def": 1
      }
    },
    "contestType": "Cute",
    "id": "withdraw",
    "description": "El usuario se resguarda en su coraza, por lo que le sube la Defensa."
  },
  "wonderroom": {
    "num": 472,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Zona Extraña",
    "pp": 10,
    "priority": 0,
    "flags": {
      "mirror": 1,
      "metronome": 1
    },
    "pseudoWeather": "wonderroom",
    "condition": {
      "duration": 5,
      "onFieldResidualOrder": 27,
      "onFieldResidualSubOrder": 5
    },
    "target": "all",
    "type": "Psychic",
    "zMove": {
      "boost": {
        "spd": 1
      }
    },
    "contestType": "Clever",
    "id": "wonderroom",
    "description": "Crea una zona misteriosa donde se intercambian la Defensa y la Defensa Especial de todos los Pokémon durante cinco turnos."
  },
  "woodhammer": {
    "num": 452,
    "accuracy": 100,
    "basePower": 120,
    "category": "Physical",
    "name": "Mazazo",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "recoil": [
      33,
      100
    ],
    "target": "normal",
    "type": "Grass",
    "contestType": "Tough",
    "id": "woodhammer",
    "description": "Arremete contra el objetivo con su robusto cuerpo. El agresor también sufre bastante daño."
  },
  "workup": {
    "num": 526,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Avivar",
    "pp": 30,
    "priority": 0,
    "flags": {
      "snatch": 1,
      "metronome": 1
    },
    "boosts": {
      "atk": 1,
      "spa": 1
    },
    "target": "self",
    "type": "Normal",
    "zMove": {
      "boost": {
        "atk": 1
      }
    },
    "contestType": "Tough",
    "id": "workup",
    "description": "Quien lo usa se concentra y potencia su Ataque y su Ataque Especial."
  },
  "worryseed": {
    "num": 388,
    "accuracy": 100,
    "basePower": 0,
    "category": "Status",
    "name": "Abatidoras",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "allyanim": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Grass",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Clever",
    "id": "worryseed",
    "description": "Planta una semilla en el objetivo que le causa pesar. Sustituye la habilidad del objetivo por Insomnio y le impide dormirse."
  },
  "wrap": {
    "num": 35,
    "accuracy": 90,
    "basePower": 15,
    "category": "Physical",
    "name": "Constricción",
    "pp": 20,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "volatileStatus": "partiallytrapped",
    "target": "normal",
    "type": "Normal",
    "contestType": "Tough",
    "id": "wrap",
    "description": "Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo."
  },
  "wringout": {
    "num": 378,
    "accuracy": 100,
    "basePower": 0,
    "category": "Special",
    "isNonstandard": "Past",
    "name": "Estrujón",
    "pp": 5,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "basePower": 190
    },
    "maxMove": {
      "basePower": 140
    },
    "contestType": "Tough",
    "id": "wringout",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente.",
    "dynamicBasePower": true
  },
  "xscissor": {
    "num": 404,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Tijera X",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "slicing": 1
    },
    "target": "normal",
    "type": "Bug",
    "contestType": "Cool",
    "id": "xscissor",
    "description": "Ataque físico de tipo Bug, potencia base 80."
  },
  "yawn": {
    "num": 281,
    "accuracy": true,
    "basePower": 0,
    "category": "Status",
    "name": "Bostezo",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "reflectable": 1,
      "mirror": 1,
      "metronome": 1
    },
    "volatileStatus": "yawn",
    "condition": {
      "noCopy": true,
      "duration": 2,
      "onResidualOrder": 23
    },
    "target": "normal",
    "type": "Normal",
    "zMove": {
      "boost": {
        "spe": 1
      }
    },
    "contestType": "Cute",
    "id": "yawn",
    "description": "Gran bostezo que induce al sueño al objetivo en el siguiente turno."
  },
  "zapcannon": {
    "num": 192,
    "accuracy": 50,
    "basePower": 120,
    "category": "Special",
    "name": "Electrocañón",
    "pp": 5,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "metronome": 1,
      "bullet": 1
    },
    "secondary": {
      "chance": 100,
      "status": "par"
    },
    "target": "normal",
    "type": "Electric",
    "contestType": "Cool",
    "id": "zapcannon",
    "description": "Dispara una descarga eléctrica que causa daño y parálisis."
  },
  "zenheadbutt": {
    "num": 428,
    "accuracy": 90,
    "basePower": 80,
    "category": "Physical",
    "name": "Cabezazo Zen",
    "pp": 15,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 20,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Psychic",
    "contestType": "Clever",
    "id": "zenheadbutt",
    "description": "Concentra su energía psíquica en la cabeza para golpear. Puede hacer que el objetivo se amedrente."
  },
  "zingzap": {
    "num": 716,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Electropunzada",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1,
      "metronome": 1
    },
    "secondary": {
      "chance": 30,
      "volatileStatus": "flinch"
    },
    "target": "normal",
    "type": "Electric",
    "contestType": "Cool",
    "id": "zingzap",
    "description": "Se lanza contra el objetivo y le suelta una potente descarga eléctrica que puede hacer que se amedrente."
  },
  "zippyzap": {
    "num": 729,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "isNonstandard": "LGPE",
    "name": "Pikaturbo",
    "pp": 10,
    "priority": 2,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
      "chance": 100,
      "self": {
        "boosts": {
          "evasion": 1
        }
      }
    },
    "target": "normal",
    "type": "Electric",
    "contestType": "Cool",
    "id": "zippyzap",
    "description": "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  "paleowave": {
    "num": -1,
    "accuracy": 100,
    "basePower": 85,
    "category": "Special",
    "isNonstandard": "CAP",
    "name": "Paleo Wave",
    "pp": 15,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
      "chance": 20,
      "boosts": {
        "atk": -1
      }
    },
    "target": "normal",
    "type": "Rock",
    "contestType": "Beautiful",
    "id": "paleowave",
    "description": "Ataque especial de tipo Rock, potencia base 85."
  },
  "shadowstrike": {
    "num": -2,
    "accuracy": 95,
    "basePower": 80,
    "category": "Physical",
    "isNonstandard": "CAP",
    "name": "Shadow Strike",
    "pp": 10,
    "priority": 0,
    "flags": {
      "contact": 1,
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
      "chance": 50,
      "boosts": {
        "def": -1
      }
    },
    "target": "normal",
    "type": "Ghost",
    "contestType": "Clever",
    "id": "shadowstrike",
    "description": "Ataque físico de tipo Ghost, potencia base 80. Precisión: 95%."
  },
  "polarflare": {
    "num": -3,
    "accuracy": 100,
    "basePower": 75,
    "category": "Special",
    "isNonstandard": "CAP",
    "name": "Polar Flare",
    "pp": 10,
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "defrost": 1,
      "nosketch": 1
    },
    "secondary": {
      "chance": 10,
      "status": "frz"
    },
    "target": "allAdjacentFoes",
    "type": "Fire",
    "contestType": "Beautiful",
    "id": "polarflare",
    "description": "Ataque especial de tipo Fire, potencia base 75. 10% de probabilidad de causar congelación."
  }
}
