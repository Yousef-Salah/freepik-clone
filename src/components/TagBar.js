//

import "./TagBar.css";
import Type from "./type";
import Tag from "./Tag";
import Filters from "./Filters";
import SideBar from "./SideBar";

const TagBar = () => {
  return (
    <div className="container-fluid bar">
      <div className="track">
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
    </div>
  );
};
export default TagBar;
