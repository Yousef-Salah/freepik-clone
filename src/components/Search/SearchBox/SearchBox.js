// Imports
import { useState } from "react";
import "./search-box.css";
import DropDownItem from "./SearchDropdown/SearchDropdown";

// Components

const SearchBox = (props) => {
  const [delteTextIcon, setDelteTextIcon] = useState("d-none");

  const checkDeleteIconStatus = (event) => {
    if (event.target.value) {
      setDelteTextIcon("opacity-100");
    } else {
      setDelteTextIcon("opacity-0");
      setTimeout(() => {
        if (!event.target.value)
          // in case user is writing while the d-none timeout is running
          setDelteTextIcon("d-none");
      }, 1300);
    }
  };

  const deleteText = (event) => {
    document.getElementById("search-value").value = "";
    checkDeleteIconStatus(event);
  };

  let classes = props.className;
  console.log("SearchBox ~ classes", classes)


  return (
    <div className={props.classlist} id="search-input-container">
      <form id="search" className="h-100 rounded">
        <div className="dropdown d-inline-block rounded-start">
          <button
            id="search-filters"
            type="button"
            className="dropdown-toggle rounded-start text-align-start"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            Assets
          </button>
          <div className="dropdown-menu">
            <div id="search-type">
              <div className="mb-2">
                <DropDownItem
                  type="radio"
                  title="Assets"
                  name="search-type"
                  for="assets"
                  checked={true}
                />
              </div>
              <div className="mb-2">
                <DropDownItem
                  type="radio"
                  title="Collections"
                  name="search-type"
                  for="collections"
                />
              </div>
            </div>
            <div className="mb-2">
              <DropDownItem divider={true} />
            </div>
            <div className="mb-2">
              <DropDownItem title="Free" name="free" for="free" />
            </div>
            <div className="mb-2">
              <DropDownItem
                title="Premium"
                name="premium"
                for="premium-checkbox"
                iconClasses="fa-solid fa-crown"
                goldItem={true}
              />
            </div>
            <div className="mb-2">
              <DropDownItem divider={true} />
            </div>
            <div className="mb-2">
              <DropDownItem title="Vectors" name="vectors" for="vectors" />
            </div>
            <div className="mb-2">
              <DropDownItem title="Photos" name="photos" for="photos" />
            </div>
            <div className="mb-2">
              <DropDownItem title="PSD" name="psd" for="psd" />
            </div>
            <div className="mb-2">
              <DropDownItem title="Icons" name="icon" for="icon" />
            </div>
          </div>
        </div>
        <div
          className="d-inline-block position-relative rounded-start"
          id="input-field"
        >
          <span className={delteTextIcon} onClick={deleteText}>
            <i className="fa-solid fa-square-xmark fa-2x "></i>
          </span>
          <input
            type="text"
            id="search-value"
            onChange={checkDeleteIconStatus}
            placeholder="Search.."
            className="rounded-start"
          />
        </div>
        <div id="search-button" className="d-inline-block">
          <button type="button" className="rounded-end">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

// Exports
export default SearchBox;
