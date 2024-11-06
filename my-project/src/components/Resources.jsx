// Resources.jsx
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { Book, CheckCircle, XCircle } from 'lucide-react';

const Resources = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const db = getDatabase();
    const questionsRef = ref(db, 'questions');
    
    onValue(questionsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const questionsList = Object.values(data);
        setQuestions(questionsList);
      }
      setLoading(false);
    });
  }, []);

  const filteredQuestions = questions.filter(q =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-3 mb-8">
          <Book className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Learning Resources</h1>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {loading ? (
          <p className="text-center py-8">Loading resources...</p>
        ) : (
          <div className="space-y-6">
            {filteredQuestions.map((q, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition">
                <h3 className="text-lg font-semibold mb-3">{q.question}</h3>
                <div className="space-y-2 ml-4">
                  {q.options.map((option, optIndex) => (
                    <div key={optIndex} className="flex items-center gap-2">
                      {option === q.correctAnswer ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600" />
                      )}
                      <span className={option === q.correctAnswer ? 'font-medium text-green-600' : ''}>
                        {option}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Resources;