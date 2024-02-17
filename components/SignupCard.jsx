// SignupCard.jsx

import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import createUserWithEmailAndPassword function from Firebase authentication
import { auth } from '../firebase'; // Import Firebase auth instance

const SignupCard = () => {
  const handleSignup = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    // Check if passwords match
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

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
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none text-black" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none text-black" required />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none text-black" required />
          </div>
          
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupCard;
