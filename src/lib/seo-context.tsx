import React, { createContext, useContext, ReactNode, useCallback } from 'react';

export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  schema?: any;
  additionalHead?: string;
  gtmId?: string; // Google Tag Manager ID
}

interface SEOContextProps {
  seoData: SEOData;
  updateSEO: (data: Partial<SEOData>) => void;
}

const SEOContext = createContext<SEOContextProps | undefined>(undefined);

export const SEOProvider: React.FC<{
  children: ReactNode;
  initialData: SEOData;
}> = ({ children, initialData }) => {
  const [seoData, setSEOData] = React.useState<SEOData>(initialData);

  // Use useCallback to ensure updateSEO doesn't change on every render
  const updateSEO = useCallback((data: Partial<SEOData>) => {
    setSEOData(prev => ({ ...prev, ...data }));
  }, []);

  return (
    <SEOContext.Provider value={{ seoData, updateSEO }}>
      {children}
    </SEOContext.Provider>
  );
};

export const useSEO = () => {
  const context = useContext(SEOContext);
  if (!context) {
    throw new Error('useSEO must be used within a SEOProvider');
  }
  return context;
};