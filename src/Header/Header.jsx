import React from 'react'
import './Header.css'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'


export default function Header() {

    const [isMobile, setIsMobile] = useState(false)


    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <header>
            <div
                className="logo-background"
            >
                <div
                    className="header-logo"
                >SALEM SALLEH
                </div>
            </div>
            {isMobile ? <MobileNavbar /> : <Navbar />}
        </header>
    )
}
