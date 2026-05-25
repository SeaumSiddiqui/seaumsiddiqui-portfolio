import { useEffect, useState, useRef } from "react";
import { useSanityQuery } from "@/lib/useSanity";
import { FOOTER_QUERY } from "@/lib/queries";
import { getLenis } from "@/hooks/useLenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Footer.module.css";

interface FooterData {
  email: string;
  navLinks: { label: string; href: string }[];
  socials: { label: string; href: string }[];
  location: string;
  timezone: string;
  gmtLabel: string;
}

export default function Footer() {
  const { data } = useSanityQuery<FooterData>(FOOTER_QUERY);
  const [time, setTime] = useState("");
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    let timer: ReturnType<typeof setTimeout>;

    const ro = new ResizeObserver(() => {
      document.body.style.paddingBottom = `${el.offsetHeight}px`;

      clearTimeout(timer);
      timer = setTimeout(() => {
        getLenis()?.resize(); // Lenis recalculates scrollable height
        ScrollTrigger.refresh(); // ScrollTrigger recalculates trigger positions
      }, 100);
    });

    ro.observe(el);
    return () => {
      ro.disconnect();
      clearTimeout(timer);
      document.body.style.paddingBottom = "0px";
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) return;
    e.preventDefault();

    const id = href.replace("/#", "");
    const target = document.querySelector(`[data-section="${id}"]`) as HTMLElement;
    if (!target) return;

    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(target, { offset: 0, duration: 2 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const update = () => {
      if (!data?.timezone) return;
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: data.timezone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [data?.timezone]);

  const year = new Date().getFullYear();

  return (
    <footer ref={footerRef} className={styles.footer} data-section="footer">
      {/* TOP */}
      <div className={styles.footer__top}>
        <div className={styles.footer__socials}>
          {(data?.socials ?? []).map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className={styles.footer__social}
            >
              ./{s.label}
            </a>
          ))}
        </div>
        <nav className={styles.footer__nav}>
          {(data?.navLinks ?? []).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.footer__navLink}
              onClick={(e) => handleNavClick(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      {/* DIVIDER */}
      <div className={styles.footer__divider} />

      {/* BOTTOM */}
      <div className={styles.footer__bottom}>
        <a href={`mailto:${data?.email}`} className={styles.footer__email}>
          {data?.email ?? "hello@portfolio.com"}
          <span className={styles.footer__arrow}>↗</span>
        </a>
        <div className={styles.footer__meta}>
          <span className={styles.footer__location}>
            {data?.location ?? "Dhaka, Bangladesh"}: ({data?.gmtLabel ?? "GMT+6"}) {time}
          </span>
          <span className={styles.footer__copy}>{year} All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
