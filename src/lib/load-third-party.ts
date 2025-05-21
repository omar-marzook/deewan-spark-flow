/**
 * Utility for optimized loading of third-party scripts
 * This helps improve performance by deferring non-critical scripts
 */

interface ScriptOptions {
  async?: boolean;
  defer?: boolean;
  id?: string;
  onLoad?: () => void;
  dataset?: Record<string, string>;
}

/**
 * Loads a third-party script with performance optimizations
 * 
 * @param src The script URL to load
 * @param options Configuration options for the script
 * @returns A promise that resolves when the script is loaded
 */
export function loadThirdPartyScript(
  src: string,
  options: ScriptOptions = { defer: true }
): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if script already exists
    const existingScript = document.getElementById(
      options.id || `script-${src.replace(/[^\w]/g, '-')}`
    ) as HTMLScriptElement;

    if (existingScript) {
      // If script already exists and has loaded, resolve immediately
      if (existingScript.dataset.loaded === 'true') {
        resolve();
        return;
      }
      
      // If script exists but hasn't loaded, wait for it
      existingScript.addEventListener('load', () => resolve());
      existingScript.addEventListener('error', (e) => reject(e));
      return;
    }

    // Create new script element
    const script = document.createElement('script');
    script.src = src;
    
    // Set script attributes
    if (options.id) script.id = options.id;
    if (options.async) script.async = true;
    if (options.defer) script.defer = true;
    
    // Add custom data attributes
    if (options.dataset) {
      Object.entries(options.dataset).forEach(([key, value]) => {
        script.dataset[key] = value;
      });
    }
    
    // Set up load handlers
    script.addEventListener('load', () => {
      script.dataset.loaded = 'true';
      if (options.onLoad) options.onLoad();
      resolve();
    });
    
    script.addEventListener('error', (e) => {
      console.error(`Failed to load script: ${src}`, e);
      reject(e);
    });
    
    // Append script to document
    document.body.appendChild(script);
  });
}

/**
 * Example usage:
 * 
 * // In a component:
 * useEffect(() => {
 *   loadThirdPartyScript('https://analytics-url.com/script.js', {
 *     defer: true,
 *     id: 'analytics-script',
 *     onLoad: () => console.log('Analytics loaded')
 *   });
 * }, []);
 */