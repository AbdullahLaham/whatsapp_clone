// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNjctqY01qoaQN2MxDG6245vlGhF9PYXI",
  authDomain: "whatsappclone-74534.firebaseapp.com",
  projectId: "whatsappclone-74534",
  storageBucket: "whatsappclone-74534.appspot.com",
  messagingSenderId: "996637585337",
  appId: "1:996637585337:web:4b490bec6f90b014f19068"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
