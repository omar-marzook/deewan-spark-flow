import React, { useEffect, useRef, useState } from 'react';

interface LazyLoadProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  placeholder?: React.ReactNode;
  className?: string;
}

/**
 * LazyLoad component that uses Intersection Observer API to only render
 * its children when they are about to enter the viewport.
 * 
 * @param children - The content to lazy load
 * @param threshold - A value between 0 and 1 indicating the percentage of the element that needs to be visible
 * @param rootMargin - Margin around the root similar to CSS margin property
 * @param placeholder - Content to show while the main content is loading
 * @param className - Additional CSS classes
 */
const LazyLoad: React.FC<LazyLoadProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '200px 0px',
  placeholder = <div className="h-32 w-full bg-gray-100 animate-pulse rounded-md"></div>,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : placeholder}
    </div>
  );
};

export default LazyLoad;