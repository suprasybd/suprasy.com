import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import ContactModal from '../layout/ContactModal';
import { Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  return (
    <>
      <footer className="relative z-10 bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <a href="/#" className="mb-6 inline-block max-w-[160px]">
                  <StaticImage
                    className="max-w-full left-[-10px]"
                    src="../../images/lg-full-blacks.png"
                    alt="footer logo full"
                  />
                </a>

                <p className="text-gray-600 dark:text-gray-300">
                  Empower your business with our comprehensive ecommerce
                  platform. Launch, scale, and manage your online store with
                  enterprise-grade features.
                </p>

                <div className="mt-6 flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-sm text-gray-500">
                      <svg
                        className="mr-1 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Join our early access program
                    </span>
                  </div>

                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href="tel:+8801977235665"
                      className="hover:text-indigo-600"
                    >
                      +880 1977-235665
                    </a>
                  </div>

                  <div className="flex items-center space-x-4">
                    <a
                      href="https://www.linkedin.com/company/suprasy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-indigo-600 transition-colors flex items-center gap-2"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    <a
                      href="https://www.facebook.com/suprasy.com.bd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-indigo-600 transition-colors flex items-center gap-2"
                    >
                      <Facebook className="w-5 h-5" />
                      <span className="text-sm">Facebook</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@suprasy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-indigo-600 transition-colors flex items-center gap-2"
                    >
                      <Youtube className="w-5 h-5" />
                      <span className="text-sm">YouTube</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors duration-150 ease-in-out"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Contact Us
                  </button>
                  <ContactModal
                    isOpen={isContactModalOpen}
                    setIsOpen={setIsContactModalOpen}
                  />
                </div>
              </div>
            </div>
            <LinkGroup header="Usefull Links">
              <NavLink link="/about-us" label="About Us" />
              <NavLink link="/product" label="Product" />
              <NavLink link="/pricing" label="Pricing" />
              <NavLink link="/whyus" label="Why Suprasy" />
              <NavLink link="/sitemap.xml" label="Sitemap" />
            </LinkGroup>

            <LinkGroup header="Helpful Links">
              <NavLink link="/terms-and-conditions" label="Terms & Condition" />
              <NavLink link="/cookie-policy" label="Cookie Policy" />
              <NavLink link="/delivery-policy" label="Delivery Policy" />
              <NavLink link="/refund-policy" label="Refund Policy" />
              <NavLink link="/privacy-policy" label="Privacy Policy" />
            </LinkGroup>
          </div>
        </div>

        {/* <div className="flex justify-center items-center ">
          <StaticImage
            src="../../images/ssl.jpg"
            alt="SSL Commerz"
          ></StaticImage>
        </div> */}

        <div className="text-center p-3 rounded-md ">
          © 2024 Suprasy | All right reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup: React.FC<{ header: string; children: React.ReactNode }> = ({
  children,
  header,
}) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink: React.FC<{ link: string; label: string }> = ({
  link,
  label,
}) => {
  return (
    <li>
      <Link
        to={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </Link>
    </li>
  );
};
