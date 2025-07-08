// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDnbD4DjpY3gaD3s1NdHOs_q6LqWzk5VqI",
  authDomain: "hayato-esports-87c0e.firebaseapp.com",
  projectId: "hayato-esports-87c0e",
  storageBucket: "hayato-esports-87c0e.appspot.com",
  messagingSenderId: "516162272287",
  appId: "1:516162272287:web:12ecf2ae672cc0658ee92a",
  measurementId: "G-5QG34M1C94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };