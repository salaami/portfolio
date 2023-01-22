import React from 'react'
import './Header.css'
import { NavData } from './NavData'
import { motion } from "framer-motion"
import { useState } from 'react'

export default function Header() {
    const [selected, setSelected] = React.useState(null)
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
                {NavData.map((item) => (
                    <motion.a
                        className="nav-link"
                        key={item.Text}
                        href={item.Route}
                        whileHover={{
                            color: 'var(--text-color)',
                            scale: 1.1,
                        }}
                        onClick={() => setSelected(item)}
                        onKeyDown={(event: { key: string }) =>
                            event.key === 'Enter' ? setSelected(item.Text) : null
                            }
                        tabIndex={0}
                    >
                        {item.Text}
                        {selected === item ? (
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    bottom: '-0.25rem',
                                    left: 0,
                                    right: 0,
                                    height: '0.25rem',
                                    background: 'var(--accent-1)',
                                    zIndex: 0,
                                }}
                                layoutId="underline"
                            />
                        ) : null}
                    </motion.a>
                ))}
            </ul>
        </header>
    )
}
