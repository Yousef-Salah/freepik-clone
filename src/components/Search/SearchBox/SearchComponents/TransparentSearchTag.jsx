/* eslint-disable */
import React, { useContext } from 'react'
import propTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import SearchQuery from '../../../../contexts/SearchQuery'
import './transparent-search-tag.scss'

const TransparentSearchTag = ({ titleProp }) => {
  const navigate = useNavigate()
  const title = titleProp.replace(' ', '_')
  const searchQuery = useContext(SearchQuery)

  return (
    <a
      className="search-container-tag"
      onClick={() => {
        searchQuery.current.searchInput = titleProp
        return navigate(`search/${title}`)
      }}
    >
      <i className="fa-solid fa-magnifying-glass"></i>
      {titleProp}
    </a>
  )
}
TransparentSearchTag.propTypes = {
  titleProp: propTypes.string,
}

export default TransparentSearchTag
