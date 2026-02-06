/**
 * Site configuration for public URL and metadata
 * 
 * This configuration is used for canonical URLs and social/share metadata.
 * The actual browser address is controlled by deployment settings (canister URL or custom domain).
 */

/**
 * Get the current browser host (protocol + hostname + port if non-standard)
 * This is used as a fallback when VITE_PUBLIC_SITE_URL is not explicitly set
 */
function getBrowserHost(): string {
  if (typeof window === 'undefined') {
    return 'localhost:3000'; // SSR fallback
  }
  
  const protocol = window.location.protocol;
  const host = window.location.host;
  return `${protocol}//${host}`;
}

/**
 * Get the public site URL
 * Prefers VITE_PUBLIC_SITE_URL when explicitly set, otherwise uses the current browser host
 */
function getPublicSiteUrl(): string {
  const envUrl = import.meta.env.VITE_PUBLIC_SITE_URL;
  
  // If explicitly set in environment, use it
  if (envUrl && envUrl.trim() !== '') {
    return envUrl.trim();
  }
  
  // Otherwise, detect from browser
  return getBrowserHost();
}

/**
 * Normalize the site URL for use in metadata
 * Ensures proper formatting with protocol
 */
export function getSiteUrl(): string {
  const url = getPublicSiteUrl();
  
  // If it already has a protocol, return as-is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url.replace(/\/$/, '');
  }
  
  // Otherwise, add https://
  return `https://${url.replace(/\/$/, '')}`;
}

/**
 * Get the full canonical URL for a given path
 * @param path - Optional path to append (e.g., '/about')
 */
export function getCanonicalUrl(path: string = ''): string {
  const baseUrl = getSiteUrl();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

/**
 * Get just the host portion (without protocol) for display purposes
 */
export function getDisplayHost(): string {
  if (typeof window === 'undefined') {
    return 'localhost:3000';
  }
  return window.location.host;
}

export const SITE_CONFIG = {
  name: 'ClashRoyaleHub',
  url: getSiteUrl(),
  description: 'Your trusted resource for Clash Royale guides, strategies, and official game access',
} as const;
