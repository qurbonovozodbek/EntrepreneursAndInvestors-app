import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="premium-header">
      <div className="logo">
        <h1>Investor-Entrepreneur Connect</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
