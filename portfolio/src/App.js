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
        <h2>a full stack web developer. I make things that make a difference. </h2>
      </div>
    </div>
  );
}
