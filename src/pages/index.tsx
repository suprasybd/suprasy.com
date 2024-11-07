import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Hero from '@/components/Home/Hero';
import Layout from '@/components/layout/Layout';
import { Features } from '@/components/Home/Features';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { Shield, Github, Palette, ArrowRight } from 'lucide-react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>
          Suprasy - Build Your Professional Ecommerce Store | Open Source
          Platform
        </title>
        <meta
          name="description"
          content="Create your professional ecommerce store with Suprasy. Enterprise-grade features, open-source themes, and global CDN. Start free and scale your online business."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://suprasy.com/" />
        <meta
          property="og:title"
          content="Suprasy - Professional Ecommerce Platform"
        />
        <meta
          property="og:description"
          content="Build your dream store with Suprasy. Enterprise security, open-source flexibility, and powerful ecommerce features."
        />
        <meta
          property="og:image"
          content="https://static.suprasy.com/logo-nobg.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://suprasy.com/" />
        <meta
          name="twitter:title"
          content="Suprasy - Professional Ecommerce Platform"
        />
        <meta
          name="twitter:description"
          content="Build your dream store with Suprasy. Enterprise security, open-source flexibility, and powerful ecommerce features."
        />
        <meta
          name="twitter:image"
          content="https://static.suprasy.com/logo-nobg.png"
        />

        {/* Additional SEO tags */}
        <meta
          name="keywords"
          content="ecommerce platform, online store builder, open source ecommerce, professional ecommerce, secure ecommerce, cloudflare turnstile, custom themes"
        />
        <link rel="canonical" href="https://suprasy.com/" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Suprasy",
              "applicationCategory": "ECommerce Platform",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "image": "https://static.suprasy.com/logo-nobg.png",
              "description": "Professional ecommerce platform with enterprise-grade features, open-source themes, and global CDN delivery.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              }
            }
          `}
        </script>
      </Helmet>

      <Hero />

      <div className="py-20">
        <ContainerScroll titleComponent={<ContainerScrollTitle />}>
          <div className="max-w-7xl mx-auto px-4">
            <img
              src="https://static.suprasy.com/scroll-dashboard.png"
              alt="Dashboard Preview"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </ContainerScroll>
      </div>

      <Features />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Built with Security & Openness in Mind
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We combine enterprise-grade security with open-source flexibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Cloudflare Turnstile
              </h3>
              <p className="text-gray-600">
                Enhanced security with Cloudflare Turnstile integration,
                protecting your forms and checkout process without compromising
                user experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Github className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Open Source Themes
              </h3>
              <p className="text-gray-600">
                Access our growing collection of open-source themes or
                contribute your own. Built by the community, for the community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Theme Customization
              </h3>
              <p className="text-gray-600">
                Easily customize any theme to match your brand identity with our
                intuitive theme editor and flexible design system.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/themes"
              className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-500"
            >
              Explore our theme collection
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Open Source Themes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jump-start your store with our collection of open-source themes.
              Use them as-is or as a foundation for your custom design.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 max-w-3xl w-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Github className="w-8 h-8 text-gray-900" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Suprasy Theme Collection
                  </h3>
                </div>
                <a
                  href="https://github.com/suprasybd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  View Repository
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>

              <p className="text-gray-600 mb-6">
                Access our growing collection of professionally designed themes.
                Perfect for getting your store up and running quickly or
                learning best practices for theme development.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/suprasybd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gray-900 hover:bg-gray-800"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Star on GitHub
                </a>
                <Link
                  to="/themes"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-base font-medium rounded-full text-gray-900 bg-white hover:bg-gray-50"
                >
                  Browse Themes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-3xl mx-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Ready to Build Your Dream Store?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful businesses powered by Suprasy. Start
            your journey today with our secure, flexible, and powerful ecommerce
            platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="https://dash.suprasy.com/register"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              to="/themes"
              className="inline-block bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-800 transition-colors"
            >
              Explore Themes
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const ContainerScrollTitle = () => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-2xl font-medium text-gray-600 mb-4">
        Ecommerce at your fingertips
      </h1>
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
        Modern dashboard to manage your business
      </h1>
    </div>
  );
};

export default IndexPage;
