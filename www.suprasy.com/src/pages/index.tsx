import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Hero from '@/components/Home/Hero';
import Layout from '@/components/layout/Layout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
