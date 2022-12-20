import { useState } from "react";
import "./filters.css";
const SubCollapseBtn = (props) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="container-fluid table-row tw-mt-5">
      <div className={`subcollapsebtn`}>
        <button
          className={`subbtn-collapse tw-w-100 `}
          type="button"
          id={props.id}
          data-bs-toggle="collapse"
          data-bs-target={props.target}
          aria-expanded="false"
          aria-controls={props.aria}
          onClick={() => setOpen(!open)}
        >
          <p className="tw-absolute tw-left-0 tw-font-thin collapsep">{props.title}</p>

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
          class={props.info}
          
        ></div>
      </div>
    </div>
  );
};
export default SubCollapseBtn;
