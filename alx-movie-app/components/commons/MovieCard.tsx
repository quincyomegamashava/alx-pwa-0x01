import React from 'react';

// Define the props for the movie card component.
interface MovieCardProps {
  // Add props like movie details here
}

/**
 * A reusable card component to display movie information.
 */
const MovieCard: React.FC<MovieCardProps> = () => {
  return (
    <div className="p-4 overflow-hidden duration-300 transform rounded-md shadow-lg cursor-pointer bg-gray-800 hover:scale-105">
      <h3 className="mb-2 text-xl font-semibold text-white">Movie Title</h3>
      <p className="text-gray-400">Movie description or details.</p>
    </div>
  );
};

export default MovieCard;
