import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import styles from './GlobalNav.module.css';
import MenuOverlay from '../MenuOverlay/MenuOverlay';

export default function GlobalNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = () => {
    window.dispatchEvent(new CustomEvent('closeProjectOverlay'));
  };

  return (
    <>
      <nav className={styles.globalNav}>
        <div className={styles.topRow}>
          <Link to="/" className={styles.navItem} onClick={handleHomeClick}>SEAUM SIDDIQUI</Link>
          <Link to={"/archive" as any} className={`${styles.navItem} ${styles.centerItem}`}>WORK</Link>
          <button className={styles.navItem} onClick={() => setIsMenuOpen(true)}>MENU</button>
        </div>

        <div className={styles.bottomRow}>
          <a href="mailto:seaumsiddiqui@outlook.com" className={`${styles.navItem} ${styles.lowercase}`}>
            seaumsiddiqui@outlook.com
          </a>
          <a href="/contact" className={`${styles.navItem} ${styles.lowercase}`}>
            contact
          </a>
        </div>
      </nav>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
