import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (username, password) => {
    // Replace with actual authentication logic
    if (username === "user" && password === "password") {
      setUser({ username });
      navigate('/quiz-select');
    } else {
      alert("Invalid login credentials");
    }
  };

  const signup = async (username, password) => {
    // Replace with actual signup logic
    setUser({ username });
    navigate('/quiz-select');
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
