import React from 'react'
import { CardsData } from './CardsData'
import './Cards.css'
import { useSpring, animated } from 'react-spring'

export default function Cards( Title, Text, Link, Framework ) {
    const [props, set] = useSpring(() => ({
        transform: 'scale(1)',
        from: {transform: 'scale(0.5)'},
        config: {
            tension: 400,
            mass: 2,
            velocity: 5
        }
    }))
    const updateHover = hovering => ({
        transform: 'scale(${ hovering ? 1.1. : 1})'
    })

    return (
            <div className="card-container">
                
            {CardsData.map((item) => {
                return (
                    <animated.li className="card"
                    style={props}
                        onMouseEnter={() => set(updateHover(true))}
                        onMouseLeave={() => set(updateHover(false))}
                    >
                        <a href={ item.Link } className="link">
                            <div className="card-header">{ item.Title }</div>
                            <p className="card-text">{ item.Text }</p>
                            <div className="framework">{ item.Framework }</div>
                        </a>
                    </animated.li>
                )
            })}
        </div>
    )
}
