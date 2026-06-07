// NeuroFract Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAxSLTUyg5yrTzX3_IXoaDvNrG3lXki_Ic",
  authDomain: "neurofract-ef9e9.firebaseapp.com",
  projectId: "neurofract-ef9e9",
  storageBucket: "neurofract-ef9e9.firebasestorage.app",
  messagingSenderId: "776562772320",
  appId: "1:776562772320:web:d3372ce81cfa2930747605",
  measurementId: "G-RXZ69KLV21"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
