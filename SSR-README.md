# Server-Side Rendering (SSR) Implementation

This project implements Server-Side Rendering (SSR) using Vite and React. This README provides an overview of the implementation and instructions for development and deployment.

## Overview

The SSR implementation uses the following technologies:

- **vite-plugin-ssr**: A Vite plugin that enables SSR for React applications
- **Express**: A Node.js web server framework for handling server-side requests
- **React Router**: For client-side routing
- **Compression**: For compressing server responses

## Project Structure

The SSR implementation adds the following files to the project:

- `server.js`: The Express server that handles SSR
- `src/entry-client.tsx`: Client-side entry point for hydration
- `src/entry-server.tsx`: Server-side entry point for rendering
- `src/renderer/usePageContext.tsx`: Context provider for page data
- `src/renderer/_default.page.server.tsx`: Default server-side renderer
- `src/renderer/_default.page.client.tsx`: Default client-side renderer
- `src/pages/*.page.route.js`: Route definitions for each page
- `src/pages/*.page.server.js`: Server-side logic for each page
- `src/pages/*.page.client.js`: Client-side component exports for each page
- `src/lib/env.ts`: Helper functions for environment variables

## Development

To develop with SSR:

1. Run the development server:
   ```bash
   npm run dev
   ```

   This will start the Vite development server with HMR.

2. For testing SSR locally, build the project and start the server:
   ```bash
   npm run build:ssr
   npm run start
   ```

   This will build the project for SSR and start the Express server.

## Adding New Pages

To add a new page with SSR support:

1. Create your page component as usual in `src/pages/`

2. Create a route file:
   ```js
   // src/pages/YourPage.page.route.js
   export default '/your-route';
   ```

3. Create a server file for data fetching:
   ```js
   // src/pages/YourPage.page.server.js
   export async function onBeforeRender(pageContext) {
     // Fetch data here
     const pageProps = {
       // Your data
     };
     
     return {
       pageContext: {
         pageProps,
         title: 'Your Page Title',
         description: 'Your page description'
       }
     };
   }

   export function passToClient(pageContext) {
     return {
       pageProps: pageContext.pageProps,
       title: pageContext.title,
       description: pageContext.description
     };
   }
   ```

4. Create a client file to export your component:
   ```js
   // src/pages/YourPage.page.client.js
   import YourPage from './YourPage';
   export { YourPage as Page };
   ```

## Dynamic Routes

For dynamic routes (like `/blog/:slug`):

1. Create a route file with the parameter:
   ```js
   // src/pages/BlogPostPage.page.route.js
   export default '/blog/:slug';
   ```

2. Access the parameter in the server file:
   ```js
   // src/pages/BlogPostPage.page.server.js
   export async function onBeforeRender(pageContext) {
     const { slug } = pageContext.routeParams;
     // Fetch data using the slug
     // ...
   }
   ```

## Environment Variables

Use the helper functions in `src/lib/env.ts` to access environment variables in both server and client code:

```ts
import { getEnv, isServer, isBrowser } from '@/lib/env';

// Get an environment variable
const apiUrl = getEnv('VITE_API_URL', 'https://default-api.com');

// Check if running on server or browser
if (isServer()) {
  // Server-only code
}

if (isBrowser()) {
  // Browser-only code
}
```

## Production Deployment

To deploy the SSR application to production:

1. Build the project for production:
   ```bash
   npm run build:ssr
   ```

2. Start the server:
   ```bash
   npm run start
   ```

   Or use a process manager like PM2:
   ```bash
   pm2 start server.js
   ```

## Performance Considerations

- The SSR implementation includes compression for better performance
- Static assets are served by the Express server
- Consider implementing caching for frequently accessed pages
- Use code splitting to reduce bundle sizes