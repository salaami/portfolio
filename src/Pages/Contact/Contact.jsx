import React from "react"
import './Contact.css'
import { motion } from 'framer-motion'

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
        >*** SALEMSALLEH@GMAIL.COM *** 
        </motion.span>
      </a>
    </div>
  )
}
