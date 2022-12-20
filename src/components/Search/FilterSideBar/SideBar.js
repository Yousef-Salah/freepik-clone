import React from "react";
import { useState } from "react";
import "./filter-sideBar.css";
import CollapseBtn from "./CollapseBtn";
import SubCollapseBtn from "./SubCollapseBtn";
import Colorr from "./Color";
import TagBar from "./TagBar";
import { SideBarData } from "./SideBarData";
const SideBar = () => {
  const [open, setOpen] = useState(false);
  let sidebar= document.getElementById('sidebarr');
  let tagbar= document.getElementById('tagbar');
  window.addEventListener('scroll',function(){
    if(window.pageYOffset >= 390.7272644042969){
      document.getElementById('tagbar').classList.add('fixed-top');
      document.getElementById('sidebarr').classList.remove('tw-absolute');
      document.getElementById('sidebarr').classList.add('fixed-top');
    }
    else {
      document.getElementById('tagbar').classList.remove('fixed-top');
      document.getElementById('sidebarr').classList.add('tw-absolute');
      document.getElementById('sidebarr').classList.remove('fixed-top');
    
    }
  })
  return (
    <div  id='sidebarr' className={`sidebar flex tw-absolute ${
      open ? "tw-w-64" : "tw-w-0"
    }`}  style={{
      // Use the isOpen state to control the transform property
      transform: !open ? 'translateX(0)' : 'translateX(-100px)',
    }}>
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
          <i className="bi bi-sliders tw-absolute tw-top-5 tw-origin-left"></i>
          <h1 className={`tw-text-black tw-absolute tw-top-5 tw-origin-lef tw-left-6 tw-font-medium tw-text-xl`}
>
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
        {
      
      SideBarData.map((val,key)=>{
        return(
           <li key={key}>
            <div>
              {val.title}
              {val.tags}
            </div>
           </li>
        )})
    }
        </ul>
      </div>
      <div>
        
          <TagBar id='tagbar' className={` ${
            open ? "tw-inset-x-80 tw-top-0 " : "tw-inset-x-40 tw-top-0 "
          } `}/>

        </div>
      </div>
  );
};

export default SideBar;
