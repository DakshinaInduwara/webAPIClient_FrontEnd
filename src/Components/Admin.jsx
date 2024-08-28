import React, { useState } from 'react';
import NavBar from './NavBar';
import AdminFeatures from './AdminFeatures';
import TrainFeatures from './TrainFeatures';
import StationFeatures from './StationFeatures';
import '../styles/Admin.css';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'admin':
        return <AdminFeatures />;
      case 'train':
        return <TrainFeatures />;
      case 'station':
        return <StationFeatures />;
      default:
        return <div className="dashboard-home">Select a feature to manage</div>;
    }
  };

  return (
    <div>
      <NavBar />
      <div className="admin-container">
        <h1>Admin Dashboard</h1>
        <div className="admin-buttons">
          <button onClick={() => setActiveSection('admin')}>Admin Features</button>
          <button onClick={() => setActiveSection('train')}>Train Features</button>
          <button onClick={() => setActiveSection('station')}>Station Features</button>
        </div>
        <div className="admin-content">
          {renderActiveSection()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
