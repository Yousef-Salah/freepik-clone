// Imports
import { useEffect, useState } from "react";
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

  const [buttonLabel, SetbuttonLabel] = useState("Assets");

  // useEffect(() => {
  //   const resultType = document.querySelectorAll('#search-type input');
  //   const itemTypes = document.querySelectorAll('#item-type input');
  //   const categories = document.querySelectorAll('#item-category input');
  // })

  const  buttonLabelHandler = ()=> {
    // TODO: Bad Code !!
    const resultType = document.querySelectorAll('#search-type input');    // Assets or collections
    const itemTypes = document.querySelectorAll('#item-type input');       // Free or Premium
    const categories = document.querySelectorAll('#item-category input');  // Photos Vectors PSDs ...
   
    let searchResultOption;
    resultType.forEach(ele => {
      if(ele.checked == true) {
        searchResultOption = ele;
      }
    })
    
    let searchTypes = [].filter.call(itemTypes, (ele) => ele.checked == true);

    let resultantCategory;
    
    
    categories.forEach(ele => {
      if(ele.checked == true) {
        resultantCategory = ele;
      }
    })
    
    let resultantLabel = searchResultOption.getAttribute("title");    

    if(searchTypes != null && searchTypes != undefined) {
      searchTypes.forEach(ele => {
        if(ele.checked == true) {
          resultantLabel += ', ' + ele.getAttribute("title");
        }
      })
    }

    if(resultantCategory != null && resultantCategory != undefined) {
      resultantLabel +=  ', ' + resultantCategory.getAttribute("title");
    }
    
    SetbuttonLabel(resultantLabel);
  }

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
            {buttonLabel}
          </button>
          <div className="dropdown-menu" id="search-filter-items">
            <div id="search-type">
                <DropDownItem
                  type="radio"
                  title="Assets"
                  name="search-type"
                  for="assets"
                  checked={true}
                  handler={buttonLabelHandler}
                />
                <DropDownItem
                  type="radio"
                  title="Collections"
                  name="search-type"
                  for="collections"
                  handler={buttonLabelHandler}
                />
            </div>
              <DropDownItem divider={true} handler={buttonLabelHandler} />
            <div id="item-type">
              <DropDownItem title="Free" name="free" for="free" handler={buttonLabelHandler} />
              <DropDownItem
                title="Premium"
                name="premium"
                for="premium-checkbox"
                iconClasses="fa-solid fa-crown"
                goldItem={true}
                handler={buttonLabelHandler}
              />
            </div>
            <div id="item-category">
              <DropDownItem divider={true} handler={buttonLabelHandler} />
              <DropDownItem title="Vectors" name="vectors" for="vectors" handler={buttonLabelHandler} />
              <DropDownItem title="Photos" name="photos" for="photos" handler={buttonLabelHandler} />
              <DropDownItem title="PSD" name="psd" for="psd"handler={buttonLabelHandler}  />
              <DropDownItem title="Icons" name="icon" for="icon" handler={buttonLabelHandler} />
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
