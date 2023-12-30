import './Social.css'
import React from 'react'
import { motion } from 'framer-motion'
import { SocialData } from './SocialData'
import { HoverVariants } from '../../Animations/HoverVariants.jsx'


export default function Socialbar() {
    return (
        <div className="social-container">
            {SocialData.map(({ Name, Icon, Id, Link }) => {
                return (
                    <motion.a
                        key={Id}
                        href={Link}
                        rel="noreferrer"
                        className="item-content"
                        variants={ HoverVariants }
                        whileHover="hovered"
                    >
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
