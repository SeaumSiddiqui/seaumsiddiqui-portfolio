import { useNavigation } from "@/lib/useNavigation";
import styles from "./Navbar.module.css";
import { getLenis } from "@/hooks/useLenis";

interface Props {
  position?: "absolute" | "relative"; // absolute for hero, relative for other pages
}

export default function Navbar({ position = "absolute" }: Props) {
  const { nav, loading } = useNavigation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) return;
    e.preventDefault();
    const id     = href.replace("/#", "");
    const target = document.querySelector(`[data-section="${id}"]`) as HTMLElement;
    if (!target) return;
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(target, { offset: -150, duration: 2 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // render empty header until Sanity data ready — prevents brand name flash
  if (loading) return <header className={styles.navbar} data-position={position} />;

  return (
    <header className={styles.navbar} data-position={position}>
      <a href="/" className={styles.navbar__logo}>
        {nav.logo?.asset?.url ? (
          <img src={nav.logo.asset.url} alt={nav.brandName} className={styles.navbar__logoIcon} onLoad={(e) => e.currentTarget.classList.add("loaded")} />
        ) : (
          <svg className={styles.navbar__logoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 1 L23 12 L12 23 L1 12 Z M12 6 L18 12 L12 18 L6 12 Z" fill="currentColor" />
          </svg>
        )}
        <span className={styles.navbar__brandName}>
          {nav.brandName.split(" ").map((word) => (
            <span key={word}>{word}</span>
          ))}
        </span>
      </a>
      <div className={styles.navbar__right}>
        <span className={styles.navbar__copyright}>© {nav.copyright}</span>
        <nav className={styles.navbar__links} aria-label="Primary">
          <div className={styles.navbar__col}>
            {nav.navLinks.map((link) => (
              <a key={link.label} className={styles.navbar__link} href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                {link.label}
              </a>
            ))}
          </div>
          <div className={styles.navbar__col}>
            {nav.socialLinks.map((link) => (
              <a key={link.label} className={styles.navbar__link} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
