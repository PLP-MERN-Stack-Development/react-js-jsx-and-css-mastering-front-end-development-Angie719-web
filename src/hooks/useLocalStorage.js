// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

/**
 * Custom hook to manage state that persists in localStorage.
 * @param {string} key - The key for localStorage.
 * @param {any} initialValue - The initial value to use if nothing is in storage.
 * @returns {[any, (value: any) => void]} - The state and setter function.
 */
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic runs only once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error, return initialValue
      console.error(error);
      return initialValue;
    }
  });

  // useEffect to update local storage when the state changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;