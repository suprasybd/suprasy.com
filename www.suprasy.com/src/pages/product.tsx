import Layout from '@/components/layout/Layout';
import { Link } from 'gatsby';
import React from 'react';

const ProductPage = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-indigo-400">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Build Your Dream Store Today
            </h2>
            <p className="mt-4 text-lg text-white">
              Create, customize, and manage your online store effortlessly with
              our powerful ecommerce builder.
            </p>
            <button className="mt-8 inline-block bg-white text-indigo-600 py-3 px-8 rounded-full shadow-md hover:bg-indigo-700 hover:text-white transition duration-300 ease-in-out">
              <Link to="https://dashboard.suprasy.com/register">
                Get Started
              </Link>
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-12">
              Why Choose Our Ecommerce Builder?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="flex flex-col items-center">
                <svg
                  className="w-12 h-12 text-indigo-600 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  User-Friendly Interface
                </h3>
                <p className="text-lg text-gray-600 text-center">
                  Our intuitive UI makes building and managing your store a
                  breeze, even for beginners.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  className="w-12 h-12 text-indigo-600 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Powerful Marketing Tools
                </h3>
                <p className="text-lg text-gray-600 text-center">
                  Drive traffic and boost sales with integrated marketing
                  features and advanced analytics.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  className="w-12 h-12 text-indigo-600 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Customizable Designs
                </h3>
                <p className="text-lg text-gray-600 text-center">
                  Choose from a variety of templates and customize them to match
                  your brand's unique style.
                </p>
              </div>
              {/* Additional Features */}
              <div className="flex flex-col items-center">
                <svg
                  className="w-12 h-12 text-indigo-600 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Secure Transactions
                </h3>
                <p className="text-lg text-gray-600 text-center">
                  Ensure safe and secure transactions for you and your customers
                  with our built-in security features.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  className="w-12 h-12 text-indigo-600 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 10a2 2 0 01-2 2h-3l-4 9V12H7l-4 8H3"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Mobile Responsive
                </h3>
                <p className="text-lg text-gray-600 text-center">
                  Your store will look stunning on all devices, providing a
                  seamless shopping experience.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  className="w-12 h-12 text-indigo-600 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12l7-7 7 7-7 7-7-7z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  24/7 Support
                </h3>
                <p className="text-lg text-gray-600 text-center">
                  Get help whenever you need it with our dedicated customer
                  support team available round the clock.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Testimonial 1 */}
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <p className="text-lg mb-4">
                  "I've tried other ecommerce platforms, but this one is by far
                  the best. The ease of use and flexibility are unmatched!"
                </p>
                <p className="text-sm font-semibold">
                  - Sarah Smith, Owner of Sarah's Boutique
                </p>
              </div>
              {/* Testimonial 2 */}
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <p className="text-lg mb-4">
                  "The marketing tools provided helped me increase my sales
                  dramatically. Highly recommend!"
                </p>
                <p className="text-sm font-semibold">
                  - Watson , Founder of Doe Electronics
                </p>
              </div>
              {/* Testimonial 3 */}
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <p className="text-lg mb-4">
                  "I love how customizable the designs are. I was able to create
                  a stunning online store in no time!"
                </p>
                <p className="text-sm font-semibold">
                  - Emily Johnson, CEO of Emily's Crafts
                </p>
              </div>
              {/* Additional Testimonials */}
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <p className="text-lg mb-4">
                  "This platform has revolutionized the way I do business
                  online. It's incredibly user-friendly and packed with
                  features."
                </p>
                <p className="text-sm font-semibold">
                  - Michael Brown, CEO of Brown's Gadgets
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <p className="text-lg mb-4">
                  "I've been using this ecommerce builder for years, and it just
                  keeps getting better. The support team is fantastic!"
                </p>
                <p className="text-sm font-semibold">
                  - Rachel Miller, Owner of Miller's Fashion
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <p className="text-lg mb-4">
                  "The templates provided are beautiful and easy to customize.
                  My online store looks professional and unique."
                </p>
                <p className="text-sm font-semibold">
                  - David Johnson, Founder of Johnson's Jewelry
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-indigo-400">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white mb-6">
              Sign up now and take your online business to new heights!
            </p>
            <button className="inline-block bg-white text-indigo-600 py-3 px-8 rounded-full shadow-md hover:bg-indigo-700 hover:text-white transition duration-300 ease-in-out">
              <Link to="https://dashboard.suprasy.com/register">
                Sign Up Now
              </Link>
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductPage;
