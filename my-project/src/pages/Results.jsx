import React, { useContext } from 'react';
import { QuizContext } from '../contexts/QuizContext';
import ScoreDisplay from '../components/quiz/ScoreDisplay';

const Results = () => {
  const { score, questions, setQuizCompleted } = useContext(QuizContext);
  const totalQuestions = questions.length;

  const handleRestart = () => {
    setQuizCompleted(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Quiz Results</h1>
      <ScoreDisplay score={score} total={totalQuestions} />
      <button onClick={handleRestart} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Restart Quiz</button>
    </div>
  );
};

export default Results;
