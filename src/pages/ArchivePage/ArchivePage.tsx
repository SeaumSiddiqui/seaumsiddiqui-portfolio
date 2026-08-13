import React, { useState, useContext, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useSanityQuery } from '@/lib/useSanity';
import { ALL_PROJECTS_QUERY, ARCHIVE_PAGE_QUERY } from '@/lib/queries';
import { ProjectData } from '@/sections/ProjectSection';
import { ArchivePageData } from '@/lib/types';
import ProjectOverlay from '@/components/ProjectOverlay/ProjectOverlay';
import { getLenis } from '@/hooks/useLenis';
import styles from './ArchivePage.module.css';
import { PageTransitionContext } from '@/App';

export default function ArchivePage() {
  const { data: projects, loading: projectsLoading, error: projectsError } = useSanityQuery<ProjectData[]>(ALL_PROJECTS_QUERY);
  const { data: archivePageData, loading: archivePageLoading, error: archivePageError } = useSanityQuery<ArchivePageData>(ARCHIVE_PAGE_QUERY);
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);
  const [isListView, setIsListView] = useState(false);




  const openProject = (project: ProjectData) => {
    getLenis()?.stop();
    // Fade out archive grid
    gsap.to(`.${styles.shaft}`, {
      opacity: 0,
      scale: 0.98,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        setActiveProject(project);
      }
    });
  };

  const closeProject = () => {
    // Fade out overlay
    gsap.to('#project-overlay-wrapper', {
      opacity: 0,
      scale: 0.98,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        setActiveProject(null);
        if (!window.history.state?.workGateOpen) {
          getLenis()?.start();
        }
        
        // Fade in archive grid
        gsap.fromTo(`.${styles.shaft}`,
          { opacity: 0, scale: 1.02 },
          { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out", clearProps: "all" }
        );
      }
    });
  };

  // Entrance animation for ProjectOverlay
  useGSAP(() => {
    if (activeProject) {
      gsap.fromTo('#project-overlay-wrapper',
        { opacity: 0, scale: 1.02 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out", clearProps: "all" }
      );
    }
  }, { dependencies: [activeProject] });

  useEffect(() => {
    const handleGlobalClose = () => {
      if (activeProject) {
        closeProject();
      }
    };

    window.addEventListener('closeProjectOverlay', handleGlobalClose);
    window.addEventListener('closeWorkGate', handleGlobalClose);

    return () => {
      window.removeEventListener('closeProjectOverlay', handleGlobalClose);
      window.removeEventListener('closeWorkGate', handleGlobalClose);
    };
  }, [activeProject]);

  if (projectsLoading || archivePageLoading) return <div style={{ color: 'white', padding: '120px' }}>Loading archive...</div>;
  if (projectsError) return <div style={{ color: 'red', padding: '120px' }}>Error loading archive: {projectsError.message}</div>;
  if (!projects) return null;

  return (
    <div className={styles.archivePage}>
      <div className={styles.shaft}>
        
        <header className={styles.header}>
          <h1 className={styles.title}>{archivePageData?.pageTitle}</h1>
          <div className={styles.headerBottom}>
            <p className={styles.headerDesc}>
              {archivePageData?.pageDescription}
            </p>
            <div className={styles.controlsGroup}>
              <span className={styles.headerMeta}>{archivePageData?.pageMeta}</span>
              <div className={styles.toggleGroup}>
                <button 
                  className={`${styles.toggleBtn} ${!isListView ? styles.active : ''}`}
                  onClick={() => setIsListView(false)}
                  aria-label="Grid View"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </button>
                <button 
                  className={`${styles.toggleBtn} ${isListView ? styles.active : ''}`}
                  onClick={() => setIsListView(true)}
                  aria-label="List View"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className={`${styles.grid} ${isListView ? styles.listView : ''}`}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`${styles.card} ${isListView ? styles.cardList : ''}`}
              onClick={() => openProject(project)}
            >
              <div className={styles.cardLeft}>
                <div className={styles.cardTop}>
                  <span className={styles.index}>{project.index}</span>
                  <span className={styles.arrow}>↗</span>
                </div>

                <h2 className={styles.cardTitle}>{project.title}</h2>
                
                <div className={styles.techList}>
                  {(project.tech || []).slice(0, 3).map(t => (
                    <span key={t} className={styles.techItem}>{`> ${t}`}</span>
                  ))}
                  {(project.tech || []).length > 3 && (
                    <span className={styles.techItem}>{`> +${(project.tech || []).length - 3} OTHERS`}</span>
                  )}
                </div>
              </div>

              <div className={styles.imageWrap}>
                {project.bannerImage ? (
                  <img 
                    src={`${project.bannerImage}?auto=format&q=80&w=800`} 
                    alt={project.title} 
                    className={styles.coverImage} 
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className={styles.placeholderGrid}></div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {activeProject && (
        <div id="project-overlay-wrapper" style={{ position: 'fixed', inset: 0, zIndex: 1000 }}>
          <ProjectOverlay 
            project={activeProject} 
            onClose={closeProject} 
            allProjects={projects}
          />
        </div>
      )}
    </div>
  );
}
