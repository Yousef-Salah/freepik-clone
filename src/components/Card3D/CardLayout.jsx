import React from 'react'
import Card3D from './Card3D'
import { Cards3dData } from './Cards3dData'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CardLayout = () => {
  let [shuffled, setShuffle] = useState(Cards3dData)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = (Math.floor(Math.random() * (i + 1))[(array[i], array[j])] = [
        array[j],
        array[i],
      ])
    }
  }
  function shuffle() {
    window.scrollTo(0, 0)
    const newShuffledArray = [...shuffled]
    shuffleArray(newShuffledArray)
    setShuffle(newShuffledArray)
  }
  return (
    <div className="row layout-3d ">
      {shuffled.map((val, idx) => {
        return (
          <div className="col" key={idx}>
            <Link to={val.link}>
              <Card3D
                image={`assets/images/categories/3d-models/${val.image}`}
                name={val.name}
                avatar={`assets/images/categories/3d-models/${val.avatar}`}
                owner={val.owner}
              />
            </Link>
          </div>
        )
      })}
      <button
        onClick={shuffle}
        type="button"
        className="btn btn-primary  nextpage next3d"
      >
        Next Page <i className="bi bi-arrow-right"></i>
      </button>
    </div>
  )
}

export default CardLayout
