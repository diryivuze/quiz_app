function QuestionCard({ question, options, onAnswer }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <div className="space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="w-full text-left bg-gray-200 p-2 rounded hover:bg-blue-100"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
