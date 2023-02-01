import { React } from 'react'
import { CardsData } from './CardsData'
import './Cards.css'
import { motion } from 'framer-motion'

export default function Cards() {
    return (
            <div className="card-container">
                
            {CardsData.map(({Framework, Id, Link, Text, Title}, i) => {
                return (
                    <motion.li 
                        className="card"
                        whileHover={{ 
                            scale: 1.05, 
                            backgroundColor: "var(--middle)",
                            boxShadow: "0.5rem 0.5rem var(--dark)",
                        }}
                        transition={{ 
                            duration: 0.3,
                            ease: "easeInOut"

                        }}
                        >
                        <a 
                            className="link"
                            key={Id} 
                            href={Link}
                        >
                            <div className="card-header">
                                {Title}
                            </div>
                            <motion.p 
                                className="card-text"
                            >{Text}
                            </motion.p>
                            <div className="framework">
                                {Framework}
                            </div>
                        </a>
                    </motion.li>
                )
            })}
        </div>
    )
}
