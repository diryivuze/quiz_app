import { useQuiz } from '../contexts/QuizContext';
import { Link } from 'react-router-dom';

function Results() {
  const { score, resetQuiz } = useQuiz();

  return (
    <div className="container mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
      <p className="text-gray-700">Your Score: {score}</p>
      <button onClick={resetQuiz} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Retry
      </button>
      <Link to="/leaderboard" className="mt-4 block text-blue-500 underline">View Leaderboard</Link>
    </div>
  );
}

export default Results;
