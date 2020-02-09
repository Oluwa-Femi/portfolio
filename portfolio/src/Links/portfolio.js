import React from "react";
import SideBar from "./sidebar";
import images from "./images";
import { Helmet } from "react-helmet";

import Lightbox from "react-lightbox-component";
// import styled from 'styled-components';
export default function Portfolio() {
  return (
    <div id="App">
      <SideBar />
      <Helmet>
        <title>Femi-Oluwatola Portfolio</title>
        <meta
          name="description"
          content="Oluwatola Oluwafemi Blessing|Software Engineer|portfolio page"
        />
        <meta
          name="keywords"
          content="Software engineer,developer,web developer, back-end Engineer, remote developer, Nigeria developer, Nigeria dev, Nigeria remote"
        />
      </Helmet>
      <div id="page-wrap2">
        <div class="heading">
          <h1>Portfolio</h1>
        </div>
        <p>I spend a lot of time on the keyboard birthing apps and websites.</p>
        <p>
          I have the source code{" "}
          <a href="https://github.com/Oluwa-Femi">here</a>
        </p>
        <Lightbox
          images={images}
          renderImageFunc={(idx, image, title, description) => {
            return (
              <img
                key={idx}
                src={image.src}
                style={{ width: "200px", height: "200px", margin: "10px" }}
                title={title}
                alt={description}
              />
            );
          }}
        />
      </div>
    </div>
  );
}
