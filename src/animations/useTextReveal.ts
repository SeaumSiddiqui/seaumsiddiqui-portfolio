import { useEffect, RefObject } from "react";

const SELECTORS = [
  "[data-reveal='label']",
  "[data-reveal='heading']",
  "[data-reveal='body']",
  "[data-reveal='sub']",
  "[data-reveal='action']",
];

export function useTextReveal(containerRef: RefObject<HTMLElement | null>, deps: any[] = []) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const allEls: HTMLElement[] = [];
    SELECTORS.forEach((sel) => {
      container.querySelectorAll<HTMLElement>(sel).forEach((el) => allEls.push(el));
    });
    if (!allEls.length) return;

    allEls.forEach((el) => {
      el.style.opacity = "0.08";
      el.style.transition = "opacity 1s ease"; // slightly slower = less instant
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          (entry.target as HTMLElement).style.opacity = entry.isIntersecting ? "1" : "0.08"; // reverse on scroll back
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -25% 0px", // triggers a bit later = less quick
      },
    );

    allEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, deps);
}
