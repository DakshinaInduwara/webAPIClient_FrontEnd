import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import '../styles/Admin.css';

const TrainFeatures = () => {
  const [trains, setTrains] = useState([]);
  const [newTrain, setNewTrain] = useState({ trainId: '', trainName: '', location: '', lat: '', lon: '', speed: '', capacity: '' });
  const [updatedTrain, setUpdatedTrain] = useState({ _id: '', trainId: '', trainName: '', location: '', lat: '', lon: '', speed: '', capacity: '' });
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  // Fetch all trains
  const fetchTrains = useCallback(async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/trains`);
      setTrains(response.data);
    } catch (error) {
      console.error('Failed to fetch trains:', error);
    }
  }, [backendUrl]);

  useEffect(() => {
    fetchTrains();
  }, [fetchTrains]);

  // Add new train
  const handleAddTrain = async () => {
    try {
      await axios.post(`${backendUrl}/api/trains`, newTrain);
      fetchTrains();
    } catch (error) {
      console.error('Failed to add train:', error);
    }
  };

  // Update train
  const handleUpdateTrain = async () => {
    try {
      await axios.put(`${backendUrl}/api/trains/${updatedTrain._id}`, updatedTrain);
      fetchTrains();
      setUpdatedTrain({ _id: '', trainId: '', trainName: '', location: '', lat: '', lon: '', speed: '', capacity: '' });
    } catch (error) {
      console.error('Failed to update train:', error);
    }
  };

  // Delete train
  const handleDeleteTrain = async (trainId) => {
    try {
      await axios.delete(`${backendUrl}/api/trains/${trainId}`);
      fetchTrains();
    } catch (error) {
      console.error('Failed to delete train:', error);
    }
  };

  return (
    <div className="feature-section">
      <h2 className="feature-title">Train Features</h2>
      
      {/* Add New Train Section */}
      <div className="feature-box">
        <h3>Add New Train</h3>
        <div className="input-group">
          <input type="text" placeholder="Train ID" onChange={(e) => setNewTrain({ ...newTrain, trainId: e.target.value })} />
          <input type="text" placeholder="Train Name" onChange={(e) => setNewTrain({ ...newTrain, trainName: e.target.value })} />
          {/* Add additional input fields for location, lat, lon, etc. */}
        </div>
        <button className="action-button" onClick={handleAddTrain}>Add Train</button>
      </div>

      {/* Update Train Section */}
      <div className="feature-box">
        <h3>Update Train</h3>
        <div className="input-group">
          <input type="text" placeholder="Train ID" value={updatedTrain.trainId} onChange={(e) => setUpdatedTrain({ ...updatedTrain, trainId: e.target.value })} />
          <input type="text" placeholder="Train Name" value={updatedTrain.trainName} onChange={(e) => setUpdatedTrain({ ...updatedTrain, trainName: e.target.value })} />
          {/* Add additional input fields for location, lat, lon, etc. */}
        </div>
        <button className="action-button" onClick={handleUpdateTrain}>Update Train</button>
      </div>

      {/* Display Trains List */}
      <div className="feature-box">
        <h3>Trains List</h3>
        <ul className="train-list">
          {trains.map(train => (
            <li key={train._id} className="train-item">
              {train.trainName} ({train.trainId})
              <button className="delete-button" onClick={() => handleDeleteTrain(train._id)}>Delete</button>
              <button className="edit-button" onClick={() => setUpdatedTrain(train)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrainFeatures;
