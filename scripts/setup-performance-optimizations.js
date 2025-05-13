/**
 * Setup Performance Optimizations Script
 * 
 * This script:
 * 1. Installs required dependencies
 * 2. Runs the image optimization process
 * 3. Provides instructions for next steps
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  red: '\x1b[31m'
};

// Helper function to log with colors
function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

// Helper function to execute commands and handle errors
function executeCommand(command, errorMessage) {
  try {
    log(`\n${colors.bright}${colors.blue}Executing: ${command}${colors.reset}`);
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    log(`\n${colors.red}${colors.bright}ERROR: ${errorMessage}${colors.reset}`, colors.red);
    log(`${error.message}`, colors.dim);
    return false;
  }
}

// Main function
async function setupPerformanceOptimizations() {
  log('\n=======================================================', colors.cyan);
  log('🚀 DEEWAN PERFORMANCE OPTIMIZATION SETUP', colors.bright + colors.cyan);
  log('=======================================================\n', colors.cyan);

  log('This script will set up performance optimizations for the Deewan website.', colors.bright);
  log('It will install required dependencies and optimize images.\n');

  // Step 1: Install dependencies
  log('📦 Step 1: Installing required dependencies...', colors.yellow);
  
  if (!executeCommand('npm install sharp glob --save', 'Failed to install dependencies.')) {
    return;
  }

  // Step 2: Run image optimization
  log('\n🖼️ Step 2: Optimizing images...', colors.yellow);
  log('This may take a few minutes depending on the number and size of images.', colors.dim);
  
  if (!executeCommand('node scripts/optimize-images.js', 'Failed to optimize images.')) {
    return;
  }

  // Step 3: Success message and next steps
  log('\n✅ Performance optimization setup complete!', colors.green + colors.bright);
  log('\nNext steps:', colors.bright);
  log('1. Review the PERFORMANCE-OPTIMIZATION.md file for usage instructions', colors.cyan);
  log('2. Update your components to use the OptimizedImage component', colors.cyan);
  log('3. Wrap below-the-fold content with the LazyLoad component', colors.cyan);
  log('4. Build your project with "npm run build" to enable service worker caching', colors.cyan);
  
  log('\n=======================================================', colors.cyan);
  log('Thank you for optimizing the Deewan website performance!', colors.bright + colors.cyan);
  log('=======================================================\n', colors.cyan);
}

// Run the setup
setupPerformanceOptimizations().catch(error => {
  log(`\n${colors.red}${colors.bright}An unexpected error occurred:${colors.reset}`, colors.red);
  log(`${error.message}`, colors.dim);
  process.exit(1);
});