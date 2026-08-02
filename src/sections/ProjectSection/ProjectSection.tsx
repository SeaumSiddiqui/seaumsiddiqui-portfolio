import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./ProjectSection.module.css";
import { urlFor } from "@/lib/sanity";

gsap.registerPlugin(ScrollTrigger);

export interface ProjectSectionData {
  id: string;
  titleText: string;
  descText?: string;
  bannerImage?: any;
  collapsibleItems?: { title: string; description: string }[];
}

export interface ProjectData {
  id: string;
  index: string;
  title: string;
  description: string;
  tech: string[];
  coverImage: any;
  coverImageLandscape?: any;
  sections: ProjectSectionData[];
  liveUrl?: string;
  githubUrl?: string;
  reverse?: boolean;
  imageColor?: string;
}

interface ProjectSectionProps {
  data: ProjectData;
  reverse?: boolean;
  index?: number;
  onViewProject: (index: number) => void;
}

const ProjectSection = React.memo(function ProjectSection({ data, reverse = false, index, onViewProject }: ProjectSectionProps) {
  const isReverse = reverse || data.reverse;

  const renderNarrative = () => (
    <div className={`${styles.narrative} ${isReverse ? styles.rightAlign : ''}`}>
      <div className={styles.topSection}>
        <div className={styles.meta}>
          <span className={styles.label}>PROJECT_ID</span>
          <div className={styles.verticalLine}></div>
          <span className={styles.index}>{data.index}</span>
        </div>
      </div>

      <div className={styles.middleSection}>
        {(data.liveUrl || data.githubUrl) && (
          <button onClick={() => onViewProject(index!)} className={styles.visitLink} style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 0 }}>
            [ VISIT_PROJECT <span className={styles.arrow}>→</span> ]
          </button>
        )}
        <h2 className={styles.title} onClick={() => onViewProject(index!)}>{data.title}</h2>
        <div className={styles.horizontalLine}></div>
        
        <div className={styles.manifestHeader}>[ TECHNICAL_MANIFEST ]</div>
        
        <div className={styles.techGrid}>
          {(data.tech || []).slice(0, 5).map((t) => (
            <div key={t} className={styles.techItem}>
              <span className={styles.techSquare}>■</span> {t}
            </div>
          ))}
          {(data.tech || []).length > 5 && (
            <div className={styles.techItem}>
              <span className={styles.techSquare}>■</span> +{(data.tech || []).length - 5} MORE
            </div>
          )}
        </div>
        
        <p className={styles.description}>{data.description}</p>
        
        <div className={styles.links}>
            {(data.liveUrl || data.githubUrl) && (
              <button className={styles.actionBtn} onClick={() => onViewProject(index!)}>
                [ VIEW_PROJECT <span className={styles.arrow}>→</span> ]
              </button>
            )}
        </div>
      </div>
    </div>
  );

  const renderVisual = () => (
    <div className={styles.visual}>
      <div className={styles.imagePlate} style={data.imageColor ? { backgroundColor: data.imageColor } : {}}>
        {data.coverImage && <img src={`${data.coverImage}?auto=format&q=80`} alt={data.title} className={styles.coverImage} />}
        {!data.coverImage && <span className={styles.imagePlaceholderText}>[ TECHNICAL PLATE: {data.index} ]</span>}
      </div>
    </div>
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.leftCol} ${isReverse ? styles.visualCol : styles.narrativeCol}`}>
          {isReverse ? renderVisual() : renderNarrative()}
        </div>
        <div className={`${styles.rightCol} ${isReverse ? styles.narrativeCol : styles.visualCol}`}>
          {isReverse ? renderNarrative() : renderVisual()}
        </div>
      </div>
    </section>
  );
});

export default ProjectSection;
