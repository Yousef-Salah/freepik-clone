import CollapseBtn from "./CollapseBtn";
import Colorr from "./Color";
import SubCollapseBtn from "./SubCollapseBtn";
import Tag from "./Tag";

export const SideBarData = [
    {
        title: <CollapseBtn
        target="#categoryCollapse"
        aria="categryCollapse"
        pic="bx bx-category-alt"
        title="Categroy"
      />
,
       tags: <div className="collapse" id="categoryCollapse">
       <span className="container-fluid ">
         <div className={`row category-row sidebarrow `}>
           <Tag title="Vectors" />
           <Tag title="Photos" />
           <Tag title="PSD" />
           <Tag title="Icons" />
         </div>
       </span>
     </div>
    },
    {
        title: <CollapseBtn
        title="License"
        pic="bx bx-crown"
        type="button"
        aria="licenseCollapse"
        target="#licenseCollapse"
      />
,
       tags:  <div className="collapse" id="licenseCollapse">
       <span className="container-fluid">
         <div className={`row category-row sidebarrow`}>
           <Tag title="Free" />
           <Tag title="Premium" pic="bx bx-crown" />
         </div>
       </span>
     </div>
    },{
    title: <CollapseBtn
    title="Color"
    pic="bx bx-palette"
    aria="colorCollapse"
    target="#colorCollapse"
  />,
  tags:
  <div className="collapse" id="colorCollapse">
  <span className="container-fluid">
    <div className={`row category-row sidebarrow`}>
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
},{
    title:<CollapseBtn
    title="People"
    pic="bi bi-person-video"
    aria="peopleCollapse"
    target="#peopleCollapse"
    //  info='bx bx-info-circle ml-16 mt-2'
    className="mt-1"
  />,
  tags:<div className="collapse" id="peopleCollapse">
  <span className="container-fluid">
    <div className={`row category-row sidebarrow `}>
      <div className="row category-row">
        <SubCollapseBtn
          title="Number Of People"
          aria="numberOfPeopleCollapse"
          target="#numberOfPeopleCollapse"
        />
        <div className="collapse" id="numberOfPeopleCollapse">
          <span className="container-fluid">
            <div
              className={`row category-row sidebarrow `}
            >
              <Tag title="1" />
              <Tag title="2" />
              <Tag title="3" />
              <Tag title="4+" />
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
              className={`row category-row sidebarrow `}
            >
              <Tag title='infant'/>
              <Tag title="Child" />
              <Tag title="Teen" />
              <Tag title="Young Adult" />
              <Tag title="Adult" />
              <Tag title="Senior" />
              <Tag title="Elder" />
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
              className={`row category-row sidebarrow `}
            >
              <Tag title="Male" />
              <Tag title="Female" />
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
              className={`row category-row sidebarrow `}
            >
              <Tag title="South African" />
              <Tag title="Middle Eastern" />
              <Tag title="East Asian" />
              <Tag title="Black" />
              <Tag title="Hispanic" />
              <Tag title="Indian" />
              <Tag title="White" />
            </div>
          </span>
        </div>
      </div>
    </div>
  </span>
</div>
},
{
    title:<CollapseBtn
    target="#fileTypeCollapse"
    aria="fileTypeCollapse"
    pic="bx bx-file"
    title="File type"
  />,
  tags: <div className="collapse" id="fileTypeCollapse">
  <span className="container-fluid ">
    <div className={`row category-row sidebarrow`}>
      <Tag title="PSD" />
      <Tag title="AI" />
      <Tag title="EPS" />
    </div>
  </span>
</div>
},{
    title: <CollapseBtn
    title="Orientation"
    pic="bx bx-subdirectory-left"
    aria="orientationCollapse"
    target="#orientationCollapse"
  />,
tags:<div className="collapse" id="orientationCollapse">
<span className="container-fluid">
  <div className={`row category-row sidebarrow `}>
    <Tag title="Horizontal" pic="bx bx-rectangle" />
    <Tag
      title="Vertical"
      pic="bx bx-rectangle bx-rotate-90"
    />
    <Tag
      title="Square"
      pic="bx bx-rectangle bx-rotate-90"
    />
    <Tag title="Panoramic" pic="bx bx-rectangle" />
  </div>
</span>
</div>
},{
    title: <CollapseBtn
                title="Style"
                pic="bi bi-brush"
                // info='bx bx-info-circle ml-14 mt-2 '
                aria="styleCollapse"
                target="#styleCollapse"
                className="mt-1"
              />,
tags:<div className="collapse" id="styleCollapse">
<span className="container-fluid">
  <div className={`row category-row sidebarrow `}>
    <Tag title="Watercolor" />
    <Tag title="Flat" />
    <Tag title="Cartoon" />
    <Tag title="Geometric" />
    <Tag title="Gradiant" />
    <Tag title="Isometric" />
    <Tag title="3D" />
    <Tag title="Hand-drawn" />
  </div>
</span>
</div>},{
title:<CollapseBtn
title="Quick edit"
pic="bi bi-brush"
aria="editCollapse"
target="#editCollapse"
className="mt-1"
/>,
tags: <div className="collapse" id="editCollapse">
<span className="container-fluid">
  <div className={`row category-row sidebarrow `}>
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
},
{
    title:<CollapseBtn
    title="Puplish Date"
    pic="bx bxs-calendar"
    aria="puplishDateCollapse"
    target="#puplishDateCollapse"
  />,
  tags: <div className="collapse" id="puplishDateCollapse">
  <span className="container-fluid">
    <div className={`row category-row sidebarrow `}>
      <Tag title="Last 3 months" />
      <Tag title="Last 6 months" />
      <Tag title="Last year" />
    </div>
  </span>
</div>
},{
    title:<CollapseBtn
    title="Freepik's choice"
    pic="bx bxs-star"
    aria="choiceCollapse"
    target="#choiceCollapse"
    info="bx bx-info-circle tw-ml-32 tw-mt-1 "
  />
,tags:<div className="collapse" id="choiceCollapse">
<span className="tw-container-fluid">
  <div className={`row tw-category-row `}>
    <p className="tw-absolute tw-left-0 collapsep">See our favorites</p>
    <label className="inline-flex relative items-center cursor-pointer">
<input type="checkbox" value="" className="tw-sr-only tw-peer" checked />
<div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Checked toggle</span>
</label>

  </div>
</span>
</div>

}
]