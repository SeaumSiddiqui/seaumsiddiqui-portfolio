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
    ref.current = lenis;

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const tick = (time: number) => lenis.raf(time * 1000);
    // const tick = (time: number) => lenis.raf(time);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      lenisInstance = null;
      ref.current = null;
    };
  }, []);

  return ref;
}
