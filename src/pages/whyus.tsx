import Layout from '@/components/layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Link } from 'gatsby';
import { Shield, Github, Palette } from 'lucide-react';

const WhySuprasyPage = () => {
  return (
    <Layout>
      {/* Hero Section - Full width */}
      <div className="-mx-4">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-3xl">
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
      </div>

      {/* Section 1: Advanced Features */}
      <section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Advanced Features
            </h3>
            <p className="text-lg text-gray-600">
              Suprasy offers a wide range of advanced features to help you
              create a powerful and feature-rich online store. From customizable
              templates to robust marketing tools, we have everything you need
              to succeed.
            </p>
          </div>
          <div className="flex justify-center items-center ">
            <StaticImage
              src="../images/why/a.jpg"
              alt="Advanced Features"
              className="w-full max-w-md rounded-3xl"
            ></StaticImage>
          </div>
        </div>
      </section>

      {/* Section 2: Seamless Integration */}
      <div className="-mx-4">
        <section className="py-20 bg-gray-100 rounded-3xl">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex justify-center items-center">
                <StaticImage
                  src="../images/why/b.jpg"
                  alt="Advanced Features"
                  className="w-full max-w-md rounded-3xl"
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
      </div>

      {/* Section 3: Exceptional Support */}
      <section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Exceptional Support
            </h3>
            <p className="text-lg text-gray-600">
              At Suprasy, we pride ourselves on providing exceptional customer
              support. Our dedicated team is available 24/7 to assist you with
              any questions or issues you may encounter.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <StaticImage
              src="../images/why/c.jpg"
              alt="Advanced Features"
              className="w-full max-w-md rounded-3xl"
            ></StaticImage>
          </div>
        </div>
      </section>

      {/* Section 4: Secure Transactions */}
      <div className="-mx-4">
        <section className="py-20 bg-gray-100 rounded-3xl">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex justify-center items-center">
                <StaticImage
                  src="../images/why/d.jpg"
                  alt="Advanced Features"
                  className="w-full max-w-md rounded-3xl"
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
      </div>

      {/* Section 5: Mobile Responsiveness */}
      <section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Mobile Responsiveness
            </h3>
            <p className="text-lg text-gray-600">
              Ensure that your store looks stunning on all devices with
              Suprasy's mobile-responsive design. Your customers can enjoy a
              seamless shopping experience whether they're on a desktop, tablet,
              or smartphone.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <StaticImage
              src="../images/why/e.jpg"
              alt="Advanced Features"
              className="w-full max-w-md rounded-3xl"
            ></StaticImage>
          </div>
        </div>
      </section>

      {/* New Section: Security & Open Source */}
      <div className="-mx-4">
        <section className="py-20 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Built with Security & Openness in Mind
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We combine enterprise-grade security with open-source
                flexibility
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
                  protecting your forms and checkout process without
                  compromising user experience.
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
                  contribute your own. Built by the community, for the
                  community.
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
                  Easily customize any theme to match your brand identity with
                  our intuitive theme editor and flexible design system.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* New Call to Action Section */}
      <div className="-mx-4">
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-3xl mt-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Ready to Build Your Dream Store?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of successful businesses powered by Suprasy. Start
              your journey today with our secure, flexible, and powerful
              ecommerce platform.
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
      </div>
    </Layout>
  );
};

export default WhySuprasyPage;
