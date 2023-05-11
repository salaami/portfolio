import './Social.css'
import React from 'react'
import { motion } from 'framer-motion'
import { SocialData } from './SocialData'

const hoverState = {
    hovered: {
        y: -5,
        background: 'var(--grey-30)',
    },
    initial: {
        y: 0,
        background: 'var(--grey-00)',
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
                        rel="noreferrer"
                        className="item-wrapper"
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
                        <p
                            className="btn-text"
                        >
                            {Name}
                        </p>
                    </motion.a>
                )
            })}
        </div>
    )
}        
