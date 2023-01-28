import React from "react"
import './Contact.css'
import { motion } from "framer-motion"
import AnimateMain from "../../components/Animations/AnimateMain"

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
    <AnimateMain>
      <main>
        <h2 
            className="call-to-action"
        >say hello
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
      </main>
    </AnimateMain>
  )
}
