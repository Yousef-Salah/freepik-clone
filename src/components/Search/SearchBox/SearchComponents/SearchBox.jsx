/* eslint-disable */
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import DropDownItem from './SearchDropdown'
import DropDownButton from './DropDownButton'
import SearchQuery from '../../../../contexts/SearchQuery'
import SearchQueryNew from '../../../../contexts/SearchQueryNew'
import './search-box.scss'

const SearchBox = (props) => {
  const searchQuery = useContext(SearchQuery)
  const [searchInputState, setSearchInputState] = useState(
    searchQuery.current.searchInput
  )
  const [deleteTextIcon, setDeleteTextIcon] = useState('d-none')
  const [buttonLabel, setButtonLabel] = useState('Assets')
  const [inputPlaceHolder, setInputPlaceHolder] = useState('Search all assets')
  const searchInput = useRef(
    window.location.pathname.split('/')[2]?.replace('_', ' ')
  )
  const { filterData, setFilterData } = useContext(SearchQueryNew)
  const itemType = useRef(searchQuery.current.itemType)
  const category = useRef(searchQuery.current.category)
  const itemPricesList = useRef(searchQuery.current.itemPriceType)
  const navigate = useNavigate()
  const mainPage = !props.mainPage ? 'sub-page-search' : ''
  // update searchQueryNew context
  useEffect(() => {
    setFilterData({
      ...filterData,
      searchInput: searchInput.current,
    })
  }, [])
  const buttonLabelGenerator = () => {
    let label = ''

    label = itemType.current

    // if(itemPrice.length) label += ', ' +  itemPrice.join(', ');

    if (itemPricesList.current) label += ' ' + itemPricesList.current.join(', ')

    if (category.current) label += ', ' + category.current

    return label
  }
  const setSearchInputPlaceHolder = () => {
    let result = category.current

    result += ' ' + itemType.current

    if (category.current) result = 'Search for ' + result
    else result = 'Search all' + result

    setInputPlaceHolder(result)
  }

  useEffect(() => {
    // if (!props.mainPage && props.page !== 'category') props.dataHandler()
    setSearchInputState(searchQuery.current.searchInput)
    setButtonLabel(buttonLabelGenerator())
    setSearchInputPlaceHolder()
  }, [props.data, searchQuery.current.searchInput])

  const searchInputHanlder = (e) => {
    searchInput.current = e.target.value

    setSearchInputState(e.target.value)

    if (searchInput.current === '') {
      setDeleteTextIcon('d-none')
    } else {
      setDeleteTextIcon('')
    }
  }

  const itemTypeHandler = (e) => {
    itemType.current = e.target.getAttribute('title')
    setButtonLabel(buttonLabelGenerator())
    setSearchInputPlaceHolder()
  }

  const itemPriceHandler = (e) => {
    const incomingPrice = e.target.getAttribute('title')

    if (!itemPricesList.current.length) {
      // there is no selected input
      itemPricesList.current.push(incomingPrice)
    } else if (itemPricesList.current.length === 2) {
      const index = itemPricesList.current.indexOf(incomingPrice)
      itemPricesList.current.splice(index, 1)
    }
    itemPricesList.current[0] === incomingPrice
      ? itemPricesList.current.pop()
      : itemPricesList.current.push(incomingPrice)
    setButtonLabel(buttonLabelGenerator())
    setSearchInputPlaceHolder()
  }

  const itemCategoryHandler = (e) => {
    const value = e.target.getAttribute('title')

    if (value === category.current) category.current = ''
    else category.current = value

    setButtonLabel(buttonLabelGenerator())
    setSearchInputPlaceHolder()
  }

  // const checkDeleteIconStatus = (event) => {
  //   if (event.target.value) {
  //     setDeleteTextIcon('opacity-100')
  //   } else {
  //     setDeleteTextIcon('opacity-0')
  //     setTimeout(() => {
  //       if (!event.target.value) {
  //         // in case user is writing while the d-none timeout is running
  //         setDeleteTextIcon('d-none')
  //       }
  //     }, 1300)
  //   }
  // }

  const deleteText = (event) => {
    searchInput.current = ''
    event.target.value = ''
    setSearchInputState('')
    setDeleteTextIcon('opacity-0')

    setTimeout(() => {
      if (!event.target.value) {
        // in case user is writing while the d-none timeout is running
        setDeleteTextIcon('d-none')
      }
    }, 1300)
  }

  const submitActionHandler = (event) => {
    event.preventDefault()

    if (searchInputState === '') {
      return
    }

    // console.log(window.location.pathname.split('/')[2]);
    history.pushState(null, '', searchInput.current?.replace(' ', '_'))

    const data = {
      searchInput: searchInput.current,
      itemType: itemType.current, // assets collections
      itemPriceType: itemPricesList.current, // free premium
      category: category.current,
    }

    searchQuery.current = data

    if (!props.mainPage && props.page !== 'category') {
      // props.dataHandler()
    } else {
      return navigate(
        `${props.page === 'category' ? '../../' : ''}search/${
          searchInput.current
        }`
      )
    }
  }

  return (
    <div className={mainPage} id="search-input-container">
      <form
        id="search"
        className="h-100 rounded"
        onSubmit={submitActionHandler}
      >
        <div className="dropdown d-inline-block rounded-start">
          <DropDownButton buttonLabel={buttonLabel} />
          <div className="dropdown-menu" id="search-filter-items">
            <div id="search-type">
              <DropDownItem
                type="radio"
                title="Assets"
                name="search-type"
                for="assets"
                inputHandler={itemTypeHandler}
                value={itemType.current}
              />
              <DropDownItem
                type="radio"
                title="Collections"
                name="search-type"
                for="collections"
                inputHandler={itemTypeHandler}
                value={itemType.current}
              />
            </div>
            <DropDownItem divider={true} />
            <div id="item-price">
              <DropDownItem
                title="Free"
                name="free"
                for="free"
                inputHandler={itemPriceHandler}
                value={itemPricesList.current.includes('Free') ? 'Free' : ''}
              />
              <DropDownItem
                title="Premium"
                name="premium"
                for="premium-checkbox"
                iconClasses="fa-solid fa-crown"
                goldItem={true}
                inputHandler={itemPriceHandler}
                value={
                  itemPricesList.current.includes('Premium') ? 'Premium' : ''
                }
              />
            </div>
            <div id="item-category">
              <DropDownItem divider={true} single />
              <DropDownItem
                title="Vectors"
                name="vectors"
                for="vectors"
                inputHandler={itemCategoryHandler}
                category={category.current}
                single
              />
              <DropDownItem
                title="Photos"
                name="photos"
                for="photos"
                inputHandler={itemCategoryHandler}
                category={category.current}
                single
              />
              <DropDownItem
                title="PSDs"
                name="psd"
                for="psd"
                inputHandler={itemCategoryHandler}
                category={category.current}
                single
              />
              <DropDownItem
                title="Icons"
                name="icons"
                for="icon"
                inputHandler={itemCategoryHandler}
                category={category.current}
                single
              />
            </div>
          </div>
        </div>
        <div
          className="d-inline-block position-relative rounded-start"
          id="input-field"
        >
          <span className={deleteTextIcon} onClick={deleteText}>
            <i className="fa-solid fa-square-xmark fa-2x "></i>
          </span>
          <input
            required={true}
            type="text"
            id="search-value"
            onChange={searchInputHanlder}
            placeholder={inputPlaceHolder}
            className="rounded-start"
            value={searchInputState}
          />
        </div>
        <div id="search-button" className="d-inline-block">
          <button type="submit" className="rounded-end">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>
  )
}

// Exports
export default SearchBox
