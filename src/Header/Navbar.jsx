import { useState, useEffect } from 'react'
import { NavbarData } from './NavbarData'
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const location = useLocation()
    const [selected, setSelected] = useState(
        NavbarData.findIndex(({ Route }) => Route === location.pathname)
    )

    useEffect(() => {
        window.localStorage.setItem('selected', selected)
    }, [selected])

    useEffect(() => {
        setSelected(NavbarData.findIndex(({ Route }) => Route === location.pathname))
    }, [location.pathname])

    return (
        <nav
            className="nav-wrapper"
        >
            <ul
                className="nav-container"
            >
                <AnimatePresence>
                    {NavbarData.map(({ Route, Id, Text }, i) => (
                        <motion.li
                            className="nav-list"
                            key={Id}
                            whileHover={{
                                color: 'var(--grey-00)',
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
                                        transition={{
                                            type: 'tween',
                                            ease: 'easeInOut'
                                        }}
                                    />
                                )}
                                0{Id}|{Text}
                            </Link>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>
        </nav>
    )
}
