import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './navigation.css';

function Navigation(){
  return (
    <div className='navBar'>
      <Link to='/'> Home</Link>
      <Link to='/about'>About Me</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/resume'>Resume</Link>
      <Link to='/'>Contact</Link>
    </div>
  )
};




export default Navigation