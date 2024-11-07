import Layout from '@/components/layout/Layout';
import FaqPricing from '@/components/Pricing/Faq';
import { useHostname } from '../hooks/HostnameHook';
import React from 'react';
import { usePlans } from '../hooks/usePlans';
import { Plan } from '../types/plan';

const PricingPage = () => {
  const [hostName] = useHostname();
  const { data: plansResponse, isLoading, error } = usePlans();

  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[60vh]">
          Loading...
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[60vh] text-red-500">
          Error loading plans. Please try again later.
        </div>
      </Layout>
    );
  }

  const plans = plansResponse?.Data || [];

  return (
    <Layout>
      <div className="mb-52">
        <div>
          <h2 className="text-3xl font-bold tracki text-center mt-12 sm:text-5xl">
            Pricing
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center">
            Choose a plan that suits your online store's needs.
          </p>
          <p className="max-w-2xl mx-auto mt-4 text-sm text-center text-gray-600 bg-gray-50 p-4 rounded-lg">
            We offer a generous free plan with core features because we believe
            in helping businesses get started. If you find value in our
            platform, please consider supporting our mission by upgrading to a
            paid plan to help us continue providing and improving these
            services.
          </p>
        </div>
        <div className="mt-10 px-4 md:px-6 lg:px-8 max-w-[1400px] mx-auto space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6">
          {plans.map((plan) => (
            <PricingCard key={plan.Id} plan={plan} hostName={hostName} />
          ))}
        </div>

        {/* faq */}
        <FaqPricing />
      </div>
    </Layout>
  );
};

interface PricingCardProps {
  plan: Plan;
  hostName?: string;
}

interface PlanInfo {
  description: string;
  highlight: string;
  recommended: boolean;
}

const PLAN_INFO: Record<string, PlanInfo> = {
  free: {
    description:
      'Perfect for small businesses just starting their online journey. Try all basic features free.',
    highlight: 'Best Free Plan',
    recommended: false,
  },
  starter: {
    description:
      'Great for businesses looking to expand their online presence with additional features.',
    highlight: 'Great Value',
    recommended: true,
  },
  pro: {
    description:
      'Ideal for growing businesses ready to scale their online presence with advanced features.',
    highlight: 'Most Popular Choice',
    recommended: false,
  },
  enterprise: {
    description:
      'Custom solutions for large-scale businesses with high-volume traffic and specific needs.',
    highlight: 'Custom Enterprise Solution',
    recommended: false,
  },
};

const PricingCard: React.FC<PricingCardProps> = ({ plan, hostName }) => {
  const features: string[] = JSON.parse(plan.Features);
  const isEnterprise = plan.Name === 'enterprise';

  const planInfo: PlanInfo = PLAN_INFO[plan.Name.toLowerCase()] || {
    description: 'Contact us to learn more about this plan.',
    highlight: 'Custom Plan',
    recommended: false,
  };

  return (
    <div
      className={`relative p-8 border ${
        planInfo.recommended
          ? 'border-emerald-500 ring-2 ring-emerald-500'
          : 'border-gray-200'
      } rounded-2xl shadow-sm flex flex-col`}
    >
      {planInfo.recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Recommended
          </span>
        </div>
      )}
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold capitalize">
              {plan.Name} Plan
            </h3>
            <p className="text-sm text-gray-500 mt-1">{planInfo.description}</p>
          </div>
          {planInfo.highlight && (
            <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
              {planInfo.highlight}
            </span>
          )}
        </div>

        <div className="mt-4">
          <p className="flex items-baseline">
            <span className="text-5xl font-extrabold tracking-tight">
              {plan.MonthlyPrice === 0 ? 'Free' : `৳${plan.MonthlyPrice}`}
            </span>
            {plan.MonthlyPrice > 0 && (
              <span className="ml-1 text-xl font-semibold text-gray-500">
                /month
              </span>
            )}
          </p>
          <p className="text-sm text-gray-500 mt-1">for each website/store</p>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <h4 className="text-sm font-semibold text-gray-900 tracking-wide uppercase mb-4">
            What's included
          </h4>
          <ul role="list" className="space-y-4">
            {features.map((feature, index) => (
              <PricingPoint key={index}>{feature}</PricingPoint>
            ))}
          </ul>
        </div>
      </div>

      {hostName && !isEnterprise && (
        <a
          className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium transition-colors
            ${
              planInfo.recommended
                ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border-gray-200'
            }`}
          href={`${hostName}/register`}
        >
          {plan.MonthlyPrice === 0 ? 'Start Free' : 'Get Started'}
        </a>
      )}
      {isEnterprise && (
        <a
          className="mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium bg-emerald-500 text-white hover:bg-emerald-600"
          href="mailto:support@suprasy.com"
        >
          Contact Sales
        </a>
      )}
    </div>
  );
};

const PricingPoint: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <li className="flex items-start">
      <svg
        className="flex-shrink-0 w-5 h-5 text-emerald-500 mt-0.5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      <span className="ml-3 text-gray-700">{children}</span>
    </li>
  );
};

export default PricingPage;
