import React from 'react'
import './fonts-list.scss'

const FontCardGrid = ({ img, name, avatar, creator }) => (
  <div className="img-wrapper fontscardgrid">
    <img src={img} className="fontimg" alt={name} />
    <div className="desc">
      <div className="font-name">{name}</div>
      <img className="avatar" src={avatar} alt={avatar} />
      <div className="creator-name">{creator}</div>
    </div>
  </div>
)

export default FontCardGrid
