import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import '../styles/TrainList.css';

const TrainList = () => {
  const [trains, setTrains] = useState([]);
  const navigate = useNavigate();

  const handleNavigate = (trainId) => {
    navigate(`/trainlist/${trainId}`);
  };

  useEffect(() => {
    const fetchAllTrains = async () => {
      try {
        const res = await axios.get('http://localhost:5000/web/train/get');
        setTrains(res.data);
      } catch (error) {
        console.error('Failed to fetch trains:', error);
      }
    };
    fetchAllTrains();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="train-list-container">
        {trains.map((item) => (
          <div className="train-card" key={item._id}>
            <img src={`/path/to/your/train/image/${item.trainId}.png`} alt={item.trainId} className="train-image" />
            <h3>{item.trainId}</h3>
            <p>Current Location: {item.location || 'Unknown'}</p>
            <button
              onClick={() => handleNavigate(item._id)}
              className="check-location-button"
            >
              Check Location
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainList;
