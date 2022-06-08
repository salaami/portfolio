import React from 'react'
import { animated } from 'react-spring'
import './Menu.css'
    
export const Menu = ({ style }) => ( 
  <animated.div className="menu" style={style}> 
    <nav> 
      <ul className="menu-list"> 
        <li className="menu-list-item"> 
          <a href="/">Home</a> 
        </li> 
        <li className="menu-list-item"> 
          <a href="/About">About</a> 
        </li> 
        <li className="menu-list-item"> 
          <a href="/Projects">Projects</a> 
        </li> 
        <li className="menu-list-item"> 
          <a href="/Contact">Contact</a> 
        </li> 
      </ul> 
    </nav> 
  </animated.div> 
);