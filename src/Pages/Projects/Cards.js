import { React } from 'react'
import { CardsData } from './CardsData'
import './Cards.css'
import { motion } from 'framer-motion'

export default function Cards() {
    return (
            <div className="card-container">
                
            {CardsData.map((item) => {
                return (
                    <motion.li 
                        className="card"
                        whileHover={{ 
                            y: "-1vh",
                            scale: 1.02
                        }}
                        transition={{ 
                            duration: 0.3,
                            ease: "easeInOut"

                        }}
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
