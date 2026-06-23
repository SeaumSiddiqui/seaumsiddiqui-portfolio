import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

export function useLenis() {
  const ref = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.4,
      smoothWheel: true,
    });

    lenisInstance = lenis;
    ref.current   = lenis;

    // scrollerProxy: GSAP asks Lenis for scroll position every frame.
    // This is the ONLY sync mechanism — do not also use lenis.on("scroll", ...).
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.documentElement.style.transform ? "transform" : "fixed",
    });

    // Sync GSAP ticker with Lenis RAF — Lenis drives the animation loop
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // REMOVED: lenis.on("scroll", ScrollTrigger.update)
    // scrollerProxy already handles this — adding both causes double updates

    return () => {
      gsap.ticker.remove(tick);
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.scrollerProxy(document.documentElement, undefined as any);
      lenis.destroy();
      lenisInstance = null;
      ref.current   = null;
    };
  }, []);

  return ref;
}