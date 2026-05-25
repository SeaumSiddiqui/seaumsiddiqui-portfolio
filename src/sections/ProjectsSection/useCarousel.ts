import { useEffect, useRef, RefObject } from "react";
import { gsap } from "gsap";

export function useCarousel(
  trackRef: RefObject<HTMLDivElement | null>,
  dotsRef: RefObject<HTMLDivElement | null>,
  itemCount: number,
  perGroup: number = 3,
) {
  const current = useRef(0);
  const startX = useRef(0);
  const startTime = useRef(0);
  const isDragging = useRef(false);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);

  const totalGroups = Math.ceil(itemCount / perGroup);

  const getGroupWidth = () => {
    const track = trackRef.current;
    if (!track) return 0;
    return track.parentElement?.offsetWidth ?? 0;
  };

  const goTo = (index: number, duration = 0.65) => {
    const track = trackRef.current;
    if (!track) return;

    const clamped = Math.max(0, Math.min(index, totalGroups - 1));
    current.current = clamped;

    gsap.to(track, {
      x: -clamped * getGroupWidth(),
      duration,
      ease: "power3.out",
    });

    updateDots();
  };

  const updateDots = () => {
    const dots = dotsRef.current;
    if (!dots) return;
    Array.from(dots.children).forEach((dot, i) => {
      (dot as HTMLElement).dataset.active = i === current.current ? "true" : "false";
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    const dots = dotsRef.current;
    if (!track || !dots) return;

    const viewport = track.parentElement;
    if (!viewport) return;

    // Build dots
    dots.innerHTML = "";
    for (let i = 0; i < totalGroups; i++) {
      const dot = document.createElement("button");
      dot.dataset.active = i === 0 ? "true" : "false";
      dot.setAttribute("aria-label", `Go to group ${i + 1}`);
      dot.addEventListener("click", () => goTo(i, 0.5));
      dots.appendChild(dot);
    }

    // ── Pointer drag ──
    const onPointerDown = (e: PointerEvent) => {
      isDragging.current = true;
      startX.current = e.clientX;
      lastX.current = e.clientX;
      startTime.current = Date.now();
      lastTime.current = Date.now();
      velocity.current = 0;
      track.setPointerCapture(e.pointerId);
      gsap.killTweensOf(track);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      const now = Date.now();
      const dt = now - lastTime.current;
      const dx = e.clientX - lastX.current;

      if (dt > 0) velocity.current = dx / dt;

      lastX.current = e.clientX;
      lastTime.current = now;

      const delta = e.clientX - startX.current;
      const baseX = -current.current * getGroupWidth();
      gsap.set(track, { x: baseX + delta });
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;

      const delta = e.clientX - startX.current;
      const elapsed = Date.now() - startTime.current;
      const groupW = getGroupWidth();

      const isFlick = Math.abs(velocity.current) > 0.3 && elapsed < 300;
      const isSweep = Math.abs(delta) > groupW * 0.25;

      if (isFlick || isSweep) {
        const dir = delta < 0 ? 1 : -1;
        goTo(current.current + dir);
      } else {
        goTo(current.current);

        if (Math.abs(delta) < 5 && elapsed < 200) {
          const target = document.elementFromPoint(e.clientX, e.clientY);
          const link = target?.closest("a") as HTMLAnchorElement | null;
          if (link?.href) window.open(link.href, link.target || "_self");
        }
      }
    };

    // ── Resize ──
    const onResize = () => goTo(current.current, 0);
    const ro = new ResizeObserver(onResize);
    ro.observe(viewport);

    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", onPointerUp);
    track.addEventListener("pointercancel", onPointerUp);

    return () => {
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", onPointerUp);
      track.removeEventListener("pointercancel", onPointerUp);
      ro.disconnect();
    };
  }, [itemCount, totalGroups]);

  return { goTo, totalGroups };
}
