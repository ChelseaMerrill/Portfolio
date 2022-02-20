import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './contact.css';

function Contact (){
        return(
        <div className='contact page' id='contact'> 
            <div className='contactHeading'>
                <h1>Contact</h1>
            </div>
            <div className='contactIcons'>
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            <FontAwesomeIcon icon="fa-brands fa-github" />
         
            </div>

        </div>
        )
};

export default Contact