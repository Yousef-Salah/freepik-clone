import { useState } from "react";
import "./Filters.css";
const CollapseBtn = (props) => {
  const [open,setOpen] = useState(true);
  return (
    <div className="container-fluid table-row mt-5">
      <div className="collapsebtn">
        <button
          className="btn-collapse w-100"
          type="button"
          id={props.id}
          data-bs-toggle="collapse"
          data-bs-target={props.target}
          aria-expanded="false"
          aria-controls={props.aria}
          onClick={()=>setOpen(!open)}
          
        >
          <i className={props.pic + ` absolute left-0 mt-1`}></i>
          <p className="absolute left-6">{props.title} 
          
          </p>
          
          <i
            className={`bx bx-chevron-down arrow absolute right-0 mt-1 ${!open && 'rotate-180'}`}
            data-bs-toggle="collapse"
            data-bs-target={props.target}
            aria-expanded="false"
            aria-controls={props.aria}
          ></i>
        </button>
        <div class={props.info} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
            </div>
            
      </div>
    </div>
    
  );
};

export default CollapseBtn;
 