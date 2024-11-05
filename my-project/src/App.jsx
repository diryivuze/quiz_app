import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import QuizSelect from './pages/QuizSelect';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import LeaderBoard from './pages/LeaderBoard';
import ReviewAnswers from './pages/ReviewAnswers';
import Login from './pages/Login';
import Signup from './pages/Signup';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>  {/* Place Router here */}
      <AuthProvider>  {/* AuthProvider inside Router */}
        <Navbar />
        <div className="container mx-auto p-4 mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/quiz-select"
              element={
                <ProtectedRoute>
                  <QuizSelect />
                </ProtectedRoute>
              }
            />
            <Route
              path="/quiz"
              element={
                <ProtectedRoute>
                  <Quiz />
                </ProtectedRoute>
              }
            />
            <Route
              path="/results"
              element={
                <ProtectedRoute>
                  <Results />
                </ProtectedRoute>
              }
            />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/review-answers" element={<ReviewAnswers />} />
          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </Router>
  );
};

export default App;
