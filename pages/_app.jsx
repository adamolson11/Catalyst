import { useEffect } from 'react';
import { initializeApp, getApp } from 'firebase/app'; // Import initializeApp and getApp functions from Firebase
import { getAuth } from 'firebase/auth'; // Import getAuth function from Firebase Authentication
import '../styles/globals.css';

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwyw4tmUakTy42L_5tz3H-dVD7uVffMSY",
  authDomain: "catalyst-9ff1a.firebaseapp.com",
  projectId: "catalyst-9ff1a",
  storageBucket: "catalyst-9ff1a.appspot.com",
  messagingSenderId: "468579796919",
  appId: "1:468579796919:web:9ddaa9b62d7c69460f4a32"
};

function MyApp({ Component, pageProps }) {
  // Initialize Firebase when the component mounts
  useEffect(() => {
    // Check if the Firebase app already exists
    if (!getApp().length) {
      const app = initializeApp(firebaseConfig);
      // Optionally, initialize other Firebase services here if needed
      // For example, if you're using Firebase Authentication:
      const auth = getAuth(app);
    }
  }, []);

  // This effect runs only once when the component mounts
  return <Component {...pageProps} />;
}

export default MyApp;
