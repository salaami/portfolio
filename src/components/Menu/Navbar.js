import React, { useState } from 'react'
import { useSpring } from 'react-spring'
import { Menu } from './Menu'
import './Navbar.css'
import { CgMenuGridR, CgCloseO } from 'react-icons/cg'

export default function Navbar () {
    const [ MenuVisible, setMenuVisible ] = useState(false);
    const MenuAnimation = useSpring({
        opacity: MenuVisible ? 0.95:0,
        transform: MenuVisible ? `translateX(0)`:`translateX(-100%)`,
    })
    return (
        <div className="navbar">
            <button className="menu-button" onClick={() => setMenuVisible(!MenuVisible)}>
                { MenuVisible ? <CgCloseO className="closing-icon"/>:<CgMenuGridR className="menu-icon"/> }
            </button>
            <Menu style={MenuAnimation} />
        </div>
    )
}
