
// Results.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Trophy, RefreshCcw, BookOpen } from 'lucide-react';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions, timeSpent } = location.state || {};
  
  const getMotivationalMessage = (percentage) => {
    if (percentage >= 90) return "Outstanding! You're a quiz master!";
    if (percentage >= 70) return "Great job! Keep up the excellent work!";
    if (percentage >= 50) return "Good effort! There's room for improvement!";
    return "Don't give up! Practice makes perfect!";
  };

  const percentage = (score / totalQuestions) * 100;
  const message = getMotivationalMessage(percentage);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <Trophy className="w-16 h-16 mx-auto text-yellow-500" />
        </div>

        <h1 className="text-3xl font-bold mb-4">Quiz Results</h1>
        
        <div className="space-y-4 mb-8">
          <p className="text-2xl font-semibold">
            Score: {score}/{totalQuestions}
          </p>
          <p className="text-xl">
            Percentage: {percentage.toFixed(1)}%
          </p>
          <p className="text-lg">
            Time Spent: {Math.floor(timeSpent / 60)}m {timeSpent % 60}s
          </p>
          <p className="text-lg font-medium text-blue-600">
            {message}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/quiz')}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            <RefreshCcw size={20} />
            Try Again
          </button>
          <button
            onClick={() => navigate('/resources')}
            className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            <BookOpen size={20} />
            View Resources
          </button>
        </div>
      </div>
    </div>
  );
};
export default Results;