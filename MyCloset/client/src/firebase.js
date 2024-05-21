// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mycloset-eixo4.firebaseapp.com",
  projectId: "mycloset-eixo4",
  storageBucket: "mycloset-eixo4.appspot.com",
  messagingSenderId: "123707298000",
  appId: "1:123707298000:web:193bb9706d0d7f7ea74ed5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);