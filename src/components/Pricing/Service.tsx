import React from 'react';

interface ServiceProps {
  setIsContactModalOpen: (isOpen: boolean) => void;
}

const Service: React.FC<ServiceProps> = ({ setIsContactModalOpen }) => {
  return (
    <div className="mt-24">
      <div className="text-center relative">
        <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
          Professional Services
        </span>
        <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
          Additional Services
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">
          Enhance your store with our professional services tailored to your
          needs
        </p>
      </div>

      <div className="mt-16 px-4 md:px-6 lg:px-8 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8">
        {/* Next.js Migration Card */}
        <div className="relative p-8 bg-white border-2 border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative flex-1">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-indigo-600"
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
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Next.js Migration
            </h3>
            <div className="text-gray-600 space-y-4">
              <p className="text-lg">
                Transform your frontend with Next.js for superior performance
                and SEO
              </p>
              <ul className="space-y-4 mt-6">
                <ServicePoint>
                  Enhanced SEO performance & visibility
                </ServicePoint>
                <ServicePoint>Lightning-fast loading speeds</ServicePoint>
                <ServicePoint>
                  Improved user experience & conversion
                </ServicePoint>
              </ul>
            </div>
          </div>

          <div className="relative mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-baseline mb-4">
              <p className="text-3xl font-bold text-gray-900">5,000 BDT</p>
              <p className="ml-2 text-gray-600">One-time fee</p>
            </div>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="w-full inline-flex justify-center items-center py-3 px-6 border border-transparent rounded-xl text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get Started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Custom Design Card */}
        <div className="relative p-8 bg-white border-2 border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative flex-1">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Custom Design Service
            </h3>
            <div className="text-gray-600 space-y-4">
              <p className="text-lg">
                Stand out with professionally crafted designs tailored to your
                brand
              </p>
              <ul className="space-y-4 mt-6">
                <ServicePoint>Bespoke theme development</ServicePoint>
                <ServicePoint>Regular design refreshes</ServicePoint>
                <ServicePoint>Dedicated design support</ServicePoint>
              </ul>
            </div>
          </div>

          <div className="relative mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-baseline mb-4">
              <p className="text-3xl font-bold text-gray-900">Custom</p>
              <p className="ml-2 text-gray-600">Project-based pricing</p>
            </div>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="w-full inline-flex justify-center items-center py-3 px-6 border border-transparent rounded-xl text-base font-medium text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Contact Us
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicePoint: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <li className="flex items-center">
      <svg
        className="h-5 w-5 text-green-500 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      {children}
    </li>
  );
};

export default Service;
