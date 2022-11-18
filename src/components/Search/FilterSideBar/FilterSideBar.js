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
        <div className="track">
          {" "}
          <SideBar />
          <div className="flex ml-20 h-16">
            <Type title="Photos" pic="bi bi-image left-0" />
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
      {breakPoint == "mobile" && (
        <div className="track">
          <div className="flex  h-16">
            <Type title="Photos" pic="bi bi-image left-0" />
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
