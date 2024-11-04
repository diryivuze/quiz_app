import React from 'react';
import ScoreDisplay from '../components/quiz/ScoreDisplay';
import { motion } from 'framer-motion';

const Results = ({ score }) => {
  return (
    <motion.div 
      className="container mx-auto text-center mt-10"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold">Quiz Completed!</h1>
      <ScoreDisplay score={score} />
      <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">Play Again</button>
    </motion.div>
  );
};

export default Results;
