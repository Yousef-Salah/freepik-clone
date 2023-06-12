/* eslint-disable */
import React, { useEffect, useContext } from 'react'
import SearchContainer from '../components/Search/SearchBox/SearchContainer'
import MainLayout from '../components/Layouts/MainLayout'
import Collection from '../components/Collection/Collection'
import SearchQuery from '../contexts/SearchQuery'
import { useNavigate } from 'react-router-dom'

const Collections = (props) => {
  // const [data, setData] = useState([])
  //   const [spinnerTrigger, setSpinnerTrigger] = useState(true);
  //   const [contentState, setContentState] = useState(true);
  const searchQuery = useContext(SearchQuery)
  const navigate = useNavigate()

  useEffect(() => {
    // props.page('Collection')
  }, [])

  // TODO: fix code redundancy issue
  const loadData = () => {
    // return navigate(`/search/${searchQuery.current.searchInput}`)
  }

  return (
    <>
      {/* <MainLayout page={props.page} pageTitle="Collections"> */}
      <SearchContainer dataHandler={loadData} mainPage={false} />
      <Collection />
      {/* </MainLayout> */}
    </>
  )
}
export default Collections
