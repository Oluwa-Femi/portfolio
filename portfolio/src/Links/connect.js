import React from "react";
import SideBar from "./sidebar";

import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function Connect() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap2">
        <h1>Connect</h1>
        <div>
          <a
            href="https://www.linkedin.com/in/oluwafemi-oluwatola/"
            className="linkedin social"
            target = "_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/Oluwa-Femi/"
            className="github social"
            target = "_blank"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://twitter.com/femi_oluwatola"
            className="twitter social"
            target = "_blank"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/femi_oluwatola/"
            className="instagram social"
            target = "_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}
