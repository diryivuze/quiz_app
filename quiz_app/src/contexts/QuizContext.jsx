import React, { createContext, useContext, useReducer } from 'react';

const QuizContext = createContext();

const initialState = {
  currentQuestion: 0,
  score: 0,
  answers: [],
  timeRemaining: null,
  quizStarted: false,
  quizCompleted: false,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case 'START_QUIZ':
      return { ...state, quizStarted: true, timeRemaining: action.payload };
    case 'ANSWER_QUESTION':
      return {
        ...state,
        answers: [...state.answers, action.payload],
        score: state.score + action.payload.points,
      };
    // Add more cases
    default:
      return state;
  }
};

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);