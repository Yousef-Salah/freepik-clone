import React from 'react'
import "./filters.css";
import { useState } from 'react';
const SearchResultHeader = (props) => {
let popular = document.getElementById('popularDropBtn');
let recent = document.getElementById('recentDropBtn');
let [dropHeaderr,setDropHeader]=useState('Popular');
let [popular1,setPopular1]=useState('bx bx-check ');
let [recent1,setRecent1]=useState('unchecked');
let dropHeader='Popular';
function setPopular(){
  setDropHeader('Popular');
  console.log(dropHeaderr);
  setPopular1('bx bx-check ');
  setRecent1('unchecked');

}
function setRecent(){
  setDropHeader('Recent');
  setPopular1('unchecked');
  setRecent1('bx bx-check');
}
  return (
    <>
    <div className='container-fluid d-flex justify-content-center resultheader'>
      <h1 className='headerr'>

        {props.title}
      
      
      </h1>
      <br />
      
    </div>
    <p className='search-description'>
{props.description}

        </p>
       {/* <div className="dropdown sort">
    Sort By:
  <button className="btn btn-primary dropdown-toggle sort-by-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  {dropHeaderr}
  </button>
  <ul className="dropdown-menu sortmenu">
    <li><a className="dropdown-item sortbtn1"  onClick={setPopular} id='popularDropBtn' href="#"> <i class={popular1}></i> Popular</a></li>
    <li><a className="dropdown-item sortbtn2"  onClick={setRecent} id='recentDropBtn'href="#"> <i class={recent1}></i> Recent</a></li>
  </ul>
</div>
  */}
    </>
  )
}

export default SearchResultHeader
