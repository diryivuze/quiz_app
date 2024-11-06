// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getDatabase, ref, set, get, query, limitToFirst, orderByChild } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getDatabase(app);

// Admin credentials
const ADMIN_EMAIL = "admin@admin.com";
const ADMIN_PASSWORD = "admin123";

// Modified registerUser function
export const registerUser = async (email, password, fullName, phone) => {
  try {
    // Create the user account
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Determine if this is the admin account
    const isAdmin = email.toLowerCase() === ADMIN_EMAIL;

    // Store additional user data in the database
    const userRef = ref(database, `users/${user.uid}`);
    await set(userRef, {
      fullName,
      email,
      phone,
      isAdmin,
      createdAt: new Date().toISOString()
    });

    return {
      user,
      isAdmin
    };
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

// Modified loginUser function
export const loginUser = async (email, password) => {
  try {
    // For demo purposes, set up default admin if it doesn't exist
    if (email.toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        if (error.code === 'auth/user-not-found') {
          // Create admin account if it doesn't exist
          await registerUser(ADMIN_EMAIL, ADMIN_PASSWORD, 'Admin User', '1234567890');
        } else {
          throw error;
        }
      }
    }

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Get user data from database
    const userRef = ref(database, `users/${user.uid}`);
    const snapshot = await get(userRef);
    const userData = snapshot.val();
    
    return {
      user,
      isAdmin: userData?.isAdmin || false
    };
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Keep existing logoutUser function
export const logoutUser = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

// Keep existing getQuestions function
export const getQuestions = async (numberOfQuestions = 10) => {
  try {
    const questionsRef = ref(database, 'questions');
    const snapshot = await get(questionsRef);
    
    if (!snapshot.exists()) {
      throw new Error('No questions available');
    }

    const allQuestions = [];
    snapshot.forEach((childSnapshot) => {
      allQuestions.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, numberOfQuestions);

    return selectedQuestions;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};

// Add a function to add questions (for admin use)
export const addQuestion = async (questionData) => {
  try {
    const questionsRef = ref(database, 'questions');
    const newQuestionRef = push(questionsRef);
    await set(newQuestionRef, {
      ...questionData,
      createdAt: new Date().toISOString()
    });
    return newQuestionRef.key;
  } catch (error) {
    console.error('Error adding question:', error);
    throw error;
  }
};