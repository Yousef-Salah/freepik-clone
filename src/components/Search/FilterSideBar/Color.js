import React from 'react'

const Colorr = (props) => {
  return (
    <div class="colorr tw-w-5 tw-p-3">
    <button class={`tw-w-5 tw-h-5 tw-rounded-full tw-content-center ${props.color}  tw-text-white color tw-justify-content-center tw-absolute`}>
    <i class={props.cancel}></i>
    </button>
</div>

  )
}

export default Colorr
