import React, { Component } from 'react';
import Book from './bookbelles.jpg';
import Blockbuster from './blockbuster.jpg';
import Calculator from './calculator.jpg';


import '../../App.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    name: 'Calculator',
                    description: 'Using DOM manipulation we were instructed to design a functioning mathmatical calculator without using the built in method.  Due to this being a basic, four function calculator, I wanted to design my calculator in a way that was attractive to the users age group.  I drew my own backgrounds and image to give my calculator the look of a crayola box.  I created my own curser as a blank crayon and then designed a paint pallet so that the user could change the color of te curser which, in turn, changes the color of the screen text',
                    image: Calculator,
                    link: 'https://chelseamerrill.github.io/Calculator/',
                },
                {
                    name: 'Not Netflix',
                    description: 'Using React App and a movie based API I crated a site that mimiked the concept of Netflix.  Being as this was a project in which several people were completing the same project I wanted to come up with a project that really contrasted the redunent Netflix look that was going to be presented several times.  I decided to brand my site on what I belived Blockbuster would have looked like if streaming platforms existed during the years that Blockbuster was at its prime.  To do this i focused on design aethetics that haad an early 2000s vibe and imbedded Youtube videos to act as a priview ',
                    image: Blockbuster,
                    link: 'http://google.com',
                },
                {
                    name: 'The Book Belles',
                    description: 'This was the first post-bootcamp independent project.  I was able to blend both my childhood passions and new found coding abilities to create my own book club website.  I used React App to showcase the book of the month selection, map through past monthly reads,  provide a selection of highly reomended reads, and and a backend so that a user can submit their own recomendations and signup to join the club',
                    image: Book,
                    link: 'http://thebookbelles.com',
                },
            ]
        }
    }
    render() {
        return (
            <div className='projects'>
                <h1>Projects</h1>
                {this.state.projects.map((project) => (
                    <div key={project.name}>
                        <h2>{project.name}</h2>
                        <div className='innerProject'>
                            <img src={project.image}/>
                            <p>{project.description}</p>
                        </div>
                        <a href={project.link}> click here to see</a>
                    </div>
                ))}
            </div>
        )
    }
};

export default Projects