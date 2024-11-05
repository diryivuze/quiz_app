import { motion } from 'framer-motion';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const QuestionCard = ({ question, onAnswer }) => (
  <motion.div
    className="p-4 bg-white rounded shadow"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
  >
    <h2>{question.text}</h2>
    {question.options.map((option, index) => (
      <button
        key={index}
        className="flex items-center space-x-2 mt-2 p-2 border rounded"
        onClick={() => onAnswer(option)}
      >
        <AiOutlineCheckCircle />
        <span>{option}</span>
      </button>
    ))}
  </motion.div>
);

export default QuestionCard;
