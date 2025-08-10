import React from 'react';

// Define the props for the button component for type safety.
// You can expand this with props like `onClick`, `children`, etc.
interface ButtonProps {
  // Add props here
}

/**
 * A reusable button component.
 */
const Button: React.FC<ButtonProps> = () => {
  return (
    <button className="px-4 py-2 font-bold text-white transition-colors duration-200 rounded-md bg-blue-500 hover:bg-blue-600">
      Button
    </button>
  );
};

export default Button;
