import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectsSection.module.css";
import { useTextReveal } from "@/animations/useTextReveal";
import { useSanityQuery } from "@/lib/useSanity";
import { PROJECTS_QUERY } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { useCarousel } from "./useCarousel";

interface ProjectData {
  _id: string;
  index: string;
  name: string;
  abbr: string;
  summary: string;
  tags: string[];
  imagePortrait: any;
  href: string;
}

const PER_GROUP = 3;

export default function ProjectsSection() {
  const { data, loading } = useSanityQuery<ProjectData[]>(PROJECTS_QUERY);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useTextReveal(sectionRef, [data]);
  useCarousel(trackRef, dotsRef, data?.length ?? 0, PER_GROUP);

  return (
    <section className={styles.projects} ref={sectionRef} data-section="projects">
      {loading ? null : (
        <>
          <div className={styles.projects__header}>
            <span className={styles.projects__label} data-reveal="label">
              — Selected Work
            </span>
            <span className={styles.projects__count} data-reveal="sub">
              {String(data?.length ?? 0).padStart(2, "0")} Projects
            </span>
          </div>

          {/* Viewport — clips the track */}
          <div className={styles.projects__viewport}>
            <div className={styles.projects__track} ref={trackRef}>
              {data?.map((project) => (
                <div key={project._id} className={styles.projects__slide}>
                  <ProjectCard
                    project={{
                      ...project,
                      id: project._id,
                      desc: project.summary,
                      imagePortrait: project.imagePortrait
                        ? urlFor(project.imagePortrait).width(800).url()
                        : "",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Footer: dots left, archive button right */}
          <div className={styles.projects__footer}>
            <div className={styles.projects__dots} ref={dotsRef} />
            <a href="/archive" className={styles.projects__archiveBtn} data-reveal="action">
              <span className={styles.projects__archiveBtnTop}>
                Archive
                <svg
                  width="14"
                  height="14"
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
              </span>
              <span className={styles.projects__archiveBtnSub}>Everything, laid bare</span>
            </a>
          </div>
        </>
      )}
    </section>
  );
}
