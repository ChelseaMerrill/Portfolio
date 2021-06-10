import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProfilePic from './profile.jpg';
import NameTag from './name.jpg'



import './homepage.css';

class Homepage extends React.Component{
    render(){
        return(
            <div className='home'>
                <div className='header'>
                    <div className='pic'>
                        <img src={ProfilePic}/>
                    </div>
                    <div className='intro'>
                        <img src={NameTag}/>
                    </div>
                </div>
            </div>
        )
    }
}




export default Homepage