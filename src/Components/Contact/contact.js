import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './contact.css';

function Contact (){
        return(
        <div className='contact page' id='contact'> 
            <div className='contactHeading'>
                <h1>Contact</h1>
            </div>
            <div className='contactIcons'>
                <p>Email: chelmer1223@gmail.com</p>
                <p>Phone: 518-225-6160</p>
                <a  target='blank' href= 'https://www.linkedin.com/in/chelsea-merrill/'>LinkedIn</a>
                <a target='blank' href='https://github.com/ChelseaMerrill'>GitHub</a>
            </div>

        </div>
        )
};

export default Contact