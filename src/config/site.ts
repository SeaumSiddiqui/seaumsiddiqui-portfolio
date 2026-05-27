export const siteConfig = {
  name: "SEAUM SIDDIQUI",
  description: "Portfolio of Seaum Siddiqui.",
  nav: [
    { label: "Home", href: "/" },    
    { label: "About", href: "/#about" },
    { label: "Work", href: "/#projects" },
    { label: "Archive", href: "/archive" },
  ],
  socials: [] as { label: string; href: string }[],
};

export type SiteConfig = typeof siteConfig;
