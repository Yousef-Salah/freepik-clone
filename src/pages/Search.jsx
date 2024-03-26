import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SideBar from '../components/Search/SideBar/SideBar'
import TagsList from '../components/Search/TagsList/TagsList'
import SearchContainer from '../components/Search/SearchBox/SearchContainer'
import SearchResults from '../components/Search/SearchResults/SearchResults'
import SearchDB from '../api/utils/search-db.json'

const Search = () => {
  const [sbPos, setSbPos] = useState('')
  const [sidePos, setSidePos] = useState('')
  const [resultsPos, setResultsPos] = useState('')
  const [tagbarPos, setTagbarPos] = useState('')
  const [tagResPos, setTagResPos] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [sideBtn, setSideBtn] = useState('')
  const [searchFull, setSearchFull] = useState('')
  const [pathname, setPathname] = useState('')
  const [imagesData, setImagesData] = useState([])
  const navHeight = 43.5

  const imagesDB = SearchDB
  const location = useLocation()

  useEffect(() => {
    const filteredImagesData = imagesDB
      .filter((item) => item.title.includes(pathname))
      .slice(30, 60)
    setImagesData(filteredImagesData)
  }, [])

  useEffect(() => {
    const newPath = location.pathname.split('/')[2]
    setPathname(newPath)
  }, [location.pathname])

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
        <SearchContainer dataHandler={() => {}} />
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
            <TagsList />
          </div>
          <div className={`results-wrapper ${resultsPos}`}>
            <div className="results-header">
              <h2>Showing results for {pathname}</h2>
            </div>
            <div className="results-list">
              <SearchResults title={pathname} images={imagesData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Search
