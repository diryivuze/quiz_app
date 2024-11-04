import { Link } from 'react-router-dom';

function QuizSelect() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Select a Quiz</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example quiz item */}
        <Link to="/quiz" className="bg-white shadow rounded p-4 hover:bg-blue-100">
          <h3 className="font-semibold">Sample Quiz</h3>
          <p className="text-gray-600">Description of the quiz.</p>
        </Link>
      </div>
    </div>
  );
}

export default QuizSelect;
