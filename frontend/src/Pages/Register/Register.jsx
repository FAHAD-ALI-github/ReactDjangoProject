import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css'; 
import BrandLogo from '../../components/Hero/Header/BrandLogo';

const Register = () => {
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    username: '',
    password: '',
    gender: 'M',
    date_of_birth: '',
    weight: '',
    height: ''
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/adduser/', userData);
      alert('Registration successful! Please log in.');
      navigate('/login');
    } catch (error) {
      const errors = error.response?.data || {};
      setError(errors);
      console.error('Registration failed:', errors);
    }
  };

  return (
    <div className="Page">
      <BrandLogo />
      <div className="blur page-blur-1"></div>
      <div className="form-body">
        <div className="form-container">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            {error.email && <p className="error-message">{`Email already in use, please change your email.`}</p>}
            
            <input
              type="text"
              name="phone_number"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
            {error.phone_number && <p className="error-message">{`Phone number already in use, please change your phone number.`}</p>}
            
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
            />
            {error.username && <p className="error-message">{`Username already in use, please change your username.`}</p>}
            
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="date_of_birth"
              placeholder="Date of Birth"
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="height"
              placeholder="Height (cm)"
              onChange={handleChange}
              required
            />
            <select name="gender" onChange={handleChange} required>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
            <button type="submit">Register</button>
          </form>
          <div className="footer">
            <p>Already have an account? <button onClick={() => navigate('/login')}>Back to Login</button></p>
          </div>
        </div>
        <div className="blur page-blur-2"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
