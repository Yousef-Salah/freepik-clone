/* eslint-disable */
import React, { useEffect } from 'react'
import SearchResultHeader from '../components/Search/SearchResults/SearchResultHeader'
import TagBar from '../components/Search/FilterSideBar/TagBar'
import CardLayout from '../components/Card3D/CardLayout'
import { TagBarData3D } from '../utils/Search'
import MainLayout from '../components/Layouts/MainLayout'
const Fonts = (props) => {
  useEffect(() => {
    // props.page('3d-models')
  }, [])

  return (
    <>
      {/* <MainLayout page={props.page} pageTitle="3d-models"> */}
      {/*<SearchContainer mainPage={false} />*/}
      <div className="search-content page-3d">
        <TagBar data={TagBarData3D} />
        <SearchResultHeader
          title="Free 3d models"
          description="Discover and install our selection of free fonts, include them in your projects and make incredible designs! Book covers, merchandise, billboards, magazines. Start creating now!"
        />
        <CardLayout />
      </div>
      {/* </MainLayout> */}
    </>
  )
}

export default Fonts
