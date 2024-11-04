import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.gif'; // Add a GIF of your choice

const Home = () => {
  return (
    <div className="container mx-auto text-center mt-10">
      <motion.h1 
        className="text-4xl font-bold mb-4" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        Welcome to the Quiz App
      </motion.h1>
      <img src={heroImage} alt="Quiz GIF" className="mx-auto mb-4" />
      <Link to="/quiz-select" className="mt-4 inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
        Start Quiz
      </Link>
    </div>
  );
};

export default Home;
