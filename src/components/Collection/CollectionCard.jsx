import React from 'react'

const CollectionCard = () => {
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
                alt="d-img"
              />
            </div>
            <div className="row discover-collection-row3">
              <img
                src={`/assets/images/collections/collection_cards/${img}`}
                id="discover-img2"
                alt="d-img"
              />
            </div>
          </div>
          <div className="col-6 discover-collection-col">
            <img
              src={`/assets/images/collections/collection_cards/${img}`}
              id="discover-img3"
              alt="d-img"
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

export default CollectionCard
