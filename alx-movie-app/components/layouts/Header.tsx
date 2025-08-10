import React from 'react';

/**
 * The main header component for the application.
 */
const Header: React.FC = () => {
  return (
    <header className="p-4 text-white shadow-md bg-gray-900">
      <nav className="container mx-auto">
        <h1 className="text-2xl font-bold">ALX Movie App</h1>
      </nav>
    </header>
  );
};

export default Header;
