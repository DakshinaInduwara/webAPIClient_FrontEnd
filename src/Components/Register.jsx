import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import '../styles/Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Define the handleRegister function outside of useEffect
  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:5000/web/user/register', {
        username,
        email,
        password,
      });

      // Navigate to the login page upon successful registration
      navigate('/login');
    } catch (error) {
      console.error('Failed to register:', error);
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <NavBar />
      <div className="register-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
          className="register-form"
        >
          <h2>Register</h2>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
