import React from 'react'
import DiscoverCollectionTitle from './DiscoverCollectionsTitle'
import DiscoverCollections from './DiscoverCollections'

const Collection = () => (
  <div id="discover-collection">
    <div className="discover-list">
      <DiscoverCollectionTitle />
      <DiscoverCollections />
    </div>
    <div className="discover-list">
      <DiscoverCollectionTitle />
      <DiscoverCollections />
    </div>
  </div>
)

export default Collection
