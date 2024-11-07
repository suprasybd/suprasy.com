import React from 'react';
import { Shield, Zap, Globe2, Palette, BarChart3, Lock } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      desc: 'Built-in Cloudflare Turnstile protection, DDoS mitigation, and SSL encryption to keep your business secure 24/7.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast CDN',
      desc: 'Global content delivery network ensures blazing-fast page loads and optimal performance for customers worldwide.',
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Open Source Themes',
      desc: 'Access professional, customizable themes from our open-source collection. Modify and contribute back to the community.',
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Advanced Analytics',
      desc: "Real-time insights into your store's performance, customer behavior, and sales metrics to drive growth.",
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: 'Global Scale',
      desc: 'Infrastructure designed to handle millions of requests seamlessly. Scale your business without worrying about technical limits.',
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Secure Checkout',
      desc: 'PCI-compliant payment processing with fraud prevention to ensure safe and smooth transactions for your customers.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center mb-16">
          <div className="relative z-10">
            <h2 className="text-gray-800 text-3xl font-bold sm:text-4xl mb-4">
              Enterprise-Grade Ecommerce Platform
            </h2>
            <p className="text-lg text-gray-600">
              Scale your business with confidence using our secure, flexible,
              and powerful ecommerce solution
            </p>
          </div>
          <div
            className="absolute inset-0 max-w-xs mx-auto h-44 blur-[120px]"
            style={{
              background:
                'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)',
            }}
          ></div>
        </div>
        <div className="relative">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white relative p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-indigo-600">{item.icon}</div>
                </div>
                <h3 className="text-xl text-gray-800 font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
          <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-indigo-50 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        </div>
      </div>
    </section>
  );
};
