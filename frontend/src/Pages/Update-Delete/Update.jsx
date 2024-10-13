import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './update.css';
import Footer from '../../components/Footer/Footer';
import BrandLogo from '../../components/Hero/Header/BrandLogo';

const Update = () => {
  const location = useLocation();
  const user = location.state?.user;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: user?.first_name || '',
    last_name: user?.last_name || '',
    email: user?.email || '',
    phone_number: user?.phone_number || '',
    date_of_birth: user?.date_of_birth || '',
    weight: user?.weight || '',
    height: user?.height || '',
    gender: user?.gender || 'M',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    // If the password field is empty, use the previous password
    const dataToSubmit = {
      ...formData,
      password: formData.password || user.password,
    };

    const response = await fetch(`http://127.0.0.1:8000/update/${user.id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSubmit),
    });

    if (response.ok) {
      navigate('/profile', { state: { user: { ...user, ...dataToSubmit } } });
    } else {
      console.error('Failed to update user');
    }
  };

  const handleDelete = async () => {
    const response = await fetch(`http://127.0.0.1:8000/delete/${user.id}/`, {
      method: 'DELETE',
    });

    if (response.ok) {
      navigate('/register'); // Redirect to register or any other page after deletion
    } else {
      console.error('Failed to delete user');
    }
  };

  const handleCancel = () => {
    navigate('/profile', { state: { user } });
  };

  return (
    <div className="Page">
    <BrandLogo />
    <div className="blur page-blur-1"></div>
      <div className="update-body">
        <div className="update-container">
          <h2>Update Profile</h2>
          
          <label style={{ color: 'white' }}>First Name</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
            placeholder="First Name"
          />
          
          <label style={{ color: 'white' }}>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
            placeholder="Last Name"
          />
          
          <label style={{ color: 'white' }}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          
          <label style={{ color: 'white' }}>Phone Number</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleInputChange}
            placeholder="Phone Number"
          />
          
          <label style={{ color: 'white' }}>Date of Birth</label>
          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleInputChange}
            placeholder="Date of Birth"
          />
          
          <label style={{ color: 'white' }}>Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            placeholder="Weight (kg)"
          />
          
          <label style={{ color: 'white' }}>Height (cm)</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleInputChange}
            placeholder="Height (cm)"
          />
          
          <label style={{ color: 'white' }}>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleInputChange}>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>

          <label style={{ color: 'white' }}>New Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="New Password"
          />

          <div className="button-group">
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleCancel} className="cancel-button">
              Cancel
            </button>
          </div>

          <div className="delete-section">
            <p>If you want to delete your account?</p>
            <button onClick={handleDelete} className="delete-button">
              Delete Account
            </button>
          </div>
        </div>
      <div className="blur page-blur-2"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Update;
