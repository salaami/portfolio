import './SocialBar.css'
import React from 'react'
import { motion } from 'framer-motion'
import { SocialBarData } from './SocialBarData'

const hoverState = {
    hovered: {
        scale: 1.5,
        color: "var(--lighter)"
    },
    initial: {
        scale: 1,
        color: "var(--light)"
    },
    transition: { 
        duration: 0.3,
        type: "EaseInOut"
    }
};

export default function Socialbar() {
    return (
        <div className="social-bar">
                {SocialBarData.map(({ Cname, Icon, Id, Link }, i) => {
                    return (
                            <motion.a
                                key={Id}
                                href={Link}
                                className={Cname} 
                                rel="noreferrer" 
                                variants={hoverState}
                                initial="initial"
                                whileHover="hovered" 
                                whileTap="hovered"
                            >
                                {Icon}               
                            </motion.a>
                    )
                })}
        </div>
    )
};
