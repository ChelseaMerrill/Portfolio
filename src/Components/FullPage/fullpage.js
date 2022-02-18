import React from 'react';
import About from '../AboutMe/About';
import Projects from '../Projects/projects';
import Contact from '../Contact/contact';
import Res from '../Resume/resume';
import Landing from '../LandingPage/landingPage';

import './fullpage.css'; 

function FullPage (){
        return(
            <div className='homepage'>
                <div class="stars"></div>   
                <div class="twinkling"></div>
                <Landing/>
                <About/>
                <Projects/>
                <Contact/>
                <Res/>
            </div>
        )
};

export default FullPage