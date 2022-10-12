// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBzxQbwPiEEDALA-MNVwrvcpz0HYj6hoQ",
  authDomain: "onlinestore-bddc1.firebaseapp.com",
  projectId: "onlinestore-bddc1",
  storageBucket: "onlinestore-bddc1.appspot.com",
  messagingSenderId: "644079446541",
  appId: "1:644079446541:web:91fa37e05412072ee90344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);