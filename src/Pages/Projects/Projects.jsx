import React from 'react'
import './Projects.css'
import { TransitionVariants } from '../../Animations/TransitionVariants'
import AnimateContent from '../../Animations/AnimateContent'
import { motion } from 'framer-motion'
import ProjectText from './ProjectText'
import List from './List'


export default function Projects() {
    return (
        <motion.div
            className="project-wrapper"
            initial="inital"
            animate="animate"
            exit="exit"
            variants={TransitionVariants}
        >
            <AnimateContent>
                <ProjectText />
            </AnimateContent>
            <AnimateContent>
                <List />
            </AnimateContent>
        </motion.div>
    )
};
