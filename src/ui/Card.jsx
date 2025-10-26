// src/ui/Card.jsx
import React from 'react';

/**
 * A versatile Card component used for wrapping content with standard styling.
 * * It automatically applies responsive padding, rounded corners, a shadow, and 
 * handles light/dark mode background colors.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The content to be displayed inside the card.
 * @param {string} [props.className=''] - Additional Tailwind CSS classes to apply.
 */
const Card = ({ children, className = '' }) => {
  const cardStyles = `bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg ${className}`;

  return (
    <div className={cardStyles}>
      {children}
    </div>
  );
};

export default Card;