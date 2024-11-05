import React from 'react';

const ProgressBar = ({ currentQuestionIndex, totalQuestions }) => {
  const percentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="w-full bg-gray-300 rounded-full h-2">
      <div
        className="bg-blue-500 h-2 rounded-full"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
