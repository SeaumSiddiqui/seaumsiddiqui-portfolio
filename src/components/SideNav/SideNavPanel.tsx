import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigation } from "@/lib/useNavigation";
import styles from "./SideNavPanel.module.css";
import { getLenis } from "@/hooks/useLenis";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SideNavPanel({ open, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { nav } = useNavigation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) {
      onClose();
      return;
    }
    e.preventDefault();
    onClose();

    const id = href.replace("/#", "");
    const target = document.querySelector(`[data-section="${id}"]`) as HTMLElement;
    if (!target) return;

    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(target, { offset: 10, duration: 2 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const panel = panelRef.current;
    const overlay = overlayRef.current;
    if (!panel || !overlay) return;

    if (open) {
      gsap.to(overlay, { opacity: 1, pointerEvents: "all", duration: 0.3 });
      gsap.fromTo(panel, { x: "100%" }, { x: "0%", duration: 0.55, ease: "power3.inOut" });
    } else {
      gsap.to(overlay, { opacity: 0, pointerEvents: "none", duration: 0.3 });
      gsap.to(panel, { x: "100%", duration: 0.45, ease: "power3.in" });
    }
  }, [open]);

  return (
    <>
      <div ref={overlayRef} className={styles.overlay} onClick={onClose} />

      <div ref={panelRef} className={styles.panel}>
        <button className={styles.panel__close} onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className={styles.panel__content}>
          <div className={styles.panel__section}>
            <div className={styles.panel__sectionHeader}>
              <span className={styles.panel__dot} />
              <span className={styles.panel__sectionLabel}>Navigate</span>
            </div>
            <nav className={styles.panel__nav}>
              <a href="/" className={styles.panel__navLink} onClick={onClose}>
                Home
              </a>
              {nav.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={styles.panel__navLink}
                  onClick={(e) => handleNavClick(e, link.href)}
                  {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.panel__section}>
            <div className={styles.panel__sectionHeader}>
              <span className={styles.panel__dot} />
              <span className={styles.panel__sectionLabel}>Connect</span>
            </div>
            <div className={styles.panel__links}>
              {/* Social Links */}
              {nav.socialLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className={styles.panel__link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className={styles.panel__availability}>
            <span className={styles.panel__availText}>{nav.availabilityText}</span>
            <span className={styles.panel__availSub}>{nav.availabilitySub}</span>
          </div>
        </div>
      </div>
    </>
  );
}
