import React from "react";
import Type from "./Tag";
const TagBar = (props) => {
  const TagBarData=[ {
    title: "Photos",
    pic: "bi bi-image tw-left-0",
    className: "type-class",
    className1: "type",
  },
  {
    title: "PSD",
    pic: "bi bi-filetype-psd",
    className: "type-class",
    className1: "type",
  },
  {
    title: "All images",
    pic: "bx bxs-shapes",
    className: "type-class",
    className1: "type",
  },
  {
    title: "arrow",
    pic: "bx bx-search icon",
    className: "tag-class",
    className1: "tag",
  },
  {
    title: "Background",
    pic: "bx bx-search icon",
    className: "tag-class",
    className1: "tag",
  },
  {
    title: "business card",
    pic: "bx bx-search icon",
    className: "tag-class",
    className1: "tag",
  },
  {
    title: "certificates",
    pic: "bx bx-search icon",
    className: "tag-class",
    className1: "tag",
  },
  {
    title: "christmas",
    pic: "bx bx-search icon",
    className: "tag-class",
    className1: "tag",
  },
  {
    title: "flower",
    pic: "bx bx-search icon",
    className: "tag-class",
    className1: "tag",
  },
  {
    title: "frame",
    pic: "bx bx-search icon",
    className: "tag-class",
    className1: "tag",
  },
  {
    title: "halloween",
    pic: "bx bx-search icon",
    className: "tag-class",
    className1: "tag",
  },
  {
    title: "infographic",
    pic: "bx bx-search icon",
    className: "tag-class",
    className1: "tag",
  },
  {
    title: "pattern",
    pic: "bx bx-search icon",
    className: "tag-class",
    className1: "tag",
  }]
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
