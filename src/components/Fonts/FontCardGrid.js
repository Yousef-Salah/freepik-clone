import React from 'react'
import './fontslist.css'

const FontCardGrid = (props) => {
  return (
    <div className="img-wrapper fontscardgrid">
      <img src={props.img} className="fontimg" />
      <div className="desc">
        <div className="font-name">{props.name}</div>
        <img className="avatar" src={props.avatar} />
        <div className="creator-name">{props.creator}</div>
      </div>
    </div>
  )
}

export default FontCardGrid
