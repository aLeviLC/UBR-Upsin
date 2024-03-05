import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC6LsZ_K3VgvLx3tdcrokCwfLyHZ4iw-Ts",
  authDomain: "proyecto-melissa-vite.firebaseapp.com",
  projectId: "proyecto-melissa-vite",
  storageBucket: "proyecto-melissa-vite.appspot.com",
  messagingSenderId: "516213900256",
  appId: "1:516213900256:web:97350d11c261bb304fe185",
  measurementId: "G-XJ64T67PCS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);