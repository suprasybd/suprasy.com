import axios from 'axios';
import config from '../config';

export const ApiClient = axios.create({
  baseURL: config.api.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
