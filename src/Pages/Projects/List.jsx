import { React } from 'react'
import { ListData } from './ListData'
import './List.css'


export default function List() {
  return (
    <div className="list-container">

      {ListData.map((item, index) => {
        return (
          <a
            className="list-item"
            href={item.Link}
            key={index}
          >
            <div className="list-pic">
              {item.Pic}
            </div>
            <h5>
              {item.Title}
            </h5>
            <div className="list-body">
              <p className="list-text">
                {item.Text}
              </p>
              <p className="tags-container">
                {item.Tags.map((Tags, Id) => (
                  <span
                    className="list-tags"
                    key={Id}
                  >
                    {Tags}
                  </span>
                ))}
              </p>
            </div>
          </a>
        )
      })}
    </div>
  )
}
