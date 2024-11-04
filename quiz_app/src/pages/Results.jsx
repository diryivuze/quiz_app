import React from 'react';
import { Trophy, Clock, Check, X } from 'lucide-react';

const Results = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-blue-600 px-6 py-8 text-center">
            <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white">Quiz Complete!</h1>
            <p className="text-blue-100 mt-2">Great job on finishing the quiz</p>
          </div>

          <div className="px-6 py-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-500">Score</p>
                <p className="text-3xl font-bold text-gray-900">85%</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-500">Time Taken</p>
                <p className="text-3xl font-bold text-gray-900">12:30</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-500">Correct Answers</p>
                <p className="text-3xl font-bold text-gray-900">17/20</p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Question Analysis
              </h2>
              {/* Add question analysis */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Results ;