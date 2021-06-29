import React, {Component} from 'react';
import Typist from 'react-typist';


function Landing (){
        return(
            <div className='typist'>
                <Typist>
                    <h1>Hello, <Typist.Delay ms={1000} /></h1>
                            
                    <h2>I'm</h2>
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