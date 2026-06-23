import React, { useContext, useEffect } from 'react';
import { PageTransitionContext } from '@/App';

export default function AboutPage() {
  const { setReady } = useContext(PageTransitionContext);

  useEffect(() => {
    setReady(true);
  }, [setReady]);

  return <main />;
}
