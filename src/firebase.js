import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAE2ZJRcyHdxo3J1kY-eMOrXG9Kh17crCg",
  authDomain: "baycoin-dd98f.firebaseapp.com",
  projectId: "baycoin-dd98f",
  storageBucket: "baycoin-dd98f.firebasestorage.app",
  messagingSenderId: "63143819833",
  appId: "1:63143819833:web:f7ee3b13935477698eabe8",
  measurementId: "G-GWN4GD1S07"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };