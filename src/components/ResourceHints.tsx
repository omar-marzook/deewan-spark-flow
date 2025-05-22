import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * Common third-party domains that should be preconnected
 * Tailored specifically for Deewan's current setup
 */
const COMMON_DOMAINS = [
  // Google Tag Manager
  { domain: 'https://www.googletagmanager.com', preconnect: true, dnsPrefetch: true },
  
  // Commonly used third-party services that might be loaded through GTM
  { domain: 'https://www.google-analytics.com', dnsPrefetch: true },
  { domain: 'https://www.googleadservices.com', dnsPrefetch: true },
  { domain: 'https://www.google.com', dnsPrefetch: true },
];

interface ResourceHintsProps {
  /**
   * Additional domains to include beyond the common ones
   */
  additionalDomains?: Array<{
    domain: string;
    preconnect?: boolean;
    dnsPrefetch?: boolean;
  }>;
}

/**
 * ResourceHints component for optimizing third-party resource loading
 * Adds preconnect and dns-prefetch resource hints to improve performance
 * 
 * This component is specifically tailored for Deewan's current setup,
 * focusing on Google Tag Manager and related services.
 */
const ResourceHints: React.FC<ResourceHintsProps> = ({ additionalDomains = [] }) => {
  // Combine common domains with additional domains
  const domains = [...COMMON_DOMAINS, ...additionalDomains];
  
  return (
    <Helmet>
      {domains.map(({ domain, preconnect, dnsPrefetch }) => (
        <React.Fragment key={domain}>
          {preconnect && (
            <link rel="preconnect" href={domain} crossOrigin="anonymous" />
          )}
          {dnsPrefetch && <link rel="dns-prefetch" href={domain} />}
        </React.Fragment>
      ))}
    </Helmet>
  );
};

export default ResourceHints;