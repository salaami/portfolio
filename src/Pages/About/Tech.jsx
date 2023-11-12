import './Tech.css'
import { TechData } from './TechData'


export default function Tech() {
  return (
    <div
      className="tech-wrapper"
    >
      <h1>Tech at Work</h1>
      <h2>My Toolkit in Data Engineering</h2>
      <ul
        className="tech-content"
      >
        {TechData.map(({ Title, Text, Icon, Id }) => {
          return (
            <li
              className="tech-card"
              key={Id}
            >
              <div
                className="tech-card-top"
              >
                <div
                  className="tech-icon"
                >
                  {Icon}
                </div>
              </div>
              <div className="tech-card-text">
                <h3>
                  {Title}
                </h3>
                {Text}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
