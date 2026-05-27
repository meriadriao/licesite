'use client';

import { useEffect, useState, useRef, RefObject } from 'react';

export function useElementReveal(): [RefObject<HTMLDivElement | null>, boolean] {
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasRevealed, setHasRevealed] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
          // Stop observing once revealed for better performance
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      {
        threshold: 0.1, // Triggers when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Triggers slightly before entering view
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return [elementRef, hasRevealed];
}
