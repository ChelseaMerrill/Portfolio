import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css';

function Navigation(){
  return (
    <div className='navBar'>
      <a href='/'> Home</a>
      <a href='/about'>About Me</a>
      <a href='/'>Projects</a>
      <a href='/'>Resume</a>
      <a href='/'>Contact</a>
    </div>
  )
};




export default Navigation