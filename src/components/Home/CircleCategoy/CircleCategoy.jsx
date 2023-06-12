import React from 'react'
import { Link } from 'react-router-dom'
import { CirclesCategoy } from '../../../utils/Categories'
import './circle-category.scss'

const CircleCategoy = () => (
  <div id="circle-categories">
    {CirclesCategoy.map((circle) => (
      <Link
        to={`${
          circle.link === 'fonts' ? 'fonts' : '/search/'.concat(circle.link)
        }`}
      >
        <div className="circle-category" key={circle.toString()}>
          <div
            onKeyDown={(e) => e.handleKeyDown}
            role="button"
            className="circle-link"
            tabIndex="0"
          >
            <div className="image-border">
              <div className="image-container">
                <img
                  src={`/assets/images/categories/circle-categories/${circle.image}`}
                  alt={circle.title}
                />
              </div>
            </div>
            <p className="text">{circle.title}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
)
export default CircleCategoy
