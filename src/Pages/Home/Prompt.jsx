import React from 'react'
import Command from './Command'
import './Prompt.css'


export default function Prompt() {
  return (
    <div className="prompt-container">
      <div className="prompt">
        <div className="prompt-text">salem ~ home</div>
        <div className="triangle" />
      </div>
      <Command />
    </div>
  )
}
