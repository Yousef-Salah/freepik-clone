/* eslint-disable */
import React, { useRef, useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { DevConfig } from '../../seepick.config'
import SearchQuery from '../../contexts/SearchQuery'
import ResultsDataContainer from '../../contexts/ResultsDataContainer'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import DiscountModal from '../Common/DiscountModal/DicountModal'
import SearchQueryNew from '../../contexts/SearchQueryNew'

export const Layout = () => {
  const animations = (DevConfig.animations && 'animate') || ''
  const [newQuery, setNewQuery] = useState(useContext(SearchQueryNew))

  const search = {
    searchQuery: 'xyz',
    searchImage: async function () {
      return { title: 'im an item', desc: 'holding description' }
    },
  }
  const config = {
    getPageName: () => {},
  }
  const Query = useRef({
    searchInput: window.location.pathname.split('/')[2]?.replace('_', ' '),
    itemType: 'Assets', // assets collections
    itemPriceType: [], // free premium
    category: 'Vectors',
  })
  const sqValue = {
    data: [],
    lastQuery: Query.searchInput,
    offset: 15,
    start: 0,
    end: 15,
  }

  const queryData = {
    filterData: newQuery,
    setFilterData: (data) => {
      setNewQuery(data)
      console.log(data)
    },
  }

  return (
    <SearchQueryNew.Provider value={{ ...queryData }}>
      <SearchQuery.Provider value={Query}>
        <ResultsDataContainer.Provider value={sqValue}>
          <main className={animations}>
            <Navbar />
            <Outlet />
            <Footer />
            <DiscountModal />
          </main>
        </ResultsDataContainer.Provider>
      </SearchQuery.Provider>
    </SearchQueryNew.Provider>
  )
}

export default Layout
