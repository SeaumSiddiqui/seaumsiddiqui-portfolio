import React, { useEffect, useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./ProjectOverlay.module.css";
import ProjectSection, { ProjectData } from "@/sections/ProjectSection/ProjectSection";
import { PortableText } from '@portabletext/react';

interface ProjectOverlayProps {
  project: ProjectData;
  onClose: () => void;
  allProjects?: ProjectData[];
  reverse?: boolean;
  backgroundBannerElement?: HTMLElement | null;
}

const ProjectOverlay = React.memo(function ProjectOverlay({ project, onClose, allProjects = [], reverse = false, backgroundBannerElement }: ProjectOverlayProps) {
  const wrapperRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const relatedProjects = allProjects
    .filter(p => p.id !== project.id)
    .slice(0, 2);

  const spacerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate the spacer from 100vh to 65vh synchronously with the ProjectSection banner shrinking.
    // This naturally "pulls" the overview content up from off-screen into the bottom 35vh,
    // avoiding any awkward empty spaces or blocky traveling animations.
    gsap.fromTo(spacerRef.current,
      { height: '100vh' },
      { height: '65vh', duration: 0.8, ease: "power4.inOut" }
    );

    // Stagger reveal the internal text elements as they enter the screen
    gsap.fromTo(`.${styles.reveal}`,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.6, stagger: 0.1, ease: "power3.out", clearProps: "all" }
    );
  }, { scope: wrapperRef });

  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${project.title} | Seaum Siddiqui`;
    return () => { document.title = originalTitle; };
  }, [project.title]);

  useLayoutEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const lenis = new Lenis({
      wrapper: wrapperRef.current || undefined,
      content: contentRef.current || undefined,
      duration: 1.5,
      smoothWheel: true,
    });

    let isParallaxStopped = false;
    const handleStopParallax = () => { isParallaxStopped = true; };
    window.addEventListener('stopProjectOverlayParallax', handleStopParallax);

    lenis.on('scroll', (e: any) => {
      if (backgroundBannerElement && !isParallaxStopped) {
        backgroundBannerElement.style.transform = `translateY(${-e.scroll}px)`;
      }
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const resizeObserver = new ResizeObserver(() => lenis.resize());
    if (contentRef.current) resizeObserver.observe(contentRef.current);

    const handleScrollToTop = (e: any) => {
      const nextAction = e.detail?.next;
      const skipHistoryBack = e.detail?.skipHistoryBack;
      lenis.scrollTo(0, {
        duration: 0.8,
        easing: (t: number) => 1 - Math.pow(1 - t, 4), // power4.out
        onComplete: () => {
          window.dispatchEvent(new CustomEvent('closeProjectOverlayReady', { detail: { next: nextAction, skipHistoryBack } }));
        }
      });
    };
    window.addEventListener('projectOverlayScrollToTop', handleScrollToTop);

    return () => {
      window.removeEventListener('projectOverlayScrollToTop', handleScrollToTop);
      window.removeEventListener('stopProjectOverlayParallax', handleStopParallax);
      if (backgroundBannerElement) {
        backgroundBannerElement.style.transform = '';
      }
      cancelAnimationFrame(rafId);
      lenis.destroy();
      resizeObserver.disconnect();
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  // The banner media side matches the featured project layout now (we can use left by default or pass reverse)

  return (
    <main className={styles.overlay} ref={wrapperRef} style={{ '--color-theme': project.globalColor || '#e91e63' } as React.CSSProperties}>
      <div className={styles.content} ref={contentRef}>
        
        {/* If opened from Home, transparent area allowing underlying banner to show through.
            If opened from Archive, we render the banner directly inside the overlay. */}
        {!backgroundBannerElement ? (
          <div style={{ position: 'relative', width: '100%', zIndex: 0 }}>
            <ProjectSection data={project} isActiveBanner={true} reverse={reverse} onViewProject={() => {}} />
          </div>
        ) : (
          <div ref={spacerRef} style={{ height: '65vh', width: '100%', pointerEvents: 'none' }} />
        )}

        <div className={styles.contentBg}>
          <hr className={`${styles.divider} ${styles.reveal}`} />

          {/* Overview & Metadata Section */}
          <section className={`${styles.overviewSection} ${styles.reveal}`}>
           <div className={styles.metaGrid}>
             {project.architecture && project.architecture.length > 0 && (
               <div className={styles.metaBlock}>
                 <h3 className={styles.metaLabel}>ARCHITECTURE</h3>
                 {project.architecture.map((item, i) => <div key={i} className={styles.metaValue}>{item}</div>)}
               </div>
             )}
             {project.role && project.role.length > 0 && (
               <div className={styles.metaBlock}>
                 <h3 className={styles.metaLabel}>ROLE</h3>
                 {project.role.map((item, i) => <div key={i} className={styles.metaValue}>{item}</div>)}
               </div>
             )}
             {project.coreIntegration && project.coreIntegration.length > 0 && (
               <div className={styles.metaBlock}>
                 <h3 className={styles.metaLabel}>CORE INTEGRATION</h3>
                 {project.coreIntegration.map((item, i) => <div key={i} className={styles.metaValue}>{item}</div>)}
               </div>
             )}
             {project.keyAchievement && project.keyAchievement.length > 0 && (
               <div className={styles.metaBlock}>
                 <h3 className={styles.metaLabel}>KEY ACHIEVEMENT</h3>
                 {project.keyAchievement.map((item, i) => <div key={i} className={styles.metaValue}>{item}</div>)}
               </div>
             )}
             {project.deployment && project.deployment.length > 0 && (
               <div className={styles.metaBlock}>
                 <h3 className={styles.metaLabel}>DEPLOYMENT</h3>
                 {project.deployment.map((item, i) => <div key={i} className={styles.metaValue}>{item}</div>)}
               </div>
             )}
           </div>
           
           <div className={styles.overviewContent}>
              {project.overview && (
                <PortableText value={project.overview} components={portableTextComponents} />
              )}
            </div>
        </section>
        <hr className={`${styles.divider} ${styles.reveal}`} />

        {/* Dynamic Sections */}
        {project.dynamicSections?.map((section, index) => {
          // Alternating logic
          const mediaIsLeft = reverse ? index % 2 !== 0 : index % 2 === 0;
          const noMedia = section.mediaType === 'none' || (!section.mediaImage && !section.mediaVideo);

          return (
            <section key={section.id || index} className={`${styles.dynamicSection} ${styles.reveal} ${noMedia ? styles.centerLayout : (mediaIsLeft ? styles.mediaLeft : styles.mediaRight)}`}>
              {!noMedia && (
                <div className={styles.dynamicMediaWrapper}>
                   {section.mediaType === 'video' && section.mediaVideo ? (
                      <video src={section.mediaVideo} autoPlay loop muted playsInline className={styles.dynamicMedia} />
                   ) : section.mediaType === 'image' && section.mediaImage ? (
                      <img src={section.mediaImage} alt="Section Media" className={styles.dynamicMedia} />
                   ) : null}
                </div>
              )}
              <div className={`${styles.dynamicContent} ${noMedia ? styles.centeredText : ''}`}>
                 {section.content && <PortableText value={section.content} components={portableTextComponents} />}
              </div>
            </section>
          )
        })}

        {/* Metrics Section */}
        {project.metrics && project.metrics.length > 0 && (
          <section className={`${styles.metricsSection} ${styles.reveal}`}>
            {project.metrics.map((metric, idx) => (
              <div key={metric.id || idx} className={styles.metricCard}>
                <div className={styles.metricValue}>{metric.value}</div>
                <div className={styles.metricLabel}>{metric.label}</div>
              </div>
            ))}
          </section>
        )}

        {/* Summary Section */}
        {project.summary && (
          <section className={`${styles.summarySection} ${styles.reveal}`}>
             <PortableText value={project.summary} components={portableTextComponents} />
          </section>
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className={`${styles.relatedProjects} ${styles.reveal}`}>
             <div className={styles.relatedList}>
                {relatedProjects.map((rp, idx) => (
                  <div key={rp.id || idx} className={styles.relatedItem}>
                    <div className={styles.relatedItemInfo}>
                       <h4 className={styles.relatedItemTitle}>{rp.title}</h4>
                       <div className={styles.relatedItemTech}>{rp.tech?.slice(0,4).join(' • ')}</div>
                    </div>
                    {rp.bannerImage && <img src={rp.bannerImage} alt={rp.title} className={styles.relatedItemImg} />}
                  </div>
                ))}
              </div>
           </section>
         )}
        </div>
      </div>
    </main>
  );
});

// Custom PortableText components to match the "blog site" freedom
const portableTextComponents = {
  block: {
    h1: ({children}: any) => <h1 className={styles.richH1}>{children}</h1>,
    h2: ({children}: any) => <h2 className={styles.richH2}>{children}</h2>,
    h3: ({children}: any) => <h3 className={styles.richH3}>{children}</h3>,
    normal: ({children}: any) => <p className={styles.richP}>{children}</p>,
    blockquote: ({children}: any) => <blockquote className={styles.richQuote}>{children}</blockquote>,
  },
  marks: {
    textColor: ({children, value}: any) => <span style={{ color: value?.color?.hex || value?.color || 'inherit' }}>{children}</span>,
    themeColor: ({children}: any) => <span style={{ color: 'var(--color-theme, #e91e63)' }}>{children}</span>,
    code: ({children}: any) => <code className={styles.richCode}>{children}</code>,
    strong: ({children}: any) => <strong className={styles.richStrong}>{children}</strong>,
    highlight: ({children}: any) => <span className={styles.richHighlight}>{children}</span>,
  }
};

export default ProjectOverlay;
