import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './profile.css';
import '../../App.css';
import Footer from '../../components/Footer/Footer';
import BrandLogo from '../../components/Hero/Header/BrandLogo';
import Exercises from '../../components/Exercises/Exercises';

const Profile = () => {
  const location = useLocation();
  const user = location.state?.user;
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/update', { state: { user } });
  };

  const transition = { duration: 3, type: 'spring' };

  return (
    <div className="Page">
      <BrandLogo />
      <div className="profile-blur blur"></div>

      {/* User Information Section */}
      <div className="profile">
        <div className="profile-hero-text">
          <div>
            <span className="profile-stroke-text">Welcome, </span>
            <span>{user?.first_name} {user?.last_name}</span>
          </div>

          {/* Animated Tagline */}
          <div className="profile-tagline">
            <motion.div
              initial={{ left: '220px' }}
              whileInView={{ left: '8px' }}
              transition={{ ...transition, type: 'tween' }}
            />
            <span>Your Fitness journey starts here!</span>
          </div>
        </div>

        <div className="profile-info">
          <div className="profile-figures">
            <div>
              <span>{user?.email}</span>
              <span>Email</span>
            </div>
            <div>
              <span>{user?.phone_number}</span>
              <span>Phone Number</span>
            </div>
            <div>
              <span>{user?.date_of_birth}</span>
              <span>Date of Birth</span>
            </div>
          </div>
          <div className="profile-figures">
            <div>
              <span>{user?.weight} kg</span>
              <span>Weight</span>
            </div>
            <div>
              <span>{user?.height} cm</span>
              <span>Height</span>
            </div>
            <div>
              <span>{user?.gender === 'M' ? 'Male' : 'Female'}</span>
              <span>Gender</span>
            </div>
          </div>
        </div>

        {/* Hero buttons */}
        <div className="profile-buttons">
          <button className="profile-btn-primary button_" onClick={handleEditProfile}>
            Edit Profile
          </button>
          <Link to="exercises" span={true} smooth={true} ><button className="profile-btn-secondary button_">View Exercises</button></Link>
        </div>
      </div>

      <div id="exercises">
      <Exercises />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
