const config = {
  api: {
    baseURL: process.env.GATSBY_API_URL || 'http://localhost:3000',
  },
  dashboard: {
    baseURL: process.env.GATSBY_DASHBOARD_URL || 'http://dash.localhost:3000',
  },
};

export default config;
