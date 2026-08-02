import React from 'react';
import styles from './Pagination.module.css';

interface PaginationProps {
  items: string[];
  activeIndex: number;
}

const Pagination = React.memo(function Pagination({ items, activeIndex }: PaginationProps) {
  const isVisible = activeIndex >= 0 && activeIndex < items.length;

  return (
    <div className={styles.wrapper} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}>
      <div className={styles.track}>
        {items.map((item, i) => (
          <div key={item} className={`${styles.item} ${i === activeIndex ? styles.active : ''}`}>
            {item}
            {i === activeIndex && <div className={styles.notch} />}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Pagination;
