// src/context/ThemeContext.jsx

import React, { useState, useEffect } from 'react'; 
import { ThemeContext } from './theme';

export const ThemeProvider = ({ children }) => {
  // ... (all your ThemeProvider logic remains here)
  
  // NOTE: You no longer need to import 'useContext' here
  // because the 'useTheme' hook has been moved.

  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const stored = localStorage.getItem('isDarkMode');
      if (stored !== null) return stored === 'true';
    } catch {
      // ignore storage errors
    }
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // keep DOM / localStorage in sync with the state
  useEffect(() => {
    try {
      localStorage.setItem('isDarkMode', String(isDarkMode));
      const root = document.documentElement;
      if (isDarkMode) root.classList.add('dark');
      else root.classList.remove('dark');
    } catch {
      // ignore
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const value = { isDarkMode, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// ❌ The 'useTheme' hook is GONE from this file ❌