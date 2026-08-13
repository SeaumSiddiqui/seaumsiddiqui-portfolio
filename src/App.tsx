import React, { useEffect, useState, useRef, createContext } from "react";
import { useLenis, getLenis } from "./hooks/useLenis";
import { useLocation } from "@tanstack/react-router";
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
  const location = useLocation();
  const pathname = location.pathname;
  const [displayPathname, setDisplayPathname] = useState(pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pageReady, setPageReady] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (pathname !== displayPathname && !isTransitioning) {
      // Skip transition entirely for Home <-> Archive, let HomePage handle the gate animation
      if ((pathname === '/archive' && displayPathname === '/') || (pathname === '/' && displayPathname === '/archive')) {
        setDisplayPathname(pathname);
        return;
      }
      
      setIsTransitioning(true);
      getLenis()?.stop(); // Lock scroll during transition
      gsap.to(wrapperRef.current, {
        opacity: 0,
        scale: 0.98,
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

          // Hide the wrapper completely to prevent CLS when scroll snaps back
          if (wrapperRef.current) {
            wrapperRef.current.style.visibility = "hidden";
          }

          // Force native scroll position instantly so ScrollTrigger reads 0 on mount
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          
          // Use a micro-delay to let the browser register the scroll to 0
          setTimeout(() => {
            setPageReady(false); // Reset ready state for the new page
            setDisplayPathname(pathname);
            
            // Automatically set the new page to ready after a short delay to allow it to render
            setTimeout(() => {
              setPageReady(true);
            }, 20);
          }, 10);
        }
      });
    } else if (pathname === displayPathname && isTransitioning && pageReady) {
      if (wrapperRef.current) {
        wrapperRef.current.style.visibility = "visible";
      }
      
      gsap.fromTo(wrapperRef.current,
        { opacity: 0, y: 80, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          clearProps: "opacity,transform,visibility",
          onComplete: () => {
            setIsTransitioning(false);
            getLenis()?.start(); // Unlock scroll when new page is ready
            ScrollTrigger.refresh(); // Force recalculate bounds now that scale is 1
          }
        }
      );
    }
  }, { dependencies: [pathname, displayPathname, isTransitioning, pageReady], scope: wrapperRef });



  let PageComponent: React.ComponentType<any> = HomePage;
  if (displayPathname.startsWith("/about")) PageComponent = AboutPage;
  else if (displayPathname.startsWith("/contact")) PageComponent = ContactPage;
  // Archive is handled entirely inside HomePage now via the WorkGate

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
    // Disabled to prevent infinite loops with GSAP MutationObserver
    // const disable = enableVisualEditing();
    // return () => disable();
  }, []);

  return (
    <LenisProvider>
      <CursorBlob />
      <GlobalNav />
      <TransitionRouter />
    </LenisProvider>
  );
}
