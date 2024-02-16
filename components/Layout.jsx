// components/Layout.jsx
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 py-4">
        <nav className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">Self Improvement App</div>
          {/* Navigation links */}
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main className="container mx-auto py-8 flex-grow">
        {/* Render the children components */}
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto text-center">
          {/* Footer content */}
          <p>&copy; {new Date().getFullYear()} Self Improvement App</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
