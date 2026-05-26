import { useRef, useEffect } from "react";
import portraitImg from "@/assets/portrait.png";
import PortraitCanvas from "./PortraitCanvas";
import { useSanityQuery } from "@/lib/useSanity";
import { HERO_QUERY } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { useNavigation } from "@/lib/useNavigation";
import styles from "./HeroSection.module.css";
import Navbar from "@/components/Navbar/Navbar";

interface HeroData {
  roles: string[];
  location: string;
  portrait: any;
}

const FALLBACK_ROLES = ["Backend Engineer", "JAVA, SPRING BOOT", "MICROSERVICES ARCHITECT"];
const FALLBACK_LOCATION = "Dhaka, Bangladesh";

function formatLocation(loc: string) {
  const parts = loc.split(",").map((s) => s.trim());
  const city = parts[0] ?? "";
  const country = parts[1] ?? "";
  return {
    line1: `Based in ${city},`,
    line2: country,
  };
}

export default function HeroSection() {
  const { nav } = useNavigation();
  const { data } = useSanityQuery<HeroData>(HERO_QUERY);
  const roleRef = useRef<HTMLDivElement>(null);

  const roles = data?.roles ?? FALLBACK_ROLES;
  const location = data?.location ?? FALLBACK_LOCATION;
  const loc = formatLocation(location);
  const primaryRole = roles[0] ?? "";
  const secondaryRoles = roles.slice(1);

  const portraitSrc = data?.portrait ? urlFor(data.portrait).width(840).url() : portraitImg;

  // Fit primary role text to full viewport width
  useEffect(() => {
    const el = roleRef.current;
    if (!el || !primaryRole) return;

    const fit = () => {
      el.style.fontSize = "100px";
      el.style.width = "max-content";
      const naturalWidth = el.scrollWidth;
      el.style.width = "";
      const available = el.getBoundingClientRect().width;
      el.style.fontSize = `${(available / naturalWidth) * 100}px`;
      el.style.opacity = "1"; // ← show after sized
    };
    // if data just loaded, wait one frame for DOM to update
    const rafId = requestAnimationFrame(fit);
    window.addEventListener("resize", fit);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", fit);
    };
  }, [primaryRole]);

  return (
    <section className={styles.hero} data-section="hero">
      {/* ── NAVBAR ── */}
      <Navbar position="absolute" />

      {/* ── PRIMARY ROLE ── */}
      <div ref={roleRef} className={styles.hero__primaryRole}>
        {primaryRole}
      </div>

      {/* ── LOCATION ── */}
      <div className={styles.hero__location}>
        <span className={styles.hero__locationLabel}>
          <span>{loc.line1}</span>
          <span>{loc.line2}</span>
        </span>
      </div>

      {/* ── HERO BODY ── */}
      <div className={styles.hero__body}>
        <div className={styles.hero__parentBox}>
          <div className={styles.hero__roles}>
            {secondaryRoles.map((role) => (
              <span key={role} className={styles.hero__role}>
                ./ {role}
              </span>
            ))}
          </div>

          <div className={styles.hero__portrait}>
            <PortraitCanvas src={portraitSrc} />
          </div>
        </div>
      </div>
    </section>
  );
}
