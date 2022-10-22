import React from "react"
import './Contact.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"


export default function Contact() {
  return(
    <div className="container">
      <Header />
      <main>
        <div className="contact-text">
          <h1>CONTACT</h1>
          <p>YOU HAVE A QUESTION</p>
          <p>and would like to reach out to me?</p>
          <p>Then don't hesitate to send me a message and </p>
          <p>I'll try to answer as soon as I can.</p>
          <a
            href="mailto:salemsalleh@gmail.com" 
            rel="noreferrer"
            >SAY HELLO
          </a>
        </div>
      </main>
      <Footer />
    </div >
  )
}

