/* eslint-disable*/
import React, { useRef } from 'react'
import Type from './Tag'
import './tag-bar.css'

const TagBar = (props) => {
  const data = props.data
  // const opSearchContainerRef = useRef(null)
  // const tagbarRef = useRef(null)
  // const sidebarrRef = useRef(null)
  // const filtersbtnRef = useRef(null)

  // addEventListener('scroll', (event) => {
  //   if (window.location.pathname.split('/')[1] === 'search') {
  //     if (document.documentElement.scrollTop > 46) {
  //       opSearchContainerRef.current.style.top = '0'
  //       opSearchContainerRef.current.style.position = 'fixed'
  //     } else {
  //       opSearchContainerRef.current.style.top = 'unset'
  //       opSearchContainerRef.current.style.position = 'relative'
  //     }
  //     if (document.documentElement.scrollTop > 205) {
  //       tagbarRef.current[0].style.position = 'fixed'
  //       tagbarRef.current[0].style.top = '60px'
  //       tagbarRef.current[0].style.padding = '8px 0px 0px 0px'
  //       tagbarRef.current[0].style.left = '280px'
  //       sidebarrRef.current.style.position = 'fixed'
  //       sidebarrRef.current.style.top = '60px'
  //       filtersbtnRef.current[0].style.top = '30px'
  //     } else {
  //       tagbarRef.current[0].style.position = 'relative'
  //       tagbarRef.current[0].style.top = '0'
  //       tagbarRef.current[0].style.left = '170px'
  //       sidebarrRef.current.style.position = 'absolute'
  //       sidebarrRef.current.style.top = 'unset'
  //       tagbarRef.current[0].style.padding = '0'
  //       filtersbtnRef.current[0].style.top = '20px'
  //     }
  //   }
  // })

  return (
    <div className="tagbar-wrapper">
      <div id={props.id} className={'tagbar reset-relative ' + props.className}>
        {data.map((val, key) => {
          return (
            <Type
              title={val.title}
              pic={val.pic}
              className={val.className}
              className1={val.className1}
              page={val.page}
              key={key}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TagBar
