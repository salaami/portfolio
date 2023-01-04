import React from "react"
import './Contact.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { PageVariants } from "../../components/Animations/PageVariants"
import { motion } from "framer-motion"
import { PageTransition } from "../../components/Animations/PageTransition"

const container = {
  animate: {
    x: [-1000, 1000],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 5,
      ease: "linear"
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
          <h2>SAY HELLO</h2>
          <marquee
            scrollamount="10"
          >
            <motion.a
              href="mailto:salemsalleh@gmail.com"
              rel="noreferrer" 
              whileHover={{
                textDecoration: "underline"
              }}
            >
              ***SALEMSALLEH@GMAIL.COM***
            </motion.a>
          </marquee>

        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

