import React from 'react';
import './Header.css';
import { FaPlus, FaSearch, FaBell } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <span className="health">Health</span><span className="care">care.</span>
      </div>

      <div className="header-center">
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="    Search..." className="search-bar" />
        </div>
        <button className="icon-button notification">
          <FaBell />
        </button>
      </div>

      <div className="header-right">
        
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Profile"
          className="profile-avatar"
        />
        <button className="icon-button">
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default Header;
