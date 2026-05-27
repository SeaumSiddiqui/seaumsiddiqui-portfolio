import { useRef } from "react";
import { gsap } from "gsap";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import ScrollBar, { ScrollBarHandle } from "@/components/ScrollBar/ScrollbarBar";
import styles from "./ArchiveCard.module.css";

interface Project {
  _id: string;
  order: number;
  name: string;
  title: string;
  abbr: string;
  client: string;
  date: string;
  desc: any[];
  tags: string[];
  imageLandscape: any;
  href: string;
}

export default function ArchiveCard({ project }: { project: Project }) {
  const rightRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  const scrollBarInitRef = useRef(false);
  const scrollBarRef = useRef<ScrollBarHandle>(null);

  const onEnter = () => {
    gsap.to(rightRef.current, {
      left: "50%",
      duration: 0.5,
      ease: "power3.out",
      onComplete: () => {
        if (!scrollBarInitRef.current) {
          scrollBarInitRef.current = true;
          scrollBarRef.current?.init();
        }
      },
    });
  };

  const onLeave = () => {
    gsap.to(rightRef.current, {
      left: "10%",
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const imageSrc = project.imageLandscape ? urlFor(project.imageLandscape).width(800).url() : "";
  const year = project.date ? new Date(project.date).getFullYear() : "";

  return (
    <div className={styles.container}>
      {/* LEFT — image */}
      <div className={styles.left} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        {imageSrc && <img src={imageSrc} alt={project.name} onLoad={(e) => e.currentTarget.classList.add("loaded")}/>}
      </div>

      {/* BACK — info card */}
      <div ref={backRef} className={styles.back}>
        <span className={styles.back__abbr}>{project.abbr}</span>
        <div className={styles.back__meta}>
          <span className={styles.back__clientDate}>
            {[project.client, year].filter(Boolean).join(" — ")}
          </span>
        </div>
      </div>

      {/* RIGHT — details */}
      <div ref={rightRef} className={styles.right} onMouseLeave={onLeave}>
        <div className={styles.right__header}>
          <span className={styles.right__name} data-reveal="heading">
            {project.name}
          </span>
          <a href={project.href} target="_blank" rel="noreferrer" className={styles.right__link}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2 12L12 2M12 2H4M12 2V10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>
        <span className={styles.right__title} data-reveal="sub">
          {project.title}
        </span>
        <div className={styles.right__descWrap}>
          <div className={styles.right__desc} data-reveal="body" ref={descRef}>
            {project.desc?.length > 0 && <PortableText value={project.desc} />}
          </div>
          {project.desc?.length > 0 && (
            <ScrollBar ref={scrollBarRef} scrollRef={descRef} wheelRef={rightRef} />
          )}
        </div>
      </div>
    </div>
  );
}
