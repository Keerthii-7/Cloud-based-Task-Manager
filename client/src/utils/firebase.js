// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-126f1.firebaseapp.com",
  projectId: "taskmanager-126f1",
  storageBucket: "taskmanager-126f1.appspot.com",
  messagingSenderId: "1009695294477",
  appId: "1:1009695294477:web:43e31907e1d53bf03ec144",
  measurementId: "G-QDRXB47KFB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);