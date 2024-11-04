import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">QuizApp</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/quiz-select" className="hover:underline">Select Quiz</Link>
          <Link to="/leaderboard" className="hover:underline">Leaderboard</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
