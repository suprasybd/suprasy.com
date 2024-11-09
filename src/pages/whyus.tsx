import Layout from '@/components/layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Link } from 'gatsby';
import {
  Shield,
  Globe2,
  Zap,
  Code2,
  Users,
  Palette,
  BarChart3,
  Clock,
  Rocket,
  Headphones,
} from 'lucide-react';

const WhySuprasyPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="-mx-4">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-3xl">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Why Leading Businesses <br />
              Choose Suprasy
            </h2>
            <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
              Join hundreds of successful businesses who trust Suprasy to power
              their online growth. Experience the perfect blend of power,
              simplicity, and innovation.
            </p>
          </div>
        </section>
      </div>

      {/* Key Benefits Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Speed & Performance */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Lightning Fast Performance
              </h3>
              <p className="text-gray-600">
                Built on cutting-edge technology with global CDN integration,
                ensuring your store loads instantly anywhere in the world.
                Experience sub-second page loads and seamless navigation.
              </p>
            </div>

            {/* Global Reach */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Globe2 className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Global Infrastructure
              </h3>
              <p className="text-gray-600">
                Powered by enterprise-grade cloud infrastructure with 99.9%
                uptime guarantee. Your store stays online and fast, even during
                high-traffic events and sales peaks.
              </p>
            </div>

            {/* Security */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Enterprise-Grade Security
              </h3>
              <p className="text-gray-600">
                Bank-level security with PCI compliance, automated backups, and
                24/7 monitoring. Your business and customer data are protected
                by industry-leading security measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth & Analytics Section */}
      <div className="-mx-4">
        <section className="py-20 bg-gray-50 rounded-3xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Built for Business Growth
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Every feature is designed to help you grow faster and smarter.
                  From advanced analytics to marketing tools, we provide
                  everything you need to scale your business.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Real-time Analytics
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Track performance, customer behavior, and sales metrics
                        in real-time
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Rocket className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Marketing Tools
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Built-in SEO optimization, social media integration, and
                        email marketing capabilities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Users className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Customer Insights
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Deep customer analytics and behavior tracking to
                        optimize your business
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-3xl transform rotate-3 opacity-10"></div>
                <StaticImage
                  src="../images/why/analytics-dashboard.jpg"
                  alt="Analytics Dashboard"
                  className="relative rounded-3xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Developer & Customization Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Flexible & Developer-Friendly
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Whether you're a business owner or developer, Suprasy provides the
              flexibility you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                React.js Support
              </h3>
              <p className="text-gray-600">
                Built specifically for React.js developers with modern tooling,
                components, and development workflows.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Customizable Themes
              </h3>
              <p className="text-gray-600">
                Choose from our collection of professional themes or create your
                own with our flexible theming system.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Quick Setup
              </h3>
              <p className="text-gray-600">
                Get your store up and running in minutes with our intuitive
                setup process and comprehensive documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Success Section */}
      <div className="-mx-4">
        <section className="py-20 bg-gray-50 rounded-3xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-3xl transform -rotate-3 opacity-10"></div>
                <StaticImage
                  src="../images/why/support-team.jpg"
                  alt="Support Team"
                  className="relative rounded-3xl shadow-xl"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Headphones className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    We're Here to Help You Succeed
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  Your success is our success. Our dedicated support team is
                  here to help you every step of the way, from setup to scaling
                  your business.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    24/7 Technical Support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Comprehensive Documentation
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Regular Platform Updates
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Call to Action */}
      <div className="-mx-4">
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-3xl mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Start Your Success Story Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the growing community of successful businesses powered by
              Suprasy. Start with our free plan and scale as you grow.
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
                className="inline-block bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-800 transition-colors"
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

export default WhySuprasyPage;
