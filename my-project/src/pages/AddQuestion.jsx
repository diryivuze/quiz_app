// src/pages/AddQuestion.jsx
import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const AddQuestion = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questionType, setQuestionType] = useState("multiple");
  const [successMessage, setSuccessMessage] = useState("");

  const handleAddQuestion = async () => {
    const questionData = {
      questionText: question,
      options: questionType === "multiple" ? options : ["True", "False"],
      correctAnswer,
      type: questionType,
    };

    try {
      await addDoc(collection(db, "questions"), questionData);
      setSuccessMessage("Question added successfully!");
      setQuestion("");
      setOptions(["", "", "", ""]);
      setCorrectAnswer("");
    } catch (error) {
      console.error("Error adding question: ", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Add New Question</h2>
      {successMessage && <p className="text-green-600">{successMessage}</p>}
      <label className="block mb-2">Question Text</label>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      />

      <label className="block mb-2">Question Type</label>
      <select
        value={questionType}
        onChange={(e) => setQuestionType(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      >
        <option value="multiple">Multiple Choice</option>
        <option value="boolean">True/False</option>
      </select>

      {questionType === "multiple" && (
        <>
          {options.map((option, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={option}
                onChange={(e) => {
                  const newOptions = [...options];
                  newOptions[index] = e.target.value;
                  setOptions(newOptions);
                }}
                className="p-2 border rounded w-full"
                placeholder={`Option ${index + 1}`}
              />
            </div>
          ))}
        </>
      )}

      <label className="block mb-2">Correct Answer</label>
      <input
        type="text"
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      />
      <button
        onClick={handleAddQuestion}
        className="bg-blue-600 text-white p-2 rounded w-full"
      >
        Add Question
      </button>
    </div>
  );
};

export default AddQuestion;
