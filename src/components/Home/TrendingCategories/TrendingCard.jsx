import React from 'react'
import { Link } from 'react-router-dom'

const TrendingCard = ({ Trendingphoto }) => (
  <div className="container" id="trend-content">
    <Link to={`/search/${Trendingphoto.title}`}>
      <div className="trend-zoom" key={Trendingphoto.id}>
        <img
          className="trendimg"
          src={Trendingphoto.image}
          alt={Trendingphoto.title}
        />
        <p className="trendtext">{Trendingphoto.title}</p>
      </div>
    </Link>
  </div>
)
export default TrendingCard
