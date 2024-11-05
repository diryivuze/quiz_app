import React, { createContext, useState, useEffect } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedQuestionCount, setSelectedQuestionCount] = useState(10);

  useEffect(() => {
    // Fetch 100+ questions from your database or API
    fetchQuestions();
  }, [selectedQuestionCount]);

  const fetchQuestions = async () => {
    // Fetch all questions from your backend (replace with your actual API endpoint)
    const allQuestions = await fetch('/api/questions').then((res) => res.json());
    // Randomly select a subset based on selectedQuestionCount
    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
    setQuestions(shuffledQuestions.slice(0, selectedQuestionCount));
  };

  return (
    <QuizContext.Provider value={{
      questions,
      userAnswers,
      score,
      quizCompleted,
      selectedQuestionCount,
      setSelectedQuestionCount,
      setQuestions,
      setUserAnswers,
      setScore,
      setQuizCompleted,
    }}>
      {children}
    </QuizContext.Provider>
  );
};
