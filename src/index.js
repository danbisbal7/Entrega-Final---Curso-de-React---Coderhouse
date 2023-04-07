import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4z4dWKtPk8sSfJq2gIAgFFurKPz87v4Y",
  authDomain: "house-of-the-guitar.firebaseapp.com",
  projectId: "house-of-the-guitar",
  storageBucket: "house-of-the-guitar.appspot.com",
  messagingSenderId: "856128904943",
  appId: "1:856128904943:web:bba4955ec5339a9d75451a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
);