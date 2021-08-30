import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from './astronaut.jpg';

import './navigation.css';

function Navigation(){
  return (
    <div className='outterNavBar'>
      <div className='navBar'>
        <img src={ProfilePic}/>
        <Link to='/'> Home</Link>
        <Link to='/about'>About Me</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/resume'>Resume</Link>
        <Link to='/'>Contact</Link>
      </div>
    </div>
  )
};




export default Navigation