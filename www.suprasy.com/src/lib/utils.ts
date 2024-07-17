import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getHostName = () => {
  if (typeof window !== 'undefined') {
    return window?.location?.hostname || document?.location?.hostname;
  }
};

export const DASHBOARD = `http://dash.suprasy.com`;
