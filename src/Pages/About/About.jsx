import React from "react"
import "./About.css"
import Intro from './Intro'
import Skills from './Skills'
import Tech from './Tech'
import Resume from './Resume'
import { AnimateContent } from '../../Animations/AnimateContent'

export default function About() {
  return (
    <>
      <AnimateContent>
        <Intro/>
      </AnimateContent>
      <AnimateContent>
        <Resume/>
      </AnimateContent>
      <AnimateContent>
        <Skills />
      </AnimateContent>
      <AnimateContent>
        <Tech />
      </AnimateContent>
    </>
  );
}
