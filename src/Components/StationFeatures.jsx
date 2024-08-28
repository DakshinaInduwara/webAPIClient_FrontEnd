import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Admin.css';

const StationFeatures = () => {
  const [stations, setStations] = useState([]);
  const [newStation, setNewStation] = useState({ stationId: '', name: '', location: '', capacity: '' });

  useEffect(() => {
    fetchStations();
  }, []);

  // Fetch all stations
  const fetchStations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/stations');
      setStations(response.data);
    } catch (error) {
      console.error('Failed to fetch stations:', error);
    }
  };

  // Add new station
  const handleAddStation = async () => {
    try {
      await axios.post('http://localhost:5000/api/stations', newStation);
      fetchStations();
    } catch (error) {
      console.error('Failed to add station:', error);
    }
  };

  // Delete station
  const handleDeleteStation = async (stationId) => {
    try {
      await axios.delete(`http://localhost:5000/api/stations/${stationId}`);
      fetchStations();
    } catch (error) {
      console.error('Failed to delete station:', error);
    }
  };

  return (
    <div className="feature-section">
      <h2 className="feature-title">Station Features</h2>
      <div className="feature-box">
        <h3>Add New Station</h3>
        <div className="input-group">
          <input type="text" placeholder="Station ID" onChange={(e) => setNewStation({ ...newStation, stationId: e.target.value })} />
          <input type="text" placeholder="Station Name" onChange={(e) => setNewStation({ ...newStation, name: e.target.value })} />
          {/* Additional input fields for location and capacity */}
        </div>
        <button className="action-button" onClick={handleAddStation}>Add Station</button>
      </div>

      <div className="feature-box">
        <h3>Stations List</h3>
        <ul className="station-list">
          {stations.map(station => (
            <li key={station._id} className="station-item">
              {station.name} ({station.stationId})
              <button className="delete-button" onClick={() => handleDeleteStation(station._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StationFeatures;
