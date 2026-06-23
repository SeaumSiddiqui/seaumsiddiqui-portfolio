import React, { useContext, useEffect } from 'react';
import { PageTransitionContext } from '@/App';

export default function ContactPage() {
  const { setReady } = useContext(PageTransitionContext);

  useEffect(() => {
    setReady(true);
  }, [setReady]);

  return <main />;
}
