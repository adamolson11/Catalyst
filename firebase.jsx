// firebase.jsx

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwyw4tmUakTy42L_5tz3H-dVD7uVffMSY",
  authDomain: "catalyst-9ff1a.firebaseapp.com",
  projectId: "catalyst-9ff1a",
  storageBucket: "catalyst-9ff1a.appspot.com",
  messagingSenderId: "468579796919",
  appId: "1:468579796919:web:9ddaa9b62d7c69460f4a32"
};

// Initialize Firebase app and authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, firebaseConfig };