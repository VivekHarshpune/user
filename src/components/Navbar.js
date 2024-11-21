import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../api/AuthContext';
import './Navbar.css'; // Import the updated CSS file

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    logout(); // Perform the logout action
    navigate('/'); // Navigate to the home page
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
      <img src="/images/cb_logo/image copy.png" alt="Community Book Logo" className="logo-image" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/" className="link">Home</Link></li>
        <li><Link to="/bookings" className="link">Bookings</Link></li>
        <li><Link to="/profile" className="link">Profile</Link></li>
        {!isAuthenticated ? (
          <>
            <li><Link to="/register" className="link">Register</Link></li>
            <li><Link to="/login" className="link">Login</Link></li>
          </>
        ) : (
          <li>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
