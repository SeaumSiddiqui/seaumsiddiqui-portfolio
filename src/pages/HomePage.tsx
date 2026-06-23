import { useRef, useEffect, useLayoutEffect, useState, useContext, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroSection, { HeroData } from "@/sections/HeroSection/HeroSection";
import AboutExpSection, { ExperienceData } from "@/sections/AboutExpSection";
import ProjectSection, { ProjectData } from "@/sections/ProjectSection";
import ProjectOverlay from "@/components/ProjectOverlay/ProjectOverlay";
import Pagination from "@/components/Pagination";
import { SplitSection, SplitSectionHandles } from "@/components/SplitSection";
import closingStyles from "@/sections/ClosingSection/ClosingSection.module.css";
import { getLenis } from "@/hooks/useLenis";
import { PageTransitionContext } from "@/App";

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
  const { setReady, isTransitioning } = useContext(PageTransitionContext);
  const { data: heroData, loading: heroLoading } = useSanityQuery<HeroData>(HERO_QUERY);
  const { data: experiencesData, loading: experiencesLoading } = useSanityQuery<ExperienceData[]>(EXPERIENCES_QUERY);
  const { data: expertiseData } = useSanityQuery<any>(EXPERTISE_QUERY);
  const { data: projectsData, loading: projectsLoading } = useSanityQuery<ProjectData[]>(PROJECTS_QUERY);
  const { data: closingDataRaw, loading: closingLoading } = useSanityQuery<ClosingData>(CLOSING_QUERY);

  const loading = heroLoading || experiencesLoading || projectsLoading || closingLoading;

  const experiences = experiencesData || [];
  const projects = projectsData || [];
  const closingData = closingDataRaw || {
    buildText: "Let's build together.",
    email: "seaumsiddiqui@outlook.com",
    githubUrl: "#",
    linkedinUrl: "#",
    twitterUrl: "#",
    leetcodeUrl: "#",
    footerText: "© 2026"
  };

  const containerRef = useRef<HTMLDivElement>(null);

  // Array of refs for each split section
  const splitRefs = useRef<(SplitSectionHandles | null)[]>([]);

  // Memoize the ref callbacks to prevent thrashing and null-flushes on re-renders
  const setRef = useCallback((i: number) => (el: SplitSectionHandles | null) => {
    splitRefs.current[i] = el;
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  const openProject = (index: number) => {
    getLenis()?.stop();
    setActiveProjectIndex(index);

    const refs = splitRefs.current[index];
    if (refs?.leftRef.current && refs?.rightRef.current) {
      gsap.to(refs.leftRef.current, { xPercent: -100, duration: 1.6, ease: "power3.inOut" });
      gsap.to(refs.rightRef.current, { xPercent: 100, duration: 1.6, ease: "power3.inOut" });
    }
  };

  const closeProject = () => {
    if (activeProjectIndex === null) return;
    const refs = splitRefs.current[activeProjectIndex];
    if (refs?.leftRef.current && refs?.rightRef.current) {
      gsap.to(refs.leftRef.current, { xPercent: 0, duration: 1.6, ease: "power3.inOut" });
      gsap.to(refs.rightRef.current, {
        xPercent: 0,
        duration: 1.6,
        ease: "power3.inOut",
        onComplete: () => {
          setActiveProjectIndex(null);
          getLenis()?.start();
        }
      });
    }
  };

  useEffect(() => {
    const handleCloseOverlay = () => {
      closeProject();
    };
    window.addEventListener('closeProjectOverlay', handleCloseOverlay);
    return () => window.removeEventListener('closeProjectOverlay', handleCloseOverlay);
  }, [activeProjectIndex]);

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
            setActiveIndex(newIndex);
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

      {/* Container that handles all pinned scroll animations */}
      <div ref={containerRef} style={{ height: "100vh", position: "relative", width: "100vw", overflow: "hidden", zIndex: 3 }}>

        {/* Sequence of Split Sections */}
        {/* Layer 0: Hero */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: activeProjectIndex !== null ? 'none' : (activeIndex === 0 ? 'auto' : 'none') }}>
          <SplitSection ref={setRef(0)} isHero={true}>
            <HeroSection data={heroData} />
          </SplitSection>
        </div>

        {/* Dynamic Experience Layers */}
        {experiences.map((exp, i) => {
          const layerIndex = 1 + i;
          return (
            <div key={exp.id || i} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: layerIndex + 1, pointerEvents: activeProjectIndex !== null ? 'none' : (activeIndex === layerIndex ? 'auto' : 'none') }}>
              <SplitSection ref={setRef(layerIndex)}>
                <AboutExpSection data={{ ...exp, reverse: i % 2 !== 0 }} expertise={expertiseData} />
              </SplitSection>
            </div>
          );
        })}

        {/* Dynamic Project Layers */}
        {projects.map((proj, i) => {
          const layerIndex = 1 + experiences.length + i;
          return (
            <div key={proj.id} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: activeProjectIndex === layerIndex ? 101 : layerIndex + 1, pointerEvents: activeProjectIndex !== null ? 'none' : (activeIndex === layerIndex ? 'auto' : 'none') }}>
              <SplitSection ref={setRef(layerIndex)}>
                <ProjectSection data={{ ...proj, reverse: (experiences.length + i) % 2 !== 0 }} onViewProject={() => openProject(layerIndex)} />
              </SplitSection>
            </div>
          );
        })}

        {/* Dynamic Project Overlay behind the active sliding doors */}
        {activeProjectIndex !== null && activeProjectIndex >= 1 + experiences.length && (
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 100 }}>
            <ProjectOverlay
              project={projects[activeProjectIndex - (1 + experiences.length)]}
              onClose={closeProject}
            />
          </div>
        )}

        {/* Pagination overlay over all sections (Only for Experience Sections) */}
        {experiences.length > 0 && (
          <Pagination
            items={experiences.map(e => e.index)}
            activeIndex={activeIndex - 1}
          />
        )}

        {/* Pagination overlay for Projects Sections */}
        {projects.length > 0 && (
          <Pagination
            items={projects.map(p => p.index)}
            activeIndex={activeIndex - (1 + experiences.length)}
          />
        )}

        {/* Closing box overlay — 4 panels that close in (z-index highest so it animates over previous) */}
        <div className={closingStyles.overlay} style={{ zIndex: 1000 }}>
          <div ref={panelLeftRef} className={closingStyles.panelLeft}>
            <div className={closingStyles.viewportMaskLeft}>
              <span className={closingStyles.buildText}>{closingData.buildText}</span>
              <div className={closingStyles.connectCluster}>
                <span className={closingStyles.connectText}>
                  <span>CO</span>
                  <span className={closingStyles.dimStroke}>NN</span>
                  <span>ECT</span>
                </span>
                <a href={closingData.githubUrl} target="_blank" rel="noopener noreferrer" className={`${closingStyles.socialLink} ${closingStyles.socialGithub}`}>GitHub</a>
                <a href={closingData.linkedinUrl} target="_blank" rel="noopener noreferrer" className={`${closingStyles.socialLink} ${closingStyles.socialLinkedin}`}>LinkedIn</a>
                <a href={closingData.twitterUrl} target="_blank" rel="noopener noreferrer" className={`${closingStyles.socialLink} ${closingStyles.socialTwitter}`}>X (Twitter)</a>
                <a href={closingData.leetcodeUrl} target="_blank" rel="noopener noreferrer" className={`${closingStyles.socialLink} ${closingStyles.socialLeetcode}`}>LeetCode</a>
              </div>
              <a href={`mailto:${closingData.email}`} className={closingStyles.emailBlock}>
                <span className={closingStyles.emailLabel}>Email: </span>
                <span className={closingStyles.emailValue}>{closingData.email}</span>
              </a>
              <span className={closingStyles.footerText}>{closingData.footerText}</span>
            </div>
          </div>
          <div ref={panelRightRef} className={closingStyles.panelRight}>
            <div className={closingStyles.viewportMaskRight}>
              <span className={closingStyles.buildText}>{closingData.buildText}</span>
              <div className={closingStyles.connectCluster}>
                <span className={closingStyles.connectText}>
                  <span>CO</span>
                  <span className={closingStyles.dimStroke}>NN</span>
                  <span>ECT</span>
                </span>
                <a href={closingData.githubUrl} target="_blank" rel="noopener noreferrer" className={`${closingStyles.socialLink} ${closingStyles.socialGithub}`}>GitHub</a>
                <a href={closingData.linkedinUrl} target="_blank" rel="noopener noreferrer" className={`${closingStyles.socialLink} ${closingStyles.socialLinkedin}`}>LinkedIn</a>
                <a href={closingData.twitterUrl} target="_blank" rel="noopener noreferrer" className={`${closingStyles.socialLink} ${closingStyles.socialTwitter}`}>X (Twitter)</a>
                <a href={closingData.leetcodeUrl} target="_blank" rel="noopener noreferrer" className={`${closingStyles.socialLink} ${closingStyles.socialLeetcode}`}>LeetCode</a>
              </div>
              <a href={`mailto:${closingData.email}`} className={closingStyles.emailBlock}>
                <span className={closingStyles.emailLabel}>Email: </span>
                <span className={closingStyles.emailValue}>{closingData.email}</span>
              </a>
              <span className={closingStyles.footerText}>{closingData.footerText}</span>
            </div>
          </div>
          <div ref={panelTopRef} className={closingStyles.panelTop} />
          <div ref={panelBottomRef} className={closingStyles.panelBottom} />
        </div>
      </div>
    </main>
  );
}
