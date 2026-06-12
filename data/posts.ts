export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  content: string[];
}

export const posts: Post[] = [
  {
    slug: "strutturare-progetto-nextjs",
    title: "Come organizzo un progetto Next.js",
    description:
      "La struttura di cartelle che uso nei miei progetti Next.js, costruita per tentativi ed errori nel tempo.",
    date: "2025-11-04",
    readTime: "1 min",
    content: [
      "Nei primi progetti buttavo tutto dentro app/ e andava bene finché il progetto restava piccolo. Dopo qualche settimana però non ricordavo più dove avevo messo niente. Ho iniziato a separare le cose in modo più rigido e da allora non ho più cambiato molto.",
      "Adesso uso sempre questa struttura: app/ solo per le route, quindi solo page.tsx e layout.tsx. Componenti in components/, divisi tra ui/ per le cose atomiche tipo Badge e Button, e sections/ per i blocchi più grandi tipo Hero o Footer. La logica la metto in lib/, i dati statici o le funzioni di fetch in data/.",
      "Per i componenti Server e Client ho smesso di pensarci troppo: parto sempre da Server Component e aggiungo 'use client' solo quando ho bisogno di useState, useEffect o eventi browser. Di solito sono molti meno di quanti pensassi.",
      "Una cosa che ho imparato a evitare: i barrel file (index.ts ovunque) sembrano comodi ma dopo un po' non capisci più da dove arriva un import. Preferisco i path espliciti, anche se sono più lunghi.",
    ],
  },
  {
    slug: "custom-hooks-react",
    title: "I custom hook React che porto su ogni progetto",
    description:
      "Hook scritti una volta e riusati ovunque: quelli che ho smesso di riscrivere da zero e tengo sempre con me.",
    date: "2025-09-18",
    readTime: "1 min",
    content: [
      "Dopo un po' che scrivi React ti accorgi che certe logiche le riscrivi sempre uguali. Ho iniziato a tenerle in un file hooks/ e a portarlo da un progetto all'altro. Ne ho accumulati diversi nel tempo, ma quelli che finiscono in quasi ogni app sono sempre gli stessi tre o quattro.",
      "useLocalStorage è quello che uso di più. Funziona come useState ma persiste il valore nel localStorage. Utile per preferenze utente, tema, filtri attivi — qualsiasi cosa che non vuoi perdere al refresh. La versione che uso gestisce anche il caso in cui il valore salvato non sia più compatibile con il tipo attuale.",
      "useDebounce lo metto ogni volta che ho un input collegato a una ricerca o a una chiamata API. Prende un valore e un delay, e restituisce la versione 'ritardata' che aggiorno solo dopo che l'utente ha smesso di scrivere. Senza di lui ogni keystroke farebbe partire una fetch.",
      "useClickOutside serve quasi sempre quando costruisco dropdown o modal fatti a mano. Attacca un listener al documento e chiama una callback quando il click avviene fuori dall'elemento passato come ref. Tre righe di useEffect, ma le dimentico sempre — meglio averlo pronto.",
    ],
  },
  {
    slug: "tailwind-v4-migrazione",
    title: "Ho migrato a Tailwind CSS v4: ecco com'è andata",
    description:
      "Cosa ho trovato di diverso, cosa ho dovuto cambiare e cosa invece è andato liscio nel passaggio alla v4.",
    date: "2025-07-22",
    readTime: "1 min",
    content: [
      "Ho migrato questo portfolio a Tailwind v4 appena è uscita la versione stabile. La prima cosa che si nota è che non c'è più tailwind.config.js — tutta la configurazione si sposta in un blocco @theme dentro il CSS. Mi ha disorientato un po' all'inizio, ma ci si abitua in fretta.",
      "La velocità di build è decisamente migliorata. Non ho fatto benchmark precisi ma la differenza si sente, soprattutto in development con HMR.",
      "La migrazione in sé non è stata lunga. Ho usato il codemod ufficiale per le classi rinominate e poi ho spostato i miei token personalizzati nel blocco @theme. Il markup HTML quasi non l'ho toccato.",
      "L'unico problema serio: due plugin di terze parti che usavo non erano compatibili con v4. Li ho tolti e ho riscritto le poche utility che mi servivano direttamente nel CSS. In un caso erano letteralmente 5 righe — non so nemmeno perché avessi un plugin per quello.",
    ],
  },
  {
    slug: "animazioni-css-react",
    title: "Come faccio le animazioni nei miei progetti React",
    description:
      "Il pattern che uso per fare animazioni on-scroll senza installare nessuna libreria esterna.",
    date: "2025-05-10",
    readTime: "1 min",
    content: [
      "Per un po' ho usato Framer Motion su tutto. Poi ho iniziato a guardare quanto pesava sul bundle e ho deciso di toglierla dai progetti dove non serviva davvero — tipo questo portfolio.",
      "Il pattern che uso adesso è un componente Reveal che osserva l'elemento con IntersectionObserver. Quando entra nel viewport setto uno stato visible a true, che aggiunge le classi CSS per opacity e transform. La transizione la gestisce il CSS. Funziona bene, pesa zero e non ho dipendenze da gestire.",
      "Per i delay nelle sequenze uso direttamente animation-delay inline. Passo il valore come prop e lo applico allo style. Non ho mai sentito il bisogno di qualcosa di più sofisticato per quello che costruisco di solito.",
      "Una cosa che ho imparato a mie spese: animare sempre e solo opacity e transform. Qualsiasi altra proprietà — height, padding, margin — causa reflow e l'animazione scatta. Ogni volta che ho avuto un'animazione che sembrava lenta, era colpa di questo.",
    ],
  },
  {
    slug: "vite-vs-nextjs",
    title: "Quando uso Vite e quando uso Next.js",
    description:
      "Come decido tra i due a seconda del progetto, senza una risposta fissa.",
    date: "2025-03-03",
    readTime: "1 min",
    content: [
      "Per un po' ho usato Next.js su tutto per abitudine. Poi ho iniziato a chiedermi se ne valesse la pena per ogni tipo di progetto e la risposta quasi sempre era no.",
      "Adesso parto da Vite quando sto costruendo un'app SPA — dashboard, tool interni, cose dietro un login dove il SEO non conta. Setup veloce, zero opinioni, e non devo pensare a quale rendering usare per ogni pagina.",
      "Passo a Next.js quando ho pagine che devono essere indicizzate, quando mi serve rendering ibrido, o quando il progetto è abbastanza grande da voler avere delle convenzioni chiare sin dall'inizio. Le convenzioni di Next.js sono un po' rigide ma aiutano quando il progetto cresce o quando ci lavora più di una persona.",
      "L'errore che facevo spesso era scegliere Next.js sovrastimando la complessità del progetto. Adesso mi faccio sempre una domanda prima di iniziare: qualcuno arriverà su queste pagine da Google? Se no, quasi sempre scelgo Vite.",
    ],
  },
];
