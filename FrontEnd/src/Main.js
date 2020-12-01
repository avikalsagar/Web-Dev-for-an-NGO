import React, { Component } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
 


import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Donate from "./Donate";
import Locations from "./Locations";
import Contact from "./Contact";
import Form from "./Form";
import Crowdfunding from "./Crowdfunding";

const slideImages = [
  'a1.jpg',
  'a2.jpg',
  'a3.jpg',
  'l1.jpg'
];
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div class="main_headline">
          <h1 class="logo"><img src='./Copy of GO NGO (1).png'/>  Go NGO</h1>
          <ul class="navbar">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Locations">Locations</NavLink></li>
            <li><NavLink to="/donate">Donate</NavLink></li>
            <li><NavLink to="/form">Form</NavLink></li>
            <li><NavLink to="/crowdfunding">Crowdfunding</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          </div>
        <div class="slide-container">
        <Slide>
          <div class="each-slide">
            <div style={{'backgroundImage': 'url(${slideImages[0]})'}}>
              <span> <img src='./a13.jpg'/> </span>
            </div>
          </div>
          <div class="each-slide">
            <div style={{'backgroundImage': 'url(${slideImages[1]})'}}>
              <span> <img src='./a2.jpg'/> </span>
            </div>
          </div>
          <div class="each-slide">
            <div style={{'backgroundImage': 'url(${slideImages[2]})'}}>
              <span> <img src='./a3.jpg'/> </span>
            </div>
            </div>
            <div class="each-slide">
            <div style={{'backgroundImage': 'url(${slideImages[3]})'}}>
              <span> <img src='./l1.jpg'/> </span>
            </div>




          </div>
        </Slide>
      </div>
          <div class="content">
          <Route exact path="/" component={Home}/>
            <Route path="/donate" component={Donate}/>
            <Route path="/Locations" component={Locations}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/form" component={Form}/>
            <Route path="/crowdfunding" component={Crowdfunding}/>
             
          </div>
          <footer><h1>Get our details mailed to you : <a href="http://127.0.0.1:8000/mailing/">HERE</a></h1></footer>

        
        </HashRouter>

        
    );
  }
  
}



 
export default Main;