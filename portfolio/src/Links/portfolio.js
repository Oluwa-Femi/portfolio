import React from "react";
import SideBar from "./sidebar";
import images from "./images";

import Lightbox from "react-lightbox-component";
// import styled from 'styled-components';
export default function Portfolio() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap2">
        <h1>Portfolio</h1>
        <Lightbox
          images={images}
          renderImageFunc={(idx, image, title, description) => {
            return (
              <img
                key={idx}
                src={image.src}
                style={{ width: "250px", height: "200px", margin: "10px"}}
                title= { title }
                alt= { description }
              />
            );
          }}
        />
      </div>
    </div>
  );
}
