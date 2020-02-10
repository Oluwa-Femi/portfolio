import React from "react";
import SideBar from "./sidebar";
import { Helmet } from "react-helmet";

import pdf from "../images/Femi-Oluwatola-resume.jpg";
export default function Resume() {
  return (
    <div id="App">
      <SideBar />
      <Helmet>
        <title>Femi-Oluwatola Resume</title>
        <meta
          name="description"
          content="Oluwatola Oluwafemi Blessing|Software Engineer|Resume page"
        />
        <meta
          name="keywords"
          content="Software engineer,developer,web developer, back-end Engineer, remote developer, Nigeria developer, Nigeria dev, Nigeria remote"
        />
      </Helmet>
      <div id="page-wrap2">
        <div class="heading">
          <h1>Resume</h1>
        </div>
        <a href={pdf} target="_blank" rel="noopener">
          Download pdf
        </a>
      </div>
    </div>
  );
}
