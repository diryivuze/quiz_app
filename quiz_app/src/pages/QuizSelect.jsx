import React from 'react';
import { Card } from '@/components/ui/card';

const QuizSelect = () => {
  const quizCategories = [
    { id: 1, title: 'General Knowledge', questions: 20, time: '30 min' },
    { id: 2, title: 'Science', questions: 15, time: '25 min' },
    { id: 3, title: 'History', questions: 25, time: '35 min' },
    // Add more categories
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Select Quiz Category</h1>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quizCategories.map((category) => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
                <div className="mt-4 flex justify-between text-gray-500">
                  <span>{category.questions} questions</span>
                  <span>{category.time}</span>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Start Quiz
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
export default QuizSelect ;