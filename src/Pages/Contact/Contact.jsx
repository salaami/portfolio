import React, { useState, useEffect } from "react"
import './Contact.css'
import { motion } from 'framer-motion'
import { TransitionVariants } from "../../AnimatedRoute/TransitionVariants"
import Marquee from "./Marquee.jsx"

const marqueeVariants = {
  animate: {
    x: ["100%","-100%"],
    transition: {
      x: {
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
      }
    }
  }
};

export default function Contact() {
  const [current, setCurrent] = useState(0);
  const email = "SALEMSALLEH@GMAIL.COM"

  useEffect(() => {
    const timeoutId = setTimeout(() =>{
      setCurrent((current + 1) % email.length)
    }, 20000)
    return () => clearTimeout(timeoutId)
  }, [current, email.length]);

  return (
    <motion.div 
      className="contact-content"
      animate="animate"
      variants={TransitionVariants}
    >
      <h2 className="call-to-action">
        say hello
      </h2>
      <Marquee />
    </motion.div>
  );
}
