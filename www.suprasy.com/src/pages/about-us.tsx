import Layout from '@/components/layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div>
        <div className="p-6 bg-gray-100 text-gray-800">
          <h1 className="text-2xl font-bold mb-4">About Us</h1>
          <p className="mb-4">
            Welcome to Suprasy, your all-in-one ecommerce website builder
            designed to help businesses launch their online stores with ease. We
            provide a seamless platform with pre-designed themes and instant
            digital delivery, making it simple for you to sell products or
            services in no time.
          </p>

          <p className="mb-4">
            Our mission is to empower entrepreneurs and business owners with the
            tools they need to build and grow their online presence, without the
            hassle of complex setup processes. Whether you're selling physical
            products or digital services, Suprasy offers a user-friendly
            interface and powerful features that cater to all your ecommerce
            needs.
          </p>

          <h2 className="text-xl font-semibold mb-2">Founder</h2>
          <p className="mb-4">
            Suprasy was founded by <strong>M Alvee</strong>, a passionate
            entrepreneur with a vision to simplify the ecommerce experience for
            businesses of all sizes. With a deep understanding of technology and
            business, M Alvee has created a platform that combines ease of use
            with advanced features, enabling businesses to thrive in the digital
            world.
          </p>

          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="mb-4">
            At Suprasy, we believe in the power of simplicity. Our goal is to
            provide businesses with the tools they need to succeed, without the
            overwhelming complexity of traditional ecommerce platforms. We are
            committed to continuous innovation and support, ensuring our
            customers have everything they need to build, manage, and grow their
            online stores.
          </p>

          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p>
            If you have any questions or would like to learn more about how
            Suprasy can help your business, please feel free to reach out to us
            at{' '}
            <a
              href="mailto:support@suprasy.com"
              className="text-blue-500 hover:underline"
            >
              support@suprasy.com
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
