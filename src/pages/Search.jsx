import React, { useState } from 'react'
import SideBar from '../components/Search/SideBar/SideBar'

const Search = () => {
  const [sbPos, setSbPos] = useState('')
  const [sidePos, setSidePos] = useState('')
  const [resultsPos, setResultsPos] = useState('')
  const [tagbarPos, setTagbarPos] = useState('')
  const [tagResPos, setTagResPos] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [sideBtn, setSideBtn] = useState('')
  const [searchFull, setSearchFull] = useState('')
  const navHeight = 43.5
  window.addEventListener('scroll', () => {
    if (window.scrollY > navHeight) {
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

  const toggleSidebar = (value) => {
    setSidebarOpen(value)
    if (!value) {
      setSideBtn('sidebar-to-button ')
      setSearchFull('tag-100')
    } else {
      setSideBtn('')
      setSearchFull('')
    }
  }

  return (
    <div className={`search-results `}>
      <div className={`searchbox-wrapper ${sbPos}`}>
        <h2>Seach Here</h2>
      </div>
      <div className="sponsored-wrapper s-hide">
        <h2>sponsored elements</h2>
      </div>
      <div className="sidebar-results">
        <div className={`sidebar-wrapper ${sidePos} ${sideBtn}`}>
          <div className={`hide-us ${sidebarOpen ? '' : 'hide'}`}>
            <div className="sidebar-inner">
              <SideBar />
            </div>
            <div
              className="sidebar-toggle"
              onClick={() => toggleSidebar(false)}
              onKeyDown={() => toggleSidebar(false)}
              role="button"
              tabIndex={0}
            >
              <i className="fa-solid fa-chevron-left" />
            </div>
          </div>
          <div
            className="sidebar-filters-btn"
            onClick={() => toggleSidebar(true)}
            onKeyDown={() => toggleSidebar(true)}
            role="button"
            tabIndex={0}
          >
            <i className="fa-solid fa-arrow-up-short-wide" />
            Filters
          </div>
        </div>
        <div className={`tagbar-results ${tagResPos} ${searchFull}`}>
          <div className={`tagbar-wrapper ${tagbarPos}`}>
            <h4>tags list</h4>
          </div>
          <div className={`results-wrapper ${resultsPos}`}>
            <div className="results-header">
              <h2>search keyword</h2>
            </div>
            <div className="results-list">
              <h2>items here</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Search
