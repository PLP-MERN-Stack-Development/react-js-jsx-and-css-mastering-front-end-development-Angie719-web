// src/components/ui/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';

const baseStyles = 'px-4 py-2 font-semibold rounded-lg transition duration-200 ease-in-out shadow-md';

const variants = {
  primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
};

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  className: PropTypes.string,
};

export default Button;