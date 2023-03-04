import React, { useState, useEffect } from "react"
import './Contact.css'
import { motion } from 'framer-motion'
import { TransitionVariants } from "../../AnimatedRoute/TransitionVariants"
import Marquee from "./Marquee.jsx"


export default function Contact() {

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
