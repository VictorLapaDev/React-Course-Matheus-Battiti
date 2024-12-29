// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8r8b7J0BJXI-M5XMvI0uzD0CMw-q7N8c",
  authDomain: "miniblog-48651.firebaseapp.com",
  projectId: "miniblog-48651",
  storageBucket: "miniblog-48651.firebasestorage.app",
  messagingSenderId: "574565258850",
  appId: "1:574565258850:web:ab84f154623be20a6da33b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const  db = getFirestore(app);

export { db };