// src/components/layouts/Footer.jsx
import React from 'react';

/**
 * The application's footer component.
 * It provides basic copyright and context information.
 */
const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {currentYear} TaskFlow. All rights reserved. | Built with React, Tailwind CSS, and Context API.
        </p>
      </div>
    </footer>
  );
};

export default Footer;