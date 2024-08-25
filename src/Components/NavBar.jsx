import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import '../styles/NavBar.css';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSignUpClick = () => {
        navigate('/register');
    };
    
    return (
      <nav className="navbar">
        <div className="nav-logo">
          <img src="logo.png" alt="SL Railways Logo" />
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/history">History</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
        <div className="nav-auth">
          <span>Already have an account?</span>
          <button className="login-btn" onClick={handleLoginClick}>Login</button>
          <button className="signup-btn" onClick={handleSignUpClick}>Sign Up</button>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
