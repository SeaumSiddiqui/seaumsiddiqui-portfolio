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
  brandName: "SEAUM SIDDIQUI",
  logo: null,
  copyright: "2026",
  navLinks: [
    { label: "ABOUT", href: "/#about", external: false },
    { label: "WORK", href: "/#projects", external: false },
    { label: "ARCHIVE", href: "/archive", external: false },
  ],
  socialLinks: [
    { label: "LINKEDIN", href: "https://linkedin.com" },
    { label: "GITHUB", href: "https://github.com" },
    { label: "LEETCODE", href: "https://instagram.com" },
  ],
  availabilityText: "Available for work",
  availabilitySub: "Open to full-time & freelance",
};
