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
                This is a curated list of my private projects. 
                Despite working in the data field, I am enthusiastic about many different technological subjects. 
                That's why I try to keep my naive curiosity and discover related topics, too.
                To keep a good learning spirit I like to follow my interests and thereby broaden my knowledge.
            </article>
            <Cards /> 
        </motion.div>
    )
};
