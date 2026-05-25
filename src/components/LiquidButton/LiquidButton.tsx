import { useRef } from "react";
import gsap from "gsap";
import styles from "./LiquidButton.module.css";

interface Props {
  label: string;
  href?: string;
  onClick?: () => void;
}

// ─── Path keyframes ────────────────────────────────────────────────────────
// ViewBox "0 0 200 48". Structure: M L L L Z — always 4 points, same count.
// The leading edge is a straight diagonal line (top leads, bottom trails ~25px).
// This creates the clean diagonal brush-stroke look from the sketch.
//
// Enter: diagonal edge sweeps LEFT → RIGHT  (top-right corner leads)
// Leave: diagonal edge retreats RIGHT → LEFT (bottom-right corner trails)

const ENTER = {
  hidden: "M 0,-2 L   0,-2 L   0,50 L 0,50 Z",
  k1: "M 0,-2 L  60,-2 L  35,50 L 0,50 Z", // 25% — edge at top:60 bot:35
  k2: "M 0,-2 L 110,-2 L  85,50 L 0,50 Z", // 50%
  k3: "M 0,-2 L 160,-2 L 135,50 L 0,50 Z", // 75%
  full: "M 0,-2 L 204,-2 L 204,50 L 0,50 Z", // 100%
};

// Leave: opposite diagonal — bottom leads the retreat (back-stroke feel)
const LEAVE = {
  k3: "M 0,-2 L 165,-2 L 190,50 L 0,50 Z",
  k2: "M 0,-2 L 115,-2 L 140,50 L 0,50 Z",
  k1: "M 0,-2 L  65,-2 L  90,50 L 0,50 Z",
  hidden: "M 0,-2 L   0,-2 L   0,50 L 0,50 Z",
};

const SEG = 0.22; // duration per segment — 4 segs = ~0.88s total, slow & deliberate

export default function LiquidButton({ label, href, onClick }: Props) {
  const pathRef = useRef<SVGPathElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const enter = () => {
    tlRef.current?.kill();
    tlRef.current = gsap
      .timeline()
      .set(pathRef.current, { attr: { d: ENTER.hidden } })
      .to(pathRef.current, { attr: { d: ENTER.k1 }, duration: SEG, ease: "power1.in" })
      .to(pathRef.current, { attr: { d: ENTER.k2 }, duration: SEG, ease: "none" })
      .to(pathRef.current, { attr: { d: ENTER.k3 }, duration: SEG, ease: "none" })
      .to(pathRef.current, { attr: { d: ENTER.full }, duration: SEG * 0.8, ease: "power1.out" })
      .to(
        labelRef.current,
        {
          color: "var(--color-bg)",
          duration: 0.18,
          ease: "none",
        },
        `-=${SEG * 0.15}`,
      );
  };

  const leave = () => {
    tlRef.current?.kill();
    tlRef.current = gsap
      .timeline()
      .to(pathRef.current, { attr: { d: LEAVE.k3 }, duration: SEG * 0.8, ease: "power1.in" })
      .to(pathRef.current, { attr: { d: LEAVE.k2 }, duration: SEG, ease: "none" })
      .to(pathRef.current, { attr: { d: LEAVE.k1 }, duration: SEG, ease: "none" })
      .to(pathRef.current, { attr: { d: LEAVE.hidden }, duration: SEG * 0.8, ease: "power1.out" })
      .to(
        labelRef.current,
        {
          color: "var(--font-label-color)",
          duration: 0.18,
          ease: "none",
        },
        "<0",
      );
  };

  const inner = (
    <>
      <svg
        className={styles.svg}
        viewBox="0 0 200 48"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path ref={pathRef} d={ENTER.hidden} className={styles.fill} />
      </svg>
      <span ref={labelRef} className={styles.label}>
        {label} ↗
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={styles.btn}
        onMouseEnter={enter}
        onMouseLeave={leave}
        target="_blank"
        rel="noreferrer"
      >
        {inner}
      </a>
    );
  }

  return (
    <button className={styles.btn} onMouseEnter={enter} onMouseLeave={leave} onClick={onClick}>
      {inner}
    </button>
  );
}
