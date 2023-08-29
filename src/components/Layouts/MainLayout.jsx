/* eslint-disable */
import React from 'react'
import propTypes from 'prop-types'
import Navbar from './Navbar/Navbar'

const MainLayout = ({ page, pageTitle, children }) => (
  <>
    <Navbar page={page} title={pageTitle} />
    {children}
  </>
)


MainLayout.propTypes = {
  page: propTypes.string,
  pageTitle: propTypes.string,
  children: propTypes.any
}

export default MainLayout
