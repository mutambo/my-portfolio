// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvknzFx5aePsk6XjmDc1KqhxdsSQuB47A",
    authDomain: "myportfolio-bebbf.firebaseapp.com",
    projectId: "myportfolio-bebbf",
    storageBucket: "myportfolio-bebbf.appspot.com",
    messagingSenderId: "1024040414221",
    appId: "1:1024040414221:web:56d58fe58165a6184df944"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };