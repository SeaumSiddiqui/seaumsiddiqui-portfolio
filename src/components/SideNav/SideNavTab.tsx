import { useRef } from "react";
import { gsap } from "gsap";
import styles from "./SideNavTab.module.css";

interface Props {
  onClick: () => void;
  visible: boolean;
}

export default function SideNavTab({ onClick, visible }: Props) {
  const tabRef = useRef<HTMLButtonElement>(null);

  const enter = () => {
    gsap.to(tabRef.current, {
      backgroundColor: "var(--cursor-color)",
      duration: 0.45,
      ease: "power2.out",
    });
  };

  const leave = () => {
    gsap.to(tabRef.current, {
      backgroundColor: "var(--color-400)",
      duration: 0.45,
      ease: "power2.inOut",
    });
  };

  return (
    <button
      ref={tabRef}
      className={`${styles.tab} ${visible ? styles.visible : ""}`}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onClick={onClick}
      data-cursor-exclusion="true" /* hides mouse blob on hover */
      aria-label="Open navigation"
    >
      <div className={styles.tab__inner}>
        <div className={styles.tab__letterWrap}>
          <span className={styles.tab__letter}>M</span>
          <span className={styles.tab__dot} aria-hidden="true" />
        </div>
        <span className={styles.tab__label}>Menu</span>
      </div>
    </button>
  );
}
