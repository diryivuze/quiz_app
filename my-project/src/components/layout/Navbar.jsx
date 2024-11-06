// src/components/layout/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-lg">QuizApp</Link>
        <div className="md:hidden">
          <FaBars onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer" />
        </div>
        <div className={`flex flex-col md:flex-row md:items-center ${menuOpen ? "block" : "hidden"}`}>
          <Link to="/quiz-select">Quiz</Link>
          {currentUser ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
