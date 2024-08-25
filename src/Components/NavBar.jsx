import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import '../styles/NavBar.css';

// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <img src={require('../Images/HomePage.jpeg')} alt="Train" className="train-image" />
//       </div>
//       <div className="navbar-right">
//         <ul className="nav-links">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/trainlist">Train List</Link></li>
//           <li><Link to="/gallery">Gallery</Link></li>
//           <li><Link to="/history">History</Link></li>
//           <li><Link to="/services">Services</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//           <li><Link to="/terms">Terms and Conditions</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;


const NavBar = () => {
    return (
      <nav className="navbar">
        <div className="nav-logo">
          <img src="logo.png" alt="SL Railways Logo" />
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/booking">Booking</a>
          <a href="/gallery">Gallery</a>
          <a href="/history">History</a>
          <a href="/services">Our Services</a>
          <a href="/contact">Contact</a>
          <a href="/terms">Terms & Conditions</a>
        </div>
        <div className="nav-auth">
          <span>Already have an account?</span>
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>
    );
  };
  
  export default NavBar;