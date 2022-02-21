import React from 'react';
import Typist from 'react-typist';

import './landingPage.css';

function Landing (){
        return(
            <div className='typist page' id='landing'> 
                <Typist>
                    <h1>Hello,</h1>  
                    <Typist.Delay ms={2000}/>     
                    <h3>I'm</h3>
                    <Typist.Delay ms={2000}/>
                    <h3>a creator</h3>
                    <Typist.Delay ms={2000}/>
                    <h3>a designer</h3>
                    <Typist.Delay ms={2000}/>
                    <h3>more than your average Software Engineer</h3>
                    <Typist.Delay ms={2000}/>
                    <h1>Chelsea</h1>
                </Typist>
            </div>
        )
};

export default Landing