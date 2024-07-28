import React from 'react'
import './Projects.css'
import { AnimateContent } from '../../Animations/AnimateContent'
import ProjectText from './ProjectText'
import List from './List'


export default function Projects() {
  return (
    <>
      <AnimateContent>
        <ProjectText />
      </AnimateContent>
      <AnimateContent>
        <List />
      </AnimateContent>
    </>
  )
};
