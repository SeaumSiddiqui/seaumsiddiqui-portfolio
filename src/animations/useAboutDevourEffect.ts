import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useAboutDevourEffect(aboutRef: RefObject<HTMLElement>) {
  useEffect(() => {
    const hero = document.querySelector("[data-section='hero']") as HTMLElement;
    const about = aboutRef.current;
    const projects = document.querySelector("[data-section='projects']") as HTMLElement;
    const stats = document.querySelector("[data-section='stats']") as HTMLElement;
    if (!hero || !about || !projects || !stats) return;

    const wrapper = document.createElement("div");
    stats.parentNode!.insertBefore(wrapper, stats);
    wrapper.appendChild(stats);

    const initialHeight = stats.offsetHeight;
    wrapper.style.height = `${initialHeight}px`;
    wrapper.style.backgroundColor = getComputedStyle(stats).backgroundColor;
    stats.style.willChange = "transform";

    const ctx = gsap.context(() => {
      gsap.fromTo(
        [about, projects, stats],
        { y: 0 },
        {
          y: () => -(stats.offsetHeight * 0.2),
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 3.5,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const moveBy = stats.offsetHeight * 0.2;
              wrapper.style.height = `${Math.ceil(stats.offsetHeight - moveBy * self.progress)}px`;
            },
            onRefresh: () => {
              wrapper.style.height = `${Math.ceil(stats.offsetHeight)}px`;
            },
          },
        },
      );
      ScrollTrigger.refresh();
    });

    return () => {
      wrapper.parentNode!.insertBefore(stats, wrapper);
      wrapper.parentNode!.removeChild(wrapper);
      ctx.revert();
    };
  }, []);
}
