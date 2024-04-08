import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <main className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
      <div className="py-6 md:order-1 hidden md:block">
        <StaticImage src="../../images/hero.jpg" alt="ecommerce site" />
      </div>
      <div>
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
          Marketing website done with Astro
        </h1>
        <p className="text-lg mt-4 text-slate-600 max-w-xl">
          Astroship is a starter template for startups, marketing websites &
          landing pages.
          <wbr /> Built with Astro.build, TailwindCSS & Alpine.js. You can
          quickly create any website with this starter.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button variant={'outline'}>
            <a href="/">View Pricing</a>
          </Button>
          <Button variant={'default'}>
            <a href="/">Sign Up</a>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
