import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * A layout component that wraps the entire application with a header and footer.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Header />
      <main className="container flex-grow p-4 mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
