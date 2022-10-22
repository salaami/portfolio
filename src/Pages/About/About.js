import React from "react"
import "./About.css"
import Header from "../../components/Header/Header"
import Socialbar from "../../components/SocialBar/SocialBar"
import Tongue from './Charts/Tongue'
import Language from './Charts/Language'
import Framework from './Charts/Framework'
import Footer from "../../components/Footer/Footer"

export default function About() {
  return (
    <div className="container">
      <Header />
      <main>
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
      </main>
      <Footer />
    </div>
  );
}
