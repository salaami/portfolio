import React from 'react'
import './Intro.css'
import portrait from '../../assets/images/portait_closeup.png'


export default function Intro() {
  return (
    <div>
      <article className="intro-text">
        <h1>Data-Driven Detour</h1>
        <h2>Embracing Constant Change and Development</h2>
        <p className="intro-paragraph">
          After taking a Business Intelligence and Data Mining class, I was able to automate and optimize these.
          This experience motivated me to redirect my career towards the data space.
          I wrote my thesis in business informatics and started my first full-time job as a system manager at a media agency.
          I transitioned to the Business Intelligence department and began using relational databases to streamline reporting efforts.
          As our infrastructure improved, I shifted my focus to data integration and data transformation tasks.
          I found it very inspiring to work in an environment that encourages constant learning and development.
        </p>
        <img src={portrait} alt='portrait_picture' className="portait"/>
      </article>
    </div>
  )
}
