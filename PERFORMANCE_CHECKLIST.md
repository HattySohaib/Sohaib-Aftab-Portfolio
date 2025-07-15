# React Performance Optimization Checklist

Use this checklist for future React projects to ensure optimal performance from the start.

## 🚀 Initial Setup

### Critical Path Optimization

- [ ] Inline critical CSS for above-the-fold content
- [ ] Use asynchronous font loading with `media="print" onload="this.media='all'"`
- [ ] Add resource hints (preload, dns-prefetch, prefetch) in HTML head
- [ ] Minimize render-blocking resources

### Image Optimization Foundation

- [ ] Create LazyImage component with Intersection Observer
- [ ] Implement progressive image loading with placeholders
- [ ] Add WebP support with fallback for modern browsers
- [ ] Use responsive images with `<picture>` element

## 📱 Layout Stability

### Prevent Layout Shifts

- [ ] Add `width` and `height` attributes to all images
- [ ] Use `aspect-ratio` CSS property for dynamic content
- [ ] Implement skeleton screens for loading states
- [ ] Reserve space for dynamic content (ads, embeds)

### CSS Performance

- [ ] Use `will-change` for elements that will animate
- [ ] Animate only `transform` and `opacity` properties
- [ ] Add `contain: layout style paint` to isolated components
- [ ] Use `transform3d` to trigger hardware acceleration

## 🎯 Component Optimization

### Lazy Loading Implementation

```jsx
// Template for lazy loading component
const LazyComponent = ({ threshold = 0.1, rootMargin = "50px" }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{isInView && children}</div>;
};
```

### React-Specific Optimizations

- [ ] Use `React.memo` for expensive components
- [ ] Implement `useMemo` and `useCallback` for expensive calculations
- [ ] Use `React.lazy` and `Suspense` for code splitting
- [ ] Optimize re-renders with proper dependency arrays

## 🌐 Network Optimization

### Caching Strategy

- [ ] Set up aggressive caching for static assets (1 year)
- [ ] Configure moderate caching for HTML files (1 hour)
- [ ] Enable Gzip/Brotli compression
- [ ] Implement service worker for offline capability

### Resource Loading

- [ ] Preload critical images and fonts
- [ ] Use DNS prefetch for external domains
- [ ] Prefetch likely next page resources
- [ ] Optimize bundle size with tree shaking

## 📊 Monitoring & Testing

### Performance Metrics

- [ ] Set up Core Web Vitals monitoring
- [ ] Track LCP, FID, CLS in production
- [ ] Monitor bundle size changes
- [ ] Set performance budgets

### Testing Checklist

- [ ] Test on slow 3G network
- [ ] Verify performance on mobile devices
- [ ] Check accessibility with lazy loading
- [ ] Validate fallbacks for failed resources

## 🛠 Development Tools

### Build Optimization

```json
// package.json optimization scripts
{
  "scripts": {
    "analyze": "npm run build && npx webpack-bundle-analyzer build/static/js/*.js",
    "lighthouse": "lighthouse http://localhost:3000 --view",
    "perf": "npm run build && serve -s build"
  }
}
```

### Performance Auditing

- [ ] Run Lighthouse on every build
- [ ] Use webpack-bundle-analyzer for bundle analysis
- [ ] Set up performance CI checks
- [ ] Monitor real user metrics (RUM)

## 🎨 CSS Optimization

### Critical CSS Strategy

```html
<!-- Inline critical CSS -->
<style>
  /* Above-the-fold styles only */
  .hero {
    /* essential styles */
  }
  .header {
    /* critical typography */
  }
</style>

<!-- Load non-critical CSS async -->
<link
  rel="preload"
  href="styles.css"
  as="style"
  onload="this.onload=null;this.rel='stylesheet'"
/>
```

### Animation Performance

```css
/* GPU-accelerated animations */
.smooth-animation {
  will-change: transform, opacity;
  transform: translate3d(0, 0, 0);
  transition: transform 0.3s ease-out;
}

/* Avoid animating these properties */
/* width, height, top, left, margin, padding */
```

## 📈 Advanced Optimization

### Dynamic Imports

```jsx
// Route-level code splitting
const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));

// Component-level splitting
const HeavyChart = lazy(() => import("./components/HeavyChart"));
```

### Image Optimization Pipeline

- [ ] Convert images to WebP format
- [ ] Generate multiple sizes for responsive images
- [ ] Implement blur-up technique for progressive loading
- [ ] Use SVG for simple graphics and icons

## 🔧 Error Handling

### Graceful Degradation

```jsx
// Error boundary for lazy components
const LazyWrapper = ({ children, fallback }) => (
  <ErrorBoundary fallback={fallback}>
    <Suspense fallback={<Loading />}>{children}</Suspense>
  </ErrorBoundary>
);
```

### Performance Monitoring

```jsx
// Track performance in production
import { getCLS, getFID, getLCP } from "web-vitals";

const sendToAnalytics = (metric) => {
  // Send to your analytics service
  analytics.track("Web Vital", metric);
};

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);
```

## 📱 Mobile-First Considerations

### Mobile Optimization

- [ ] Test on actual mobile devices
- [ ] Optimize touch targets (minimum 44px)
- [ ] Reduce JavaScript execution time
- [ ] Minimize main thread work

### Progressive Web App Features

- [ ] Add service worker for caching
- [ ] Implement offline functionality
- [ ] Add web app manifest
- [ ] Enable push notifications (if needed)

## 🎯 Performance Budget

Set and maintain performance budgets:

```json
{
  "budgets": [
    {
      "type": "initial",
      "maximumWarning": "500kb",
      "maximumError": "1mb"
    },
    {
      "type": "anyComponentStyle",
      "maximumWarning": "2kb",
      "maximumError": "4kb"
    }
  ]
}
```

## 📋 Pre-Launch Checklist

### Final Performance Audit

- [ ] Lighthouse score > 90 on all metrics
- [ ] Core Web Vitals in green zone
- [ ] Bundle size within budget
- [ ] Images optimized and properly sized
- [ ] Fonts loading efficiently
- [ ] Critical CSS inlined
- [ ] Service worker configured
- [ ] Error boundaries in place
- [ ] Performance monitoring enabled

### Testing Matrix

- [ ] Desktop Chrome/Firefox/Safari
- [ ] Mobile Chrome/Safari
- [ ] Slow 3G network simulation
- [ ] CPU throttling enabled
- [ ] Accessibility audit passed
- [ ] SEO optimization verified

---

## 🚀 Quick Start Template

Copy this template for new React projects:

```jsx
// src/components/LazyImage/LazyImage.jsx
import React, { useState, useRef, useEffect } from "react";

const LazyImage = ({ src, alt, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} {...props}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        />
      )}
    </div>
  );
};

export default LazyImage;
```

Remember: **Measure → Optimize → Test → Monitor**

Start with the highest impact optimizations and progressively enhance your application's performance!
