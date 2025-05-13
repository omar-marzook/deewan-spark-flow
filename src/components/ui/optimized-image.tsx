import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean; // Set to true for above-the-fold images that shouldn't be lazy loaded
}

/**
 * OptimizedImage component that implements best practices for image loading
 * - Adds loading="lazy" for images that are not marked as priority
 * - Adds decoding="async" for better performance
 * - Adds appropriate width and height to prevent layout shifts
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}) => {
  // Don't lazy load priority images (like logos, hero images)
  const loadingAttribute = priority ? undefined : 'lazy';
  
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loadingAttribute}
      decoding="async"
    />
  );
};

export default OptimizedImage;