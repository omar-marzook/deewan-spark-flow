# Deewan

Deewan is a modern web application for Deewan platform, built with React, TypeScript, and Vike for server-side rendering.

## Project Overview

Deewan is a customer experience platform that offers various communication products including:
- Omnichannel Chat
- WhatsApp API
- Chatbots
- SMS API
- Email API
- Voice API
- Push Notifications
- IVR
- Multi-factor Authentication

## Technologies Used

This project is built with:
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Vike](https://vike.dev/) - Server-side rendering framework
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI components
- [Express](https://expressjs.com/) - Node.js web application framework

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or [Bun](https://bun.sh/)

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd deewan-spark-flow
   ```

2. Install dependencies:
   ```sh
   npm install
   # or with Bun
   bun install
   ```

3. Environment Setup:
   Create a `.env` file in the root directory with the necessary environment variables. Example:
   ```
   PORT=3000
   NODE_ENV=development
   # Add any other required environment variables
   ```

## Running the Application

### Development Mode

Start the development server with hot reloading:
```sh
npm run dev
```

The application will be available at http://localhost:3000 (or the port specified in your .env file).

### Production Mode

1. Build the application:
   ```sh
   npm run build
   ```

2. Start the production server:
   ```sh
   npm run preview:server
   ```

## Deployment

### Build for Production

```sh
npm run build
```

This will create optimized production files in the `dist` directory.

### Server Deployment

The application uses an Express server for production. To deploy:

1. Build the application as described above
2. Deploy the following to your server:
   - `dist/` directory
   - `server/` directory
   - `package.json`
   - `.env` file (with production settings)

3. Install production dependencies on your server:
   ```sh
   npm install --production
   ```

4. Start the server:
   ```sh
   NODE_ENV=production node server/production.js
   ```

## Performance Optimization

The project includes several performance optimization features:

### Image Optimization

Optimize images using the built-in script:
```sh
npm run optimize-images
```

This converts images to WebP format and creates responsive sizes.

### Other Optimizations

- Lazy loading for below-the-fold content
- Code splitting for better load times
- Service worker for caching static assets
- Build optimizations for production

For more details on performance optimizations, see [PERFORMANCE-OPTIMIZATION.md](./PERFORMANCE-OPTIMIZATION.md).

## Scripts

- `npm run dev` - Start development server
- `npm run dev:server` - Start development server with SSR
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally
- `npm run preview:server` - Preview production build with SSR
- `npm run optimize-images` - Optimize images
- `npm run setup-performance` - Set up performance optimizations

## Project Structure

- `/public` - Static assets
- `/server` - Server-side code
- `/src` - Source code
  - `/components` - React components
  - `/pages` - Page components
  - `/renderer` - Vike renderer
  - `/lib` - Utility functions
  - `/hooks` - Custom React hooks
  - `/blog-posts` - Markdown blog posts
  - `/data` - Data files

## License

[Specify license information]
