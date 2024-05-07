import React from 'react'
import './dashboard.css'
import { FaUserFriends, FaUsers, FaFlag, FaPoll, FaEdit, FaBell, FaSearch, FaHome } from 'react-icons/fa'; // Added FaHome icon
import './dashboard.css';
import logo from '../Images/logo4.PNG';
import user from '../Images/user.png';
function topNav() {
  return (
    <div>
         <div className="topbar">
        <div className="logo">
          <img src={logo} alt="Logo" style={{ width: '50px', height: '30px' }} />
        </div>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" className="search-input" placeholder="Search Here" />
        </div>
        <div className="toplist">
          <p className="txt">Take a Tour</p>
          <p className="txt">Explore</p>
        </div>
        <div className="profile">
          <FaBell className="notification-icon" /> {/* Added notification icon */}
          <img className='userimage' src={user} alt="Logo" style={{ width: '32px', height: '32px' }} />
          <p className="txtmain">Mahnoor Younas</p>
        </div>
      </div>
    </div>
  )
}

export default topNav
