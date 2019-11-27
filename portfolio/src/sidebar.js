import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Image from './images/femi-oluwatola.jpg';

export default props => {
  return (
    <Menu>
      <img class="femi-img" src={Image} alt="Oluwafemi Oluwatola" height="100px" weight="100px"/>
      <h3>Oluwatola Oluwafemi Blessing</h3>
      <h4>Full Stack Developer</h4>
      <hr/>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/profile">
        Profile
      </a>

      <a className="menu-item" href="/portfolio">
        Portfolio
      </a>

      <a className="menu-item" href="/resume">
        Resume
      </a>

      <a className="menu-item" href="/thoughts">
        Thoughts
      </a>

      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};