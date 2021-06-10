import React, {Component} from 'react';
import Navigation from '../Navigation/navigation.component';
import Typist from 'react-typist';

import ProfilePic from './profile.jpg';
import NameTag from './name.jpg';
import Resume from './resume.jpg';
import Calc from './calc_project.jpg';




import './homepage.css';

class Homepage extends React.Component{
    render(){
        return(
            <div className='home'>
                <div className='header'>
                    <img src={NameTag}/>
                </div>
                <Navigation />

                 <div className='intro'>
                    <img src={ProfilePic} />
                    <div className='name'>
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
                </div>

                <div className= 'projects'>
                    <div className='calc'>
                        <img src={Calc} height='100px' width='200px'/>
                        <p>Using DOM manipulation we were instructed to design a functioning mathmatical calculator without using the built in method.  Due to this being a basic, four function calculator, I wanted to design my calculator in a way that was attractive to the users age group.  I drew my own backgrounds and image to give my calculator the look of a crayola box.  I created my own curser as a blank crayon and then designed a paint pallet so that the user could change the color of te curser which, in turn, changes the color of the screen text </p>
                    </div>

                    <div className='notNetflix'>

                    </div>

                </div>

                <div className='resume'>
                    <img src={Resume}/>
                </div>
                
            </div>
        )
    }
}




export default Homepage