// app.jsx

import { useEffect, useState } from 'react';
import MyAppContext from '../contexts/MyAppContext';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../firebase';

function MyApp({ Component, pageProps }) {
  const [authInstance, setAuthInstance] = useState(null);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    setAuthInstance(auth);

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <MyAppContext.Provider value={{ auth: authInstance }}>
      <Component {...pageProps} />
    </MyAppContext.Provider>
  );
}

export default MyApp;
