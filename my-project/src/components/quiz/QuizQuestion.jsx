// src/components/quiz/QuizQuestion.jsx
import React from 'react';

export default function QuizQuestion({ question, onAnswer, selectedAnswer }) {
  if (!question) return null;

  return (
    <div className="space-y-6">
      <div className="text-lg font-medium text-gray-900">
        {question.question}
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(question.id, option)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
              selectedAnswer === option
                ? 'border-indigo-600 bg-indigo-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center">
              <div className={`w-6 h-6 flex items-center justify-center rounded-full border-2 mr-3 ${
                selectedAnswer === option
                  ? 'border-indigo-600 bg-indigo-600'
                  : 'border-gray-300'
              }`}>
                {selectedAnswer === option && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>
              <span className="text-gray-700">{option}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

