import React, { useState } from 'react'
import { useSpring } from 'react-spring'
import { Menu } from './Menu'
import './Navbar.css'
import { CgMenuGridR, CgCloseO } from 'react-icons/cg'
import { motion } from 'framer-motion'

export default function Navbar () {
    const [ MenuVisible, setMenuVisible ] = useState(false);
    const MenuAnimation = useSpring({
        opacity: MenuVisible ? 0.95:0,
        transform: MenuVisible ? `translateX(0)`:`translateX(-100%)`,
    })
    return (
        <div className="navbar">
            <motion.button 
            className="menu-button" 
            initial={{ scale: 1 }}
            animate={{ scale: 1.5 }}
            transition={{ duration: 0.5 }}
            onClick={() => setMenuVisible(!MenuVisible)}
            >
                { MenuVisible ? <CgCloseO className="closing-icon"/>:<CgMenuGridR className="menu-icon"/> }
            </motion.button>
            <Menu style={MenuAnimation} />
        </div>
    )
}
