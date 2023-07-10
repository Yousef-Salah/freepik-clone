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
  const searchQuery = useContext(SearchQuery)
  const { itemId } = useParams()
  const resultsDataContainer = useContext(ResultsDataContainer)
  const [modalDisplay, setModalDisplay] = useState(false)
  const [modalData, setModalData] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [tagbarData, setTagbarData] = useState([])

  const loadData = () => {
    const {current: currentSearchQuery} = searchQuery;
    const { searchInput } = currentSearchQuery
    const { lastQuery, data } = resultsDataContainer

    if (searchInput !== lastQuery) {
      resultsDataContainer.lastQuery = searchInput
      resultsDataContainer.data = dataFilter.getData(currentSearchQuery)
      resultsDataContainer.start = 0
      resultsDataContainer.end = 15

      setPartialData(data.slice(0, 30))
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
      // eslint-disable-next-line
    }, [location, resultsDataContainer, searchQuery.current])

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
    const {offset, data} = resultsDataContainer;
    let {start, end} = resultsDataContainer;

    start += offset;
    end += offset;
    setPartialData(
      data.slice(
        start,
        end
      )
    )

    resultsDataContainer.start = start;
    resultsDataContainer.end = end;
  }

  const previousButtonHandler = () => {
    const {offset, data} = resultsDataContainer;
    let {start, end} = resultsDataContainer;

    start -= offset
    end -= offset
    setPartialData(
      data.slice(
        start,
        end
      )
    )

    resultsDataContainer.start = start;
    resultsDataContainer.end = end;
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
      <button onClick={previousButtonHandler} type='button'>Previous</button>
      <button onClick={nextButtonHandler} type='button'>Next</button>
    </>
  )
}

export default Search
