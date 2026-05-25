export interface NavLink {
  label: string;
  href: string;
  external: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface NavigationData {
  brandName: string;
  logo: { asset: { url: string } } | null;
  copyright: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  availabilityText: string;
  availabilitySub: string;
}

export const NAV_FALLBACK: NavigationData = {
  brandName: "Seaum Siddiqui",
  logo: null,
  copyright: "2026",
  navLinks: [
    { label: "About", href: "/about", external: false },
    { label: "Works", href: "/works", external: false },
    { label: "Stats", href: "/stats", external: false },
  ],
  socialLinks: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Instagram", href: "https://instagram.com" },
  ],
  availabilityText: "Available for work",
  availabilitySub: "Open to full-time & freelance",
};
