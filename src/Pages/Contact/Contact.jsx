import React from "react"
import './Contact.css'
import { motion } from 'framer-motion'
import { TransitionVariants } from "../../AnimatedRoute/TransitionVariants"

export default function Contact() {
  return(
    <motion.div 
      className="contact-content"
      initial="inital"
      animate="animate"
      exit="exit"
      variants={TransitionVariants}
    >
      <h2>
        say hello
      </h2>
      <a 
        className="marquee-container" 
        href="mailto:salemsalleh@gmail.com"
      >
        <motion.span 
          className="marquee"
        >*** SALEMSALLEH@GMAIL.COM *** 
        </motion.span>
      </a>
    </motion.div>
  )
}
