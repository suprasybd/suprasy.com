import Layout from '@/components/layout/Layout';
import { Link } from 'gatsby';
import React from 'react';
import { Shield, Palette, BarChart3, Globe2, Zap, Users } from 'lucide-react';

const ProductPage = () => {
  return (
    <Layout>
      <div className="bg-white my-10">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-3xl">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Enterprise-Grade Ecommerce Platform
            </h2>
            <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
              Build and scale your online business with our secure, flexible,
              and powerful ecommerce solution.
            </p>
            <Link
              to="https://dash.suprasy.com/register"
              className="mt-8 inline-block bg-white text-indigo-600 py-3 px-8 rounded-full shadow-md hover:bg-indigo-50 transition-colors"
            >
              Start Free
            </Link>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-12">
              Enterprise Features for Modern Commerce
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="flex flex-col items-start p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Advanced Security
                </h3>
                <p className="text-gray-600">
                  Enterprise-grade security with Cloudflare Turnstile
                  integration, DDoS protection, and SSL encryption.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Customizable Themes
                </h3>
                <p className="text-gray-600">
                  Access our open-source theme system with professional
                  templates and full customization capabilities.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Analytics & Insights
                </h3>
                <p className="text-gray-600">
                  Comprehensive analytics dashboard with real-time data and
                  actionable insights for growth.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Globe2 className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Global CDN
                </h3>
                <p className="text-gray-600">
                  Lightning-fast content delivery through our global CDN network
                  for optimal performance worldwide.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  High Performance
                </h3>
                <p className="text-gray-600">
                  Optimized infrastructure handling millions of requests with
                  automatic scaling and load balancing.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  24/7 Expert Support
                </h3>
                <p className="text-gray-600">
                  Dedicated support team available around the clock to ensure
                  your business runs smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-3xl">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join leading businesses using Suprasy to power their online
              commerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="https://dash.suprasy.com/register"
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors"
              >
                Start Free
              </Link>
              <Link
                to="/contact"
                className="inline-block bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-800 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductPage;
