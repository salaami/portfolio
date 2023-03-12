import React, { useState, useEffect } from "react"
import './Contact.css'
import { motion } from 'framer-motion'
import { TransitionVariants } from "../../AnimatedRoute/TransitionVariants"
import Marquee from "./Marquee.jsx"


const hoverState = {
    hovered: {
        scale: 0.95,
        background: "var(--text-color)",
        boxShadow: "0.5rem 0.5rem var(--darker)",
        color: "var(--lighter)"
    },
    initial: {
        scale: 1,
        boxShadow: "1rem 1rem var(--darker)",
        background: "var(--light)",
        color: "var(--light)"
    },
    transition: { 
        duration: 0.3,
        type: "EaseInOut"
    }
};

export default function Contact() {

  return (
    <motion.div 
      className="contact-content"
      animate="animate"
      variants={TransitionVariants}
    >
      <h3 className="call-to-action">
        say hello 
      </h3>
      <motion.div
        variants={hoverState}
        initial="initial"
        whileHover="hovered" 
        whileTap="hovered"
>
        <Marquee />
      </motion.div>
    </motion.div>
  );
}
