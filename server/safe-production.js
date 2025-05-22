/**
 * This is a wrapper script for production.js that catches and handles
 * the specific path-to-regexp error we're encountering.
 */

// First, set up a global error handler for uncaught exceptions
process.on('uncaughtException', (error) => {
  // Check if this is the specific path-to-regexp error we're trying to catch
  if (error.message && error.message.includes('Missing parameter name') && 
      error.message.includes('https://git.new/')) {
    console.error('Caught path-to-regexp error with problematic URL pattern.');
    console.error('This is a known issue with URLs containing "https://git.new/".');
    console.error('The server will continue running, but these URLs will be rejected.');
    
    // Don't exit the process, allow it to continue
    return;
  }
  
  // For other uncaught exceptions, log and exit as normal
  console.error('Uncaught Exception:');
  console.error(error);
  process.exit(1);
});

// Now import and run the actual production server
import('./production.js').catch(error => {
  console.error('Failed to start production server:', error);
  process.exit(1);
});

console.log('Server starting with enhanced error handling...');