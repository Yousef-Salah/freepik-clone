import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CirclesCategoy } from '../../../utils/Categories'
import SearchQuery from '../../../contexts/SearchQuery'

import './circle-category.scss'

const CircleCategoy = () => {
  const navigate = useNavigate()
  const { searchInput } = useContext(SearchQuery).searchQuery?.current || ''
  const handleCircleClick = (e, circle) => {
    e.preventDefault()
    if (circle.link === 'fonts') {
      return navigate(`/${circle.link}`)
    }
    return navigate(`/search/${searchInput}`)
  }

  return (
    <div id="circle-categories">
      {CirclesCategoy.map((circle) => (
        <div className="circle-category" key={circle.toString()}>
          <div
            onKeyDown={(e) => e.handleKeyDown}
            role="button"
            className="circle-link"
            tabIndex="0"
            onClick={(e) => handleCircleClick(e, circle)}
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
      ))}
    </div>
  )
}
export default CircleCategoy
