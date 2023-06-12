import React, { useState, useEffect, useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import SearchResults from '../components/Search/SearchResults/SearchResults'
import SearchContainer from '../components/Search/SearchBox/SearchContainer'
import Spinner from '../components/Search/LoadingSpinner/Spinner'
import SideBar from '../components/Search/FilterSideBar/SideBar'
import TagBar from '../components/Search/FilterSideBar/TagBar'
import { SideBarData1 } from '../components/Search/FilterSideBar/SideBarData1'
import { SearchTagBarData } from '../utils/Search'
import SearchQuery from '../contexts/SearchQuery'
import ResultsDataContainer from '../contexts/ResultsDataContainer'
import SponsoredBy from '../components/Layouts/SponsoredBy/SponsoredBy'
import ModalTrigger from '../components/Category/PreviewModal/ModalTrigger'

const Search = ({ dataFilter }) => {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const updateOpen = (value) => {
    setOpen(value)
  }
  // const [data, setData] = useState([])
  const [partialData, setPartialData] = useState([])
  const [spinnerTrigger, setSpinnerTrigger] = useState(true)
  const [contentState, setContentState] = useState(true)
  const searchQueryCont = useContext(SearchQuery).current
  const { itemId } = useParams()
  const resultsDataContainer = useContext(ResultsDataContainer)
  const [modalDisplay, setModalDisplay] = useState(false)
  const [modalData, setModalData] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [tagbarData, setTagbarData] = useState([])

  const loadData = () => {
    const { searchQuery } = searchQueryCont
    const { lastQuery, pData } = resultsDataContainer
    if (searchQuery !== lastQuery) {
      resultsDataContainer.lastQuery = searchQuery.current.searchInput
      resultsDataContainer.data = dataFilter.getData(searchQuery.current)
      resultsDataContainer.start = 0
      resultsDataContainer.end = 15

      setPartialData(pData.slice(0, 30))
      setContentState(false)
      setSpinnerTrigger(true)
      setTimeout(() => {
        setSpinnerTrigger(false)
        setContentState(true)
      }, 1500)
      // eslint-disable-next-line
      ;(() => setLoaded(true))()
    }
    // setData(props.dataFilter.getData(searchQuery.current));
  }

  useEffect(() => {
    if (!itemId) {
      loadData()
    }
  }, [location, resultsDataContainer])
  const logPath = location.pathname
    .split('/')[2]
    .replace('%20', ' ')
    .replace('-', ' ')
    .replace('_', ' ')
  console.log(logPath)
  useEffect(() => {
    if (partialData[0]) {
      const newTagbarData = SearchTagBarData.map((item) => ({
        ...item,
        title:
          SearchTagBarData[Math.floor(Math.random() * SearchTagBarData.length)]
            .name,
      }))
      setTagbarData(newTagbarData)
    }
  }, [contentState])

  const toggleModal = () => {
    setModalDisplay(!modalDisplay)
  }

  const modalHandler = (item) => {
    setModalData(item)
    toggleModal()
  }

  const nextButtonHandler = () => {
    resultsDataContainer.start += resultsDataContainer.offset
    resultsDataContainer.end += resultsDataContainer.offset
    setPartialData(
      resultsDataContainer.data.slice(
        resultsDataContainer.start,
        resultsDataContainer.end
      )
    )
  }

  const previousButtonHandler = () => {
    resultsDataContainer.start -= resultsDataContainer.offset
    resultsDataContainer.end -= resultsDataContainer.offset
    setPartialData(
      resultsDataContainer.data.slice(
        resultsDataContainer.start,
        resultsDataContainer.end
      )
    )
  }

  return (
    <>
      {loaded && <ModalTrigger displayStatus={modalDisplay} data={modalData} />}

      <SearchContainer dataHandler={loadData} mainPage={false} />
      <SponsoredBy
        images={partialData.slice(
          partialData.length - 10,
          partialData.length - 1
        )}
      />

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
