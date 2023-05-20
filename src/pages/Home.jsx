import React from 'react'
import SearchContainer from '../components/Search/SearchBox/SearchContainer'
import Annual from '../components/Home/AnnualDiscount/AnnualDiscount'
import TrendingCategories from '../components/Home/TrendingCategories/TrendingCategories'
import CircleCategory from '../components/Home/CircleCategoy/CircleCategoy'
import JoinSection from '../components/Common/JoinSection/JoinSection'
import Wepik from '../components/Home/Wepik/Wepik'
import CreatorCollection from '../components/Home/CreatorCollection/CreatorCollection'
import PromoteSiteFeatures from '../components/Home/PromoteSiteFeatures/PromoteSiteFeatures'
import Calender from '../components/Home/Calender/Calender'

const Home = () => (
  <section className="home-page">
    <div className="blue-gradient">
      <SearchContainer mainPage />
      <CircleCategory />
    </div>
    <Annual />
    <TrendingCategories />
    <CreatorCollection />
    <PromoteSiteFeatures />
    <JoinSection />
    <Calender />
    <Wepik />
  </section>
)

export default Home
