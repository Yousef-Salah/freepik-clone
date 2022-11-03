// Imports
import "./SearchInput.css";
import DropDownItem from "./SearchInput/DropDownItem";

// Components

const SearchInput = (props) => {
  return (
    <div className={props.className + " rounded"} id="search-input-container">
      <form id="search" className="w-100 h-100 rounded" placeholder="search..">
        <button id="search-filters" className="h-100 rounded-start"
            type="button"
            class=""
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Action
          <ul class="dropdown-menu">
            <div id="search-type">
              <DropDownItem
                type="radio"
                title="Assets"
                href="#"
                name="search-type"
              />
              <DropDownItem
                type="radio"
                title="Collections"
                href="#"
                name="search-type"
              />
            </div>
            <DropDownItem divider={true} />
            <DropDownItem title="Free" href="#" for="free" />
            <DropDownItem title="Premium" iconClasses="fa-solid fa-crown" href="#"  for="premium"/>
          </ul>
        </button>
        <input type="text" />
        <button type="button" className="rounded-end" id="search-button">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

// Exports
export default SearchInput;
