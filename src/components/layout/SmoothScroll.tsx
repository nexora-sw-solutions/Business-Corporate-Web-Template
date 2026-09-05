import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Intercept route changes and force Lenis to scroll to top (or hash)
  useEffect(() => {
    if (!lenisRef.current) return;

    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Pass the DOM element and a -64 offset for the sticky header
          lenisRef.current?.scrollTo(element, { offset: -64 });
        }
      }, 100);
    } else {
      // Instantly reset scroll to top on route change
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname, hash]);

  return <>{children}</>;
}
