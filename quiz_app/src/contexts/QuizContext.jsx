import { createContext, useState, useContext } from 'react';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setCompleted(false);
  };

  return (
    <QuizContext.Provider value={{ currentQuestionIndex, setCurrentQuestionIndex, score, setScore, completed, setCompleted, resetQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
