import { useState, useEffect } from 'react';

/**
 * Hook to persist a boolean flag in sessionStorage
 * @param key - The sessionStorage key
 * @param defaultValue - Default value if not set
 * @returns [value, setValue] tuple
 */
export function useSessionFlag(key: string, defaultValue: boolean = false): [boolean, (value: boolean) => void] {
  const [value, setValue] = useState<boolean>(() => {
    try {
      const stored = sessionStorage.getItem(key);
      return stored !== null ? stored === 'true' : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(key, String(value));
    } catch (error) {
      console.error('Failed to save to sessionStorage:', error);
    }
  }, [key, value]);

  return [value, setValue];
}
