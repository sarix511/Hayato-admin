
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDyjHRJ7_q-VrxEh2joJcyumzCzqibABfI",
  authDomain: "hayato-esports-84f9e.firebaseapp.com",
  projectId: "hayato-esports-84f9e",
  storageBucket: "hayato-esports-84f9e.appspot.com",
  messagingSenderId: "498924188514",
  appId: "1:498924188514:web:eedb60efe5e1a7abfff23b",
  measurementId: "G-WN5MGVN8PJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

window.db = db;
window.auth = auth;
window.provider = provider;
