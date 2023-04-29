import './Header.css'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'


export default function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 1024)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <header className="header-container">
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
