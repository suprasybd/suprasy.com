import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
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

                <p>
                  <span className="font-bold">Trade License:</span>{' '}
                  <span className="">TRAD/DSCC/000056/2024</span>
                </p>
                <p className="mt-3">
                  48/A-B, Purana Paltan, Baitul Khair Building, 12th Floor,
                  Purana Paltan Dhaka-1000
                </p>
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

        <div className="flex justify-center items-center ">
          <StaticImage
            src="../../images/ssl.jpg"
            alt="SSL Commerz"
          ></StaticImage>
        </div>

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
