/* eslint-disable */
import React, { useState, useEffect } from 'react'
import SearchResultHeader from '../components/Search/SearchResults/SearchResultHeader'
import TagBar from '../components/Search/FilterSideBar/TagBar'
import FontsList from '../components/Fonts/FontsList'
import { FontsTagBarData } from '../utils/Fonts'

const Fonts = () => {
  const [sbPos, setSbPos] = useState('')
  const [sidePos, setSidePos] = useState('')
  const [resultsPos, setResultsPos] = useState('')
  const [tagbarPos, setTagbarPos] = useState('')
  const [tagResPos, setTagResPos] = useState('')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 43.5) {
      setSbPos('s-fix sb-fixed')
      setSidePos('s-fix side-fixed')
      setTagbarPos('s-fix tagbar-fixed')
      setResultsPos('results-fixed')
      setTagResPos('tagbar-results-fixed')
    } else {
      setSbPos('')
      setSidePos('')
      setTagbarPos('')
      setResultsPos('')
      setTagResPos('')
    }
  })
  return (
    <div className={`search-results fonts-page base`}>
      <div className={`searchbox-wrapper ${sbPos}`}>
        <h2>Seach Here</h2>
      </div>
      <div className="sponsored-wrapper s-hide">
        <h2>sponsored elements</h2>
      </div>
      <div className="sidebar-results">
        <div className={`sidebar-wrapper ${sidePos}`}>
          <h3>sidebar</h3>
        </div>
        <div className={`tagbar-results ${tagResPos}`}>
          <div className={`tagbar-wrapper ${tagbarPos}`}>
            <TagBar data={FontsTagBarData} />
          </div>
          <div className={`results-wrapper ${resultsPos}`}>
            <div className="results-header">
              <SearchResultHeader
                title="Free Good Fonts"
                description="Discover and install our selection of free fonts, include them in your projects and make incredible designs! Book covers, merchandise, billboards, magazines. Start creating now!"
              />
            </div>
            <div className="results-list">
              <FontsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fonts
