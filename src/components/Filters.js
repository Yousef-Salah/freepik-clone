import { click } from "@testing-library/user-event/dist/click";
import CollapseBtn from "./CollapseBtn";
import './Filters.css';
import FiltersBar from "./FiltersBar";
import Tag from "./Tag";
import 'boxicons';
import SideTag from "./SideTag";
import Type from "./type";
import SideTagWithPic from "./SideTagWithPic";
import { useState } from "react";

const Filters=()=>{
  const [open, setOpen] =useState(false);
const filtersClick=()=>{
setOpen(!open);

}
    return(
<div>
      <div className='filters'>
        <div className="container-fluid">
        <button className="btn  btn-light filtersbtn" onClick={filtersClick} > 
        <i class="bi bi-sliders"></i>Filters</button>
        </div>
        </div></div>
        /*
<div className="SideBar container-fluid">

<div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasScrollingLabel"></h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    
  <p>
  <CollapseBtn target="#categoryCollapse" aria="categryCollapse" pic='bx bx-category-alt' title="Categroy"/>
</p>
<div className="collapse" id="categoryCollapse">
  <span className="container-fluid">
    <div className="row category-row">
<SideTag title="Vectors"/> 
<SideTag title="Photos"  /> 
<SideTag title="PSD"/> 
<SideTag title="Icons" /> 
</div>
</span>


</div>
<CollapseBtn title="License" pic='bx bx-crown'  aria="licenseCollapse" target="#licenseCollapse"/>
<div className="collapse" id="licenseCollapse">
  <span className="container-fluid">
    <div className="row category-row">
<SideTag title="Free"/> 
<SideTagWithPic title='Premium' pic='bx bx-crown'/>
</div>
</span>

  </div>
  <CollapseBtn title="Color" pic='bx bx-palette'/>
  <CollapseBtn title="People" pic='bi bi-person-video' target="#peopleCollapse" aria='peopleCollapse'/>
  <div className="collapse" id="peopleCollapse">
  <span className="container-fluid">
    <div className="row category-row">
<SideTagWithPic title="With People" pic='bi bi-person-video'/> 
<SideTagWithPic title='No People' pic='bx bx-rectangle'/>
</div>
</span>

  </div>
</div>
</div>
</div>
</div>

</div>
    </div>*/
    );
}
export default Filters