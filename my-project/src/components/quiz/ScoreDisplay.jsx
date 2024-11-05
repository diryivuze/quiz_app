import React from 'react';

const ScoreDisplay = ({ score, total }) => {
  return (
    <div className="text-xl font-bold">
      Your Score: {score} out of {total}
    </div>
  );
};

export default ScoreDisplay;
