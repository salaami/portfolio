import React from "react"
import './Contact.css'
import Socialbar from "../../SocialBar/SocialBar" 
import { Navbar } from "../../Menu/Navbar"

var Contact = () => {
  return(
    <div className="contact-container">
        <div className="sidebar-left">
            <Navbar />
        </div>
        <div className="content">
            <div className="contact-content-box">
              <div className="contact-text">
              <h2 className="contact-header">Contact</h2>
                <p>You have a question</p>
                <p>and would like to reach out to me?</p>
                <p>Then don't hesitate to send me a message and </p>
                <p>I'll try to help you out as soon as I can.</p>
                <a className="contact-button" href="mailto:salemsalleh@gmail.com" rel="noreferrer" >say hello</a>
              </div>
    
            </div>

        </div>
        <div className="sidebar-right">
            <Socialbar />
        </div>
    </div>
)
}

export default Contact;
