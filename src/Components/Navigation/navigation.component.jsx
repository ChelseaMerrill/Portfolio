import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css';

const Navigation = () => (
    <nav>
      <ul>
        <p><NavLink to='/'>About Me</NavLink></p>
        <p><NavLink to='/'>Projects</NavLink></p>
        <p><NavLink to='/'>Resume</NavLink></p>
      </ul>
    </nav>
  );




export default Navigation