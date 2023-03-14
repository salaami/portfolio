import { React } from 'react'
import { CardsData } from './CardsData'
import './Cards.css'
import { motion } from 'framer-motion'

const hoverState = {
    hovered: {
        boxShadow: "0.25vw 0.25vw var(--darker)",
        scale: 0.95,
        background: "var(--lighter)"
    },
    initial: {
        boxShadow: "var(--box-shadow)",
        scale: 1,
        background: "var(--light)"
    },
    transition: { 
        duration: 0.3,
        type: "EaseInOut"
    }
};

export default function Cards() {
    return (
            <div className="card-container">
                
            {CardsData.map((item, index) => {
                return (
                    <motion.li 
                        className="card"
                        key={index} 
                        variants={hoverState}
                        initial="initial"
                        whileHover="hovered" 
                        whileTap="hovered"
                    >
                            <a 
                                className="link"
                                href={item.Link}
                            >
                                <div 
                                    className="card-header"
                                >
                                    <div
                                        className="card-icon"    
                                    >
                                        {item.Icon}
                                    </div>
                                </div>
                                <motion.div 
                                    className="card-text"
                                >
                                    <h2>
                                        {item.Title}
                                    </h2>
                                    <p>
                                        {item.Text}
                                    </p>
                                </motion.div>
                            </a>
                    </motion.li>
                )
            })}
        </div>
    )
}