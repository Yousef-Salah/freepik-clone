/* eslint-disable */
import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { DevConfig } from '../../seepick.config'
import SearchQuery from '../../contexts/SearchQuery'
import ResultsDataContainer from '../../contexts/ResultsDataContainer'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import DiscountModal from '../Common/DiscountModal/DicountModal'

export const Layout = () => {
  const animations = (DevConfig.animations && 'animate') || ''
  const [Query, setQuery] = useState(useContext(SearchQuery))
  const queryData = {
    filterData: Query,
    setFilterData: (data) => {
      setQuery(data)
      console.log(data)
    },
  }
  const searchConfig = {
    data: [],
    lastQuery: Query.searchInput,
    offset: 15,
    start: 0,
    end: 15,
  }
  return (
    <SearchQuery.Provider value={{ ...queryData }}>
      <ResultsDataContainer.Provider value={searchConfig}>
        <main className={animations}>
          <Navbar />
          <Outlet />
          <Footer />
          <DiscountModal />
        </main>
      </ResultsDataContainer.Provider>
    </SearchQuery.Provider>
  )
}

export default Layout
