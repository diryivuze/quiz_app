import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaList, FaTrophy } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Quiz App</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="flex items-center text-white hover:text-blue-300 transition"><FaHome className="mr-1" /> Home</Link></li>
          <li><Link to="/quiz-select" className="flex items-center text-white hover:text-blue-300 transition"><FaList className="mr-1" /> Quiz Select</Link></li>
          <li><Link to="/leaderboard" className="flex items-center text-white hover:text-blue-300 transition"><FaTrophy className="mr-1" /> Leaderboard</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
