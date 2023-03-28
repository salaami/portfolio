import React, { useState, useEffect } from "react"
import './Contact.css'
import { motion } from 'framer-motion'
import { TransitionVariants } from "../../AnimatedRoute/TransitionVariants"
import Marquee from "./Marquee.jsx"


const hoverState = {
    hovered: {
        scale: 0.95,
        background: "var(--text-color)",
        boxShadow: "0.25vw 0.25vw var(--darker)",
    },
    initial: {
        scale: 1,
        background: "var(--light)",
        boxShadow: "var(--box-shadow)",
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
