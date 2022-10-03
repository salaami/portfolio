import React from "react"
import "./About.css"
import Socialbar from "../../SocialBar/SocialBar"
import Navbar from "../../Navbar/Navbar"
import Tongue from './Charts/Tongue'
import Language from './Charts/Language'
import Framework from './Charts/Framework'


export default function About() {
  return (
    <>
      <header></header>
      <body>
          <div className="sidebar-left">
              <Navbar />
          </div>
          <div className="about-content">
            <div className="about-text">
              <h1>About</h1>
                <p>You have a question</p>
                <p>and would like to reach out to me?</p>
                <p>Then don't hesitate to send me a message and </p>
                <p>I'll try to answer as soon as I can.</p>
            </div>
            <div>
              <Language />
              <Framework />
              <Tongue />
            </div>
          </div>
          <div className="sidebar-right">
              <Socialbar />
          </div>
      </body>
      <footer></footer>
    </>
  );
}
