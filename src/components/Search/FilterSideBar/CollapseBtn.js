/**  <div className={`container-fluid table-row ${
      open ? " mt-5" : "mt-5 mb-0"
    }`}> */
import { useState } from "react";
import "./filters.css";
const CollapseBtn = (props) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="container-fluid table-row mt-5">
      <div className={props.className ? props.className : "collapsebtn"}>
        <button
          className={props.className1 ? props.className1 : "btn-collapse w-64"}
          type="button"
          id={props.id}
          data-bs-toggle="collapse"
          data-bs-target={props.target}
          aria-expanded="false"
          aria-controls={props.aria}
          onClick={() => setOpen(!open)}
        >
          <i className={props.pic + ` tw-absolute tw-left-0 collapseicon`}></i>
          <p className={`tw-absolute tw-left-6 ${props.className3}`}>
            {props.title}
          </p>

          <i
            className={`bx bx-chevron-down arrow tw-absolute tw-right-0 tw-mt-1 ${
              !open && "tw-rotate-180"
            }`}
            data-bs-toggle="collapse"
            data-bs-target={props.target}
            aria-expanded="false"
            aria-controls={props.aria}
          ></i>
        </button>
        <div
          class={props.info ? "bx bx-info-circle tw-ml-16 tw-mt-1" : ""}
        ></div>
      </div>
    </div>
  );
};

export default CollapseBtn;
