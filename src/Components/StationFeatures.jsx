import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import '../styles/Admin.css';

const StationFeatures = () => {
  const [stations, setStations] = useState([]);
  const [newStation, setNewStation] = useState({ stationId: '', name: '', location: '', capacity: '' });
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  // Fetch all stations
  const fetchStations = useCallback(async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/stations`);
      setStations(response.data);
    } catch (error) {
      console.error('Failed to fetch stations:', error);
    }
  }, [backendUrl]);

  useEffect(() => {
    fetchStations();
  }, [fetchStations]);

  // Add new station
  const handleAddStation = async () => {
    try {
      await axios.post(`${backendUrl}/api/stations`, newStation);
      fetchStations();
    } catch (error) {
      console.error('Failed to add station:', error);
    }
  };

  // Delete station
  const handleDeleteStation = async (stationId) => {
    try {
      await axios.delete(`${backendUrl}/api/stations/${stationId}`);
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
          <input
            type="text"
            placeholder="Station ID"
            onChange={(e) => setNewStation({ ...newStation, stationId: e.target.value })}
          />
          <input
            type="text"
            placeholder="Station Name"
            onChange={(e) => setNewStation({ ...newStation, name: e.target.value })}
          />
          {/* Additional input fields for location and capacity */}
          <input
            type="text"
            placeholder="Location"
            onChange={(e) => setNewStation({ ...newStation, location: e.target.value })}
          />
          <input
            type="text"
            placeholder="Capacity"
            onChange={(e) => setNewStation({ ...newStation, capacity: e.target.value })}
          />
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
