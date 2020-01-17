import React from "react";
import SideBar from './sidebar';
import Image from '../images/4naira.png';
// import Image from '../images/anywhere-fitness.png';

// import styled from 'styled-components';
export default function Portfolio() {

    return (
        <div id="App">
          <SideBar />
      <div id="page-wrap2">
        <h1>Portfolio</h1>
        <img src = { Image } />
      </div>
    </div>
  );
}