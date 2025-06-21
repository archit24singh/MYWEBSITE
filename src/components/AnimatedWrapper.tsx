// src/components/AnimatedWrapper.tsx
import React, { useEffect, useRef, useState } from 'react';

interface AnimatedWrapperProps {
  children: React.ReactNode;
  animation?: 'bounce-in' | 'bounce-in-left' | 'bounce-in-right' | 'bounce-in-up' | 'bounce-in-down' | 'fade-in';
  delay?: number;
  className?: string;
  threshold?: number;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  animation = 'bounce-in',
  delay = 0,
  className = '',
  threshold = 0.1
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '50px 0px -50px 0px',
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
  }, [delay, threshold]);

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? animation : 'opacity-0'}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(50px)'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedWrapper;