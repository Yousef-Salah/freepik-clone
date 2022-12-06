import React from 'react'

const FontCard = (props) => {
  return (
    <>
      <div className="card ">
  <div className="row g-0">
    <div className="col-md-1">
      <img src="https://fonts.freepiklabs.com/storage/5801/conversions/1-thumb2x.jpg" className="img-fluid rounded-start"  />
    </div>
    <div className="col-md-11">
      <div className="card-body tw-relative">
        <h5 className={`card-font-title tw-absolute p36 +${props.class}`} >{props.title}</h5>
      </div>
    </div>
  </div>
</div>
  
    </>
  )
}
export default FontCard
