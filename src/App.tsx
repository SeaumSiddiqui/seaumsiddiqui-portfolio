import React, { useEffect, useState, useRef, createContext } from "react";
import { useLenis, getLenis } from "./hooks/useLenis";
import { useRouterState } from "@tanstack/react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ArchivePage from "./pages/ArchivePage/ArchivePage";
import CursorBlob from "./components/CursorBlob/CursorBlob";
import GlobalNav from "./components/GlobalNav/GlobalNav";
import { enableVisualEditing } from "@sanity/visual-editing";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/tokens.css";
import "./styles/typography.css";

export const PageTransitionContext = createContext({
  setReady: (ready: boolean) => { },
  isTransitioning: false
});

function LenisProvider({ children }: { children: React.ReactNode }) {
  useLenis();

  useEffect(() => {
    const handleImageLoad = (e: Event) => {
      const img = e.target as HTMLImageElement;
      if (img.tagName === "IMG") img.classList.add("loaded");
    };
    document.addEventListener("load", handleImageLoad, true);

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    return () => document.removeEventListener("load", handleImageLoad, true);
  }, []);

  return <>{children}</>;
}

function TransitionRouter() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [displayPathname, setDisplayPathname] = useState(pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pageReady, setPageReady] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (pathname !== displayPathname && !isTransitioning) {
      setIsTransitioning(true);
      getLenis()?.stop(); // Lock scroll during transition
      gsap.to(wrapperRef.current, {
        opacity: 0,
        scale: 0.98,
        filter: "blur(8px)",
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          // Temporarily start Lenis to force a synchronous zero-scroll update
          const lenis = getLenis();
          if (lenis) {
            lenis.start();
            lenis.scrollTo(0, { immediate: true });
            lenis.stop(); // Stop again to prevent scrolling during fade-in
          }

          // Force native scroll position instantly so ScrollTrigger reads 0 on mount
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          
          // Use a micro-delay to let the browser register the scroll to 0
          setTimeout(() => {
            setPageReady(false); // Reset ready state for the new page
            setDisplayPathname(pathname);
          }, 10);
        }
      });
    } else if (pathname === displayPathname && isTransitioning && pageReady) {
      gsap.fromTo(wrapperRef.current,
        { opacity: 0, y: 80, scale: 0.98, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          clearProps: "opacity,transform,filter",
          onComplete: () => {
            setIsTransitioning(false);
            getLenis()?.start(); // Unlock scroll when new page is ready
            ScrollTrigger.refresh(); // Force recalculate bounds now that scale is 1
          }
        }
      );
    }
  }, { dependencies: [pathname, displayPathname, isTransitioning, pageReady], scope: wrapperRef });

  // Failsafe: if a page doesn't use the context, assume it's ready after a short delay
  useEffect(() => {
    if (!pageReady) {
      const timer = setTimeout(() => setPageReady(true), 1500); // Max wait time 1.5s
      return () => clearTimeout(timer);
    }
  }, [pageReady]);

  let PageComponent: React.ComponentType<any> = HomePage;
  if (displayPathname.startsWith("/about")) PageComponent = AboutPage;
  else if (displayPathname.startsWith("/contact")) PageComponent = ContactPage;
  else if (displayPathname.startsWith("/archive")) PageComponent = ArchivePage;

  return (
    <PageTransitionContext.Provider value={{ setReady: setPageReady, isTransitioning }}>
      <div ref={wrapperRef} style={{ width: '100%', minHeight: '100vh', transformOrigin: 'top center' }}>
        <PageComponent />
      </div>
    </PageTransitionContext.Provider>
  );
}

export default function App() {
  useEffect(() => {
    const disable = enableVisualEditing();
    return () => disable();
  }, []);

  return (
    <LenisProvider>
      <CursorBlob />
      <GlobalNav />
      <TransitionRouter />
    </LenisProvider>
  );
}
