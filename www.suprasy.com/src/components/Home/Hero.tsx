import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'gatsby';
import { DASHBOARD } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <main className="grid lg:grid-cols-2 p-8 md:p-0 place-items-center pt-16 pb-8 md:pt-8">
      <div className="py-6 md:order-1 hidden md:block">
        <StaticImage
          src="../../images/hero-mod.svg"
          alt="ecommerce site product page"
        />
      </div>
      <div>
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
          Create your ecommerce site under one minute
        </h1>
        <p className="text-lg mt-4 text-slate-600 max-w-xl">
          Launch your ecommerce site with suprasy under 1 minute
          <wbr />. Built with scale in mind, scale your buissness with no extra
          effort and we handle the large traffic
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button variant={'outline'}>
            <Link to="/pricing">View Pricing</Link>
          </Button>
          <Button variant={'default'}>
            <Link to={`${DASHBOARD}/register`}>Sign Up</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
