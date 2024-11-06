// AdminPanel.jsx
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import { PlusCircle, Save, Trash2 } from 'lucide-react';

const AdminPanel = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    const questionsRef = ref(db, 'questions');
    
    onValue(questionsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const questionsList = Object.entries(data).map(([id, value]) => ({
          id,
          ...value,
        }));
        setQuestions(questionsList);
      }
      setLoading(false);
    });
  }, []);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!question || options.some(opt => !opt) || !correctAnswer) {
      alert('Please fill all fields');
      return;
    }

    const db = getDatabase();
    const questionsRef = ref(db, 'questions');
    
    try {
      await push(questionsRef, {
        question,
        options,
        correctAnswer,
        timestamp: Date.now()
      });
      
      setQuestion('');
      setOptions(['', '', '', '']);
      setCorrectAnswer('');
      alert('Question added successfully!');
    } catch (error) {
      alert('Error adding question: ' + error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Question</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Question:</label>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              rows="3"
              required
            />
          </div>

          <div className="space-y-3">
            <label className="block mb-2">Options:</label>
            {options.map((option, index) => (
              <input
                key={index}
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                required
              />
            ))}
          </div>

          <div>
            <label className="block mb-2">Correct Answer:</label>
            <select
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select correct answer</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            <Save size={20} />
            Add Question
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Existing Questions</h2>
        {loading ? (
          <p>Loading questions...</p>
        ) : (
          <div className="space-y-4">
            {questions.map((q) => (
              <div key={q.id} className="border p-4 rounded">
                <p className="font-medium">{q.question}</p>
                <ul className="ml-4 mt-2">
                  {q.options.map((option, index) => (
                    <li
                      key={index}
                      className={option === q.correctAnswer ? 'text-green-600 font-medium' : ''}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;