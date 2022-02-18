import React from 'react';
import About from '../AboutMe/About';
import Projects from '../Projects/projects';
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
                <Res/>
            </div>
        )
};

export default FullPage