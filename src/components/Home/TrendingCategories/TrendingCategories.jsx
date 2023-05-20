import React, { useEffect } from 'react'
// import propTypes from 'prop-types'
import TrendingCard from './TrendingCard'
import Trendingphotos from './Trendingphotos'

import './trending-category.scss'

const TrendingCategories = ({ headingDisplayProp }) => {
  // const [headingDisplay, setHeadingDisplay] = useState(true)
  const data = Trendingphotos()

  useEffect(() => {
    if (headingDisplayProp === false) {
      // setHeadingDisplay(false)
    }
  }, [headingDisplayProp])
  return (
    <section className="container-fluid" id="trending">
      <h2 id="explore-title">
        <strong>Explore</strong>
        trending categories on Freepik
      </h2>
      <p className="text-muted">
        Check what&apos;s popular on Freepik and make your project look trendy
        and professional.
      </p>

      <div className="grid" id="exploretrend">
        {data.map((Trendingphoto) => (
          <div
            className="trenditem"
            id={Trendingphoto.id}
            key={Trendingphoto.toString()}
          >
            <TrendingCard Trendingphoto={Trendingphoto} />
          </div>
        ))}
      </div>
    </section>
  )
}

// TrendingCategories.propTypes = {
//   headingDisplayProp: propTypes.any, // @TODO check that
// }

export default TrendingCategories
