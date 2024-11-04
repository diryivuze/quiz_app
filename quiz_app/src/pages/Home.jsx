import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Award, Book, Settings } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to QuizMaster
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
            Test your knowledge, challenge friends, and learn something new!
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link to="/quiz-select" className="transform hover:scale-105 transition-transform">
            <div className="bg-white rounded-lg shadow-xl p-6">
              <Play className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold text-gray-900">Start Quiz</h2>
              <p className="mt-2 text-gray-500">Choose from various topics</p>
            </div>
          </Link>

          <Link to="/leaderboard" className="transform hover:scale-105 transition-transform">
            <div className="bg-white rounded-lg shadow-xl p-6">
              <Award className="h-12 w-12 text-yellow-500 mb-4" />
              <h2 className="text-xl font-semibold text-gray-900">Leaderboard</h2>
              <p className="mt-2 text-gray-500">See top scores</p>
            </div>
          </Link>

          {/* Add more menu items */}
        </div>
      </div>
    </div>
  );
};