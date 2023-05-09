import { React } from 'react'
import { CardsData } from './CardsData'
import './Cards.css'
import { motion } from 'framer-motion'


const hoverState = {
    hovered: {
        scale: 0.95,
    },
    initial: {
        scale: 1,
    },
    transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeInOut"
    }
};

export default function Cards() {
    return (
        <div className="card-container">

            {CardsData.map((item, index) => {
                return (
                    <motion.a
                        className="card"
                        key={index}
                        variants={hoverState}
                        initial="initial"
                        whileHover="hovered"
                        whileTap="hovered"
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
                    </motion.a>
                )
            })}
        </div>
    )
}
