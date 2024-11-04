import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="relative w-full h-4 bg-gray-300 rounded-full mb-4">
      <div
        className="absolute h-full bg-blue-500 rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
