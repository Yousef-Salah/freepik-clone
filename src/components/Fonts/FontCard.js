import React from 'react'
//../../assets/images/fonts/ageer.JPG
const FontCard = (props) => {
 
  return (
      <div className="font-card " >
  <div className="row g-0">
    <div className="col-md-2 font-image">
      <img src={props.img} className="img-fluid rounded-start b"  />
    </div>
    <div className="col-md-10">
      <div className="card-body tw-relative">
        <div className='d-flex name-count' style={{marginTop:`${props.margin}`}}>
      <p className='creator'>{props.fontName}</p>
      <p className='styles-count'>{props.stylesCount} Styles</p>
      </div>
        <p style={{
        fontFamily :`${props.font}`
        }} className={`card-font-title tw-absolute p36 +${props.class}` } >{props.title}</p>
      </div>
    </div>
  </div>
</div>
  )
}
export default FontCard
