// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMLTWhH931Ku4Sv6zP9L_E7LtUgMqqqeI",
  authDomain: "financial-news-ecaa8.firebaseapp.com",
  projectId: "financial-news-ecaa8",
  storageBucket: "financial-news-ecaa8.appspot.com",
  messagingSenderId: "888505621268",
  appId: "1:888505621268:web:c874f6947908bf4f698001",
  databaseURL: "https://financial-news-ecaa8-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
