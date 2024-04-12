import Layout from '@/components/layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const WhySuprasyPage = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-indigo-400">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Why Choose Suprasy?
            </h2>
            <p className="mt-4 text-lg text-white">
              Discover the reasons why Suprasy is the best choice for your
              ecommerce needs.
            </p>
          </div>
        </section>

        {/* Section 1: Advanced Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  Advanced Features
                </h3>
                <p className="text-lg text-gray-600">
                  Suprasy offers a wide range of advanced features to help you
                  create a powerful and feature-rich online store. From
                  customizable templates to robust marketing tools, we have
                  everything you need to succeed.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <StaticImage
                  src="../images/why/a.jpg"
                  alt="Advanced Features"
                  className="w-full max-w-md"
                ></StaticImage>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Seamless Integration */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex justify-center items-center">
                <StaticImage
                  src="../images/why/b.jpg"
                  alt="Advanced Features"
                  className="w-full max-w-md"
                ></StaticImage>
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  Seamless Integration
                </h3>
                <p className="text-lg text-gray-600">
                  Suprasy seamlessly integrates with popular third-party
                  applications and services, allowing you to expand the
                  functionality of your store and streamline your business
                  operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Exceptional Support */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  Exceptional Support
                </h3>
                <p className="text-lg text-gray-600">
                  At Suprasy, we pride ourselves on providing exceptional
                  customer support. Our dedicated team is available 24/7 to
                  assist you with any questions or issues you may encounter.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <StaticImage
                  src="../images/why/c.jpg"
                  alt="Advanced Features"
                  className="w-full max-w-md"
                ></StaticImage>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Secure Transactions */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex justify-center items-center">
                <StaticImage
                  src="../images/why/d.jpg"
                  alt="Advanced Features"
                  className="w-full max-w-md"
                ></StaticImage>
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  Secure Transactions
                </h3>
                <p className="text-lg text-gray-600">
                  With Suprasy, you can rest assured that your transactions are
                  safe and secure. We employ the latest encryption technologies
                  to protect your customers' sensitive information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Mobile Responsiveness */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  Mobile Responsiveness
                </h3>
                <p className="text-lg text-gray-600">
                  Ensure that your store looks stunning on all devices with
                  Suprasy's mobile-responsive design. Your customers can enjoy a
                  seamless shopping experience whether they're on a desktop,
                  tablet, or smartphone.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <StaticImage
                  src="../images/why/e.jpg"
                  alt="Advanced Features"
                  className="w-full max-w-md"
                ></StaticImage>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WhySuprasyPage;
