// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl font-bold text-indigo-600 mb-8">
          Welcome to QuizMaster
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Test your knowledge, challenge yourself, and learn something new today!
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold mb-2">Customizable Quizzes</h3>
            <p className="text-gray-600">Choose your questions and set your own pace</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="text-lg font-semibold mb-2">Timed Challenges</h3>
            <p className="text-gray-600">Test your knowledge under pressure</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-lg font-semibold mb-2">Learning Resources</h3>
            <p className="text-gray-600">Review and learn from your mistakes</p>
          </div>
        </div>

        <div className="space-x-4">
          {currentUser ? (
            <Link
              to="/quiz"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Start Quiz
            </Link>
          ) : (
            <>
              <Link
                to="/signup"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
      
      <div className="w-full mt-16 bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-indigo-600 mb-2">1</div>
              <p>Sign up for an account</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600 mb-2">2</div>
              <p>Choose your quiz settings</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600 mb-2">3</div>
              <p>Answer the questions</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600 mb-2">4</div>
              <p>Get instant results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}