import React from 'react'

const Search = () => (
  <div className="search-results">
    <div className="searchbox-wrapper">
      <h2>Seach Here</h2>
    </div>
    <div className="sponsored-wrapper">
      <h2>sponsored elements</h2>
    </div>
    <div className="sidebar-results">
      <div className="sidebar-wrapper">
        <h3>sidebar</h3>
      </div>
      <div className="tagbar-results">
        <div className="tagbar-wrapper">
          <h4>tags list</h4>
        </div>
        <div className="results-wrapper">
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

export default Search
