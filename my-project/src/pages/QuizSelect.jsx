// src/pages/QuizSelection.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizSelection = () => {
  const [questionCount, setQuestionCount] = useState(10);
  const [timeLimit, setTimeLimit] = useState(10);
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz', { state: { questionCount, timeLimit } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Select Quiz Options</h2>
      <label className="mb-2">Number of Questions</label>
      <input
        type="number"
        min="1"
        max="100"
        value={questionCount}
        onChange={(e) => setQuestionCount(e.target.value)}
        className="border p-2 mb-4"
      />
      <label className="mb-2">Time Limit (minutes)</label>
      <input
        type="number"
        min="1"
        value={timeLimit}
        onChange={(e) => setTimeLimit(e.target.value)}
        className="border p-2 mb-4"
      />
      <button onClick={startQuiz} className="bg-blue-600 text-white p-2 rounded">Start Quiz</button>
    </div>
  );
};

export default QuizSelection;
