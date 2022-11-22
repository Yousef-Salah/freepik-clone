import { useEffect, useState } from "react";

import "./filter-sideBar.css";

import Type from "./Type";
import Tag from "./Tag";
import SideBar from "./SideBar";
import breakPointObserver from "./breakPointObserver";

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
    <div className="container-fluid bar sidebar-search">
      {breakPoint == "desktop" && (
        <div className="">

        <div className="tw-track" >
        <SideBar />

          {" "}
          <div className="tw-flex tw-ml-20 tw-h-16 tagbar">
            
            <Type title="Photos" pic="bi bi-image tw-left-0" />
            <Type title="PSD" pic="bi bi-filetype-psd" />
            <Type title="All images" pic="bx bxs-shapes" />
            <Tag title="arrow" />
            <Tag title="background" />
            <Tag title="business card" />
            <Tag title="certificate" />
            <Tag title="christmas" />
            <Tag title="flower" />
            <Tag title="frame" />
            <Tag title="halloween" />
            <Tag title="infographic" />
            <Tag title="pattern" />
          </div>
          </div>
        </div>
      )}
      {breakPoint == "mobile" && (
        <div className="tw-track">
          <div className="flex  tw-h-16">
            <Type title="Photos" pic="bi bi-image tw-left-0" />
            <Type title="PSD" pic="bi bi-filetype-psd" />
            <Type title="All images" pic="bx bxs-shapes" />
            <Tag title="arrow" />
            <Tag title="background" />
            <Tag title="business card" />
            <Tag title="certificate" />
            <Tag title="christmas" />
            <Tag title="flower" />
            <Tag title="frame" />
            <Tag title="halloween" />
            <Tag title="infographic" />
            <Tag title="pattern" />
          </div>
        </div>
      )}
    </div>
  );
};
export default FilterSideBar;
