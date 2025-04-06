export interface Coin {
  id: number;
  name: string;
  period: string;
  description: string;
  price: number;
  image: string;
}

export const coins: Coin[] = [
  {
    id: 1,
    name: "Aureo di Adriano",
    period: "117-138 d.C.",
    description: "Moneta d'oro coniata durante il regno dell'imperatore Adriano, raffigurante il suo profilo laureato.",
    price: 2800,
    image: "/coin.png"
  },
  {
    id: 2,
    name: "Denario di Augusto",
    period: "27 a.C. - 14 d.C.",
    description: "Raro denario d'argento con il profilo di Augusto, primo imperatore romano.",
    price: 1950,
    image: "/coin.png"
  },
  {
    id: 3,
    name: "Sesterzio di Nerone",
    period: "54-68 d.C.",
    description: "Sesterzio in bronzo dell'imperatore Nerone con il Colosseo sul rovescio.",
    price: 1200,
    image: "/coin.png"
  },
  {
    id: 4,
    name: "Aureo di Marco Aurelio",
    period: "161-180 d.C.",
    description: "Splendido aureo dell'imperatore filosofo Marco Aurelio in condizioni eccezionali.",
    price: 3500,
    image: "/coin.png"
  },
  {
    id: 5,
    name: "Denario della Repubblica",
    period: "211-208 a.C.",
    description: "Denario repubblicano con la dea Roma elmata e i Dioscuri a cavallo.",
    price: 850,
    image: "/coin.png"
  },
  {
    id: 6,
    name: "Solido Bizantino",
    period: "527-565 d.C.",
    description: "Solido d'oro dell'imperatore Giustiniano I, periodo bizantino.",
    price: 1800,
    image: "/coin.png"
  }
];
