import React from 'react'
import './Projects.css'
import Cards from './Cards'
import { motion } from 'framer-motion'
import { TransitionVariants } from '../../AnimatedRoute/TransitionVariants'

export default function Projects() {
    return (
        <motion.div 
            className="project-content"
            initial="inital"
            animate="animate"
            exit="exit"
            variants={TransitionVariants}
        >
            <h1 className="header">PROJECTS</h1>
            <article  className="project-text">
                This is a curated list of my projects. 
                Despite working in the field of data, I am still enthusiastic about various topics. 
                That's why I try to keep my naive curiosity and discover related topics, too.
            </article>
            <Cards /> 
        </motion.div>
    )
};
