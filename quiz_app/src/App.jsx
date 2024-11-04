import { Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuizSelect from './pages/QuizSelect';
import QuestionCard from './components/quiz/QuestionCard';
import Results from './pages/Results';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz-select" element={<QuizSelect />} />
          <Route path="/quiz" element={<QuestionCard />} />
          <Route path="/results" element={<Results />} />
          
        </Routes>
    </Router>
  );
}
export default App;