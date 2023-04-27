import React, { useRef, useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// page content import
import Home from './pages/Home'
import Category from './pages/Category'
import Search from './pages/Search'
import Fonts from './pages/Fonts'
import FontsFormatGrid from './pages/FontsFormatGrid'
import Page3D from './pages/Page3D'
import Login from './pages/Login'
import Collections from './pages/Collections'
// layouts imports
// import Navbar from './components/Layouts/Navbar/Navbar'
import Pricing from './pages/Pricing'
// import Enhance from './components/Pricing/PricingSection/Enhance/Enhance';
// import Promote from './PromoteSiteFeatures/Promote';
import NotFound from './components/Common/NotFound/NotFound'
// import Footer from './components/Layouts/Footer/Footer'

// Helper Classes
import DataFilter from './Helpers/DataFilter'
import Signup from './pages/Signup'

import DiscountModal from './components/Common/DiscountModal/DicountModal'

// context
import SearchQuery from './context/SearchQuery'
import ResultsDataContainer from './context/ResultsDataContainer'

const App = () => {
  const [page, setPage] = useState('home')

  //   const searchQuery = useRef({
  //     searchInput: window.location.pathname.split('/')[2]?.replace('_', " "),
  //     itemType: "Assets", // assets collections
  //     itemPriceType: [], // free premium
  //     category: "",
  //   });

  const addQuery = (sq) => {
    let searchCat = sq.pathname.split('/')[2]
    let searchQuery = sq.search.split('?query=')[1]
  }

  const queryStringHandler = new URLSearchParams(document.location.search)

  const dataFilter = new DataFilter()

  const Query = useRef({
    searchInput: window.location.pathname.split('/')[2]?.replace('_', ' '),
    itemType: 'Assets', // assets collections
    itemPriceType: [], // free premium
    category: 'c'
  })
  console.log(Query)
  return (
    <SearchQuery.Provider value={Query}>
      <ResultsDataContainer.Provider
        value={{
          data: [],
          lastQuery: Query.searchInput,
          offset: 15,
          start: 0,
          end: 15
        }}
      >
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route
                path={'/*'}
                element={
                  <NotFound
                    page={(name) => {
                      setPage(name)
                    }}
                  />
                }
              />
              <Route
                path={'/'}
                element={
                  <Home
                    page={(name) => {
                      setPage(name)
                    }}
                  />
                }
              />
              <Route
                path={'/search/:searchInput'}
                element={
                  <Search
                    page={(name) => {
                      setPage(name)
                    }}
                    dataFilter={dataFilter}
                    newQuery={addQuery}
                  />
                }
              />
              <Route
                path={'/search/:searchInput/:itemId/preview'}
                element={
                  <Search
                    page={(name) => {
                      setPage(name)
                    }}
                    dataFilter={dataFilter}
                    newQuery={addQuery}
                  />
                }
              />
              <Route
                path={'/category/:term'}
                element={
                  <Category
                    catStyle="style_sep"
                    page={(name) => {
                      setPage(name)
                    }}
                    dataFilter={dataFilter}
                  />
                }
              />
              <Route
                path={'/pricing'}
                element={
                  <Pricing
                    page={(name) => {
                      setPage(name)
                    }}
                  />
                }
              />
              <Route
                path={'/login'}
                element={
                  <Login
                    page={(name) => {
                      setPage(name)
                    }}
                  />
                }
              />
              <Route
                path={'/signup'}
                element={
                  <Signup
                    page={(name) => {
                      setPage(name)
                    }}
                  />
                }
              />
              <Route
                path={'/3d-models'}
                element={
                  <Page3D
                    page={(name) => {
                      setPage(name)
                    }}
                  />
                }
              />
              <Route
                path={'/fonts'}
                element={
                  <Fonts
                    page={(name) => {
                      setPage(name)
                    }}
                  />
                }
              />
              <Route
                path={'/fontsgrid'}
                element={
                  <FontsFormatGrid
                    page={(name) => {
                      setPage(name)
                    }}
                  />
                }
              />
              <Route
                path={'/fonts/:term'}
                element={
                  <Fonts
                    page={(name) => {
                      setPage(name)
                    }}
                  />
                }
              />
              <Route
                path={'/fontsgrid/:term'}
                element={
                  <FontsFormatGrid
                    page={(name) => {
                      setPage(name)
                    }}
                  />
                }
              />
              <Route
                path={'/collections'}
                element={
                  <Collections
                    page={(name) => {
                      setPage(name)
                    }}
                    dataFilter={dataFilter}
                    newQuery={addQuery}
                  />
                }
              />
            </Routes>
            <DiscountModal />
          </BrowserRouter>
        </div>
      </ResultsDataContainer.Provider>
    </SearchQuery.Provider>
  )
}

export default App
