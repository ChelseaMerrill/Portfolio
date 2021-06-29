import React, {Component} from 'react';
import About from '../About Me/About';
import Projects from '../Projects/projects';
import Res from '../Resume/resume';
import Landing from '../LandingPage/landingpage';


function Homepage (){
        return(
            <div className='homepage'>
                <Landing/>
                <About/>
                <Projects/>
                <Res/>
            </div>
        )
};

export default Homepage