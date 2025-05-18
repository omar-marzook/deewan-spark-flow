import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean; // Set to true for above-the-fold images that shouldn't be lazy loaded
  sizes?: string; // Optional sizes attribute for responsive images
  useResponsive?: boolean; // Whether to use responsive images (default: auto-detect)
}

/**
 * OptimizedImage component that implements best practices for image loading
 * - Uses WebP format with fallbacks for browsers that don't support it
 * - Uses responsive image sizes for different viewports (for larger images)
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
  sizes = '100vw', // Default to full viewport width
  useResponsive,
}) => {
  // Don't lazy load priority images (like logos, hero images)
  const loadingAttribute = priority ? undefined : 'lazy';
  
  // Extract file path and extension
  const lastDotIndex = src.lastIndexOf('.');
  const hasExtension = lastDotIndex !== -1;
  
  if (!hasExtension) {
    // If no extension, just use the original src
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
  }
  
  const basePath = hasExtension ? src.substring(0, lastDotIndex) : src;
  const extension = hasExtension ? src.substring(lastDotIndex) : '';
  
  // Auto-detect if we should use responsive images based on the path
  // Logos and small images typically don't have responsive versions
  const shouldUseResponsive = useResponsive !== undefined 
    ? useResponsive 
    : !src.includes('/logos/') && (src.includes('/products/') || src.includes('/blogs/'));
  
  // Simple WebP version (for all images)
  const webpSrc = `${basePath}.webp`;
  
  if (!shouldUseResponsive) {
    // For small images like logos, just use WebP without responsive sizes
    return (
      <picture>
        {/* WebP source */}
        <source type="image/webp" srcSet={webpSrc} />
        
        {/* Original format fallback */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          loading={loadingAttribute}
          decoding="async"
        />
      </picture>
    );
  }
  
  // For larger images that should have responsive versions
  // Responsive sizes
  const smallSize = 400;
  const mediumSize = 800;
  const largeSize = 1200;
  
  // Generate srcset for original format
  const originalSrcSet = [
    `${basePath}-small${extension} ${smallSize}w`,
    `${basePath}-medium${extension} ${mediumSize}w`,
    `${basePath}-large${extension} ${largeSize}w`,
    `${src} 1920w`,
  ].join(', ');
  
  // Generate srcset for WebP format
  const webpSrcSet = [
    `${basePath}-small.webp ${smallSize}w`,
    `${basePath}-medium.webp ${mediumSize}w`,
    `${basePath}-large.webp ${largeSize}w`,
    `${basePath}.webp 1920w`,
  ].join(', ');
  
  return (
    <picture>
      {/* WebP source */}
      <source
        type="image/webp"
        srcSet={webpSrcSet}
        sizes={sizes}
      />
      
      {/* Original format source */}
      <source
        srcSet={originalSrcSet}
        sizes={sizes}
      />
      
      {/* Fallback image */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loadingAttribute}
        decoding="async"
        onError={(e) => {
          // If responsive images fail, fall back to original
          const target = e.target as HTMLImageElement;
          const picture = target.parentElement;
          if (picture && picture.tagName === 'PICTURE') {
            // Replace the picture element with a simple img
            const newImg = document.createElement('img');
            newImg.src = src;
            newImg.alt = alt;
            if (width) newImg.width = width;
            if (height) newImg.height = height;
            newImg.className = className;
            if (loadingAttribute) newImg.loading = loadingAttribute;
            newImg.decoding = 'async';
            picture.parentElement?.replaceChild(newImg, picture);
          }
        }}
      />
    </picture>
  );
};

export default OptimizedImage;