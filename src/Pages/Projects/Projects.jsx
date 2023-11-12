import React from 'react'
import './Projects.css'
import Cards from './Cards'
import { motion } from 'framer-motion'
import { TransitionVariants } from '../../Animations/TransitionVariants'

export default function Projects() {
    return (
        <motion.div
            className="project-wrapper"
            initial="inital"
            animate="animate"
            exit="exit"
            variants={TransitionVariants}
        >
            <h1>Project Showcases</h1>
            <h2>A Collection of my Digital Explorations</h2>
            <article className="project-text">
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
