import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontsData } from './FontsData.utils'
import FontCardGrid from './FontCardGrid'

import './fonts-list.scss'

const FontsGridView = () => {
  const [shuffled, setShuffle] = useState(FontsData)
  function shuffleArray() {
    // for (let i = array.length - 1; i > 0; i -= 1) {
    //   const j = (Math.floor(Math.random() * (i + 1))[(array[i], array[j])] = [
    //     array[j],
    //     array[i],
    //   ])
    // }
  }
  function shuffle() {
    window.scrollTo(0, 0)
    const newShuffledArray = [...shuffled]
    shuffleArray(newShuffledArray)
    setShuffle(newShuffledArray)
  }
  return (
    <>
      <ul>
        <div className="container-fluid fontsgrid">
          <div className="grid-list grid-view" id="grid-list">
            <button className="list " type="submit">
              <Link to="/fonts">
                <i className="bx bx-list-ul" />
              </Link>
            </button>
            <button className="grid grid-list-selected" type="submit">
              <Link to="/fontsgrid">
                <i className="bi bi-grid-3x3-gap-fill" />
              </Link>
            </button>
          </div>
          <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 row-cols-md-2 row-cols-xl-5 cards-container">
            {shuffled.map((val) => (
              <div className="col gridcard">
                <li>
                  <Link to={val.link}>
                    <FontCardGrid
                      name={val.fontName}
                      img={`/assets/images/fonts/${val.img}`}
                      creator={val.creator}
                      avatar={`/assets/images/fonts/avatars/${val.avatar}`}
                    />
                  </Link>
                </li>
              </div>
            ))}
          </div>
        </div>
      </ul>
      <button
        onClick={shuffle}
        type="button"
        className="btn btn-primary nextpage"
      >
        Next Page
        <i className="bi bi-arrow-right" />
      </button>
    </>
  )
}

export default FontsGridView
