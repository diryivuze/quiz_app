import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to QuizApp</h1>
      <p className="text-gray-700">Test your knowledge with our quizzes!</p>
      <Link to="/quiz-select" className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded">Get Started</Link>
    </div>
  );
}

export default Home;
