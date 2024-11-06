// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import QuizSelect from "./pages/QuizSelect";
import Results from "./pages/Results";
import LeaderBoard from "./pages/LeaderBoard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddQuestion from "./pages/AddQuestion";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz-select" element={<QuizSelect />} />
          <Route path="/results" element={<Results />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add-question" element={<AddQuestion />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
