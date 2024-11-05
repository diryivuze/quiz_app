import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { FaHome, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-600 p-4 shadow-md fixed top-0 w-full flex justify-between items-center">
      <div className="text-white font-bold text-2xl cursor-pointer" onClick={() => navigate('/')}>
        Quiz App
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white flex items-center">
          <FaHome className="mr-1" /> Home
        </Link>
        {user ? (
          <>
            <Link to="/quiz-select" className="text-white">Start Quiz</Link>
            <button onClick={logout} className="text-white flex items-center">
              <FaSignOutAlt className="mr-1" /> Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white">Login</Link>
            <Link to="/signup" className="text-white">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
