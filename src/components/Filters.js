import CollapseBtn from "./CollapseBtn";
import "./Filters.css";
import Tag from "./Tag";
import "boxicons";
import SideTag from "./SideTag";
import Type from "./type";
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
