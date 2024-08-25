import React from 'react';
import '../styles/Booking.css';

const Booking = () => {
  return (
    <div className="booking-section">
      <h2>Book Your Seat</h2>
      <p>You can book both ways</p>
      <div className="booking-form">
        <div>
          <label>From</label>
          <select>
            <option>Choose Station</option>
            {/* Add stations */}
          </select>
        </div>
        <div>
          <label>To</label>
          <select>
            <option>Choose Station</option>
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
          <button className="captcha">I'm not a robot</button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
