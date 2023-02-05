import React from "react";
import Type from "./Tag";
import "./tag-bar.css";

import { useNavigate } from "react-router-dom";

const TagBar = (props) => {
  let data = props.data;
  addEventListener("scroll", (event) => {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 46) {
      document.getElementById("op-search-container").style.top = "0";
      document.getElementById("op-search-container").style.position = "fixed";
    } else {
      document.getElementById("op-search-container").style.top = "unset";
      document.getElementById("op-search-container").style.position =
        "relative";
    }
    if (document.documentElement.scrollTop > 205) {
      document.getElementsByClassName("tagbar")[0].style.position = "fixed";
      document.getElementsByClassName("tagbar")[0].style.top = "60px";
      document.getElementsByClassName("tagbar")[0].style.padding =
        "8px 0px 0px 0px";
      document.getElementsByClassName("tagbar")[0].style.left = "280px";
      document.getElementById("sidebarr").style.position = "fixed";
      document.getElementById("sidebarr").style.top = "60px";
      document.getElementsByClassName("filtersbtn")[0].style.top = "30px";
    } else {
      document.getElementsByClassName("tagbar")[0].style.position = "relative";
      document.getElementsByClassName("tagbar")[0].style.top = "0";
      document.getElementsByClassName("tagbar")[0].style.left = "170px";
      document.getElementById("sidebarr").style.position = "absolute";
      document.getElementById("sidebarr").style.top = "unset";
      document.getElementsByClassName("tagbar")[0].style.padding = "0";
      document.getElementsByClassName("filtersbtn")[0].style.top = "20px";
    }
  });
  return (
    <div className="tagbar-wrapper">
      <div id={props.id} className={`tagbar reset-relative ` + props.className}>
        {data.map((val, key) => {
          return (
            <Type
              title={val.title}
              pic={val.pic}
              className={val.className}
              className1={val.className1}
              page={val.page}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TagBar;

