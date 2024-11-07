import React, { useState } from 'react';
import { Button } from '../ui/button';
import { useHostname } from '../../hooks/HostnameHook';
import { Link } from 'gatsby';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [hostName] = useHostname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white border-gray-200 py-2.5">
        {/* Main header content - unchanged for desktop */}
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-kalam font-semibold whitespace-nowrap">
              Suprasy
            </span>
          </Link>

          {/* Desktop buttons */}
          <div className="hidden lg:flex gap-[10px] items-center lg:order-2">
            <Button variant={'default'}>
              {hostName && <a href={`${hostName}/register`}>Register</a>}
            </Button>
            <Button variant={'link'}>
              {hostName && <a href={`${hostName}/login`}>Login</a>}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Desktop navigation - unchanged */}
          <div className="hidden lg:flex items-center justify-between w-full lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-gray-900 lg:p-0"
                  to="/product"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/whyus"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-900 lg:p-0"
                >
                  Why Suprasy
                </Link>
              </li>
              <li>
                <Link
                  to="/themes"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-900 lg:p-0"
                >
                  Themes
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-900 lg:p-0"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* New Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 lg:hidden">
            <div className="flex flex-col h-full">
              {/* Mobile menu header */}
              <div className="flex items-center justify-between p-4 border-b">
                <Link
                  to="/"
                  className="flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="self-center text-xl font-kalam font-semibold">
                    Suprasy
                  </span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Mobile navigation links */}
              <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-2 px-4">
                  <li>
                    <Link
                      to="/product"
                      className="flex items-center py-3 text-lg font-medium text-gray-900 hover:text-purple-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/whyus"
                      className="flex items-center py-3 text-lg font-medium text-gray-900 hover:text-purple-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Why Suprasy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/themes"
                      className="flex items-center py-3 text-lg font-medium text-gray-900 hover:text-purple-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Themes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pricing"
                      className="flex items-center py-3 text-lg font-medium text-gray-900 hover:text-purple-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Mobile menu footer with buttons */}
              <div className="p-4 border-t">
                <div className="grid gap-3">
                  {hostName && (
                    <>
                      <Button
                        variant="default"
                        className="w-full py-6 text-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <a href={`${hostName}/register`}>Register</a>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full py-6 text-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <a href={`${hostName}/login`}>Login</a>
                      </Button>
                    </>
                  )}
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
