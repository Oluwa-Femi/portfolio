import React from 'react';
import SideBar from './sidebar';
import Image from './images/femi-oluwatola.jpg';

import './App.css';

export default function App() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap">
        <img src={Image} alt="Oluwafemi Oluwatola" height="400px" weight="400px"/>
        <h1>Hi, I'm Oluwafemi,</h1>
        <h2>a full stack engineer specializing in front-end and back-end web development.</h2>
        <h2>I have no room for small dreams.</h2>
        <div class = "page-button">
        <button class = "profile">Profile</button>
        <button class = "portfolio">Portfolio</button>
        </div>
      </div>
    </div>
  );
}
