import React from 'react';

const Type = ({className, className1, pic, title}) => (
  <span className={`tw-shrink-0 ${className}`}>
    <button
      className={
        `tw-btn tw-btn-outline-secondary me-3 tw-shrink-0 tw-container-fluid tw-relative tw-flex ${className1}` 
      }
      type="button"
    >
      <i className={`${pic} icon`}> </i>
      {title}
    </button>
  </span>
)

export default Type
