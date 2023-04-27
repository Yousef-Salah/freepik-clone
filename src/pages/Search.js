/* eslint-disable */
import React, { useState, useEffect, useContext } from 'react'
import SearchResults from '../components/Search/SearchResults/SearchResults'
import SearchContainer from '../components/Search/SearchBox/SearchContainer'
import Spinner from '../components/Search/LoadingSpinner/Spinner'
import SideBar from '../components/Search/FilterSideBar/SideBar'
import TagBar from '../components/Search/FilterSideBar/TagBar'
import { SideBarData1 } from '../components/Search/FilterSideBar/SideBarData1'
import { useLocation, useParams } from 'react-router-dom'
import { SearchTagBarData } from '../utils/Search'
import MainLayout from '../components/Layouts/MainLayout'
import SearchQuery from '../contexts/SearchQuery'
import ResultsDataContainer from '../contexts/ResultsDataContainer'
import SponsoredBy from '../components/Layouts/SponsoredBy/SponsoredBy'
import ModalTrigger from '../components/Category/PreviewModal/ModalTrigger'
import { Categories } from '../utils/Categories'
const Search = (props) => {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const updateOpen = (value) => {
    setOpen(value)
  }
  const [data, setData] = useState([])
  const [partialData, setPartialData] = useState([])
  const [spinnerTrigger, setSpinnerTrigger] = useState(true)
  const [contentState, setContentState] = useState(true)
  const searchQuery = useContext(SearchQuery)
  const itemId = useParams().itemId
  const resultsDataContainer = useContext(ResultsDataContainer)
  const [modalDisplay, setModalDisplay] = useState(false)
  const [modalData, setModalData] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [tagbarData, setTagbarData] = useState([])

  useEffect(() => {
    if (!itemId && data.length == 0) {
      loadData()
    }
  }, [location, resultsDataContainer])
  console.log(
    location.pathname.split('/')[2].replace('%20', ' ').replace('-', ' ').replace('_', ' ')
  )
  useEffect(() => {
    if (partialData[0]) {
      let _tagbarData = SearchTagBarData.map((item) => {
        return {
          ...item,
          // title: partialData[Math.floor(Math.random() * partialData.length)].related_tags[Math.floor(Math.random()*5)],
          title: SearchTagBarData[Math.floor(Math.random() * SearchTagBarData.length)].name
        }
      })
      setTagbarData(_tagbarData)
    }
  }, [contentState])

  const toggleModal = () => {
    setModalDisplay(!modalDisplay)
  }

  const modalHandler = (item) => {
    setModalData(item)
    toggleModal()
  }

  const loadData = () => {
    if (searchQuery.current.searchInput !== resultsDataContainer.lastQuery) {
      resultsDataContainer.lastQuery = searchQuery.current.searchInput
      resultsDataContainer.data = props.dataFilter.getData(searchQuery.current)
      resultsDataContainer.start = 0
      resultsDataContainer.end = 15

      setPartialData(resultsDataContainer.data.slice(0, 30))
      setContentState(false)
      setSpinnerTrigger(true)
      setTimeout(() => {
        setSpinnerTrigger(false)
        setContentState(true)
      }, 1500)
      ;(() => setLoaded(true))()
    }
    // setData(props.dataFilter.getData(searchQuery.current));
  }

  const nextButtonHandler = () => {
    resultsDataContainer.start += resultsDataContainer.offset
    resultsDataContainer.end += resultsDataContainer.offset
    setPartialData(
      resultsDataContainer.data.slice(resultsDataContainer.start, resultsDataContainer.end)
    )
  }

  const previousButtonHandler = () => {
    resultsDataContainer.start -= resultsDataContainer.offset
    resultsDataContainer.end -= resultsDataContainer.offset
    setPartialData(
      resultsDataContainer.data.slice(resultsDataContainer.start, resultsDataContainer.end)
    )
  }

  return (
    <>
      {loaded && <ModalTrigger displayStatus={modalDisplay} data={modalData} />}

      <SearchContainer dataHandler={loadData} mainPage={false} />
      <SponsoredBy images={partialData.slice(partialData.length - 10, partialData.length - 1)} />

      <SideBar updateOpen={updateOpen} data={SideBarData1} />
      <div className={`search-content ${!open ? 'base' : 'pushed'}`}>
        <TagBar
          data={tagbarData[0] ? tagbarData : SearchTagBarData}
          className={`${!open ? 'base' : 'pushed-tagbar'}`}
        />
        <SearchResults
          images={partialData}
          visible={contentState}
          modalLift={modalHandler}
          title={location.pathname
            .split('/')[2]
            .replace('%20', ' ')
            .replace('-', ' ')
            .replace('_', ' ')}
        />
        <Spinner visible={spinnerTrigger} />
      </div>
      <button onClick={previousButtonHandler}>Previous</button>
      <button onClick={nextButtonHandler}>Next</button>
    </>
  )
}

export default Search
