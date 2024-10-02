import Layout from '@/components/layout/Layout';
import FaqPricing from '@/components/Pricing/Faq';
import { useHostname } from '../hooks/HostnameHook';
import React from 'react';

const PricingPage = () => {
  const [hostName] = useHostname();
  return (
    <Layout>
      <div className="mb-52">
        <div>
          <h2 className="text-3xl font-bold tracki text-center mt-12 sm:text-5xl ">
            Pricing
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
            Choose a plan that suits your online store's needs.
          </p>
        </div>
        <div className="mt-10 container space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="relative p-8  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold ">Startup Plan</h3>
              <p className="mt-4 flex items-baseline ">
                <span className="text-5xl font-extrabold tracking-tight">
                  BDT 500
                </span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <b>for each website/store</b>
              <p className="mt-6 ">
                Perfect for businesses having medium to high traffic.
                <u>
                  <b>Sign up is free,</b> you can create one store for 1 month
                  trial period.
                </u>
                <b>You can create multiple stores from a single account.</b>
              </p>
              <ul role="list" className="mt-6 space-y-6">
                <PricingPoint>
                  Unlimited Products + Unlimited Sales
                </PricingPoint>
                <PricingPoint>Unlimited Customers</PricingPoint>
                <PricingPoint>Custom Domain Integration</PricingPoint>
                <PricingPoint>Free Subdomain</PricingPoint>

                <PricingPoint>Free Suprasy Email/Mailing System</PricingPoint>
                <PricingPoint>Cloudflare Turnstile Integration</PricingPoint>
                <PricingPoint>Premium Support</PricingPoint>
              </ul>
            </div>
            {hostName && (
              <a
                className="bg-emerald-500 text-white  hover:bg-emerald-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                href={`${hostName}/register`}
              >
                Sign Up For Free (One Month Trial)
              </a>
            )}
          </div>
          <div className="relative p-8  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold ">Enterprise Plan</h3>
              <p className="mt-4 flex items-baseline ">
                <span className="text-5xl font-extrabold tracking-tight">
                  Custom
                </span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <b>for each website/store</b>
              <p className="mt-6 ">
                <b>You are more then a startup!,</b> It's time to be our
                enterprise member, please contact us for moving into enterprise.
              </p>
              <ul role="list" className="mt-6 space-y-6">
                <PricingPoint> All Startup Features</PricingPoint>
                <PricingPoint> Developer Support</PricingPoint>
                <PricingPoint>Priority Call Support (24/7)</PricingPoint>
              </ul>
            </div>
            {/* <a
              className="bg-emerald-500 text-white  hover:bg-emerald-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
              href="https://dash.suprasy.com/register"
            >
              Contact Us
            </a> */}
          </div>
        </div>

        {/* faq */}
        <FaqPricing />
      </div>
    </Layout>
  );
};

const PricingPoint: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <li className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="flex-shrink-0 w-6 h-6 text-emerald-500"
        aria-hidden="true"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span className="ml-3 ">{children}</span>
    </li>
  );
};

export default PricingPage;
