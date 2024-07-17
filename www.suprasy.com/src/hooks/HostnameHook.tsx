import { getHostName } from '@/lib/utils';
import { useEffect, useState } from 'react';

export const useHostname = () => {
  const [hostName, setHostName] = useState<string>('');

  useEffect(() => {
    const hName = getHostName();
    if (hName) {
      setHostName(`http://dash.${hName}`);
    }
  }, []);
  return [hostName];
};
