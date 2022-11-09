import React from 'react'
import Filters from './Filters'
import { useState } from 'react';
import './TagBar.css';
import SideTag from './SideTag';

const SideBar = () => {
  const getData= (data)=>{
    
  }
  const [open, setOpen] =useState(false);
  return (
    <div className='flex'>
      <div className={`${ open ? "w-64" :"w-0"} h-screen relative p-0 pt-0`}>
      <div className={`absolute cursor-pointer-right-3 ${open && 'scale-0'}`}
      onClick={()=>setOpen(!open)}>
          <div className='filters'>
        <div className="container-fluid">
<button className="btn-light filtersbtn items-center" type="button"> 
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
        <ul className={`flex pt-6 ${!open && 'scale-0'}` }>
        <div className="accordion" id="accordionExample5">
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0 left-4" id="headingOne5">
      <button className="
        accordion-button
        relative
        flex
        items-center
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        focus:outline-none
        
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true"
        aria-controls="collapseOne5 ">
          <i className='bx bx-category-alt absolute  left-4'></i>
Category      </button>

    </h2>
    <div id="collapseOne5" className="accordion-collapse collapse show flex" aria-labelledby="headingOne5">
      <div className="accordion-body py-4 px-5 flex w-64">
        <SideTag title='Photo'/>
        <SideTag title='Photo'/>
        <SideTag title='Vector'/>
      </div>
    </div>
  </div>
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingTwo5">
      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo5" aria-expanded="false"
        aria-controls="collapseTwo5">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo5" className="accordion-collapse collapse" aria-labelledby="headingTwo5">
      <div className="accordion-body py-4 px-5">
        <strong>This is the second item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingThree5">
      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree5" aria-expanded="false"
        aria-controls="collapseThree5">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree5" className="accordion-collapse collapse" aria-labelledby="headingThree5">
      <div className="accordion-body py-4 px-5">
        <strong>This is the third item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
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
