import React, { useState } from 'react';
import './dashboard.css';
import Navigation from "../navbar/Navigation";
import SideNav from "../navbar/sideNav";  // Assuming the location of SideNav
import Main from '../Sections/Main/main';
import Friends from '../Sections/Friends/friends';
import Community from '../Sections/Community/community';
import Post from '../Sections/Post/post';
import Setting from '../Sections/Setting/setting';
import Survey from '../Sections/Survey/survey';
import Dash from '../Sections/Dash/dash';

function Dashboard() {
  const [currentSection, setCurrentSection] = useState('home');  // Default section

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div>
      <Navigation />
      <SideNav onSectionChange={handleSectionChange} />
      <section className="centersection">
        {currentSection === 'home' && <div> <Main/> </div>}
        {currentSection === 'friends' && <div> <Friends/> </div>}
        {currentSection === 'communities' && <div> <Community/>  </div>}
        {currentSection === 'setting' && <div>  <Setting/>  </div>}
        {currentSection === 'polls' && <div> <Survey/> </div>}
        {currentSection === 'postings' && <div> <Post/> </div>}
        {currentSection === 'dashboard' && <div> <Dash/> </div>}
      </section>
    </div>
  );
}

export default Dashboard;
