import React, { Component } from "react";
import Donation from "./donation.jpg";

class Donate extends Component {
    render(){
        return(
            <div>
                <h2 class="subheading"> DONATE NOW</h2>
                <p class="donate "> <img src={Donation}/> </p>
                <p class="donate ">
                    Click here on the given link to : <a href=" http://donate.gongo.com"> donate now</a>  
                </p>
                
            </div>
        )
    }
}

export default Donate;