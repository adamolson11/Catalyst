// pages/dashboard.jsx

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated (you need to implement this logic)
    const isAuthenticated = true; // Example logic, replace with your actual authentication check

    if (!isAuthenticated) {
      // If user is not authenticated, redirect to login page
      router.push('/login');
    }
  }, []);

  return (
    <Layout>
    <div>
      <h1>Welcome to Your Dashboard</h1>
      {/* Add your dashboard content here */}
    </div>
    </Layout>
  );
};

export default DashboardPage;
