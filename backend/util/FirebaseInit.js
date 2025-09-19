// In this file we will initialize our firebase database

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: copy-paste the config variables found in your Firebase Project Settings!
const firebaseConfig = {
  apiKey: "AIzaSyDaPKj87lI51bc4BlY40KfnhCIZfVKUdZU",
  authDomain: "fullstack-deliverable-bb567.firebaseapp.com",
  projectId: "fullstack-deliverable-bb567",
  storageBucket: "fullstack-deliverable-bb567.firebasestorage.app",
  messagingSenderId: "1029062217715",
  appId: "1:1029062217715:web:e63fa41ff342ec40984c86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
