import './src/styles/globals.css';
import React from 'react';
import { QueryProvider } from './src/components/providers/QueryProvider';

export const onClientEntry = () => {};

export const wrapRootElement = ({ element }) => {
  return <QueryProvider>{element}</QueryProvider>;
};
