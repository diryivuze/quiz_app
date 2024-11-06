
// src/components/quiz/QuizSetup.jsx
import React, { useState } from 'react';
import { Settings, Clock } from 'lucide-react';

export default function QuizSetup({ onStart }) {
  const [settings, setSettings] = useState({
    numberOfQuestions: 10,
    timeLimit: 15,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: parseInt(value)
    }));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Quiz Settings</h2>
        <p className="mt-2 text-gray-600">Customize your quiz experience</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Settings className="h-4 w-4 mr-2" />
            Number of Questions
          </label>
          <select
            name="numberOfQuestions"
            value={settings.numberOfQuestions}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
          >
            <option value={5}>5 questions</option>
            <option value={10}>10 questions</option>
            <option value={15}>15 questions</option>
            <option value={20}>20 questions</option>
          </select>
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Clock className="h-4 w-4 mr-2" />
            Time Limit (minutes)
          </label>
          <select
            name="timeLimit"
            value={settings.timeLimit}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
          >
            <option value={10}>10 minutes</option>
            <option value={15}>15 minutes</option>
            <option value={20}>20 minutes</option>
            <option value={30}>30 minutes</option>
          </select>
        </div>

        <button
          onClick={() => onStart(settings)}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}