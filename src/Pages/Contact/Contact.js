import React from "react"
import './Contact.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { PageVariants } from "../../components/Animations/PageVariants"
import { motion } from "framer-motion"
import { PageTransition } from "../../components/Animations/PageTransition"


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
    <div>
      <Header />
      <main>
        <motion.div 
          className="contact-content"
          variants={PageVariants}
          transition={PageTransition}
          animate="animate"
        >
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
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
