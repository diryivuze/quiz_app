// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getDatabase, ref, set, get } from 'firebase/database';

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

// Add the getQuestions function
export const getQuestions = async (numberOfQuestions = 10) => {
  try {
    // Get reference to questions in database
    const questionsRef = ref(database, 'questions');
    
    // Create a query to get random questions
    // First get all questions
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

    // Shuffle questions and get requested number
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, numberOfQuestions);

    return selectedQuestions;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};

// Add the registerUser function
export const registerUser = async (email, password, fullName, phone) => {
  try {
    // Create the user account
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store additional user data in the database
    const userRef = ref(database, `users/${user.uid}`);
    await set(userRef, {
      fullName,
      email,
      phone,
      isAdmin: false, // By default, new users are not admins
      createdAt: new Date().toISOString()
    });

    return user;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

// Keep the existing loginUser function
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
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

// Keep the existing logoutUser function
export const logoutUser = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};