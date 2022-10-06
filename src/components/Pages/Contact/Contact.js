import React from "react"
import './Contact.css'
import Socialbar from "../../SocialBar/SocialBar" 
import Navbar from "../../Navbar/Navbar"

export default function Contact() {
  return(
    <>
      <header></header>
      <body>
          <div className="sidebar-left">
              <Navbar />
          </div>
          <div className="contact-content">
            <div className="contact-text">
              <h1>Contact</h1>
                <p>You have a question</p>
                <p>and would like to reach out to me?</p>
                <p>Then don't hesitate to send me a message and </p>
                <p>I'll try to answer as soon as I can.</p>
              <a className="contact-button" href="mailto:salemsalleh@gmail.com" rel="noreferrer" >SAY HELLO >></a>
            </div>
          </div>
          <div className="sidebar-right">
              <Socialbar />
          </div>
      </body>
      <footer></footer>
    </>
  )
}

