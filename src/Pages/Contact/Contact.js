import React from "react"
import './Contact.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { PageVariants } from "../../components/Animations/PageVariants"
import { motion } from "framer-motion"
import { PageTransition } from "../../components/Animations/PageTransition"
import HoverButton from "../../components/Animations/ButtonHover" 

export default function Contact() {
  return(
    <div>
      <Header />
      <main className="container">
        <motion.div 
          className="contact-content"
          variants={PageVariants}
          transition={PageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h1>CONTACT</h1>
          <p>you have a question</p>
          <p>and would like to reach out to me?</p>
          <p>Then don't hesitate to send me a message and </p>
          <p>I'll try to answer as soon as I can.</p>
          <HoverButton Text={"Say Hello >>"}>
  
          </HoverButton>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

