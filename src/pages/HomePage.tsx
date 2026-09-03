import React, { useRef, useEffect, useLayoutEffect, useState, useContext, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import HeroSection, { HeroData } from "@/sections/HeroSection/HeroSection";
import AboutExpSection, { ExperienceData } from "@/sections/AboutExpSection";
import ProjectSection, { ProjectData } from "@/sections/ProjectSection";
import ProjectOverlay from "@/components/ProjectOverlay/ProjectOverlay";
import Pagination from "@/components/Pagination";
import { SplitSection, SplitSectionHandles } from "@/components/SplitSection";
import closingStyles from "@/sections/ClosingSection/ClosingSection.module.css";
import { getLenis } from "@/hooks/useLenis";
import { PageTransitionContext } from "@/App";
import ArchivePage from "@/pages/ArchivePage/ArchivePage";

import { useSanityQuery } from "@/lib/useSanity";
import { HERO_QUERY, EXPERIENCES_QUERY, EXPERTISE_QUERY, PROJECTS_QUERY, CLOSING_QUERY } from "@/lib/queries";

gsap.registerPlugin(ScrollTrigger);

export interface ClosingData {
  buildText: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  leetcodeUrl: string;
  footerText: string;
}

export default function HomePage() {
  const { isTransitioning } = useContext(PageTransitionContext);
  const { data: heroData, loading: heroLoading } = useSanityQuery<HeroData>(HERO_QUERY);
  const { data: experiencesData, loading: experiencesLoading } = useSanityQuery<ExperienceData[]>(EXPERIENCES_QUERY);
  const { data: expertiseData } = useSanityQuery<any>(EXPERTISE_QUERY);
  const { data: projectsData, loading: projectsLoading } = useSanityQuery<ProjectData[]>(PROJECTS_QUERY);
  const { data: closingDataRaw, loading: closingLoading } = useSanityQuery<ClosingData>(CLOSING_QUERY);

  const loading = heroLoading || experiencesLoading || projectsLoading || closingLoading;



  const experiences = experiencesData || [];
  const projects = projectsData || [];
  const closingData = closingDataRaw;

  const containerRef = useRef<HTMLDivElement>(null);
  const archiveWrapperRef = useRef<HTMLDivElement>(null);
  const archiveContentRef = useRef<HTMLDivElement>(null);

  // Array of refs for each split section
  const splitRefs = useRef<(SplitSectionHandles | null)[]>([]);

  // Memoize the ref callbacks to prevent thrashing and null-flushes on re-renders
  const setRef = useCallback((i: number) => (el: SplitSectionHandles | null) => {
    splitRefs.current[i] = el;
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [isWorkGateOpen, setIsWorkGateOpen] = useState(false);
  const isWorkGateOpenRef = useRef(false);
  const activeIndexRef = useRef(0); // Add ref to track index synchronously without triggering renders
  const panelWidthRef = useRef<string>("0px");
  const panelHeightRef = useRef<string>("0px");

  const experiencePaginationItems = React.useMemo(() => experiences.map(e => e.index), [experiences]);
  const projectPaginationItems = React.useMemo(() => projects.map(p => p.index), [projects]);

  useLayoutEffect(() => {
    if (window.location.pathname === '/archive') {
      setIsWorkGateOpen(true);
      isWorkGateOpenRef.current = true;
      // Try to instantly open the current gate
      const sectionsCount = 1 + experiences.length + projects.length;
      if (sectionsCount > 1) { // Wait for data to load
        setTimeout(() => {
          splitRefs.current.forEach(refs => {
            if (refs?.leftRef.current && refs?.rightRef.current) {
              gsap.set(refs.leftRef.current, { xPercent: -100 });
              gsap.set(refs.rightRef.current, { xPercent: 100 });
            }
          });
          if (panelLeftRef.current && panelRightRef.current && panelTopRef.current && panelBottomRef.current) {
            panelWidthRef.current = panelLeftRef.current.style.width || "0px";
            panelHeightRef.current = panelTopRef.current.style.height || "0px";
            gsap.set(panelLeftRef.current, { width: 0 });
            gsap.set(panelRightRef.current, { width: 0 });
            gsap.set(panelTopRef.current, { height: 0 });
            gsap.set(panelBottomRef.current, { height: 0 });
          }
        }, 100);
      }
    }
  }, [experiences.length, projects.length]);

  const openProject = useCallback((index: number) => {
    const lenis = getLenis();
    if (lenis) {
      const targetScroll = index * window.innerHeight;
      const distance = Math.abs(lenis.scroll - targetScroll);
      
      // If we are already perfectly centered (or very close), open immediately
      if (distance < 5) {
        lenis.stop();
        if (activeProjectIndex === null) {
          window.history.pushState({ projectOverlayOpen: true }, '');
        }
        setActiveProjectIndex(index);
        return;
      }

      // Dynamically calculate duration based on how far we need to scroll.
      // Short distances will be very fast to avoid "jitter/shaking" over a long duration.
      const duration = Math.min(0.6, Math.max(0.2, distance / 1000));

      document.body.style.pointerEvents = 'none';
      lenis.scrollTo(targetScroll, {
        duration: duration,
        easing: (t) => 1 - Math.pow(1 - t, 3), // cubicOut for smooth, quick stop
        onComplete: () => {
          document.body.style.pointerEvents = '';
          lenis.stop();
          if (activeProjectIndex === null) {
            window.history.pushState({ projectOverlayOpen: true }, '');
          }
          setActiveProjectIndex(index);
        }
      });
    } else {
      setActiveProjectIndex(index);
    }
  }, []);

  const closeProject = useCallback((skipHistoryBack = false) => {
    if (activeProjectIndex === null) return;
    setActiveProjectIndex(null);
    getLenis()?.start();
    if (skipHistoryBack !== true) {
      window.history.back();
    }
  }, [activeProjectIndex]);

  useEffect(() => {
    const handleOpenWorkGate = () => {
      if (isWorkGateOpenRef.current) return;
      isWorkGateOpenRef.current = true;
      setIsWorkGateOpen(true);
      getLenis()?.stop();
      
      splitRefs.current.forEach(refs => {
        if (refs?.leftRef.current && refs?.rightRef.current) {
          gsap.to(refs.leftRef.current, { xPercent: -100, duration: 1.6, ease: "power3.inOut" });
          gsap.to(refs.rightRef.current, { xPercent: 100, duration: 1.6, ease: "power3.inOut" });
        }
      });

      if (panelLeftRef.current && panelRightRef.current && panelTopRef.current && panelBottomRef.current) {
        panelWidthRef.current = panelLeftRef.current.style.width || "0px";
        panelHeightRef.current = panelTopRef.current.style.height || "0px";
        gsap.to(panelLeftRef.current, { width: 0, duration: 1.6, ease: "power3.inOut" });
        gsap.to(panelRightRef.current, { width: 0, duration: 1.6, ease: "power3.inOut" });
        gsap.to(panelTopRef.current, { height: 0, duration: 1.6, ease: "power3.inOut" });
        gsap.to(panelBottomRef.current, { height: 0, duration: 1.6, ease: "power3.inOut" });
      }

      window.history.pushState({ workGateOpen: true }, '', '/archive');
    };

    const handleCloseWorkGate = () => {
      if (!isWorkGateOpenRef.current) return;
      isWorkGateOpenRef.current = false;

      let completed = false;
      const onFinish = () => {
        if (completed) return;
        completed = true;
        setIsWorkGateOpen(false);
        getLenis()?.start();
        ScrollTrigger.update(); // Force alignment after manual GSAP tweens
      };

      splitRefs.current.forEach(refs => {
        if (refs?.leftRef.current && refs?.rightRef.current) {
          gsap.to(refs.leftRef.current, { xPercent: 0, duration: 1.6, ease: "power3.inOut", onComplete: onFinish });
          gsap.to(refs.rightRef.current, { xPercent: 0, duration: 1.6, ease: "power3.inOut" });
        }
      });

      if (panelLeftRef.current && panelRightRef.current && panelTopRef.current && panelBottomRef.current) {
        gsap.to(panelLeftRef.current, { width: panelWidthRef.current, duration: 1.6, ease: "power3.inOut" });
        gsap.to(panelRightRef.current, { width: panelWidthRef.current, duration: 1.6, ease: "power3.inOut" });
        gsap.to(panelTopRef.current, { height: panelHeightRef.current, duration: 1.6, ease: "power3.inOut" });
        gsap.to(panelBottomRef.current, { height: panelHeightRef.current, duration: 1.6, ease: "power3.inOut" });
      }

      if (window.location.pathname === '/archive') {
        window.history.pushState({}, '', '/');
      }
    };

    window.addEventListener('openWorkGate', handleOpenWorkGate);
    window.addEventListener('closeWorkGate', handleCloseWorkGate);
    return () => {
      window.removeEventListener('openWorkGate', handleOpenWorkGate);
      window.removeEventListener('closeWorkGate', handleCloseWorkGate);
    };
  }, [experiences.length, projects.length]);

  useLayoutEffect(() => {
    // GSAP's pin-spacer doesn't sync React's pointerEvents automatically.
    // We must manually disable pointer events on the pin-spacer so clicks can pass through to ArchivePage.
    const pinSpacer = containerRef.current?.parentElement;
    if (pinSpacer && pinSpacer.classList.contains('pin-spacer')) {
      pinSpacer.style.pointerEvents = isWorkGateOpen ? 'none' : 'auto';
    }
  }, [isWorkGateOpen]);

  // Local Lenis for embedded ArchivePage
  useEffect(() => {
    if (!archiveWrapperRef.current || !archiveContentRef.current) return;
    
    // Only initialize Lenis for the Archive overlay when it's actually open
    if (isWorkGateOpen) {
      const localLenis = new Lenis({
        wrapper: archiveWrapperRef.current,
        content: archiveContentRef.current,
        duration: 1.5,
        smoothWheel: true,
      });

      let rafId: number;
      const raf = (time: number) => {
        localLenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      const resizeObserver = new ResizeObserver(() => localLenis.resize());
      resizeObserver.observe(archiveContentRef.current);

      return () => {
        cancelAnimationFrame(rafId);
        resizeObserver.disconnect();
        localLenis.destroy();
      };
    }
  }, [isWorkGateOpen]);

  useEffect(() => {
    const handleCloseOverlayReady = (e?: Event) => {
      const customEvent = e as CustomEvent;
      const nextAction = customEvent?.detail?.next;
      const skipHistoryBack = customEvent?.detail?.skipHistoryBack;

      if (activeProjectIndex !== null) {
        const refs = splitRefs.current[activeProjectIndex];
        if (refs?.leftRef.current && refs?.rightRef.current) {
          const splitContainer = refs.leftRef.current.parentElement;
          if (splitContainer) splitContainer.style.transform = '';
        }
      }

      closeProject(skipHistoryBack === true ? true : false);
      
      if (nextAction === 'openWorkGate') {
        // Wait for the banner to finish expanding back to 100vh (takes 0.8s) before splitting
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('openWorkGate'));
        }, 850);
      } else if (typeof nextAction === 'number') {
        setTimeout(() => {
          openProject(nextAction);
        }, 850);
      }
    };

    const handleCloseOverlay = (e?: Event) => {
      const customEvent = e as CustomEvent;
      const nextAction = customEvent?.detail?.next;
      const skipHistoryBack = customEvent?.detail?.skipHistoryBack;

      if (activeProjectIndex !== null) {
        const refs = splitRefs.current[activeProjectIndex];
        
        if (refs?.leftRef.current && refs?.rightRef.current) {
          const splitContainer = refs.leftRef.current.parentElement;
          
          let scrollY = 0;
          if (splitContainer && splitContainer.style.transform) {
             const match = splitContainer.style.transform.match(/translateY\(([-0-9.]+)px\)/);
             if (match) {
                scrollY = Math.abs(parseFloat(match[1]));
             }
          }

          const vh = window.innerHeight;
          const isBannerVisible = scrollY < (vh * 0.65);

          if (isBannerVisible) {
             window.dispatchEvent(new CustomEvent('projectOverlayScrollToTop', { detail: { next: nextAction, skipHistoryBack } }));
             return; 
          }

          if (splitContainer) {
             window.dispatchEvent(new CustomEvent('stopProjectOverlayParallax'));
             splitContainer.style.transform = '';
          }
          
          const wrapper = refs.leftRef.current.parentElement?.parentElement;
          if (wrapper) wrapper.style.zIndex = '10000';

          // Instantly move the halves off-screen
          gsap.set(refs.leftRef.current, { xPercent: -100 });
          gsap.set(refs.rightRef.current, { xPercent: 100 });
          
          // Forcefully expand the halves back to 100vh layout instantly before they slide in
          // This ensures they act as a full-screen gate and cover the entire overlay
          const leftSection = refs.leftRef.current.querySelector('section');
          const rightSection = refs.rightRef.current.querySelector('section');
          
          if (leftSection) leftSection.dataset.closingGate = 'true';
          if (rightSection) rightSection.dataset.closingGate = 'true';
          
          const elementsToClear = [
            leftSection,
            rightSection,
            ...Array.from(refs.leftRef.current.querySelectorAll('[class*="leftCol"]')),
            ...Array.from(refs.leftRef.current.querySelectorAll('[class*="rightCol"]')),
            ...Array.from(refs.rightRef.current.querySelectorAll('[class*="leftCol"]')),
            ...Array.from(refs.rightRef.current.querySelectorAll('[class*="rightCol"]')),
            ...Array.from(refs.leftRef.current.querySelectorAll('[class*="narrative"]')),
            ...Array.from(refs.rightRef.current.querySelectorAll('[class*="narrative"]')),
            ...Array.from(refs.leftRef.current.querySelectorAll('[class*="topSection"]')),
            ...Array.from(refs.rightRef.current.querySelectorAll('[class*="topSection"]'))
          ].filter(Boolean);
          
          // Instantly strip all GSAP-injected inline styles from the shrinking animation.
          // This forcefully snaps the halves back to their pixel-perfect CSS 100vh layout
          // BEFORE they slide in, guaranteeing 0 layout shifts or scroll jumps after closing.
          gsap.set(elementsToClear, { clearProps: "all" });
          
          // Ensure the sections explicitly hold 100vh during the animation 
          // because they might lack a native CSS height and collapse otherwise.
          if (leftSection) (leftSection as HTMLElement).style.height = '100vh';
          if (rightSection) (rightSection as HTMLElement).style.height = '100vh';
          
          // Slide the fully expanded halves in over the STILL MOUNTED ProjectOverlay
          gsap.to(refs.leftRef.current, { xPercent: 0, duration: 1.2, ease: "power4.inOut" });
          gsap.to(refs.rightRef.current, { 
            xPercent: 0, 
            duration: 1.2, 
            ease: "power4.inOut",
            onComplete: () => {
              // Now that the gate is shut, quietly dispose of the overlay underneath
              closeProject(skipHistoryBack === true ? true : false);
              // Wait for the next tick to ensure ProjectOverlay is fully unmounted before dropping zIndex
              setTimeout(() => {
                const outerWrapper = refs?.leftRef?.current?.parentElement?.parentElement;
                if (outerWrapper) outerWrapper.style.zIndex = '';
                
                if (nextAction === 'openWorkGate') {
                  window.dispatchEvent(new CustomEvent('openWorkGate'));
                } else if (typeof nextAction === 'number') {
                  openProject(nextAction);
                }
              }, 50);
            }
          });
        } else {
          closeProject(skipHistoryBack === true ? true : false);
          if (nextAction === 'openWorkGate') {
            window.dispatchEvent(new CustomEvent('openWorkGate'));
          } else if (typeof nextAction === 'number') {
            openProject(nextAction);
          }
        }
      } else {
        closeProject(skipHistoryBack === true ? true : false);
        if (nextAction === 'openWorkGate') {
          window.dispatchEvent(new CustomEvent('openWorkGate'));
        } else if (typeof nextAction === 'number') {
          openProject(nextAction);
        }
      }
    };

    const handleNavigateWorkGate = () => {
      if (activeProjectIndex !== null) {
        window.dispatchEvent(new CustomEvent('closeProjectOverlay', { detail: { next: 'openWorkGate' } }));
      } else {
        window.dispatchEvent(new CustomEvent('openWorkGate'));
      }
    };

    window.addEventListener('closeProjectOverlay', handleCloseOverlay);
    window.addEventListener('closeProjectOverlayReady', handleCloseOverlayReady);
    window.addEventListener('navigateWorkGate', handleNavigateWorkGate);
    return () => {
      window.removeEventListener('closeProjectOverlay', handleCloseOverlay);
      window.removeEventListener('closeProjectOverlayReady', handleCloseOverlayReady);
      window.removeEventListener('navigateWorkGate', handleNavigateWorkGate);
    };
  }, [activeProjectIndex]);

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (isWorkGateOpen && window.location.pathname === '/') {
        window.dispatchEvent(new CustomEvent('closeWorkGate'));
      }
      if (activeProjectIndex !== null) {
        // User pressed browser back button, orchestrate the closing animation
        window.dispatchEvent(new CustomEvent('closeProjectOverlay', { detail: { skipHistoryBack: true } }));
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeProjectIndex, isWorkGateOpen, closeProject]);

  // Closing overlay refs
  const panelLeftRef = useRef<HTMLDivElement>(null);
  const panelRightRef = useRef<HTMLDivElement>(null);
  const panelTopRef = useRef<HTMLDivElement>(null);
  const panelBottomRef = useRef<HTMLDivElement>(null);

  // 1. Instantly hide upcoming sections as soon as they mount
  useLayoutEffect(() => {
    const sectionsCount = 1 + experiences.length + projects.length;
    if (sectionsCount === 1) return;

    for (let i = 1; i < sectionsCount; i++) {
      const refs = splitRefs.current[i];
      if (refs?.leftRef.current && refs?.rightRef.current) {
        gsap.set(refs.leftRef.current, { yPercent: 100 });
        gsap.set(refs.rightRef.current, { yPercent: -100 });
      }
    }
  }, [experiences.length, projects.length]);

  // 2. ScrollTrigger initializes ONLY after data is loaded and page transition finishes
  useLayoutEffect(() => {
    // Wait until data is loaded AND the global page transition has finished.
    // Creating ScrollTrigger while `wrapperRef` in App.tsx has CSS transforms (like scale: 0.98)
    // completely breaks GSAP pinning because it breaks the `position: fixed` containing block!
    if (loading || isTransitioning) return;

    const container = containerRef.current;
    if (!container) return;

    // Total sections = Hero(1) + Experiences + Projects
    const sectionsCount = 1 + experiences.length + projects.length;
    if (sectionsCount === 1) return; // If no content yet, wait.

    // Each transition takes 1 innerHeight of scroll.
    const scrollDist = window.innerHeight * sectionsCount;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${scrollDist}`,
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress;
            let newIndex = Math.round(progress * sectionsCount);
            if (newIndex > sectionsCount) newIndex = sectionsCount;
            // Prevent synchronous setState loops during ScrollTrigger refresh
            if (newIndex !== activeIndexRef.current) {
              activeIndexRef.current = newIndex;
              requestAnimationFrame(() => {
                setActiveIndex(newIndex);
              });
            }
          }
        }
      });

      // Build transition sequence
      for (let i = 0; i < sectionsCount - 1; i++) {
        const curr = splitRefs.current[i];
        const next = splitRefs.current[i + 1];

        // Start time for this transition step
        const startTime = i * window.innerHeight;
        const duration = window.innerHeight;

        if (curr?.leftRef.current && curr?.rightRef.current) {
          tl.to(curr.leftRef.current, { yPercent: -100, duration, ease: "power1.inOut" }, startTime);
          tl.to(curr.rightRef.current, { yPercent: 100, duration, ease: "power1.inOut" }, startTime);
        }

        if (next?.leftRef.current && next?.rightRef.current) {
          // Explicitly define from and to states to prevent overlapping bugs
          tl.fromTo(next.leftRef.current, 
            { yPercent: 100 }, 
            { yPercent: 0, duration: duration * 0.9, ease: "power2.out" }, 
            startTime + duration * 0.1
          );
          tl.fromTo(next.rightRef.current, 
            { yPercent: -100 }, 
            { yPercent: 0, duration: duration * 0.9, ease: "power2.out" }, 
            startTime + duration * 0.1
          );
        }
      }

      // Closing box overlay animation occurs at the end
      const closingStartTime = (sectionsCount - 1) * window.innerHeight;
      const closingDuration = window.innerHeight;

      // The closing animation now occurs OVER the last section, so we DO NOT split and animate the last section away.

      tl.to(panelLeftRef.current, { width: "50%", duration: closingDuration * 0.8, ease: "power1.inOut" }, closingStartTime + closingDuration * 0.2);
      tl.to(panelRightRef.current, { width: "50%", duration: closingDuration * 0.8, ease: "power1.inOut" }, closingStartTime + closingDuration * 0.2);
      tl.to(panelTopRef.current, { height: "50%", duration: closingDuration * 0.7, ease: "power1.in" }, closingStartTime + closingDuration * 0.3);
      tl.to(panelBottomRef.current, { height: "50%", duration: closingDuration * 0.7, ease: "power1.in" }, closingStartTime + closingDuration * 0.3);

    }, container);

    return () => ctx.revert();
  }, [loading, isTransitioning, experiences.length, projects.length]);

  return (
    <main style={{ position: "relative" }}>
      
      {/* Archive Page Overlay rendering underneath */}
      <div 
        ref={archiveWrapperRef}
        style={{ 
          position: 'fixed', 
          inset: 0, 
          zIndex: 2, 
          opacity: isWorkGateOpen ? 1 : 0, 
          pointerEvents: isWorkGateOpen ? 'auto' : 'none',
          overflowY: 'auto',
          backgroundColor: '#050505'
        }}
      >
        <div ref={archiveContentRef}>
          <ArchivePage />
        </div>
      </div>

      {/* Container that handles all pinned scroll animations */}
      <div ref={containerRef} style={{ height: "100vh", position: "relative", width: "100vw", overflow: "hidden", zIndex: 3, pointerEvents: isWorkGateOpen ? 'none' : 'auto' }}>

        {/* Sequence of Split Sections */}
        {/* Layer 0: Hero */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
          <SplitSection ref={setRef(0)} isHero={true} isClickable={activeProjectIndex === null && !isWorkGateOpen && activeIndex === 0}>
            <HeroSection data={heroData} />
          </SplitSection>
        </div>

        {/* Dynamic Experience Layers */}
        {experiences.map((exp, i) => {
          const layerIndex = 1 + i;
          return (
            <div key={exp.id || i} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: layerIndex + 1, pointerEvents: 'none' }}>
              <SplitSection ref={setRef(layerIndex)} isClickable={activeProjectIndex === null && !isWorkGateOpen && activeIndex === layerIndex}>
                <AboutExpSection 
                  data={exp} 
                  reverse={i % 2 !== 0} 
                  expertise={expertiseData} 
                />
              </SplitSection>
            </div>
          );
        })}

        {/* Dynamic Project Layers */}
        {projects.map((proj, i) => {
          const layerIndex = 1 + experiences.length + i;
          return (
            <div key={proj.id} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: activeProjectIndex === layerIndex ? 101 : layerIndex + 1, pointerEvents: 'none' }}>
              <SplitSection ref={setRef(layerIndex)} isClickable={activeProjectIndex === null && !isWorkGateOpen && activeIndex === layerIndex}>
                <ProjectSection 
                  data={proj} 
                  reverse={(experiences.length + i) % 2 !== 0} 
                  onViewProject={openProject} 
                  index={layerIndex} 
                  isActiveBanner={activeProjectIndex === layerIndex}
                />
              </SplitSection>
            </div>
          );
        })}

        {/* Dynamic Project Overlay behind the active sliding doors */}
        {activeProjectIndex !== null && (
          <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 9999 }}>
            <ProjectOverlay 
              project={projects[activeProjectIndex - (1 + experiences.length)]} 
              onClose={closeProject} 
              allProjects={projects}
              reverse={activeProjectIndex % 2 !== 0}
              backgroundBannerElement={splitRefs.current[activeProjectIndex]?.leftRef.current?.parentElement as HTMLElement | null}
              onOpenRelatedProject={(targetId) => {
                const targetProjIndex = projects.findIndex(p => p.id === targetId);
                if (targetProjIndex !== -1) {
                  const targetLayerIndex = 1 + experiences.length + targetProjIndex;
                  window.dispatchEvent(new CustomEvent('closeProjectOverlay', { detail: { next: targetLayerIndex, skipHistoryBack: true } }));
                }
              }}
            />
          </div>
        )}

        {/* Pagination overlay over all sections (Only for Experience Sections) */}
        {experiences.length > 0 && (
          <Pagination
            items={experiencePaginationItems}
            activeIndex={activeIndex - 1}
          />
        )}

        {/* Pagination overlay for Projects Sections */}
        {projects.length > 0 && (
          <Pagination
            items={projectPaginationItems}
            activeIndex={activeIndex - (1 + experiences.length)}
          />
        )}

        {/* Closing box overlay — 4 panels that close in (z-index highest so it animates over previous) */}
        <div 
          className={closingStyles.overlay} 
          style={{ 
            zIndex: 10000
          }}
        >
          <div ref={panelLeftRef} className={closingStyles.panelLeft}>
            <div className={closingStyles.viewportMaskLeft}>
              <span className={closingStyles.buildText}>{closingData?.buildText}</span>
              <div className={closingStyles.connectCluster}>
                <span className={closingStyles.connectText}>
                  <span>CO</span>
                  <span className={closingStyles.dimStroke}>NN</span>
                  <span>ECT</span>
                </span>
                <a href={closingData?.githubUrl} target="_blank" rel="noopener noreferrer" className={`${closingStyles.socialLink} ${closingStyles.socialGithub}`}>GitHub</a>
                <a href={closingData?.linkedinUrl} target="_blank" rel="noopener noreferrer" className={`${closingStyles.socialLink} ${closingStyles.socialLinkedin}`}>LinkedIn</a>
                <a href={closingData?.twitterUrl} target="_blank" rel="noopener noreferrer" className={`${closingStyles.socialLink} ${closingStyles.socialTwitter}`}>X (Twitter)</a>
                <a href={closingData?.leetcodeUrl} target="_blank" rel="noopener noreferrer" className={`${closingStyles.socialLink} ${closingStyles.socialLeetcode}`}>LeetCode</a>
              </div>
              <a href={`mailto:${closingData?.email}`} className={closingStyles.emailBlock}>
                <span className={closingStyles.emailLabel}>Email: </span>
                <span className={closingStyles.emailValue}>{closingData?.email}</span>
              </a>
              <span className={closingStyles.footerText}>{closingData?.footerText}</span>
            </div>
          </div>
          <div ref={panelRightRef} className={closingStyles.panelRight}>
            <div className={closingStyles.viewportMaskRight}>
              <span className={closingStyles.buildText}>{closingData?.buildText}</span>
              <div className={closingStyles.connectCluster}>
                <span className={closingStyles.connectText}>
                  <span>CO</span>
                  <span className={closingStyles.dimStroke}>NN</span>
                  <span>ECT</span>
                </span>
                <a href={closingData?.githubUrl} target="_blank" rel="noopener noreferrer" className={`${closingStyles.socialLink} ${closingStyles.socialGithub}`}>GitHub</a>
                <a href={closingData?.linkedinUrl} target="_blank" rel="noopener noreferrer" className={`${closingStyles.socialLink} ${closingStyles.socialLinkedin}`}>LinkedIn</a>
                <a href={closingData?.twitterUrl} target="_blank" rel="noopener noreferrer" className={`${closingStyles.socialLink} ${closingStyles.socialTwitter}`}>X (Twitter)</a>
                <a href={closingData?.leetcodeUrl} target="_blank" rel="noopener noreferrer" className={`${closingStyles.socialLink} ${closingStyles.socialLeetcode}`}>LeetCode</a>
              </div>
              <a href={`mailto:${closingData?.email}`} className={closingStyles.emailBlock}>
                <span className={closingStyles.emailLabel}>Email: </span>
                <span className={closingStyles.emailValue}>{closingData?.email}</span>
              </a>
              <span className={closingStyles.footerText}>{closingData?.footerText}</span>
            </div>
          </div>
          <div ref={panelTopRef} className={closingStyles.panelTop} />
          <div ref={panelBottomRef} className={closingStyles.panelBottom} />
        </div>
      </div>
    </main>
  );
}
