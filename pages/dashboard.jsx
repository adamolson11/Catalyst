import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import Firebase authentication methods
import Layout from '../components/Layout';
import { getUserData } from '../utils/firebaseUtils'; // Import a function to fetch user-specific data

const DashboardPage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const auth = getAuth(); // Obtain the auth object

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // If user is authenticated, fetch user-specific data
        const userData = await getUserData(user.uid); // Fetch user data using their UID
        setUserData(userData);
      } else {
        // If user is not authenticated, redirect to login page
        router.push('/login');
      }
    });

    // Unsubscribe from the authentication state listener when component unmounts
    return () => unsubscribe();
  }, [router]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div>
        <h1>Welcome to Your Dashboard, {userData.displayName}!</h1>
        {/* Display user-specific dashboard content here */}
      </div>
    </Layout>
  );
};

export default DashboardPage;
