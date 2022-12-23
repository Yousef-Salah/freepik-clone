import React from 'react'
import { useNavigate } from 'react-router-dom'
const Colorr = (props) => {
  const navigate = useNavigate();
  return (
    <div className="colorr tw-w-5 tw-p-3">
    <button onClick={() => navigate(`/search/${props.color}`)}
     className={`tw-w-5 tw-h-5 tw-rounded-full tw-content-center ${props.color}  tw-text-white color tw-justify-content-center tw-absolute`}>
    <i className={props.cancel}></i>
    </button>
</div>

  )
}

export default Colorr
