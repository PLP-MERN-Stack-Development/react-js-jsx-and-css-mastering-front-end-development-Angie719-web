// src/context/useTheme.js

import { useContext } from 'react';
// 💡 NOTE: You still need to import ThemeContext from where it's created.
// Assuming it's in './theme':
import { ThemeContext } from './theme'; 

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // This provides a helpful error if the hook is used outside the provider
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};