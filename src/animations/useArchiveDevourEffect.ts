import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useArchiveDevourEffect(listRef: RefObject<HTMLElement>) {
  useEffect(() => {
    const banner = document.querySelector("[data-section='archive-banner']") as HTMLElement;
    const list = listRef.current;
    if (!banner || !list) return;

    // wrap list in a clip div that shrinks as list moves up
    const wrapper = document.createElement("div");
    list.parentNode!.insertBefore(wrapper, list);
    wrapper.appendChild(list);

    // set immediately before any animation
    const initialHeight = list.offsetHeight;
    wrapper.style.height = `${initialHeight}px`;
    wrapper.style.backgroundColor = getComputedStyle(list).backgroundColor;
    list.style.willChange = "transform";

    const ctx = gsap.context(() => {
      gsap.fromTo(
        list,
        { y: 0 },
        {
          y: () => -(list.offsetHeight * 0.2),
          ease: "none",
          scrollTrigger: {
            trigger: banner,
            start: "top top",
            end: "bottom top",
            scrub: 6,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const moveBy = list.offsetHeight * 0.2;
              wrapper.style.height = `${Math.ceil(list.offsetHeight - moveBy * self.progress)}px`;
            },
            onRefresh: () => {
              wrapper.style.height = `${Math.ceil(list.offsetHeight)}px`;
            },
          },
        },
      );
      ScrollTrigger.refresh();
    });
    return () => {
      // unwrap on cleanup
      wrapper.parentNode!.insertBefore(list, wrapper);
      wrapper.parentNode!.removeChild(wrapper);
      ctx.revert();
    };
  }, []);
}
