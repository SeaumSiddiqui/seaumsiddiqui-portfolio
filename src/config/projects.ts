export interface Project {
  id: string;
  index: string;
  name: string;
  abbr: string; // e.g. "Ac" for Aiven Console
  desc: string;
  tags: string[];
  imagePortrait: string;
  href: string;
}

export const PROJECTS: Project[] = [
  {
    id: "aiven",
    index: "01",
    name: "Aiven Console",
    abbr: "Ac",
    desc: "Full-stack cloud data platform console. Built with React and Spring Boot microservices, serving thousands of active users.",
    tags: ["React", "Spring Boot", "TypeScript"],
    imagePortrait: "/assets/projects/aiven.jpg",
    href: "#",
  },
  {
    id: "portfolio",
    index: "02",
    name: "Portfolio v2",
    abbr: "Pv",
    desc: "Personal portfolio with WebGL shader effects, GSAP animations, and a modular React architecture.",
    tags: ["React", "GSAP", "WebGL"],
    imagePortrait: "/assets/projects/portfolio.jpg",
    href: "#",
  },
  {
    id: "commerce",
    index: "03",
    name: "Commerce Platform",
    abbr: "Cp",
    desc: "End-to-end e-commerce platform with real-time inventory, payment integration, and an admin dashboard.",
    tags: ["Next.js", "Postgres", "Stripe"],
    imagePortrait: "/assets/projects/commerce.jpg",
    href: "#",
  },
];
