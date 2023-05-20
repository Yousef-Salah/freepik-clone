import React, { useContext } from 'react'
import propTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import SearchQuery from '../../../contexts/SearchQuery'
const TrendingCard = ({ Trendingphoto }) => {
  const title = Trendingphoto.title.replace(' ', '_')
  const searchQuery = useContext(SearchQuery)
  const navigate = useNavigate()

  return (
    <div className="container" id="trend-content">
      <div className="trend-zoom" key={Trendingphoto.id}>
        <Link
          to="#"
          onClick={(event) => {
            event.preventDefault()
            searchQuery.current.searchInput = Trendingphoto.title
            return navigate(`/search/${title}`)
          }}
        >
          <img className="trendimg" src={Trendingphoto.image} alt={Trendingphoto.title} />
          <p className="trendtext">{Trendingphoto.title}</p>
        </Link>
      </div>
    </div>
  )
}
TrendingCard.propTypes = {
  Trendingphoto: propTypes.object
}
export default TrendingCard
