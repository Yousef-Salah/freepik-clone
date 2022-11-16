import React from 'react'

const Colorr = (props) => {
  return (
    <div class="colorr w-5 p-3">
    <button class={`w-5 h-5 rounded-full content-center ${props.color}  text-white color justify-content-center absolute`}>
    <i class={props.cancel}></i>
    </button>
</div>

  )
}

export default Colorr
