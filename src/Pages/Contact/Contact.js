import React from "react"
import './Contact.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { PageVariants } from "../../components/Animations/PageVariants"
import { motion } from "framer-motion"
import { PageTransition } from "../../components/Animations/PageTransition"

export default function Contact() {
  return(
    <div>
      <Header />
      <main>
        <motion.div 
          className="contact-content"
          variants={PageVariants}
          transition={PageTransition}
          animate="animate"
        >
          <h1 className="call-to-action">Say Hello</h1>
          <a className="marquee" href="mailto:salemsalleh@gmail.com">
            <p className="scrolling-text">SALEMSALLEH@GMAIL.COM</p>
          </a>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
