import { createContext, useContext } from 'react';

// Create a context to hold the page context
const PageContext = createContext<any>(undefined);

// Provider component to make page context available to all components
export function PageContextProvider({ pageContext, children }: { pageContext: any, children: React.ReactNode }) {
  return (
    <PageContext.Provider value={pageContext}>
      {children}
    </PageContext.Provider>
  );
}

// Hook to access the page context
export function usePageContext() {
  const pageContext = useContext(PageContext);
  if (!pageContext) throw new Error('usePageContext must be used within PageContextProvider');
  return pageContext;
}