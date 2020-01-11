import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import Image from "../images/femi-oluwatola.jpg";

//Import icons
import {
  faHome,
  faUser,
  faLaptop,
  faFile,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default props => {
  return (
    <Menu>
      <img
        class="femi-img"
        src={Image}
        alt="Oluwafemi Oluwatola"
        height="100px"
        weight="100px"
      />
      <h3>Oluwatola Oluwafemi Blessing</h3>
      <h4>Full Stack Developer</h4>
      <hr />
      <div class="menu-item">
        <NavLink className="navlink" exact to="/">
          <FontAwesomeIcon icon={faHome} /> Home
        </NavLink>
      </div>

      <div class="menu-item">
        <NavLink
          className="navlink"
          exact
          to="/profile"
        >
          <FontAwesomeIcon icon={faUser} /> Profile
        </NavLink>
      </div>

      <div class="menu-item">
        <NavLink
          className="navlink"
          exact
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faLaptop} /> Portfolio
        </NavLink>
      </div>

      <div class="menu-item">
        <NavLink
          className="navlink"
          exact
          to="/resume"
        >
          <FontAwesomeIcon icon={faFile} /> Resume
        </NavLink>
      </div>

      <div class="menu-item">
        <NavLink
          className="navlink"
          exact
          to="/connect"
        >
          <FontAwesomeIcon icon={faUsers} /> Connect
        </NavLink>
      </div>
    </Menu>
  );
};
