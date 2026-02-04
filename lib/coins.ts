export type Coin = {
  id: string;
  name: string;
  emperor?: string;
  period: "Roman Empire" | "Roman Republic" | "Greek" | "Byzantine" | "Medieval";
  material: "Gold" | "Silver" | "Bronze" | "Electrum";
  year: string;
  price: number;
  grade: "FDC" | "SPL" | "BB" | "MB";
  description: string;
  imageGradient: string;
  indicators: {
    preservation: { value: number; max: number };
    rarity: { value: number; max: number };
    metal: { value: number; max: number };
    strike: { value: number; max: number };
  };
};

export const coinsData: Coin[] = [
  {
    id: "rom-aug-001",
    name: "Aureus of Augustus",
    emperor: "Augustus",
    period: "Roman Empire",
    material: "Gold",
    year: "27 BC - 14 AD",
    price: 12500,
    grade: "FDC",
    description: "Rare Aureus depicting Augustus, the first Roman Emperor. Reverse shows a bull butting right.",
    imageGradient: "from-yellow-400 to-amber-600",
    indicators: {
        preservation: { value: 65, max: 70 },
        rarity: { value: 85, max: 100 },
        metal: { value: 100, max: 100 },
        strike: { value: 95, max: 100 }
    }
  },
  {
    id: "rom-ner-002",
    name: "Sestertius of Nero",
    emperor: "Nero",
    period: "Roman Empire",
    material: "Bronze",
    year: "54 - 68 AD",
    price: 3200,
    grade: "SPL",
    description: "Large bronze Sestertius with a detailed portrait of Nero. Reverse displays the Temple of Ianus.",
    imageGradient: "from-orange-700 to-yellow-900",
     indicators: {
        preservation: { value: 45, max: 70 },
        rarity: { value: 50, max: 100 },
        metal: { value: 100, max: 100 },
        strike: { value: 70, max: 100 }
    }
  },
  {
    id: "grk-ath-003",
    name: "Tetradrachm of Athens",
    period: "Greek",
    material: "Silver",
    year: "450 BC",
    price: 4500,
    grade: "SPL", // Mapped to SPL effectively in UI or keep as string
    description: "The famous 'Owl of Athena', symbol of wisdom and the city of Athens. Exceptional centering.",
    imageGradient: "from-gray-300 to-gray-500",
    indicators: {
        preservation: { value: 55, max: 70 },
        rarity: { value: 40, max: 100 },
        metal: { value: 95, max: 100 },
        strike: { value: 90, max: 100 }
    }
  },
  {
    id: "rom-tra-004",
    name: "Denarius of Trajan",
    emperor: "Trajan",
    period: "Roman Empire",
    material: "Silver",
    year: "98 - 117 AD",
    price: 850,
    grade: "BB",
    description: "Silver Denarius celebrating Trajan's Dacian victories. Column of Trajan depicted on reverse.",
    imageGradient: "from-slate-200 to-slate-400",
    indicators: {
        preservation: { value: 35, max: 70 },
        rarity: { value: 30, max: 100 },
        metal: { value: 90, max: 100 },
        strike: { value: 80, max: 100 }
    }
  },
  {
    id: "byz-jus-005",
    name: "Solidus of Justinian I",
    emperor: "Justinian I",
    period: "Byzantine",
    material: "Gold",
    year: "527 - 565 AD",
    price: 1800,
    grade: "SPL",
    description: "Gold Solidus showing the facing bust of Justinian holding a globus cruciger.",
    imageGradient: "from-yellow-200 to-amber-500",
    indicators: {
        preservation: { value: 60, max: 70 },
        rarity: { value: 45, max: 100 },
        metal: { value: 98, max: 100 },
        strike: { value: 85, max: 100 }
    }
  },
  {
    id: "rom-jc-006",
    name: "Denarius of Julius Caesar",
    emperor: "Julius Caesar",
    period: "Roman Republic",
    material: "Silver",
    year: "44 BC",
    price: 6500,
    grade: "BB",
    description: "Portrait Denarius of Julius Caesar, struck shortly before his assassination. Historically significant.",
    imageGradient: "from-gray-400 to-gray-600",
    indicators: {
        preservation: { value: 40, max: 70 },
        rarity: { value: 95, max: 100 },
        metal: { value: 85, max: 100 },
        strike: { value: 75, max: 100 }
    }
  },
  {
    id: "med-flo-007",
    name: "Gold Florin of Florence",
    period: "Medieval",
    material: "Gold",
    year: "1252 - 1533",
    price: 2100,
    grade: "FDC",
    description: "The standard gold coin of medieval Europe, depicting St. John the Baptist and the Lily of Florence.",
    imageGradient: "from-yellow-500 to-yellow-700",
    indicators: {
        preservation: { value: 68, max: 70 },
        rarity: { value: 60, max: 100 },
        metal: { value: 99, max: 100 },
        strike: { value: 90, max: 100 }
    }
  },
  {
    id: "rom-had-008",
    name: "Aureus of Hadrian",
    emperor: "Hadrian",
    period: "Roman Empire",
    material: "Gold",
    year: "117 - 138 AD",
    price: 9800,
    grade: "SPL",
    description: "Fine style Aureus of Hadrian traveling the empire. Reverse shows Nilus reclining.",
    imageGradient: "from-amber-300 to-orange-500",
    indicators: {
        preservation: { value: 62, max: 70 },
        rarity: { value: 75, max: 100 },
        metal: { value: 100, max: 100 },
        strike: { value: 92, max: 100 }
    }
  },
   {
    id: "grk-ale-009",
    name: "Tetradrachm of Alexander",
    period: "Greek",
    material: "Silver",
    year: "336 - 323 BC",
    price: 1200,
    grade: "MB",
    description: "Heracles wearing lion skin headdress. Reverse shows Zeus enthroned holding eagle.",
    imageGradient: "from-slate-300 to-slate-500",
    indicators: {
        preservation: { value: 30, max: 70 },
        rarity: { value: 25, max: 100 },
        metal: { value: 80, max: 100 },
        strike: { value: 60, max: 100 }
    }
  }
];
