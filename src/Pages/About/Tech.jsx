import './Tech.css'
import { TechData } from './TechData'


export default function Tech() {
  return (
    <div
      className="tech-container"
    >
      <div
        className="glow-container"
      >
        <h1>Tech
        </h1>
        <ul
          className="tech-wrapper"
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
    </div>
  )
}
