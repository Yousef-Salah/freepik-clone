// Imports
import { useEffect, useState } from "react";
import "./search-box.css";
import DropDownItem from "./SearchDropdown";
import DropDownButton from "./DropDownButton";
import { redirect, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

// Components

const SearchBox = (props) => {

  const [delteTextIcon, setDelteTextIcon] = useState("d-none");
  const [buttonLabel, setButtonLabel] = useState("Assets");
  const [inputPlaceHolder, setInputPlaceHolder] = useState("Search all assets");
  const [cookies, setCookie, removeCookie] = useCookies(["searchInput"]);
  const navigate = useNavigate();
  let data;     // data will be object contains search input and
  
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

  // useEffect(() => {
  //   const resultType = document.querySelectorAll('#search-type input');
  //   const itemTypes = document.querySelectorAll('#item-type input');
  //   const categories = document.querySelectorAll('#item-category input');
  // })

  useEffect(() => {
    setCheckedCategory();
  });

  const setCheckedCategory = () => {
    const checkedBoxes = document.querySelectorAll('#item-category input');
    let previousBox; 

    checkedBoxes.forEach((element) => {
      if(element.checked == true) {
        previousBox = element.getAttribute("title");
      }
    });
    
    checkedBoxes.forEach((element) => {
      element.addEventListener('click', (event) => {
        let checkedItem = element.getAttribute("title");  // ! again bad code.

        checkedBoxes.forEach((element) => {
          element.checked = false;
        });

        checkedBoxes.forEach((element) => {
          if(element.getAttribute("title") == previousBox) {
            element.checked = false;
          }
          else if(element.getAttribute("title") == checkedItem) {
            element.checked = true;
          } else {
            setInputPlaceHolder("Search all assets")
          }
        });
      });
    });
  }

  const  buttonLabelHandler = ()=> {
    // ! Bad Code !!
    // ! Fix default selected input issue
    
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
    
    let resultantLabel = ""; 

    if(searchResultOption != null && searchResultOption != undefined) {
      resultantLabel += (searchResultOption.getAttribute("title"));  
    } else {
      resultantLabel += "Assets";
    }

    if(searchTypes != null && searchTypes != undefined) {
      searchTypes.forEach(ele => {
        if(ele.checked == true) {
          resultantLabel += ', ' + ele.getAttribute("title");
        }
      })
    }

    if(resultantCategory != null && resultantCategory != undefined) {
      let categoryLabel = resultantCategory.getAttribute("title");
      resultantLabel +=  ', ' + categoryLabel;
      setInputPlaceHolder("Search for " + categoryLabel.slice(0, -1));

      if(searchResultOption != null && searchResultOption != undefined) {
        if(searchResultOption.getAttribute("title") == "Collections");
        setInputPlaceHolder("Search for " + categoryLabel + " collections" )
      }
    }
    
    setButtonLabel(resultantLabel);
  }

  const deleteText = (event) => {
    document.getElementById("search-value").value = "";
    checkDeleteIconStatus(event);
  };

  const actionHandler = () => {
    // sessionStorage.setItem("search-input", document.getElementById("search-input-container"));

    let form = document.getElementById("search-input-container");
    
    let data = {};
    // let data = {
    //   search: form.getElementById("search-value"),

    //   filters: form.querySelectorAll("")
    // }

    // sessionStorage.setItem("search-value-object", "my name is yousef");
    
    setCookie("searchInput", document.getElementById("search-value")?.value, {
      path: "/"
    });

    // (props.mainPage) &&  return navigate(`search/${document.getElementById("search-value")?.value}`);
    if(props.mainPage) return navigate(`search/${document.getElementById("search-value")?.value}`);
  
  }

  const mainPage = (!props.mainPage) ? "sub-page-search" : "";

  return (
    <div className={mainPage} id="search-input-container">
      <form id="search" className="h-100 rounded" onSubmit={props.mainPage && actionHandler}>
        <div className="dropdown d-inline-block rounded-start">
        <DropDownButton buttonLabel={buttonLabel} />
          <div className="dropdown-menu" id="search-filter-items">
            <div id="search-type">
                <DropDownItem
                  type="radio"
                  title="Assets"
                  name="search-type"
                  for="assets"
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
              <DropDownItem title="PSDs" name="psd" for="psd"handler={buttonLabelHandler}  />
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
            placeholder={inputPlaceHolder}
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
