import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, orderBy } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBWhXrXPNYFn9_z8Laww-0w5kkoHGLNQSU",
  authDomain: "quizingsphere1.firebaseapp.com",
  projectId: "quizingsphere1",
  storageBucket: "quizingsphere1.firebasestorage.app",
  messagingSenderId: "168499632394",
  appId: "1:168499632394:web:a29e3617fc1c44cc0e42f3",
  measurementId: "G-ZP20NK72SF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, orderBy, signInWithEmailAndPassword, onAuthStateChanged, signOut }; 