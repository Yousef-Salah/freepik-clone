import React from "react";
import { useState } from "react";
import "./filter-sideBar.css";
import CollapseBtn from "./CollapseBtn";
import SubCollapseBtn from "./SubCollapseBtn";
import Colorr from "./Color";
import TagBar from "./TagBar";
import { SideBarData1 } from "./SideBarData1";
import Tag from "./Tag";
const SideBar = (props) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
    props.updateOpen(!open);
  }
  let sidebar= document.getElementById('sidebarr');
  let tagbar= document.getElementById('tagbar');
  
  // window.addEventListener('scroll',function(){

  //   // if(window.pageYOffset >= 390.7272644042969){
  //   //   document.getElementById('tagbar').classList.add('fixed-top');
  //   //   document.getElementById('sidebarr').classList.remove('position-absolute');
  //   //   document.getElementById('sidebarr').classList.add('fixed-top');
  //   // }
  //   // else {
  //   //   document.getElementById('tagbar').classList.remove('fixed-top');
  //   //   document.getElementById('sidebarr').classList.add('position-absolute');
  //   //   document.getElementById('sidebarr').classList.remove('fixed-top');
    
  //   // }
  
  return (
    <div  id='sidebarr' className={`sidebar flex position-absolute ${
      open ? "tw-w-64 translatex100" : "tw-w-0 translatex0"
    }`}  >
      <div
        className={`${
          open ? "tw-w-64" : "tw-w-0"
        } sidebar-content h-screen tw-relative tw-p-0 tw-pt-0 tw-sticky`}
      >
        <div
          className={` ${open && "tw-scale-0"}`}
          onClick={() => {setOpen(!open);
            props.updateOpen(!open);}}
        >
          <div className="filters">
            <div className="container-fluid">
              <button
                className="btn-light filtersbtn tw-items-center position-absolute tw-top-5 tw-left-1"
                type="button"
              >
                <i className="bi bi-sliders"></i>Filters
              </button>
            </div>
          </div>
        </div>
        <div
          className={`tw-flex tw-items-center tw-w-58 ${
            !open && "tw-scale-0"
          }`}
        >
          <i className="bi bi-sliders position-absolute tw-top-5"></i>
          <h1 className={`tw-text-black position-absolute tw-top-5  tw-left-6 tw-font-medium tw-text-xl`}
>
            Filters
            
          </h1>

          <button
            className="bx bx-arrow-from-right tw-text-3xl tw-mt-3	tw-hover:border tw-border-slate-100   tw-text-black tw-origin-right tw-font-medium tw-flex-end position-absolute tw-top-0 tw-right-0 "
            onClick={() => {setOpen(!open);
              props.updateOpen(!open);}}
          >
             
            {" "}
          </button>
        </div>
        <ul className={`sidebarcontent`}>
        {SideBarData1.map((val) => {
  const tags = val.tags;
  const colors = val.colors;
  const subs = val.subs;
  const age=val.age;
  return (
    <>
      <CollapseBtn
        title={val.collapse}
        pic={val.icon}
        target={'#' + val.id}
        aria={val.id}
        info={val.info}
      />
      <div className="collapse" id={val.id}>
        <span className="container-fluid ">
          <div className={`row category-row sidebarrow `}>
          {val.tag === 1
              ? tags.map((tag, index) => (
                  <Tag title={tag} pic={val.icon1[index]} />
                ))
              : null}
            {val.color === 1
              ? colors.map((color, index) => (
                  <Colorr color={color} cancel={val.icon1[index]} />
                ))
              : val.sub === 1
              ? subs.map((sub, index) => (
                <>
                  <CollapseBtn title={sub.title}  target={'#' + sub.id}
                   aria={sub.id} className1="subcollapsebtn" className="subbtn-collapse" className3="collapsep" />
                   <div className="collapse" id={sub.id}>
                <span className="container ">
          <div className={`row category-row  container`}>
          {sub.tags.map((tag, index) => (
            <Tag title={tag} />
          ))}
            </div>
            </span>
          </div>
                </>
              ))
              
                
              : val.tag === 0 && val.color === 0 && val.sub === 0
              ? <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                  <label className="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                </div>
              : null}
           
          </div>
        </span>
      </div>
    </>
  );
  
  

  
  
})
}
      
    
        </ul>
      </div>
      <div>
        
       
        </div>
      </div>
  );
};

export default SideBar;
