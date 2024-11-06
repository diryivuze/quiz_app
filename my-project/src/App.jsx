import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import Resources from "./components/Resources";
import AdminPanel from "./components/AdminPanel";
import Contact from "./pages/Contact";
import About from "./pages/About";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
};

// Admin Route Component
const AdminRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const isAdmin = currentUser?.email === "admin" && currentUser?.password === "Admin@123";
  return isAdmin ? children : <Navigate to="/quiz" />;
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
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
            <Route 
              path="/resources" 
              element={
                <ProtectedRoute>
                  <Resources />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin" 
              element={
                <AdminRoute>
                  <AdminPanel />
                </AdminRoute>
              } 
            />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;