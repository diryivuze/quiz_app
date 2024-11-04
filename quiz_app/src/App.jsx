import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import QuizSelect from './pages/QuizSelect';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import LeaderBoard from './pages/LeaderBoard';
import QuizProvider from './contexts/QuizContext';

const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz-select" element={<QuizSelect />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
        </Routes>
        <Footer />
      </Router>
  );
};

export default App;
