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
                    <div className="prompt">
                        <div className="prompt-text">SALEM ~ HOME</div>
                        <div className="triangle"/>
                            <div className="command">
                                WHOAMI
                            </div>
                    </div>
                    
                    <div className="response">
                        MY NAME IS SALEM.<br/>
                        I AM A DATA ENGINEER <br/>
                        FROM HAMBURG CITY.<br/>
                    </div>
                </motion.div>
            </main>
    )
}

