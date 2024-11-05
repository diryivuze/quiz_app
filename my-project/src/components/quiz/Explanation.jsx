import React from 'react';

const Explanation = ({ explanation }) => {
  return (
    <div className="bg-gray-100 p-4 rounded">
      <h3 className="font-semibold">Explanation:</h3>
      <p>{explanation}</p>
    </div>
  );
};

export default Explanation;
