export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string | null;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Principe Franz Atelier",
    description:
      "Sito web per un atelier sartoriale con oltre 40 anni di storia, specializzato in abiti da sposo su misura. Catalogo prodotti, modulo di richiesta su misura e gestione contenuti.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/Aleiaco02/principefranz",
    live: "https://www.principefranzsposo.com",
  },
  {
    id: "02",
    title: "SmartCompare",
    description:
      "Applicazione web per il confronto di smartphone con sistema di preferiti e pagine di dettaglio. Frontend in React, backend REST in Node.js ed Express con validazione Zod.",
    tech: ["JavaScript", "TypeScript", "React", "Vite", "Node.js", "Express", "CSS"],
    github: "https://github.com/Aleiaco02/progetto-finale-spec-frontend-front",
    live: "https://progetto-finale-spec-frontend-front-two.vercel.app/",
  },
  {
    id: "03",
    title: "SpaceDomiciles",
    description:
      "Piattaforma e-commerce a tema spaziale per l'acquisto di proprietà su pianeti e galassie. Include catalogo con ricerca, carrello, checkout con pagamento Braintree, invio email e backend REST con Node.js ed Express.",
    tech: ["React", "Vite", "Node.js", "Express", "MySQL", "Bootstrap", "CSS"],
    github: "https://github.com/Aleiaco02/SpaceDomiciles",
    live: null,
  },
  {
    id: "04",
    title: "BoolFlix",
    description:
      "Applicazione web ispirata a Netflix per la ricerca di film e serie TV tramite le API di TMDB. Risultati in tempo reale con valutazione a stelle e gestione dello stato tramite Context API.",
    tech: ["React", "Vite", "JavaScript", "CSS", "TMDB API", "Context API"],
    github: "https://github.com/Aleiaco02/react-boolflix",
    live: null,
  },
];
