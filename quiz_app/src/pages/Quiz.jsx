import React, { useContext } from 'react';
import { QuizContext } from '../contexts/QuizContext';
import QuestionCard from '../components/quiz/QuestionCard';
import Timer from '../components/quiz/Timer';
import ProgressBar from '../components/quiz/ProgressBar';

const Quiz = () => {
  const { questions, currentQuestionIndex, score, setScore, handleNextQuestion } = useContext(QuizContext);

  const handleOptionSelect = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Quiz</h1>
      <Timer duration={60} onTimeUp={() => alert("Time's up!")} />
      <ProgressBar progress={((currentQuestionIndex + 1) / questions.length) * 100} />
      {questions.length > 0 && (
        <QuestionCard 
          question={questions[currentQuestionIndex].question} 
          options={questions[currentQuestionIndex].options} 
          onOptionSelect={handleOptionSelect} 
        />
      )}
    </div>
  );
};

export default Quiz;
