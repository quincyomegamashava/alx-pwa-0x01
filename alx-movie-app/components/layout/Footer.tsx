import React from 'react';

/**
 * The main footer component for the application.
 */
const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-center text-white shadow-md bg-gray-900">
      <p>&copy; {new Date().getFullYear()} ALX Movie App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
