import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useProjectsAnimation(
  sectionRef: RefObject<HTMLElement | null>,
  cardRefs: RefObject<(HTMLElement | null)[]>,
) {
  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardRefs.current;
    if (!section || !cards?.length) return;

    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        if (!card) return;

        const title = card.querySelector("[data-card-title]");
        const image = card.querySelector("[data-card-image]");

        // Title: ghosted → fully visible as card locks in
        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0.08, y: 28 },
            {
              opacity: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "top 20%",
                scrub: 1.2,
              },
            },
          );
        }

        // Image: subtle scale-in parallax as card enters
        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.08 },
            {
              scale: 1.0,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "top top",
                scrub: 1.5,
              },
            },
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);
}
