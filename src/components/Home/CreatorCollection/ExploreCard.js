import React from 'react'
import { Link } from 'react-router-dom'
import './creator-collection.css'

const ExploreCard = () => {
  return (
    <div className="box exploreBox">
      <Link to="collections" className="exploreBoxCard">
        Explore<i className="fa-solid fa-arrow-right "></i>
      </Link>
    </div>
  )
}

export default ExploreCard
