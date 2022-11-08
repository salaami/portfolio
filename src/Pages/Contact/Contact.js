import React from "react"
import './Contact.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { PageVariants } from "../Animations/PageVariants"
import { motion } from "framer-motion"
import { PageTransition } from "../Animations/PageTransition"


export default function Contact() {
  return(
    <div>
      <Header />
      <motion.main
        className="container"
        variants={PageVariants}
        transition={PageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="contact-content">
          <h1>CONTACT</h1>
          <p>YOU HAVE A QUESTION</p>
          <p>and would like to reach out to me?</p>
          <p>Then don't hesitate to send me a message and </p>
          <p>I'll try to answer as soon as I can.</p>
          <a
            href="mailto:salemsalleh@gmail.com" 
            rel="noreferrer"
            className="say-hello-btn"
          >SAY HELLO
          </a>
        </div>
      </motion.main>
      <Footer />
    </div>
  )
}

