import React from 'react'
import './Resume.css'
import { ResumeData } from './ResumeData'

export default function Resume() {
  return (
      <article className="resume-content">
          <h1>CurriculumVitae</h1>
          <h2>Work Experience</h2>
          <section className="career-paragraph">
              {ResumeData.map(({ Id, Company, Title, Period, Tasks }) => {
                  return(
                      <div className="job-entry" key={Id}>
                          <h4 className="job-title">{Title}</h4>
                          <p className="job-details">
                              <span className="company">{Company} | </span>
                              <span className="time-period">{Period}</span>
                              <div className="job-tasks">
                              {Tasks.map((task, taskId) => (
                                  <li className="task-item" key={taskId}>
                                    {task}
                                  </li>
                              ))}
                              </div>
                          </p>
                      </div>
                  )
              })}
          </section>
          <h2>Education</h2>
          <section>
                  <h4>Master of Science Business Administration</h4>
                  <h4>Bachelor of Science Economics</h4>
          </section>
      </article>
  )
}

