import React from 'react'
import './Home.css'
import Response from './Response'
import Prompt from './Prompt'

export default function Home() {
  return (
    <main>
      <div className="terminal">
        <div className="terminal-bar">
          <div className="dot-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <div className="terminal-content">
            <Prompt />
            <Response />
        </div>
      </div>
    </main>
  )
}


