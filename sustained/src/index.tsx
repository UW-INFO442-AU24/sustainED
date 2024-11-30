import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtU3f3BcOrfcbUuGiu228NMy8Wnl3jkmw",
  authDomain: "sustained-f16ac.firebaseapp.com",
  databaseURL: "https://sustained-f16ac-default-rtdb.firebaseio.com",
  projectId: "sustained-f16ac",
  storageBucket: "sustained-f16ac.firebasestorage.app",
  messagingSenderId: "924904245250",
  appId: "1:924904245250:web:1eb36f88596233163bbf1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();