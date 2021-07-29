import React from 'react';
import About from '../About Me/About';
import Projects from '../Projects/projects';
import Res from '../Resume/resume';
import Landing from '../LandingPage/landingpage';

import './homepage.css'; 

function Homepage (){
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

export default Homepage