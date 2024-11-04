import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main>
      <div className="relative mx-auto lg:container lg:px-16 xl:px-20 h-fit">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
