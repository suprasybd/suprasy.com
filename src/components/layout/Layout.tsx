import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="max-w-screen-xl mx-auto px-4">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
