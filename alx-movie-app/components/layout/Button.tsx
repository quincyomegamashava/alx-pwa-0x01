import React from 'react';

interface ButtonProps {
  // Add props here
}

/**
 * A button component intended for layout-specific use.
 */
const LayoutButton: React.FC<ButtonProps> = () => {
  return (
    <button className="px-4 py-2 font-bold text-white transition-colors duration-200 rounded-md bg-green-500 hover:bg-green-600">
      Layout Button
    </button>
  );
};

export default LayoutButton;
