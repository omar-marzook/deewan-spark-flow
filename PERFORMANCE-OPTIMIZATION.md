# Performance Optimization Guide for Deewan Website

This guide outlines the performance optimizations implemented in the Deewan website and provides instructions on how to use them effectively.

## Table of Contents

1. [Image Optimization](#image-optimization)
2. [Lazy Loading](#lazy-loading)
3. [Code Splitting](#code-splitting)
4. [Service Worker Caching](#service-worker-caching)
5. [Build Optimization](#build-optimization)
6. [Performance Monitoring](#performance-monitoring)

## Image Optimization

### WebP Conversion

The project includes a script to convert PNG and JPG images to the more efficient WebP format:

```bash
# Install required dependencies
npm install sharp glob

# Run the optimization script
npm run optimize-images
```

This script:
- Converts images to WebP format
- Creates responsive image sizes for different viewports
- Maintains original files as fallbacks for older browsers

### Using Optimized Images

Use the `OptimizedImage` component for all images:

```tsx
import OptimizedImage from "@/components/ui/optimized-image";

// For below-the-fold images (lazy loaded)
<OptimizedImage 
  src="/path/to/image.png" 
  alt="Description" 
  width={400} 
  height={300} 
/>

// For critical above-the-fold images (not lazy loaded)
<OptimizedImage 
  src="/path/to/image.png" 
  alt="Description" 
  width={400} 
  height={300}
  priority={true}
/>
```

## Lazy Loading

### Component Lazy Loading

Use the `LazyLoad` component to defer loading of below-the-fold content:

```tsx
import LazyLoad from "@/components/ui/lazy-load";

<LazyLoad>
  <YourComponent />
</LazyLoad>

// With custom placeholder and threshold
<LazyLoad 
  placeholder={<div>Loading...</div>}
  threshold={0.2}
  rootMargin="100px 0px"
>
  <YourComponent />
</LazyLoad>
```

### Video Optimization

The HomeHero component demonstrates optimized video loading:

- Uses `preload="metadata"` to only load video metadata initially
- Implements `onLoadedData` event handling
- Properly sized for responsive layouts

## Code Splitting

### Route-Based Splitting

The application uses React Router's lazy loading for code splitting:

```tsx
import { lazy, Suspense } from 'react';

const ProductPage = lazy(() => import('./pages/ProductPage'));

// In your routes
<Routes>
  <Route path="/products/:productId" element={
    <Suspense fallback={<div>Loading...</div>}>
      <ProductPage />
    </Suspense>
  } />
</Routes>
```

## Service Worker Caching

The application includes a service worker for caching static assets:

- Static assets are cached on install
- Images use a cache-first strategy
- HTML uses a network-first strategy
- Other assets use stale-while-revalidate

The service worker is automatically registered in production builds.

### Development Mode

During development, the service worker is not registered to avoid caching issues. If needed, you can manually unregister service workers:

```tsx
import { unregisterServiceWorker } from './lib/register-sw';

// Call this when needed
unregisterServiceWorker();
```

## Build Optimization

The Vite configuration has been optimized for production builds:

- Chunk splitting for vendor libraries
- CSS code splitting
- Terser minification with console removal in production
- Compression of assets

## Performance Monitoring

### Lighthouse Audits

Run Lighthouse audits in Chrome DevTools to measure:

- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)
- Cumulative Layout Shift (CLS)

### Performance Budget

The project aims to maintain the following performance budget:

- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Total Bundle Size: < 350KB (compressed)
- Image Size Budget: < 200KB per image

## Best Practices

1. Always use the `OptimizedImage` component instead of regular `<img>` tags
2. Wrap below-the-fold content in `LazyLoad` components
3. Set appropriate width and height attributes on images to prevent layout shifts
4. Run the image optimization script after adding new images
5. Use code splitting for large components
6. Monitor performance regularly with Lighthouse

---

For any questions or issues, please contact the development team.