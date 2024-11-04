import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const QuizSelect = () => {
  return (
    <div className="container mx-auto text-center mt-10">
      <h1 className="text-3xl font-bold">Select a Quiz</h1>
      <motion.div 
        className="mt-4"
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <Link to="/quiz" className="inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
          General Knowledge
        </Link>
      </motion.div>
    </div>
  );
};

export default QuizSelect;
