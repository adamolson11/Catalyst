// components/Layout.jsx
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Self Improvement App</h1>
          {/* Add navigation links here */}
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              {/* Add more navigation links as needed */}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Self Improvement App</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
