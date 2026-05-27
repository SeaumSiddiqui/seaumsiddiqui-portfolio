import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useSanityQuery } from "@/lib/useSanity";
import { ARCHIVE_QUERY } from "@/lib/queries";
import styles from "./ArchiveBanner.module.css";
import Navbar from "@/components/Navbar/Navbar";

interface ArchiveData {
  headingLine1: string;
  headingLine2: string;
  subText: string;
  techStack: string[];
}
export default function ArchiveBanner() {
  const { data } = useSanityQuery<ArchiveData>(ARCHIVE_QUERY);



  return (
    <section className={styles.banner} data-section="archive-banner">
      <Navbar position="absolute" />

      <div className={styles.banner__grid}>
        {/* TOP LEFT — PROJECT */}
        <div className={styles.banner__cell}>
          <div className={styles.banner__project}>{data?.headingLine1 ?? "Project"}</div>
        </div>

        {/* TOP RIGHT — subtext */}
        <div className={styles.banner__cell}>
          <span className={styles.banner__subText}>{data?.subText ?? "Past & Present Work"}</span>
        </div>

        {/* BOTTOM LEFT — tech stack */}
        <div className={styles.banner__cell}>
          <div className={styles.banner__stackWrap}>
            <div className={styles.banner__stack}>
              {[...(data?.techStack ?? []), ...(data?.techStack ?? [])].map((tech, i) => (
                <div key={i} className={styles.banner__stackItem}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM RIGHT — ARCHIVE */}
        <div className={styles.banner__cell}>
          <div className={styles.banner__archive}>{data?.headingLine2 ?? "Archive"}</div>
        </div>
      </div>
    </section>
  );
}
