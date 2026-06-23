import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import styles from "./ProjectOverlay.module.css";
import { ProjectData, ProjectSectionData } from "@/sections/ProjectSection";

interface ProjectOverlayProps {
  project: ProjectData;
  onClose: () => void;
}

export default function ProjectOverlay({ project, onClose }: ProjectOverlayProps) {
  const wrapperRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Default to the first section (Narrative)
  const [activeSectionId, setActiveSectionId] = useState(project.sections[0]?.id);

  useEffect(() => {
    let accumulatedPull = 0;
    
    // Initialize Local Lenis for the overlay
    const lenis = new Lenis({
      wrapper: wrapperRef.current || undefined,
      content: contentRef.current || undefined,
      duration: 1.5,
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const handleWheel = (e: WheelEvent) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      // Check if scrolled to top and pulling up
      if (wrapper.scrollTop <= 0 && e.deltaY < 0) {
        accumulatedPull += Math.abs(e.deltaY);
        if (accumulatedPull > 150) {
          onClose();
          accumulatedPull = 0;
        }
      } else {
        accumulatedPull = 0;
      }
    };

    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('wheel', handleWheel, { passive: true });
    }

    // Use ResizeObserver to ensure Lenis recalculates bounds when images load
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      lenis.destroy();
      resizeObserver.disconnect();
      if (wrapper) {
        wrapper.removeEventListener('wheel', handleWheel);
      }
    };
  }, [onClose]);

  const activeSection = project.sections.find(s => s.id === activeSectionId) || project.sections[0];
  const inactiveSections = project.sections.filter(s => s.id !== activeSectionId);

  return (
    <main className={styles.overlay} ref={wrapperRef}>
      <div className={styles.content} ref={contentRef}>

        {/* Redesigned Hero Section (Centered) */}
        <section className={styles.hero}>
          {(project.liveUrl || project.githubUrl) && (
            <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
              [ VISIT_PROJECT <span className={styles.arrow}>→</span> ]
            </a>
          )}
          
          <h1 className={styles.hero__title}>{project.title}</h1>
          
          <div className={styles.meta__tags}>
            {project.tech.map((t) => {
              const formatted = t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
              return (
                <span key={t} className={styles.techNode}>{formatted}</span>
              );
            })}
          </div>
        </section>

        <hr className={styles.separator} />

        {/* Active Section (50/50 Split) */}
        {activeSection && (
          <section className={styles.activeSection}>
            <div className={styles.activeLeft}>
              <div className={styles.notch}></div>
              <h2 className={styles.sectionTitle}>{activeSection.titleText}</h2>
              
              {activeSection.descText && (
                <p className={styles.sectionDesc}>{activeSection.descText}</p>
              )}

              {activeSection.collapsibleItems && (
                <div className={styles.accordionContainer}>
                  {activeSection.collapsibleItems.map((item, idx) => (
                    <details key={idx} className={styles.details}>
                      <summary className={styles.summary}>
                        <span className={styles.summaryIndex}>0{idx + 1}</span>
                        {item.title}
                      </summary>
                      <p className={styles.detailsContent}>{item.description}</p>
                    </details>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.activeRight}>
              {activeSection.bannerImage ? (
                <img src={activeSection.bannerImage} alt={activeSection.titleText} className={styles.bannerImage} />
              ) : (
                <div className={styles.bannerPlaceholder}>[ IMAGE MISING ]</div>
              )}
            </div>
          </section>
        )}

        {/* Inactive Sections Grid */}
        {inactiveSections.length > 0 && (
          <section className={styles.inactiveSections}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionHeader__title}>EXPLORE MORE</span>
            </div>
            <hr className={styles.separator} />
            
            <div className={styles.grid}>
              {inactiveSections.map(sec => (
                <div key={sec.id} className={styles.inactiveCard} onClick={() => setActiveSectionId(sec.id)}>
                  {sec.bannerImage ? (
                    <img src={sec.bannerImage} alt={sec.titleText} className={styles.cardImage} />
                  ) : (
                    <div className={styles.cardPlaceholder}></div>
                  )}
                  <div className={styles.cardOverlay}>
                    <h3 className={styles.cardTitle}>{sec.titleText}</h3>
                  </div>
                </div>
              ))}
              {/* Pad the remaining columns up to 4 with empty cells */}
              {Array.from({ length: Math.max(0, 4 - inactiveSections.length) }).map((_, i) => (
                <div key={`empty-${i}`} className={styles.emptyCard}></div>
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}
