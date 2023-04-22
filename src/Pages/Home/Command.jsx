
import React from 'react'
import { motion } from 'framer-motion'
import './Command.css'


const sentence = {
  visible: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.5
    },
  },
}

const letter = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export default function Command() {
  const commandText = "whoami"
  return (
    <motion.div
      className="command"
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {commandText.split("").map((char, index) => {
        return (
          <motion.span
            key={char + "-" + index}
            variants={letter}
          >
            {char}
          </motion.span>
        )

      })}
    </motion.div>
  )
}
