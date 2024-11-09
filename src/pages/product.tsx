import Layout from '@/components/layout/Layout';
import { Link } from 'gatsby';
import React from 'react';
import {
  Shield,
  Palette,
  BarChart3,
  Globe2,
  Zap,
  Users,
  Code2,
  Database,
  GitBranch,
  Lock,
  Wrench,
} from 'lucide-react';
import { StaticImage } from 'gatsby-plugin-image';

const ProductPage = () => {
  return (
    <Layout>
      <div className="bg-white my-10">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-3xl">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Your Business Success, <br />
              Our Technical Excellence
            </h2>
            <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
              A complete ecommerce solution that combines powerful business
              tools with developer-friendly features. Focus on growing your
              business while we handle the technology.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="https://dash.suprasy.com/register"
                className="inline-block bg-white text-indigo-600 py-3 px-8 rounded-full shadow-md hover:bg-indigo-50 transition-colors"
              >
                Start Free
              </Link>
              <Link
                to="/themes"
                className="inline-block bg-indigo-700 text-white py-3 px-8 rounded-full shadow-md hover:bg-indigo-800 transition-colors"
              >
                Explore Themes
              </Link>
            </div>
          </div>
        </section>

        {/* Business Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-12">
              Everything Your Business Needs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="flex flex-col items-start p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Enterprise Security
                </h3>
                <p className="text-gray-600">
                  Bank-grade security with PCI compliance, fraud prevention, and
                  24/7 monitoring to protect your business and customers.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Globe2 className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Global Reach
                </h3>
                <p className="text-gray-600">
                  Reach customers worldwide with our CDN-powered infrastructure,
                  ensuring fast loading times and reliable service globally.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Professional Themes
                </h3>
                <p className="text-gray-600">
                  Choose from our collection of beautiful, conversion-optimized
                  themes or customize your own to match your brand.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Business Analytics
                </h3>
                <p className="text-gray-600">
                  Make data-driven decisions with comprehensive analytics
                  covering sales, customer behavior, and inventory management.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Reliable Infrastructure
                </h3>
                <p className="text-gray-600">
                  Enterprise-grade hosting with automatic scaling, backups, and
                  99.9% uptime guarantee for your peace of mind.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Developer Ready
                </h3>
                <p className="text-gray-600">
                  Full React.js support with APIs and tools for custom
                  development when your business needs unique features.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Excellence Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Backed by Technical Excellence
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  While you focus on your business, our platform provides the
                  technical foundation you need to succeed online.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-600">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                    </div>
                    Cloud-native architecture
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                    </div>
                    React.js optimization
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                    </div>
                    API-first architecture
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-3xl transform -rotate-3"></div>
                <div className="relative bg-white p-6 rounded-3xl shadow-xl">
                  <pre className="text-sm text-gray-800 overflow-x-auto">
                    <code>{`// Example API Request
const response = await fetch('https://api.suprasy.com/v1/products', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Premium Widget',
    price: 29.99,
    inventory: 100
  })
});

const product = await response.json();`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-3xl">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Start Growing Your Business Today
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join successful businesses worldwide who trust Suprasy for their
              online growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="https://dash.suprasy.com/register"
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors"
              >
                Start Free
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold bg-indigo-700 text-white hover:bg-indigo-800 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductPage;
