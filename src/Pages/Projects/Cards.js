import { React } from 'react'
import { CardsData } from './CardsData'
import './Cards.css'
import { motion } from 'framer-motion'

const hoverCard = {
    rest: {
        color: "var(--light)",
        y: "0vh",
        scale: 1,
        transition: {
            duration: 0.3,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        color: "var(--text-color)",
        y: "-1vh",
        scale: 1.02,
        transition: {
            duration: 0.3,
            type: "tween",
            ease: "easeOut"
        }
    },
}

export default function Cards() {
    return (
            <div className="card-container">
                
            {CardsData.map((item) => {
                return (
                    <motion.li 
                        className="card"
                        whileHover="hover"
                        initial="rest"
                        animate="rest"
                        variants={hoverCard}
                    >    
                        <a 
                            className="link"
                            href={item.Link}
                        >
                            <div className="card-header">
                                {item.Title}
                            </div>
                            <motion.p 
                                className="card-text"
                                variants={hoverCard}
                            >{item.Text}
                            </motion.p>
                            <div className="framework">
                                {item.Framework}
                            </div>
                        </a>
                    </motion.li>
                )
            })}
        </div>
    )
}
