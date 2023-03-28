import { useState, useEffect } from 'react'
import { NavData } from './NavData'
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const location = useLocation()
    const [selected, setSelected] = useState(
        NavData.findIndex(({ Route }) => Route === location.pathname)
    )

    useEffect(() => {
        window.localStorage.setItem('selected', selected)
    }, [selected])

    return (
        <nav
            className="nav-wrapper"
        >
            <ul
                className="nav-container"
            >
                <AnimatePresence>
                    {NavData.map(({ Route, Id, Text }, i) => (
                        <motion.li
                            className="nav-list"
                            key={Id}
                            whileHover={{
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
    )
}
