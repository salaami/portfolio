import React from 'react'
import './Intro.css'
import portrait from '../../assets/images/portait_closeup.png'


export default function Intro() {
  return (
      <article className="intro-text">
        <h1>Data-Driven Detour</h1>
        <h2>Embracing Continuous Change and Development</h2>
        <p className="intro-paragraph">
          At University I was working part time as a web analyst. I was mainly taking care of tedious reporting tasks. 
          After taking a Business Intelligence and Data Mining class, I was able to automate these and thereby relieve me from the monotonous manual struggle.
          This experience motivated me to redirect my career towards the data space.
          I wrote my thesis at the department for business informatics and started my first full-time job as a system manager at a media agency.
          Soon I transitioned to the Business Intelligence department and began using relational databases to streamline reporting efforts.
          Today I am mainly taking care of data integration, data transformation as well as provisioning tasks.
          I found it very inspiring to work in an environment that encourages constant learning and development.
        </p>
        <img src={portrait} alt='portrait_picture' className="portait"/>
      </article>
  )
}
