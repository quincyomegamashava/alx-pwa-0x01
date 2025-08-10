import React from 'react';

// Define the props for the loading component.
interface LoadingProps {
  // Add props here
}

/**
 * A reusable loading spinner component.
 */
const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-16 h-16 ease-linear border-4 border-t-4 border-gray-200 rounded-full loader animate-spin"></div>
    </div>
  );
};

export default Loading;
