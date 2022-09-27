import React from 'react'
import './LayoutGraphs.css'
import Socialbar from '../SocialBar/SocialBar'
import { Navbar } from '../Menu/Navbar'
import Tongue from '../Charts/Tongue'
import Language from '../Charts/Language'
import Framework from '../Charts/Framework'

export default function LayoutGraphs() {
  return(
    <div className="graph-container">
        <div className="sidebar-left">
            <Navbar />
        </div>
        <div className="content">
            <div className="graph-content-box">
              <Language />
              <Framework />
              <Tongue />
            </div>

        </div>
        <div className="sidebar-right">
            <Socialbar />
        </div>
    </div>
)
}
