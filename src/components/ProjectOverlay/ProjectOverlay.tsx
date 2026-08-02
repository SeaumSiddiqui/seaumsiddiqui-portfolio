import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./ProjectOverlay.module.css";
import { ProjectData, ProjectSectionData } from "@/sections/ProjectSection";

interface ProjectOverlayProps {
  project: ProjectData;
  onClose: () => void;
}

const ProjectOverlay = React.memo(function ProjectOverlay({ project, onClose }: ProjectOverlayProps) {
  const wrapperRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Default to the first section (Narrative)
  const [activeSectionId, setActiveSectionId] = useState(project.sections[0]?.id);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const activeIndex = project.sections.findIndex(s => s.id === activeSectionId);
  const activeSection = activeIndex !== -1 ? project.sections[activeIndex] : project.sections[0];
  const prevSection = activeIndex > 0 ? project.sections[activeIndex - 1] : null;
  const nextSection = activeIndex !== -1 && activeIndex < project.sections.length - 1 ? project.sections[activeIndex + 1] : null;

  useGSAP(() => {
    // Fade in the section contents
    gsap.fromTo([`.${styles.activeLeft} > *`, `.${styles.activeRight} > *`],
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.02, ease: "power2.out", clearProps: "all" }
    );

    // Fade in the grid cards (without y shift)
    gsap.fromTo(`.${styles.inactiveCard}`, 
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.1, 
        ease: "power2.out", 
        clearProps: "all",
        onComplete: () => setIsAnimating(false)
      }
    );
  }, { dependencies: [activeSectionId], scope: wrapperRef });

  const handleSectionClick = (id: string) => {
    if (isAnimating || id === activeSectionId) return;
    setIsAnimating(true);
    
    // Fade out grid cards (without y shift)
    gsap.to(`.${styles.inactiveCard}`, {
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.inOut",
    });

    // Fade out section contents
    gsap.to([`.${styles.activeLeft} > *`, `.${styles.activeRight} > *`], {
      opacity: 0,
      y: -10,
      duration: 0.3,
      stagger: 0.02,
      ease: "power2.inOut",
      onComplete: () => {
        setActiveSectionId(id);
      }
    });
  };

  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${project.title} | Seaum Siddiqui`;

    return () => {
      document.title = originalTitle;
    };
  }, [project.title]);

  useEffect(() => {
    let accumulatedPull = 0;
    
    // Prevent global native scrolling from bubbling underneath
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Initialize Local Lenis for the overlay
    const lenis = new Lenis({
      wrapper: wrapperRef.current || undefined,
      content: contentRef.current || undefined,
      duration: 1.5,
      smoothWheel: true,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

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
      cancelAnimationFrame(rafId);
      lenis.destroy();
      resizeObserver.disconnect();
      document.body.style.overflow = originalOverflow;
      if (wrapper) {
        wrapper.removeEventListener('wheel', handleWheel);
      }
    };
  }, [onClose]);

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

              <div className={styles.sectionNav}>
                <button 
                  onClick={() => prevSection && handleSectionClick(prevSection.id)} 
                  className={`${styles.navButton} ${!prevSection ? styles.navButtonDisabled : ''}`}
                  disabled={!prevSection}
                >
                  <span className={styles.navText}>{prevSection ? `Prev: ${prevSection.titleText}` : 'Prev'}</span>
                </button>
                
                <button 
                  onClick={() => nextSection && handleSectionClick(nextSection.id)} 
                  className={`${styles.navButton} ${!nextSection ? styles.navButtonDisabled : ''}`}
                  disabled={!nextSection}
                >
                  <span className={styles.navText}>{nextSection ? `Next: ${nextSection.titleText}` : 'Next'}</span>
                </button>
              </div>
            </div>

            <div className={styles.activeRight}>
              {activeSection.bannerImage ? (
                <img src={`${activeSection.bannerImage}?auto=format&q=80`} alt={activeSection.titleText} className={styles.bannerImage} />
              ) : (
                <div className={styles.bannerPlaceholder}>[ IMAGE MISING ]</div>
              )}
            </div>
          </section>
        )}

        {/* Sections Grid */}
        {project.sections.length > 0 && (
          <section className={styles.inactiveSections}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionHeader__title}>EXPLORE MORE</span>
            </div>
            <hr className={styles.separator} />
            
            <div className={styles.grid}>
              {[activeSection, ...project.sections.filter(s => s.id !== activeSection.id)].map(sec => {
                const isActive = sec.id === activeSection.id;
                return (
                  <div 
                    key={sec.id} 
                    className={`${styles.inactiveCard} ${isActive ? styles.activeCardNode : ''}`} 
                    onClick={() => handleSectionClick(sec.id)}
                  >
                    {sec.bannerImage ? (
                      <img src={`${sec.bannerImage}?auto=format&q=80`} alt={sec.titleText} className={styles.cardImage} />
                    ) : (
                      <div className={styles.cardPlaceholder}></div>
                    )}
                    <div className={styles.cardOverlay}>
                      <h3 className={styles.cardTitle}>{sec.titleText}</h3>
                    </div>
                  </div>
                );
              })}
              {/* Pad the remaining columns up to 4 with empty cells */}
              {Array.from({ length: Math.max(0, 4 - project.sections.length) }).map((_, i) => (
                <div key={`empty-${i}`} className={styles.emptyCard}></div>
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  );
});

export default ProjectOverlay;
