import React from 'react'
import { CreatorCollectionList } from '../../../utils/Collections'
import './creator-collection.scss'
import ExploreCard from './ExploreCard'

const CreatorCollections = () => {
  return (
    <div className="collection-row">
      {CreatorCollectionList.map((item, idx) => {
        return (
          <div className="d-collection-col" key={idx}>
            <div className="creator-collection-div">
              <img
                className="creator-collection-img1"
                src={`assets/images/home/creator_collection/${item.link}`}
              />
              <img
                className="creator-collection-img"
                src={`assets/images/home/creator_collection/${item.link}`}
              />
              <div className="row text-rescources">
                <p className="creator-collection-text">{item.ctext}</p>
                <p className="resources">{item.cresources}</p>
              </div>
            </div>
          </div>
        )
      })}
      <ExploreCard />
    </div>
  )
}
export default CreatorCollections
