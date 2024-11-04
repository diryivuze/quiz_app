import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../assets/quiz-hero.json';

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center text-center p-6">
      <div className="w-full max-w-md mb-4">
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">Welcome to QuizApp</h1>
      <p className="text-gray-600 mb-8">
        Challenge yourself with our diverse quizzes and improve your knowledge!
      </p>
      <Link to="/quiz-select" className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 shadow-lg">
        Get Started
      </Link>
    </div>
  );
}

export default Home;
