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
    serverProduction: 'server/production.js'
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
  
  // Summary
  console.log(chalk.gray('===================================='));
  const totalChecks = 9;
  const passedChecks = [
    lazyLoadExists,
    imageOptimizerExists && imageOptimizerOptimized,
    serviceWorkerExists && serviceWorkerHasOffline && serviceWorkerHasThirdParty,
    offlinePageExists,
    webVitalsExists,
    serverProductionExists && serverHasCompression && serverHasCaching
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