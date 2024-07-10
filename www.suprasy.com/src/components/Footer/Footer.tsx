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
                <p className="mb-7 text-base text-body-color dark:text-dark-6">
                  With Suprasy's power, every sale flourishes, making your
                  eCommerce dreams come true every hour, every day.
                </p>
              </div>
            </div>
            <LinkGroup header="Usefull Links">
              <NavLink link="/product" label="Product" />
              <NavLink link="/pricing" label="Pricing" />
              <NavLink link="/whyus" label="About" />
            </LinkGroup>

            <LinkGroup header="Helpful Links">
              <NavLink link="/sitemap.xml" label="Sitemap" />
              <NavLink link="/product" label="Terms & Condition" />
              <NavLink link="/pricing" label="Cookie Policy" />
              <NavLink link="/whyus" label="Privacy Policy" />
            </LinkGroup>
          </div>
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
