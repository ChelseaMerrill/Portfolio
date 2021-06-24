import React, {Component} from 'react';
// import Navigation from '../Navigation/navigation.component';
import Typist from 'react-typist';

import ProfilePic from './profile.jpg';
import Resume from './resume.jpg';
import { HiOutlineCalculator } from "react-icons/hi";
import { HiOutlineTag } from "react-icons/hi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { IconContext } from "react-icons";




import './homepage.css';

class Homepage extends React.Component{
    render(){
        return(
            <div className='home'>
                <div className='header' style={{ backgroundImage: "url(/succulants.jpg)" }}>
                <img src={ProfilePic} />
                    <h1>Chelsea Merrill</h1>
                </div>

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

                <div className='aboutMe'>
                    <p>Welcome! I am Chelsea Merrill. I am an ambitious and creative developer with a passion for design and mastery of techniques. I have a Bachelor’s Degree for the State University of New York at Albany in Communications and Business with a focus in Business Law. I spent the first five years of my professional life working in the legal industry.  In 2021, I rerouted my career objectives and enrolled myself in Nebula Academy’s Software Engineering Bootcamp. I graduated from my program with an offer to continue my education working as a Fellow for Nebula Academy. My front-end skills are highlighted in the uniqueness and originality of my projects. Connect with me to learn more.</p>
                </div>

                <div className= 'projects'>
                    <div className='calc'>
                    <button type="button"onClick={(e) => {e.preventDefault();window.location.href='https://chelseamerrill.github.io/Calculator/';}}>
                        <IconContext.Provider value={{ color: "#423E42", className: "calcIcon"}}>
                                <div>
                                    <HiOutlineCalculator/>  
                                </div>
                            </IconContext.Provider>
                        </button>
                            <p>Using DOM manipulation we were instructed to design a functioning mathmatical calculator without using the built in method.  Due to this being a basic, four function calculator, I wanted to design my calculator in a way that was attractive to the users age group.  I drew my own backgrounds and image to give my calculator the look of a crayola box.  I created my own curser as a blank crayon and then designed a paint pallet so that the user could change the color of te curser which, in turn, changes the color of the screen text </p>
                        </div>

                    <div className='notNetflix'>
                        <button type="button"onClick={(e) => {e.preventDefault();window.location.href='http://google.com';}}>
                        <IconContext.Provider value={{ color: "#423E42", className: "netflixIcon"}}>
                                <div>
                                    <HiOutlineTag />
                                </div>
                            </IconContext.Provider>
                        </button>
                        <p>Using React App and a movie based API I crated a site that mimiked the concept of Netflix.  Being as this was a project in which several people were completing the same project I wanted to come up with a project that really contrasted the redunent Netflix look that was going to be presented several times.  I decided to brand my site on what I belived Blockbuster would have looked like if streaming platforms existed during the years that Blockbuster was at it's prime.  To do this i focused on design aethetics that haad an early 2000s vibe and imbedded Youtube videos to act as a priview </p>
                    </div>

                    <div className='bookBelles'>
                    <button type="button"onClick={(e) => {e.preventDefault();window.location.href='http://thebookbelles.com';}}>
                            <IconContext.Provider value={{ color: "#423E42", className: "bookIcon"}}>
                                <div>
                                    <HiOutlineBookOpen />
                                </div>
                            </IconContext.Provider>
                        </button>
                        <p>This was the first post-bootcamp independent project.  I was able to blend both my childhood passions and new found coding abilities to create my own book club website.  I used React App to showcase the book of the month selection, map through past monthly reads,  provide a selection of highly reomended reads, and and a backend so that a user can submit their own recomendations and signup to join the club </p>
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