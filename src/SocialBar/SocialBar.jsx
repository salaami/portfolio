import './SocialBar.css'
import React from 'react'
import { motion } from 'framer-motion'
import { SocialBarData } from './SocialBarData'

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
                                whileHover={{
                                    scale: 1.5,
                                    color: "var(--text-color)",
                                    transition: {
                                        type: "tween"
                                    }
                                }}
                                whileTap={{
                                    scale: 1.5,
                                    color: "var(--text-color)",
                                    transition: {
                                        type: "tween"
                                    }
                                }}
                            >
                                {Icon}               
                            </motion.a>
                    )
                })}
        </div>
    )
};
