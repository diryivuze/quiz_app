import React from 'react';

const Explanation = ({ explanation }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-4">
      <h2 className="text-xl font-semibold">Explanation</h2>
      <p>{explanation}</p>
    </div>
  );
};

export default Explanation;
