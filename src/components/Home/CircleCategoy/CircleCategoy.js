import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CirclesCategoy } from '../../../utils/Categories'
import SearchQuery from '../../../contexts/SearchQuery'
import './circular-category.scss'

const CircleCategoy = () => {
  const navigate = useNavigate()
  const searchQuery = useContext(SearchQuery)
  const handleCircleClick = (e, circle) => {
    e.preventDefault()
    if (circle.link === 'fonts') {
      return navigate(`/${circle.link}`)
    } else {
      searchQuery.current.searchInput = circle.link
      return navigate(`/search/${circle.link}`)
    }
  }
  return (
    <div id="circle-categories">
      {CirclesCategoy.map((circle, index) => {
        return (
          <div className="circle-category" key={index}>
            <Link className="circle-link" to="#" onClick={(e) => handleCircleClick(e, circle)}>
              <div className="image-border">
                <div className="image-container">
                  <img
                    src={`/assets/images/categories/circle-categories/${circle.image}`}
                    alt={circle.title}
                  />
                </div>
              </div>
              <p className="text">{circle.title}</p>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
export default CircleCategoy
