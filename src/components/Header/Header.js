import React from 'react'
import './Header.css'
import { NavData } from './NavData'
import { motion } from "framer-motion"
import { useState } from 'react'

export default function Header() {
    const [focused, setFocused] = React.useState(null)
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
                onMouseLeave={() => setFocused(null)}
            >
                {NavData.map((item) => (
                    <a
                        className="nav-link"
                        key={item.Text}
                        href={item.Route}
                        onClick={() => setSelected(item)}
                        onKeyDown={(event: { key: string }) =>
                            event.key === 'Enter' ? setSelected(item.Text) : null
                            }
                        onFocus={() => setFocused(item)}
                        onMouseEnter={() => setFocused(item)}
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
                    </a>
                ))}
            </ul>
        </header>
    )
}
