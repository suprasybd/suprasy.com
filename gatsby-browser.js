import './src/styles/globals.css';
import React from 'react';
import { QueryProvider } from './src/components/providers/QueryProvider';

export const onClientEntry = () => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = 'https://embed.tawk.to/667d7627eaf3bd8d4d150266/1i1d1b2m5';
  script.charset = 'UTF-8';
  script.setAttribute('crossorigin', '*');
  document.body.appendChild(script);
};

export const wrapRootElement = ({ element }) => {
  return <QueryProvider>{element}</QueryProvider>;
};
