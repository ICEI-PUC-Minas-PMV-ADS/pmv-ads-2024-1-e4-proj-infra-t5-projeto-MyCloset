// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"



import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsPvSB9f57oGEpJ4uwqj2uYenG62wn4AQ",
  authDomain: "mycloset-eixo4.firebaseapp.com",
  projectId: "mycloset-eixo4",
  storageBucket: "mycloset-eixo4.appspot.com",
  messagingSenderId: "123707298000",
  appId: "1:123707298000:web:193bb9706d0d7f7ea74ed5"
  
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);