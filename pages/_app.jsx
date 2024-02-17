import { useEffect, useState } from 'react';
import MyAppContext from '../contexts/MyAppContext';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { auth } from '../firebase'; // Import Firebase auth instance
import { firebaseConfig } from '../firebase'; // Import Firebase configuration

function MyApp({ Component, pageProps }) {
  const [authInstance, setAuthInstance] = useState(null);

  useEffect(() => {
    // Initialize Firebase app and authentication
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    setAuthInstance(auth);
  }, []);

  return (
    <MyAppContext.Provider value={{ auth: authInstance }}>
      <Component {...pageProps} />
    </MyAppContext.Provider>
  );
}

export default MyApp;
