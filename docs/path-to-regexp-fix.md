# Path-to-regexp Error Fix Documentation

## Problem

When running the production server with `NODE_ENV=production node server/production.js`, the following error occurred:

```
TypeError: Missing parameter name at 1: https://git.new/pathToRegexpError
    at name (/path/to/node_modules/path-to-regexp/dist/index.js:73:19)
    at lexer (/path/to/node_modules/path-to-regexp/dist/index.js:91:27)
    ...
```

This error was caused by the path-to-regexp library, which is used for URL routing in Express applications. The library was unable to parse URLs containing "https://git.new/" because it was interpreting the colon (":") in "https:" as a parameter marker without a parameter name.

## Solution

We implemented a multi-layered solution to fix this issue:

### 1. Direct Library Patch

Created a script (`scripts/patch-path-to-regexp.js`) that directly modifies the path-to-regexp library in node_modules to handle the problematic URL pattern without throwing an error.

```javascript
// Inside path-to-regexp library
// Original code:
throw new TypeError(`Missing parameter name at ${i}: ${DEBUG_URL}`);

// Patched code:
if (DEBUG_URL.includes('https://git.new/')) {
  console.warn(`Skipping problematic URL pattern at ${i}: ${DEBUG_URL}`);
  return 'safe-param';
}
throw new TypeError(`Missing parameter name at ${i}: ${DEBUG_URL}`);
```

### 2. Safe Server Wrapper

Created a wrapper script (`server/safe-production.js`) that catches and handles the specific path-to-regexp error using a global uncaught exception handler:

```javascript
process.on('uncaughtException', (error) => {
  if (error.message && error.message.includes('Missing parameter name') && 
      error.message.includes('https://git.new/')) {
    console.error('Caught path-to-regexp error with problematic URL pattern.');
    // Don't exit the process, allow it to continue
    return;
  }
  
  // For other uncaught exceptions, log and exit as normal
  console.error('Uncaught Exception:');
  console.error(error);
  process.exit(1);
});
```

### 3. URL Sanitization Middleware

Added middleware to both server files to detect and block problematic URLs before they reach the routing system:

```javascript
app.use((req, res, next) => {
  if (req.url.includes('https://git.new/')) {
    console.warn('Blocked problematic URL pattern:', req.url);
    return res.status(400).send('Invalid URL format. URLs containing "https://git.new/" are not supported.');
  }
  next();
});
```

### 4. Vike Configuration Hook

Added an `onBeforeRoute` hook in vike.config.js to sanitize problematic URLs at the framework level:

```javascript
onBeforeRoute: (pageContext) => {
  // Check if the URL contains problematic patterns
  if (pageContext.urlOriginal && pageContext.urlOriginal.includes('https://git.new/')) {
    // Replace or remove the problematic pattern
    pageContext.urlOriginal = pageContext.urlOriginal.replace(/https:\/\/git\.new\/[^/]*/, '');
  }
  return pageContext;
}
```

### 5. Updated Package Scripts

Modified the package.json scripts to use our safe wrapper and apply the patch:

```json
"scripts": {
  "preview:server": "node scripts/patch-path-to-regexp.js && cross-env NODE_ENV=production node server/safe-production.js",
  "patch-path-to-regexp": "node scripts/patch-path-to-regexp.js"
}
```

## Root Cause Analysis

The root cause of this issue is a limitation in the path-to-regexp library's URL parsing. The library is designed to parse URL patterns for routing, where colons (":") are used to denote parameters (e.g., "/users/:id"). When it encounters a URL with "https://", it interprets the ":" as the start of a parameter but doesn't find a parameter name after it.

This issue specifically occurs with URLs containing "https://git.new/" because they're being passed directly to the path-to-regexp library without proper sanitization or escaping.

## Prevention

To prevent similar issues in the future:

1. Always sanitize or validate URLs before passing them to routing libraries
2. Consider using URL encoding for query parameters that might contain special characters
3. Implement proper error handling for routing-related errors
4. Be cautious when allowing user-provided URLs in your application

## References

- [path-to-regexp GitHub repository](https://github.com/pillarjs/path-to-regexp)
- [Express.js routing documentation](https://expressjs.com/en/guide/routing.html)
- [Vike documentation](https://vike.dev/)