import React from 'react'
//../../assets/images/fonts/ageer.JPG
const FontCard = (props) => {
  return (
      <div className="font-card " >
  <div className="row g-0">
    <div className="col-md-2 font-image col-sm-2 col-2">
      <img src={props.img} className="img-fluid rounded-start b"  />
    </div>
    <div className="col-md-10 col-sm-10 col-10">
      <div className="card-body ">
        <div className='d-flex name-count margin25'>
      <p className='creator'>{props.fontName}</p>
      <p className='styles-count'>{props.stylesCount} Styles</p>
      </div>
        <p style={{
        fontFamily :`${props.font}`
        }} className={`card-font-title  p36 +${props.class}` } >{props.title}</p>
      </div>
    </div>
  </div>
</div>
  )
}
export default FontCard
