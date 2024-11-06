// src/pages/Quiz.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getQuestions } from '../firebase/config';
import QuizSetup from '../components/quiz/QuizSetup';
import QuizQuestion from '../components/quiz/QuizQuestion';
import Timer from '../components/quiz/Timer';
import { ArrowRight, Clock, AlertCircle } from 'lucide-react';

export default function Quiz() {
  const [step, setStep] = useState('setup'); // setup, quiz, complete
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizSettings, setQuizSettings] = useState({
    numberOfQuestions: 10,
    timeLimit: 15, // minutes
  });
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const startQuiz = async (settings) => {
    try {
      setLoading(true);
      setQuizSettings(settings);
      const fetchedQuestions = await getQuestions(settings.numberOfQuestions);
      setQuestions(fetchedQuestions);
      setTimeRemaining(settings.timeLimit * 60); // Convert to seconds
      setStep('quiz');
    } catch (error) {
      setError('Failed to load questions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (questionId, selectedAnswer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedAnswer
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      completeQuiz();
    }
  };

  const completeQuiz = () => {
    const results = {
      questions,
      answers,
      timeSpent: quizSettings.timeLimit * 60 - timeRemaining,
      totalQuestions: questions.length
    };
    // Store results in localStorage for the results page
    localStorage.setItem('quizResults', JSON.stringify(results));
    navigate('/results');
  };

  // Handle time up
  useEffect(() => {
    if (timeRemaining === 0) {
      completeQuiz();
    }
  }, [timeRemaining]);

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500" />
          <h3 className="mt-2 text-sm font-medium text-red-800">{error}</h3>
          <div className="mt-6">
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] container mx-auto px-4 py-8">
      {step === 'setup' && (
        <QuizSetup onStart={startQuiz} />
      )}

      {step === 'quiz' && (
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-indigo-600" />
              <Timer 
                initialTime={timeRemaining} 
                onTimeUp={completeQuiz}
                setTimeRemaining={setTimeRemaining}
              />
            </div>
            <div className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <QuizQuestion
              question={questions[currentQuestion]}
              onAnswer={handleAnswer}
              selectedAnswer={answers[questions[currentQuestion]?.id]}
            />

            <div className="mt-6 flex justify-end">
              <button
                onClick={nextQuestion}
                disabled={!answers[questions[currentQuestion]?.id]}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
