export const siteConfig = {
  name: "Seaum Siddiqui",
  description: "Portfolio of Seaum Siddiqui.",
  nav: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [] as { label: string; href: string }[],
};

export type SiteConfig = typeof siteConfig;
