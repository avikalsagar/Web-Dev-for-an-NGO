import React, { Component } from "react";

class Contact extends Component{
    render(){
        return(
            <div>
                <h2 class="subheading "> Contact Us </h2>
                <div class="container">  
  <form id="contact" action="" method="post">

    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus></input>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required></input>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required></input>
    </fieldset>
    <fieldset>
      <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required></input>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>
            </div>
        )
    }

}

export default Contact;