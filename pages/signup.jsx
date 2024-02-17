import Head from 'next/head';
import Layout from '../components/Layout';
import SignupCard from '../components/SignupCard'; // Import the SignupCard component
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import createUserWithEmailAndPassword function from Firebase authentication
 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Create a new user account with the provided email and password
      await createUserWithEmailAndPassword(auth, email, password);
      // If successful, handle redirect or any other action
      console.log('User signed up successfully!');
    } catch (error) {
      // Handle errors
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Sign Up - Catalyst</title>
      </Head>
      <div className="relative min-h-screen flex items-center justify-center">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src="/images/signup page.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4"> "A journey of a thousand miles begins with a single step"</h1>
            <SignupCard email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleSignup={handleSignup} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
