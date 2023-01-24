import React from 'react'
import './Header.css'
import { NavData } from './NavData'
import { motion, AnimateSharedLayout } from "framer-motion"
import { useState, useEffect } from 'react'

export default function Header() {
    const [selected, setSelected] = useState(0)
    useEffect(() => {
        setSelected(JSON.parse(window.localStorage.getItem('selected')))
    }, [])
    useEffect(() => {
        window.localStorage.setItem('selected', selected)
    }, [selected])
    return (
        <header>
            <a 
                href="/"
                className="header-logo"
            >Salem Salleh
            </a>
            <ul 
                className="nav-container"
            >
                <AnimateSharedLayout>
                    {NavData.map(({ Text, Route }, i) => (
                        <motion.a
                            className="nav-link"
                            key={i}
                            href={Route}
                            whileHover={{
                                color: 'var(--text-color)',
                            }}
                            onClick={() => setSelected(i)}
                        >
                        {i === selected && (
                          <motion.div
                            className="underline"
                          />
                        )}
                            {Text}
                        </motion.a>
                    ))}
                </AnimateSharedLayout>
            </ul>
        </header>
    )
}
