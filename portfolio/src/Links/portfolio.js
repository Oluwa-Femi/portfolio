import React from "react";
import SideBar from "./sidebar";
import images from "./images";

import Lightbox from 'react-lightbox-component';
// import styled from 'styled-components';
export default function Portfolio() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap2">
        <h1>Portfolio</h1>
        {/* {images.map(({ id, src, title, description }) => (
          <img 
          key= { id }
          src= { src } 
          title= { title } 
          alt= { description } 
          />
        ))} */}
        {/* <Lightbox images={images} 
        thumbnailWidth='300px'
        thumbnailHeight='300px'/>;/> */}
        <Lightbox
  images={images}
  renderImageFunc={(idx, image, toggleLightbox) => {
    return (
      <img
        key={idx}
        src={image.src}
        style={{width: '250px', height: '250px', margin: '10px'}}
        onClick={toggleLightbox.bind(null, idx)} />
    )
  }}/>
      </div>
    </div>
  );
}