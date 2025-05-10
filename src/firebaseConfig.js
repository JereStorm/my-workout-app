// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAH7Qc8QkTR8AWBOxptwHH6IxIXpIx-c00",
    authDomain: "calisteniarg-f3d40.firebaseapp.com",
    projectId: "calisteniarg-f3d40",
    storageBucket: "calisteniarg-f3d40.firebasestorage.app",
    messagingSenderId: "641759769239",
    appId: "1:641759769239:web:9e4d3ffdd5dc9645f56fd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };