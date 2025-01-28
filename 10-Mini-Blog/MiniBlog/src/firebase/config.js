import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import auth specifically
import { getFirestore } from "firebase/firestore";  // If you're using Firestore

const firebaseConfig = {
  apiKey: "AIzaSyB8r8b7J0BJXI-M5XMvI0uzD0CMw-q7N8c",
  authDomain: "miniblog-48651.firebaseapp.com",
  projectId: "miniblog-48651",
  storageBucket: "miniblog-48651.firebasestorage.app",
  messagingSenderId: "574565258850",
  appId: "1:574565258850:web:ab84f154623be20a6da33b"
};

// Initialize Firebase app only once
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);  // Passing `app` here ensures you're using the initialized app
const db = getFirestore(app);

export { auth, db };  // Export the initialized services
