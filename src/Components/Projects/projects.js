import React, { Component } from 'react';
import './projects.css';


import './projects.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    name: 'Nebula Academy',
                    description: 'I was the Team Lead on this project.  I oversaw a group of developers as we moved an existing website the used Square Space to a React App as well as created an entire database using AWS DynamoDB.  I created DevOps tasks for the team, headed all merges, aissted the developers in their tasks, as well as contributed to some front-end code.',
                    link: 'https://nebulaacademy.com/',
                },
                {
                    name: 'We Connect the Dots',
                    description: 'I was the Team Lead on this project.  I oversaw a group of developers as we moved an existing website the used Square Space to a React App as well as created an entire database using AWS DynamoDB.  I created DevOps tasks for the team, headed all merges, aissted the developers in their tasks, as well as contributed to some front-end code.',
                    link: 'https://www.we-connect-the-dots.org/',
                },
                {
                    name: 'Not Netflix',
                    description: 'Using React App and a movie based API I crated a site that mimiked the concept of Netflix.  Being as this was a project in which several people were completing the same project I wanted to come up with a project that really contrasted the redunent Netflix look that was going to be presented several times.  I decided to brand my site on what I belived Blockbuster would have looked like if streaming platforms existed during the years that Blockbuster was at its prime.  To do this i focused on design aethetics that haad an early 2000s vibe and imbedded Youtube videos to act as a priview ',
                    link: 'https://master.d21wx1wh1dvadx.amplifyapp.com ',
                },
                {
                    name: 'Calculator',
                    description: 'Using DOM manipulation we were instructed to design a functioning mathmatical calculator without using the built in method.  Due to this being a basic, four function calculator, I wanted to design my calculator in a way that was attractive to the users age group.  I drew my own backgrounds and image to give my calculator the look of a crayola box.  I created my own curser as a blank crayon and then designed a paint pallet so that the user could change the color of te curser which, in turn, changes the color of the screen text',
                    link: 'https://chelseamerrill.github.io/Calculator/',
                },
              
                // {
                //     name: 'The Book Belles',
                //     description: 'This was the first post-bootcamp independent project.  I was able to blend both my childhood passions and new found coding abilities to create my own book club website.  I used React App to showcase the book of the month selection, map through past monthly reads,  provide a selection of highly reomended reads, and and a backend so that a user can submit their own recomendations and signup to join the club',
                //     link: 'http://thebookbelles.com',
                // },
                // {
                //     name: 'COTA',
                //     description: 'A bootcamp group project that was completed for a local non-profit.  My contributions for this React App project included creating a page that rendered the most recent news and announcement about the organization, creating a calader component that was editable for the organization but displayed only as a view for the page users, and crafting a carosel for the homepage that highlighted the key pages of the site and linked out to them.  I also used contributed graphically to this project my drawing and designing custom buttons and icons that were used throught the site',
                //     link: null,
                // },
                
               
            ]
        }
    }
    render() {
        return (
            <div className='page projects' id='project'>
                <div className='projectsHeading'>
                    <h1>Projects</h1>
                </div>
                {this.state.projects.map((project) => (
                    <div key={project.name} className='projectCard'>
                        <h5>{project.name}</h5>
                        <br/>
                        <p>{project.description}</p>
                        <br/>
                        <a target='blank' className='projectLink' href={project.link}>View Project</a>
                    </div>
                ))}
            </div>
        )
    }
};

export default Projects