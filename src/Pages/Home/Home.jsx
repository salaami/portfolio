import React from 'react' 
import './Home.css'
import { motion } from 'framer-motion'
import { TransitionVariants } from '../../AnimatedRoute/TransitionVariants'

export default function Home() {
    return(
            <main>
                <motion.div 
                    className="home-content" 
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
                            <div className="prompt">
                                <div className="prompt-text">salem ~ home </div>
                                <div className="triangle"/>
                                    <div className="command">
                                       whoami
                                    </div>
                            </div>
                            <div className="response">
                                My name is Salem.<br/>
                                I am a data engineer<br/>
                                from Hamburg City.<br/>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>
    )
}

