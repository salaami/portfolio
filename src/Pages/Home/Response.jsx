import React from 'react'
import './Response.css'
import { motion } from 'framer-motion'

const fadeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      type: 'tween',
      ease: 'linear'
    }
  }
}

export default function Response() {
  return (
    <motion.div
      className="response"
      variants={fadeVariants}
      initial="hidden"
      animate="visible"
    >
      My name is Salem.<br />
      I am a data engineer<br />
      from Hamburg City.<br />
    </motion.div>
  )
}
