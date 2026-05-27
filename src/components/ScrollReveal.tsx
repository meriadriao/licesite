'use client';

import React, { ReactNode } from 'react';
import { useElementReveal } from './ScrollHook';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = '' }) => {
  const [ref, isVisible] = useElementReveal();

  return (
    <div
      ref={ref}
      className={`
        transform transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
