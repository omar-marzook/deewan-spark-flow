import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

export function reportWebVitals(onPerfEntry?: (metric: any) => void) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Core Web Vitals
    onCLS(onPerfEntry);  // Cumulative Layout Shift
    onLCP(onPerfEntry);  // Largest Contentful Paint
    onINP(onPerfEntry);  // Interaction to Next Paint (replaces FID in Web Vitals v5+)
    
    // Other important metrics
    onFCP(onPerfEntry);  // First Contentful Paint
    onTTFB(onPerfEntry); // Time to First Byte
  }
}