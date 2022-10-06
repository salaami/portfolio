import './SocialBar.css'
import React from 'react'
import { TiSocialLinkedin } from 'react-icons/ti' 
import { TiSocialGithub } from 'react-icons/ti' 
import { CgMail } from 'react-icons/cg' 
import { FaXing } from 'react-icons/fa'
import { motion } from 'framer-motion'


export default function Socialbar() {
    return (
        <div className="social-bar">
            <motion.a 
                href="mailto:salemsalleh@gmail.com" 
                rel="noreferrer" 
                className="social-icon"
                whileHover={{ 
                    scale: 1.5,
                    color: "#6AD1ED" 
                }}
                transition={{ 
                    type: "spring", 
                    stiffness: 80
                }}
            >
                <CgMail />
            </motion.a>
            <motion.a 
                href="https://github.com/salaami" 
                rel="noreferrer" 
                className="social-icon"
                whileHover={{ 
                    scale: 1.5,
                    color: "#6AD1ED" 
                }}
                transition={{ 
                    type: "spring", 
                    stiffness: 80
                }}
            >
                <TiSocialGithub />
            </motion.a>
            <motion.a 
                href="https://www.linkedin.com/in/salem-salleh-1a4828a8" 
                rel="noreferrer" 
                className="social-icon"
                whileHover={{ 
                    scale: 1.5,
                    color: "#6AD1ED" 
                }}
                transition={{ 
                    type: "spring", 
                    stiffness: 80
                }}
            >
                <TiSocialLinkedin />
            </motion.a>
            <motion.a 
                href="https://www.xing.com/profile/Salem_Salleh" 
                rel="noreferrer" 
                className="social-icon"
                whileHover={{ 
                    scale: 1.5,
                    color: "#6AD1ED" 
                }}
                transition={{ 
                    type: "spring", 
                    stiffness: 80
                }}
            >
                <FaXing />
            </motion.a>
        </div>
    )
};
