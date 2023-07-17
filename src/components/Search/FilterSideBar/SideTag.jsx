import React from 'react';
import './filters.scss';

const SideTag = ({title}) => (
  <div className="side-tag ">
    <button className="btn btn-outline-secondary  sidetag" type='button'>
      <p className="sidetaginner content-center	">{title}</p>
    </button>
  </div>
)

export default SideTag;
