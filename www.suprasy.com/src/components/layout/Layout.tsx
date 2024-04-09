import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative h-16 mx-auto lg:container lg:px-16 xl:px-20">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
