import React from "react";
import SideBar from "./sidebar";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Femi-Oluwatola Connect</title>
        <meta
          name="description"
          content="Oluwatola Oluwafemi Blessing|Software Engineer|connect"
        />
        <meta
          name="keywords"
          content="Software engineer,developer,web developer, back-end Engineer, remote developer, Nigeria developer, Nigeria dev, Nigeria remote"
        />
      </Helmet>
      <div id="page-wrap2">
        <div class="heading">
          <h1>Connect</h1>
        </div>
        <h2>Say hello! Will ya?</h2>
        <p>
          Connect 
          <br />
        </p>
        <div>
          <a
            href="https://www.linkedin.com/in/oluwafemi-oluwatola/"
            className="linkedin social"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a
            href="https://github.com/Oluwa-Femi/"
            className="github social"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a
            href="https://twitter.com/femi_oluwatola"
            className="twitter social"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>
          <a
            href="https://www.instagram.com/femi_oluwatola/"
            className="instagram social"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
        </div>
        <div class="mail">
          <h2>OR</h2>
          <a href="mailto:oluwatolablessing@gmail.com" target="_blank" rel="noopener" > Send me a mail
          </a>
        </div>
      </div>
    </div>
  );
}
