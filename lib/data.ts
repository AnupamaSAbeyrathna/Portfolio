export const GITHUB = "https://github.com/AnupamaSAbeyrathna";
export const EMAIL = "anupamas.abeyrathna@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/anupama-abeyrathna";

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const projects = [
  {
    title: "Alerty",
    kind: "Event processing platform",
    desc: 'A backend service that receives "events" from other applications, stores them safely, and notifies other systems when something happens.',
    tags: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Docker"],
    href: `${GITHUB}/Alerty`,
  },
  {
    title: "LucidTerm",
    kind: "Terminal emulator / systems project",
    desc: "A lightweight terminal emulator written in Rust, created by me.",
    tags: ["Rust", "Linux"],
    href: `${GITHUB}/LucidTerm`,
  },
  {
    title: "LAN Chat",
    kind: "Peer-to-peer CLI chat app",
    desc: "A zero-config, peer-to-peer CLI chat app for machines on the same WiFi network. No server. No account. End-to-end encrypted. Just open a terminal and start chatting.",
    tags: ["JavaScript", "Node"],
    href: `${GITHUB}/LAN-CHAT`,
  },
];

export const experience = [
  { time: "2024 — Present", title: "Software Engineer Intern", org: "Techlabs Private Limited", points: ["Web & Mobile Development, Cloud Infrastructure"] },
];

export const education = [
  { time: "2024 - Present", title: "BSc Computer Science", org: "University of Westminster" },
  { time: "2009 - 2022", title: "Advance Level", org: "Mahanama College, Colombo 03" },
];

export const skills: [string, string[]][] = [
  ["Languages", ["Python", "Java", "JavaScript / TypeScript", "Rust"]],
  ["Backend", ["FastAPI", "Spring Boot", "NestJS"]],
  ["Frontend", ["React", "Next.js"]],
  ["Mobile", ["Flutter"]],
  ["Databases / Data", ["PostgreSQL", "MySQL", "Firebase", "Supabase"]],
  ["Cloud / DevOps", ["GCP", "AWS", "Docker", "Git"]],
];

export const now = [
  "Working as a Software Engineer Intern",
  "Studying Computer Science",
  "Exploring systems & web development",
  "Learning cloud infrastructure",
];
