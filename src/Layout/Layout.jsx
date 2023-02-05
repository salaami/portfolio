import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AnimatedRoute from '../AnimatedRoute/AnimatedRoute'

export default function Layout() {
    return (
        <html>
            <Header />
            <AnimatedRoute />
            <Footer />
        </html>
    )
}
