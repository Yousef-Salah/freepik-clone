import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Pages } from './seepick.config'

import PageNotFound from './components/Common/PageNotFound/PageNotFound'
import { Layout } from './components/Layouts/Layout'
import Home from './pages/Home'
import Search from './pages/Search'
import Category from './pages/Category'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Page3D from './pages/Page3D'
import Fonts from './pages/Fonts'
import Collections from './pages/Collections'

import DataFilter from './api/helpers/DataFilter'
import './App.scss'
import Test from './components/Home/Test/Test'

const App = () => {
  const dataFilter = new DataFilter()
  const {
    home,
    search,
    categories,
    accounts,
    collections,
    fonts,
    premium,
    threeD,
  } = Pages

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/test" element={<Test />} />
        {home && <Route path="/" element={<Home />} />}
        {search && (
          <Route
            path="/search/:searchInput"
            element={<Search dataFilter={dataFilter} />}
          />
        )}
        {categories && <Route path="/category/:term" element={<Category />} />}
        {accounts && <Route path="/login" element={<Login />} />}
        {accounts && <Route path="/signup" element={<Signup />} />}
        {collections && <Route path="/collections" element={<Collections />} />}
        {fonts && <Route path="/fonts" element={<Fonts />} />}
        {premium && <Route path="/pricing" element={<Pricing />} />}
        {threeD && <Route path="/3d-models" element={<Page3D />} />}
        <Route path="/*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default App
