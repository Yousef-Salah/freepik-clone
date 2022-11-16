/**  <div className={`container-fluid table-row ${
      open ? " mt-5" : "mt-5 mb-0"
    }`}> */
import { useState } from "react";
import "./Filters.css";
const CollapseBtn = (props) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="container-fluid table-row mt-5">
      <div className={`${props.className} collapsebtn`}>
        <button
          className={`${props.className} btn-collapse w-64 `}
          type="button"
          id={props.id}
          data-bs-toggle="collapse"
          data-bs-target={props.target}
          aria-expanded="false"
          aria-controls={props.aria}
          onClick={() => setOpen(!open)}
        >
          <i className={props.pic + ` absolute left-0 mt-1`}></i>
          <p className={`absolute left-6 + ${props.className}`}>
            {props.title}
          </p>

          <i
            className={`bx bx-chevron-down arrow absolute right-0 mt-1 ${
              !open && "rotate-180"
            }`}
            data-bs-toggle="collapse"
            data-bs-target={props.target}
            aria-expanded="false"
            aria-controls={props.aria}
          ></i>
        </button>
        <div
          class={props.info}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Tooltip on top"
        ></div>
      </div>
    </div>
  );
};

export default CollapseBtn;
