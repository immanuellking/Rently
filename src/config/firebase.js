// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACv0ZlFzcOHlXldI8uuRhnOX7B7DJltlo",
  authDomain: "rently-web.firebaseapp.com",
  projectId: "rently-web",
  storageBucket: "rently-web.appspot.com",
  messagingSenderId: "487571499011",
  appId: "1:487571499011:web:0b3fa952f3bb87cc050636",
  measurementId: "G-6L0YD4X3LF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
