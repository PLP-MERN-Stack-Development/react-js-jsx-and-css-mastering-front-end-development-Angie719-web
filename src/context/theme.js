// src/context/theme.js

import { createContext } from 'react';

// This creates the actual Context object that will be used by the Provider and the hook
export const ThemeContext = createContext(undefined); 
// It's good practice to pass 'undefined' or a default object to createContext