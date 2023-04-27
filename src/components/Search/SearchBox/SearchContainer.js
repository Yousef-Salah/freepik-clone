/* eslint react/prop-types: 0 */
import React from 'react'
import { Link } from 'react-router-dom'
import SearchBox from './SearchComponents/SearchBox'
import TransparentSearchTag from './SearchComponents/TransparentSearchTag'
import { searchContainerData } from './utils'

import './search-container.scss'

// TODO: Search input responsive bug & container class issue

const SearchContainer = (props) => {
  const mainPageComponent = (
    <div className="search-container-wrapper">
      <div className="container-fluid" id="mp-search-container">
        <div className="logo-wrapper">
          <img src="assets/images/common/navbar/freepik-no_bg.png" alt="freepik logo" />
        </div>
        <h1 className="h1 text-center">{searchContainerData.title || 'no Title'}</h1>
        <h2 className="h2 text-center">{searchContainerData.subtitle || 'no Subtitle'}</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <SearchBox dataHandler={props.dataHandler} mainPage={true} page={props.page} />
        </div>
        <div className="row d-flex justify-content-center pt-3" id="search-input-tags">
          <TransparentSearchTag titleProp="Infographic" />
          <TransparentSearchTag titleProp="Social Media" />
          <TransparentSearchTag titleProp="Template" />
        </div>
      </div>
    </div>
  )

  const categoriesSearchComponent = (
    <div className="container-fluid" id="op-search-container">
      <div className="row">
        <div className="col-3 col-sm-2">
          <Link to="/" className="d-flex align-items-center justify-content-center w-100 h-100">
            <img
              className="h-100"
              src="/assets/images/icons/freepik-full-logo.PNG"
              alt="freepik icon"
            />
          </Link>
        </div>
        <div className="col-9 col-sm-10">
          <SearchBox dataHandler={props.dataHandler} mainPage={false} page={props.page} />
        </div>
      </div>
    </div>
  )

  return props.mainPage ? mainPageComponent : categoriesSearchComponent
}

export default SearchContainer
