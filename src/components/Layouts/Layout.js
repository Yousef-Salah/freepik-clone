import React, { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { DevConfig } from '../../seepick.config'
import { GlobalContext } from '../../contexts/Context'
import SearchQuery from '../../contexts/SearchQuery'
import ResultsDataContainer from '../../contexts/ResultsDataContainer'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import DiscountModal from '../Common/DiscountModal/DicountModal'

const Layout = () => {
  const animations = (DevConfig.animations && 'animate') || ''
  const search = {
    searchQuery: 'xyz',
    searchImage: async () => {
      return { title: 'im an item', desc: 'holding description' }
    }
  }
  const config = {
    getPageName: () => {}
  }
  const Query = useRef({
    searchInput: window.location.pathname.split('/')[2]?.replace('_', ' '),
    itemType: 'Assets', // assets collections
    itemPriceType: [], // free premium
    category: 'c'
  })
  const sqValue = {
    data: [],
    lastQuery: Query.searchInput,
    offset: 15,
    start: 0,
    end: 15
  }
  return (
    <GlobalContext.Provider value={{ search, config }}>
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
    </GlobalContext.Provider>
  )
}

export default Layout
