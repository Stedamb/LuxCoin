export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Marco B.",
    location: "Milano, Italia",
    rating: 5,
    text: "Ho acquistato l'Aureo di Adriano e sono rimasto impressionato dalla qualità e dall'autenticità della moneta. Il servizio clienti è stato eccellente e la spedizione rapida.",
    date: "15 marzo 2025"
  },
  {
    id: 2,
    name: "Giulia T.",
    location: "Roma, Italia",
    rating: 5,
    text: "La mia collezione si è arricchita con il Denario di Augusto. La moneta è esattamente come descritta, in perfette condizioni. Consigliatissimo!",
    date: "2 febbraio 2025"
  },
  {
    id: 3,
    name: "Alessandro M.",
    location: "Firenze, Italia",
    rating: 4,
    text: "Ottima esperienza d'acquisto. Il Sesterzio di Nerone è un pezzo magnifico, con una patina autentica. Unico neo: la consegna ha richiesto qualche giorno in più del previsto.",
    date: "20 gennaio 2025"
  },
  {
    id: 4,
    name: "Francesca D.",
    location: "Torino, Italia",
    rating: 5,
    text: "Ho regalato il Solido Bizantino a mio marito, appassionato di numismatica. È rimasto senza parole per la bellezza e la rarità del pezzo. Servizio impeccabile.",
    date: "5 marzo 2025"
  },
  {
    id: 5,
    name: "Roberto P.",
    location: "Bologna, Italia",
    rating: 5,
    text: "Colleziono monete antiche da anni e posso dire che LuxCoin offre pezzi di qualità superiore. L'Aureo di Marco Aurelio è un vero capolavoro, con dettagli incredibilmente conservati.",
    date: "28 febbraio 2025"
  },
  {
    id: 6,
    name: "Lucia V.",
    location: "Napoli, Italia",
    rating: 4,
    text: "Il Denario della Repubblica è arrivato in condizioni perfette, ben protetto e con tutta la documentazione di autenticità. Un acquisto sicuro per i collezionisti esigenti.",
    date: "10 gennaio 2025"
  }
];
