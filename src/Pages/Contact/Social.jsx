import './Social.css'
import React from 'react'
import { motion } from 'framer-motion'
import { SocialData } from './SocialData'

const hoverState = {
    hovered: {
        scale: 0.95,
        background: 'var(--accent-2)',
    },
    initial: {
        scale: 1,
        background: 'var(--darker)',
    },
    transition: {
        duration: 0.3,
        type: 'tween',
        ease: 'easeInOut'
    }
};

export default function Socialbar() {
    return (
        <div className="social">
            {SocialData.map(({ Name, Icon, Id, Link }) => {
                return (
                    <motion.a
                        key={Id}
                        href={Link}
                        rel="noreferrer" className="item-wrapper"
                        variants={hoverState}
                        initial="initial"
                        whileHover="hovered"
                        whileTap="hovered"
                    >
                        <div

                            className="social-icon"
                        >
                            {Icon}
                        </div>
                        <h2>{Name}</h2>
                    </motion.a>
                )
            })}
        </div>
    )
}        
