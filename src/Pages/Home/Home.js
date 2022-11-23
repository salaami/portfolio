import React from 'react' 
import './Home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { motion } from 'framer-motion'
import { PageVariants } from '../../components/Animations/PageVariants'
import { PageTransition } from '../../components/Animations/PageTransition'

export default function Home() {

    return(
        <div>
            <Header />
            <motion.main
                className="container"
                variants={PageVariants}
                transition={PageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <div className="home-content" >
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
                </div>
            </motion.main>
            <Footer />
        </div>
    )
}

