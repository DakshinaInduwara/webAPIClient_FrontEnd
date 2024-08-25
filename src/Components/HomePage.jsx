import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import trainImage from '../Images/HomePage.jpeg';
import NavBar from './NavBar'; 

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Include the navigation bar at the top */}
      <NavBar />
      <div className="homepage-image-container">
        <img src={trainImage} alt="Homepage" className="homepage-image" />
      </div>
    </div>
  );
};

export default HomePage;
