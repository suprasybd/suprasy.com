import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getHostName = () => {
  if (typeof window !== 'undefined') {
    return process.env.GATSBY_DASHBOARD_URL || window?.location?.hostname
      ? `http://dash.${window.location.hostname}`
      : undefined;
  }
};

export const DASHBOARD =
  process.env.GATSBY_DASHBOARD_URL || 'http://dash.localhost:3000';
