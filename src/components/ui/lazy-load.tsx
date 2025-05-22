import React, { useEffect, useState, ReactNode } from 'react';

interface LazyLoadProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
}

const LazyLoad: React.FC<LazyLoadProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '200px 0px',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.disconnect();
    };
  }, [ref, threshold, rootMargin]);

  return (
    <div ref={setRef} className="lazy-load-container">
      {isVisible ? children : <div style={{ height: '10px', minHeight: '10px' }} />}
    </div>
  );
};

export default LazyLoad;