import React, { useState } from 'react';

import "./filter-sideBar.css";

import SideTag from "./SideTag";
import CollapseBtn from "./CollapseBtn";
import SideTagWithPic from "./SideTagWithPic";
import SubCollapseBtn from "./SubCollapseBtn";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sidebar flex">
      <div
        className={`${open ? "w-64" : "w-0"
          } sidebar-content h-screen relative p-0 pt-0 sticky`}
      >
        <div
          className={`absolute cursor-pointer-right-3  ${open && "scale-0"}`}
          onClick={() => setOpen(!open)}
        >
          <div className="filters">
            <div className="container-fluid">
              <button
                className="btn-light filtersbtn items-center content-center absolute top-5 left-1"
                type="button"
              >
                <i className="bi bi-sliders"></i>Filters
              </button>
            </div>
          </div>
        </div>
        <div
          className={`flex gap-x-2 items-center w-58 mt-3 ${!open && "scale-0"
            }`}
        >
          <i className="bi bi-sliders"></i>
          <h1 className={`text-black origin-left font-medium text-xl`}>
            Filters
          </h1>

          <button
            className="bx bx-arrow-from-right text-3xl mt-3	hover:border border-slate-100   text-black origin-right font-medium flex-end absolute top-0 right-0 "
            onClick={() => setOpen(!open)}
          >
            {" "}
          </button>
        </div>
        <ul className={`pt-0 block sidebarcontent`}>
          {/*Category*/}

          <li>
            <div
              className={`flex gap-x-2 items-center w-100 mt-1  ${!open && "scale-0"
                }`}
            >
              <CollapseBtn
                target="#categoryCollapse"
                aria="categryCollapse"
                pic="bx bx-category-alt"
                title="Categroy"
              />
            </div>
            <div className="collapse" id="categoryCollapse">
              <span className="container-fluid ">
                <div className={`row category-row ${!open && "scale-0"}`}>
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
            <div
              className={`flex gap-x-2 items-center w-64 mt-1 ${!open && "scale-0"
                }`}
            >
              <CollapseBtn
                title="License"
                pic="bx bx-crown"
                type="button"
                aria="licenseCollapse"
                target="#licenseCollapse"
              />
            </div>
            <div className="collapse" id="licenseCollapse">
              <span className="container-fluid">
                <div className={`row category-row ${!open && "scale-0"}`}>
                  <SideTag title="Free" />
                  <SideTagWithPic title="Premium" pic="bx bx-crown" />
                </div>
              </span>
            </div>
          </li>
          {/* Color*/}
          <li>
            <div
              className={`flex gap-x-2 items-center w-64 mt-1 ${!open && "scale-0"
                }`}
            >
              <CollapseBtn
                title="Color"
                pic="bx bx-palette"
                aria="colorCollapse"
                target="#colorCollapse"
              />
            </div>
            <div className="collapse" id="colorCollapse">
              <span className="container-fluid">
                <div className={`row category-row ${!open && "scale-0"}`}>
                  <div className="row category-row">
                    <i className="bx bx-circle "></i>
                  </div>
                </div>
              </span>
            </div>
          </li>
          {/**People */}
          <li>
            <div
              className={`flex gap-x-2 items-center w-64 mt-1 ${!open && "scale-0"
                }`}
            >
              <CollapseBtn
                title="People"
                pic="bi bi-person-video"
                aria="peopleCollapse"
                target="#peopleCollapse"
                //  info='bx bx-info-circle ml-16 mt-2'
                className="mt-1"
              />
            </div>
            <div className="collapse" id="peopleCollapse">
              <span className="container-fluid">
                <div className={`row category-row ${!open && "scale-0"}`}>
                  <div className="row category-row">
                    <SubCollapseBtn
                      title="Number Of People"
                      aria="numberOfPeopleCollapse"
                      target="#numberOfPeopleCollapse"
                    />
                    <div className="collapse" id="numberOfPeopleCollapse">
                      <span className="container-fluid">
                        <div
                          className={`row category-row ${!open && "scale-0"}`}
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
                          className={`row category-row ${!open && "scale-0"}`}
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
                          className={`row category-row ${!open && "scale-0"}`}
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
                          className={`row category-row ${!open && "scale-0"}`}
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
            <div
              className={`flex gap-x-2 items-center w-64 mt-1  ${!open && "scale-0"
                }`}
            >
              <CollapseBtn
                target="#fileTypeCollapse"
                aria="fileTypeCollapse"
                pic="bx bx-file"
                title="File type"
              />
            </div>
            <div className="collapse" id="fileTypeCollapse">
              <span className="container-fluid ">
                <div className={`row category-row ${!open && "scale-0"}`}>
                  <SideTag title="PSD" />
                  <SideTag title="AI" />
                  <SideTag title="EPS" />
                </div>
              </span>
            </div>
          </li>
          {/* Orientation*/}
          <li>
            <div
              className={`flex gap-x-2 items-center w-64 mt-1 ${!open && "scale-0"
                }`}
            >
              <CollapseBtn
                title="Orientation"
                pic="bx bx-subdirectory-left"
                aria="orientationCollapse"
                target="#orientationCollapse"
              />
            </div>
            <div className="collapse" id="orientationCollapse">
              <span className="container-fluid">
                <div className={`row category-row ${!open && "scale-0"}`}>
                  <SideTagWithPic title="Horizontal" pic="bx bx-rectangle" />
                  <SideTagWithPic
                    title="Vertical"
                    pic="bx bx-rectangle bx-rotate-90"
                  />
                  <SideTagWithPic
                    title="Square"
                    pic="bx bx-rectangle bx-rotate-90"
                  />
                </div>
              </span>
            </div>
          </li>
          {/*Style*/}
          <li>
            <div
              className={`flex gap-x-2 items-center w-64 mt-1 ${!open && "scale-0"
                }`}
            >
              <CollapseBtn
                title="Style"
                pic="bi bi-brush"
                // info='bx bx-info-circle ml-14 mt-2 '
                aria="styleCollapse"
                target="#styleCollapse"
                className="mt-1"
              />
            </div>
            <div className="collapse" id="styleCollapse">
              <span className="container-fluid">
                <div className={`row category-row ${!open && "scale-0"}`}>
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
            <div
              className={`flex gap-x-2 items-center w-64 mt-1 ${!open && "scale-0"
                }`}
            >
              <CollapseBtn
                title="Quick edit"
                pic="bi bi-brush"
                aria="editCollapse"
                target="#editCollapse"
                className="mt-1"
              />
            </div>
            <div className="collapse" id="editCollapse">
              <span className="container-fluid">
                <div className={`row category-row ${!open && "scale-0"}`}>
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
                    Edit online with <a href="/">Wepik</a> or
                    <br /> <a href="/">Storyset</a>
                  </p>
                </div>
              </span>
            </div>
          </li>
          {/**Puplish Date */}
          <li>
            <div
              className={`flex gap-x-2 items-center w-64 mt-1 ${!open && "scale-0"
                }`}
            >
              <CollapseBtn
                title="Puplish Date"
                pic="bx bxs-calendar"
                aria="puplishDateCollapse"
                target="#puplishDateCollapse"
              />
            </div>
            <div className="collapse" id="puplishDateCollapse">
              <span className="container-fluid">
                <div className={`row category-row ${!open && "scale-0"}`}>
                  <SideTag title="Last 3 months" />
                  <SideTag title="Last 6 months" />
                  <SideTag title="Last year" />
                </div>
              </span>
            </div>
          </li>
          {/**Choice */}
          <li>
            <div
              className={`flex gap-x-2 items-center w-64 mt-1 ${!open && "scale-0"
                }`}
            >
              <CollapseBtn
                title="Freepik's choice"
                pic="bx bxs-star"
                aria="choiceCollapse"
                target="#choiceCollapse"
                info="bx bx-info-circle ml-32 mt-1"
              />
            </div>
            <div className="collapse" id="choiceCollapse">
              <span className="container-fluid">
                <div className={`row category-row ${!open && "scale-0"}`}>
                  <p className="absolute left-0 collapsep">See our favorites</p>
                  <label for="favToggle" className="cursor-pointer absolute ">
                    <input
                      type="checkbox"
                      value=""
                      id="favToggle"
                      className="sr-only peer absolute right-0"
                    />
                    <div className="absolute right-0 w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-white-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h1
          className={` ${open ? "p-0" : "p-9"
            } text2xl font-semibold flex-1 h-screen`}
        ></h1>
      </div>
    </div>
  );
};

export default SideBar;
