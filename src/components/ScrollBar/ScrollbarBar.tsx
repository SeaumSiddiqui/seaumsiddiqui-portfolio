import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { gsap } from "gsap";
import styles from "./ScrollBar.module.css";

interface Props {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  wheelRef?: React.RefObject<HTMLDivElement | null>;
}

export interface ScrollBarHandle {
  init: () => void;
}

const ScrollBar = forwardRef<ScrollBarHandle, Props>(({ scrollRef, wheelRef }, ref) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  const init = () => {
    const el = scrollRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    console.log("init called", {
      el,
      track,
      thumb,
      scrollHeight: el?.scrollHeight,
      clientHeight: el?.clientHeight,
    });

    if (!el || !track || !thumb) return;
    if (el.scrollHeight <= el.clientHeight + 2) return;

    gsap.set(track, { opacity: 1 });

    const update = () => {
      const ratio = el.scrollTop / (el.scrollHeight - el.clientHeight);
      const maxTop = track.clientHeight - thumb.clientHeight;
      gsap.set(thumb, { y: ratio * maxTop });
    };

    let targetY = el.scrollTop;
    let rafLoop = 0;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const loop = () => {
      if (Math.abs(targetY - el.scrollTop) > 0.5) {
        el.scrollTop = lerp(el.scrollTop, targetY, 0.08);
        update();
      }
      rafLoop = requestAnimationFrame(loop);
    };
    rafLoop = requestAnimationFrame(loop);

    let startY = 0,
      startTop = 0,
      dragging = false;

    const onDown = (e: MouseEvent) => {
      dragging = true;
      startY = e.clientY;
      startTop = gsap.getProperty(thumb, "y") as number;
      e.preventDefault();
    };

    const onMove = (e: MouseEvent) => {
      if (!dragging) return;
      const maxTop = track.clientHeight - thumb.clientHeight;
      const newY = Math.min(Math.max(startTop + (e.clientY - startY), 0), maxTop);
      gsap.set(thumb, { y: newY });
      targetY = (newY / maxTop) * (el.scrollHeight - el.clientHeight);
    };

    const onUp = () => {
      dragging = false;
    };

    const wheelEl = wheelRef?.current ?? el;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      targetY = Math.min(Math.max(targetY + e.deltaY, 0), el.scrollHeight - el.clientHeight);
    };

    thumb.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    wheelEl.addEventListener("wheel", onWheel, { passive: false });

    cleanupRef.current = () => {
      cancelAnimationFrame(rafLoop);
      thumb.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      wheelEl.removeEventListener("wheel", onWheel);
    };
  };

  useImperativeHandle(ref, () => ({ init }));

  useEffect(() => {
    return () => {
      cleanupRef.current?.();
    };
  }, []);

  return (
    <div ref={trackRef} className={styles.track}>
      <div ref={thumbRef} className={styles.thumb} />
    </div>
  );
});

ScrollBar.displayName = "ScrollBar";
export default ScrollBar;
