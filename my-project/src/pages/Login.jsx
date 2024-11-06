// src/pages/Login.jsx
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await login(credentials.email, credentials.password);
      navigate("/quiz-select");
    } catch (err) {
      setError("Invalid login credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <div className="mb-4">
          <FaUser className="inline-block mr-2" />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <FaLock className="inline-block mr-2" />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button className="w-full bg-blue-600 text-white p-2 rounded mt-4" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
