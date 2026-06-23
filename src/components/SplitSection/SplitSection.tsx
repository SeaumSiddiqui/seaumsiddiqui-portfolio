import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import styles from './SplitSection.module.css';

export interface SplitSectionHandles {
  leftRef: React.RefObject<HTMLDivElement | null>;
  rightRef: React.RefObject<HTMLDivElement | null>;
}

export const SplitSection = forwardRef<SplitSectionHandles, { children: React.ReactNode; isHero?: boolean }>(({ children, isHero }, ref) => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    leftRef,
    rightRef
  }));

  return (
    <div className={styles.container}>
      <div 
        ref={leftRef} 
        className={styles.leftHalf}
      >
        {children}
      </div>
      <div 
        ref={rightRef} 
        className={styles.rightHalf}
      >
        {children}
      </div>
    </div>
  );
});

SplitSection.displayName = 'SplitSection';
