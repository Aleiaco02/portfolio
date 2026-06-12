export interface SocialLink {
  href: string;
  label: string;
  platform: "github" | "linkedin" | "instagram" | "email" | "phone";
}

export interface Profile {
  name: string;
  title: string;
  availability: string;
  bio: string[];
  email: string;
  socialLinks: SocialLink[];
  heroTagline: string;
  contactDescription: string;
  skills: string[];
}

export const profile: Profile = {
  name: "Alessandro Iacovelli",
  title: "Front End Developer",
  availability: "Available for work",
  bio: [
    "Sono un Front End Developer specializzato nello sviluppo di applicazioni web moderne, veloci e responsive. Lavoro principalmente con JavaScript, TypeScript, React e Next.js, utilizzando Tailwind CSS per creare interfacce pulite, intuitive e curate nei dettagli.",
    "Mi concentro soprattutto su performance, qualità del codice e UI/UX design, con l'obiettivo di realizzare esperienze digitali fluide, accessibili ed efficaci su ogni dispositivo.",
    "Mi piace trasformare idee e design in prodotti concreti, combinando estetica e funzionalità per creare applicazioni non solo belle da vedere, ma anche ottimizzate, scalabili e semplici da utilizzare.",
    "Per me ogni progetto deve offrire il giusto equilibrio tra velocità, esperienza utente e attenzione ai dettagli, mantenendo sempre un codice pulito e facilmente manutenibile.",
  ],
  heroTagline:
    "Realizzo prodotti web moderni e scalabili con React, Next.js, JavaScript e TypeScript, combinando velocità, design pulito e attenzione maniacale ai dettagli per aiutare brand e startup a crescere online.",
  contactDescription:
    "Hai un progetto, una startup o stai cercando un Front End Developer per il tuo team? Sono sempre aperto a collaborazioni e nuove opportunità lavorative, pronto a contribuire alla crescita dei vostri progetti e a lavorare insieme a un team per ottenere risultati concreti.",
  email: "hello@alessandroiacovelli.it",
  socialLinks: [
    { href: "https://github.com/Aleiaco02", label: "GitHub", platform: "github" },
    { href: "https://www.linkedin.com/in/alessandro-iacovelli-a95a6a3a0/", label: "LinkedIn", platform: "linkedin" },
    { href: "https://www.instagram.com/alessandroiacovelli/", label: "Instagram", platform: "instagram" },
    { href: "mailto:hello@alessandroiacovelli.it", label: "Email", platform: "email" },
    { href: "tel:+393917186528", label: "Telefono", platform: "phone" },
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MySQL",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "GitHub",
    "Vite",
    "React Native",
    "API Development",
    "UX/UI Design",
  ],
};
