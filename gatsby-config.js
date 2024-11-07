module.exports = {
  siteMetadata: {
    title: 'Suprasy - Professional Ecommerce Platform',
    description:
      'Create your professional ecommerce store with Suprasy. Enterprise-grade features, open-source themes, and global CDN.',
    siteUrl: 'https://suprasy.com',
    image: '/og-image.jpg',
    twitterUsername: '@suprasy',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://suprasy.com',
        sitemap: 'https://suprasy.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Suprasy - Professional Ecommerce Platform',
        short_name: 'Suprasy',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#4f46e5',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    // ... other existing plugins
  ],
};
