// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';
import { getDatabase, ref, set, get } from 'firebase/database';
import { app } from '../firebase/config';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const auth = getAuth(app);
  const db = getDatabase(app);

  async function signup(email, password, fullName, phone) {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await set(ref(db, 'users/' + result.user.uid), {
      fullName,
      email,
      phone,
      isAdmin: false
    });
  }

  async function login(email, password) {
    const result = await signInWithEmailAndPassword(auth, email, password);
    if (email === 'admin' && password === 'Admin@123') {
      await set(ref(db, 'users/' + result.user.uid), {
        isAdmin: true
      });
      setIsAdmin(true);
    }
    return result;
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const snapshot = await get(ref(db, 'users/' + user.uid));
        const userData = snapshot.val();
        setIsAdmin(userData?.isAdmin || false);
      } else {
        setIsAdmin(false);
      }
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, [auth, db]);

  const value = {
    currentUser,
    isAdmin,
    signup,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

