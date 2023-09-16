import { createContext } from 'react'

const DefaultQuery = {
  searchInput: '',
  'Asset Type': '',
  License: '',
  'AI-generated': '',
  Color: '',
  People: '',
  Orientation: '',
  Style: '',
  'Quick edit': '',
  'Freepicks choice': '',
}

const SearchQueryNew = createContext(DefaultQuery)

export default SearchQueryNew
