import React from 'react'
import { Link } from 'react-router-dom'
import { CreatorCollectionList } from '../../../utils/Collections'
import ExploreCard from './ExploreCard'

import './creator-collection.scss'

const CreatorCollections = () => (
  <div className="collection-row">
    {CreatorCollectionList.map((item) => (
      <Link to={`/search/${item.ctext}`}>
        <div className="d-collection-col" key={item.toString()}>
          <div className="creator-collection-div">
            <img
              className="creator-collection-img1"
              src={`assets/images/home/creator_collection/${item.link}`}
              alt={item.link}
            />
            <img
              className="creator-collection-img"
              src={`assets/images/home/creator_collection/${item.link}`}
              alt={item.link}
            />
            <div className="row text-rescources">
              <p className="creator-collection-text">{item.ctext}</p>
              <p className="resources">{item.cresources}</p>
            </div>
          </div>
        </div>
      </Link>
    ))}
    <ExploreCard />
  </div>
)
export default CreatorCollections
