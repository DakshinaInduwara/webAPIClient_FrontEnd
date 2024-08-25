import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Booking from './Booking';
import trainImage from '../Images/HomePage.jpeg';
import '../styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewLocationClick = () => {
    navigate('/trainlist'); // Navigate to the TrainList component
  };

  return (
    <div className="home-container">
      {/* Include the navigation bar at the top */}
      <NavBar />

      {/* Homepage image section */}
      <div className="homepage-image-container">
        <img src={trainImage} alt="Homepage" className="homepage-image" />
        <div className="hero-text">
          <h1>Welcome to Sri Lanka Railways</h1>
          <p>Online Advanced Train Tracking System</p>
          <button className="check-loc-button" onClick={handleViewLocationClick}>
            View Your Train Location
          </button>
        </div>
      </div>

      <Booking />
    </div>
  );
};

export default HomePage;
