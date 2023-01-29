import './SocialBar.css'
import React from 'react'
import { motion } from 'framer-motion'
import { SocialBarData } from './SocialBarData'
import { Scale } from 'chart.js'

export default function Socialbar() {
    return (
        <div className="social-bar">
                {SocialBarData.map((item) => {
                    return (
                            <motion.a
                                href={item.Link}
                                className={item.Cname}  
                                rel="noreferrer" 
                                whileHover={{
                                    scale: 1.5,
                                    color: "var(--text-color)"
                                }}
                            >
                                {item.Icon}               
                            </motion.a>
                    )
                })}
        </div>
    )
};
