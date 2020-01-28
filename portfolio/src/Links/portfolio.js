import React from "react";
import SideBar from "./sidebar";
import images from "./images";

// import styled from 'styled-components';
export default function Portfolio() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap2">
        <h1>Portfolio</h1>
        {/* <ImageDiv> */}
        {images.map(({ id, src, title, description }) => (
          <img key= { id } src= { src } title= { title } alt= { description } />
        ))}
        {/* </ImageDiv> */}
      </div>
    </div>
  );
}

// `ImageDiv = styled.img
//   display: flex;

// `;