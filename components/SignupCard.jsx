import React from 'react';

const SignupCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700">First Name</label>
            <input type="text" id="firstName" name="firstName" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none" />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
            <input type="text" id="lastName" name="lastName" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none" />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none" />
          </div>
        
          
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupCard;
