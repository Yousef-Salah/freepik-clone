// Imports
import { useEffect, useRef, useState } from "react";
import "./search-box.css";
import DropDownItem from "./SearchDropdown";
import DropDownButton from "./DropDownButton";
import { redirect, useNavigate } from "react-router-dom";

// Components

const SearchBox = (props) => {

  const [deleteTextIcon, setDeleteTextIcon] = useState("d-none");
  const [buttonLabel, setButtonLabel] = useState("Assets");
  const [inputPlaceHolder, setInputPlaceHolder] = useState("Search all assets");
  const searchInput = useRef(props.searchQuery.current.searchInput);
  const itemType = useRef(props.searchQuery.current.itemType);
  const category = useRef(props.searchQuery.current.category);
  const itemPricesList = useRef(props.searchQuery.current.itemPriceType);

  useEffect(() => {
    if(!props.mainPage && (props.page != 'category')) props.dataHandler();

    setButtonLabel(buttonLabelGenerator());
    setSearchInputPlaceHolder();
  }, [props.data]);

  const searchInputHanlder = (e) => {
    searchInput.current = e.target.value;

    if(searchInput.current === '') {
      setDeleteTextIcon('d-none');
    } else {
      setDeleteTextIcon('');
    }
  }

  const itemTypeHandler = (e) => {
    itemType.current = e.target.getAttribute('title');
    setButtonLabel(buttonLabelGenerator());
    setSearchInputPlaceHolder();
  }

  const itemPriceHandler = (e) => {

    const incomingPrice = e.target.getAttribute('title');

    if(!itemPricesList.current.length) {        // there is no selected input
      itemPricesList.current.push(incomingPrice);
    } 
    else if(itemPricesList.current.length == 2) {
      const index = itemPricesList.current.indexOf(incomingPrice);
      itemPricesList.current.splice(index,1);
    } 
    else {
      (itemPricesList.current[0] == incomingPrice) ?  itemPricesList.current.pop() : itemPricesList.current.push(incomingPrice);
    }
    
    setButtonLabel(buttonLabelGenerator());
    setSearchInputPlaceHolder();
  }

  const itemCategoryHandler = (e) => {
    let value = e.target.getAttribute('title');

    if(value === category.current) category.current = '';
    else category.current = value;

    setButtonLabel(buttonLabelGenerator());
    setSearchInputPlaceHolder();
  }

  const setSearchInputPlaceHolder = () => {
    let result = category.current;

    result += " " + itemType.current;

    if(category.current) result = "Search for " + result;
    else result = "Search for All " + result;

    setInputPlaceHolder(result);
  }
  
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

    label = itemType.current;

    // if(itemPrice.length) label += ', ' +  itemPrice.join(', ');

    if(itemPricesList.current) label += ' ' +  itemPricesList.current.join(', ');

    if(category.current) label += ', ' + category.current;
    
    return label;
  }
  
  const deleteText = (event) => {
    searchInput.current = '';
    event.target.value = '';
    setDeleteTextIcon("opacity-0");

    setTimeout(() => {
      if (!event.target.value)
        // in case user is writing while the d-none timeout is running
        setDeleteTextIcon("d-none");
    }, 1300);
  };

  const submitActionHandler = (event) => {

    event.preventDefault();

    if(event.target.value == '') return;
    
    let data = {
      searchInput: searchInput.current,
      itemType: itemType.current,           // assets collections
      itemPriceType: itemPricesList.current,       // free premium
      category: category.current,
    };
    
    props.searchQuery.current = data;

    if(!props.mainPage && (props.page != 'category')) {
      props.dataHandler();
    } 
    else return navigate(`${props.page == 'category' ? '../../' : ''}search/${searchInput.current}`);
  }

  const mainPage = (!props.mainPage) ? "sub-page-search" : "";

  return (
    <div className={mainPage} id="search-input-container">
      <form id="search" className="h-100 rounded" onSubmit={submitActionHandler}>
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
                  value={itemType.current}
                />
                <DropDownItem
                  type="radio"
                  title="Collections"
                  name="search-type"
                  for="collections"
                  inputHandler={itemTypeHandler}
                  value={itemType.current}
                />
            </div>
              <DropDownItem divider={true} />
            <div id="item-price">
              <DropDownItem 
                title="Free" 
                name="free" 
                for="free" 
                inputHandler={itemPriceHandler}
                value={itemPricesList.current.includes("Free") ? "Free" : ""}
              />
              <DropDownItem
                title="Premium"
                name="premium"
                for="premium-checkbox"
                iconClasses="fa-solid fa-crown"
                goldItem={true}
                inputHandler={itemPriceHandler}
                value={itemPricesList.current.includes("Premium") ? "Premium" : ""}
              />
            </div>
            <div id="item-category">
              <DropDownItem divider={true}  single/>
              <DropDownItem title="Vectors" name="vectors" for="vectors" inputHandler={itemCategoryHandler} category={category.current} single />
              <DropDownItem title="Photos" name="photos" for="photos" inputHandler={itemCategoryHandler} category={category.current} single />
              <DropDownItem title="PSDs" name="psd" for="psd" inputHandler={itemCategoryHandler} category={category.current} single />
              <DropDownItem title="Icons" name="icons" for="icon" inputHandler={itemCategoryHandler} category={category.current} single />
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
            value={searchInput.current}
          />
        </div>
        <div id="search-button" className="d-inline-block">
          <button type="submit" className="rounded-end">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

// Exports
export default SearchBox;
