import React, { useContext } from 'react';
import { QuizContext } from '../contexts/QuizContext';
import QuestionCard from '../components/quiz/QuestionCard';
import ProgressBar from '../components/quiz/ProgressBar';

const Quiz = () => {
  const {
    questions,
    setQuizCompleted,
    userAnswers,
    setUserAnswers,
  } = useContext(QuizContext);

  const handleSubmit = () => {
    // Calculate the score based on correct answers
    let calculatedScore = userAnswers.reduce((score, answer) => {
      const question = questions.find(q => q.id === answer.questionId);
      return question.correctAnswers.includes(answer.answer) ? score + 1 : score;
    }, 0);

    setQuizCompleted(true);
  };

  return (
    <div className="p-4">
      <ProgressBar currentQuestionIndex={userAnswers.length} totalQuestions={questions.length} />
      {userAnswers.length < questions.length && (
        <QuestionCard
          question={questions[userAnswers.length]}
          onAnswer={(answer) => setUserAnswers([...userAnswers, { questionId: questions[userAnswers.length].id, answer }])}
        />
      )}
      {userAnswers.length === questions.length && (
        <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded-lg mt-4">
          Submit Quiz
        </button>
      )}
    </div>
  );
};

export default Quiz;
