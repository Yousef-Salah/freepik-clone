import React from 'react'
import SearchResultHeader from '../components/Search/SearchResults/SearchResultHeader'
import TagBar from '../components/Search/FilterSideBar/TagBar'
import CardLayout from '../components/Card3D/CardLayout'
import { TagBarData3D } from '../utils/Search'

const Fonts = () => (
  <div className="search-content page-3d">
    <TagBar data={TagBarData3D} />
    <SearchResultHeader
      title="Free 3d models"
      description="Discover and install our selection of free fonts, include them in your projects and make incredible designs! Book covers, merchandise, billboards, magazines. Start creating now!"
    />
    <CardLayout />
  </div>
);

export default Fonts;
