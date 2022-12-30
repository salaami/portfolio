import { React } from 'react'
import { CardsData } from './CardsData'
import './Cards.css'
import { motion } from 'framer-motion'

export default function Cards( Title, Text, Link, Framework ) {
    return (
            <div className="card-container">
                
            {CardsData.map((item) => {
                return (
                    <motion.li 
                        className="card"
                        whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: "var(--middle)",
                            
                        }}
                        transition={{ 
                            duration: 0.3, 
                            stiffness: 80
                        }}
                        >
                        <a className="link" href={ item.Link }>
                            <div className="card-header">{ item.Title }</div>
                                <motion.p 
                                    className="card-text"
                                    whileHover={{
                                        color:"var(--text-color)"
                                    }}
                                >{ item.Text }</motion.p>
                                <div className="framework">{ item.Framework }</div>
                        </a>
                    </motion.li>
                )
            })}
        </div>
    )
}
