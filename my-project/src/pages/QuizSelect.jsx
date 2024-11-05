import React, { useContext, useState } from 'react';
import { QuizContext } from '../contexts/QuizContext';
import { useNavigate } from 'react-router-dom';

const QuizSelect = () => {
  const { setSelectedQuestionCount } = useContext(QuizContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(10);

  const handleStartQuiz = () => {
    setSelectedQuestionCount(count);
    navigate('/quiz');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">Choose Number of Questions</h1>
      <input
        type="number"
        min="5"
        max="50"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        className="border p-2 mb-4 text-center"
      />
      <button
        onClick={handleStartQuiz}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizSelect;
