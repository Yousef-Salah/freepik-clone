// Imports
import { useState } from "react";
import "./SearchInput.css";
import DropDownItem from "./SearchInput/DropDownItem";

// Components

const SearchInput = (props) => {


  const [delteTextIcon, setDelteTextIcon] = useState("d-none");

  const checkDeleteIconStatus = (event) => {
    if(event.target.value) {
      setDelteTextIcon("opacity-100");
    } else {
      setDelteTextIcon("opacity-0");
      setTimeout(() => {
        if(!event.target.value)       // in case user is writing while the d-none timeout is running
          setDelteTextIcon("d-none");
      },1300);
    }
  }

  const deleteText = (event) => {
    document.getElementById('search-value').value = "";
    checkDeleteIconStatus(event);
  }


  return (
    <div className={props.className + " rounded"} id="search-input-container">
      <form id="search" className="w-100 h-100 rounded" placeholder="search..">
        <div className="dropdown d-inline rounded-start">
          <button id="search-filters" type="button" className="dropdown-toggle rounded-start text-align-start" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
            Assets
          </button>
          <form className="dropdown-menu">
            <div id="search-type">
              <div className="mb-2">
                <DropDownItem type="radio" title="Assets" name="search-type" for="assets" checked={true} />
              </div>
              <div className="mb-2">
                <DropDownItem type="radio" title="Collections" name="search-type" for="collections" />
              </div>
            </div>
            <div className="mb-2">
              <DropDownItem divider={true} />
            </div>
            <div className="mb-2">
              <DropDownItem title="Free" name="free" for="free" />
            </div>
            <div className="mb-2">
              <DropDownItem title="Premium" name="premium" for="premium" iconClasses="fa-solid fa-crown" goldItem={true}/>
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
          </form>
        </div>
        <div className="d-inline-block position-relative" id="input-field">
          <span className={delteTextIcon} onClick={deleteText}><i class="fa-solid fa-square-xmark fa-2x "></i></span>
          <input type="text" id="search-value" onChange={checkDeleteIconStatus} placeholder="Search.." />
        </div>
        <button type="button" className="rounded-end" id="search-button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

// Exports
export default SearchInput;
