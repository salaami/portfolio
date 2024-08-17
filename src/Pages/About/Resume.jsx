import React from 'react'
import './Resume.css'
import { ResumeData } from './ResumeData'

export default function Resume() {
  return (
      <article className="resume-content">
          <h1>Resume</h1>
          <h2>Work Experience</h2>
          <section className="career-paragraph">
              {ResumeData.map(({ Id, Company, Title, Period, Tasks }) => {
                  return(
                      <div className="job-entry" key={Id}>
                          <span className="time-period">{Period}</span>
                          <div className="job-details">
                              <h4 className="job-title">{Title}</h4>
                              <span className="company">{Company}</span>
                              <ul className="job-tasks">
                                  {Tasks.map((task, taskId) => (
                                      <li className="task-item" key={taskId}>
                                          {task}
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>
                  )
              })}
          </section>
      </article>
  )
}

