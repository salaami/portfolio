import React from 'react'
import './Header.css'
import { NavData } from './NavData'
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation()
    const [selected, setSelected] = useState(
        NavData.findIndex(({ Route }) => Route ===location.pathname)
    )

    useEffect( () => {
        setSelected(JSON.parse(window.localStorage.getItem('selected')))
    }, [])

    useEffect( () => {
        window.localStorage.setItem('selected', selected)
    }, [selected])

    return (
        <header>
            <div className="header-logo">Salem Salleh</div>
            <nav>
                <ul 
                    className="nav-container"
                >
                    <AnimatePresence>
                        {NavData.map(({ Route, Id, Text}, i) => (
                            <motion.li
                                className="nav-list"
                                key={Id}
                                whileHover={{
                                    color: 'var(--text-color)',
                                }}
                                whileTap={{
                                    color: 'var(--text-color)',
                                }}
                                onClick={() => setSelected(i)}
                            >
                                <Link
                                    className={`nav-link ${i === selected ? 'selected' : ''}`}
                                    to={Route}
                                >
                                {i === selected && (
                                    <motion.div 
                                        className="underline"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        exit={{ scaleX: 0 }}
                                        transition={{ type: "tween" }}
                                    />
                                )}
                                    {Text}
                                </Link>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
            </nav>
        </header>
    )
}
