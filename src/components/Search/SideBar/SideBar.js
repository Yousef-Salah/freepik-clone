import { React,useState } from "react";

const SideBar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggle=()=>{
    setOpen(!isOpen);
  }
  return (
    <main>
    <button style={{width:!isOpen ? "visible":"hidden"}} onClick={toggle}>
      Filters
      <div className="bi bi-sliders"/>
    </button>
    
    </main>
  )
}

export default SideBar
