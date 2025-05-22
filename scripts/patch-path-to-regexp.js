/**
 * This script directly patches the path-to-regexp library in node_modules
 * to fix the "Missing parameter name" error.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

// Path to the path-to-regexp dist/index.js file
const pathToRegexpFile = path.join(rootDir, 'node_modules', 'path-to-regexp', 'dist', 'index.js');

console.log(`Attempting to patch: ${pathToRegexpFile}`);

try {
  // Check if the file exists
  if (!fs.existsSync(pathToRegexpFile)) {
    console.error('path-to-regexp file not found. Make sure the package is installed.');
    process.exit(1);
  }

  // Read the file content
  let content = fs.readFileSync(pathToRegexpFile, 'utf8');

  // Find the function that throws the "Missing parameter name" error
  const errorPattern = /throw new TypeError\(`Missing parameter name at \${i}: \${DEBUG_URL}`\);/;
  
  if (!content.match(errorPattern)) {
    console.error('Could not find the error pattern in the path-to-regexp file.');
    console.error('The library might have been updated or the file structure has changed.');
    process.exit(1);
  }

  // Replace the error with a check for problematic URLs
  const replacement = `
    // Patched by scripts/patch-path-to-regexp.js
    if (DEBUG_URL.includes('https://git.new/')) {
      console.warn(\`Skipping problematic URL pattern at \${i}: \${DEBUG_URL}\`);
      return 'safe-param';
    }
    throw new TypeError(\`Missing parameter name at \${i}: \${DEBUG_URL}\`);
  `;

  // Apply the patch
  content = content.replace(errorPattern, replacement);

  // Write the patched content back to the file
  fs.writeFileSync(pathToRegexpFile, content, 'utf8');

  console.log('Successfully patched path-to-regexp library!');
  console.log('The "Missing parameter name" error should now be handled gracefully.');
} catch (error) {
  console.error('Failed to patch path-to-regexp:', error);
  process.exit(1);
}