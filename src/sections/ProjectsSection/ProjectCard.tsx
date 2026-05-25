import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Project } from "@/config/projects";
import styles from "./ProjectCard.module.css";
import { useTextReveal } from "@/animations/useTextReveal";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const cardRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useTextReveal(cardRef);

  // Width set on mount
  useEffect(() => {
    const card = cardRef.current;
    const right = rightRef.current;
    const inner = innerRef.current;
    if (!card || !right || !inner) return;

    const measure = () => {
      const w = card.offsetWidth * 0.58;
      inner.style.width = `${w}px`;

      // Temporarily make panel visible but invisible to measure tags
      right.style.width = `${w}px`;
      right.style.visibility = "hidden"; // invisible but takes space

      // Wait one frame for layout
      requestAnimationFrame(() => {
        calculateTags();
        tagsCalculated.current = true;

        // Hide panel again
        right.style.width = "0";
        right.style.visibility = "";
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(card);
    return () => ro.disconnect();
  }, []);

  const tagsCalculated = useRef(false);

  const enter = () => {
    tlRef.current?.kill();
    const card = cardRef.current;
    const right = rightRef.current;
    if (!card || !right) return;

    const targetW = card.offsetWidth * 0.58;
    tlRef.current = gsap.timeline().to(right, {
      width: targetW,
      duration: 0.6,
      ease: "power3.inOut",
    });
  };

  const calculateTags = () => {
    const container = tagsRef.current;
    if (!container) return;

    const allTags = Array.from(container.querySelectorAll("[data-tag]")) as HTMLElement[];
    const badge = container.querySelector("[data-badge]") as HTMLElement;

    // Show all first
    allTags.forEach((t) => (t.style.display = ""));
    if (badge) badge.style.display = "none";

    const containerRect = container.getBoundingClientRect();
    const containerBottom = containerRect.top + container.offsetHeight;
    let firstHidden = -1;

    // Forward loop — find first tag that overflows
    for (let i = 0; i < allTags.length; i++) {
      const tagRect = allTags[i].getBoundingClientRect();
      if (tagRect.bottom > containerBottom) {
        firstHidden = i;
        break;
      }
    }

    if (firstHidden === -1) return;

    // Hide from firstHidden onwards
    for (let i = firstHidden; i < allTags.length; i++) {
      allTags[i].style.display = "none";
    }

    const hiddenCount = allTags.length - firstHidden;

    if (badge) {
      badge.style.display = "";
      badge.textContent = `+${hiddenCount}`;

      // If badge itself overflows, hide one more tag
      if (badge.getBoundingClientRect().bottom > containerBottom) {
        allTags[firstHidden - 1].style.display = "none";
        badge.textContent = `+${hiddenCount + 1}`;
      }
    }
    tagsCalculated.current = true;
  };

  const leave = () => {
    tlRef.current?.kill();
    tlRef.current = gsap
      .timeline()
      .to(rightRef.current, { width: 0, duration: 0.5, ease: "power3.inOut" });
  };

  return (
    <article className={styles.card} ref={cardRef} onMouseEnter={enter} onMouseLeave={leave}>
      <div className={styles.card__left}>
        <div
          className={styles.card__image}
          style={{ backgroundImage: `url(${project.imagePortrait})` }}
        />
        <span className={styles.card__index} data-reveal="sub">
          {project.index}
        </span>
      </div>

      <div className={styles.card__right} ref={rightRef}>
        <div className={styles.card__inner} ref={innerRef}>
          <a href={project.href} target="_blank" rel="noreferrer" className={styles.card__top}>
            <span className={styles.card__arrow}>↗</span>
            <span className={styles.card__name} data-reveal="heading">
              {project.name}
            </span>
          </a>

          {/* CHANGED — wrapper div added around p */}
          <div className={styles.card__descWrap}>
            <p className={styles.card__desc} data-reveal="body">
              {project.desc}
            </p>
          </div>

          {/* CHANGED — all tags always rendered, JS hides via display:none */}
          <div className={styles.card__tags} ref={tagsRef} data-reveal="sub">
            {project.tags.map((t) => (
              <span key={t} className={styles.card__tag} data-tag>
                {t}
              </span>
            ))}
            <span className={styles.card__tag} data-badge style={{ display: "none" }} />
          </div>

          <div className={styles.card__bottom}>
            <span className={styles.card__abbr} data-reveal="label">
              {project.abbr}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
