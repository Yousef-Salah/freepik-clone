import { useEffect, useState } from "react";
import "./filter-sideBar.css";
import SideBar from "./SideBar";
import TagBar from "./TagBar";
const FilterSideBar =()=> {
  return (
    <>
    <div className="d-md-none d-sm-none d-none d-lg-block">
        <SideBar />
    </div>
    <div className="d-lg-none ">
    <TagBar/>
    </div>
    </>
  );
};
export default FilterSideBar;
