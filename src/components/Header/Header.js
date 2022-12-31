import React from 'react'
import './Header.css'
import { NavData } from './NavData'
import { motion } from "framer-motion"

const hoverVariants = {
    default: {
        color: "var(--accent-1)",
        textDecoration: "none"

    },
    hover:{
        color: "var(--accent-2)",
        textDecoration: "underline double",
        transition: {
            delay: 0.2,
            stiffness: 50,

        }
    }

}

export default function Header() {
    return (
        <header>
            <li className="header-logo">
                <a 
                    href="/"
                    className="header-first"
                >SALEM</a>
                <a 
                    href="/"
                    className="header-last"
                >SALLEH</a>
            </li>
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
