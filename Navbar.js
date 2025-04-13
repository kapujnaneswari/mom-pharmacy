// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Mom Pharmacy</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/consultation">Consultation</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/Cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
