import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./ProjectSection.module.css";
import { urlFor } from "@/lib/sanity";

gsap.registerPlugin(ScrollTrigger);

export interface DynamicSectionData {
  id: string;
  mediaType: 'image' | 'video' | 'none';
  mediaImage?: any;
  mediaVideo?: string;
  content?: any[];
}

export interface MetricData {
  id: string;
  value: string;
  label: string;
}

export interface ProjectData {
  id: string;
  index: string;
  title: string;
  heading?: string;
  tech: string[];

  
  // New Overlay Fields
  logo?: string;
  bannerImage?: string;
  bannerVideo?: string;
  architecture?: string[];
  role?: string[];
  coreIntegration?: string[];
  keyAchievement?: string[];
  deployment?: string[];
  overview?: any[];
  dynamicSections?: DynamicSectionData[];
  metrics?: MetricData[];
  summary?: any[];

  // Legacy (Keep for fallback if needed)
  sections?: any[];
  
  liveUrl?: string;
  githubUrl?: string;
  reverse?: boolean;
  globalColor?: string;
}

interface ProjectSectionProps {
  data: ProjectData;
  reverse?: boolean;
  index?: number;
  onViewProject: (index: number) => void;
  isActiveBanner?: boolean;
}

const ProjectSection = React.memo(function ProjectSection({ data, reverse = false, index, onViewProject, isActiveBanner = false }: ProjectSectionProps) {
  const isReverse = reverse || data.reverse;
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);
  const topSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isActiveBanner) {
      gsap.to(sectionRef.current, { height: '65vh', duration: 0.8, ease: "power4.inOut" });
      gsap.to([leftColRef.current, rightColRef.current], { paddingTop: '20px', paddingBottom: '20px', duration: 0.8, ease: "power4.inOut" });
      gsap.to(narrativeRef.current, { paddingTop: '10vh', duration: 0.8, ease: "power4.inOut" });
      gsap.to(topSectionRef.current, { opacity: 0, height: 0, marginBottom: 0, overflow: 'hidden', duration: 0.8, ease: "power4.inOut" });
    } else {
      // If the section was already forcefully expanded (e.g. during the gate close animation),
      // we can skip the un-shrinking animation and just instantly clear inline props to prevent any layout shifts.
      if (sectionRef.current?.dataset.closingGate === 'true') {
        delete sectionRef.current.dataset.closingGate;
        gsap.set(sectionRef.current, { clearProps: "height" });
        gsap.set([leftColRef.current, rightColRef.current], { clearProps: "paddingTop,paddingBottom" });
        gsap.set(narrativeRef.current, { clearProps: "paddingTop" });
        gsap.set(topSectionRef.current, { clearProps: "all" });
      } else {
        gsap.to(sectionRef.current, { height: '100vh', duration: 0.8, ease: "power4.inOut", clearProps: "height" });
        gsap.to([leftColRef.current, rightColRef.current], { paddingTop: '60px', paddingBottom: '60px', duration: 0.8, ease: "power4.inOut", clearProps: "paddingTop,paddingBottom" });
        gsap.to(narrativeRef.current, { paddingTop: '40px', duration: 0.8, ease: "power4.inOut", clearProps: "paddingTop" });
        gsap.to(topSectionRef.current, { opacity: 1, height: 'auto', marginBottom: '80px', duration: 0.8, ease: "power4.inOut", clearProps: "all" });
      }
    }
  }, { dependencies: [isActiveBanner], scope: sectionRef });

  const renderNarrative = () => (
    <div className={`${styles.narrative} ${isReverse ? styles.rightAlign : ''}`} ref={narrativeRef}>
      <div className={styles.topSection} ref={topSectionRef}>
        <div className={styles.meta}>
          <span className={styles.label}>PROJECT_ID</span>
          <div className={styles.verticalLine}></div>
          <span className={styles.index}>{data.index}</span>
        </div>
      </div>

      <div className={styles.middleSection}>
        {data.logo && (
          <img src={data.logo} alt={`${data.title} logo`} className={styles.projectLogo} />
        )}
        <h2 className={styles.title} onClick={() => onViewProject(index!)}>{data.title}</h2>
        {data.heading ? (
          <h3 className={styles.heading}>
            {data.heading}
            {(!isActiveBanner || data.liveUrl || data.githubUrl) && (
              <button 
                className={styles.actionBtn} 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  if (isActiveBanner) {
                    const targetUrl = data.githubUrl || data.liveUrl;
                    if (targetUrl) window.open(targetUrl, '_blank', 'noopener,noreferrer');
                  } else {
                    onViewProject(index!); 
                  }
                }} 
                aria-label={isActiveBanner ? "Visit Project" : "View Project"}
              >
                <span className={styles.btnText}>{isActiveBanner ? "VISIT_PROJECT" : "VIEW PROJECT"}</span>
                <span className={styles.arrow}>→</span>
              </button>
            )}
          </h3>
        ) : (
          <div className={styles.links}>
            {(!isActiveBanner || data.liveUrl || data.githubUrl) && (
              <button 
                className={styles.actionBtn} 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  if (isActiveBanner) {
                    const targetUrl = data.githubUrl || data.liveUrl;
                    if (targetUrl) window.open(targetUrl, '_blank', 'noopener,noreferrer');
                  } else {
                    onViewProject(index!); 
                  }
                }} 
                aria-label={isActiveBanner ? "Visit Project" : "View Project"}
              >
                <span className={styles.btnText}>{isActiveBanner ? "VISIT_PROJECT" : "VIEW PROJECT"}</span>
                <span className={styles.arrow}>→</span>
              </button>
            )}
          </div>
        )}
        
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
      </div>
    </div>
  );

  const renderVisual = () => (
    <div className={styles.visual}>
      <div className={styles.imagePlate}>
        {data.bannerVideo ? (
          <video src={data.bannerVideo} autoPlay loop muted playsInline className={styles.coverImage} />
        ) : data.bannerImage ? (
          <img src={`${data.bannerImage}?auto=format&q=80`} alt={data.title} className={styles.coverImage} />
        ) : (
          <span className={styles.imagePlaceholderText}>[ TECHNICAL PLATE: {data.index} ]</span>
        )}
      </div>
    </div>
  );

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.leftCol} ${isReverse ? styles.visualCol : styles.narrativeCol}`} ref={leftColRef}>
          {isReverse ? renderVisual() : renderNarrative()}
        </div>
        <div className={`${styles.rightCol} ${isReverse ? styles.narrativeCol : styles.visualCol}`} ref={rightColRef}>
          {isReverse ? renderNarrative() : renderVisual()}
        </div>
      </div>
    </section>
  );
});

export default ProjectSection;
