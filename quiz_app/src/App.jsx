import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import QuizSelect from './pages/QuizSelect';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import LeaderBoard from './pages/LeaderBoard';
import { QuizProvider } from './contexts/QuizContext';

function App() {
  return (
    <BrowserRouter>
      <QuizProvider>
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 flex flex-col">
          <Navbar />
          <main className="flex-grow p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz-select" element={<QuizSelect />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/results" element={<Results />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />
            </Routes>
          </main>
          <footer className="bg-gray-900 text-gray-300 py-4 text-center">
            <p>&copy; {new Date().getFullYear()} QuizApp. All rights reserved.</p>
          </footer>
        </div>
      </QuizProvider>
    </BrowserRouter>
  );
}

export default App;
