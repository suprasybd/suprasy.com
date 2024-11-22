import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'gatsby';
import { useHostname } from '../../hooks/HostnameHook';
import {
  ArrowRight,
  Zap,
  Shield,
  Globe2,
  ShoppingCart,
  LayoutDashboard,
  Palette,
  CreditCard,
  BarChart3,
  Settings,
} from 'lucide-react';
import AuthModal from '../layout/AuthModal';

const Hero: React.FC = () => {
  const [hostName] = useHostname();
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);

  const highlights = [
    {
      icon: <Zap className="w-5 h-5 text-indigo-600" />,
      text: 'Lightning-fast performance',
    },
    {
      icon: <Shield className="w-5 h-5 text-indigo-600" />,
      text: 'Enterprise-grade security',
    },
    {
      icon: <Globe2 className="w-5 h-5 text-indigo-600" />,
      text: 'Global CDN delivery',
    },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-white" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-100 rounded-full blur-3xl opacity-30 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-100 rounded-full blur-3xl opacity-30 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl relative z-10">
            {/* Left side content - unchanged */}
            <div className="inline-flex items-center rounded-full px-4 py-1 mb-8 bg-indigo-50 border border-indigo-100">
              <span className="text-sm font-medium text-indigo-600">
                New: Open Source Theme System
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-900">
              Build Your Dream Store in Minutes
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Launch your professional ecommerce site instantly with our
              powerful platform. Enterprise-grade features, unmatched
              performance, and seamless scalability — all designed to help your
              business succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-sm text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {hostName && (
                <>
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full flex items-center justify-center gap-[8px]"
                  >
                    <span>Sign Up Free</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <AuthModal
                    isOpen={isAuthModalOpen}
                    setIsOpen={setIsAuthModalOpen}
                    type="signup"
                    hostName={hostName}
                  />
                </>
              )}
              <Link
                to="/themes"
                className="w-full border-2 border-gray-200 hover:border-indigo-100 hover:bg-indigo-50 text-gray-700 font-semibold rounded-full"
              >
                <div className="w-full h-full px-8 py-3 flex items-center justify-center">
                  Explore Themes
                </div>
              </Link>
            </div>
          </div>

          {/* New Right side - Interactive Feature Grid */}
          <div className="relative lg:order-1 mt-24 lg:mt-0">
            <div className="relative z-10 grid grid-cols-2 gap-4 p-4">
              {/* Feature Icons Grid */}
              <div className="feature-grid-container relative w-full aspect-square max-w-[400px] mx-auto">
                {[
                  {
                    icon: <ShoppingCart className="w-8 h-8" />,
                    label: 'Store',
                  },
                  {
                    icon: <LayoutDashboard className="w-8 h-8" />,
                    label: 'Dashboard',
                  },
                  { icon: <Palette className="w-8 h-8" />, label: 'Themes' },
                  {
                    icon: <CreditCard className="w-8 h-8" />,
                    label: 'Payments',
                  },
                  {
                    icon: <BarChart3 className="w-8 h-8" />,
                    label: 'Analytics',
                  },
                  { icon: <Settings className="w-8 h-8" />, label: 'Settings' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`
                      absolute p-4 bg-white rounded-2xl shadow-lg
                      transform transition-all duration-500 hover:scale-105
                      flex flex-col items-center gap-2
                      animate-float-${index + 1}
                      sm:w-[calc(50%-1rem)] w-[120px]
                    `}
                    style={{
                      top: `${Math.floor(index / 2) * 33}%`,
                      left: `${(index % 2) * 50}%`,
                      animation: `float ${2 + index * 0.2}s ease-in-out infinite alternate`,
                      maxWidth: '150px',
                    }}
                  >
                    <div className="text-indigo-600">{item.icon}</div>
                    <span className="text-sm font-medium text-gray-600">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-indigo-50 rounded-full mix-blend-multiply filter blur-2xl opacity-50 -z-10" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-indigo-50 rounded-full mix-blend-multiply filter blur-2xl opacity-50 -z-10" />
          </div>
        </div>
      </div>
      {/* Add floating animation keyframes */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-10px);
          }
        }
        .animate-float-1 {
          animation-delay: 0s;
        }
        .animate-float-2 {
          animation-delay: 0.2s;
        }
        .animate-float-3 {
          animation-delay: 0.4s;
        }
        .animate-float-4 {
          animation-delay: 0.6s;
        }
        .animate-float-5 {
          animation-delay: 0.8s;
        }
        .animate-float-6 {
          animation-delay: 1s;
        }
      `}</style>
    </main>
  );
};

export default Hero;
