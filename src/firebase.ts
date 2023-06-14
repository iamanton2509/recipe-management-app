import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFdSc07CCbyyQvXpzSDuNfnZVJxjerdzU",
  authDomain: "recipe-a6acf.firebaseapp.com",
  projectId: "recipe-a6acf",
  storageBucket: "recipe-a6acf.appspot.com",
  messagingSenderId: "123000635613",
  appId: "1:123000635613:web:bbdf07fb353dfa5cebdb34"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;