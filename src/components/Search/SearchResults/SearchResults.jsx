import React, { useState, useEffect } from 'react'
import CollectionCard from '../../Collection/CollectionCard'

import './search-results.scss'
import Searchimgcard from './Searchimgcard'
import SearchResultHeader from './SearchResultHeader'
import ModalTrigger from '../../Category/PreviewModal/ModalTrigger'
import { useNavigate, useParams } from 'react-router-dom'

const SearchResults = (props) => {
  const [modalDisplay, setModalDisplay] = useState(false)
  const [modalData, setModalData] = useState({})
  const [loaded, setLoaded] = useState(false)
  const navigate = useNavigate()
  const { itemId } = useParams()
  let item
  const [filteredImages, setFilteredImages] = useState([])
  const [foundResult, setFoundResult] = useState(true)

  const cardStyles = ['card-wrapper', 'card-wrapper card-wrapper-flexed']
  useEffect(() => {
    ;(() => setLoaded(false))()

    if (props.images.length !== 0) {
      // check for empty array
      if (itemId !== undefined) {
        item = props.images.find((item) => item.id == itemId)

        if (item === undefined) {
          return navigate('/not-found')
        } else {
          modalHandler(item)
        }
      }
    }
    setTimeout(() => {
      setLoaded(true)
    }, 500)

    if (props.images[0]?.title) {
      setFilteredImages(props.images)
      setFoundResult(true)
    } else {
      setFoundResult(false)
    }
  }, [props.images])

  // const toggleModal = () => {
  //   setModalDisplay(!modalDisplay)
  // }

  const modalHandler = (item) => {
    props.modalLift(item)
  }

  // ! This is a hacky way to make the sidebar scrollable
  // addEventListener('scroll', (event) => {
  //   if (window.location.pathname.split('/')[1] === 'search') {
  //     const docHeight = document.getElementById('search-results').scrollHeight
  //     const theMax = docHeight - document.documentElement.scrollTop + 200

  //     if (docHeight > 728) {
  //       document.getElementsByClassName('sidebarcontent')[0].style.maxHeight = theMax + 'px'
  //     } else {
  //       document.getElementsByClassName('sidebarcontent')[0].style.maxHeight = '95vh'
  //     }
  //   }
  // })

  return (
    <div id="search-results">
      {loaded && <ModalTrigger displayStatus={modalDisplay} data={modalData} />}
      <SearchResultHeader
        title={
          (foundResult ? 'Showing results for ' : "couldn't find ") +
          props.title
        }
        sort={true}
      />
      <div className="search-description" id="pills-tab" role="tablist">
        <li className="nav-item-search" role="presentation">
          <button
            className="active"
            id="grid-cards-tab"
            data-bs-toggle="pill"
            data-bs-target="#grid-cards"
            type="button"
            role="tab"
            aria-controls="grid-cards"
            aria-selected="true"
          >
            Images {props.images.length}
          </button>
        </li>{' '}
        <li className="nav-item-search" role="presentation">
          <button
            id="collection-cards-tab"
            data-bs-toggle="pill"
            data-bs-target="#collection-cards"
            type="button"
            role="tab"
            aria-controls="collection-cards"
            aria-selected="false"
          >
            Collections {0}
          </button>
        </li>
      </div>
      <div id="grid-cards" className="tab-pane fade show active">
        {loaded &&
          filteredImages.map((item, idx) => {
            return (
              <div
                key={idx}
                className={cardStyles[1]}
                onClick={() => modalHandler(item)}
              >
                <Searchimgcard Cardphoto={item} />
              </div>
            )
          })}
      </div>
      <div className="tab-pane fade" id="collection-cards">
        <div className="collection-card-wrapper">
          <CollectionCard card={props.images[0]} />
        </div>
        <h1>LOL</h1>
      </div>
    </div>
  )
}

export default SearchResults
