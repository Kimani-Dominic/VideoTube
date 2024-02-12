// Import the functions you need from the SDKs you need
import { initializeApp, getApps} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcLlCANmIvuoNX8LZhQ4R8ccVzlAMCrR4",
  authDomain: "video-tube-12.firebaseapp.com",
  projectId: "video-tube-12",
  storageBucket: "video-tube-12.appspot.com",
  messagingSenderId: "732823065076",
  appId: "1:732823065076:web:791708aebe9fbf81d0e9a1",
  measurementId: "G-9MWZC7E7V4"
};

// Initialize Firebase
let firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebaseApp;