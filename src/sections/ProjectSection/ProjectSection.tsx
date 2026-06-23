import React from 'react';
import styles from './ProjectSection.module.css';

export interface ProjectSectionData {
  id: string;
  titleText: string;
  descText?: string;
  bannerImage?: string;
  collapsibleItems?: {
    title: string;
    description: string;
  }[];
}

export interface ProjectData {
  id: string;
  index: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageColor?: string;
  coverImage?: string;
  coverImageLandscape?: string;
  reverse?: boolean;
  sections: ProjectSectionData[];
}

interface ProjectSectionProps {
  data: ProjectData;
  onViewProject?: () => void;
}

export default function ProjectSection({ data, onViewProject }: ProjectSectionProps) {
  const isReverse = data.reverse;

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
          <button onClick={onViewProject} className={styles.visitLink} style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 0 }}>
            [ VISIT_PROJECT <span className={styles.arrow}>→</span> ]
          </button>
        )}
        <h2 className={styles.title} onClick={onViewProject}>{data.title}</h2>
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
          {(data.githubUrl || data.liveUrl) && (
            <button onClick={onViewProject} className={styles.actionBtn}>
              VIEW PROJECT <span className={styles.arrow}>→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const renderVisual = () => (
    <div className={styles.visual}>
      <div className={styles.imagePlate} style={data.imageColor ? { backgroundColor: data.imageColor } : {}}>
        {data.coverImage && <img src={data.coverImage} alt={data.title} className={styles.coverImage} />}
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
}
