import React from "react"
import './Contact.css'
import { motion } from 'framer-motion'

const hoverVariants = {
  hover:{
    textDecoration: "underline",
    transition: {
        delay: 0.2,
        stiffness: 50,
    }
  }
}

export default function Contact() {
  return(
    <div className="contact-content">
      <h2>
        say hello
      </h2>
      <a 
        className="marquee-container" 
        href="mailto:salemsalleh@gmail.com"
      >
        <motion.span 
          className="marquee"
          whileHover="hover" 
          variants={hoverVariants}
        >SALEMSALLEH@GMAIL.COM
        </motion.span>
        <motion.span 
          className="marquee"
          whileHover="hover" 
          variants={hoverVariants}
        >SALEMSALLEH@GMAIL.COM
        </motion.span>
        <motion.span 
          className="marquee"
          whileHover="hover" 
          variants={hoverVariants}
        >SALEMSALLEH@GMAIL.COM
        </motion.span>
        <motion.span 
          className="marquee"
          whileHover="hover" 
          variants={hoverVariants}
        >SALEMSALLEH@GMAIL.COM
        </motion.span>
        <motion.span 
          className="marquee"
          whileHover="hover" 
          variants={hoverVariants}
        >SALEMSALLEH@GMAIL.COM
        </motion.span>
        <motion.span 
          className="marquee"
          whileHover="hover" 
          variants={hoverVariants}
        >SALEMSALLEH@GMAIL.COM
        </motion.span>
      </a>
    </div>
  )
}
