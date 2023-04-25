import { React } from 'react'
import { CardsData } from './CardsData'
import './Cards.css'
import { motion } from 'framer-motion'


const hoverState = {
    hovered: {
        boxShadow: "0.25vw 0.25vw var(--dark)",
        scale: 0.95,
        color: "var(--text-color)"
    },
    initial: {
        boxShadow: "var(--box-shadow)",
        scale: 1,
        color: "var(--light)"
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
                                className="icon-wrapper"
                            >
                                <div
                                    className="card-icon"
                                >
                                    {item.Icon}
                                </div>
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
