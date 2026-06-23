import { useRef, useEffect, useState } from "react";
import portraitImg from "@/assets/portrait.png";
import PortraitCanvas from "./PortraitCanvas";
import { urlFor } from "@/lib/sanity";
import styles from "./HeroSection.module.css";


export interface HeroData {
  roles: string[];
  location: string;
  portrait: any;
}

const FALLBACK_ROLES = ["BACKEND ENGINEER", "JAVA, SPRING BOOT", "MICROSERVICES ARCHITECT"];
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

export default function HeroSection({ data }: { data?: HeroData | null }) {
  const roleRef           = useRef<HTMLDivElement>(null);

  const roles          = data?.roles    ?? FALLBACK_ROLES;
  const location       = data?.location ?? FALLBACK_LOCATION;
  const loc            = formatLocation(location);
  const primaryRole    = roles[0] ?? "";
  const secondaryRoles = roles.slice(1);

  const portraitSrc = data?.portrait
    ? urlFor(data.portrait).width(840).url()
    : portraitImg;

  useEffect(() => {
    const el = roleRef.current;
    if (!el || !primaryRole) return;

    const fit = () => {
      // 1. Measure the container's layout-defined width first
      const available = el.getBoundingClientRect().width;
      
      // 2. Compute natural width at a base font size
      el.style.fontSize  = "100px";
      el.style.width     = "max-content";
      const naturalWidth = el.getBoundingClientRect().width; // Subpixel precision!
      
      // 3. Restore and scale font size to stretch perfectly
      el.style.width     = "";
      el.style.fontSize  = `${(available / naturalWidth) * 100}px`;
      el.style.opacity   = "1";
    };

    const rafId = requestAnimationFrame(fit);
    window.addEventListener("resize", fit);
    
    // Recalculate once custom fonts load to prevent fallback font width mismatch
    document.fonts.ready.then(fit);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", fit);
    };
  }, [primaryRole]);

  return (
    <section 
      className={styles.hero} 
      data-section="hero"
    >

      <div ref={roleRef} className={styles.hero__primaryRole}>
        {primaryRole}
      </div>

      <div className={styles.hero__location}>
        <span className={styles.hero__locationLabel}>
          <span>{loc.line1}</span>
          <span>{loc.line2}</span>
        </span>
      </div>

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
