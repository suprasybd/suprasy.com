import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Hero from '@/components/Home/Hero';
import Layout from '@/components/layout/Layout';
import { Features } from '@/components/Home/Features';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero />
      <Features />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
