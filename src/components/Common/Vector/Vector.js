import React, { useEffect, useState } from 'react'
import style from './vector.module.css'

export default function Vector() {
  //giving initial value for title by using useState
  let [title, setTitle] = useState('Free Vectors')
  return (
    <>
      {/* take title value from title variable since we put initial value fot it */}
      <h1 className="text-center mt-3 ">{title}</h1>
      {/* using this methos for using .module.css file instead of .css  */}
      <div className={`bg-success ${style.img_handler} ms-auto mt-5`}>
        {/* put images at public for easy reach src='./name_Dir_In_Public/image_name */}
        <img
          className={`   ${style.img_modal} margin-auto`}
          src="./Images/socialMedia.jpg"
          alt="image"
        />
      </div>
    </>
  )
}
