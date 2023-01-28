import React from 'react'
import './Header.css'
import { NavData } from './NavData'
import { motion, AnimateSharedLayout } from "framer-motion"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
            <div className="header-logo">Salem Salleh</div>
            <ul 
                className="nav-container"
            >
                <AnimateSharedLayout>
                    {NavData.map(({ Text, Route }, i) => (
                        <motion.Link
                            className="nav-link"
                            key={i}
                            to={Route}
                            whileHover={{
                                color: 'var(--text-color)',
                            }}
                            onClick={() => setSelected(i)}
                            transitition={{
                                delay: 1
                            }}
                        >
                        {i === selected && (
                          <motion.div
                            className="underline"
                          />
                        )}
                            {Text}
                        </motion.Link>
                    ))}
                </AnimateSharedLayout>
            </ul>
        </header>
    )
}
