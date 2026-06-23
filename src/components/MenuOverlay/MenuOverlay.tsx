import React, { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import styles from './MenuOverlay.module.css';
import { getLenis } from '../../hooks/useLenis';
import { useSanityQuery } from '../../lib/useSanity';
import { MENU_OVERLAY_QUERY } from '../../lib/queries';
import { MenuOverlayData } from '../../lib/types';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const [localTime, setLocalTime] = useState<string>('[LOADING...]');
  const [pointerTop, setPointerTop] = useState<string>('0px');
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);

  const { data } = useSanityQuery<MenuOverlayData>(MENU_OVERLAY_QUERY);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Use a short timeout to guarantee the browser paints the initial state
      // before adding the .open class, avoiding React/browser batching issues.
      setTimeout(() => {
        setIsAnimating(true);
      }, 50);
    } else {
      setIsAnimating(false);
      if (shouldRender) {
        const timer = setTimeout(() => {
          setShouldRender(false);
        }, 1500); // match longest CSS transition duration
        return () => clearTimeout(timer);
      }
    }
  }, [isOpen, shouldRender]);

  useEffect(() => {
    if (!isOpen) return;

    const lenis = getLenis();
    if (lenis) lenis.stop();

    // Prevent scrolling when menu is active
    document.body.style.overflow = 'hidden';

    // Real-time Clock Update
    const updateTime = () => {
      const now = new Date();
      const tz = data?.timezoneCity || 'Asia/Dhaka';
      let localTimeStr = '';
      try {
        const timeInTz = new Date(now.toLocaleString('en-US', { timeZone: tz }));
        const hours = String(timeInTz.getHours()).padStart(2, '0');
        const minutes = String(timeInTz.getMinutes()).padStart(2, '0');
        const seconds = String(timeInTz.getSeconds()).padStart(2, '0');
        localTimeStr = `${hours}:${minutes}:${seconds}`;
      } catch (e) {
        // Fallback if timezone is invalid
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        localTimeStr = `${hours}:${minutes}:${seconds}`;
      }
      setLocalTime(localTimeStr);
    };

    const timer = setInterval(updateTime, 1000);
    updateTime();

    // Escape key listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
      clearInterval(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, data?.timezoneCity]);

  if (!shouldRender) return null;

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    // Calculate the distance from the top of .leftPane to the bottom of the hovered link
    const topPosition = el.offsetTop + el.offsetHeight;
    setPointerTop(`${topPosition}px`);
  };

  const navLinks = data?.navLinks || [
    { num: '01', title: 'ABOUT', meta: '_view_biography', to: '/' },
    { num: '02', title: 'WORK', meta: '_explore_projects', to: '/' },
    { num: '03', title: 'ARCHIVE', meta: '_system_logs', to: '/archive' },
    { num: '04', title: 'CONNECT', meta: '_initialize_handshake', to: '/contact' },
  ];

  return (
    <main className={`${styles.overlay} ${isAnimating ? styles.open : ''}`}>
      <div className={styles.mainContainer}>
        {/* LEFT PANE: SHAFT & NAVIGATION LINKS */}
        <section className={styles.leftPane}>
          {/* SHAFT INDICATOR TRACK */}
          <div className={styles.shaftTrack}>
            <div
              className={styles.shaftIndicator}
              style={{ top: pointerTop }}
            ></div>
          </div>
          
          <nav className={styles.navContainer}>
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.to as any}
                className={styles.navLink}
                onMouseEnter={handleMouseEnter}
                onClick={onClose}
              >
                <div className={styles.navLinkTop}>
                  <span className={styles.navIndex}>{link.num}</span>
                  <h2 className={styles.navText}>{link.title}</h2>
                </div>
                <div className={styles.navMeta}>
                  <span className={styles.navMetaText}>{link.meta}</span>
                  <span className={styles.terminalCursor}></span>
                </div>
              </Link>
            ))}
            
            <div className={styles.copyright}>
              {data?.copyrightText || '© 2026 All Rights Reserved'}
            </div>
          </nav>
        </section>

        {/* RIGHT PANE: DATA VISUALIZATION / METADATA */}
        <section className={styles.rightPane}>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close menu">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={styles.closeIconSvg}>
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          </button>
          
          <div className={styles.dataBlock}>
            <div className={styles.dataContent}>
              <div>
                <div className={styles.profileName}>{data?.profileName || 'Seaum Siddiqui'}</div>
                <div className={styles.profileDesc}>{data?.profileDesc || 'Backend Engineer and Software architect'}</div>
              </div>
              
              <div className={styles.socialsGroup}>
                <div className={styles.groupHeader}>
                  <span className={styles.dot}></span>
                  <span className={styles.groupTitle}>Get in Touch</span>
                </div>
                <div className={styles.socialLinks}>
                  {(data?.socialLinks || []).map((social) => (
                    <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      {social.label}
                    </a>
                  ))}
                  {!data?.socialLinks && (
                    <>
                      <a href="https://github.com/seaumsiddiqui" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Github</a>
                      <a href="https://linkedin.com/in/seaumsiddiqui" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
                      <a href="#" className={styles.socialLink}>X (Twitter)</a>
                    </>
                  )}
                </div>
              </div>

              <div className={styles.emailGroup}>
                <div className={styles.emailContainer}>
                  <div className={styles.emailRow}>
                    <span className={styles.dot}></span>
                    <a href={`mailto:${data?.email || 'seaumsiddiqui@gmail.com'}`} className={styles.emailText}>
                      {data?.email || 'seaumsiddiqui@gmail.com'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.terminalClock}>
              <span className={styles.clockText}>
                {data?.timezonePrefix || 'UTC+6'} [{localTime}]
              </span>
            </div>
          </div>
          
          <div className={styles.imageBlock}>
            <div className={styles.imageOverlay}></div>
            <img 
              src={data?.bottomImage || "https://lh3.googleusercontent.com/aida-public/AB6AXuDURdIX4bEQZPDxleruVlqB-shD4Y4qmPYA12ogmPJsMtgqA7McbXyYqNFq3gQT2bDDRuc-BFWsTkmcnqlpxmH_ETbreZQYRM6AyauQrNhJKZMQZp31v-lPHwxI6hf3VmIkvQ0Y_PmFsBCkuvbklp4qiW8kquSffVG2LLiQYCOGbakngr71-WGcatbeMt71D_oH_sR4q2GiyZhSeWVYK3WSXbC3xEc5iuLcEsU-che0uwVis-Lagx0Jk6_0yge7Y7xhmi-j25NJB6t7"} 
              alt="Architectural technical aesthetic" 
              className={styles.bottomImage} 
            />
          </div>
        </section>
      </div>
    </main>
  );
}
