import React from 'react'
import './Header.css'
import { NavData } from './NavData'
import { motion } from "framer-motion"

const hoverVariants = {
    default: {
        color: "var(--light)",
        textDecoration: "none"

    },
    hover:{
        color: "var(--text-color)",
        textDecoration: "underline wavy",
        transition: {
            delay: 0.2,
            stiffness: 50,
        }
    }

}

export default function Header() {
    return (
        <header>
            <a 
                href="/"
                className="header-logo"
            >Salem Salleh
            </a>
            <nav
                className="header-nav"
            >
                {NavData.map((item) => {
                    return (
                            <motion.a
                                className={item.Cname}  
                                href={item.Route}
                                whileHover="hover"
                                variants={hoverVariants}
                                whileTap={{scale: 0.5}}
                            >
                                {item.Text}                   
                            </motion.a>
                    )
                })}
            </nav>
        </header>
    )
}
