import React from 'react';
import { motion } from 'framer-motion';

const QuestionCard = ({ question, options, onOptionSelect }) => {
  return (
    <motion.div 
      className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <div className="space-y-2">
        {options.map((option, index) => (
          <motion.button 
            key={index}
            onClick={() => onOptionSelect(option)}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionCard;
