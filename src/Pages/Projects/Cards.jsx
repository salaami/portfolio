import { React } from 'react'
import { CardsData } from './CardsData'
import './Cards.css'
import { motion } from 'framer-motion'

const hoverState = {
    hovered: {
        boxShadow: "1rem 1rem var(--darker)",
        scale: 1.05,
        background: "var(--text-color)"
    },
    initial: {
        boxShadow: "0.5rem 0.5rem var(--darker)",
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
                                    {item.Title}
                                </div>
                                <motion.p 
                                    className="card-text"
                                >{item.Text}
                                </motion.p>
                                <div 
                                    className="framework"
                                >
                                    {item.Framework}
                                </div>
                            </a>
                    </motion.li>
                )
            })}
        </div>
    )
}
