import React from 'react'
import "./filters.css";

const SearchResultHeader = (props) => {
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
    </>
  )
}

export default SearchResultHeader
