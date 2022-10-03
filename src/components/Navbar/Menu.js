import React from 'react'
import { animated } from 'react-spring'
import './Menu.css'
import MenuItem from './MenuItem'


export const Menu = ({ style }) => (  
  <animated.div className="menu" style={style}> 
    <nav> 
      <ul className="menu-list"> 
        <MenuItem />
      </ul> 
    </nav> 
  </animated.div> 
);