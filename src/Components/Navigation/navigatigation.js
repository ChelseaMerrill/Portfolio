import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from './astronaut.jpg';

import './navigation.css';

function Navigation() {
  return (
    <div className='navBar'>
      <img src={ProfilePic} />
      <div className='navLinks'>
        <Link to='/' className='navLink'> Home</Link>
        <Link to='/about' className='navLink'>About</Link>
        <Link to='/projects' className='navLink'>Projects</Link>
        <Link to='/resume' className='navLink'>Resume</Link>
        <Link to='/' className='navLink'>Contact</Link>
    </div>
  </div >
  )
};




export default Navigation