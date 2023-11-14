import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Signin';
import Profile from './Profile';
import Signup from './Signup';

function App() {
  const token = localStorage.getItem('accessToken');

  if(!token) {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/" element={<Signin />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/" element={<Profile />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;