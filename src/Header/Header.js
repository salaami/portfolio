import React from 'react'
import './Header.css'
import { NavData } from './NavData'
import { motion, AnimateSharedLayout } from "framer-motion"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [selected, setSelected] = useState(0)

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
                    <AnimateSharedLayout>
                        {NavData.map(({ Text, Route }, i) => (
                            <motion.li
                                className="nav-list"
                                whileHover={{
                                    color: 'var(--text-color)',
                                }}
                                onClick={() => setSelected(i)}
                            >
                                <Link
                                    className="nav-link"
                                    to={Route}
                                >
                                {i === selected && (
                                    <motion.div className="underline"/>
                                )}
                                    {Text}
                                </Link>
                            </motion.li>
                        ))}
                    </AnimateSharedLayout>
                </ul>
            </nav>
        </header>
    )
}
