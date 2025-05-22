/**
 * This module patches the path-to-regexp library to handle problematic URLs
 * that would otherwise cause "Missing parameter name" errors.
 */

import Module from 'module';

// Store the original require function
const originalRequire = Module.prototype.require;

// Override the require function to intercept path-to-regexp loading
Module.prototype.require = function(id) {
  // Call the original require function
  const module = originalRequire.apply(this, arguments);
  
  // Check if this is the path-to-regexp module
  if (id === 'path-to-regexp') {
    try {
      // Get the original pathToRegexp function
      const originalPathToRegexp = module.pathToRegexp;
      
      // Override the pathToRegexp function
      module.pathToRegexp = function(path, keys, options) {
        // Check if the path contains problematic patterns
        if (typeof path === 'string' && path.includes('https://git.new/')) {
          console.warn('Patched path-to-regexp: Sanitizing problematic URL pattern:', path);
          // Replace the problematic pattern with a safe placeholder
          path = path.replace(/https:\/\/git\.new\/[^/]*/g, '/safe-path');
        }
        
        // Call the original function with the sanitized path
        return originalPathToRegexp(path, keys, options);
      };
    } catch (error) {
      console.error('Failed to patch path-to-regexp:', error);
    }
  }
  
  return module;
};

console.log('path-to-regexp patch applied');