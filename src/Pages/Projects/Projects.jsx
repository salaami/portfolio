import React from 'react'
import './Projects.css'
import Cards from './Cards'

export default function Projects() {
    return (
        <main>
            <div className="project-content">
                <h1>PROJECTS</h1>
                <article  className="project-text">
                    <p>
                        This is a curated list of my private projects. 
                        Despite working in the data field, I am enthusiastic about many different technological subjects. 
                        That's why I try to keep my naive curiosity and discover related topics, too.
                        To keep a good learning spirit I like to follow my interests and thereby broaden my knowledge.
                    </p>
                </article>
                <Cards /> 
            </div>
        </main>
    )
};
