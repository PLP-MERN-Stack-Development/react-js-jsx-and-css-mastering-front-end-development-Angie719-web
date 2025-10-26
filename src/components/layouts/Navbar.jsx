// src/components/layouts/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
// Fix: Explicitly defining the .jsx extension to ensure path resolution
import { useTheme } from '../../context/useTheme.js'; 

/**
 * The main navigation bar for the application.
 * Contains navigation links and the Dark Mode toggle button.
 */
const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const navItemClass = ({ isActive }) => 
    `px-4 py-2 transition-colors duration-200 rounded-md 
     ${isActive 
        ? 'bg-indigo-600 text-white shadow-md' 
        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
     }
    `;

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/App Name */}
          <div className="shrink-0">
            <h1 className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
              TaskFlow
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-4">
            <NavLink to="/" className={navItemClass}>
              Tasks
            </NavLink>
            <NavLink to="/posts" className={navItemClass}>
              Posts API
            </NavLink>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="p-2 ml-4 rounded-full text-indigo-600 dark:text-yellow-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 00-.707-.293h-.001c-.244 0-.47.1-.634.275l-.707.707a1 1 0 001.414 1.414l.707-.707c.2-.2.348-.485.348-.838v-.001c0-.285-.117-.552-.338-.752zm-9.33.153a1 1 0 00-.707-.293H4a1 1 0 000 2h.001c.244 0 .47-.1.634-.275l.707-.707a1 1 0 00-1.414-1.414L3.929 4.634z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.924A6.999 6.999 0 0010 3.194c-3.132 0-6.002 1.684-7.707 4.417a1 1 0 00.176 1.134 1 1 0 001.137.175A8.995 8.995 0 0110 17.194a8.995 8.995 0 01-6.703-3.08a1 1 0 00-1.282.493 1 1 0 00-.493 1.282A10.985 10.985 0 0010 18.194a10.985 10.985 0 009.282-5.772 1 1 0 00-.493-1.282 1 1 0 00-1.282.493z" />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;