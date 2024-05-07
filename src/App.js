// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/login'
import Signup from './Components/Signup/signup'
import Home from './Components/Home/home';
import Dashboard from './Components/Dashboard/dashboard';
import Main from './Components/Sections/Main/main';
import Friends from './Components/Sections/Friends/friends';
import Community from './Components/Sections/Community/community';
import Post from './Components/Sections/Post/post';
import Setting from './Components/Sections/Setting/setting';
import Survey from './Components/Sections/Survey/survey';
import Dash from './Components/Sections/Dash/dash'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/main" element={<Main />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/community" element={<Community />} />
        <Route path="/post" element={<Post />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/dash" element={<Dash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
