import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css';

const Navigation = () => (
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/'>Projects</NavLink></li>
        <li><NavLink to='/'>Resume</NavLink></li>
        <li><NavLink to='/'>Home</NavLink></li>
      </ul>
    </nav>
  );




export default Navigation