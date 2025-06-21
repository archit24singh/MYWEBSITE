// src/hooks/useScrollAnimation.tsx
import { useEffect, useRef, useState, RefObject } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

interface UseScrollAnimationReturn {
  elementRef: RefObject<HTMLDivElement>;
  isVisible: boolean;
  hasAnimated: boolean;
}

/**
 * Custom hook for scroll-triggered animations
 */
export const useScrollAnimation = (
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn => {
  const {
    threshold = 0.1,
    rootMargin = '50px 0px -50px 0px',
    triggerOnce = true,
    delay = 0
  } = options;

  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
              if (triggerOnce) {
                setHasAnimated(true);
                observer.unobserve(entry.target);
              }
            }, delay);
          } else {
            setIsVisible(true);
            if (triggerOnce) {
              setHasAnimated(true);
              observer.unobserve(entry.target);
            }
          }
        } else if (!entry.isIntersecting && !triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
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
  }, [threshold, rootMargin, triggerOnce, delay, hasAnimated]);

  return { elementRef, isVisible, hasAnimated };
};

/**
 * Hook for batch animating multiple elements with staggered delays
 */
export const useStaggeredAnimation = (
  count: number,
  baseDelay: number = 0,
  staggerDelay: number = 100
) => {
  const [animatedElements, setAnimatedElements] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setAnimatedElements(prev => new Set([...prev, index]));
            }, baseDelay + (index * staggerDelay));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px',
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [baseDelay, staggerDelay]);

  const observeElement = (element: HTMLElement, index: number) => {
    if (observerRef.current && element) {
      element.setAttribute('data-index', index.toString());
      observerRef.current.observe(element);
    }
  };

  const isElementAnimated = (index: number) => animatedElements.has(index);

  return { observeElement, isElementAnimated, animatedElements };
};

/**
 * Get random animation class
 */
export const getRandomAnimation = (): string => {
  const animations = [
    'bounce-in',
    'bounce-in-left', 
    'bounce-in-right',
    'bounce-in-up',
    'bounce-in-down'
  ];
  return animations[Math.floor(Math.random() * animations.length)];
};

/**
 * Get staggered delay class
 */
export const getStaggeredDelay = (index: number): string => {
  const delay = Math.min(index * 100, 800);
  const roundedDelay = Math.round(delay / 100) * 100;
  return `delay-${roundedDelay}`;
};

/**
 * Hook for scroll progress tracking
 */
export const useScrollProgress = (): number => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollProgress;
};

/**
 * Hook for element visibility tracking
 */
export const useElementVisibility = (threshold: number = 0.1) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
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
  }, [threshold]);

  return { elementRef, isVisible };
};

export default useScrollAnimation;