import React from 'react'
import Filters from './Filters'
import { useState } from 'react';
import './TagBar.css';
import SideTag from './SideTag';
import CollapseBtn from './CollapseBtn';
import SideTagWithPic from './SideTagWithPic';

const SideBar = () => {
  const flipArrow= ()=>{
    console.log('oi');
  }
  const [open, setOpen] =useState(false);
  return (
    <div className='flex'>
      <div className={`${ open ? "w-64" :"w-0"} h-screen relative p-0 pt-0`}>
      <div className={`absolute cursor-pointer-right-3 ${open && 'scale-0'}`}
      onClick={()=>setOpen(!open)}>
          <div className='filters'>
        <div className="container-fluid">
      <button className="btn-light filtersbtn items-center content-center absolute top-5 left-1" type="button"> 
        <i className="bi bi-sliders"></i>Filters</button>
      </div>
      </div>
      </div>
      <div className={`flex gap-x-2 items-center w-64 mt-3 ${!open && 'scale-0'}`}>
        <i className='bi bi-sliders'></i>
        <h1 className={`text-black origin-left font-medium text-xl`}>
          Filters
        </h1>
        <button className='bx bx-arrow-from-right text-3xl mt-3 	hover:border border-slate-100   text-black origin-right font-medium flex-end absolute top-0 right-0 '
        onClick={()=>setOpen(!open)}></button>
    </div>
    <ul className={`pt-6 block` }>
                <li><div className={`flex gap-x-2 items-center w-64 mt-3  ${!open && 'scale-0'}`}>
                <CollapseBtn target="#categoryCollapse" aria="categryCollapse" pic='bx bx-category-alt' title="Categroy"/>
                </div>
                <div className="collapse" id="categoryCollapse">
  <span className="container-fluid ">
    <div className="row" >
      <div className='col-4'>
<SideTag title="Vectors"/> 
</div>
<div className='col-4'>
<SideTag title="Photos"  /> 
</div>
<div className='col-4'>
<SideTag title="PSD"  /> 
</div>
<div className='col-4 mt-2'>
<SideTag title="Icons"  /> 
</div>
</div>
</span>
</div>
                </li>
                <br/>
                <li>
                <div className={`flex gap-x-2 items-center w-64 mt-3 ${!open && 'scale-0'}`}>
                  
                <CollapseBtn title="License" pic='bx bx-crown' type='button' aria="licenseCollapse" target="#licenseCollapse" onClick={flipArrow}/>
                </div>
<div className="collapse" id="licenseCollapse">
  <span className="container-fluid">
    <div className="row category-row">
<SideTag title="Free"/> 
<SideTagWithPic title='Premium' pic='bx bx-crown'/>
</div>
</span>
</div>
                </li>
                <li>
                <div className={`flex gap-x-2 items-center w-64 mt-3 ${!open && 'scale-0'}`}>
                <CollapseBtn title="Color" pic='bx bx-palette'  aria="licenseCollapse" target="#licenseCollapse"/>
                </div>
<div className="collapse" id="colorCollapse">
  <span className="container-fluid">
    <div className="row category-row">
<SideTag title="Free"/> 
<SideTagWithPic title='Premium' pic='bx bx-crown'/>
</div>
</span>
</div>
                </li>
                <li>
                <div className={`flex gap-x-2 items-center w-64 mt-3 ${!open && 'scale-0'}`}>
                <CollapseBtn title="File type" pic='bx bx-file'  aria="fileCollapse" target="#fileCollapse" />
                </div>
<div className="collapse" id="fileCollapse">
  <span className="container-fluid">
    <div className="row category-row">
<SideTag title="JPG"/> 
<SideTag title="AI"/> 
<SideTag title="EPS"/> 
</div>
</span>
</div>
</li>
<li>
                <div className={`flex gap-x-2 items-center w-64 mt-3 ${!open && 'scale-0'}`}>
                <CollapseBtn title="Orientation" pic='bx bx-subdirectory-left'  aria="orientationCollapse" target="#orientationCollapse"/>
                </div>
<div className="collapse" id="orientationCollapse">
  <span className="container-fluid">
    <div className="row category-row">
<SideTagWithPic title="Horizontal" pic='bx bx-rectangle'/> 
<SideTagWithPic title='Vertical' pic='bx bx-rectangle bx-rotate-90'/>
</div>
</span>
</div> 
</li>
<li>
                <div className={`flex gap-x-2 items-center w-64 mt-3 ${!open && 'scale-0'}`}>
                <CollapseBtn title="Style" pic='bi bi-brush'  aria="styleCollapse" target="#styleCollapse"/>
                </div>
<div className="collapse" id="styleCollapse">
  <span className="container-fluid">
    <div className="row category-row">
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
                </ul>
                
    </div>
      <div>
        <h1 className='p-7 text2xl font-semibold flex-1 h-screen'>
        </h1>
      </div>
    </div>
  )
}

export default SideBar
