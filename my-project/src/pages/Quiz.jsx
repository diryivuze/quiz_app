// src/pages/Quiz.jsx
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

const Quiz = () => {
  const { currentUser } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [adminError, setAdminError] = useState("");
  const [showAdminForm, setShowAdminForm] = useState(false);

  const adminPasswordValidation = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleAdminAccess = () => {
    if (adminPasswordValidation(adminPassword)) {
      setIsAdmin(true);
      setAdminError("");
    } else {
      setAdminError("Password must contain 8 characters with one uppercase letter, one special character, and one number.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Welcome, {currentUser ? currentUser.email.split("@")[0] : "Guest"}!</h1>
      <p className="text-gray-700 mb-6">Select the number of questions and start the quiz!</p>

      {isAdmin ? (
        <Link to="/add-question" className="text-blue-600 underline flex items-center gap-2">
          <FaPlusCircle /> Add New Question
        </Link>
      ) : (
        <button onClick={() => setShowAdminForm(!showAdminForm)} className="text-blue-600 underline">
          Access Admin Profile
        </button>
      )}

      {showAdminForm && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Enter Admin Password</label>
          <input
            type="password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Admin Password"
          />
          {adminError && <p className="text-red-500 text-sm">{adminError}</p>}
          <button
            onClick={handleAdminAccess}
            className="mt-2 bg-blue-600 text-white p-2 rounded"
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
