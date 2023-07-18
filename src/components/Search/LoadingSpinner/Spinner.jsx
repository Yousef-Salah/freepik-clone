import React from 'react';
import './loading-spinner.scss';

const Spinner = ({visible}) => (
  <div className={`position-relative ${!visible && 'd-none'}`}>
    <div
      className="spinner-border text-info"
      role="status"
      id="loading-spinner"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)

export default Spinner
