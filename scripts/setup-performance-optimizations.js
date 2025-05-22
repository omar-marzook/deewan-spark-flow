/**
 * Performance Optimization Setup Script
 * 
 * This script helps implement and track performance optimizations for the Deewan website.
 * It can be run to check the status of various optimizations and implement missing ones.
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';

// Configuration
const config = {
  // Directories to check
  directories: {
    components: 'src/components',
    pages: 'src/pages',
    public: 'public',
    server: 'server',
    scripts: 'scripts',
    lib: 'src/lib'
  },
  // Files to check
  files: {
    serviceWorker: 'public/service-worker.js',
    offlinePage: 'public/offline.html',
    webVitals: 'src/lib/web-vitals.ts',
    lazyLoad: 'src/components/ui/lazy-load.tsx',
    imageOptimizer: 'scripts/optimize-images.js',
    serverProduction: 'server/production.js',
    criticalCss: 'src/critical.css',
    thirdPartyLoader: 'src/lib/load-third-party.ts',
    viteConfig: 'vite.config.ts',
    postcssConfig: 'postcss.config.js',
    dynamicImport: 'src/lib/dynamic-import.tsx'
  }
};

// Check if a file exists
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (error) {
    return false;
  }
}

// Check if a string is in a file
function fileContains(filePath, searchString) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.includes(searchString);
  } catch (error) {
    return false;
  }
}

// Main function to check optimizations
function checkOptimizations() {
  console.log(chalk.blue.bold('🚀 Checking Performance Optimizations'));
  console.log(chalk.gray('===================================='));
  
  // 1. Check LazyLoad Component
  const lazyLoadExists = fileExists(config.files.lazyLoad);
  console.log(
    lazyLoadExists 
      ? chalk.green('✅ LazyLoad component exists') 
      : chalk.red('❌ LazyLoad component missing')
  );
  
  // 2. Check Image Optimization Script
  const imageOptimizerExists = fileExists(config.files.imageOptimizer);
  const imageOptimizerOptimized = fileContains(config.files.imageOptimizer, 'webpQuality: 75');
  console.log(
    imageOptimizerExists 
      ? chalk.green('✅ Image optimization script exists') 
      : chalk.red('❌ Image optimization script missing')
  );
  console.log(
    imageOptimizerOptimized 
      ? chalk.green('  ✅ Image optimization quality set to 75') 
      : chalk.yellow('  ⚠️ Image optimization quality not optimized')
  );
  
  // 3. Check Service Worker
  const serviceWorkerExists = fileExists(config.files.serviceWorker);
  const serviceWorkerHasOffline = fileContains(config.files.serviceWorker, 'OFFLINE_URL');
  const serviceWorkerHasThirdParty = fileContains(config.files.serviceWorker, 'THIRD_PARTY_CACHE_NAME');
  console.log(
    serviceWorkerExists 
      ? chalk.green('✅ Service worker exists') 
      : chalk.red('❌ Service worker missing')
  );
  console.log(
    serviceWorkerHasOffline 
      ? chalk.green('  ✅ Service worker has offline support') 
      : chalk.yellow('  ⚠️ Service worker missing offline support')
  );
  console.log(
    serviceWorkerHasThirdParty 
      ? chalk.green('  ✅ Service worker has third-party caching') 
      : chalk.yellow('  ⚠️ Service worker missing third-party caching')
  );
  
  // 4. Check Offline Page
  const offlinePageExists = fileExists(config.files.offlinePage);
  console.log(
    offlinePageExists 
      ? chalk.green('✅ Offline page exists') 
      : chalk.red('❌ Offline page missing')
  );
  
  // 5. Check Web Vitals
  const webVitalsExists = fileExists(config.files.webVitals);
  console.log(
    webVitalsExists 
      ? chalk.green('✅ Web Vitals tracking exists') 
      : chalk.red('❌ Web Vitals tracking missing')
  );
  
  // 6. Check Server Optimizations
  const serverProductionExists = fileExists(config.files.serverProduction);
  const serverHasCompression = fileContains(config.files.serverProduction, 'compression');
  const serverHasCaching = fileContains(config.files.serverProduction, 'Cache-Control');
  console.log(
    serverProductionExists 
      ? chalk.green('✅ Server production file exists') 
      : chalk.red('❌ Server production file missing')
  );
  console.log(
    serverHasCompression 
      ? chalk.green('  ✅ Server has compression enabled') 
      : chalk.yellow('  ⚠️ Server missing compression')
  );
  console.log(
    serverHasCaching 
      ? chalk.green('  ✅ Server has caching headers') 
      : chalk.yellow('  ⚠️ Server missing caching headers')
  );
  
  // 7. Check Critical CSS
  const criticalCssExists = fileExists(config.files.criticalCss);
  const viteConfigExists = fileExists(config.files.viteConfig);
  const viteConfigHasCriticalCss = fileContains(config.files.viteConfig, 'inject-critical-css');
  console.log(
    criticalCssExists 
      ? chalk.green('✅ Critical CSS file exists') 
      : chalk.red('❌ Critical CSS file missing')
  );
  console.log(
    viteConfigHasCriticalCss 
      ? chalk.green('  ✅ Critical CSS injection configured in Vite') 
      : chalk.yellow('  ⚠️ Critical CSS injection not configured')
  );
  
  // 8. Check Third-party Script Optimization
  const thirdPartyLoaderExists = fileExists(config.files.thirdPartyLoader);
  console.log(
    thirdPartyLoaderExists 
      ? chalk.green('✅ Third-party script loader exists') 
      : chalk.red('❌ Third-party script loader missing')
  );
  
  // 9. Check PurgeCSS Configuration
  const postcssConfigExists = fileExists(config.files.postcssConfig);
  const postcssHasPurgeCSS = fileContains(config.files.postcssConfig, 'purgecss');
  console.log(
    postcssConfigExists 
      ? chalk.green('✅ PostCSS config exists') 
      : chalk.red('❌ PostCSS config missing')
  );
  console.log(
    postcssHasPurgeCSS 
      ? chalk.green('  ✅ PurgeCSS configured for production') 
      : chalk.yellow('  ⚠️ PurgeCSS not configured')
  );
  
  // 10. Check Dynamic Import Utility
  const dynamicImportExists = fileExists(config.files.dynamicImport);
  console.log(
    dynamicImportExists 
      ? chalk.green('✅ Dynamic import utility exists') 
      : chalk.red('❌ Dynamic import utility missing')
  );
  
  // Check ResourceHints Component
  const resourceHintsExists = fileExists('src/components/ResourceHints.tsx');
  const resourceHintsIntegrated = fileContains('src/App.tsx', 'ResourceHints');
  console.log(
    resourceHintsExists 
      ? chalk.green('✅ ResourceHints component exists') 
      : chalk.red('❌ ResourceHints component missing')
  );
  console.log(
    resourceHintsIntegrated 
      ? chalk.green('  ✅ ResourceHints component integrated in App') 
      : chalk.yellow('  ⚠️ ResourceHints component not integrated in App')
  );
  
  // Summary
  console.log(chalk.gray('===================================='));
  const totalChecks = 13;
  const passedChecks = [
    lazyLoadExists,
    imageOptimizerExists && imageOptimizerOptimized,
    serviceWorkerExists && serviceWorkerHasOffline && serviceWorkerHasThirdParty,
    offlinePageExists,
    webVitalsExists,
    serverProductionExists && serverHasCompression && serverHasCaching,
    criticalCssExists,
    viteConfigHasCriticalCss,
    thirdPartyLoaderExists,
    postcssConfigExists && postcssHasPurgeCSS,
    dynamicImportExists,
    resourceHintsExists,
    resourceHintsIntegrated
  ].filter(Boolean).length;
  
  console.log(chalk.blue.bold(`🏁 Performance Optimization Status: ${passedChecks}/${totalChecks}`));
  
  if (passedChecks === totalChecks) {
    console.log(chalk.green.bold('🎉 All performance optimizations are implemented!'));
  } else {
    console.log(chalk.yellow('⚠️ Some optimizations are missing. Run this script again after implementing them.'));
  }
}

// Run the check
checkOptimizations();