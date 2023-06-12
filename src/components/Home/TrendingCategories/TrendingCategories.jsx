import React from 'react'
import TrendingCard from './TrendingCard'
import { Trendingphotos } from '../../../utils/Categories'

import './trending-category.scss'

const TrendingCategories = () => (
  <section className="container-fluid" id="trending">
    <h2 id="explore-title">
      <strong>Explore </strong>
      trending categories on Freepik
    </h2>
    <p className="text-muted">
      Check what&apos;s popular on Freepik and make your project look trendy and
      professional.
    </p>

    <div className="grid" id="exploretrend">
      {Trendingphotos.map((Trendingphoto) => (
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

export default TrendingCategories
