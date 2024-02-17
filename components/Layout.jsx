// components/Layout.jsx

import React from 'react';

// Import Tailwind CSS
import 'tailwindcss/tailwind.css';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-black">
        <nav className="flex justify-between items-center h-16 px-4">
          {/* You can add other elements like a logo or additional buttons here */}
          <div>
            {/* Add additional buttons or elements here */}
          </div>
          <div className="flex space-x-4">
            {/* Add more navigation links as needed */}
            <a href="/" className="text-white">Home</a>
            <a href="/about" className="text-white">About</a>
            <a href="/about" className="text-white">Contact</a>
            <a href="/about" className="text-white">Login</a>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-black text-white text-center">
        {/* Footer content */}
        <p>&copy; {new Date().getFullYear()} Your Website</p>
      </footer>
    </div>
  );
};

export default Layout;
