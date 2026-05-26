import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./CursorBlob.module.css";

export default function CursorBlob() {
  const blobRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = blobRef.current;
    if (!el) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const smooth = { x: pos.x, y: pos.y };

    // Two separate flags — never shared
    let overCanvas = false;
    let overTab = false;

    const getPortrait = () =>
      document.querySelector('canvas[data-cursor-exclusion="true"]') as HTMLCanvasElement | null;

    const enterPortrait = () => {
      overCanvas = true;
      gsap.to(el, { width: 120, height: 120, opacity: 0, duration: 0.45, ease: "power2.inOut" });
    };
    const leavePortrait = () => {
      overCanvas = false;
      gsap.to(el, { width: 10, height: 10, opacity: 0.9, duration: 0.45, ease: "power2.inOut" });
    };

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;

      // ── Tab / non-canvas exclusion ──
      const topEl = document.elementFromPoint(e.clientX, e.clientY);
      const exclusion = topEl?.closest('[data-cursor-exclusion="true"]');
      const isNonCanvas = exclusion && exclusion.tagName !== "CANVAS";

      if (isNonCanvas && !overTab) {
        overTab = true;
        gsap.to(el, { scale: 0, duration: 0.3, ease: "power2.inOut" });
        return;
      }
      if (!isNonCanvas && overTab) {
        overTab = false;
        gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.inOut" });
      }
      if (overTab) return;

      // ── Portrait canvas ──
      const portrait = getPortrait();
      if (!portrait) {
        if (overCanvas) leavePortrait();
        return;
      }

      const rect = portrait.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        if (overCanvas) leavePortrait();
        return;
      }

      const gl =
        (portrait.getContext("webgl2") as WebGL2RenderingContext | null) ||
        (portrait.getContext("webgl") as WebGLRenderingContext | null);
      if (!gl) return;

      const px = Math.floor((x / rect.width) * gl.drawingBufferWidth);
      const py = Math.floor(((rect.height - y) / rect.height) * gl.drawingBufferHeight);
      const pixel = new Uint8Array(4);
      try {
        gl.readPixels(px, py, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
      } catch {
        return;
      }

      const isOverPixel = pixel[3] > 10;
      if (isOverPixel && !overCanvas) enterPortrait();
      else if (!isOverPixel && overCanvas) leavePortrait();
    };

    window.addEventListener("mousemove", onMove);

    const tick = () => {
      smooth.x += (pos.x - smooth.x) * 0.08;
      smooth.y += (pos.y - smooth.y) * 0.08;
      const size = el.offsetWidth || 10;
      gsap.set(el, { x: smooth.x - size / 2, y: smooth.y - size / 2 });
    };
    gsap.ticker.add(tick);

    const interactiveEnter = (e: Event) => {
      if ((e.currentTarget as HTMLElement).closest('[data-cursor-exclusion="true"]')) return;
      gsap.to(el, { width: 36, height: 36, opacity: 1, duration: 0.25, ease: "power2.out" });
    };
    const interactiveLeave = () => {
      if (overCanvas || overTab) return;
      gsap.to(el, { width: 10, height: 10, opacity: 0.9, duration: 0.25, ease: "power2.out" });
    };

    const attached: Element[] = [];
    const attach = () => {
      document.querySelectorAll("a, button").forEach((node) => {
        if (attached.includes(node)) return;
        if (node.closest('[data-cursor-exclusion="true"]')) return;
        node.addEventListener("mouseenter", interactiveEnter);
        node.addEventListener("mouseleave", interactiveLeave);
        attached.push(node);
      });
    };

    attach();
    const mo = new MutationObserver(() => attach());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      gsap.ticker.remove(tick);
      mo.disconnect();
      attached.forEach((node) => {
        node.removeEventListener("mouseenter", interactiveEnter);
        node.removeEventListener("mouseleave", interactiveLeave);
      });
    };
  }, []);

  return <div ref={blobRef} className={styles.blob} aria-hidden="true" />;
}
