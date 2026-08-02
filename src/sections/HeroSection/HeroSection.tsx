import React, { useRef, useLayoutEffect } from "react";
import PortraitCanvas from "./PortraitCanvas";
import { urlFor } from "@/lib/sanity";
import styles from "./HeroSection.module.css";


export interface HeroData {
  roles: string[];
  location: string;
  portrait: any;
}


function formatLocation(loc: string) {
  const parts = loc.split(",").map((s) => s.trim());
  const city = parts[0] ?? "";
  const country = parts[1] ?? "";
  return {
    line1: `Based in ${city},`,
    line2: country,
  };
}

const HeroSection = React.memo(function HeroSection({ data }: { data?: HeroData | null }) {
  const roleRef           = useRef<HTMLDivElement>(null);

  const roles          = data?.roles    ?? [];
  const location       = data?.location ?? "";
  const loc            = formatLocation(location);
  const primaryRole    = roles[0] ?? "";
  const secondaryRoles = roles.slice(1);

  const portraitSrc = data?.portrait
    ? urlFor(data.portrait).width(840).auto("format").quality(80).url()
    : null;

  // Preload the optimized portrait image to prevent canvas rendering delays
  useLayoutEffect(() => {
    if (!portraitSrc) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = portraitSrc;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [portraitSrc]);

  useLayoutEffect(() => {
    const el = roleRef.current;
    if (!el || !primaryRole) return;

    const fit = () => {
      // Temporarily reset styles to measure accurately
      el.style.transform = "none";
      el.style.width = "";
      
      // 1. Measure the container's layout-defined width first
      const available = el.getBoundingClientRect().width;
      
      // 2. Compute natural width at a base font size
      el.style.fontSize  = "100px";
      el.style.width     = "max-content";
      const naturalWidth = el.getBoundingClientRect().width; // Subpixel precision!
      
      // 3. Scale using transform to avoid layout shifts (CLS)
      el.style.width = "";
      el.style.fontSize = "100px";
      
      const scale = available / naturalWidth;
      el.style.transformOrigin = "left bottom";
      el.style.transform = `scale(${scale})`;
    };

    // Run fit initially to set transform, but keep opacity 0
    fit();
    window.addEventListener("resize", fit);
    
    // Observe font loading before showing text
    document.fonts.ready.then(() => {
      fit(); // recalculate with correct font metrics
      if (el) el.style.opacity = "1";
    });

    return () => {
      window.removeEventListener("resize", fit);
    };
  }, [primaryRole]);

  return (
    <section 
      className={styles.hero} 
      data-section="hero"
    >

      <h1 className={styles.hero__primaryRole} ref={roleRef}>
        {primaryRole}
      </h1>

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
            {portraitSrc && (
              <PortraitCanvas src={portraitSrc} alt="Portrait of Seaum Siddiqui - Backend Engineer" className={styles.canvas} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
