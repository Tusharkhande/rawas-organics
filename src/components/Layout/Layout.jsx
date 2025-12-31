import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PromoBanner from '../PromoBanner';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-organic-texture">
      <PromoBanner />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;