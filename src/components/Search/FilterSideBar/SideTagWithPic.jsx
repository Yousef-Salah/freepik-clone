import React from 'react'; 
import './filters.scss';

const SideTagWithPic = ({pic, title}) => (
  <div className="side-tag">
    <button className="btn btn-outline-secondary sidetag" type="button">
      <i className={`${pic} sidetag-icon`}> </i>
      {title}
    </button>
  </div>
)

export default SideTagWithPic
