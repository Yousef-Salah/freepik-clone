import { useState } from "react";
function getClassItem(selected){
  if(selected){
    return 'btn btn-outline-secondary sidetag-selected';
  }
  else {
    return 'btn btn-outline-secondary  sidetag';
  }
} 
const SideTag = (props, onClick) => {
 
  return (
    <div className="side-tag  w-16">
      <button className={getClassItem(props.selected)} onClick={()=>props.onClick(props.title)} >
        <p className="sidetaginner content-center	" selected={false}>
        {props.title}
        </p>
      </button>
    </div>
  );
};
export default SideTag;
