import React from 'react'
import "./filters.css";

const SearchResultHeader = (props) => {
  return (
    <div className='container d-flex justify-content-center resultheader'>
      <h1 className=''>
      
{props.title}
<br/>
<br/>
      </h1>
    </div>
  )
}

export default SearchResultHeader
