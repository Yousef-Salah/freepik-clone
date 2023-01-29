import React from "react";
import Type from "./Tag";
import "./tag-bar.css";

import { useNavigate } from "react-router-dom";

const TagBar = (props) => {
  let data = props.data;
  return (
    <div>
      <div id={props.id} className={`tagbar  ` + props.className}>
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

