import React, { useState } from 'react';
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineMenuUnfold } from 'react-icons/ai';
import ProfilePic from './astronaut.jpg';

import './navigation.css';

function Navigation() {
  return (
    <nav className='navBar'>
      <img src={ProfilePic} alt=''/>
      <div className='navLinks'>
        <Link to='landing' className='navLink'> Home</Link>
        <Link to='about' smooth={true} className='navLink'>About</Link>
        <Link to='projects' smooth={true} className='navLink'>Projects</Link>
        <Link to='contact' smooth={true} className='navLink'>Contact</Link>
        <Link to='resume' smooth={true} className='navLink'>Resume</Link>
    </div>
  </nav >

  )
};

export default Navigation