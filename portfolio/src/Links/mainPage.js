import React from 'react';
import { withRouter } from 'react-router-dom';
import SideBar from './sidebar';
import Image from '../images/femi-oluwatola.jpg';

import '../App.css';
// import {styled} from "styled-components";

function MainPage() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap">
        <img src={Image} alt="Oluwafemi Oluwatola"/>
        <h1>Hi, I'm Femi,</h1>
        <h2>a software engineer specializing in front-end and back-end web development.</h2>
        {/* <Button> */}
        <div class = "profile">Profile</div>
        <div class = "portfolio">Portfolio</div>
        {/* </ Button> */}
      </div>
    </div>
  );
}

export default withRouter(MainPage)