// All content for the portfolio lives here so it's easy to edit
// without touching components.
 
export type Social = { label: string; href: string };
 
export type Experience = {
  company: string;
  title: string;
  date: string;
  description: string;
  pills: string[];
};
 
export type Project = {
  name: string;
  tag: string;
  number: string;
  description: string;
  stack: string[];
  thumbVariant: "warm" | "cool" | "dashed";
  thumbMark: string;
  thumbImage?: string;
  github?: string;
  live?: string;
  inProgress?: boolean;
};
 
export type ToolkitRow = {
  tag: string;
  items: string[];
  primary?: boolean;
  learning?: boolean;
};
 
export type Award = {
  mark: string;
  title: string;
  context: string;
  meta: string;
};
 
export type Stat = { accent: string; suffix?: string; label: string };
 
export const profile = {
  name: "Aniket Dewnani",
  location: "Mumbai, India",
  availability: "Available · Q3 2026",
  email: "aniketdewnani31@gmail.com",
  resumeHref: "/Aniket_Dewnani_Resume.pdf",
 
  socials: [
    { label: "GitHub", href: "https://www.github.com/Aniket31-coder" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aniket-dewnani-076392193/" },
  ] satisfies Social[],
 
  // Hero
  heroTagline: {
    plain1: "Analyst at",
    em1: "Deloitte USI",
    plain2: "by day. I build",
    em2: "data + UI",
    plain3:
      "things — Oracle FDI reports that don\u2019t lie, and React interfaces that",
    squiggleText: "don\u2019t bore",
  },
 
  // Now-strip (replaces marquee)
  now: [
    { key: "Now building", value: "Schema Sketch" },
    { key: "Now reading", value: "Refactoring UI · Adam Wathan" },
    { key: "Now exploring", value: "AWS" },
  ],

  about: {
    paragraph:
      "I work at the seam between data and interface. By day, I\u2019m an Analyst at Deloitte USI — building semantic models, debugging Oracle SQL, and making reports that actually agree with each other. By night, I\u2019m back in React & Tailwind, creating interfaces with intent.",
    highlights: [
      "data and interface",
      "Deloitte USI",
      "React & Tailwind",
    ],
  },
 
  stats: [
    { accent: "2", suffix: " yrs", label: "at Deloitte USI · Strategy & Analytics" },
    { accent: "30+", label: "Oracle FDI reports validated" },
    { accent: "~900", suffix: "ms", label: "load time saved on a client site" },
  ] satisfies Stat[],
 
  // Top three only
  experience: [
    {
      company: "Deloitte USI",
      title: "Analyst, Strategy & Analytics",
      date: "Jan 2024 — Present",
      description:
        "I own a slice of an Oracle FDI implementation: building custom subject areas, debugging long-running SQL, and validating reports against business logic. I\u2019ve also driven SIT across workstreams — unblocking testers, triaging issues, and getting fixes in before sprint end.",
      pills: ["Oracle FDI", "Oracle SQL", "Semantic Models", "SIT"],
    },
    {
      company: "Kalpas Innovations",
      title: "ReactJS Developer Intern",
      date: "Dec 2021 — Mar 2022",
      description:
        "Shipped front-end work across 3+ client projects on the Skote template; integrated 6+ APIs into the UI.",
      pills: ["React", "REST APIs", "Skote"],
    },
    {
      company: "App Avengers",
      title: "Front-End Developer",
      date: "Sep — Nov 2021",
      description:
        "Translated Figma into responsive, production-ready interfaces. Pushed for the small wins — image budgets, deferred JS, semantic markup — that compound into a measurably faster page.",
      pills: ["Figma → HTML", "SEO", "Performance"],
    },
  ] satisfies Experience[],
 
  projects: [
    {
      name: "Schema Sketch",
      tag: "2026 · Tool",
      number: "01",
      description:
        "A live Mermaid-to-SQL DDL generator for three dialects (Oracle, Postgres, MySQL). Hand-written parser, type-aware emitters, deterministic output.",
      stack: ["TypeScript", "React", "Tailwind", "Vitest"],
      thumbVariant: "warm",
      thumbMark: "...",
      thumbImage: "assets/schema-sketch.png",
      github: "https://github.com/Aniket31-coder/schema-sketch",
      live: "https://schema-sketch.vercel.app",
    },
    {
      name: "This portfolio",
      tag: "2026 · Site you\u2019re on",
      number: "02",
      description:
        "A redesign of my old portfolio — cream paper aesthetic, custom blob cursor that morphs over interactive elements. Built in React + Tailwind",
      stack: ["React", "Tailwind", "Framer Motion", "Figma"],
      thumbVariant: "warm",
      thumbMark: "✱",
      thumbImage: "assets/myportfolio.png",
      github: "https://github.com/Aniket31-coder/Aniket-Dewnani-Portfolio",
      live: "#top",
    },
    {
      name: "God\u2019s Eye",
      tag: "2020 · College project",
      number: "03",
      description:
        "A Python voice assistant that listens to queries and replies with action — searches, calculations, sending mail, fetching weather. Pre-LLM, pre-everything — just speech-to-text glued to good old-fashioned APIs.",
      stack: ["Python", "Speech-to-Text", "Chatbot"],
      thumbVariant: "cool",
      thumbMark: "mic",
      github: "https://github.com/Aniket31-coder/Voice-Assistant-God-s-Eye",
    }
  ] satisfies Project[],
 
  toolkit: [
    {
      tag: "→ Daily drivers",
      items: ["Oracle FDI", "Oracle SQL", "React", "Tailwind CSS", "Figma", "Jira"],
      primary: true,
    },
    {
      tag: "→ Comfortable in",
      items: ["JavaScript", "Next.js", "HTML & CSS", "Python", "Git & GitHub", "Oracle BI Repository"],
    },
    {
      tag: "→ Have worked with",
      items: ["Java", "MySQL", "Firebase", "Bootstrap", "Docker"],
    },
    {
      tag: "→ Currently learning",
      items: ["TypeScript", "Framer Motion", "AWS"],
      learning: true,
    },
  ] satisfies ToolkitRow[],
 
  awards: [
    {
      mark: "★",
      title: "Outstanding Performance & Circle of Joy",
      context:
        "Top performance rating at Deloitte, plus a peer-nominated award for being a force multiplier on the team.",
      meta: "Deloitte USI · 2025",
    },
    {
      mark: "✦",
      title: "Rising Star & Applause Awards",
      context:
        "Recognition for fast ramp-up as a new hire, plus repeated manager spot-bonuses for specific delivery wins.",
      meta: "Deloitte USI · 2024",
    },
    {
      mark: "⌬",
      title: "SWoC & Smart India Hackathon participant",
      context:
        "Five+ open-source contributions and team submissions to SIH — India\u2019s largest national-level student hackathon.",
      meta: "2020 — 2022",
    },
    // {
    //   mark: "1°",
    //   title: "First prize, HTML & CSS Race",
    //   context:
    //     "Won an inter-college front-end speed-coding competition at KC College, Thane.",
    //   meta: "2021",
    // },
  ] satisfies Award[],
 
  navLinks: [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#awards", label: "Awards" },
  ],
} as const;