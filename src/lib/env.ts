// Helper function to get environment variables in both server and client environments

/**
 * Gets an environment variable with fallback to a default value
 * Works in both browser and server environments
 * 
 * @param key The environment variable key
 * @param defaultValue The default value if the environment variable is not found
 * @returns The environment variable value or the default value
 */
export const getEnv = (key: string, defaultValue: string = ''): string => {
  if (typeof window !== 'undefined') {
    // Browser environment
    return (import.meta.env[key] as string) || defaultValue;
  }
  // Server environment
  return process.env[key] || defaultValue;
};

/**
 * Checks if the code is running on the server
 * 
 * @returns true if running on the server, false if running in the browser
 */
export const isServer = (): boolean => {
  return typeof window === 'undefined';
};

/**
 * Checks if the code is running in the browser
 * 
 * @returns true if running in the browser, false if running on the server
 */
export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};