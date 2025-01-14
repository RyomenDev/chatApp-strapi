import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import firebaseConf from "./conf/firebase-conf.jsx";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseConf.FIREBASE_APIKEY,
  authDomain: firebaseConf.FIREBASE_AUTHDOMAIN,
  projectId: firebaseConf.FIREBASE_PROJECTID,
  storageBucket: firebaseConf.FIREBASE_STORAGEBUCKET,
  messagingSenderId: firebaseConf.FIREBASE_MESSAGINGSENDERID,
  appId: firebaseConf.FIREBASE_APPID,
  measurementId: firebaseConf.FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase auth instance
export const auth = getAuth(app);

// Export providers
export const googleProvider = new GoogleAuthProvider();
