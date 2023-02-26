import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAEmJmGAJGWpcfyZjd3fnsRhJNdV9xT7bU",
  authDomain: "nisersoft.firebaseapp.com",
  projectId: "nisersoft",
  storageBucket: "nisersoft.appspot.com",
  messagingSenderId: "923457737521",
  appId: "1:923457737521:web:d54b2ebe6535a01d049610"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage =getStorage(app)



export default app;