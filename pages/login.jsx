// login.jsx
import React from 'react';
import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';
import { useRouter } from 'next/router'; // Import the useRouter hook

const LoginPage = () => {
  const router = useRouter(); // Get the router object using the useRouter hook

  return (
    <Layout>
      <div>
        <h1 className="text-center text-4xl font-bold">Login Page</h1>
        <LoginForm router={router} /> {/* Pass the router object as a prop */}
      </div>
    </Layout>
  );
};

export default LoginPage;
