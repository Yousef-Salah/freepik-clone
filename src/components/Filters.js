import { click } from "@testing-library/user-event/dist/click";
import CollapseBtn from "./CollapseBtn";
import './Filters.css';
import FiltersBar from "./FiltersBar";
import Tag from "./Tag";
import 'boxicons';

const Filters=()=>{

    return(
<div>
      <div className='filters'>
        <div className="container-fluid">
        <button className="btn  btn-light filtersbtn" type="button" id="filters" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"> 
        <i class="bi bi-sliders"></i>Filters</button>
<div className="SideBar container-fluid">

<div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasScrollingLabel"><ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul></h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    
  <p>
  <CollapseBtn target="#categoryCollapse" aria="categryCollapse" pic='bx bx-category-alt' title="Categroy"/>
</p>
<div className="collapse" id="categoryCollapse">
<Tag title="Vectors" className="sidetag"/> 
<Tag title="Photos"  className="sidetag"/> 
<Tag title="PSD"  className="sidetag"/> 
<Tag title="Icons"  className="sidetag"/> 
</div>
<CollapseBtn title="License" pic='bx bx-crown' />
 <CollapseBtn title="Color" pic='bx bx-palette'/>
  </div>
</div>
</div>
</div>

</div>
</div>
    );
}
export default Filters