import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Home, BookOpen } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-800">QuizMaster</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              <Home className="h-6 w-6" />
            </Link>
            <Link to="/leaderboard" className="text-gray-600 hover:text-gray-900">
              <Trophy className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar ;