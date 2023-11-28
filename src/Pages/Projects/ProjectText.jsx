import React from 'react'
import './ProjectText.css'
import Cards from './Cards'


export default function ProjectText() {
  return (
    <article className="project-text">
        <h1>Project Showcases</h1>
        <h2>A Collection of my Digital Explorations</h2>
        <p className="project-paragraph">
            Here you can find a showcase of my private projects.
            From web applications to data related topics and everything in between,
            these projects reflect my passion for exploring new technologies and pushing my own boundaries.
            Whether you're a fellow developer or just curious about what I've been up to,
            I invite you to browse my collection of projects and see for yourself.
        </p>
        <Cards />
    </article>
  )
}
