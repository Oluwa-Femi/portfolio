import React from "react";
import SideBar from './sidebar';


import pdf from '../images/Femi-Oluwatola-resume.jpg';
export default function Resume() {

    return (
        <div id="App">
          <SideBar />
      <div id="page-wrap2">
        <h1>Resume</h1>
        <a href = { pdf } target = "_blank">Download pdf</a>
      </div>
    </div>
  );
}