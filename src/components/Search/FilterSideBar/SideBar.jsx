/* eslint-disable */
import React, { useState } from 'react'
import './filters.scss'
import CollapseBtn from './CollapseBtn'
import Colorr from './Color'
import Tag from './Tag'
const SideBar = (props) => {
  const data = props.data
  const [open, setOpen] = useState(false)
  // const toggle = () => {
  //   setOpen(!open)
  //   props.updateOpen(!open)
  // }
  return (
    <div
      id="sidebarr"
      className={`sidebar flex ${
        open ? 'tw-w-64 translatex100 ' : 'tw-w-0 translatex0'
      }`}
    >
      <div
        className={`${
          open ? 'tw-w-64 borda' : 'tw-w-0'
        } sidebar-content h-screen tw-p-0 tw-pt-0 tw-sticky`}
      >
        <div
          className={` ${open && 'tw-scale-0'}`}
          onClick={() => {
            setOpen(!open)
            props.updateOpen(!open)
          }}
        >
          <div className={`filters `}>
            <div className="container-fluid filterscont">
              <div className={`${!open && 'filter-btn-wrapper'} `}>
                <button
                  className="btn-light filtersbtn tw-items-center position-absolute tw-top-5 tw-left-1"
                  type="button"
                >
                  <i className="bi bi-sliders"></i>Filters
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`tw-flex tw-items-center tw-w-58 mb-5 ${
            !open && 'tw-scale-0'
          }`}
        >
          <i className="bi bi-sliders position-absolute tw-top-5"></i>
          <h1
            className={`tw-text-black position-absolute tw-top-5  tw-left-6 tw-font-medium tw-text-xl`}
          >
            Filters
          </h1>

          <button
            className="bx bx-arrow-from-right tw-text-3xl tw-mt-3	tw-hover:border tw-border-slate-100   tw-text-black tw-origin-right tw-font-medium tw-flex-end position-absolute tw-top-0 tw-right-0 "
            onClick={() => {
              setOpen(!open)
              props.updateOpen(!open)
            }}
          >
            {' '}
          </button>
        </div>
        <ul className={`sidebarcontent`}>
          {data.map((val, idx) => {
            const tags = val.tags
            const colors = val.colors
            const subs = val.subs
            const age = val.age
            return (
              <>
                <CollapseBtn
                  title={val.collapse}
                  pic={val.icon}
                  target={'#' + val.id}
                  aria={val.id}
                  info={val.info}
                  key={idx}
                />
                <div className="collapse" id={val.id}>
                  <span className="container-fluid ">
                    <div className={`row category-row sidebarrow `}>
                      {val.tag === 1
                        ? tags.map((tag, index) => (
                            <Tag
                              title={tag}
                              pic={val.icon1[index]}
                              page={val.page}
                              key={index}
                            />
                          ))
                        : null}
                      {val.color === 1 ? (
                        colors.map((color, index) => (
                          <Colorr
                            color={color}
                            key={index}
                            cancel={val.icon1[index]}
                          />
                        ))
                      ) : val.sub === 1 ? (
                        subs.map((sub, index) => (
                          <>
                            <CollapseBtn
                              title={sub.title}
                              target={'#' + sub.id}
                              aria={sub.id}
                              className1="subcollapsebtn"
                              className="subbtn-collapse"
                              className3="collapsep"
                              key={index}
                            />
                            <div className="collapse" id={sub.id}>
                              <span className="container ">
                                <div className={`row category-row  container`}>
                                  {sub.tags.map((tag, index) => (
                                    <Tag
                                      key={index}
                                      title={tag}
                                      page={val.page}
                                    />
                                  ))}
                                </div>
                              </span>
                            </div>
                          </>
                        ))
                      ) : val.toggle === 1 ? (
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input toggle-switch"
                            type="checkbox"
                            role="switch"
                            id={val.switchId}
                          />
                          <label className="form-check-label toggle-label">
                            {val.par}
                          </label>
                        </div>
                      ) : null}
                    </div>
                  </span>
                </div>
              </>
            )
          })}
        </ul>
      </div>
      <div></div>
    </div>
  )
}

export default SideBar
