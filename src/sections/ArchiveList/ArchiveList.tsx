import { useRef } from "react";
import { useSanityQuery } from "@/lib/useSanity";
import { ARCHIVE_PROJECTS_QUERY } from "@/lib/queries";
import { useTextReveal } from "@/animations/useTextReveal";
import ArchiveCard from "./ArchiveCard";
import styles from "./ArchiveList.module.css";
import { useArchiveDevourEffect } from "@/animations/useArchiveDevourEffect";

interface Project {
  _id: string;
  order: number;
  name: string;
  title: string;
  desc: any[];
  tags: string[];
  imageLandscape: any;
  href: string;
  abbr: string;
  client: string;
  date: string;
}

export default function ArchiveList() {
  const sectionRef = useRef<HTMLElement>(null!);
  const { data, loading } = useSanityQuery<Project[]>(ARCHIVE_PROJECTS_QUERY);

  useTextReveal(sectionRef, [data]);
  useArchiveDevourEffect(sectionRef);

  return (
    <section ref={sectionRef} className={styles.list} data-section="archive-list">
      {loading ? null : (
        <>
          {data?.map((project) => (
            <div key={project._id} className={styles.list__row}>
              {/* ORDER */}
              <span className={styles.list__index} data-reveal="label">
                {String(project.order).padStart(2, "0")}
              </span>

              {/* TAGS */}
              <div className={styles.list__tags} data-reveal="sub">
                {project.tags?.map((tag) => (
                  <span key={tag} className={styles.list__tag}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* CARD */}
              <div className={styles.list__card}>
                <div className={styles.list__cardInner}>
                  <ArchiveCard project={project} />
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </section>
  );
}
