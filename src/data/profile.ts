export type Social = { label: string; href: string, image: string };
export type Experience = {
  company: string;
  title: string;
  date: string;
  desc: string[];
};
export type Project = {
  name: string;
  date: string;
  skills: string[];
  bullets: string[];
  github?: string;
  live?: string;
};
export type PillGroup = { title: string; items: string[] };
 
export const profile = {
  name: "Aniket Dewnani",
  roleLine: "Strategy & Analytics • Front-end • Data + UI",
  location: "India",
  email: "aniketdewnani31@gmail.com",
  socials: [
    { label: "GitHub", href: "https://www.github.com/Aniket31-coder", image: "assets/github.svg" }, // from your old banner links
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aniket-dewnani-076392193/", image: "assets/linkedin.svg" }, // from your old banner links
    { label: "Resume", href: "/Aniket_Dewnani_Resume.pdf", image: "assets/Aniket_Dewnani_Resume.pdf" },
  ] satisfies Social[],
 
  about: [
    "I am a Data Analyst (Strategy & Analytics) at Deloitte USI with over 2 years of experience in Oracle FDI.",
  "I also build clean, responsive web experiences and enjoy combining UI engineering with analytics-driven problem-solving.",
  ],
 
  // From your resume sections (Projects / POR / Awards / Tech Skills)
  projects: [
    {
      name: "Portfolio",
      date: "Apr 2022",
      skills: ["ReactJS", "TailwindCSS", "Figma", "Google reCAPTCHA", "EmailJS", "Scroll Animations"],
      bullets: [
        "Designed in Figma and developed with ReactJS + TailwindCSS.",
        "Built a contact form that emails responses; showcased skills with varied visuals and animations.",
      ],
      github: "#",
      live: "#",
    },
    {
      name: "Voice Assistant – God’s Eye",
      date: "Jun 2020",
      skills: ["Python", "Speech-to-Text", "Chatbot"],
      bullets: [
        "Listens to user queries and responds with actions and answers.",
        "Performs searches/calculations, sends emails, and provides weather insights.",
      ],
      github: "#",
    },
  ] satisfies Project[],
 
 experience: [
  {
    company: "Deloitte USI",
    title: "Analyst – Strategy & Analytics",
    date: "Jan 2024 – Present",
    desc: [
      "Tested and validated 30+ reports in Oracle FDI, improving data accuracy and reducing discrepancies across reporting outputs.",
      "Created custom reports, debugged Oracle SQL issues, and supported performance improvements to enhance report speed and reliability.",
      "Worked across multiple workstreams to contribute to solution design, develop subject areas, and implement semantic data models for analytics use cases.",
      "Drove SIT execution through cross-functional coordination, blocker resolution, and timely support for business testers and team members.",
    ],
  },
  {
    company: "Kalpas Innovations Pvt. Ltd.",
    title: "ReactJS Developer Intern",
    date: "Dec 2021 – Mar 2022",
    desc: [
      "Contributed to 3+ client projects, building front-end experiences aligned with provided UI designs.",
      "Enhanced websites using the Skote template, delivering 10+ feature additions within the existing design system.",
      "Integrated 6+ APIs into the front end, helping connect UI workflows with backend services.",
    ],
  },
  {
    company: "App Avengers",
    title: "Front-End Web Developer",
    date: "Sep 2021 – Nov 2021",
    desc: [
      "Built responsive websites from scratch based on Figma designs, translating static designs into production-ready interfaces.",
      "Rendered dynamic content from JSON and managed 8+ front-end components to support reusable page structures.",
      "Improved SEO and reduced page load time by 900 milliseconds through front-end optimization.",
    ],
  },
  {
    company: "Youth India E-School",
    title: "Front-End Web Developer",
    date: "Jun 2021 – Sep 2021",
    desc: [
      "Developed front-end interfaces in ReactJS and TailwindCSS based on designs provided by the graphic design team.",
      "Strengthened core JavaScript and ReactJS skills through hands-on implementation of responsive UI components.",
      "Improved website SEO and expanded exposure to modern web practices, including Next.js.",
    ],
  },
  {
    company: "VESIT Renaissance Club",
    title: "Web Developer Intern",
    date: "Jun 2021 – Jul 2021",
    desc: [
      "Designed the website’s basic layout in Figma and created the logo to establish the visual direction of the platform.",
      "Guided front-end implementation efforts, helping the team deliver key website features.",
      "Supported backend development for functionality such as leaderboard tables for 30+ quizzes and authentication flows.",
    ],
  },
] satisfies Experience[],
 
  skills: [
    { title: "Programming Languages", items: ["Java", "Python", "JavaScript", "HTML"] },
    { title: "Databases", items: ["MySQL", "Firebase", "Oracle SQL"] },
    { title: "Library & Frameworks", items: ["ReactJS", "NextJS", "TailwindCSS", "Bootstrap"] },
    { title: "Other Tools", items: ["Oracle FDI", "Oracle BI Repository", "Jira", "Git/GitHub", "Docker", "Figma", "Canva"] },
  ] satisfies PillGroup[],
 
  positions: [
    {
      title: "Senior Technical Officer, CSI-VESIT",
      date: "Nov 2021 – Jun 2022",
      bullets: [
        "Conducted sessions on Java and Docker (80+ students).",
        "Built event websites and mentored 2+ students.",
      ],
    },
    {
      title: "Junior Technical Officer, CSI-VESIT",
      date: "Jan 2021 – Nov 2021",
      bullets: [
        "Delivered a Bootstrap workshop (100+ students).",
        "Supported execution of 5+ hackathons/coding events.",
      ],
    },
  ],
 
  awards: [
    "Outstanding Performance and Circle of Joy Award (Deloitte).",
    "Rising Star and Applause Awards (Deloitte).",
    "First Prize in HTML–CSS Race (KC College).",
    "Participated in 5+ open-source events/hackathons (SWoC, SIH).",
  ],
} as const;
