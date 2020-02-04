import React from "react";
import { withRouter } from "react-router-dom";
import SideBar from "./sidebar";
import Image from "../images/femi-oluwatola.jpg";
import { NavLink } from "react-router-dom";

import "../App.css";
import styled from "styled-components";

function MainPage() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap">
        <img src={Image} alt="Oluwafemi Oluwatola" />
        <h1>Hi, I'm Femi,</h1>
        <h2>
          a software engineer specializing in front-end and back-end web
          development.
        </h2>
        <h3>I build products, Innovation is my passion</h3>
        <NavLink className="navlink" exact to="/profile">
          <Button>Profile</Button>
        </NavLink>
        <NavLink className="navlink" exact to="/portfolio">
          <Button primary>Portfolio</Button>
        </NavLink>
      </div>
    </div>
  );
}

export default withRouter(MainPage);

const Button = styled.button`
  background: ${props => (props.primary ? "#3895d3" : "white")};
  color: ${props => (props.primary ? "white" : "#3895d3")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #3895d3;
  border-radius: 3px;
`;
