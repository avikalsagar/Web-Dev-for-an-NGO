import React, { Component } from "react";
import pic1 from "./pic1.jpeg";
import pic2 from "./pic2.jpeg";

class Locations extends Component {
    render(){
        return(
            <div class="pics">
                <h2 class="subheading"> Locations</h2>
                <p class="Locations "> <img src={pic1}/> </p>
                <p class="Locations ">
                    Click here on the given link to : <a href=" https://www.google.com/maps/place/Marine+Dr,+Mumbai/@18.9432135,72.8208109,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7d1e25ee8439d:0x5acd924f2726ad2b!8m2!3d18.9432135!4d72.8229996">Mumbai</a>  
                </p>
                <br></br>
                <p class="Locations "> <img src={pic2}/> </p>
                <p class="Locations ">
                    Click here on the given link to : <a href=" https://www.google.com/maps/place/13%C2%B000'46.3%22N+74%C2%B047'40.2%22E/@13.0112624,74.7904106,17.27z/data=!4m8!1m2!2m1!1sNITK!3m4!1s0x0:0x0!8m2!3d13.0130797!4d74.7945464">Surathkal</a>  
                </p>
                
            </div>
        )
    }
}

export default Locations;