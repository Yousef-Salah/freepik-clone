import React from 'react'
import tags from './tags.utils'
import './TagsList.scss'

const TagsList = () => {
  const tagsData = tags
  return (
    <div className="tags-list">
      <div className="tags-items">
        {tagsData.map((item) => (
          <TagItem key={item.toString()} data={item} />
        ))}
      </div>
    </div>
  )
}

const TagItem = ({ data }) => {
  const [selected, setSelected] = React.useState(false)
  return (
    <div
      className={`tagbar-item ${selected ? 'bg-primary text-white' : ''}`}
      onClick={() => setSelected(!selected)}
      onKeyDown={() => setSelected(!selected)}
      role="tab"
      tabIndex={0}
    >
      <h5>{data}</h5>
    </div>
  )
}

export default TagsList
