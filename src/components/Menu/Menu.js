import React from 'react'
import { animated } from 'react-spring'
import './Menu.css'
    
export const Menu = ({ style }) => ( 
  <animated.div className="menu" style={style}> 
    <nav> 
      <ul className="menu-list"> 
        <li className="menu-list-item"> 
          <a href="/">01|HOME</a> 
        </li> 
        <li className="menu-list-item"> 
          <a href="/About">02|ABOUT</a> 
        </li> 
        <li className="menu-list-item"> 
          <a href="/Projects">03|PROJECTS</a> 
        </li> 
        <li className="menu-list-item"> 
          <a href="/Contact">04|CONTACT</a> 
        </li> 
      </ul> 
    </nav> 
  </animated.div> 
);