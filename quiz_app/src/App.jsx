import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <QuizProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz-select" element={<QuizSelect />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
        </Routes>
        <Footer />
      </QuizProvider>
    </BrowserRouter>
  );
}