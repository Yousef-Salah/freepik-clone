import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Pages } from './seepick.config'
import PageNotFound from './components/Common/PageNotFound/PageNotFound'
import Layout from './components/Layouts/Layout'
import Home from './pages/Home'
import Search from './pages/Search'
import DataFilter from './api/helpers/DataFilter'
import Category from './pages/Category'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Page3D from './pages/Page3D'
import Fonts from './pages/Fonts'
import Collections from './pages/Collections'
const App = () => {
  const dataFilter = new DataFilter()

  return (
    <Routes>
      <Route element={<Layout />}>
        {Pages.home && <Route path={'/'} element={<Home />} />}
        {Pages.search && (
          <Route path={'/search/:searchInput'} element={<Search dataFilter={dataFilter} />} />
        )}
        {Pages.categories && <Route path={'/category/:term'} element={<Category />} />}
        {Pages.accounts && <Route path={'/login'} element={<Login />} />}
        {Pages.accounts && <Route path={'/signup'} element={<Signup />} />}
        {Pages.collections && <Route path={'/collections'} element={<Collections />} />}
        {Pages.fonts && <Route path={'/fonts'} element={<Fonts />} />}
        {Pages.premium && <Route path={'/pricing'} element={<Pricing />} />}
        {Pages.threeD && <Route path={'/3d-models'} element={<Page3D />} />}
        <Route path={'/*'} element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default App
