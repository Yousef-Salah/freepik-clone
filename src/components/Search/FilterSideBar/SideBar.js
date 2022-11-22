import React from "react";
import Filters from "./Filters";
import { useState } from "react";
import "./filter-sideBar.css";
import SideTag from "./SideTag";
import CollapseBtn from "./CollapseBtn";
import SideTagWithPic from "./SideTagWithPic";
import SubCollapseBtn from "./SubCollapseBtn";
import Colorr from "./Color";
import Tag from "./Tag";
const SideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sidebar flex">
      <div
        className={`${
          open ? "tw-w-64" : "tw-w-0"
        } sidebar-content h-screen tw-relative tw-p-0 tw-pt-0 tw-sticky`}
      >
        <div
          className={` tw-cursor-pointer-right-3  ${open && "tw-scale-0"}`}
          onClick={() => setOpen(!open)}
        >
          <div className="filters">
            <div className="tw-container-fluid">
              <button
                className="btn-light filtersbtn tw-items-center tw-content-center tw-absolute tw-top-5 tw-left-1"
                type="button"
              >
                <i className="bi bi-sliders"></i>Filters
              </button>
            </div>
          </div>
        </div>
        <div
          className={`tw-flex tw-gap-x-2 tw-items-center tw-w-58 tw-mt- ${
            !open && "tw-scale-0"
          }`}
        >
          <i className="bi bi-sliders"></i>
          <h1 className={`tw-text-black origin-left font-medium tw-text-xl`}>
            Filters
          </h1>

          <button
            className="bx bx-arrow-from-right tw-text-3xl tw-mt-3	tw-hover:border tw-border-slate-100   tw-text-black tw-origin-right tw-font-medium tw-flex-end tw-absolute tw-top-0 tw-right-0 "
            onClick={() => setOpen(!open)}
          >
            {" "}
          </button>
        </div>
        <ul className={`tw-pt-0 tw-block sidebarcontent`}>
          {/*Category*/}
          <li>
           
              <CollapseBtn
                target="#categoryCollapse"
                aria="categryCollapse"
                pic="bx bx-category-alt"
                title="Categroy"
              />
            <div className="collapse" id="categoryCollapse">
              <span className="container-fluid ">
                <div className={`row category-row sidebarrow ${!open && "scale-0"}`}>
                  <SideTag title="Vectors" />
                  <SideTag title="Photos" />
                  <SideTag title="PSD" />
                  <SideTag title="Icons" />
                </div>
              </span>
            </div>
          </li>
          {/*License*/}
          <li>
           
              <CollapseBtn
                title="License"
                pic="bx bx-crown"
                type="button"
                aria="licenseCollapse"
                target="#licenseCollapse"
              />
            <div className="collapse" id="licenseCollapse">
              <span className="container-fluid">
                <div className={`row category-row sidebarrow ${!open && "tw-scale-0"}`}>
                  <SideTag title="Free" />
                  <SideTagWithPic title="Premium" pic="bx bx-crown" />
                </div>
              </span>
            </div>
          </li>
          {/* Color*/}
          <li>
        
              <CollapseBtn
                title="Color"
                pic="bx bx-palette"
                aria="colorCollapse"
                target="#colorCollapse"
              />
            <div className="collapse" id="colorCollapse">
              <span className="container-fluid">
                <div className={`row category-row sidebarrow ${!open && "scale-0"}`}>
                  <div className="row category-row color-row">
                  <Colorr color='tw-border' cancel=' bi bi-x cancel '/>
                  <Colorr color='tw-bg-red-500' />
                    <Colorr color='tw-bg-orange-500'/>
                    <Colorr color='tw-bg-pink-200'/>
                    <Colorr color='tw-bg-yellow-300'/>
                    <Colorr color='tw-bg-green-300'/>
                    <Colorr color='tw-bg-cyan-500'/>
                    <Colorr color='tw-bg-blue-500'/>
                    <Colorr color='tw-bg-purple-500'/>
                    <Colorr color='tw-bg-black'/>
                    <Colorr color='tw-bg-gray-200'/>
                    <Colorr color='tw-bg-white-200 tw-border'/>
                    
                  </div>
                </div>
              </span>
            </div>
          </li>
          {/**People */}
          <li>
           
              <CollapseBtn
                title="People"
                pic="bi bi-person-video"
                aria="peopleCollapse"
                target="#peopleCollapse"
                //  info='bx bx-info-circle ml-16 mt-2'
                className="mt-1"
              />
            <div className="collapse" id="peopleCollapse">
              <span className="container-fluid">
                <div className={`row category-row sidebarrow ${!open && "tw-scale-0"}`}>
                  <div className="row category-row">
                    <SubCollapseBtn
                      title="Number Of People"
                      aria="numberOfPeopleCollapse"
                      target="#numberOfPeopleCollapse"
                    />
                    <div className="collapse" id="numberOfPeopleCollapse">
                      <span className="container-fluid">
                        <div
                          className={`row category-row sidebarrow ${!open && "tw-scale-0"}`}
                        >
                          <SideTag title="1" />
                          <SideTag title="2" />
                          <SideTag title="3" />
                          <SideTag title="4+" />
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="row category-row">
                    <SubCollapseBtn
                      title="Number Of People"
                      aria="ageCollapse"
                      target="#ageCollapse"
                    />
                    <div className="collapse" id="ageCollapse">
                      <span className="container-fluid">
                        <div
                          className={`row category-row sidebarrow ${!open && "tw-scale-0"}`}
                        >
                          <SideTag title="Infant" />
                          <SideTag title="Child" />
                          <SideTag title="Teen" />
                          <SideTag title="Young Adult" />
                          <SideTag title="Adult" />
                          <SideTag title="Senior" />
                          <SideTag title="Elder" />
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="row category-row">
                    <SubCollapseBtn
                      title="Gender"
                      aria="genderCollapse"
                      target="#genderCollapse"
                    />
                    <div className="collapse" id="genderCollapse">
                      <span className="container-fluid">
                        <div
                          className={`row category-row sidebarrow ${!open && "scale-0"}`}
                        >
                          <SideTag title="Male" />
                          <SideTag title="Female" />
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="row category-row">
                    <SubCollapseBtn
                      title="Ethnicity"
                      aria="ethnicityCollapse"
                      target="#ethnicityCollapse"
                    />
                    <div className="collapse" id="ethnicityCollapse">
                      <span className="container-fluid">
                        <div
                          className={`row category-row sidebarrow ${!open && "scale-0"}`}
                        >
                          <SideTag title="South African" />
                          <SideTag title="Middle Eastern" />
                          <SideTag title="East Asian" />
                          <SideTag title="Black" />
                          <SideTag title="Hispanic" />
                          <SideTag title="Indian" />
                          <SideTag title="White" />
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </li>

          {/* File Type*/}
          <li>
              <CollapseBtn
                target="#fileTypeCollapse"
                aria="fileTypeCollapse"
                pic="bx bx-file"
                title="File type"
              />
        <div className="collapse" id="fileTypeCollapse">
              <span className="container-fluid ">
                <div className={`row category-row sidebarrow ${!open && "scale-0"}`}>
                  <SideTag title="PSD" />
                  <SideTag title="AI" />
                  <SideTag title="EPS" />
                </div>
              </span>
            </div>
          </li>
          {/* Orientation*/}
          <li>
            
              <CollapseBtn
                title="Orientation"
                pic="bx bx-subdirectory-left"
                aria="orientationCollapse"
                target="#orientationCollapse"
              />
       
            <div className="collapse" id="orientationCollapse">
              <span className="container-fluid">
                <div className={`row category-row sidebarrow ${!open && "scale-0"}`}>
                  <SideTagWithPic title="Horizontal" pic="bx bx-rectangle" />
                  <SideTagWithPic
                    title="Vertical"
                    pic="bx bx-rectangle bx-rotate-90"
                  />
                  <SideTagWithPic
                    title="Square"
                    pic="bx bx-rectangle bx-rotate-90"
                  />
                  <SideTagWithPic title="Panoramic" pic="bx bx-rectangle" />
                </div>
              </span>
            </div>
          </li>
          {/*Style*/}
          <li>
           
              <CollapseBtn
                title="Style"
                pic="bi bi-brush"
                // info='bx bx-info-circle ml-14 mt-2 '
                aria="styleCollapse"
                target="#styleCollapse"
                className="mt-1"
              />
          
            <div className="collapse" id="styleCollapse">
              <span className="container-fluid">
                <div className={`row category-row sidebarrow ${!open && "scale-0"}`}>
                  <SideTag title="Watercolor" />
                  <SideTag title="Flat" />
                  <SideTag title="Cartoon" />
                  <SideTag title="Geometric" />
                  <SideTag title="Gradiant" />
                  <SideTag title="Isometric" />
                  <SideTag title="3D" />
                  <SideTag title="Hand-drawn" />
                </div>
              </span>
            </div>
          </li>
          {/**Quick Edit */}
          <li>
           
              <CollapseBtn
                title="Quick edit"
                pic="bi bi-brush"
                aria="editCollapse"
                target="#editCollapse"
                className="mt-1"
              />
        
            <div className="collapse" id="editCollapse">
              <span className="container-fluid">
                <div className={`row category-row sidebarrow ${!open && "scale-0"}`}>
                  <label
                    for="default-toggle"
                    className="cursor-pointer absolute "
                  >
                    <input
                      type="checkbox"
                      value=""
                      id="default-toggle"
                      className="sr-only peer absolute right-0"
                    />
                    <div className="absolute right-0 w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-white-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                  <p className="collapsep">
                    Edit online with <a className="link" href="/">Wepik</a> or
                    <br /> <a className="link" href="/">Storyset</a>
                  </p>
                </div>
              </span>
            </div>
          </li>
          {/**Puplish Date */}
          <li>
          
              <CollapseBtn
                title="Puplish Date"
                pic="bx bxs-calendar"
                aria="puplishDateCollapse"
                target="#puplishDateCollapse"
              />
          
            <div className="collapse" id="puplishDateCollapse">
              <span className="container-fluid">
                <div className={`row category-row sidebarrow ${!open && "scale-0"}`}>
                  <SideTag title="Last 3 months" />
                  <SideTag title="Last 6 months" />
                  <SideTag title="Last year" />
                </div>
              </span>
            </div>
          </li>
          {/**Choice */}
          <li>
            
              <CollapseBtn
                title="Freepik's choice"
                pic="bx bxs-star"
                aria="choiceCollapse"
                target="#choiceCollapse"
                info="bx bx-info-circle tw-ml-32 tw-mt-1 "
              />
         
            <div className="collapse" id="choiceCollapse">
              <span className="tw-container-fluid">
                <div className={`row tw-category-row ${!open && "scale-0"}`}>
                  <p className="tw-absolute tw-left-0 collapsep">See our favorites</p>
                  <label for="favToggle" className="tw-cursor-pointer tw-absolute ">
                    <input
                      type="checkbox"
                      value="0"
                      id="favToggle"
                      className="tw-sr-only tw-peer tw-absolute tw-right-0"
                    />
                    <div className="tw-absolute tw-right-0 tw-w-11 tw-h-6 tw-bg-gray-200 tw-peer-focus:tw-outline-none  tw-dark:tw-peer-focus:tw-ring-blue-800 tw-rounded-full tw-peer tw-dark:tw-bg-white-700 tw-peer-checked:tw-after:tw-translate-x-full tw-peer-checked:tw-after:tw-border-white tw-after:content-[''] tw-after:absolute tw-after:top-[2px] tw-after:left-[2px] tw-after:tw-bg-white tw-after:tw-border-gray-300 tw-after:tw-border tw-after:tw-rounded-full tw-after:tw-h-5 tw-after:tw-w-5 tw-after:tw-transition-all tw-dark:tw-border-gray-600 tw-peer-checked:tw-bg-blue-600"></div>
                  </label>
                </div>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h1
          className={` ${
            open ? "tw-p-0" : "tw-p-9"
          } tw-text2xl tw-font-semibold tw-flex-1 tw-h-screen`}
        >
          
        </h1>
      </div>
    </div>
  );
};

export default SideBar;
