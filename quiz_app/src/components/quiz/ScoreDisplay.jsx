import React from 'react';
import { motion } from 'framer-motion';

const ScoreDisplay = ({ score }) => {
  return (
    <motion.div 
      className="bg-white shadow-lg rounded-lg p-6 text-center"
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold">Your Score</h2>
      <p className="text-4xl">{score}</p>
    </motion.div>
  );
};

export default ScoreDisplay;
