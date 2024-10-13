import React, { useState, useEffect } from 'react';
import './header.css';
import Logo from '../../../assets/logo2.png';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      
      {isMobile && (
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰ Menu
        </div>
      )}

      <ul className={`header-menu ${isOpen ? 'open' : ''}`}>
        <li><Link to="home" span={true} smooth={true} onClick={toggleMenu}>Home</Link></li>
        <li><Link to="programs" span={true} smooth={true} onClick={toggleMenu}>Programs</Link></li>
        <li><Link to="whyus" span={true} smooth={true} onClick={toggleMenu}>Why us</Link></li>
        <li><Link to="testimonials" span={true} smooth={true} onClick={toggleMenu}>Testimonials</Link></li>
        <li><RouterLink to="/login" onClick={toggleMenu}>My Profile</RouterLink></li>
        <li><RouterLink to="/members" onClick={toggleMenu}>All Members</RouterLink></li>
      </ul>
    </div>
  );
};

export default Header;
