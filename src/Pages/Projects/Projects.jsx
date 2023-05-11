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
            <h1>Work</h1>
            <article>
                Here you can find a showcase of my private projects.
                From web applications to data related topics and everything in between,
                these projects reflect my passion for exploring new technologies and pushing my own boundaries.
                Whether you're a fellow developer or just curious about what I've been up to,
                I invite you to browse my collection of projects and see for yourself.
            </article>
            <Cards />
        </motion.div>
    )
};
