import React from 'react'
import tags from './tags.utils'
import './TagsList.scss'

const TagsList = () => {
  const tagsData = tags
  return (
    <div className="tags-list">
      <div className="tags-items">
        {tagsData.map((item) => (
          <div className="tagbar-item">
            <h5>{item}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TagsList
