import React from 'react'
import propTypes from 'prop-types'
const CollectionCard = ({ card }) => {
  const img = ''
  const title = ''
  return (
    <div className="discover-collection-col1">
      <div className="row d-c-r">
        <div className="discover-collection-div">
          <div className="col-6 discover-collection-col">
            <div className="row discover-collection-row2">
              <img
                src={`/assets/images/collections/collection_cards/${img}`}
                id="discover-img1"
              />
            </div>
            <div className="row discover-collection-row3">
              <img
                src={`/assets/images/collections/collection_cards/${img}`}
                id="discover-img2"
              />
            </div>
          </div>
          <div className="col-6 discover-collection-col">
            <img
              src={`/assets/images/collections/collection_cards/${img}`}
              id="discover-img3"
            />
          </div>
        </div>
      </div>
      <div className="row collection-card-info">
        <div className="col-10 para-col">
          <p id="discover-para">{title}</p>
        </div>
        <div className="col-2">.</div>
      </div>
    </div>
  )
}

CollectionCard.propTypes = {
  card: propTypes.object,
}

export default CollectionCard
