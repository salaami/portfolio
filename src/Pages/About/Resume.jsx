import React from 'react'
import './Resume.css'
import { ResumeData } from './ResumeData'

export default function Resume() {
  return (
      <article className="resume-content">
          <h1>Curriculum Vitae</h1>
          <h2>Work Experience</h2>
          <section className="career-paragraph">
              {ResumeData.map(({ Id, Company, Title, Period, Tasks }) => {
                  return(
                      <div className="job-entry" key={Id}>
                          <h4 className="job-title">{Title}</h4>
                              <span className="company">{Company} | </span>
                              <span className="time-period">{Period}</span>
                              <ul className="job-tasks">
                                  {Tasks.map((task, taskId) => (
                                      <li className="task-item" key={taskId}>
                                        {task}
                                      </li>
                                  ))}
                              </ul>
                      </div>
                  )
              })}
          </section>
      </article>
  )
}

