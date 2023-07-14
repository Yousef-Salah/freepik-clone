// import React, { useRef, useState, useEffect } from 'react'

// const Test = () => {
//   const ref = useRef()
//   const [eWidth, setEWidth] = useState(0)

//   useEffect(() => {
//     const observer = new ResizeObserver((entries) => {
//       setEWidth(entries[0].contentRect.width)
//       console.log(eWidth)
//     })
//     observer.observe(ref.current)

//     return () => {
//       observer.unobserve(ref.current)
//     }
//   }, [])

//   function handleWidthChange(width) {
//     console.log(width)
//   }

//   let prevWidth = 0

//   const observer = new ResizeObserver((entries) => {
//     entries.forEach((entry) => {
//       const width = entry.borderBoxSize?.[0].inlineSize
//       if (typeof width === 'number' && width !== prevWidth) {
//         prevWidth = width
//         handleWidthChange(width)
//       }
//     })
//   })

//   observer.observe(document.body, { box: 'border-box' })

//   return (
//     <>
//       <div ref={ref}>Resizable div</div>
//       <div style={{ width: eWidth }}>
//         This div needs the same width as the resizable div
//       </div>
//     </>
//   )
// }

// export default Test
