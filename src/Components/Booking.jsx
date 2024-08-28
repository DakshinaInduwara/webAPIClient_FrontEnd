import React from 'react';
import NavBar from './NavBar';
import '../styles/Booking.css';

export const Booking = () => {
  return (
    <>
    <NavBar />
    <div className="booking-page-container">
      <h2>Book Your Seat</h2>
      <p>You can book both ways</p>
      <div className="booking-form">
        <div>
          <label>From</label>
          <select>
            <option>Choose Station</option>
            <option value="">Colombo</option>
              <option value="Colombo to Beliatta">Matara</option>
              <option value="Colombo to Kandy">Kandy</option>
              <option value="Colombo to Badulla">Badulla</option>
              <option value="Colombo to Anuradaura">Anuradaura</option>
            {/* Add stations */}
          </select>
        </div>
        <div>
          <label>To</label>
          <select>
            <option>Choose Station</option>
            <option value="">Matata</option>
              <option value="Colombo to Beliatta">Beliatta</option>
              <option value="Colombo to Kandy">Kandy</option>
              <option value="Colombo to Badulla">Badulla</option>
              <option value="Colombo to Anuradaura">Anuradaura</option>
            {/* Add stations */}
          </select>
        </div>
        <div>
          <label>Date</label>
          <input type="date" />
        </div>
        <div>
          <label>No of Passengers</label>
          <input type="number" min="1" />
        </div>
        <div>
          <label>
            <input type="checkbox" /> Return
          </label>
        </div>
        <div>
          <button className="submit-btn">Booking</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Booking;
