import React from "react";
import Type from "./Type";
import { TagBarData } from "./TagBarData";
const TagBar = (props) => {
  return (
    <div>
      <div
      id={props.id}
        className={
          `tw-flex  tagbar tw-absolute  tw-h-100 ` + props.className
        }
      >
        {TagBarData.map((val, key) => {
          return (
            <Type
              title={val.title}
              pic={val.pic}
              className={val.className}
              className1={val.className1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TagBar;
