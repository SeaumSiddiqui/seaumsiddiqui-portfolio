import { useEffect, RefObject } from "react";
import { gsap }          from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useWorkScroll(
  sectionRef: RefObject<HTMLElement | null>,
  cardsRef:   RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    const section = sectionRef.current;
    const cards   = cardsRef.current;
    if (!section || !cards) return;

    const ctx = gsap.context(() => {
      // total scrollable distance = cards grid height - visible container height
      const getScrollDist = () =>
        cards.scrollHeight - cards.parentElement!.clientHeight;

      // pin section, animate cards upward
      gsap.to(cards, {
        y:    () => -getScrollDist(),
        ease: "none",
        scrollTrigger: {
          trigger:             section,
          start:               "top top",
          end:                 () => `+=${getScrollDist()}`,
          scrub:               1,
          pin:                 true,
          anticipatePin:       1,
          invalidateOnRefresh: true,
        },
      });
    }, cards);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}