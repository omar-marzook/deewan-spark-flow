import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="Page Not Found | Deewan"
        description="The page you are looking for does not exist. Return to the Deewan homepage."
        canonical="/404"
      />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4 py-16">
          <h1 className="text-6xl font-bold text-deewan-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-deewan-dark mb-4">Page Not Found</h2>
          <p className="text-lg text-deewan-gray mb-8">The page you are looking for doesn't exist or has been moved.</p>
          <a 
            href="/" 
            className="inline-flex items-center justify-center rounded-md bg-deewan-primary px-6 py-3 text-white hover:bg-deewan-primary/90 transition-colors"
          >
            Return to Home
          </a>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
