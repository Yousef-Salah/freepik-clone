import React, { useState } from 'react'
import './searchresultheader.scss'

const SearchResultHeader = ({title, description, sort}) => {
  const [dropHeaderr, setDropHeader] = useState('Popular')
  const [popular1, setPopular1] = useState('bx bx-check ')
  const [recent1, setRecent1] = useState('unchecked')
  
  function setPopular() {
    setDropHeader('Popular')
    setPopular1('bx bx-check ')
    setRecent1('unchecked')
  }
  function setRecent() {
    setDropHeader('Recent')
    setPopular1('unchecked')
    setRecent1('bx bx-check')
  }
  return (
    <>
      <div className="container-fluid d-flex justify-content-center resultheader">
        <h1 className="headerr">{title}</h1>
        <br />
      </div>

      <p className="search-description">{description}</p>
      {sort && (
        <div className="dropdown sort" id="dropdown-sort">
          Sort By:
          <button
            className="btn btn-primary dropdown-toggle sort-by-dropdown"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {dropHeaderr}
          </button>
          <ul className="dropdown-menu sortmenu">
            <li>
              <button
                type='button'
                className="dropdown-item sortbtn1"
                onClick={setPopular}
                id="popularDropBtn"
                
              >
                {' '}
                <i className={popular1}> </i> Popular
              </button>
            </li>
            <li>
              <button
                type='button'
                className="dropdown-item sortbtn2"
                onClick={setRecent}
                id="recentDropBtn"
              >
                {' '}
                <i className={recent1}> </i> Recent
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default SearchResultHeader
