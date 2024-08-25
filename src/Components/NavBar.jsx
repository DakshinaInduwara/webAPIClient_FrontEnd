import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePageNavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={require('../Images/HomePage.jpeg')} alt="Train" className="train-image" />
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/trainlist">Train List</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/history">History</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/terms">Terms and Conditions</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default HomePageNavBar;
