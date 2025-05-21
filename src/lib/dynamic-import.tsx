import React, { Suspense, lazy, ComponentType } from 'react';

interface DynamicImportOptions {
  fallback?: React.ReactNode;
  errorComponent?: React.ComponentType<{ error: Error }>;
  onLoad?: () => void;
}

/**
 * Default loading component
 */
const DefaultLoading = () => (
  <div className="flex items-center justify-center p-4 min-h-[200px]">
    <div className="animate-pulse text-deewan-primary">Loading...</div>
  </div>
);

/**
 * Default error component
 */
const DefaultError = ({ error }: { error: Error }) => (
  <div className="p-4 border border-red-300 bg-red-50 text-red-700 rounded-md">
    <h3 className="font-bold mb-2">Error Loading Component</h3>
    <p>{error.message}</p>
  </div>
);

/**
 * Creates a dynamically imported component with Suspense
 * 
 * @param importFn Function that returns a dynamic import
 * @param options Configuration options
 * @returns A React component that dynamically imports the target component
 */
export function dynamicImport<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options: DynamicImportOptions = {}
): React.ComponentType<React.ComponentProps<T>> {
  const {
    fallback = <DefaultLoading />,
    errorComponent: ErrorComponent = DefaultError,
    onLoad
  } = options;

  const LazyComponent = lazy(() => {
    return importFn()
      .then((module) => {
        if (onLoad) {
          onLoad();
        }
        return module;
      })
      .catch((error) => {
        console.error('Error dynamically importing component:', error);
        // Re-throw to be caught by error boundary
        throw error;
      });
  });

  return (props: React.ComponentProps<T>) => (
    <Suspense fallback={fallback}>
      <ErrorBoundary ErrorComponent={ErrorComponent}>
        <LazyComponent {...props} />
      </ErrorBoundary>
    </Suspense>
  );
}

/**
 * Error boundary component for catching errors in lazy-loaded components
 */
class ErrorBoundary extends React.Component<{
  children: React.ReactNode;
  ErrorComponent: React.ComponentType<{ error: Error }>;
}, {
  hasError: boolean;
  error: Error | null;
}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error in dynamically imported component:', error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return <this.props.ErrorComponent error={this.state.error} />;
    }

    return this.props.children;
  }
}

/**
 * Example usage:
 * 
 * // Create a dynamically imported component
 * const DynamicComponent = dynamicImport(
 *   () => import('./HeavyComponent'),
 *   {
 *     fallback: <CustomLoadingSpinner />,
 *     onLoad: () => console.log('Component loaded')
 *   }
 * );
 * 
 * // Then use it like a regular component
 * <DynamicComponent prop1="value" prop2={123} />
 */