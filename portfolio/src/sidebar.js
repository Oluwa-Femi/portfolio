import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Image from './images/femi-oluwatola.jpg';

//Import icons 
import { faHome, faUser, faLaptop, faFile, faPen, faEnvelope, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default props => {
  return (
    <Menu>
      <img class="femi-img" src={Image} alt="Oluwafemi Oluwatola" height="100px" weight="100px"/>
      <h3>Oluwatola Oluwafemi Blessing</h3>
      <h4>Full Stack Developer</h4>
      <hr/>
      <a className="menu-item" href="/">
        <FontAwesomeIcon icon={faHome} /> Home 
      </a>

      <a className="menu-item" href="/profile">
        <FontAwesomeIcon icon={faUser} /> Profile
      </a>

      <a className="menu-item" href="/portfolio">
        <FontAwesomeIcon icon={faLaptop} /> Portfolio
      </a>

      <a className="menu-item" href="/resume">
        <FontAwesomeIcon icon={faFile} /> Resume
      </a>

      <a className="menu-item" href="/thoughts">
        <FontAwesomeIcon icon={faPen} /> Thoughts
      </a>

      <a className="menu-item" href="/contact">
       <FontAwesomeIcon icon={faEnvelope} /> Contact
      </a>

      <a className="menu-item" href="/connect">
       <FontAwesomeIcon icon={faUsers} /> Connect
      </a>
    </Menu>
  );
};