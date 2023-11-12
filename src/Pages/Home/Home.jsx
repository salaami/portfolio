import React from 'react'
import './Home.css'
import { motion } from 'framer-motion'
import { TransitionVariants } from '../../Animations/TransitionVariants'
import Response from './Response'
import Prompt from './Prompt'


export default function Home() {
    return (
        <main>
            <motion.div
                className="home-wrapper"
                initial="inital"
                animate="animate"
                exit="exit"
                variants={TransitionVariants}
            >
                <div className="terminal">
                    <div className="terminal-bar">
                        <div className="dot-container">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                    <div className="terminal-content">
                        <Prompt />
                        <Response />
                    </div>
                </div>
            </motion.div>
        </main>
    )
}


