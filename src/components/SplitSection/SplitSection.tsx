import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import styles from './SplitSection.module.css';

export interface SplitSectionHandles {
  leftRef: React.RefObject<HTMLDivElement | null>;
  rightRef: React.RefObject<HTMLDivElement | null>;
}

interface SplitSectionProps {
  children: React.ReactNode;
  isHero?: boolean;
  isClickable?: boolean;
}

const SplitSection = React.memo(forwardRef<SplitSectionHandles, SplitSectionProps>(({ children, isHero = false, isClickable = true }, ref) => {
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
        style={{ pointerEvents: isClickable ? 'auto' : 'none' }}
      >
        {children}
      </div>
      <div 
        ref={rightRef} 
        className={styles.rightHalf}
        style={{ pointerEvents: isClickable ? 'auto' : 'none' }}
      >
        {children}
      </div>
    </div>
  );
}));

export { SplitSection };

SplitSection.displayName = 'SplitSection';
