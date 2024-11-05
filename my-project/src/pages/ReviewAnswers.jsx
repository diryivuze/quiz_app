import React, { useContext } from 'react';
import { QuizContext } from '../contexts/QuizContext';

const ReviewAnswers = () => {
  const { questions } = useContext(QuizContext);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Review Answers</h1>
      {questions.map((question) => (
        <div key={question.id} className="mb-6">
          <h2 className="font-semibold">{question.question}</h2>
          <p className="text-green-600">Correct Answer: {question.correctAnswers.join(', ')}</p>
          <p className="text-gray-600">Explanation: {question.explanation}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewAnswers;
