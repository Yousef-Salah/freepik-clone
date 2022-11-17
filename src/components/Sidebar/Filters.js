import CollapseBtn from "./CollapseBtn";
import "./filters.css";
import Tag from "./Tag";
import SideTag from "./SideTag";
import Type from "./Type";
import SideTagWithPic from "./SideTagWithPic";
import { useState } from "react";

const Filters = () => {
  return (
    <div>
      <div className="filters">
        <div className="container-fluid">
          <button className="btn  btn-light filtersbtn">
            <i class="bi bi-sliders"></i>Filters
          </button>
        </div>
      </div>
    </div>
  );
};
export default Filters;
