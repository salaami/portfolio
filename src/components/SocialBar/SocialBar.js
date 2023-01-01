import './SocialBar.css'
import React from 'react'
import { motion } from 'framer-motion'
import { SocialBarData } from './SocialBarData'

export default function Socialbar() {
    return (
        <div className="social-bar">
                {SocialBarData.map((item) => {
                    return (
                            <motion.a
                                href={item.Link}
                                className={item.Cname}  
                                rel="noreferrer" 
                            >
                                {item.Icon}               
                            </motion.a>
                    )
                })}
        </div>
    )
};
