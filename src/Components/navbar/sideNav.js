import React, { useState } from 'react';
import { FaUserFriends, FaUsers, FaCog,  FaFlag, FaPoll, FaEdit, FaHome, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa'; // Include the FaTachometerAlt icon
import './dashboard.css';
import { NavLink } from 'react-router-dom';

function SideNav({ onSectionChange }) {
  const [selectedItem, setSelectedItem] = useState('home');

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    onSectionChange(itemName); // Trigger the change in the Dashboard component
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className={selectedItem === 'home' ? 'selected' : ''} onClick={() => handleItemClick('home')}>
          <FaHome className="sidebar-icon" />
          <span>Home</span>
        </li>

        <li className={selectedItem === 'dashboard' ? 'selected' : ''} onClick={() => handleItemClick('dashboard')}>
          <FaTachometerAlt className="sidebar-icon" />
          <span>Dashboard</span>
        </li>

        <li className={selectedItem === 'friends' ? 'selected' : ''} onClick={() => handleItemClick('friends')}>
          <FaUserFriends className="sidebar-icon" />
          <span>Find Friends</span>
        </li>
        <li className={selectedItem === 'communities' ? 'selected' : ''} onClick={() => handleItemClick('communities')}>
          <FaUsers className="sidebar-icon" />
          <span>Communities</span>
        </li>
        <li className={selectedItem === 'polls' ? 'selected' : ''} onClick={() => handleItemClick('polls')}>
          <FaPoll className="sidebar-icon" />
          <span>Polls/Surveys</span>
        </li>
        <li className={selectedItem === 'postings' ? 'selected' : ''} onClick={() => handleItemClick('postings')}>
          <FaEdit className="sidebar-icon" />
          <span>Blogs</span>
        </li>
        {/* <li className={selectedItem === 'setting' ? 'selected' : ''} onClick={() => handleItemClick('setting')}>
          <FaCog className="sidebar-icon" />
          <span>Settings</span>
        </li> */}

        <NavLink to="/login">
          <li style={{marginTop: "150px"}} >
            <FaSignOutAlt className="sidebar-icon" />
            <span>Logout</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default SideNav;
