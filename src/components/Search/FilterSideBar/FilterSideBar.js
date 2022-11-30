import { useEffect, useState } from "react";

import "./filter-sideBar.css";

import Type from "./Type";
import SideBar from "./SideBar";
import breakPointObserver from "./breakPointObserver";
import TagBar from "./TagBar";

const breakPoints = {
  mobile: "(max-width:1095px)",
  desktop: "(min-width:1096px)",
};
const FilterSideBar = () => {
  const [breakPoint, isBreakPoint] = useState();
  useEffect(() => {
    breakPointObserver(breakPoints, isBreakPoint);
  }, [breakPoint]);

  return (
    <>
      {breakPoint == "desktop" && (
        <>
        <SideBar />
        
        </>
        
      )}
      {breakPoint == "mobile" && (
         <TagBar className='mobile'/>
      )}
    </>
  );
};
export default FilterSideBar;
