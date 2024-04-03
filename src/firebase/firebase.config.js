// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEDWKMmDnHK-0sJ3vlDIBPzSv5lFDGOaU",
  authDomain: "dragon-news-64011.firebaseapp.com",
  projectId: "dragon-news-64011",
  storageBucket: "dragon-news-64011.appspot.com",
  messagingSenderId: "7970566471",
  appId: "1:7970566471:web:44bb99485abcd82f88dc62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
