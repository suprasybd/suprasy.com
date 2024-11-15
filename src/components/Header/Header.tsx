import React, { useState } from 'react';
import { Button } from '../ui/button';
import { useHostname } from '../../hooks/HostnameHook';
import { Link } from 'gatsby';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [hostName] = useHostname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-4 left-0 right-0 z-50">
      <nav className="mx-4 bg-white/80 backdrop-blur-md border border-gray-100/20 rounded-2xl shadow-lg shadow-gray-100/20">
        {/* Main header content - unchanged for desktop */}
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-6 mx-auto py-4">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-kalam font-semibold whitespace-nowrap bg-gradient-to-r from-indigo-600 to-indigo-900 bg-clip-text text-transparent">
              Suprasy
            </span>
          </Link>

          {/* Desktop buttons */}
          <div className="hidden lg:flex gap-3 items-center lg:order-2">
            {hostName && (
              <>
                <a href={`${hostName}/login`} className="w-full">
                  <Button
                    variant="ghost"
                    className="rounded-xl hover:bg-gray-100/50 w-full"
                  >
                    Login
                  </Button>
                </a>
                <a href={`${hostName}/register`} className="w-full">
                  <Button
                    variant="default"
                    className="rounded-xl shadow-sm w-full"
                  >
                    Sign Up
                  </Button>
                </a>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-xl hover:bg-gray-100/50"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>

          {/* Desktop navigation - centered */}
          <div className="hidden lg:flex items-center justify-center lg:order-1 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <ul className="flex items-center space-x-1">
              <li>
                <Link
                  className="px-4 py-2 rounded-xl text-black font-medium hover:text-black hover:bg-gray-100/50 transition-colors"
                  to="/product"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/whyus"
                  className="px-4 py-2 rounded-xl text-black font-medium hover:text-black hover:bg-gray-100/50 transition-colors"
                >
                  Why Suprasy
                </Link>
              </li>
              <li>
                <Link
                  to="/themes"
                  className="px-4 py-2 rounded-xl text-black font-medium hover:text-black hover:bg-gray-100/50 transition-colors"
                >
                  Themes
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="px-4 py-2 rounded-xl text-black font-medium hover:text-black hover:bg-gray-100/50 transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-x-0 top-0 p-4 lg:hidden">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
              <div className="flex flex-col h-[calc(100vh-2rem)]">
                {/* Mobile menu header */}
                <div className="flex items-center justify-between p-4">
                  <Link
                    to="/"
                    className="flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="self-center text-xl font-kalam font-semibold bg-gradient-to-r from-indigo-600 to-indigo-900 bg-clip-text text-transparent">
                      Suprasy
                    </span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-xl hover:bg-gray-100/50"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Mobile navigation links */}
                <nav className="flex-1 overflow-y-auto py-4">
                  <ul className="space-y-1 px-3">
                    <li>
                      <Link
                        to="/product"
                        className="flex items-center px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100/50 rounded-xl transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Product
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/whyus"
                        className="flex items-center px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100/50 rounded-xl transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Why Suprasy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/themes"
                        className="flex items-center px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100/50 rounded-xl transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Themes
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/pricing"
                        className="flex items-center px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100/50 rounded-xl transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Pricing
                      </Link>
                    </li>
                  </ul>
                </nav>

                {/* Mobile menu footer with buttons */}
                <div className="p-4 border-t border-gray-100">
                  <div className="grid gap-3">
                    {hostName && (
                      <>
                        <a href={`${hostName}/register`} className="w-full">
                          <Button
                            variant="default"
                            className="w-full py-6 text-lg rounded-xl"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Sign Up
                          </Button>
                        </a>
                        <a href={`${hostName}/login`} className="w-full">
                          <Button
                            variant="ghost"
                            className="w-full py-6 text-lg rounded-xl"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Login
                          </Button>
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
