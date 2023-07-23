import React, { useState } from 'react'
import SideBar from '../components/Search/SideBar/SideBar'

const Search = () => {
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
    <div className={`search-results `}>
      <div className={`searchbox-wrapper ${sbPos}`}>
        <h2>Seach Here</h2>
      </div>
      <div className="sponsored-wrapper s-hide">
        <h2>sponsored elements</h2>
      </div>
      <div className="sidebar-results">
        <div className={`sidebar-wrapper ${sidePos}`}>
          <SideBar />
        </div>
        <div className={`tagbar-results ${tagResPos}`}>
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
