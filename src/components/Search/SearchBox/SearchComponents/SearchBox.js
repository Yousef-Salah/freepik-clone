// Imports
import { useEffect, useState } from "react";
import "./search-box.css";
import DropDownItem from "./SearchDropdown";
import DropDownButton from "./DropDownButton";
import { redirect, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

// Components

const SearchBox = (props) => {

  const [deleteTextIcon, setDeleteTextIcon] = useState("d-none");
  const [buttonLabel, setButtonLabel] = useState("Assets");
  const [inputPlaceHolder, setInputPlaceHolder] = useState("Search all assets");

  const [searchInput, setSearchInput] = useState('');
  const [itemType, setItemType] = useState('Assets');     // Assets or collections
  const [itemPrice, setItemPrice] = useState([]);   // Free or Premium
  const [category, setCategory] = useState('');


  useEffect(() => {
    // setCheckedCategory();
    if(!props.mainPage && (props.page != 'category')) props.dataHandler();
  }, []);

  const searchInputHanlder = (e) => {
    if(!e.target.value) {
      setSearchInput('');
      setDeleteTextIcon('d-none');
    } else {
      setSearchInput(e.target.value);
      setDeleteTextIcon('');
    }
    // checkDeleteIconStatus();
  }

  const itemTypeHandler = (e) => {
    let itemType = e.target.getAttribute('title');
    let buttonLabel = buttonLabelGenerator();
    setItemType(itemType);
    setButtonLabel(buttonLabel);
  }

  const itemPriceHandler = (e) => {
    // ! Not the perfect one

    const name = e.target.getAttribute('name');
    let prices = itemPrice;

    if(!itemPrice.length) {        // there is no selected input
      prices.push(name);
    } 
    else if(itemPrice.length == 2) {
      const index = itemPrice.indexOf(name);
      prices.splice(index,1);
    } 
    else {
      (prices[0] == name) ?  prices.pop() : prices.push(name);
    }

    setItemPrice(prices);
    setButtonLabel(buttonLabelGenerator());
  }
  
  // const [buttonColor, setButtonColor] = useState(true);   // search button hover bg color blue or not
  const [cookies, setCookie, removeCookie] = useCookies(["searchInput"]);
  const navigate = useNavigate();
  
  const checkDeleteIconStatus = (event) => {
    if (event.target.value) {
      setDeleteTextIcon("opacity-100");
    } else {
      setDeleteTextIcon("opacity-0");
      setTimeout(() => {
        if (!event.target.value)
          // in case user is writing while the d-none timeout is running
          setDeleteTextIcon("d-none");
      }, 1300);
    }
  };
  
  const  buttonLabelGenerator = ()=> { 
    
    let label = '';

    label = itemType;

    if(itemPrice.length) label += ', ' +  itemPrice.join(', ');

    if(category) label += ', ' + category;

    return label;
  }
  
  const deleteText = (event) => {
    document.getElementById("search-value").value = "";
    checkDeleteIconStatus(event);
  };

  const actionHandler = (event) => {

    event.preventDefault();
    
    let data = {
      search: searchInput,
      searchType: itemType,           // assets collections
      itemPriceType: itemPrice,       // free premium
      category: category,
    };
    
    props.setSearchQuery(data);

    if(!props.mainPage && (props.page != 'category')) {
      props.dataHandler();
    } 
    else return navigate(`${props.page == 'category' ? '../../' : ''}search/${document.getElementById("search-value")?.value}`);
  
    setCookie("searchInput", JSON.stringify(data), {
      path: "/"
    });
  }

  const mainPage = (!props.mainPage) ? "sub-page-search" : "";

  return (
    <div className={mainPage} id="search-input-container">
      <form id="search" className="h-100 rounded" onSubmit={actionHandler}>
        <div className="dropdown d-inline-block rounded-start">
        <DropDownButton buttonLabel={buttonLabel} />
          <div className="dropdown-menu" id="search-filter-items">
            <div id="search-type">
                <DropDownItem
                  type="radio"
                  title="Assets"
                  name="search-type"
                  for="assets"
                  inputHandler={itemTypeHandler}
                />
                <DropDownItem
                  type="radio"
                  title="Collections"
                  name="search-type"
                  for="collections"
                  inputHandler={itemTypeHandler}
                />
            </div>
              <DropDownItem divider={true} />
            <div id="item-price">
              <DropDownItem 
                title="Free" 
                name="free" 
                for="free" 
                inputHandler={itemPriceHandler}
              />
              <DropDownItem
                title="Premium"
                name="premium"
                for="premium-checkbox"
                iconClasses="fa-solid fa-crown"
                goldItem={true}
                inputHandler={itemPriceHandler}
              />
            </div>
            <div id="item-category">
              <DropDownItem divider={true}  />
              <DropDownItem title="Vectors" name="vectors" for="vectors"  />
              <DropDownItem title="Photos" name="photos" for="photos"  />
              <DropDownItem title="PSDs" name="psd" for="psd"  />
              <DropDownItem title="Icons" name="icons" for="icon"  />
            </div>
          </div>
        </div>
        <div
          className="d-inline-block position-relative rounded-start"
          id="input-field"
        >
          <span className={deleteTextIcon} onClick={deleteText}>
            <i className="fa-solid fa-square-xmark fa-2x "></i>
          </span>
          <input
            type="text"
            id="search-value"
            onChange={searchInputHanlder}
            placeholder={inputPlaceHolder}
            className="rounded-start"
            value={searchInput}
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
