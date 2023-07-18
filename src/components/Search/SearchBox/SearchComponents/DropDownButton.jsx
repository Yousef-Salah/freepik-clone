/* eslint-disable */
import React from 'react'
import propTypes from 'prop-types'
const DropDownButton = ({ buttonLabel }) => {
  return (
    <button
      id="search-filters"
      type="button"
      className="dropdown-toggle rounded-start text-align-start"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      {buttonLabel}
    </button>
  )
}

DropDownButton.propTypes = {
  buttonLabel: propTypes.string
}

export default DropDownButton
