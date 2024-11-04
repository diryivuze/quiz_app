import { Link } from 'react-router-dom';
import { HomeIcon, ChartBarIcon, AcademicCapIcon } from '@heroicons/react/solid';

function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
          <AcademicCapIcon className="h-8 w-8 text-yellow-400" />
          <span>QuizApp</span>
        </Link>
        <div className="space-x-6 flex items-center">
          <Link to="/" className="hover:underline flex items-center">
            <HomeIcon className="h-5 w-5 mr-1" />
            Home
          </Link>
          <Link to="/quiz-select" className="hover:underline flex items-center">
            <ChartBarIcon className="h-5 w-5 mr-1" />
            Select Quiz
          </Link>
          <Link to="/leaderboard" className="hover:underline flex items-center">
            <ChartBarIcon className="h-5 w-5 mr-1" />
            Leaderboard
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
