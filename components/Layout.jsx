// components/Layout.jsx

import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <header>
        <nav>
          {/* Navigation links */}
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main>
        {/* Render the children components */}
        {children}
      </main>

      {/* Footer */}
      <footer>
        {/* Footer content */}
        <p>&copy; {new Date().getFullYear()} Your Website</p>
      </footer>
    </div>
  );
};

export default Layout;
