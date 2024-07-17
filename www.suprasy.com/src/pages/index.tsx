import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Hero from '@/components/Home/Hero';
import Layout from '@/components/layout/Layout';
import { Features } from '@/components/Home/Features';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero />
      <ContainerScroll titleComponent={<ContainerScrollTitle />}>
        <img src="https://static.suprasy.com/scroll-dashboard.png" />
      </ContainerScroll>
      <Features />
    </Layout>
  );
};

const ContainerScrollTitle = () => {
  return (
    <div>
      <h1 className="text-3xl font-medium">Ecommerce at your fingertips</h1>
      <h1 className="font-bold text-7xl">
        Modern dashboard to manage your business
      </h1>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
