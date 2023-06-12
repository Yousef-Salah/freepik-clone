import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import DropDownItem from './SearchDropdown'
import DropDownButton from './DropDownButton'
import SearchQuery from '../../../../contexts/SearchQuery'
import './search-box.scss'

const SearchBox = (props) => {
  let { mainPage } = props
  const { page, data } = props
  let { QsearchInput, QitemType, Qcategory, QitemPriceType } =
    useContext(SearchQuery).current
  const [searchInputState, setSearchInputState] = useState(QsearchInput)
  const [deleteTextIcon, setDeleteTextIcon] = useState('d-none')
  const [buttonLabel, setButtonLabel] = useState('Assets')
  const [inputPlaceHolder, setInputPlaceHolder] = useState('Search all assets')
  let searchInput = useRef(
    window.location.pathname.split('/')[2]?.replace('_', ' ')
  )
  let itemType = useRef(QitemType)
  let category = useRef(Qcategory)
  const itemPricesList = useRef(QitemPriceType)
  mainPage = !mainPage ? 'sub-page-search' : ''

  const navigate = useNavigate()

  const buttonLabelGenerator = () => {
    let label = ''

    label = itemType

    // if(itemPrice.length) label += ', ' +  itemPrice.join(', ');

    if (itemPricesList) {
      // label += ' '.concat(itemPricesList.join(', '))
    }
    if (category) {
      label += ', '.concat(category)
    }

    return label
  }
  const setSearchInputPlaceHolder = () => {
    let result = category

    result += ' '.concat(itemType)

    if (category) result = 'Search for '.concat(result)
    else result = 'Search all'.concat(result)

    setInputPlaceHolder(result)
  }

  useEffect(() => {
    // eslint-disable-next-line
    if (!mainPage && page !== 'category') props.dataHandler()
    setSearchInputState(QsearchInput)
    setButtonLabel(buttonLabelGenerator())
    setSearchInputPlaceHolder()
  }, [data, QsearchInput])

  const searchInputHanlder = (e) => {
    searchInput = e.target.value

    setSearchInputState(e.target.value)

    if (searchInput === '') {
      setDeleteTextIcon('d-none')
    } else {
      setDeleteTextIcon('')
    }
  }

  const itemTypeHandler = (e) => {
    itemType = e.target.getAttribute('title')
    setButtonLabel(buttonLabelGenerator())
    setSearchInputPlaceHolder()
  }

  const itemPriceHandler = (e) => {
    const incomingPrice = e.target.getAttribute('title')

    if (!itemPricesList.length) {
      // there is no selected input
      itemPricesList.push(incomingPrice)
    } else if (itemPricesList.length === 2) {
      const index = itemPricesList.indexOf(incomingPrice)
      itemPricesList.splice(index, 1)
    }
    if (itemPricesList[0] === incomingPrice) {
      itemPricesList.pop()
    } else {
      itemPricesList.push(incomingPrice)
    }
    setButtonLabel(buttonLabelGenerator())
    setSearchInputPlaceHolder()
  }

  const itemCategoryHandler = (e) => {
    const value = e.target.getAttribute('title')

    if (value === category) category = ''
    else category = value

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
    searchInput = ''
    // event.target.value = ''
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
    // history.pushState(null, '', searchInput?.replace(' ', '_'))

    const newData = {
      NsearchInput: searchInput,
      NitemType: itemType, // assets collections
      NitemPriceType: itemPricesList, // free premium
      Ncategory: category,
    }

    Qcategory = newData.Ncategory
    QitemType = newData.NitemType
    QitemPriceType = newData.NitemPriceType
    QsearchInput = newData.NsearchInput

    if (!mainPage && page !== 'category') {
      // eslint-disable-next-line
      // props.dataHandler()
    } else {
      navigate(`${page === 'category' ? '../../' : ''}search/${searchInput}`)
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
                value={itemType}
              />
              <DropDownItem
                type="radio"
                title="Collections"
                name="search-type"
                for="collections"
                inputHandler={itemTypeHandler}
                value={itemType}
              />
            </div>
            <DropDownItem divider />
            <div id="item-price">
              <DropDownItem
                title="Free"
                name="free"
                for="free"
                inputHandler={itemPriceHandler}
                // value={itemPricesList?.includes('Free') ? 'Free' : ''}
              />
              <DropDownItem
                title="Premium"
                name="premium"
                for="premium-checkbox"
                iconClasses="fa-solid fa-crown"
                goldItem
                inputHandler={itemPriceHandler}
                // value={itemPricesList?.includes('Premium') ? 'Premium' : ''}
              />
            </div>
            <div id="item-category">
              <DropDownItem divider single />
              <DropDownItem
                title="Vectors"
                name="vectors"
                for="vectors"
                inputHandler={itemCategoryHandler}
                category={category}
                single
              />
              <DropDownItem
                title="Photos"
                name="photos"
                for="photos"
                inputHandler={itemCategoryHandler}
                category={category}
                single
              />
              <DropDownItem
                title="PSDs"
                name="psd"
                for="psd"
                inputHandler={itemCategoryHandler}
                category={category}
                single
              />
              <DropDownItem
                title="Icons"
                name="icons"
                for="icon"
                inputHandler={itemCategoryHandler}
                category={category}
                single
              />
            </div>
          </div>
        </div>
        <div
          className="d-inline-block position-relative rounded-start"
          id="input-field"
        >
          <button type="submit" className={deleteTextIcon} onClick={deleteText}>
            <i className="fa-solid fa-square-xmark fa-2x " />
          </button>
          <input
            required
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
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </form>
    </div>
  )
}

// Exports
export default SearchBox
